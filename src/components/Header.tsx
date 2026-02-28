import React from 'react';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white dark:bg-slate-900 px-8 flex items-center justify-between flex-shrink-0 sticky top-0 z-40">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{title}</h2>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-500 hover:text-primary transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
        </button>
        <button className="p-2 text-slate-500 hover:text-primary transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
