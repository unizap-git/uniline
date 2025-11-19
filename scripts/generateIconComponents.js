const fs = require('fs');
const path = require('path');

// Directories
const outlineDir = path.join(__dirname, '../public/icons/outline');
const solidDir = path.join(__dirname, '../public/icons/solid');
const componentsDir = path.join(__dirname, '../icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Helper function to convert icon name to PascalCase component name
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Helper function to extract SVG path content from SVG file
function extractSvgContent(svgFilePath) {
  const svgContent = fs.readFileSync(svgFilePath, 'utf8');

  // Remove XML declaration and comments
  let cleanedSvg = svgContent
    .replace(/<\?xml.*?\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();

  // Extract content between <svg> tags
  const svgMatch = cleanedSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgMatch) {
    console.warn(`Could not parse SVG: ${svgFilePath}`);
    return '';
  }

  let innerContent = svgMatch[1].trim();

  // Remove stroke, stroke-width, stroke-linecap, stroke-linejoin, and fill attributes
  // from the inner content so they can be controlled by props
  innerContent = innerContent
    .replace(/\s+stroke="[^"]*"/g, '')
    .replace(/\s+stroke-width="[^"]*"/g, '')
    .replace(/\s+stroke-linecap="[^"]*"/g, '')
    .replace(/\s+stroke-linejoin="[^"]*"/g, '')
    .replace(/\s+fill="[^"]*"/g, '');

  // Extract viewBox attribute if it exists
  const viewBoxMatch = cleanedSvg.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  return { innerContent, viewBox };
}

// Get all icons from a directory
function getAllIcons(baseDir, type = 'outline') {
  const icons = [];

  if (!fs.existsSync(baseDir)) {
    console.log(`Directory ${baseDir} does not exist`);
    return icons;
  }

  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  entries.forEach(entry => {
    if (entry.isDirectory()) {
      // This is a category folder
      const categoryId = entry.name;
      const categoryPath = path.join(baseDir, categoryId);
      const files = fs.readdirSync(categoryPath);

      files
        .filter(file => file.endsWith('.svg'))
        .forEach(file => {
          const iconName = file.replace('.svg', '');
          const svgPath = path.join(categoryPath, file);
          const { innerContent, viewBox } = extractSvgContent(svgPath);

          icons.push({
            name: iconName,
            category: categoryId,
            componentName: toPascalCase(iconName),
            outlineSvg: type === 'outline' ? innerContent : null,
            solidSvg: type === 'solid' ? innerContent : null,
            viewBox
          });
        });
    }
  });

  return icons;
}

// Generate component template with embedded SVG
function generateComponent(icon, outlineSvg, solidSvg, viewBox) {
  const componentName = icon.componentName;

  // Escape backticks, quotes, ${}, and newlines in SVG content
  const escapeSvg = (svg) => svg.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/\n/g, ' ').replace(/\r/g, '');

  const outlineSvgEscaped = escapeSvg(outlineSvg);
  const solidSvgEscaped = solidSvg ? escapeSvg(solidSvg) : outlineSvgEscaped;

  // Use a different variable name if component is named 'React' to avoid conflicts
  const reactVarName = componentName === 'React' ? 'ReactLib' : 'React';

  return `'use strict';

var ${reactVarName} = require('react');

function ${componentName}(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '${solidSvgEscaped}' : '${outlineSvgEscaped}';

  return ${reactVarName}.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '${viewBox}',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = ${componentName};
`;
}

// Get all icons from outline directory
const outlineIcons = getAllIcons(outlineDir, 'outline');
console.log(`Found ${outlineIcons.length} outline icons`);

// Get all icons from solid directory
const solidIcons = getAllIcons(solidDir, 'solid');
console.log(`Found ${solidIcons.length} solid icons`);

// Create a map of solid icons by component name for lookup
const solidIconsMap = new Map();
solidIcons.forEach(icon => {
  solidIconsMap.set(icon.componentName, icon.solidSvg);
});

// Deduplicate outline icons by component name (keep first occurrence)
const uniqueIcons = new Map();
const duplicates = [];

outlineIcons.forEach(icon => {
  if (uniqueIcons.has(icon.componentName)) {
    duplicates.push({
      componentName: icon.componentName,
      first: uniqueIcons.get(icon.componentName),
      duplicate: icon
    });
  } else {
    uniqueIcons.set(icon.componentName, icon);
  }
});

if (duplicates.length > 0) {
  console.log(`\nWarning: Found ${duplicates.length} duplicate component names:`);
  duplicates.forEach(({ componentName, first, duplicate }) => {
    console.log(`  - ${componentName}: ${first.category}/${first.name} vs ${duplicate.category}/${duplicate.name}`);
  });
  console.log('  (Keeping first occurrence only)\n');
}

// Generate component for each unique icon
let generatedCount = 0;
const exportStatements = [];

uniqueIcons.forEach((icon) => {
  const { componentName, outlineSvg, viewBox } = icon;

  // Get corresponding solid SVG if it exists
  const solidSvg = solidIconsMap.get(componentName) || null;

  const componentCode = generateComponent(icon, outlineSvg, solidSvg, viewBox);
  const componentPath = path.join(componentsDir, `${componentName}.js`);
  const dtsPath = path.join(componentsDir, `${componentName}.d.ts`);

  fs.writeFileSync(componentPath, componentCode);

  // Generate TypeScript declaration file
  const dtsContent = `import { IconComponent } from '../types';
declare const ${componentName}: IconComponent;
export default ${componentName};
`;
  fs.writeFileSync(dtsPath, dtsContent);

  exportStatements.push(`exports.${componentName} = require('./icons/${componentName}.js');`);
  generatedCount++;
});

console.log(`Generated ${generatedCount} unique icon components in ${componentsDir}`);

// Generate index.js with all exports (CommonJS)
const indexContent = `// Auto-generated icon exports
// This file is generated by scripts/generateIconComponents.js
// DO NOT EDIT MANUALLY
'use strict';

// Generic Icon component (for dynamic usage)
exports.Icon = require('./Icon.js');

// Individual icon components (for direct usage with tree-shaking)
${exportStatements.join('\n')}
`;

const indexPath = path.join(__dirname, '../index.js');
fs.writeFileSync(indexPath, indexContent);

// Generate index.d.ts with all TypeScript exports
const typeExports = Array.from(uniqueIcons.values()).map(icon =>
  `export { default as ${icon.componentName} } from './icons/${icon.componentName}';`
);

const indexDtsContent = `// Auto-generated TypeScript declarations
// This file is generated by scripts/generateIconComponents.js
// DO NOT EDIT MANUALLY

export { default as Icon } from './Icon';
export type { IconProps, IconComponent, DynamicIconProps } from './types';
export type { DynamicIconProps as IconDynamicProps } from './Icon';

// Individual icon components
${typeExports.join('\n')}
`;

const indexDtsPath = path.join(__dirname, '../index.d.ts');
fs.writeFileSync(indexDtsPath, indexDtsContent);

console.log(`\nGenerated ${indexPath} with ${exportStatements.length} icon exports`);
console.log(`Generated ${indexDtsPath} with TypeScript declarations`);
console.log('\nUsage examples:');
console.log('  import { Airplay, Heart, Star } from "unicon";');
console.log('  <Airplay size={44} strokeWidth={0.8} color="#4f4e45" />');
console.log('  <Heart size={44} strokeWidth={0.8} color="#e74c3c" fill />');
