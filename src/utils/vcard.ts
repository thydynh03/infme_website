import type { VCardConfig } from '../types/profile';

/**
 * Builds a valid RFC 6350 / vCard 3.0 formatted string
 */
export function generateVCardString(config: VCardConfig): string {
  const lines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'PRODID:-//Digital Contact Card//EN',
  ];

  // Name
  const lastName = (config.lastName || '').trim();
  const firstName = (config.firstName || '').trim();
  const fullName = `${lastName} ${firstName}`.trim() || `${firstName} ${lastName}`.trim();

  lines.push(`N:${escapeVCardText(lastName)};${escapeVCardText(firstName)};;;`);
  lines.push(`FN:${escapeVCardText(fullName)}`);

  // Organization & Title
  if (config.organization) {
    lines.push(`ORG:${escapeVCardText(config.organization)}`);
  }
  if (config.title) {
    lines.push(`TITLE:${escapeVCardText(config.title)}`);
  }

  // Phone numbers
  if (config.cellPhone) {
    const cleanPhone = config.cellPhone.replace(/\s+/g, '');
    lines.push(`TEL;TYPE=CELL,VOICE:${cleanPhone}`);
  }
  if (config.workPhone) {
    const cleanPhone = config.workPhone.replace(/\s+/g, '');
    lines.push(`TEL;TYPE=WORK,VOICE:${cleanPhone}`);
  }

  // Email
  if (config.email) {
    lines.push(`EMAIL;TYPE=INTERNET,PREF:${config.email.trim()}`);
  }

  // Website
  if (config.url) {
    lines.push(`URL:${config.url.trim()}`);
  }

  // Address
  if (config.address) {
    const city = config.address.city || '';
    const country = config.address.country || '';
    lines.push(`ADR;TYPE=HOME:;;;${escapeVCardText(city)};;;${escapeVCardText(country)}`);
  }

  // Note / Bio
  if (config.note) {
    lines.push(`NOTE:${escapeVCardText(config.note)}`);
  }

  // Social profiles
  if (config.socials && config.socials.length > 0) {
    for (const social of config.socials) {
      if (social.url) {
        lines.push(`X-SOCIALPROFILE;type=${social.platform.toLowerCase()}:${social.url}`);
      }
    }
  }

  lines.push('END:VCARD');
  return lines.join('\r\n');
}

/**
 * Escapes characters for vCard syntax
 */
function escapeVCardText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

/**
 * Initiates download of the .vcf contact file
 */
export function downloadVCard(config: VCardConfig): boolean {
  try {
    const vcardContent = generateVCardString(config);
    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const filename = `${(config.lastName + '_' + config.firstName).toLowerCase().replace(/[^a-z0-9_-]/g, '_') || 'contact'}.vcf`;

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 150);

    return true;
  } catch (error) {
    console.error('Failed to generate or download vCard:', error);
    return false;
  }
}
