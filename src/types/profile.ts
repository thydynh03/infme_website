export type ContactType = 'direct' | 'messaging' | 'social' | 'web';

export type ContactIconName =
  | 'phone'
  | 'zalo'
  | 'facebook'
  | 'telegram'
  | 'mail'
  | 'instagram'
  | 'globe'
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'whatsapp'
  | 'threads'
  | 'tiktok'
  | 'youtube';

export interface ContactItem {
  id: string;
  type: ContactType;
  label: string;
  value: string;
  url: string;
  icon: ContactIconName | string;
  description?: string;
  copyable?: boolean;
  copyValue?: string;
  external?: boolean;
  accentColor?: string;
  badge?: string;
}

export interface PersonProfile {
  name: string;
  title: string;
  organization?: string;
  location: string;
  timezone?: string;
  bio: string;
  avatarUrl?: string;
  avatarInitials?: string;
  status?: {
    available: boolean;
    label: string;
  };
}

export interface VCardConfig {
  firstName: string;
  lastName: string;
  title: string;
  organization?: string;
  cellPhone?: string;
  workPhone?: string;
  email?: string;
  url?: string;
  address?: {
    city?: string;
    country?: string;
  };
  note?: string;
  socials?: Array<{
    platform: string;
    url: string;
  }>;
}

export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  themeColorLight: string;
  themeColorDark: string;
}

export interface ProfileConfiguration {
  person: PersonProfile;
  contacts: ContactItem[];
  vcard: VCardConfig;
  seo: SeoConfig;
}
