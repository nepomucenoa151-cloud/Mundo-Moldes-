/**
 * Script de Otimização e Conversão de Imagens para WebP / AVIF
 * Desenvolvido para Mundo dos Moldes (Next.js / Vite / Vercel)
 * 
 * Requisitos:
 * npm install -D sharp
 * 
 * Execução:
 * node scripts/convert-to-webp.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');

async function processDirectory(dirPath) {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (err) {
    console.error('\n⚠️  O pacote "sharp" não está instalado.');
    console.log('👉 Instale com: npm install -D sharp');
    console.log('   Em seguida, execute novamente: node scripts/convert-to-webp.js\n');
    return;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const baseName = path.basename(entry.name, ext);
        const webpOutputPath = path.join(dirPath, `${baseName}.webp`);
        const avifOutputPath = path.join(dirPath, `${baseName}.avif`);

        try {
          const originalStats = fs.statSync(fullPath);
          const originalKb = (originalStats.size / 1024).toFixed(1);

          // 1. Gerar WebP com qualidade 82% (alta fidelidade visual e alta compressão)
          await sharp(fullPath)
            .webp({ quality: 82, effort: 6 })
            .toFile(webpOutputPath);

          const webpStats = fs.statSync(webpOutputPath);
          const webpKb = (webpStats.size / 1024).toFixed(1);
          const webpSavings = (((originalStats.size - webpStats.size) / originalStats.size) * 100).toFixed(1);

          // 2. Opcional: Gerar AVIF para navegadores modernos
          await sharp(fullPath)
            .avif({ quality: 75, effort: 4 })
            .toFile(avifOutputPath);

          console.log(`✅ [Convertido]: ${path.relative(PUBLIC_DIR, fullPath)} (${originalKb} KB)`);
          console.log(`   └─> WebP: ${webpKb} KB (-${webpSavings}%)`);
        } catch (error) {
          console.error(`❌ Erro ao converter ${entry.name}:`, error.message);
        }
      }
    }
  }
}

console.log('🚀 Iniciando compressão e conversão de imagens em /public...\n');
processDirectory(PUBLIC_DIR)
  .then(() => console.log('\n🎉 Processamento concluído com sucesso!'))
  .catch((err) => console.error('Erro geral:', err));
