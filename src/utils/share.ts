import { copyToClipboard } from './clipboard';

export interface ShareData {
  title: string;
  text?: string;
  url: string;
}

export function isWebShareSupported(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function';
}

export async function shareLink(data: ShareData): Promise<'shared' | 'copied' | 'failed'> {
  if (isWebShareSupported()) {
    try {
      await navigator.share(data);
      return 'shared';
    } catch (err: unknown) {
      // AbortError means user cancelled the share sheet - not an error
      if (err instanceof Error && err.name === 'AbortError') {
        return 'shared';
      }
      // Otherwise fall through to clipboard copy
    }
  }

  // Fallback: Copy link to clipboard
  try {
    const success = await copyToClipboard(data.url);
    return success ? 'copied' : 'failed';
  } catch {
    return 'failed';
  }
}
