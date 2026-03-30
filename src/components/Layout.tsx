import React from 'react';
import { Tab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface text-on-background font-body selection:bg-primary/30 pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#0c0f0b] flex justify-between items-center px-6 py-4 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-[#1c211a] transition-colors duration-300 text-[#90d792]">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-2xl font-bold tracking-tighter text-[#90d792] font-headline">宁静空间</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-outline-variant/20 flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="User Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS1D0aWEU_Wh994NW8lz7wXHCBMxPz9wI01kGQxJ1zwWBFBtNV-mDSxA6UgOVRKtgTR8XQRqPKQgTiz70bXLyYPs23YCzaWHwCyYsndlEousURE0FGdOlhH6E6WQ7hW2XIp6tU0gSbt1e3bz523EyRz0LtMuY1Vj-dI7Xk7OCkKopVDURs-iewYsqIyHTgd9EXdatcQulhdoMriLL37ywrJ8U1KeHCON3salmJxQ5kxQHbxUzAU75yKNzpKcBgA7n7h3aUM-cVOYBL"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#10140f]/60 backdrop-blur-xl rounded-t-[24px] shadow-[0_-4px_40px_rgba(0,0,0,0.06)]">
        <NavItem
          icon="timer"
          label="专注"
          isActive={activeTab === 'focus'}
          onClick={() => onTabChange('focus')}
        />
        <NavItem
          icon="format_list_bulleted"
          label="任务"
          isActive={activeTab === 'tasks'}
          onClick={() => onTabChange('tasks')}
        />
        <NavItem
          icon="bar_chart"
          label="统计"
          isActive={activeTab === 'stats'}
          onClick={() => onTabChange('stats')}
        />
        <NavItem
          icon="settings"
          label="设置"
          isActive={activeTab === 'settings'}
          onClick={() => onTabChange('settings')}
        />
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, isActive, onClick }: NavItemProps) {
  if (isActive) {
    return (
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center text-[#90d792] bg-[#1c211a] rounded-2xl px-6 py-2 transition-transform active:scale-90"
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
        <span className="font-label text-[11px] font-medium uppercase tracking-widest">{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center text-[#434a40] px-6 py-2 hover:text-emerald-200 transition-all active:scale-90 duration-200"
    >
      <span className="material-symbols-outlined mb-1">{icon}</span>
      <span className="font-label text-[11px] font-medium uppercase tracking-widest">{label}</span>
    </button>
  );
}
