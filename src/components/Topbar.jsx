import { Search, Bell, ChevronDown, User } from 'lucide-react';

export default function Topbar({ user }) {
  return (
    <header className="sticky top-0 z-20 bg-[#0A2236]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0A2236]/60 border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex-1 flex items-center gap-3">
          <div className="relative hidden md:block w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-300" size={18} />
            <input
              type="text"
              placeholder="Search students, violations, achievements..."
              className="w-full pl-10 pr-4 py-2 bg-[#0B2A45] text-sky-100 placeholder:text-sky-400/60 rounded-lg border border-blue-900/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-400/60 shadow-inner"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-lg hover:bg-[#0B2A45] text-sky-300">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-[0_0_10px_2px_rgba(251,191,36,0.6)]" />
          </button>
          <div className="h-6 w-px bg-blue-900/60" />
          <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#0B2A45] text-sky-100">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 grid place-items-center text-white">
              <User size={16} />
            </div>
            <div className="hidden md:block text-left leading-tight">
              <div className="text-sm font-medium">{user.name}</div>
              <div className="text-[11px] text-sky-300/80">{user.role}</div>
            </div>
            <ChevronDown size={16} className="text-sky-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
