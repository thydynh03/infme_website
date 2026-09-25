import React, { useState } from 'react';
import { Copy, Check } from './icons/PlatformIcon';
import { copyToClipboard } from '../utils/clipboard';

interface CopyButtonProps {
  value: string;
  label?: string;
  onCopied?: (text: string) => void;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  value,
  label = 'value',
  onCopied,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const success = await copyToClipboard(value);
    if (success) {
      setCopied(true);
      if (onCopied) {
        onCopied(label);
      }
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Copied ${label} to clipboard` : `Copy ${label}`}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      className={`inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-md transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 ${
        copied
          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/20'
          : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-600 hover:text-neutral-900 dark:bg-neutral-800/80 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3 opacity-70" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
};
