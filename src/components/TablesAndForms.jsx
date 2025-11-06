import { Search, Plus, Upload, Eye, Edit, Trash2, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

const StatusBadge = ({ type }) => {
  const map = {
    reported: 'bg-sky-900/50 text-sky-300 border border-sky-800/60',
    processed: 'bg-blue-900/40 text-sky-200 border border-blue-800/60',
    resolved: 'bg-emerald-900/30 text-emerald-300 border border-emerald-800/60',
    submitted: 'bg-amber-900/30 text-amber-300 border border-amber-800/60',
    verified: 'bg-teal-900/30 text-teal-300 border border-teal-800/60',
    rejected: 'bg-rose-900/30 text-rose-300 border border-rose-800/60',
  };
  return <span className={`px-2.5 py-1 rounded-full text-xs ${map[type]}`}>{type.charAt(0).toUpperCase()+type.slice(1)}</span>
}

const Table = ({ title, actions, rows }) => (
  <div className="rounded-xl bg-[#0B2136] border border-blue-900/50 overflow-hidden">
    <div className="p-4 flex items-center justify-between">
      <div className="text-sky-100 font-semibold">{title}</div>
      <div className="flex items-center gap-2">
        {actions}
      </div>
    </div>
    <div className="px-4 pb-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="relative w-full max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-300" />
          <input className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#0D2742] border border-blue-900/60 text-sky-100 placeholder:text-sky-400/70 focus:outline-none focus:ring-2 focus:ring-sky-500/60" placeholder="Search..." />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-sky-100/90">
          <thead className="text-sky-300/80">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Nama</th>
              <th className="px-3 py-2 text-left font-medium">Kelas</th>
              <th className="px-3 py-2 text-left font-medium">Status</th>
              <th className="px-3 py-2 text-left font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-[#0D2742]">
                <td className="px-3 py-2">{r.nama}</td>
                <td className="px-3 py-2">{r.kelas}</td>
                <td className="px-3 py-2"><StatusBadge type={r.status} /></td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-md bg-[#0F2E4D] hover:bg-[#12355A] text-sky-200"><Eye size={16} /></button>
                    <button className="p-1.5 rounded-md bg-[#0F2E4D] hover:bg-[#12355A] text-sky-200"><Edit size={16} /></button>
                    <button className="p-1.5 rounded-md bg-gradient-to-br from-rose-600 to-red-700 text-white hover:opacity-90"><Trash2 size={16} /></button>
                    <button className="p-1.5 rounded-md bg-gradient-to-br from-emerald-600 to-teal-700 text-white hover:opacity-90 hidden md:inline-flex"><CheckCircle2 size={16} /></button>
                    <button className="p-1.5 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 text-white hover:opacity-90 hidden md:inline-flex"><XCircle size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ImportModal = ({ open, onClose }) => {
  const [file, setFile] = useState(null);
  const [rows] = useState([
    { nama: 'Adi Putra', kelas: 'X IPA 1', status: 'verified' },
    { nama: 'Siti Aisyah', kelas: 'XI IPS 2', status: 'rejected' },
  ]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-[#0B2136] border border-blue-900/60 overflow-hidden">
        <div className="p-4 border-b border-blue-900/60 flex items-center justify-between">
          <div className="text-sky-100 font-semibold">Import Siswa (CSV/Excel)</div>
          <button onClick={onClose} className="text-sky-300 hover:text-sky-100">Close</button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-3">
            <input type="file" onChange={(e)=> setFile(e.target.files?.[0] || null)} className="block w-full text-sm text-sky-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-br file:from-sky-600 file:to-indigo-700 file:text-white hover:file:opacity-90" />
            <button disabled={!file} className="px-4 py-2 rounded-lg bg-gradient-to-br from-sky-600 to-indigo-700 text-white disabled:opacity-50">Upload</button>
          </div>
          <div className="rounded-lg border border-blue-900/60">
            <div className="px-3 py-2 text-sky-300/80 text-sm">Preview</div>
            <div className="p-3 overflow-x-auto">
              <table className="min-w-full text-sm text-sky-100/90">
                <thead className="text-sky-300/80">
                  <tr>
                    <th className="px-2 py-1 text-left font-medium">Nama</th>
                    <th className="px-2 py-1 text-left font-medium">Kelas</th>
                    <th className="px-2 py-1 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r,i)=> (
                    <tr key={i} className="hover:bg-[#0D2742]">
                      <td className="px-2 py-1">{r.nama}</td>
                      <td className="px-2 py-1">{r.kelas}</td>
                      <td className="px-2 py-1"><StatusBadge type={r.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TablesAndForms() {
  const [open, setOpen] = useState(false);
  const rows = [
    { nama: 'Budi Santoso', kelas: 'X IPA 2', status: 'reported' },
    { nama: 'Rina Wulandari', kelas: 'XI IPS 1', status: 'processed' },
    { nama: 'Dewi Lestari', kelas: 'XII IPA 3', status: 'resolved' },
  ];

  return (
    <div className="space-y-6">
      <Table
        title="Manajemen Siswa"
        rows={rows}
        actions={(
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg bg-gradient-to-br from-sky-600 to-indigo-700 text-white flex items-center gap-2"><Plus size={16} /> Add Student</button>
            <button onClick={()=> setOpen(true)} className="px-3 py-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center gap-2"><Upload size={16} /> Import</button>
          </div>
        )}
      />

      <div className="rounded-xl bg-[#0B2136] border border-blue-900/50 p-4">
        <div className="text-sky-100 font-semibold mb-4">Form Pelanggaran</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-sky-300/80 mb-1">Siswa</label>
            <select className="w-full bg-[#0D2742] border border-blue-900/60 text-sky-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/60">
              <option>Budi Santoso</option>
              <option>Rina Wulandari</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-sky-300/80 mb-1">Jenis Pelanggaran</label>
            <select className="w-full bg-[#0D2742] border border-blue-900/60 text-sky-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/60">
              <option>Tata Tertib</option>
              <option>Kedisiplinan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-sky-300/80 mb-1">Tanggal</label>
            <input type="date" className="w-full bg-[#0D2742] border border-blue-900/60 text-sky-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
          </div>
          <div>
            <label className="block text-sm text-sky-300/80 mb-1">Bukti Foto</label>
            <input type="file" className="block w-full text-sm text-sky-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-br file:from-sky-600 file:to-indigo-700 file:text-white hover:file:opacity-90" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-sky-300/80 mb-1">Deskripsi</label>
            <textarea rows={4} className="w-full bg-[#0D2742] border border-blue-900/60 text-sky-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/60" placeholder="Detail kejadian..." />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg bg-gradient-to-br from-sky-600 to-indigo-700 text-white">Submit</button>
          <button className="px-4 py-2 rounded-lg bg-[#0D2742] border border-blue-900/60 text-sky-200">Cancel</button>
        </div>
      </div>

      <Table
        title="Daftar Prestasi"
        rows={[
          { nama: 'Dewi Lestari', kelas: 'XII IPA 3', status: 'submitted' },
          { nama: 'Budi Santoso', kelas: 'X IPA 2', status: 'verified' },
          { nama: 'Rina Wulandari', kelas: 'XI IPS 1', status: 'rejected' },
        ]}
        actions={(
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg bg-gradient-to-br from-sky-600 to-indigo-700 text-white flex items-center gap-2"><Plus size={16} /> Add</button>
          </div>
        )}
      />

      <ImportModal open={open} onClose={()=> setOpen(false)} />
    </div>
  );
}
