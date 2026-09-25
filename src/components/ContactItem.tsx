import React from 'react';
import type { ContactItem as ContactItemType } from '../types/profile';
import { PlatformIcon, ArrowUpRight } from './icons/PlatformIcon';
import { CopyButton } from './CopyButton';

interface ContactItemProps {
  item: ContactItemType;
  onCopied?: (label: string) => void;
}

export const ContactItem: React.FC<ContactItemProps> = ({ item, onCopied }) => {
  // If the item doesn't have a valid label or url, skip rendering gracefully
  if (!item.label || !item.url) {
    return null;
  }

  // Get subtle icon styling based on platform
  const getIconContainerStyle = () => {
    switch (item.icon.toLowerCase()) {
      case 'zalo':
        return 'text-[#0068FF] bg-[#0068FF]/8 dark:bg-[#0068FF]/15 border-[#0068FF]/15';
      case 'telegram':
        return 'text-[#229ED9] bg-[#229ED9]/8 dark:bg-[#229ED9]/15 border-[#229ED9]/15';
      case 'facebook':
        return 'text-[#1877F2] bg-[#1877F2]/8 dark:bg-[#1877F2]/15 border-[#1877F2]/15';
      case 'instagram':
        return 'text-[#E4405F] bg-[#E4405F]/8 dark:bg-[#E4405F]/15 border-[#E4405F]/15';
      case 'linkedin':
        return 'text-[#0A66C2] bg-[#0A66C2]/8 dark:bg-[#0A66C2]/15 border-[#0A66C2]/15';
      default:
        return 'text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/90 border-neutral-200/50 dark:border-neutral-700/50';
    }
  };

  return (
    <a
      href={item.url}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="group relative flex items-center justify-between gap-3 p-3 sm:px-4 rounded-xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 cursor-pointer text-left select-none"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Platform Icon */}
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-150 ease-out group-hover:scale-[1.03] ${getIconContainerStyle()}`}
        >
          <PlatformIcon name={item.icon} size={19} />
        </div>

        {/* Text Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
              {item.label}
            </span>
            {item.badge && (
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 tracking-wider">
                {item.badge}
              </span>
            )}
          </div>

          <div className="text-xs text-neutral-600 dark:text-neutral-400 truncate mt-0.5 font-normal">
            {item.value}
          </div>

          {item.description && (
            <div className="text-[11px] text-neutral-400 dark:text-neutral-500 truncate mt-0.5">
              {item.description}
            </div>
          )}
        </div>
      </div>

      {/* Action Area: Copy button and external link indicator */}
      <div className="flex items-center gap-2 shrink-0">
        {item.copyable && (
          <CopyButton
            value={item.copyValue || item.value}
            label={item.label}
            onCopied={onCopied}
          />
        )}

        <div className="w-6 h-6 flex items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
};
