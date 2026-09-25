# Digital Contact Card — Personal Profile Website

A high-end, production-ready digital business card and contact website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

Designed with restraint, elegance, and intentional typography. Mobile-first, responsive from 320px up to desktop (with a restrained 500px card width), lightweight (<95kB gzipped bundle), accessible, and equipped with vCard generation, dynamic QR code sharing, Web Share API, clipboard copying, and light/dark theme modes.

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 🛠️ How to Customize Your Contact Card

All personal details, contact channels, SEO metadata, and vCard properties are stored in a **single configuration file**:

📁 [`src/data/profileConfig.ts`](file:///c:/Users/LENOVO/Documents/infme_website/src/data/profileConfig.ts)

You can customize everything here **without touching any UI code or styles**.

### 1. Personal Information
```typescript
person: {
  name: 'Nguyễn Văn A',
  title: 'Product Designer · Developer',
  organization: 'Studio Craft',
  location: 'Hanoi, Vietnam',
  timezone: 'GMT+7',
  bio: 'Building useful digital products, thoughtful design systems, and exploring new craft-driven web experiences.',
  avatarUrl: '/path-to-your-avatar.jpg', // Or leave undefined to use initials
  avatarInitials: 'NA',
  status: {
    available: true,
    label: 'Available for new opportunities',
  },
}
```

### 2. Contact Channels
Each channel supports:
- `id`: unique string identifier
- `label`: display platform name (e.g. `'Zalo'`, `'Telegram'`, `'Phone'`, `'Email'`)
- `value`: display text/handle (e.g. `'+84 912 345 678'`, `'@username'`)
- `url`: action link (`tel:...`, `mailto:...`, `https://zalo.me/...`, `https://t.me/...`)
- `icon`: `'phone' | 'zalo' | 'telegram' | 'facebook' | 'mail' | 'instagram' | 'github' | 'linkedin' | 'globe' | 'twitter' | 'whatsapp'`
- `description`: optional subtle hint (e.g. `'Chat with me on Zalo'`)
- `copyable`: `true` to render a discreet "Copy" button that copies the value to the clipboard without triggering the link navigation
- `copyValue`: optional raw value to copy if different from display text
- `external`: `true` to open in a new tab (`rel="noopener noreferrer"`)

Example:
```typescript
{
  id: 'zalo',
  type: 'messaging',
  label: 'Zalo',
  value: 'Chat on Zalo',
  url: 'https://zalo.me/0912345678',
  icon: 'zalo',
  description: 'Quick messaging & consultation',
  copyable: true,
  copyValue: '0912345678',
  external: true,
  accentColor: '#0068FF',
}
```

### 3. Save Contact (.vcf vCard)
```typescript
vcard: {
  firstName: 'Văn A',
  lastName: 'Nguyễn',
  title: 'Product Designer · Developer',
  cellPhone: '+84912345678',
  email: 'hello@nguyenvana.dev',
  url: 'https://nguyenvana.dev',
  // ...
}
```
When a visitor taps **Save Contact**, the site automatically generates and downloads a standard RFC 6350 vCard file (`.vcf`) compatible with iOS Contacts, Android Contacts, and desktop address books.

### 4. SEO & Metadata
```typescript
seo: {
  title: 'Nguyễn Văn A — Contact & Digital Card',
  description: 'Connect with Nguyễn Văn A via phone, Zalo, Telegram, Facebook, or email.',
  canonicalUrl: 'https://nguyenvana.dev',
  themeColorLight: '#f8f8fa',
  themeColorDark: '#0c0d10',
}
```

---

## 🎨 Design System & Highlights

- **Anti "AI-Slop" Aesthetic**:
  - No purple/blue neon gradients
  - No generic floating blobs or 3D mockups
  - No excessive glassmorphism or oversized rounded corners
  - No marketing fluff, fake statistics, or testimonials
  - Pure, functional, editorial digital business card feel.
- **Mobile-First & Desktop Refined**:
  - Fluid mobile layout (down to 320px width)
  - Desktop view remains a compact, centered card (max 500px width)
  - Minimum 48px comfortable tap targets
- **Light & Dark Mode**:
  - Automatically respects user's system OS preference
  - Manual toggle button supporting Light, Dark, and System modes
  - Inline pre-hydration script in `index.html` preventing theme flicker on reload
- **Micro-Interactions**:
  - Isolated copy button with immediate temporary `Copied ✓` feedback
  - Non-intrusive floating toast notifications
  - Smooth hover and focus states with accessible keyboard navigation
  - Respects `prefers-reduced-motion`

---

## 🚀 Deployment

This static single-page app can be deployed anywhere with zero configuration:
- **Cloudflare Pages**: Point to repository, build command `npm run build`, output directory `dist`
- **Vercel**: `vercel`
- **Netlify**: `netlify deploy --prod --dir=dist`
- **GitHub Pages**: Deploy `dist/` branch or use GitHub Actions
