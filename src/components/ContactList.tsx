import React from 'react';
import type { ContactItem as ContactItemType } from '../types/profile';
import { ContactItem } from './ContactItem';

interface ContactListProps {
  contacts: ContactItemType[];
  onCopied?: (label: string) => void;
}

export const ContactList: React.FC<ContactListProps> = ({ contacts, onCopied }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <div className="py-8 text-center text-xs text-neutral-400 dark:text-neutral-500">
        No contact methods currently configured.
      </div>
    );
  }

  return (
    <div className="w-full space-y-2.5">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          item={contact}
          onCopied={onCopied}
        />
      ))}
    </div>
  );
};
