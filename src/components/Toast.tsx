import React, { useEffect } from 'react';
import { Check, Sparkles } from './icons/PlatformIcon';

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info';
}

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 2400);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900/90 text-white dark:bg-neutral-100/95 dark:text-neutral-900 text-xs font-medium tracking-tight shadow-md backdrop-blur-sm border border-neutral-800/10 dark:border-neutral-200/20 transition-all duration-200 ease-out animate-in fade-in slide-in-from-bottom-2">
        {toast.type === 'info' ? (
          <Sparkles className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
        ) : (
          <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
        )}
        <span>{toast.text}</span>
      </div>
    </div>
  );
};
