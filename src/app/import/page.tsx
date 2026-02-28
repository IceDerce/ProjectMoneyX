import React from 'react';
import Header from '@/components/Header';

export default function ImportPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Import" />
      <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-6xl mx-auto space-y-8 pb-10">
          {/* Page Title & Description */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Bill Import Center</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Support bulk import and smart deduplication for Alipay, WeChat, and major bank statements. The system automatically identifies formats and parses transaction details.</p>
          </div>

          {/* Step Process */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center w-full relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center relative z-10 w-1/3">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/30 ring-4 ring-white dark:ring-surface-dark mb-3">1</div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Select Source</span>
              </div>
              {/* Connector 1-2 */}
              <div className="absolute top-5 left-[16.66%] right-[50%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>
              {/* Step 2 */}
              <div className="flex flex-col items-center relative z-10 w-1/3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center font-medium mb-3">2</div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Upload File</span>
              </div>
              {/* Connector 2-3 */}
              <div className="absolute top-5 left-[50%] right-[16.66%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>
              {/* Step 3 */}
              <div className="flex flex-col items-center relative z-10 w-1/3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center font-medium mb-3">3</div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Result</span>
              </div>
            </div>

            {/* Step Content: Select Source */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">apps</span>
                Select Data Source
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Alipay */}
                <label className="group relative flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer transition-all hover:shadow-md">
                  <input type="radio" name="source" value="alipay" className="absolute right-3 top-3 w-4 h-4 text-primary border-gray-300 focus:ring-primary" defaultChecked />
                  <div className="w-14 h-14 rounded-xl bg-[#1677FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">payments</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 dark:text-white">Alipay</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">CSV / XLS</p>
                  </div>
                </label>
                {/* WeChat */}
                <label className="group relative flex flex-col items-center gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 cursor-pointer transition-all hover:shadow-md">
                  <input type="radio" name="source" value="wechat" className="absolute right-3 top-3 w-4 h-4 text-primary border-gray-300 focus:ring-primary" />
                  <div className="w-14 h-14 rounded-xl bg-[#07C160] flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">chat_bubble</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 dark:text-white">WeChat Pay</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">CSV</p>
                  </div>
                </label>
                {/* CMB */}
                <label className="group relative flex flex-col items-center gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 cursor-pointer transition-all hover:shadow-md">
                  <input type="radio" name="source" value="cmb" className="absolute right-3 top-3 w-4 h-4 text-primary border-gray-300 focus:ring-primary" />
                  <div className="w-14 h-14 rounded-xl bg-[#CB0000] flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">account_balance</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 dark:text-white">CMB</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">PDF / XLS</p>
                  </div>
                </label>
                {/* ICBC */}
                <label className="group relative flex flex-col items-center gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 cursor-pointer transition-all hover:shadow-md">
                  <input type="radio" name="source" value="icbc" className="absolute right-3 top-3 w-4 h-4 text-primary border-gray-300 focus:ring-primary" />
                  <div className="w-14 h-14 rounded-xl bg-[#C71B1E] flex items-center justify-center text-white shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">savings</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 dark:text-white">ICBC</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">PDF / CSV</p>
                  </div>
                </label>
                {/* JD */}
                <label className="group relative flex flex-col items-center gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 cursor-pointer transition-all hover:shadow-md">
                  <input type="radio" name="source" value="jd" className="absolute right-3 top-3 w-4 h-4 text-primary border-gray-300 focus:ring-primary" />
                  <div className="w-14 h-14 rounded-xl bg-[#E1251B] flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 dark:text-white">JD Finance</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">XLS</p>
                  </div>
                </label>
                {/* Meituan */}
                <label className="group relative flex flex-col items-center gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 cursor-pointer transition-all hover:shadow-md">
                  <input type="radio" name="source" value="meituan" className="absolute right-3 top-3 w-4 h-4 text-primary border-gray-300 focus:ring-primary" />
                  <div className="w-14 h-14 rounded-xl bg-[#FFC300] flex items-center justify-center text-white shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">restaurant</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 dark:text-white">Meituan</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">CSV</p>
                  </div>
                </label>
              </div>
              <div className="mt-8 flex justify-end">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
                  Next: Upload File
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Analysis Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Card */}
            <div className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Import Quality Trend</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Analysis of last 10 import batches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>New</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Merged</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><span className="w-2 h-2 rounded-full bg-orange-400"></span>Duplicate</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><span className="w-2 h-2 rounded-full bg-red-400"></span>Failed</span>
                </div>
              </div>
              {/* CSS Grid Chart */}
              <div className="flex-1 flex items-end justify-between gap-2 h-48 px-2">
                {[
                    { d: '10/01', n: 55, m: 20, dp: 15, f: 10 },
                    { d: '10/03', n: 60, m: 10, dp: 10, f: 5 },
                    { d: '10/05', n: 40, m: 5, dp: 20, f: 0 },
                    { d: '10/08', n: 75, m: 15, dp: 8, f: 2 },
                    { d: '10/12', n: 30, m: 5, dp: 5, f: 0 },
                    { d: '10/15', n: 45, m: 10, dp: 10, f: 15 },
                    { d: '10/19', n: 50, m: 10, dp: 30, f: 0 },
                    { d: '10/22', n: 65, m: 20, dp: 5, f: 2 },
                    { d: '10/25', n: 40, m: 8, dp: 12, f: 0 },
                    { d: 'Yesterday', n: 80, m: 10, dp: 5, f: 5 },
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 w-full group relative cursor-pointer">
                        <div className="w-full max-w-[40px] flex flex-col-reverse rounded-t-lg overflow-hidden h-full">
                            <div className="bg-red-400/90 w-full" style={{ height: `${item.f}%` }}></div>
                            <div className="bg-orange-400/90 w-full" style={{ height: `${item.dp}%` }}></div>
                            <div className="bg-blue-500/90 w-full" style={{ height: `${item.m}%` }}></div>
                            <div className="bg-emerald-500/90 w-full" style={{ height: `${item.n}%` }}></div>
                        </div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">{item.d}</span>
                    </div>
                ))}
              </div>
            </div>

            {/* Stats Summary */}
            <div className="lg:col-span-1 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col h-full">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Cumulative Data Overview</h3>
              <div className="flex flex-col gap-4 flex-1 justify-center">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Total Parsed</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">12,458 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">txns</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Successfully Imported</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">11,920 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">txns</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center text-orange-500">
                    <span className="material-symbols-outlined">filter_alt</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Smart Deduplication</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">485 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">txns</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* History Table */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Import History</h3>
              <button className="text-primary text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Source</th>
                    <th className="px-6 py-4 text-center">Total</th>
                    <th className="px-6 py-4 text-center">New</th>
                    <th className="px-6 py-4 text-center">Dup/Merge</th>
                    <th className="px-6 py-4 text-center">Failed</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">2023-10-26 14:30</td>
                    <td className="px-6 py-4 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <span className="w-6 h-6 rounded-full bg-[#1677FF] flex items-center justify-center text-white text-[10px]"><span className="material-symbols-outlined text-[14px]">payments</span></span>
                        Alipay_Oct.csv
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-300">245</td>
                    <td className="px-6 py-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">+240</td>
                    <td className="px-6 py-4 text-center text-orange-500">5</td>
                    <td className="px-6 py-4 text-center text-slate-300">-</td>
                    <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Success</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">2023-10-25 09:15</td>
                    <td className="px-6 py-4 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <span className="w-6 h-6 rounded-full bg-[#07C160] flex items-center justify-center text-white text-[10px]"><span className="material-symbols-outlined text-[14px]">chat_bubble</span></span>
                        WeChat_Sep.csv
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-300">180</td>
                    <td className="px-6 py-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">+150</td>
                    <td className="px-6 py-4 text-center text-orange-500">30</td>
                    <td className="px-6 py-4 text-center text-slate-300">-</td>
                    <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Success</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">2023-10-22 18:45</td>
                    <td className="px-6 py-4 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <span className="w-6 h-6 rounded-full bg-[#CB0000] flex items-center justify-center text-white text-[10px]"><span className="material-symbols-outlined text-[14px]">account_balance</span></span>
                        CMB_Credit_Oct.pdf
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-300">56</td>
                    <td className="px-6 py-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">+50</td>
                    <td className="px-6 py-4 text-center text-orange-500">4</td>
                    <td className="px-6 py-4 text-center text-red-500">2</td>
                    <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Partial</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
