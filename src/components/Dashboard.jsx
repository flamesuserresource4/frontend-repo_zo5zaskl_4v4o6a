import { Users, Shield, Star, Flame } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent = 'from-sky-500 to-indigo-600' }) => (
  <div className="relative rounded-xl p-5 bg-[#0B2136] border border-blue-900/50 overflow-hidden">
    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-2xl`} />
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-[#0D2742] border border-blue-900/60 text-sky-300">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-sky-300/80 text-sm">{label}</div>
        <div className="text-sky-50 text-2xl font-semibold tracking-tight">{value}</div>
      </div>
    </div>
  </div>
);

const MiniChart = () => (
  <div className="rounded-xl p-5 bg-[#0B2136] border border-blue-900/50">
    <div className="text-sky-300/80 text-sm mb-3">Tren Pelanggaran per Bulan</div>
    <div className="h-28 w-full grid grid-cols-12 items-end gap-1">
      {[4,6,5,8,7,9,6,5,7,10,8,11].map((h,i) => (
        <div key={i} className="relative">
          <div className="w-full rounded-t bg-gradient-to-t from-sky-600 to-cyan-400" style={{ height: `${h * 6}px` }} />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.6)]" />
        </div>
      ))}
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Siswa" value="1,240" />
        <StatCard icon={Shield} label="Pelanggaran Terbaru" value="12" accent="from-cyan-400 to-sky-600" />
        <StatCard icon={Star} label="Prestasi Terbaru" value="7" accent="from-indigo-500 to-violet-600" />
        <StatCard icon={Flame} label="Poin Tertinggi" value="98" accent="from-amber-400 to-orange-600" />
      </div>
      <MiniChart />
    </div>
  );
}
