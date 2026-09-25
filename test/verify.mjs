import { generateVCardString } from '../src/utils/vcard.ts';
import { profileConfig } from '../src/data/profileConfig.ts';
import QRCode from 'qrcode';

async function testAll() {
  console.log('--- 1. Testing Default vCard Generation ---');
  const vcf = generateVCardString(profileConfig.vcard);
  if (!vcf.includes('BEGIN:VCARD') || !vcf.includes('END:VCARD')) {
    throw new Error('vCard missing BEGIN or END tags');
  }
  if (!vcf.includes(profileConfig.vcard.firstName)) {
    throw new Error('vCard missing First Name');
  }
  if (!vcf.includes(profileConfig.vcard.cellPhone || '')) {
    throw new Error('vCard missing Cell Phone');
  }
  if (!vcf.includes(profileConfig.vcard.email || '')) {
    throw new Error('vCard missing Email');
  }
  console.log('✓ Default vCard generation test PASSED');

  console.log('--- 2. Testing Edge Case vCard (minimal fields) ---');
  const minimalVcf = generateVCardString({
    firstName: 'Thy',
    lastName: 'Dinh',
    title: 'Developer',
  });
  if (!minimalVcf.includes('FN:Dinh Thy') || !minimalVcf.includes('TITLE:Developer')) {
    throw new Error('Minimal vCard failed');
  }
  console.log('✓ Minimal vCard generation test PASSED');

  console.log('--- 3. Testing QR Code Generation with diverse URLs ---');
  const testUrls = [
    'https://t.me/thydynhprovjp',
    'https://zalo.me/0359731884',
    'http://localhost:5173',
  ];
  for (const u of testUrls) {
    const qrDataUrl = await QRCode.toDataURL(u, { width: 250 });
    if (!qrDataUrl.startsWith('data:image/png;base64,')) {
      throw new Error(`QR generation failed for ${u}`);
    }
  }
  console.log('✓ QR code generation test with diverse URLs PASSED');

  console.log('--- 4. Testing Contact Channels Model ---');
  for (const c of profileConfig.contacts) {
    if (!c.id || !c.label || !c.url || !c.icon) {
      throw new Error(`Contact item missing required fields: ${JSON.stringify(c)}`);
    }
  }
  console.log(`✓ All ${profileConfig.contacts.length} contacts validated`);

  console.log('\n=== ALL EDGE CASE & SUITE TESTS PASSED ===');
}

testAll().catch((err) => {
  console.error('Test FAILED:', err);
  process.exit(1);
});
