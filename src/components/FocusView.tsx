import React from 'react';

export default function FocusView() {
  return (
    <main className="min-h-screen pt-20 flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Atmospheric Background Element */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] bg-tertiary/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Main Timer Section */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-12">
        {/* Circular Timer */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              className="text-surface-variant"
              cx="50%"
              cy="50%"
              fill="transparent"
              r="48%"
              stroke="currentColor"
              strokeWidth="8"
            ></circle>
            <circle
              className="text-tertiary drop-shadow-[0_0_8px_rgba(142,244,233,0.3)]"
              cx="50%"
              cy="50%"
              fill="transparent"
              r="48%"
              stroke="currentColor"
              strokeDasharray="100 100"
              strokeLinecap="round"
              strokeWidth="8"
            ></circle>
          </svg>
          <div className="text-center z-10">
            <span className="font-headline text-[5rem] md:text-[8rem] font-extrabold tracking-tighter text-on-background leading-none">
              25:00
            </span>
            <div className="mt-2">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-outline font-semibold">
                深度专注状态
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button className="w-20 h-20 rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all active:scale-90 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">replay</span>
          </button>
          {/* Start/Pause Primary CTA */}
          <button className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shadow-lg active:scale-95 transition-transform duration-200">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_arrow
            </span>
          </button>
          <button className="w-20 h-20 rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all active:scale-90 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">skip_next</span>
          </button>
        </div>

        {/* Focus Info Cards (Asymmetric Bento) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
          {/* Current Task Card */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between border-l-4 border-primary/20 md:col-span-5">
            <div>
              <span className="font-label text-[11px] font-bold uppercase tracking-widest text-primary mb-2 block">
                Currently Active
              </span>
              <h2 className="font-headline text-3xl font-bold text-on-surface leading-tight tracking-tight">
                设计系统
              </h2>
            </div>
            <div className="mt-6 flex items-center gap-2 text-outline">
              <span className="material-symbols-outlined text-sm">info</span>
              <span className="font-label text-xs font-medium">正在专注于共享组件架构</span>
            </div>
          </div>

          {/* Background Music Section */}
          <div className="w-full bg-surface-container-low/40 rounded-[2rem] p-6 border border-outline-variant/10 md:col-span-5">
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="font-label text-[11px] font-bold uppercase tracking-widest text-primary">
                Atmospheric Soundscape
              </span>
              <span className="material-symbols-outlined text-outline text-lg">music_note</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
              {/* Rain */}
              <button className="flex-shrink-0 flex flex-col items-center gap-2 group transition-all">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-outline group-hover:text-primary group-hover:bg-surface-container-highest transition-all">
                  <span className="material-symbols-outlined text-2xl">water_drop</span>
                </div>
                <span className="font-label text-[10px] uppercase tracking-wider text-outline group-hover:text-on-surface">
                  雨声
                </span>
              </button>
              {/* Forest - Selected */}
              <button className="flex-shrink-0 flex flex-col items-center gap-2 group transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(144,215,146,0.15)] transition-all">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    park
                  </span>
                </div>
                <span className="font-label text-[10px] uppercase tracking-wider text-primary font-bold">
                  森林
                </span>
              </button>
              {/* White Noise */}
              <button className="flex-shrink-0 flex flex-col items-center gap-2 group transition-all">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-outline group-hover:text-primary group-hover:bg-surface-container-highest transition-all">
                  <span className="material-symbols-outlined text-2xl">waves</span>
                </div>
                <span className="font-label text-[10px] uppercase tracking-wider text-outline group-hover:text-on-surface">
                  禅宗
                </span>
              </button>
              {/* Lo-fi */}
              <button className="flex-shrink-0 flex flex-col items-center gap-2 group transition-all">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-outline group-hover:text-primary group-hover:bg-surface-container-highest transition-all">
                  <span className="material-symbols-outlined text-2xl">headset</span>
                </div>
                <span className="font-label text-[10px] uppercase tracking-wider text-outline group-hover:text-on-surface">
                  低保真
                </span>
              </button>
              {/* Wind */}
              <button className="flex-shrink-0 flex flex-col items-center gap-2 group transition-all">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-outline group-hover:text-primary group-hover:bg-surface-container-highest transition-all">
                  <span className="material-symbols-outlined text-2xl">air</span>
                </div>
                <span className="font-label text-[10px] uppercase tracking-wider text-outline group-hover:text-on-surface">
                  风声
                </span>
              </button>
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-surface-container-high rounded-[2rem] p-8 flex flex-col items-center justify-center text-center md:col-span-5">
            <span className="font-label text-[11px] font-bold uppercase tracking-widest text-tertiary mb-4 block">
              Daily Session
            </span>
            <div className="flex items-end gap-1">
              <span className="font-headline text-5xl font-extrabold text-on-surface">3</span>
              <span className="font-headline text-2xl font-bold text-outline mb-1">/ 4</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-highest rounded-full mt-6 overflow-hidden">
              <div className="w-3/4 h-full bg-tertiary rounded-full"></div>
            </div>
            <p className="font-label text-[10px] text-outline-variant mt-3 uppercase tracking-wider font-semibold">
              ONE MORE FOR A LONG BREAK
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
