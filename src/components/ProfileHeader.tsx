import React, { useState } from 'react';
import type { PersonProfile, VCardConfig } from '../types/profile';
import { MapPin } from './icons/PlatformIcon';
import { SaveContactButton } from './SaveContactButton';
import { ShareButton } from './ShareButton';
import { ThemeToggle } from './ThemeToggle';

interface ProfileHeaderProps {
  person: PersonProfile;
  vcard: VCardConfig;
  onNotice?: (msg: string) => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  person,
  vcard,
  onNotice,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="w-full flex flex-col items-center text-center pb-6">
      {/* Top utility row: Theme toggle right-aligned */}
      <div className="w-full flex justify-end items-center mb-2">
        <ThemeToggle />
      </div>

      {/* Avatar with fallback */}
      <div className="relative mb-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-neutral-900 border-2 border-neutral-200/80 dark:border-neutral-800 shadow-sm flex items-center justify-center select-none">
          {person.avatarUrl && !imageError ? (
            <img
              src={person.avatarUrl}
              alt={person.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
              width={112}
              height={112}
              loading="eager"
            />
          ) : (
            <span className="text-xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-200">
              {person.avatarInitials || person.name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>

        {person.status?.available && (
          <div
            title={person.status.label}
            className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-900 flex items-center justify-center shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-900" />
          </div>
        )}
      </div>

      {/* Name */}
      <h1 className="text-2xl sm:text-[26px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 leading-snug">
        {person.name}
      </h1>

      {/* Title & Organization */}
      <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mt-1">
        {person.title}
        {person.organization && (
          <span className="text-neutral-400 dark:text-neutral-500 font-normal">
            {' '}· {person.organization}
          </span>
        )}
      </p>

      {/* Location / Status tag */}
      <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">
        <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
        <span>{person.location}</span>
        {person.timezone && (
          <span className="text-neutral-400 dark:text-neutral-600">· {person.timezone}</span>
        )}
      </div>

      {/* Bio */}
      {person.bio && (
        <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 max-w-sm mt-3 leading-relaxed font-normal">
          {person.bio}
        </p>
      )}

      {/* Quick Action Buttons */}
      <div className="flex items-center justify-center gap-2 mt-4 pt-1">
        <SaveContactButton
          vcard={vcard}
          onSuccess={() => onNotice?.('Contact card (.vcf) downloaded')}
        />
        <ShareButton
          title={`${person.name} — Contact`}
          text={`Contact information for ${person.name}`}
          onNotice={onNotice}
        />
      </div>
    </header>
  );
};
