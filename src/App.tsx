import { useState, useEffect } from 'react';
import { profileConfig } from './data/profileConfig';
import { ProfileHeader } from './components/ProfileHeader';
import { ContactList } from './components/ContactList';
import { QRCodeSection } from './components/QRCodeSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import type { ToastMessage } from './components/Toast';

export function App() {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (text: string, type: 'success' | 'info' = 'success') => {
    setToast({
      id: Date.now().toString(),
      text,
      type,
    });
  };

  useEffect(() => {
    if (profileConfig.seo?.title) {
      document.title = profileConfig.seo.title;
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-8 sm:py-14 text-neutral-900 dark:text-neutral-100">
      <main className="w-full max-w-[500px] flex flex-col items-center">
        {/* Profile Header */}
        <ProfileHeader
          person={profileConfig.person}
          vcard={profileConfig.vcard}
          onNotice={(msg) => showToast(msg, 'info')}
        />

        {/* Section Heading (accessible & clean) */}
        <section className="w-full mt-4" aria-label="Contact channels">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Ways to connect
            </h2>
            <span className="text-[11px] text-neutral-400 dark:text-neutral-600">
              {profileConfig.contacts.length} channels
            </span>
          </div>

          {/* Contact Items Stack */}
          <ContactList
            contacts={profileConfig.contacts}
            onCopied={(label) => showToast(`Copied ${label} to clipboard`, 'success')}
          />
        </section>

        {/* QR Code Section */}
        <QRCodeSection
          name={profileConfig.person.name}
          url={profileConfig.seo.canonicalUrl}
          onNotice={(msg) => showToast(msg, 'info')}
        />

        {/* Minimal Footer */}
        <Footer name={profileConfig.person.name} />
      </main>

      {/* Floating Toast Notification */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}

export default App;
