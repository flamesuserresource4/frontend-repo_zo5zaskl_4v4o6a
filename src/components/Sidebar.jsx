import { Home, Users, Shield, Star, Database, Settings } from 'lucide-react';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'siswa', label: 'Siswa', icon: Users },
  { key: 'pelanggaran', label: 'Pelanggaran', icon: Shield },
  { key: 'prestasi', label: 'Prestasi', icon: Star },
  { key: 'master', label: 'Master Data', icon: Database },
  { key: 'pengguna', label: 'Pengaturan Pengguna', icon: Settings },
];

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="hidden md:flex flex-col w-72 shrink-0 h-screen sticky top-0 bg-[#081A2A] border-r border-blue-900/60 text-sky-50">
      <div className="px-6 py-6 border-b border-blue-900/60">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 shadow-[0_0_30px_-6px_rgba(56,189,248,0.8)]" />
            <div className="absolute inset-0 blur-md rounded-lg bg-sky-500/40" />
          </div>
          <div>
            <div className="text-sm tracking-widest text-sky-300 uppercase">AI Flames Blue</div>
            <div className="text-lg font-semibold">Student Guidance</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        {navItems.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition relative ${
                isActive
                  ? 'text-sky-100' 
                  : 'text-sky-300/80 hover:text-sky-100'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-sky-300' : 'text-sky-400/70'} />
              <span className="font-medium">{label}</span>
              {isActive && (
                <span className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-sky-400 via-cyan-300 to-indigo-500 shadow-[0_0_20px_rgba(56,189,248,0.8)] rounded-l-full" />
              )}
            </button>
          );
        })}
      </nav>
      <div className="p-6 text-xs text-sky-400/70 border-t border-blue-900/60">
        © {new Date().getFullYear()} Flames • Efficient. Insightful.
      </div>
    </aside>
  );
}
