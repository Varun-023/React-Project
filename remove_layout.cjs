const fs = require('fs');
const path = require('path');
const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/import\s+MainLayout\s+from\s+['"]\.\.\/layouts\/MainLayout['"];?\n?/g, '');
    content = content.replace(/<MainLayout>/g, '<>');
    content = content.replace(/<\/MainLayout>/g, '</>');
    fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Replaced MainLayout in pages');
