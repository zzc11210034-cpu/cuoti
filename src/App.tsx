'use client';

import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { UploadCloud, PlusSquare, Vault, Activity, Settings, Zap, Trash2 } from 'lucide-react';

// 1. 定义数据结构
interface BugRecord {
  id: number;
  image: string;
  tag: string;
  errorLogic: string;
  ironRule: string;
  createdAt: string;
}

// 封装安全的 Storage 访问，防止 iframe 中 Origin not allowed 报错
const safeStorage = {
  getItem: (key: string) => {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      console.warn('localStorage access denied, using memory fallback');
      return (window as any)[`_mem_${key}`] || null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      (window as any)[`_mem_${key}`] = value;
    }
  }
};

const TAGS = ['言语', '图形', '逻辑', '资料', '数量', '申论'];

export default function LogicVault() {
  const [activeTab, setActiveTab] = useState<'ADD' | 'VAULT' | 'AUDIT'>('ADD');
  
  // ADD 页面状态
  const [selectedTag, setSelectedTag] = useState(TAGS[0]);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [errorLogic, setErrorLogic] = useState('');
  const [ironRule, setIronRule] = useState('');
  const [showSavedToast, setShowSavedToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // VAULT 页面状态
  const [records, setRecords] = useState<BugRecord[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // AUDIT 页面状态
  const [currentAuditRecord, setCurrentAuditRecord] = useState<BugRecord | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // 初始化加载数据
  useEffect(() => {
    loadRecords();
  }, []);

  const pickRandomRecord = () => {
    if (records.length > 0) {
      const randomIndex = Math.floor(Math.random() * records.length);
      setCurrentAuditRecord(records[randomIndex]);
      setIsRevealed(false);
    } else {
      setCurrentAuditRecord(null);
    }
  };

  useEffect(() => {
    if (activeTab === 'AUDIT') {
      pickRandomRecord();
    }
  }, [activeTab, records]); // Added records as dependency so it updates if records change

  const loadRecords = () => {
    try {
      const data = JSON.parse(safeStorage.getItem('logicVault') || '[]');
      setRecords(data);
    } catch (error) {
      console.error('Failed to access localStorage:', error);
      setRecords([]);
    }
  };

  // 2. 图片处理 (FileReader -> Base64)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // 3. 存入 LocalStorage
  const saveToVault = () => {
    if (!base64Image || !ironRule) {
      alert('必须上传截图并输入【做题铁律】才能存入金库！');
      return;
    }

    const newRecord: BugRecord = {
      id: Date.now(),
      image: base64Image,
      tag: selectedTag,
      errorLogic: errorLogic,
      ironRule: ironRule,
      createdAt: new Date().toISOString(),
    };

    let updatedData = [newRecord, ...records];
    try {
      const existingData = JSON.parse(safeStorage.getItem('logicVault') || '[]');
      updatedData = [newRecord, ...existingData];
      safeStorage.setItem('logicVault', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
    
    // 更新列表并清空表单
    setRecords(updatedData);
    setBase64Image(null);
    setErrorLogic('');
    setIronRule('');
    setSelectedTag(TAGS[0]);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2000);
  };

  // 4. 清理特定记录 (可选的辅助功能)
  const deleteRecord = (id: number) => {
    const updatedData = records.filter(record => record.id !== id);
    try {
      safeStorage.setItem('logicVault', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Failed to update localStorage:', error);
    }
    setRecords(updatedData);
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col pb-28">
      {/* 顶部状态栏 */}
      <header className="p-4 border-b border-black flex items-center justify-between sticky top-0 bg-white z-40">
        <h1 className="text-xl font-bold flex items-center gap-2 tracking-tight">
          {`>_ LOGIC_VAULT`}
          <span className="text-xs text-black/40 font-normal">v1.0 / ALPHA</span>
        </h1>
        <button className="text-black hover:text-black/60 transition-colors">
          <Settings size={20} />
        </button>
      </header>

      {/* 动态渲染主体内容 */}
      <div className="flex-grow">
        
        {/* ================= ADD 模块 ================= */}
        {activeTab === 'ADD' && (
          <section className="p-4 md:p-6 lg:p-10 flex flex-col items-center animate-in fade-in duration-300">
            <div className="w-full max-w-xl space-y-8">
              <h2 className="text-2xl font-light tracking-widest">添加错题</h2>
              
              {/* 图片上传区域 */}
              <div 
                className="w-full h-56 border-2 border-dashed border-black/30 rounded-lg flex flex-col items-center justify-center p-4 space-y-3 hover:border-black cursor-pointer group relative transition-colors" 
                onClick={() => fileInputRef.current?.click()}
              >
                {base64Image ? (
                  <img src={base64Image} alt="Bug Preview" className="w-full h-full object-contain" />
                ) : (
                  <>
                    <UploadCloud className="w-10 h-10 text-black/40 group-hover:text-black transition-colors" />
                    <span className="text-sm text-black/70">上传错题截图</span>
                    <span className="text-xs text-black/40">点击或拖拽</span>
                  </>
                )}
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
              </div>

              {/* 标签选择 */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-black/60 uppercase tracking-wider">选择模块</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 border border-black rounded-none text-sm transition-all ${selectedTag === tag ? 'bg-black text-white' : 'hover:bg-black/10'}`}
                    >
                      [{tag}]
                    </button>
                  ))}
                </div>
              </div>

              {/* 推导断裂点 */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-black/60 uppercase tracking-wider">推导断裂点 (Bug 记录)</label>
                <textarea
                  rows={3}
                  value={errorLogic}
                  onChange={(e) => setErrorLogic(e.target.value)}
                  placeholder="例如：被B选项的因果倒置骗了..."
                  className="w-full p-4 border border-black rounded-none focus:outline-none focus:ring-1 focus:ring-black text-sm resize-none bg-black/5"
                />
              </div>

              {/* 做题铁律 */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-black/60 uppercase tracking-wider flex justify-between">
                  <span>做题铁律 (Iron Rule)</span>
                  <span className={ironRule.length > 30 ? 'text-red-500' : ''}>{ironRule.length}/30</span>
                </label>
                <input
                  type="text"
                  maxLength={30}
                  value={ironRule}
                  onChange={(e) => setIronRule(e.target.value)}
                  placeholder="输入肌肉记忆纪律（限30字）"
                  className="w-full p-4 border-2 border-black rounded-none focus:outline-none text-base font-bold placeholder:font-normal"
                />
              </div>

              {/* 保存按钮 */}
              <button
                onClick={saveToVault}
                className="w-full p-4 bg-black text-white text-lg font-bold flex items-center justify-center gap-2 hover:bg-black/80 transition-colors rounded-none mt-4"
              >
                <Zap size={20} />
                存入金库
              </button>
            </div>
          </section>
        )}

        {/* ================= VAULT 模块 ================= */}
        {activeTab === 'VAULT' && (
          <section className="p-4 md:p-6 lg:p-10 flex flex-col items-center animate-in fade-in duration-300">
            <div className="w-full max-w-xl space-y-6">
              <div className="flex justify-between items-end border-b border-black pb-4">
                <h2 className="text-2xl font-light tracking-widest">铁律金库</h2>
                <span className="text-sm font-bold bg-black text-white px-3 py-1">TOTAL: {records.length}</span>
              </div>

              {records.length === 0 ? (
                <div className="py-20 text-center text-black/40 text-sm">金库空空如也，快去刷题吧。</div>
              ) : (
                <div className="space-y-4">
                  {records.map(record => (
                    <div key={record.id} className="border border-black p-4 transition-all bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {/* 默认显示的极简栏 */}
                      <div 
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setExpandedId(expandedId === record.id ? null : record.id)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold border border-black px-2 py-1">[{record.tag}]</span>
                          <span className="font-bold">{record.ironRule}</span>
                        </div>
                        <span className="text-xl">{expandedId === record.id ? '−' : '+'}</span>
                      </div>

                      {/* 点击后展开的详情区 */}
                      {expandedId === record.id && (
                        <div className="mt-4 pt-4 border-t border-black/20 space-y-4 animate-in slide-in-from-top-2 duration-200">
                          {record.image && (
                            <img src={record.image} alt="Original Bug" className="w-full border border-black/10" />
                          )}
                          <div className="bg-black/5 p-3 text-sm">
                            <span className="font-bold mr-2 text-black/60">断裂点:</span>
                            {record.errorLogic || '未记录'}
                          </div>
                          <div className="flex justify-end">
                            <button onClick={() => deleteRecord(record.id)} className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1">
                              <Trash2 size={14} /> 删除
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ================= AUDIT 模块 ================= */}
        {activeTab === 'AUDIT' && (
          <section className="p-4 md:p-6 lg:p-10 flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in duration-300">
            {records.length === 0 ? (
              <div className="text-center space-y-4">
                <Activity size={48} className="mx-auto text-black/20" />
                <h2 className="text-xl tracking-widest font-bold">金库资产不足</h2>
                <p className="text-sm text-black/50">请先去刷题录入。</p>
              </div>
            ) : currentAuditRecord ? (
              <div className="w-full max-w-xl flex flex-col items-center">
                <div className="w-full border-2 border-black bg-white p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center space-y-8 transition-all">
                  {/* 高压回忆区 */}
                  <div className="space-y-4 w-full">
                    <span className="inline-block border-2 border-black px-3 py-1 text-sm font-bold tracking-widest uppercase">
                      [{currentAuditRecord.tag}]
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black leading-tight">
                      {currentAuditRecord.ironRule}
                    </h3>
                  </div>

                  {/* 翻牌后展示区 */}
                  {isRevealed && (
                    <div className="w-full pt-8 border-t-2 border-black border-dashed space-y-6 animate-in slide-in-from-top-4 duration-300">
                      {currentAuditRecord.image && (
                        <img src={currentAuditRecord.image} alt="Bug Screenshot" className="w-full border-2 border-black object-contain" />
                      )}
                      <div className="bg-black/5 p-4 border-l-4 border-black text-left">
                        <span className="font-black text-black/60 block mb-1 text-xs uppercase tracking-wider">推导断裂点:</span>
                        <p className="text-sm md:text-base font-medium">{currentAuditRecord.errorLogic || '未记录'}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 操作按钮 */}
                <button
                  onClick={() => isRevealed ? pickRandomRecord() : setIsRevealed(true)}
                  className="mt-10 w-full p-5 bg-black text-white text-xl font-black tracking-widest hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] border-2 border-black"
                >
                  {isRevealed ? 'NEXT / 抽取下一条' : 'REVEAL / 还原现场'}
                </button>
              </div>
            ) : null}
          </section>
        )}

      </div>

      {/* 底部导航栏 - 固定在最下方 */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-black bg-white z-50">
        <nav className="flex items-center max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab('ADD')}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${activeTab === 'ADD' ? 'bg-black text-white' : 'text-black hover:bg-black/5'}`}
          >
            <PlusSquare size={20} />
            <span className="text-[10px] font-bold tracking-widest">ADD / 添加</span>
          </button>
          <button
            onClick={() => setActiveTab('VAULT')}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${activeTab === 'VAULT' ? 'bg-black text-white' : 'text-black hover:bg-black/5'}`}
          >
            <Vault size={20} />
            <span className="text-[10px] font-bold tracking-widest">VAULT / 金库</span>
          </button>
          <button
            onClick={() => setActiveTab('AUDIT')}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${activeTab === 'AUDIT' ? 'bg-black text-white' : 'text-black hover:bg-black/5'}`}
          >
            <Activity size={20} />
            <span className="text-[10px] font-bold tracking-widest">AUDIT / 审计</span>
          </button>
        </nav>
      </footer>

      {/* 极简 Toast 反馈 */}
      {showSavedToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 px-6 py-3 bg-black text-white font-bold text-sm tracking-widest z-50 animate-in slide-in-from-top-4">
          SAVED SUCCESSFULLY.
        </div>
      )}
    </main>
  );
}
