import type { ProfileConfiguration } from '../types/profile';

/**
 * ============================================================================
 * PERSONAL CONTACT CARD CONFIGURATION
 * ============================================================================
 * Edit the details below to customize your personal contact card.
 * You do NOT need to modify any React components or styles.
 */
export const profileConfig: ProfileConfiguration = {
  // 1. Personal & Brand Information
  person: {
    name: 'Thy Dinh',
    title: 'Làm Website Theo Yêu Cầu Của Bạn',
    organization: 'Thiết Kế & Phát Triển Web',
    location: 'Việt Nam · Nhận dự án Online',
    timezone: 'GMT+7',
    bio: 'Chuyên thiết kế & lập trình website theo yêu cầu: Landing page, website doanh nghiệp, bán hàng, tối ưu trải nghiệm người dùng, chuẩn SEO và tốc độ tải trang nhanh.',
    // Uses the new brand avatar
    avatarUrl: '/avatar.png',
    avatarInitials: 'W',
    status: {
      available: true,
      label: 'Đang nhận dự án mới',
    },
  },

  // 2. Contact Methods
  contacts: [
    {
      id: 'phone',
      type: 'direct',
      label: 'Số điện thoại',
      value: '0359 731 884',
      url: 'tel:0359731884',
      icon: 'phone',
      description: 'Gọi trực tiếp tư vấn hoặc gửi SMS',
      copyable: true,
      copyValue: '0359731884',
      external: false,
    },
    {
      id: 'zalo',
      type: 'messaging',
      label: 'Zalo',
      value: '0359 731 884',
      url: 'https://zalo.me/0359731884',
      icon: 'zalo',
      description: 'Tư vấn nhanh & gửi mẫu demo qua Zalo',
      copyable: true,
      copyValue: '0359731884',
      external: true,
      accentColor: '#0068FF',
    },
    {
      id: 'telegram',
      type: 'messaging',
      label: 'Telegram',
      value: '@thydynhprovjp',
      url: 'https://t.me/thydynhprovjp',
      icon: 'telegram',
      description: 'Trao đổi kỹ thuật & yêu cầu dự án',
      copyable: true,
      copyValue: '@thydynhprovjp',
      external: true,
      accentColor: '#229ED9',
    },
    {
      id: 'email',
      type: 'direct',
      label: 'Email',
      value: 'thihtktk@gmail.com',
      url: 'mailto:thihtktk@gmail.com',
      icon: 'mail',
      description: 'Gửi brief yêu cầu, báo giá & hợp tác',
      copyable: true,
      copyValue: 'thihtktk@gmail.com',
      external: false,
    },
    {
      id: 'facebook',
      type: 'social',
      label: 'Facebook Fanpage',
      value: 'Website Theo Nhu Cầu',
      url: 'https://www.facebook.com/website.theonhucau/',
      icon: 'facebook',
      description: 'Xem các dự án & mẫu web đã triển khai',
      copyable: false,
      external: true,
      accentColor: '#1877F2',
    },
    {
      id: 'website',
      type: 'web',
      label: 'Website Cá Nhân / Danh Thiếp',
      value: 'infmewebsite.vercel.app',
      url: 'https://infmewebsite.vercel.app',
      icon: 'globe',
      description: 'Danh thiếp số & thông tin liên hệ trực tiếp',
      copyable: true,
      copyValue: 'https://infmewebsite.vercel.app',
      external: true,
    },
    {
      id: 'github',
      type: 'social',
      label: 'GitHub',
      value: 'github.com/thydynh03',
      url: 'https://github.com/thydynh03',
      icon: 'github',
      description: 'Kho lưu trữ mã nguồn mở & dự án code',
      copyable: false,
      external: true,
    },
    {
      id: 'instagram',
      type: 'social',
      label: 'Instagram',
      value: '@thy_dynh_03',
      url: 'https://instagram.com/thy_dynh_03',
      icon: 'instagram',
      description: 'Hình ảnh đời thường & góc làm việc',
      copyable: false,
      external: true,
      accentColor: '#E4405F',
    },
    {
      id: 'linkedin',
      type: 'social',
      label: 'LinkedIn',
      value: 'linkedin.com/in/thydynh03',
      url: 'https://linkedin.com/in/thydynh03',
      icon: 'linkedin',
      description: 'Hồ sơ chuyên môn & kết nối nghề nghiệp',
      copyable: false,
      external: true,
      accentColor: '#0A66C2',
    },
  ],

  // 3. vCard Configuration (.vcf download file)
  vcard: {
    firstName: 'Thy',
    lastName: 'Dinh',
    title: 'Làm Website Theo Yêu Cầu',
    organization: 'Website Theo Nhu Cầu',
    cellPhone: '0359731884',
    email: 'thihtktk@gmail.com',
    url: 'https://infmewebsite.vercel.app',
    address: {
      country: 'Vietnam',
    },
    note: 'Thy Dinh - Làm Website Theo Yêu Cầu Của Bạn. Liên hệ: 0359 731 884 | Zalo: 0359 731 884 | Email: thihtktk@gmail.com | Telegram: @thydynhprovjp',
    socials: [
      { platform: 'telegram', url: 'https://t.me/thydynhprovjp' },
      { platform: 'zalo', url: 'https://zalo.me/0359731884' },
      { platform: 'facebook', url: 'https://www.facebook.com/website.theonhucau/' },
      { platform: 'website', url: 'https://infmewebsite.vercel.app' },
      { platform: 'github', url: 'https://github.com/thydynh03' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/thydynh03' },
      { platform: 'instagram', url: 'https://instagram.com/thy_dynh_03' },
    ],
  },

  // 4. SEO & Metadata
  seo: {
    title: 'Thy Dinh — Làm Website Theo Yêu Cầu Của Bạn',
    description: 'Chuyên thiết kế và làm website theo yêu cầu chuyên nghiệp, chuẩn SEO, tối ưu tốc độ. Liên hệ ngay qua Zalo, Điện thoại, Telegram, Email.',
    canonicalUrl: 'https://infmewebsite.vercel.app',
    themeColorLight: '#f8f8fa',
    themeColorDark: '#0c0d10',
  },
};
