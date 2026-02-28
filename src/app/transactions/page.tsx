import React from 'react';
import Header from '@/components/Header';

export default function TransactionsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Transactions" />
      <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Breadcrumb & Title */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-slate-900 dark:text-slate-100 font-medium">Transaction Log</span>
            </div>
            <div className="flex justify-between items-end">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Transaction Log</h1>
              <div className="hidden sm:flex text-sm text-slate-500 gap-4">
                <span>Total Income: <span className="text-emerald-500 font-semibold">¥ 12,450.00</span></span>
                <span>Total Expense: <span className="text-red-500 font-semibold">¥ 5,320.50</span></span>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-6 transition-all">
            {/* Filter Row 1 */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
              <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                {/* Date Range */}
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 px-3 h-10 w-full sm:w-auto">
                  <span className="material-symbols-outlined text-slate-400 text-[20px] mr-2">calendar_month</span>
                  <input className="bg-transparent border-none p-0 text-sm w-24 focus:ring-0 text-slate-700 dark:text-slate-200 font-medium placeholder-slate-400" placeholder="Start Date" type="text" defaultValue="2023-10-01" />
                  <span className="mx-2 text-slate-400">-</span>
                  <input className="bg-transparent border-none p-0 text-sm w-24 focus:ring-0 text-slate-700 dark:text-slate-200 font-medium placeholder-slate-400" placeholder="End Date" type="text" defaultValue="2023-10-31" />
                </div>
                {/* Transaction Type Tabs */}
                <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
                  <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-slate-700 text-primary shadow-sm transition-all">All</button>
                  <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all">Income</button>
                  <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all">Expense</button>
                </div>
              </div>
              {/* Search */}
              <div className="flex w-full lg:w-auto gap-2">
                <div className="relative flex-1 lg:w-64">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">search</span>
                  <input className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 dark:text-slate-200 placeholder-slate-400" placeholder="Search keyword, merchant..." type="text" />
                </div>
                <button className="h-10 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">Search</button>
                <button className="h-10 px-4 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Reset</button>
              </div>
            </div>
            
            {/* Filter Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
               {/* Amount Range */}
               <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount Range</label>
                  <div className="flex items-center gap-2">
                      <input className="w-full h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary text-slate-700 dark:text-slate-200" placeholder="¥ Min" type="number" />
                      <span className="text-slate-400">-</span>
                      <input className="w-full h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary text-slate-700 dark:text-slate-200" placeholder="¥ Max" type="number" />
                  </div>
               </div>
               {/* Account */}
               <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Account</label>
                  <div className="relative">
                      <select className="w-full h-9 pl-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-200 focus:ring-primary focus:border-primary appearance-none">
                          <option>All Accounts</option>
                          <option>CMB Savings (9527)</option>
                          <option>Alipay</option>
                          <option>WeChat Wallet</option>
                          <option>Cash</option>
                      </select>
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px] pointer-events-none">expand_more</span>
                  </div>
               </div>
               {/* Category */}
               <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</label>
                  <div className="relative">
                      <select className="w-full h-9 pl-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-200 focus:ring-primary focus:border-primary appearance-none">
                          <option>All Categories</option>
                          <option>Food & Dining</option>
                          <option>Transportation</option>
                          <option>Shopping</option>
                          <option>Housing</option>
                      </select>
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px] pointer-events-none">expand_more</span>
                  </div>
               </div>
               {/* Source */}
               <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Channel</label>
                  <div className="flex gap-2">
                      <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                          <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent" />
                          <span className="text-sm text-slate-700 dark:text-slate-200">Alipay</span>
                      </label>
                      <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                          <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent" />
                          <span className="text-sm text-slate-700 dark:text-slate-200">WeChat</span>
                      </label>
                  </div>
               </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col flex-1">
            {/* Toolbar */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex flex-wrap justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Found <span className="text-slate-900 dark:text-white font-bold">524</span> records</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export
                </button>
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-600"></div>
                <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">settings</span>
                  Settings
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-12">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent" />
                    </th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider min-w-[120px]">Date</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider min-w-[140px]">Merchant</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider min-w-[200px]">Description</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right min-w-[120px]">Amount</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center min-w-[100px]">Type</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider min-w-[120px]">Category</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider min-w-[140px]">Account</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center min-w-[80px]">Source</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right min-w-[140px]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="py-3 px-6">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent" />
                    </td>
                    <td className="py-3 px-6 text-slate-600 dark:text-slate-300 font-medium">2023-10-24 <br/><span className="text-xs font-normal text-slate-400">14:30</span></td>
                    <td className="py-3 px-6 font-medium text-slate-900 dark:text-white">Starbucks Coffee</td>
                    <td className="py-3 px-6 text-slate-500 dark:text-slate-400 truncate max-w-[200px]">Afternoon tea team building</td>
                    <td className="py-3 px-6 text-right font-bold text-red-500">185.00</td>
                    <td className="py-3 px-6 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Expense</span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-orange-400"></div>
                        <span className="text-slate-700 dark:text-slate-200">Food & Dining</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-slate-600 dark:text-slate-300">CMB Savings (9527)</td>
                    <td className="py-3 px-6 text-center text-slate-400">
                      <span className="material-symbols-outlined text-[20px] text-blue-500">qr_code_2</span>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 text-slate-400 hover:text-primary transition-colors" title="View">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors" title="Edit">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-red-600 transition-colors" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-700/30 transition-colors group">
                    <td className="py-3 px-6">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent" />
                    </td>
                    <td className="py-3 px-6 text-slate-600 dark:text-slate-300 font-medium">2023-10-23 <br/><span className="text-xs font-normal text-slate-400">09:15</span></td>
                    <td className="py-3 px-6 font-medium text-slate-900 dark:text-white">Apple Store</td>
                    <td className="py-3 px-6 text-slate-500 dark:text-slate-400 truncate max-w-[200px]">iPhone 15 Pro Max</td>
                    <td className="py-3 px-6 text-right font-bold text-red-500">9,999.00</td>
                    <td className="py-3 px-6 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Expense</span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-purple-400"></div>
                        <span className="text-slate-700 dark:text-slate-200">Shopping</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-slate-600 dark:text-slate-300">Huabei</td>
                    <td className="py-3 px-6 text-center text-slate-400">
                      <span className="material-symbols-outlined text-[20px] text-sky-500">credit_card</span>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-red-600 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="py-3 px-6">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent" />
                    </td>
                    <td className="py-3 px-6 text-slate-600 dark:text-slate-300 font-medium">2023-10-22 <br/><span className="text-xs font-normal text-slate-400">18:00</span></td>
                    <td className="py-3 px-6 font-medium text-slate-900 dark:text-white">Company Transfer</td>
                    <td className="py-3 px-6 text-slate-500 dark:text-slate-400 truncate max-w-[200px]">October Salary</td>
                    <td className="py-3 px-6 text-right font-bold text-emerald-500">15,000.00</td>
                    <td className="py-3 px-6 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Income</span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-emerald-400"></div>
                        <span className="text-slate-700 dark:text-slate-200">Salary</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-slate-600 dark:text-slate-300">CMB Savings (9527)</td>
                    <td className="py-3 px-6 text-center text-slate-400">
                      <span className="material-symbols-outlined text-[20px] text-slate-500">account_balance</span>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-red-600 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-surface-dark">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">524</span> entries
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-200 disabled:opacity-50">
                        <span className="material-symbols-outlined text-[20px]">first_page</span>
                    </button>
                    <button className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-200 disabled:opacity-50">
                        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium">1</button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium">2</button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium">3</button>
                    <span className="px-2 text-slate-400">...</span>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium">53</button>
                    <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                    <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-[20px]">last_page</span>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
