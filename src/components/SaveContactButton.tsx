import React, { useState } from 'react';
import { Download, Check } from './icons/PlatformIcon';
import type { VCardConfig } from '../types/profile';
import { downloadVCard } from '../utils/vcard';

interface SaveContactButtonProps {
  vcard: VCardConfig;
  onSuccess?: () => void;
  className?: string;
}

export const SaveContactButton: React.FC<SaveContactButtonProps> = ({
  vcard,
  onSuccess,
  className = '',
}) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleSave = () => {
    const success = downloadVCard(vcard);
    if (success) {
      setDownloaded(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setDownloaded(false);
      }, 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      aria-label="Save contact card to phone or computer"
      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 ${className}`}
    >
      {downloaded ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Contact Saved</span>
        </>
      ) : (
        <>
          <Download className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>Save Contact</span>
        </>
      )}
    </button>
  );
};
