import React from 'react';
import Header from '@/components/Header';

export default function BudgetPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Budget Management" />
      <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6 md:gap-8">
          {/* Month Selector & Action */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="flex flex-col items-center">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Period</span>
                <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">February 2026</span>
              </div>
              <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium shadow-md shadow-primary/20 transition-all active:scale-95 w-full sm:w-auto justify-center">
              <span className="material-symbols-outlined text-xl">edit_document</span>
              <span>Edit Budget</span>
            </button>
          </header>

          {/* Global Budget Gauge */}
          <section className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="relative size-48 md:size-56 shrink-0">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-slate-100 dark:text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                <path className="text-primary drop-shadow-[0_0_10px_rgba(16,183,127,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3.5"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">82%</span>
                <span className="text-xs text-slate-500 font-medium">Overall Usage</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1 w-full">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Total Budget Overview</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Spending is well under control this month with sufficient funds remaining.</p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-slate-500">Spent</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">¥8,200</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[82%] rounded-full shadow-[0_0_12px_rgba(16,183,127,0.6)]"></div>
                </div>
                <div className="flex justify-between items-start text-xs text-slate-400">
                  <span>0%</span>
                  <span>Limit: ¥10,000</span>
                </div>
              </div>
            </div>
          </section>

          {/* Category Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Food: Amber */}
            <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 group hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div className="size-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold px-2 py-1 rounded-full">80%</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Food</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold text-slate-900 dark:text-slate-200">¥800</span>
                  <span className="text-xs text-slate-400">/ ¥1,000</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-[80%] rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Transport: Green */}
            <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 group hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div className="size-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-2 py-1 rounded-full">65%</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Transport</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold text-slate-900 dark:text-slate-200">¥650</span>
                  <span className="text-xs text-slate-400">/ ¥1,000</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[65%] rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Shopping: Red (Over Budget) */}
            <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.25)] flex flex-col gap-4 group hover:translate-y-[-4px] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <span className="material-symbols-outlined text-8xl text-red-500">warning</span>
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div className="size-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold px-2 py-1 rounded-full animate-pulse">110%</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-red-600 dark:text-red-400 mb-1 flex items-center gap-1">
                  Shopping
                  <span className="material-symbols-outlined text-sm">error</span>
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold text-slate-900 dark:text-slate-200">¥1,100</span>
                  <span className="text-xs text-slate-400">/ ¥1,000</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-full rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Housing */}
            <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 group hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div className="size-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-2 py-1 rounded-full">45%</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Housing</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold text-slate-900 dark:text-slate-200">¥4,500</span>
                  <span className="text-xs text-slate-400">/ ¥10,000</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Entertainment */}
            <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 group hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div className="size-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">movie</span>
                </div>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-2 py-1 rounded-full">30%</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Entertainment</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold text-slate-900 dark:text-slate-200">¥300</span>
                  <span className="text-xs text-slate-400">/ ¥1,000</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[30%] rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Budget vs Actual Chart */}
          <section className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Budget vs Actual</h2>
              <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-sm bg-slate-200 dark:bg-slate-700"></div>
                  <span className="text-slate-500">Budget Limit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-sm bg-emerald-500"></div>
                  <span className="text-slate-500">Actual (OK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-sm bg-red-500"></div>
                  <span className="text-slate-500">Actual (Over)</span>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 mt-8">
              {/* Dashed Line for 100% */}
              <div className="absolute top-0 w-full border-t-2 border-dashed border-slate-300 dark:border-slate-600 z-0"></div>
              <span className="absolute -top-3 -right-0 bg-white dark:bg-surface-dark px-2 text-xs text-slate-400">100% Limit</span>
              
              <div className="flex justify-between items-end h-full gap-4 sm:gap-8 md:gap-12 px-2 md:px-8 relative z-10">
                {/* Food */}
                <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                  <div className="w-full max-w-[60px] relative h-full flex items-end">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg absolute bottom-0 left-0 right-0 h-[70%] group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"></div>
                    <div className="w-2/3 mx-auto bg-orange-400 rounded-t-md relative h-[56%] shadow-lg shadow-orange-500/20">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">¥800</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Food</span>
                </div>
                {/* Transport */}
                <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                  <div className="w-full max-w-[60px] relative h-full flex items-end">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg absolute bottom-0 left-0 right-0 h-[70%] group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"></div>
                    <div className="w-2/3 mx-auto bg-emerald-500 rounded-t-md relative h-[45%] shadow-lg shadow-emerald-500/20">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">¥650</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Transport</span>
                </div>
                {/* Shopping (Over Budget) */}
                <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                  <div className="w-full max-w-[60px] relative h-full flex items-end">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg absolute bottom-0 left-0 right-0 h-[70%] group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"></div>
                    <div className="w-2/3 mx-auto bg-red-500 rounded-t-md relative h-[77%] shadow-lg shadow-red-500/20 ring-2 ring-red-200 dark:ring-red-900/20 animate-pulse">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity font-bold">¥1,100!</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-red-600 dark:text-red-400 font-bold">Shopping</span>
                </div>
                {/* Housing */}
                <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                  <div className="w-full max-w-[60px] relative h-full flex items-end">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg absolute bottom-0 left-0 right-0 h-[90%] group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"></div>
                    <div className="w-2/3 mx-auto bg-emerald-500 rounded-t-md relative h-[40%] shadow-lg shadow-emerald-500/20">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">¥4,500</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Housing</span>
                </div>
                {/* Entertainment */}
                <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                  <div className="w-full max-w-[60px] relative h-full flex items-end">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg absolute bottom-0 left-0 right-0 h-[70%] group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"></div>
                    <div className="w-2/3 mx-auto bg-emerald-500 rounded-t-md relative h-[21%] shadow-lg shadow-emerald-500/20">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">¥300</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Fun</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-8"></div>
      </div>
    </div>
  );
}
