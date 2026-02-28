import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 flex-col border-r border-slate-200 bg-surface-light dark:border-slate-800 dark:bg-surface-dark lg:flex hidden">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-xl font-bold">account_balance_wallet</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">ProjectMoneyX</span>
          </div>
          <nav className="flex flex-col gap-1 px-1">
            <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white group">
              <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">grid_view</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="/transactions" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white group">
              <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">receipt_long</span>
              <span className="text-sm font-medium">Bills</span>
            </Link>
            <Link href="/import" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white group">
              <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">upload_file</span>
              <span className="text-sm font-medium">Import</span>
            </Link>
            <Link href="/accounts" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white group">
              <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">account_balance</span>
              <span className="text-sm font-medium">Accounts</span>
            </Link>
            <Link href="/budget" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white group">
              <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">savings</span>
              <span className="text-sm font-medium">Budget</span>
            </Link>
            <Link href="/analysis" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white group">
              <span className="material-symbols-outlined text-[22px]">analytics</span>
              <span className="text-sm font-medium">Analysis</span>
            </Link>
            <Link href="/rules" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white group">
              <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">rule</span>
              <span className="text-sm font-medium">Rules</span>
            </Link>
          </nav>
        </div>
        <div className="px-3 py-4">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-2 dark:bg-slate-800/40">
            <div className="h-9 w-9 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-700">
             {/* Placeholder for user avatar */}
             <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">User</div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 dark:text-white">Admin User</span>
              <span className="text-[10px] text-slate-500">Pro Account</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
