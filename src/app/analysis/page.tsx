import React from 'react';
import Header from '@/components/Header';

export default function AnalysisPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Analysis" />
      <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-fade-in-up">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Multi-dimensional Analysis</h2>
              <p className="text-slate-500 dark:text-slate-400">Deep dive into your financial health.</p>
            </div>
            <div className="flex wrap items-center gap-2 rounded-xl bg-white p-1.5 shadow-sm dark:bg-surface-dark dark:shadow-none border border-slate-100 dark:border-slate-700/50">
                <button className="btn-ripple flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark active:scale-95">
                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                    This Month
                </button>
                <button className="btn-ripple flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-all active:scale-95">
                    <span className="material-symbols-outlined text-lg">date_range</span>
                    Last 3 Months
                </button>
                <button className="btn-ripple flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-all active:scale-95">
                    <span className="material-symbols-outlined text-lg">calendar_month</span>
                    This Year
                </button>
            </div>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center text-sm font-medium animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <a className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" href="#">All Expenses</a>
            <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
            <span className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-primary border border-primary/20">
                <span className="material-symbols-outlined text-sm">restaurant</span>
                Dining
            </span>
          </nav>

          {/* Top Row: Expense Breakdown & Details */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Donut Chart Card */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 dark:bg-surface-dark dark:ring-slate-700/50 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Expense</p>
                        <h3 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">¥9,820</h3>
                        <div className="mt-1 flex items-center gap-1 text-sm font-medium text-primary">
                            <span className="material-symbols-outlined text-base">trending_down</span>
                            <span>-5%</span>
                            <span className="font-normal text-slate-400 ml-1">vs last month</span>
                        </div>
                    </div>
                    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-white transition-colors">
                        <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                </div>
                <div className="relative flex flex-1 items-center justify-center py-4">
                    <div className="relative h-64 w-64">
                        <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 36 36">
                            <path className="text-slate-100 dark:text-slate-700/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8"></path>
                            <circle className="donut-segment animate-draw" cx="18" cy="18" fill="none" r="15.9155" stroke="#10b77f" strokeDasharray="40, 100" strokeDashoffset="0" strokeWidth="3.8"></circle>
                            <circle className="donut-segment animate-draw" cx="18" cy="18" fill="none" r="15.9155" stroke="#3b82f6" strokeDasharray="25, 100" strokeDashoffset="-40" strokeWidth="3.8" style={{ animationDelay: '200ms' }}></circle>
                            <circle className="donut-segment animate-draw" cx="18" cy="18" fill="none" r="15.9155" stroke="#fbbf24" strokeDasharray="20, 100" strokeDashoffset="-65" strokeWidth="3.8" style={{ animationDelay: '400ms' }}></circle>
                            <circle className="donut-segment animate-draw" cx="18" cy="18" fill="none" r="15.9155" stroke="#a78bfa" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="3.8" style={{ animationDelay: '600ms' }}></circle>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">Top Exp.</span>
                            <span className="text-xl font-bold text-slate-800 dark:text-white">Dining</span>
                            <span className="text-sm font-semibold text-primary">40%</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex flex-col gap-1 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Dining</span>
                        </div>
                        <span className="text-base font-bold text-slate-900 dark:text-white">¥3,928</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Shopping</span>
                        </div>
                        <span className="text-base font-bold text-slate-900 dark:text-white">¥2,455</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-400 group-hover:scale-125 transition-transform"></div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Transport</span>
                        </div>
                        <span className="text-base font-bold text-slate-900 dark:text-white">¥1,964</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-purple-400 group-hover:scale-125 transition-transform"></div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Fun</span>
                        </div>
                        <span className="text-base font-bold text-slate-900 dark:text-white">¥1,473</span>
                    </div>
                </div>
            </div>

            {/* Trend Chart Card */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 dark:bg-surface-dark dark:ring-slate-700/50 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Category Trend</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Expense changes over last 30 days</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined text-sm">zoom_in</span>
                        </button>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden relative">
                    <div className="relative h-64 w-full">
                        <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 200">
                            <line className="stroke-slate-100 dark:stroke-slate-700/50" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="180" y2="180"></line>
                            <line className="stroke-slate-100 dark:stroke-slate-700/50" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="120" y2="120"></line>
                            <line className="stroke-slate-100 dark:stroke-slate-700/50" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="60" y2="60"></line>
                            <path className="animate-draw-line" d="M0,150 Q40,140 80,100 T160,110 T240,60 T320,90 T400,50" fill="none" stroke="#10b77f" strokeDasharray="1000" strokeDashoffset="1000" strokeLinecap="round" strokeWidth="3"></path>
                            <path className="animate-draw-line" d="M0,170 Q40,160 80,140 T160,150 T240,120 T320,130 T400,100" fill="none" stroke="#3b82f6" strokeDasharray="1000" strokeDashoffset="1000" strokeLinecap="round" strokeOpacity="0.6" strokeWidth="3" style={{ animationDelay: '200ms' }}></path>
                            <path className="animate-draw-line" d="M0,180 Q40,175 80,160 T160,165 T240,150 T320,155 T400,140" fill="none" stroke="#fbbf24" strokeDasharray="1000" strokeDashoffset="1000" strokeLinecap="round" strokeOpacity="0.6" strokeWidth="3" style={{ animationDelay: '400ms' }}></path>
                            <g className="animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                                <circle cx="240" cy="60" fill="#1e293b" r="6" stroke="#10b77f" strokeWidth="3"></circle>
                                <circle cx="240" cy="60" fill="#10b77f" r="3"></circle>
                            </g>
                        </svg>
                        <div className="absolute left-[58%] top-[10%] rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-xl ring-1 ring-white/10 dark:bg-slate-800 dark:ring-slate-700 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                            <div className="font-semibold text-slate-100">June 15</div>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,183,127,0.8)]"></div>
                                <span className="text-slate-300">Dining: <span className="text-white font-medium">¥240</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Heatmap Card */}
          <div className="w-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 dark:bg-surface-dark dark:ring-slate-700/50 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Expense Heatmap</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Daily spending intensity</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>Low</span>
                    <div className="flex gap-1">
                        <div className="h-3 w-3 rounded-sm bg-emerald-900/40 border border-emerald-900/50"></div>
                        <div className="h-3 w-3 rounded-sm bg-emerald-700/60 border border-emerald-700/50"></div>
                        <div className="h-3 w-3 rounded-sm bg-emerald-500/80 border border-emerald-500/50"></div>
                        <div className="h-3 w-3 rounded-sm bg-emerald-400 border border-emerald-400/50"></div>
                        <div className="h-3 w-3 rounded-sm bg-rose-500 border border-rose-500/50"></div>
                    </div>
                    <span>High</span>
                </div>
            </div>
            <div className="overflow-x-auto custom-scrollbar">
                <div className="min-w-[800px] pb-2">
                    <div className="flex flex-col gap-2">
                        {/* Day Headers */}
                        <div className="grid grid-cols-[auto_repeat(31,minmax(0,1fr))] gap-1.5">
                            <div className="h-8 w-12 text-xs text-slate-400"></div>
                            {Array.from({ length: 31 }, (_, i) => (
                                <div key={i} className="flex items-center justify-center text-xs font-medium text-slate-400">{i + 1}</div>
                            ))}
                        </div>
                        {/* May Data */}
                        <div className="grid grid-cols-[auto_repeat(31,minmax(0,1fr))] gap-1.5">
                            <div className="flex h-8 w-12 items-center text-xs font-medium text-slate-500 dark:text-slate-400">May</div>
                            {Array.from({ length: 31 }, (_, i) => {
                                const intensity = Math.floor(Math.random() * 6);
                                let bgClass = "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/30"; // 0
                                if (intensity === 1) bgClass = "bg-emerald-900/50 border-emerald-900/10";
                                if (intensity === 2) bgClass = "bg-emerald-700/60 border-emerald-700/10";
                                if (intensity === 3) bgClass = "bg-emerald-500/80 border-emerald-500/10";
                                if (intensity === 4) bgClass = "bg-emerald-400 border-emerald-400/10";
                                if (intensity === 5) bgClass = "bg-rose-500 dark:bg-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.4)] border-rose-500/10";
                                
                                return <div key={i} className={`heatmap-cell h-8 rounded-md border ${bgClass}`}></div>
                            })}
                        </div>
                        {/* June Data */}
                        <div className="grid grid-cols-[auto_repeat(31,minmax(0,1fr))] gap-1.5">
                            <div className="flex h-8 w-12 items-center text-xs font-medium text-slate-500 dark:text-slate-400">Jun</div>
                            {Array.from({ length: 31 }, (_, i) => {
                                const intensity = Math.floor(Math.random() * 6);
                                let bgClass = "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/30"; // 0
                                if (intensity === 1) bgClass = "bg-emerald-900/50 border-emerald-900/10";
                                if (intensity === 2) bgClass = "bg-emerald-700/60 border-emerald-700/10";
                                if (intensity === 3) bgClass = "bg-emerald-500/80 border-emerald-500/10";
                                if (intensity === 4) bgClass = "bg-emerald-400 border-emerald-400/10";
                                if (intensity === 5) bgClass = "bg-rose-500 dark:bg-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.4)] border-rose-500/10";
                                
                                return <div key={i} className={`heatmap-cell h-8 rounded-md border ${bgClass}`}></div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
