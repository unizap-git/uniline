const fs = require('fs');
const path = require('path');

// Enhanced keyword mappings for better search
const keywordMap = {
  // Common synonyms
  'home': ['house', 'main', 'dashboard', 'start'],
  'search': ['find', 'magnify', 'lookup', 'zoom'],
  'user': ['person', 'profile', 'account', 'avatar'],
  'settings': ['config', 'preferences', 'options', 'gear', 'cog'],
  'cog': ['config', 'preferences', 'options', 'gear', 'cog','settings'],
  'menu': ['hamburger', 'navigation', 'nav', 'bars'],
  'close': ['exit', 'cancel', 'remove', 'delete', 'x'],
  'delete': ['trash', 'bin', 'remove', 'discard'],
  'edit': ['pencil', 'write', 'modify', 'change'],
  'check': ['tick', 'confirm', 'success', 'done', 'complete'],
  'add': ['plus', 'new', 'create', 'insert'],
  'remove': ['minus', 'subtract', 'delete'],
  'heart': ['like', 'favorite', 'love', 'bookmark'],
  'star': ['favorite', 'rate', 'rating', 'bookmark'],
  'arrow': ['direction', 'pointer', 'navigate'],
  'mail': ['email', 'message', 'envelope', 'letter'],
  'phone': ['call', 'telephone', 'mobile', 'contact'],
  'calendar': ['date', 'schedule', 'time', 'event'],
  'down': ['arrow-down', 'bottom', 'download', 'lower'],
  'up': ['arrow-up', 'top', 'upload', 'raise'],
  'left': ['arrow-left', 'previous', 'back','logout','sign out'],
  'right': ['arrow-right', 'next', 'forward','login', 'sign in'],
  'pointing': ['shrink', 'minimize', 'contract'],
  'pointing': ['expand', 'maximize', 'enlarge', 'fullscreen'],
  'compress': ['shrink', 'minimize', 'contract', 'collapse'],
  'expand': ['expand', 'maximize', 'enlarge', 'fullscreen'],
  'clock': ['time', 'timer', 'watch', 'hour'],
  'download': ['save', 'export', 'get'],
  'upload': ['import', 'send', 'transfer'],
  'share': ['send', 'forward', 'export', 'publish'],
  'lock': ['secure', 'private', 'password', 'protect'],
  'unlock': ['open', 'access', 'public'],
  'eye': ['view', 'visible', 'show', 'preview'],
  'file': ['document', 'paper', 'page'],
  'folder': ['directory', 'collection', 'storage'],
  'image': ['picture', 'photo', 'gallery'],
  'video': ['play', 'movie', 'film', 'media'],
  'music': ['audio', 'sound', 'song', 'note'],
  'camera': ['photo', 'picture', 'snapshot'],
  'refresh': ['reload', 'sync', 'update', 'rotate'],
  'copy': ['duplicate', 'clone', 'replicate'],
  'paste': ['insert', 'add'],
  'cut': ['scissors', 'remove'],
  'save': ['disk', 'floppy', 'store'],
  'print': ['printer', 'output'],
  'warning': ['alert', 'caution', 'danger', 'error'],
  'info': ['information', 'help', 'about'],
  'question': ['help', 'faq', 'support'],
  'notification': ['bell', 'alert', 'reminder'],
  'message': ['chat', 'comment', 'talk', 'conversation'],
  'send': ['paper-plane', 'submit', 'share'],
  'location': ['pin', 'map', 'place', 'marker'],
  'sun': ['light', 'day', 'brightness', 'weather'],
  'moon': ['night', 'dark', 'sleep'],
  'cloud': ['weather', 'storage', 'backup', 'internet', 'upload', 'download'],
  'wallet': ['money', 'payment', 'finance', 'cash'],
  'shopping': ['cart', 'bag', 'store', 'buy'],
  'gift': ['present', 'reward', 'bonus'],
  'bookmark': ['save', 'favorite', 'mark'],
  'tag': ['label', 'category', 'classify'],
  'filter': ['sort', 'organize', 'refine'],
  'link': ['chain', 'url', 'connect', 'hyperlink'],
  'attachment': ['clip', 'attach', 'file'],
  'code': ['programming', 'developer', 'script'],
  'terminal': ['console', 'command', 'shell'],
  'database': ['storage', 'data', 'sql'],
  'server': ['cloud', 'hosting', 'backend'],
  'wifi': ['wireless', 'internet', 'network'],
  'bluetooth': ['wireless', 'connect'],
  'battery': ['power', 'charge', 'energy'],
  'volume': ['sound', 'audio', 'speaker'],
  'mic': ['microphone', 'voice', 'record'],
  'monitor': ['screen', 'display', 'desktop'],
  'mobile': ['phone', 'smartphone', 'device'],
  'tablet': ['ipad', 'device', 'touch'],
  'laptop': ['computer', 'notebook', 'pc'],
  'keyboard': ['type', 'input'],
  'mouse': ['pointer', 'cursor', 'click'],
  'briefcase': ['work', 'job', 'business'],
  'building': ['office', 'company', 'corporate'],
  'chart': ['graph', 'statistics', 'data'],
  'percent': ['percentage', 'ratio', 'proportion', 'offer', 'discount'],
  'chat': ['message', 'conversation', 'talk', 'comment'],
  'receipt': ['invoice', 'bill', 'payment', 'purchase'],
  'mark': ['close', 'cancel', 'delete', 'remove'],
  'adjustments': ['settings', 'config', 'preferences', 'options'],
  'zoom':['magnify', 'enlarge', 'scale', 'search'],

};

// Function to generate enhanced keywords for an icon
function generateKeywords(iconName, categoryName) {
  const nameParts = iconName.split('-');
  const keywords = new Set([...nameParts, categoryName.toLowerCase()]);

  // Add mapped keywords for each part of the icon name
  nameParts.forEach(part => {
    if (keywordMap[part]) {
      keywordMap[part].forEach(keyword => keywords.add(keyword));
    }
  });

  return Array.from(keywords);
}

// Read all SVG files from public/icons/outline and public/icons/solid
const outlineDir = path.join(__dirname, '../public/icons/outline');
const solidDir = path.join(__dirname, '../public/icons/solid');

// Get categories from folder structure
function getCategoriesFromFolders(baseDir) {
  if (!fs.existsSync(baseDir)) {
    console.log(`Directory ${baseDir} does not exist`);
    return {};
  }

  const categories = {};
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  entries.forEach(entry => {
    if (entry.isDirectory()) {
      // This is a category folder
      const categoryId = entry.name;
      const categoryPath = path.join(baseDir, categoryId);

      // Get all SVG files in this category
      const files = fs.readdirSync(categoryPath);
      const icons = files
        .filter(file => file.endsWith('.svg'))
        .map(file => file.replace('.svg', ''));

      if (icons.length > 0) {
        categories[categoryId] = icons;
      }
    }
  });

  return categories;
}

const outlineCategories = getCategoriesFromFolders(outlineDir);
const solidCategories = getCategoriesFromFolders(solidDir);

// Get all unique category IDs
const allCategoryIds = new Set([
  ...Object.keys(outlineCategories),
  ...Object.keys(solidCategories)
]);

console.log(`Found ${allCategoryIds.size} categories`);

// Build final categorized structure with icons that exist in both outline and solid
const categorized = {};
allCategoryIds.forEach(categoryId => {
  const outlineIcons = outlineCategories[categoryId] || [];
  const solidIcons = solidCategories[categoryId] || [];

  // Only include icons that exist in both outline and solid versions
  const commonIcons = outlineIcons.filter(icon => solidIcons.includes(icon));

  if (commonIcons.length > 0) {
    categorized[categoryId] = commonIcons;
    console.log(`  ${categoryId}: ${commonIcons.length} icons`);
  }
});

// Generate TypeScript file
const output = `// Auto-generated icon data from public/icons
// This file is generated by scripts/generateIconList.js
// DO NOT EDIT MANUALLY

export interface IconItem {
  name: string;
  componentName: string;
  category: string;
  keywords: string[];
}

export interface IconCategory {
  id: string;
  name: string;
  icons: IconItem[];
}

export const iconCategories: IconCategory[] = [
${Object.entries(categorized)
  .filter(([_, icons]) => icons.length > 0)
  .map(([category, icons]) => {
    // Convert category id to display name (e.g., "arrows" -> "Arrows", "system-icons" -> "System Icons")
    const categoryName = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return `  {
    id: "${category}",
    name: "${categoryName}",
    icons: [
${icons.map(icon => `      { name: "${icon}", componentName: "${icon}", category: "${category}", keywords: ${JSON.stringify(generateKeywords(icon, categoryName))} }`).join(',\n')}
    ]
  }`;
  })
  .join(',\n')}
];
`;

// Write to file
const outputPath = path.join(__dirname, '../lib/iconData.ts');
fs.writeFileSync(outputPath, output);

console.log(`\nGenerated ${outputPath}`);
console.log('Categories:', Object.keys(categorized).filter(k => categorized[k].length > 0));
