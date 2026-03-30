import React from 'react';

export default function StatsView() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24">
      {/* Editorial Header Section */}
      <section className="mb-12">
        <span className="font-label text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60 mb-2 block">
          每周洞察
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-4">
          深度专注
        </h2>
        <p className="text-on-surface-variant max-w-xl font-medium leading-relaxed">
          你的认知空间正在蓬勃发展。本周，你的无干扰深度工作时间增加了 12%。
        </p>
      </section>

      <div className="bento-grid">
        {/* Main Chart: Focus Hours */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-[2rem] p-8 relative overflow-hidden">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-2xl font-bold text-on-surface">每周心流</h3>
              <p className="text-on-surface-variant font-label text-sm tracking-wide">3月12日 — 3月18日</p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-black text-primary tracking-tighter">32.5</span>
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest block">
                总小时数
              </span>
            </div>
          </div>

          {/* Simple CSS-based Bar Chart */}
          <div className="flex items-end justify-between h-64 gap-4 px-4">
            <div className="flex flex-col items-center gap-4 group w-full">
              <div className="w-full bg-surface-container-highest rounded-full relative overflow-hidden h-32">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary-container to-primary rounded-full"
                  style={{ height: '60%' }}
                ></div>
              </div>
              <span className="text-[10px] font-label font-bold text-outline-variant group-hover:text-primary transition-colors">
                周一
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group w-full">
              <div className="w-full bg-surface-container-highest rounded-full relative overflow-hidden h-48">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary-container to-primary rounded-full"
                  style={{ height: '85%' }}
                ></div>
              </div>
              <span className="text-[10px] font-label font-bold text-outline-variant group-hover:text-primary transition-colors">
                周二
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group w-full">
              <div className="w-full bg-surface-container-highest rounded-full relative overflow-hidden h-40">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary-container to-primary rounded-full"
                  style={{ height: '45%' }}
                ></div>
              </div>
              <span className="text-[10px] font-label font-bold text-outline-variant group-hover:text-primary transition-colors">
                周三
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group w-full">
              <div className="w-full bg-surface-container-highest rounded-full relative overflow-hidden h-56">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary-container to-primary rounded-full"
                  style={{ height: '100%' }}
                ></div>
              </div>
              <span className="text-[10px] font-label font-bold text-primary transition-colors">
                周四
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group w-full">
              <div className="w-full bg-surface-container-highest rounded-full relative overflow-hidden h-32">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary-container to-primary rounded-full"
                  style={{ height: '70%' }}
                ></div>
              </div>
              <span className="text-[10px] font-label font-bold text-outline-variant group-hover:text-primary transition-colors">
                周五
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group w-full">
              <div className="w-full bg-surface-container-highest rounded-full relative overflow-hidden h-24">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary-container to-primary rounded-full"
                  style={{ height: '30%' }}
                ></div>
              </div>
              <span className="text-[10px] font-label font-bold text-outline-variant group-hover:text-primary transition-colors">
                周六
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group w-full">
              <div className="w-full bg-surface-container-highest rounded-full relative overflow-hidden h-16">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary-container to-primary rounded-full"
                  style={{ height: '20%' }}
                ></div>
              </div>
              <span className="text-[10px] font-label font-bold text-outline-variant group-hover:text-primary transition-colors">
                周日
              </span>
            </div>
          </div>
        </div>

        {/* Focus Pulse Metric */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gradient-to-br from-primary-container to-primary rounded-[2rem] p-8 flex flex-col justify-between text-on-primary">
          <div>
            <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              timer
            </span>
            <h3 className="text-xl font-bold opacity-80">专注分布</h3>
          </div>
          <div>
            <span className="text-7xl font-black tracking-tighter block mb-1">64</span>
            <p className="font-label font-semibold uppercase tracking-widest text-xs opacity-70">
              已完成 64 个番茄钟
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-on-primary/10">
            <p className="text-sm font-medium">本周处于前 5% 的活跃用户</p>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-[2rem] p-8">
          <h3 className="text-xl font-bold mb-8">专注分布</h3>
          <div className="space-y-6">
            {/* Work */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>工作
                </span>
                <span className="text-on-surface-variant">18h 20m</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '56%' }}></div>
              </div>
            </div>
            {/* Study */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>学习
                </span>
                <span className="text-on-surface-variant">8h 45m</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full" style={{ width: '27%' }}></div>
              </div>
            </div>
            {/* Health */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>健康
                </span>
                <span className="text-on-surface-variant">5h 25m</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '17%' }}></div>
              </div>
            </div>
          </div>
          <button className="mt-10 w-full py-3 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-xs font-bold uppercase tracking-widest font-label text-primary">
            查看完整历史
          </button>
        </div>

        {/* Deep Work Session Log */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-[2rem] p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">最近记录</h3>
            <span className="material-symbols-outlined text-outline">more_horiz</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-surface-container-high/50 rounded-2xl hover:bg-surface-container-high transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">auto_stories</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">重构设计令牌</h4>
                  <p className="text-xs text-on-surface-variant font-label">昨天 • 工作</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-on-surface">90 min</p>
                <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                  完美心流
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-high/50 rounded-2xl hover:bg-surface-container-high transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">重构设计令牌</h4>
                  <p className="text-xs text-on-surface-variant font-label">昨天 • 工作</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-on-surface">45 min</p>
                <span className="text-[10px] text-tertiary font-bold uppercase tracking-tighter">
                  已完成
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-high/50 rounded-2xl hover:bg-surface-container-high transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">fitness_center</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">呼吸与冥想</h4>
                  <p className="text-xs text-on-surface-variant font-label">昨天 • 健康</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-on-surface">25 min</p>
                <span className="text-[10px] text-secondary font-bold uppercase tracking-tighter">
                  专注巅峰
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
