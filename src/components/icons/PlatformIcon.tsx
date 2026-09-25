import React from 'react';
import {
  Phone,
  Mail,
  Globe,
  MessageCircle,
  MapPin,
  Check,
  Copy,
  Share2,
  QrCode,
  Download,
  Sun,
  Moon,
  Laptop,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import type { ContactIconName } from '../../types/profile';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: ContactIconName | string;
  className?: string;
  size?: number;
}

/**
 * Pixel-perfect SVG for Zalo
 */
export const ZaloIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, width = 20, height = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.43 3.86 7.04-.15.86-.68 2.5-1.07 3.39-.1.22.12.45.33.34 1.15-.6 3.03-1.63 4.09-2.27.9.27 1.83.42 2.79.42 5.52 0 10-4.03 10-9S17.52 2 12 2zm1.08 12.35h-3.4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.46l-2.85-3.64c-.08-.1-.13-.23-.13-.36 0-.28.22-.5.5-.5h3.18c.28 0 .5.22.5.5s-.22.5-.5.5h-2.24l2.85 3.64c.08.1.13.23.13.36 0 .28-.22.5-.5.5zm2.84 0h-.02c-.32 0-.58-.26-.58-.58v-4.19c0-.32.26-.58.58-.58.32 0 .58.26.58.58v4.19c0 .32-.26.58-.58.58z" />
  </svg>
);

/**
 * Pixel-perfect SVG for Telegram
 */
export const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, width = 20, height = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.01c-.13.57-.46.71-.94.44l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.53.26l.19-2.64 4.81-4.35c.21-.19-.05-.29-.32-.11l-5.95 3.75-2.56-.8c-.56-.17-.57-.56.12-.83l10-3.86c.46-.17.87.11.73.88z" />
  </svg>
);

/**
 * Pixel-perfect SVG for Facebook
 */
export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, width = 20, height = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/**
 * Pixel-perfect SVG for Instagram
 */
export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, width = 20, height = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/**
 * Pixel-perfect SVG for GitHub
 */
export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, width = 20, height = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

/**
 * Pixel-perfect SVG for LinkedIn
 */
export const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, width = 20, height = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

/**
 * Pixel-perfect SVG for X (formerly Twitter)
 */
export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, width = 20, height = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const PlatformIcon: React.FC<IconProps> = ({ name, className = 'w-5 h-5', size = 20, ...props }) => {
  switch (name.toLowerCase()) {
    case 'phone':
      return <Phone className={className} size={size} {...props} />;
    case 'mail':
    case 'email':
      return <Mail className={className} size={size} {...props} />;
    case 'zalo':
      return <ZaloIcon className={className} width={size} height={size} {...props} />;
    case 'telegram':
      return <TelegramIcon className={className} width={size} height={size} {...props} />;
    case 'facebook':
      return <FacebookIcon className={className} width={size} height={size} {...props} />;
    case 'globe':
    case 'web':
    case 'website':
      return <Globe className={className} size={size} {...props} />;
    case 'instagram':
      return <InstagramIcon className={className} width={size} height={size} {...props} />;
    case 'github':
      return <GithubIcon className={className} width={size} height={size} {...props} />;
    case 'linkedin':
      return <LinkedinIcon className={className} width={size} height={size} {...props} />;
    case 'twitter':
    case 'x':
      return <TwitterIcon className={className} width={size} height={size} {...props} />;
    case 'whatsapp':
      return <MessageCircle className={className} size={size} {...props} />;
    case 'mappin':
    case 'map-pin':
    case 'location':
      return <MapPin className={className} size={size} {...props} />;
    default:
      return <ExternalLink className={className} size={size} {...props} />;
  }
};

export {
  Phone,
  Mail,
  Globe,
  MapPin,
  Check,
  Copy,
  Share2,
  QrCode,
  Download,
  Sun,
  Moon,
  Laptop,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
};
