import React from 'react';
import Header from '@/components/Header';

export default function AccountsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Asset Management" />
      <div className="p-8 max-w-7xl mx-auto w-full flex flex-col gap-8 animate-fade-in-up">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Account Assets Center</h1>
          <p className="text-slate-500 dark:text-slate-400">Overview of all your bank accounts, wallets, and credit card details.</p>
        </div>

        {/* Account Cards Scroll */}
        <div className="w-full overflow-x-auto custom-scrollbar pb-4">
          <div className="flex min-w-full gap-6 px-1">
            {/* CMB Savings */}
            <div className="group relative flex h-52 w-80 min-w-[320px] flex-col justify-between rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 p-6 shadow-lg border-2 border-indigo-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer z-10">
                <div className="absolute inset-0 opacity-10 mix-blend-overlay rounded-2xl pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                            <span className="material-symbols-outlined">account_balance</span>
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="text-sm font-semibold tracking-wide text-blue-100">CMB Savings</span>
                            <span className="text-xs text-blue-300 font-mono">**** 8842</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-blue-200 hover:text-white transition-colors cursor-pointer">more_horiz</span>
                </div>
                <div className="relative z-10">
                    <p className="text-xs text-blue-200 font-medium mb-1 uppercase tracking-wider">Current Balance</p>
                    <p className="text-3xl font-bold text-white tracking-tight">¥45,000.00</p>
                </div>
                <div className="absolute -bottom-[10px] left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-indigo-500 bg-background-light dark:bg-[#0F172A] z-0"></div>
            </div>

            {/* CCB Credit Card */}
            <div className="relative flex h-52 w-80 min-w-[320px] flex-col justify-between rounded-2xl bg-gradient-to-br from-rose-900 via-red-900 to-slate-900 p-6 shadow-lg border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="relative z-10 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                            <span className="material-symbols-outlined">credit_card</span>
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="text-sm font-semibold tracking-wide text-rose-100">CCB Credit Card</span>
                            <span className="text-xs text-rose-300 font-mono">**** 1024</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-white transition-colors">more_horiz</span>
                </div>
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-2">
                        <p className="text-xs text-rose-200 font-medium uppercase tracking-wider">Current Debt</p>
                        <span className="text-[10px] font-bold text-rose-200 bg-black/40 px-2 py-0.5 rounded border border-rose-500/30">Limit ¥50,000</span>
                    </div>
                    <p className="text-3xl font-bold text-white tracking-tight">-¥5,200.00</p>
                </div>
            </div>

            {/* Alipay */}
            <div className="relative flex h-52 w-80 min-w-[320px] flex-col justify-between rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-6 shadow-lg border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="relative z-10 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="text-sm font-semibold tracking-wide text-indigo-100">Alipay Account</span>
                            <span className="text-xs text-indigo-300 font-mono">user@email.com</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-white transition-colors">more_horiz</span>
                </div>
                <div className="relative z-10">
                    <p className="text-xs text-indigo-200 font-medium mb-1 uppercase tracking-wider">Balance</p>
                    <p className="text-3xl font-bold text-white tracking-tight">¥12,000.50</p>
                </div>
            </div>

            {/* Add New */}
            <div className="flex h-52 w-80 min-w-[320px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group">
                <div className="h-16 w-16 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300 mb-4 shadow-lg">
                    <span className="material-symbols-outlined text-3xl">add</span>
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">Add New Account</p>
            </div>
          </div>
        </div>

        {/* Detailed Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Waterfall Chart */}
            <div className="lg:col-span-7 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
                            Fund Flow Analysis
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-3">Monthly Income & Expense Waterfall (Unit: ¥)</p>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
                        <button className="px-4 py-1.5 text-xs font-semibold rounded-md bg-indigo-600 text-white shadow-md shadow-indigo-900/50">This Month</button>
                        <button className="px-4 py-1.5 text-xs font-medium rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">Last Month</button>
                    </div>
                </div>
                {/* CSS Grid Waterfall */}
                <div className="relative h-[320px] w-full mt-4 z-10">
                    {/* Background Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-500 font-medium pointer-events-none z-0">
                        <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full h-0"></div>
                        <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full h-0"></div>
                        <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full h-0"></div>
                        <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full h-0"></div>
                        <div className="border-b border-slate-300 dark:border-slate-600 w-full h-0"></div>
                    </div>
                    {/* Bars */}
                    <div className="relative z-10 grid grid-cols-4 gap-8 h-full items-end pb-6 px-4 sm:px-12">
                        {/* Opening */}
                        <div className="flex flex-col items-center group w-full relative h-[60%]">
                            <div className="w-full max-w-[60px] bg-slate-400 dark:bg-slate-600 rounded-t-md h-full relative group-hover:bg-slate-500 transition-colors cursor-pointer border-t border-x border-slate-500/30">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs font-bold text-slate-300 rounded border border-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg whitespace-nowrap z-20">¥43,900</div>
                            </div>
                            <span className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">Opening</span>
                        </div>
                        {/* Income */}
                        <div className="flex flex-col items-center group w-full relative h-[85%]">
                            <div className="w-full h-[70%]"></div>
                            <div className="w-full max-w-[60px] bg-emerald-500/90 rounded-md h-[25%] relative group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-pointer border border-emerald-400/20">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-emerald-900/80 text-xs font-bold text-emerald-300 rounded border border-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg whitespace-nowrap z-20">+¥15,000</div>
                            </div>
                            <span className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">Income</span>
                        </div>
                        {/* Expense */}
                        <div className="flex flex-col items-center group w-full relative h-[90%]">
                            <div className="w-full h-[75%]"></div>
                            <div className="w-full max-w-[60px] bg-rose-500/90 rounded-md h-[20%] relative group-hover:bg-rose-400 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all transform translate-y-[2px] cursor-pointer border border-rose-400/20">
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-rose-900/80 text-xs font-bold text-rose-300 rounded border border-rose-700 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg whitespace-nowrap z-20">-¥13,900</div>
                            </div>
                            <span className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">Expense</span>
                        </div>
                        {/* Closing */}
                        <div className="flex flex-col items-center group w-full relative h-[65%]">
                            <div className="w-full max-w-[60px] bg-indigo-600 rounded-t-md h-full relative group-hover:bg-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all cursor-pointer border-t border-x border-indigo-400/30">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-indigo-900/80 text-xs font-bold text-indigo-200 rounded border border-indigo-700 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg whitespace-nowrap z-20">¥45,000</div>
                            </div>
                            <span className="mt-4 text-xs font-bold text-slate-900 dark:text-white">Closing</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Stats & Recent */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Account Overview */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Overview</h3>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-2 rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-xl">settings</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/30 p-4 rounded-xl">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">Type</p>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-indigo-500 dark:text-indigo-400 text-lg">savings</span>
                                <p className="font-bold text-slate-900 dark:text-white text-sm">Savings</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/30 p-4 rounded-xl">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">Currency</p>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 text-lg">currency_yuan</span>
                                <p className="font-bold text-slate-900 dark:text-white text-sm">CNY</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50 cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                                    <span className="material-symbols-outlined text-xl">trending_up</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Total Income</p>
                                    <p className="font-bold text-slate-900 dark:text-white">¥15,000.00</p>
                                </div>
                            </div>
                            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">+12%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50 cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400 ring-1 ring-rose-500/20">
                                    <span className="material-symbols-outlined text-xl">trending_down</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Total Expense</p>
                                    <p className="font-bold text-slate-900 dark:text-white">¥13,900.00</p>
                                </div>
                            </div>
                            <span className="text-rose-600 dark:text-rose-400 text-xs font-bold bg-rose-100 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-500/20">+5%</span>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions List */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
                        <a className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:underline" href="#">View All</a>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 px-2 -mx-2 rounded-lg transition-colors cursor-pointer group/item">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-lg group-hover/item:text-indigo-500 dark:group-hover/item:text-indigo-400 transition-colors">shopping_bag</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">Sam's Club</span>
                                    <span className="text-xs text-slate-500">Today 14:30</span>
                                </div>
                            </div>
                            <span className="font-bold text-slate-900 dark:text-slate-200">- ¥860.00</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 px-2 -mx-2 rounded-lg transition-colors cursor-pointer group/item">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-emerald-500 text-lg">payments</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">Salary</span>
                                    <span className="text-xs text-slate-500">Yesterday 09:00</span>
                                </div>
                            </div>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">+ ¥15,000.00</span>
                        </div>
                        {/* More transactions... */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
