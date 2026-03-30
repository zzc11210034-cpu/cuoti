import React from 'react';

export default function TasksView() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-24">
      {/* Hero Header Section */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-primary uppercase tracking-[0.2em] text-[11px] mb-3 block">
              每日心流
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface">
              任务列表
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container-low px-6 py-3 rounded-xl">
              <span className="font-label text-on-surface-variant text-xs uppercase tracking-widest block mb-1">
                总投入
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-tertiary">12</span>
                <span className="material-symbols-outlined text-tertiary text-sm">timer</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Task Content Area: Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Primary Tasks (LHS) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Active Task Card */}
          <section className="relative p-8 rounded-[2rem] bg-surface-container-highest active-glow transition-all duration-500 overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <span className="font-label text-primary text-[10px] tracking-[0.3em] uppercase">
                进行中
              </span>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-headline font-bold text-primary mb-3">重构设计系统</h2>
              <p className="text-on-surface-variant text-lg max-w-md mb-8 leading-relaxed">
                专注于移动端仪表盘组件的色调分层和有机布局。
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                    <span className="material-symbols-outlined text-outline-variant">timer</span>
                  </div>
                  <span className="font-label text-xs text-on-surface-variant ml-2">3 / 4 组</span>
                </div>
                <button className="editorial-gradient text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
            </div>
          </section>

          {/* Task List Items */}
          <div className="space-y-3">
            {/* Task 2 */}
            <div className="group flex items-center justify-between p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                    收件箱清零计划
                  </h3>
                  <p className="font-label text-sm text-on-surface-variant">查看所有架构提案和反馈。</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="font-label text-xs text-outline ml-2">2</span>
              </div>
            </div>

            {/* Task 3 */}
            <div className="group flex items-center justify-between p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                    重构状态逻辑
                  </h3>
                  <p className="font-label text-sm text-on-surface-variant">优化实时编辑器的渲染流水线。</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="font-label text-xs text-outline ml-2">4</span>
              </div>
            </div>

            {/* Task 4 */}
            <div className="group flex items-center justify-between p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined">brush</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                    视觉情绪板
                  </h3>
                  <p className="font-label text-sm text-on-surface-variant">收集即将发布的'宁静空间'品牌设计参考。</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="font-label text-xs text-outline ml-2">1</span>
              </div>
            </div>
          </div>

          {/* Add Task Action */}
          <button className="w-full py-8 border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all group">
            <span className="material-symbols-outlined text-3xl mb-2 group-hover:scale-110 transition-transform">add</span>
            <span className="font-label text-xs uppercase tracking-widest">添加新意图</span>
          </button>
        </div>

        {/* Secondary Context (RHS) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-high rounded-[2rem] p-8 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <img
                className="w-full h-full object-cover"
                alt="abstract organic flowing texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDszcPYjP9C9hPyU-tY3d-Kwp5WsUNTOddHib4ny4SqhGqZqQ09ShpHzO4Zxj9zGtoGQ8kAJbk9laOPp8GJdpkuh-GE_lEFMXTWUtQ8wOArG8sM2-Vj_C9dsALDW8t0_C62-SnPQ_QG8-7TimrM0wzZwrsQ0iFhcsuPGqA_1sDjN3p_CVaU9BaOJnfbDerfep2TKu18PCujWmxCo7adjyw5UUlNlyUbz0e3ptYDqreE-CDHjmo0LkrlN2vc4nNLG5qsSKnAnn62eFix"
              />
            </div>
            <div className="relative z-10">
              <h4 className="text-lg font-headline font-bold mb-4">当前情绪</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider">已完成</span>
                  <span className="text-xl font-bold">08</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider">深度工作时长</span>
                  <span className="text-xl font-bold">4.2h</span>
                </div>
                <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full w-[65%] editorial-gradient rounded-full"></div>
                </div>
                <p className="text-[11px] font-label text-outline leading-relaxed">
                  你今天的效率比平时周一高出 15%。保持这份专注。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-[2rem] p-8">
            <h4 className="text-lg font-headline font-bold mb-4">当前情绪</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-surface-variant text-primary text-[10px] font-label font-bold uppercase tracking-wider">
                专注
              </span>
              <span className="px-3 py-1.5 rounded-full bg-surface-variant text-tertiary text-[10px] font-label font-bold uppercase tracking-wider">
                平静
              </span>
              <span className="px-3 py-1.5 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-label font-bold uppercase tracking-wider">
                极简
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
