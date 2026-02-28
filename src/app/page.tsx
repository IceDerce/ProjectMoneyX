import React from 'react';
import Header from '@/components/Header';

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Dashboard" />
      <div className="p-8 max-w-7xl mx-auto w-full flex flex-col gap-6 animate-fade-in-up">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Net Asset Card */}
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-xl p-6 shadow-lg shadow-blue-900/20 text-white relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300 cursor-pointer">
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 origin-top-right">
              <span className="material-symbols-outlined text-[120px]">account_balance</span>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[18px]">wallet</span>
                  </div>
                  <span className="text-blue-100 text-sm font-medium">Net Assets</span>
                </div>
                <h3 className="text-3xl font-bold mb-1 tracking-tight">¥116,500</h3>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-white/10 px-2 py-1 rounded-md text-xs font-semibold backdrop-blur-sm flex items-center gap-1 border border-white/5">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +3.2%
                </span>
                <span className="text-blue-200 text-xs">vs last month</span>
              </div>
            </div>
          </div>

          {/* Monthly Income Card */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Monthly Income</span>
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 border border-emerald-500/20">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">¥15,000</h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 border border-emerald-500/10">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> +5.2%
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-xs">MoM Growth</span>
            </div>
          </div>

          {/* Monthly Expense Card */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Monthly Expense</span>
                <div className="p-2 bg-rose-500/10 rounded-lg text-rose-500 border border-rose-500/20">
                  <span className="material-symbols-outlined text-[20px]">credit_card</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">¥8,200</h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 border border-emerald-500/10">
                <span className="material-symbols-outlined text-[14px]">trending_down</span> -3.1%
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-xs">Expense Reduced (Good)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Net Asset Trend Chart Area (Placeholder for now, can integrate Recharts later if needed complex interactive chart) */}
          <div className="lg:col-span-3 bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Net Asset Trend</h3>
                <p className="text-slate-500 text-xs mt-1">Past 12 months asset liability trend</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span><span className="text-slate-500 dark:text-slate-400">Net Asset</span></div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span><span className="text-slate-500 dark:text-slate-400">Total Asset</span></div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]"></span><span className="text-slate-500 dark:text-slate-400">Liability</span></div>
              </div>
            </div>
            <div className="relative h-[280px] w-full group">
               {/* SVG Chart from design */}
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 280">
                    <g className="text-slate-300 dark:text-slate-700/50" stroke="currentColor" strokeDasharray="4,4" strokeWidth="0.5">
                    <line x1="0" x2="600" y1="230" y2="230"></line>
                    <line x1="0" x2="600" y1="170" y2="170"></line>
                    <line x1="0" x2="600" y1="110" y2="110"></line>
                    <line x1="0" x2="600" y1="50" y2="50"></line>
                    </g>
                    <path className="opacity-80" d="M0,240 C50,245 100,240 150,235 C200,230 250,235 300,232 C350,230 400,228 450,225 C500,222 550,220 600,218" fill="none" stroke="#f87171" strokeDasharray="4,4" strokeWidth="2"></path>
                    <path className="opacity-80" d="M0,180 C50,170 100,160 150,150 C200,140 250,145 300,135 C350,125 400,110 450,100 C500,90 550,80 600,70" fill="none" stroke="#34d399" strokeDasharray="4,4" strokeWidth="2"></path>
                    <defs>
                    <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"></stop>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
                    </linearGradient>
                    </defs>
                    <path d="M0,280 L0,200 C50,190 100,180 150,175 C200,170 250,172 300,165 C350,158 400,145 450,140 C500,135 550,120 600,110 L600,280 Z" fill="url(#blueGradient)"></path>
                    <path className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" d="M0,200 C50,190 100,180 150,175 C200,170 250,172 300,165 C350,158 400,145 450,140 C500,135 550,120 600,110" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="3"></path>
                    <circle className="drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:r-6" cx="600" cy="110" fill="#1e293b" r="5" stroke="#3b82f6" strokeWidth="2"></circle>
                </svg>
                <div className="flex justify-between mt-4 text-xs text-slate-500 font-medium px-1">
                    <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                </div>
            </div>
          </div>

          {/* Monthly Cash Flow */}
          <div className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Monthly Cash Flow</h3>
              <button className="text-xs text-blue-500 font-medium hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Details</button>
            </div>
            <div className="relative h-[280px] w-full flex flex-col justify-end">
                <div className="flex items-end justify-between h-[230px] w-full px-2 gap-2">
                    {[
                        { m: 'Jul', i: 60, e: 40 },
                        { m: 'Aug', i: 65, e: 55 },
                        { m: 'Sep', i: 70, e: 45 },
                        { m: 'Oct', i: 85, e: 50 },
                        { m: 'Nov', i: 75, e: 60 },
                        { m: 'Dec', i: 90, e: 35 },
                    ].map((data, index) => (
                        <div key={index} className="flex flex-col items-center gap-1 group w-full cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="relative w-full flex justify-center h-full items-end gap-1">
                                <div className="w-2.5 bg-emerald-500/80 rounded-t-sm group-hover:bg-emerald-400 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)]" style={{ height: `${data.i}%` }}></div>
                                <div className="w-2.5 bg-red-500/80 rounded-t-sm group-hover:bg-red-400 transition-colors shadow-[0_0_10px_rgba(239,68,68,0.2)]" style={{ height: `${data.e}%` }}></div>
                            </div>
                            <span className={`text-[10px] ${data.m === 'Dec' ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'} transition-colors`}>{data.m}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-4 mt-4 text-[10px] text-slate-500">
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-emerald-500"></span>Income</div>
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-red-500"></span>Expense</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
