import React from 'react';

export default function SettingsView() {
  return (
    <main className="pt-24 px-6 max-w-2xl mx-auto">
      {/* Editorial Header Section */}
      <section className="mb-12">
        <span className="font-label text-primary text-[11px] font-medium uppercase tracking-widest block mb-2">
          配置
        </span>
        <h2 className="text-5xl font-extrabold tracking-tight font-headline text-emerald-50 mb-4">
          设置
        </h2>
        <p className="text-on-surface-variant font-body leading-relaxed max-w-md">
          根据你的节奏定制空间。这些调整有助于保持你的心流状态。
        </p>
      </section>

      {/* Settings List Container */}
      <div className="space-y-12">
        {/* Timer Intervals Group */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-headline text-on-surface">时间间隔</h3>
            <span className="material-symbols-outlined text-outline-variant">schedule</span>
          </div>
          <div className="space-y-4">
            {/* Setting Item: Focus Duration */}
            <div className="group flex items-center justify-between p-6 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high">
              <div className="flex flex-col">
                <label className="font-headline font-semibold text-on-surface">专注时长</label>
                <span className="font-label text-xs text-on-surface-variant mt-1">
                  深度工作推荐时长
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-20 bg-surface-container-highest border-none rounded-lg text-center font-bold text-primary focus:ring-2 focus:ring-tertiary py-2 transition-all"
                  type="number"
                  defaultValue="25"
                />
                <span className="font-label text-xs uppercase tracking-widest text-outline">分钟</span>
              </div>
            </div>

            {/* Setting Item: Short Break */}
            <div className="group flex items-center justify-between p-6 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high">
              <div className="flex flex-col">
                <label className="font-headline font-semibold text-on-surface">短休息</label>
                <span className="font-label text-xs text-on-surface-variant mt-1">
                  标准的 5 分钟小休
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-20 bg-surface-container-highest border-none rounded-lg text-center font-bold text-primary focus:ring-2 focus:ring-tertiary py-2 transition-all"
                  type="number"
                  defaultValue="5"
                />
                <span className="font-label text-xs uppercase tracking-widest text-outline">分钟</span>
              </div>
            </div>

            {/* Setting Item: Long Break */}
            <div className="group flex items-center justify-between p-6 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high">
              <div className="flex flex-col">
                <label className="font-headline font-semibold text-on-surface">长休息</label>
                <span className="font-label text-xs text-on-surface-variant mt-1">
                  恢复性的长时休息
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-20 bg-surface-container-highest border-none rounded-lg text-center font-bold text-primary focus:ring-2 focus:ring-tertiary py-2 transition-all"
                  type="number"
                  defaultValue="15"
                />
                <span className="font-label text-xs uppercase tracking-widest text-outline">分钟</span>
              </div>
            </div>

            {/* Setting Item: Long Break Frequency */}
            <div className="group flex items-center justify-between p-6 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high">
              <div className="flex flex-col">
                <label className="font-headline font-semibold text-on-surface">长休息频率</label>
                <span className="font-label text-xs text-on-surface-variant mt-1">
                  长休息前的专注轮数
                </span>
              </div>
              <div className="flex items-center gap-4">
                <select className="appearance-none bg-surface-container-highest border-none rounded-lg px-6 py-2 font-bold text-primary focus:ring-2 focus:ring-tertiary cursor-pointer">
                  <option>2</option>
                  <option>3</option>
                  <option defaultValue="4">4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Automation & Feedback Group */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-headline text-on-surface">心流自动化</h3>
            <span className="material-symbols-outlined text-outline-variant">bolt</span>
          </div>
          <div className="space-y-4">
            {/* Toggle: Auto-start Breaks */}
            <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl">
              <div className="flex flex-col">
                <label className="font-headline font-semibold text-on-surface">自动开始休息</label>
                <span className="font-label text-xs text-on-surface-variant mt-1">
                  专注结束后自动跳转
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Toggle: Sound Effects */}
            <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl">
              <div className="flex flex-col">
                <label className="font-headline font-semibold text-on-surface">音效</label>
                <span className="font-label text-xs text-on-surface-variant mt-1">
                  阶段切换时的听觉提示
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Toggle: Notifications */}
            <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl">
              <div className="flex flex-col">
                <label className="font-headline font-semibold text-on-surface">通知</label>
                <span className="font-label text-xs text-on-surface-variant mt-1">
                  计时结束后的系统提醒
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Dangerous Area / Reset */}
        <section className="pt-8 flex justify-center">
          <button className="px-8 py-4 rounded-full font-headline font-bold text-primary hover:bg-surface-container-high transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            重置为默认模式
          </button>
        </section>
      </div>
    </main>
  );
}
