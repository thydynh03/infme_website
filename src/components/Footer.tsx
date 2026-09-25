import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 pt-6 pb-8 border-t border-neutral-200/60 dark:border-neutral-800/60 text-center">
      <p className="text-[11px] text-neutral-400 dark:text-neutral-600 font-normal">
        © {currentYear} {name} · Digital Contact Card
      </p>
    </footer>
  );
};
