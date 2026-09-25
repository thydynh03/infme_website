import React, { useState } from 'react';
import { Share2, Check } from './icons/PlatformIcon';
import { shareLink } from '../utils/share';

interface ShareButtonProps {
  title: string;
  text?: string;
  url?: string;
  onNotice?: (msg: string) => void;
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  text,
  url,
  onNotice,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const targetUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const result = await shareLink({
      title,
      text: text || title,
      url: targetUrl,
    });

    if (result === 'copied') {
      setCopied(true);
      if (onNotice) {
        onNotice('Profile link copied to clipboard');
      }
      setTimeout(() => setCopied(false), 2000);
    } else if (result === 'shared') {
      if (onNotice) {
        onNotice('Shared successfully');
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share this contact card"
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Link Copied</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>Share</span>
        </>
      )}
    </button>
  );
};
