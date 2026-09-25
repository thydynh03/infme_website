import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Copy, Check } from './icons/PlatformIcon';
import { copyToClipboard } from '../utils/clipboard';

interface QRCodeSectionProps {
  url?: string;
  name: string;
  onNotice?: (msg: string) => void;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({
  url,
  name,
  onNotice,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const targetUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://example.com');

  useEffect(() => {
    let isMounted = true;

    async function generate() {
      try {
        const dataUrl = await QRCode.toDataURL(targetUrl, {
          width: 320,
          margin: 1.5,
          color: {
            dark: '#111317',
            light: '#ffffff',
          },
          errorCorrectionLevel: 'M',
        });
        if (isMounted) {
          setQrDataUrl(dataUrl);
          setHasError(false);
        }
      } catch (err) {
        console.error('QR code generation failed:', err);
        if (isMounted) {
          setHasError(true);
        }
      }
    }

    generate();
    return () => {
      isMounted = false;
    };
  }, [targetUrl]);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(targetUrl);
    if (success) {
      setCopiedLink(true);
      if (onNotice) onNotice('Link copied to clipboard');
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `${name.toLowerCase().replace(/\s+/g, '-')}-contact-qr.png`;
    link.click();
    if (onNotice) onNotice('QR code image downloaded');
  };

  if (hasError) {
    return null;
  }

  return (
    <div className="w-full mt-6 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="group inline-flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors cursor-pointer select-none"
        >
          <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors">
            <QrCode className="w-3.5 h-3.5" />
          </div>
          <span>Scan to save contact</span>
          <span className="text-[11px] text-neutral-400 dark:text-neutral-600 font-normal ml-0.5">
            ({isOpen ? 'Hide' : 'Show QR'})
          </span>
        </button>

        {isOpen && (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy URL"
              className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-md bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedLink ? 'Copied' : 'Copy link'}</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadQR}
              title="Download QR code"
              className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-md bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
            >
              <Download className="w-3 h-3" />
              <span>Save image</span>
            </button>
          </div>
        )}
      </div>

      {isOpen && qrDataUrl && (
        <div className="mt-4 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-3 bg-white rounded-lg border border-neutral-100 dark:border-neutral-200/10 shadow-xs">
            <img
              src={qrDataUrl}
              alt={`QR Code to open ${name}'s digital contact card`}
              className="w-40 h-40 object-contain block"
              width={160}
              height={160}
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            Scan with your phone camera
          </p>
          <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">
            Opens this digital contact card directly
          </p>
        </div>
      )}
    </div>
  );
};
