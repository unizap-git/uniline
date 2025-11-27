const fs = require('fs');
const path = require('path');

// Read all SVG files from public/icons/outline and public/icons/solid
const outlineDir = path.join(__dirname, '../public/icons/outline');
const solidDir = path.join(__dirname, '../public/icons/solid');

// Get categories from folder structure
function getCategoriesFromFolders(baseDir) {
  if (!fs.existsSync(baseDir)) {
    console.log(`Directory ${baseDir} does not exist`);
    return {};
  }

  const icons = {};
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  entries.forEach(entry => {
    if (entry.isDirectory()) {
      // This is a category folder
      const categoryId = entry.name;
      const categoryPath = path.join(baseDir, categoryId);

      // Get all SVG files in this category
      const files = fs.readdirSync(categoryPath);
      files.forEach(file => {
        if (file.endsWith('.svg')) {
          const iconName = file.replace('.svg', '');
          const svgPath = path.join(categoryPath, file);
          const svgContent = fs.readFileSync(svgPath, 'utf-8');

          // Store icon data
          if (!icons[iconName]) {
            icons[iconName] = {};
          }
          icons[iconName].name = iconName;
          icons[iconName].category = categoryId;

          return { iconName, svgContent };
        }
      });
    }
  });

  return icons;
}

// Process both outline and solid directories
const allIcons = {};

// Process outline icons
console.log('Processing outline icons...');
const outlineEntries = fs.readdirSync(outlineDir, { withFileTypes: true });
outlineEntries.forEach(entry => {
  if (entry.isDirectory()) {
    const categoryId = entry.name;
    const categoryPath = path.join(outlineDir, categoryId);
    const files = fs.readdirSync(categoryPath);

    files.forEach(file => {
      if (file.endsWith('.svg')) {
        const iconName = file.replace('.svg', '');
        const svgPath = path.join(categoryPath, file);
        const svgContent = fs.readFileSync(svgPath, 'utf-8');

        if (!allIcons[iconName]) {
          allIcons[iconName] = {
            name: iconName,
            category: categoryId
          };
        }
        allIcons[iconName].outline = svgContent;
      }
    });
  }
});

// Process solid icons
console.log('Processing solid icons...');
const solidEntries = fs.readdirSync(solidDir, { withFileTypes: true });
solidEntries.forEach(entry => {
  if (entry.isDirectory()) {
    const categoryId = entry.name;
    const categoryPath = path.join(solidDir, categoryId);
    const files = fs.readdirSync(categoryPath);

    files.forEach(file => {
      if (file.endsWith('.svg')) {
        const iconName = file.replace('.svg', '');
        const svgPath = path.join(categoryPath, file);
        const svgContent = fs.readFileSync(svgPath, 'utf-8');

        if (!allIcons[iconName]) {
          allIcons[iconName] = {
            name: iconName,
            category: categoryId
          };
        }
        allIcons[iconName].solid = svgContent;
      }
    });
  }
});

// Filter icons that have both outline and solid versions
const completeIcons = Object.values(allIcons).filter(icon => icon.outline && icon.solid);

console.log(`Found ${completeIcons.length} complete icons (with both outline and solid)`);

// Write to JSON file
const outputPath = path.join(__dirname, '../lib/icons.json');
fs.writeFileSync(outputPath, JSON.stringify(completeIcons, null, 2));

console.log(`\nGenerated ${outputPath}`);
console.log(`Total icons: ${completeIcons.length}`);
