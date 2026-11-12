import React, { useState } from 'react';
import { 
  Search, 
  Trash2, 
  Eye, 
  MoreVertical, 
  Mail, 
  Check, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  Plus
} from 'lucide-react';
import { INITIAL_TABLE_DATA } from '../data/mockData';

export default function DataTableSection({ onOpenPredictor }) {
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedRows, setSelectedRows] = useState([]);
  const [tableData, setTableData] = useState(INITIAL_TABLE_DATA);

  // Filter table data
  const filteredData = tableData.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'All' || 
      (statusFilter === 'Paid' && item.balanceStatus === 'paid') ||
      (statusFilter === 'Pending' && item.balanceStatus === 'negative');

    return matchesSearch && matchesStatus;
  });

  // Pagination calculation
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + entriesPerPage);

  // Row selection
  const toggleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map(d => d.id));
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(r => r !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDeleteRow = (id) => {
    setTableData(tableData.filter(d => d.id !== id));
  };

  return (
    <div className="space-y-8">
      
      {/* 1. MAIN INVOICE & RESPONDENT TABLE (Matching Images 4 & 5) */}
      <div className="rounded-2xl bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs overflow-hidden">
        
        {/* Top Table Controls matching Reference */}
        <div className="p-5 border-b border-slate-200 dark:border-dark-border flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 flex-wrap">
            {/* Show entries dropdown */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
              <span>Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="h-9 px-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 dark:border-dark-border dark:bg-dark-surface dark:text-white cursor-pointer focus:outline-none"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
            </div>

            {/* Create Invoice / Predict Record Button matching reference */}
            <button
              onClick={onOpenPredictor}
              className="h-9 px-4 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-xs hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-xs"
            >
              <span>Create Invoice</span>
            </button>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Search client */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search client"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-9 pl-9 pr-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 dark:border-dark-border dark:bg-dark-surface dark:text-white dark:placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors w-44 sm:w-56"
              />
            </div>

            {/* Status Dropdown Filter */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 dark:border-dark-border dark:bg-dark-surface dark:text-gray-300 focus:outline-none cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

        </div>

        {/* The Table matching Reference Image 4 & 5 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-dark-border text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                <th className="py-3.5 px-4 w-10">
                  <input
                    type="checkbox"
                    checked={paginatedData.length > 0 && selectedRows.length === paginatedData.length}
                    onChange={toggleSelectAll}
                    className="rounded border-slate-300 dark:border-gray-700 bg-white dark:bg-dark-surface text-emerald-500 focus:ring-0 cursor-pointer h-3.5 w-3.5"
                  />
                </th>
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4">Client</th>
                <th className="py-3.5 px-4">Total</th>
                <th className="py-3.5 px-4">Issued Date</th>
                <th className="py-3.5 px-4">Balance</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-dark-border text-xs">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-slate-400 dark:text-gray-500">
                    No matching records found.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item) => {
                  const isSelected = selectedRows.includes(item.id);

                  return (
                    <tr 
                      key={item.id}
                      className={`hover:bg-slate-50 dark:hover:bg-[#1e2025] transition-colors ${
                        isSelected ? 'bg-slate-100/70 dark:bg-dark-surface/80' : ''
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-3 px-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectRow(item.id)}
                          className="rounded border-slate-300 dark:border-gray-700 bg-white dark:bg-dark-surface text-emerald-500 focus:ring-0 cursor-pointer h-3.5 w-3.5"
                        />
                      </td>

                      {/* ID */}
                      <td className="py-3 px-4 font-mono font-medium text-slate-500 dark:text-gray-400">
                        {item.id}
                      </td>

                      {/* Status Icon matching Images: green mail, yellow check, blue download */}
                      <td className="py-3 px-4 text-center">
                        <div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-slate-100 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
                          {item.statusIcon === 'mail' && (
                            <Mail className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                          )}
                          {item.statusIcon === 'check' && (
                            <Check className="h-3.5 w-3.5 text-amber-500 dark:text-amber-400" />
                          )}
                          {item.statusIcon === 'download' && (
                            <Download className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                          )}
                        </div>
                      </td>

                      {/* Client (Avatar, Name, Role) */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={item.avatar} 
                            alt={item.name} 
                            className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200 dark:ring-gray-700" 
                          />
                          <div>
                            <span className="font-semibold text-slate-900 dark:text-white block">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-gray-400 block -mt-0.5">
                              {item.role}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Total */}
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                        {item.total}
                      </td>

                      {/* Issued Date */}
                      <td className="py-3 px-4 text-slate-500 dark:text-gray-400 font-medium">
                        {item.issuedDate}
                      </td>

                      {/* Balance Badge matching reference */}
                      <td className="py-3 px-4">
                        {item.balanceStatus === 'paid' ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/20">
                            Paid
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                            {item.balance}
                          </span>
                        )}
                      </td>

                      {/* Actions matching reference icons: Trash, Eye, Three dots */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button 
                            onClick={() => handleDeleteRow(item.id)}
                            className="p-1 rounded text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-rose-400 dark:hover:bg-dark-surface transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                          <button 
                            onClick={onOpenPredictor}
                            className="p-1 rounded text-slate-400 hover:text-emerald-600 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-emerald-400 dark:hover:bg-dark-surface transition-colors"
                            title="View / Predict"
                          >
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                          <button 
                            className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-dark-surface transition-colors"
                            title="More options"
                          >
                            <MoreVertical className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer matching Image 4 & 5 */}
        <div className="p-4 border-t border-slate-200 dark:border-dark-border flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-gray-400">
          <div>
            Showing {totalEntries > 0 ? startIndex + 1 : 0} to {Math.min(startIndex + entriesPerPage, totalEntries)} of {totalEntries} entries
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-2.5 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-300 dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`h-7 w-7 rounded font-medium text-xs transition-colors ${
                  currentPage === i + 1
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                    : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-2.5 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-300 dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>


      {/* 2. BASIC DATA TABLE SECTION (Matching Image 7) */}
      <div className="rounded-2xl bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs overflow-hidden p-6 space-y-4">
        
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Basic Data Table</h2>
          <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Developer Compensation & Payment Gateway Mapping</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-dark-border text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase">
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Paid by</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-dark-border">
              {[
                { name: "Jack Alfredo", email: "jack@shadcnstudio.com", amount: "$316.00", status: "Paid", card: "Mastercard" },
                { name: "Maria Gonzalez", email: "maria.g@shadcnstudio.com", amount: "$253.40", status: "Pending", card: "Visa" },
                { name: "John Doe", email: "john.doe@shadcnstudio.com", amount: "$852.00", status: "Paid", card: "Mastercard" },
                { name: "Emily Carter", email: "emily.carter@shadcnstudio.com", amount: "$889.00", status: "Pending", card: "Visa" },
                { name: "David Lee", email: "david.lee@shadcnstudio.com", amount: "$723.16", status: "Paid", card: "Mastercard" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-[#1e2025] transition-colors">
                  
                  {/* Customer (Avatar + Name + Email) */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-gray-800 flex items-center justify-center font-bold text-slate-700 dark:text-gray-300">
                        {row.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{row.name}</div>
                        <div className="text-[11px] text-slate-500 dark:text-gray-400">{row.email}</div>
                      </div>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                    {row.amount}
                  </td>

                  {/* Status pill */}
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.status === 'Paid'
                        ? 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-dark-surface dark:text-gray-200 dark:border-dark-border'
                        : 'bg-slate-100 text-slate-500 border border-slate-200 dark:bg-dark-surface dark:text-gray-400 dark:border-dark-border'
                    }`}>
                      {row.status}
                    </span>
                  </td>

                  {/* Paid by card badge (Mastercard / Visa) matching Image 7 */}
                  <td className="py-3 px-4">
                    {row.card === 'Mastercard' ? (
                      <div className="inline-flex items-center justify-center px-2 py-1 rounded bg-white w-12 h-7 shadow-xs border border-slate-200">
                        <div className="flex -space-x-1">
                          <span className="h-3.5 w-3.5 rounded-full bg-[#eb001b]" />
                          <span className="h-3.5 w-3.5 rounded-full bg-[#f79e1b] opacity-90" />
                        </div>
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center px-2 py-1 rounded bg-white w-12 h-7 font-black italic text-blue-800 text-[11px] tracking-tight shadow-xs border border-slate-200">
                        VISA
                      </div>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-right">
                    <button className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white p-1">
                      <MoreVertical className="h-3.5 w-3.5" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
