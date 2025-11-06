import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import HeroSpline from './components/HeroSpline';
import Dashboard from './components/Dashboard';
import TablesAndForms from './components/TablesAndForms';

export default function App() {
  const [active, setActive] = useState('dashboard');
  const user = { name: 'A. Pratama', role: 'Admin' };

  return (
    <div className="min-h-screen bg-[#071522] text-sky-50">
      <div className="flex">
        <Sidebar active={active} onSelect={setActive} />
        <div className="flex-1 min-w-0">
          <Topbar user={user} />
          <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">
            <HeroSpline />
            {active === 'dashboard' && <Dashboard />}
            {active !== 'dashboard' && <TablesAndForms />}
          </main>
        </div>
      </div>
    </div>
  );
}
