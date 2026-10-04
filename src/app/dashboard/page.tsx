"use client";

import { useState } from "react";
import Link from "next/link";

const Icon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    project: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    analysis: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    target: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    map: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    report: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    settings: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    play: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    download: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    alert: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  };
  return <>{icons[name] || null}</>;
};

const MOCK_TARGETS = [
  { id: "T-001", name: "الهدف الشمالي أ", priority: "A", score: 0.92, mineral: "Alunite + Muscovite", sensor: 0.89, area: "2.4 كم²" },
  { id: "T-002", name: "الهدف الغربي ب", priority: "A", score: 0.87, mineral: "Kaolinite + Illite", sensor: 0.84, area: "1.8 كم²" },
  { id: "T-003", name: "الهدف الجنوبي ج", priority: "B", score: 0.74, mineral: "Jarosite", sensor: 0.71, area: "3.1 كم²" },
  { id: "T-004", name: "الهدف الشرقي د", priority: "B", score: 0.68, mineral: "High-Al Muscovite", sensor: 0.65, area: "1.2 كم²" },
  { id: "T-005", name: "الهدف الأوسط هـ", priority: "C", score: 0.51, mineral: "Low-Al Muscovite", sensor: 0.48, area: "4.5 كم²" },
];

const MOCK_KPIS = [
  { label: "إجمالي الأهداف", value: "47", change: "+12%", color: "text-gold" },
  { label: "أولوية A", value: "9", change: "+3", color: "text-success" },
  { label: "أولوية B", value: "18", change: "+5", color: "text-warning" },
  { label: "أولوية C", value: "20", change: "+4", color: "text-muted" },
];

export default function DashboardPage() {
  const [lang] = useState<"ar" | "en">("ar");
  const [activeTab, setActiveTab] = useState("overview");
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const isAr = lang === "ar";

  const runAnalysis = () => {
    setAnalyzing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          return 100;
        }
        return p + Math.random() * 12;
      });
    }, 400);
  };

  const priorityColor = (p: string) => {
    if (p === "A") return "bg-success/20 text-success border-success/40";
    if (p === "B") return "bg-warning/20 text-warning border-warning/40";
    return "bg-muted/20 text-muted border-muted/40";
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-l border-border bg-card/50">
        <div className="p-5 border-b border-border">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark font-bold text-black text-sm">
              GS
            </div>
            <span className="font-bold">
              GoldSpectra <span className="text-gold">AI</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "overview", icon: "home", label: "نظرة عامة" },
            { id: "projects", icon: "project", label: "المشاريع" },
            { id: "analysis", icon: "analysis", label: "التحليل الطيفي" },
            { id: "targets", icon: "target", label: "الأهداف" },
            { id: "maps", icon: "map", label: "الخرائط" },
            { id: "reports", icon: "report", label: "التقارير" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                activeTab === item.id
                  ? "bg-gold/15 text-gold font-medium"
                  : "text-muted hover:bg-card-hover hover:text-foreground"
              }`}
            >
              <Icon name={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="rounded-xl bg-gold/10 border border-gold/20 p-4">
            <div className="text-xs text-gold font-medium mb-1">الخطة الحالية</div>
            <div className="font-bold">Pro · $500/شهر</div>
            <div className="text-xs text-muted mt-1">18.4 / 25 كم² مستخدمة</div>
            <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-gold rounded-full" style={{ width: "73%" }} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b border-border flex items-center justify-between px-4 sm:px-6 bg-card/30">
          <div className="flex items-center gap-3">
            <Link href="/" className="lg:hidden flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark font-bold text-black text-xs">
                GS
              </div>
            </Link>
            <h1 className="text-sm font-semibold">
              {activeTab === "overview" && "لوحة التحكم"}
              {activeTab === "analysis" && "التحليل الطيفي"}
              {activeTab === "targets" && "الأهداف"}
              {activeTab === "projects" && "المشاريع"}
              {activeTab === "maps" && "الخرائط"}
              {activeTab === "reports" && "التقارير"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted hidden sm:inline">مشروع: حزام الذهب — نجران</span>
            <div className="h-8 w-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-xs font-bold text-gold">
              ج
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6 space-y-6">
          {/* Disclaimer */}
          <div className="flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/5 px-4 py-3 text-xs text-warning/90">
            <Icon name="alert" className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              تنبيه: النتائج تُحسّن ترتيب الأهداف فقط ولا تؤكد وجود الذهب. التحقق الميداني والتحاليل الجيوكيميائية ضروريان قبل أي قرار استثماري. التقارير متوافقة مع روح معايير JORC/NI 43-101 كدعم لاتخاذ القرار.
            </p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MOCK_KPIS.map((k, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4 card-glow">
                <div className="text-xs text-muted mb-1">{k.label}</div>
                <div className={`text-2xl font-bold ${k.color}`}>{k.value}</div>
                <div className="text-xs text-success mt-1">{k.change} هذا الشهر</div>
              </div>
            ))}
          </div>

          {/* Analysis Runner */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-semibold">تشغيل تحليل طيفي جديد</h2>
                <p className="text-sm text-muted mt-1">ASTER + Sentinel-2 + DEM · SAM + Relative Abundance</p>
              </div>
              <button
                onClick={runAnalysis}
                disabled={analyzing}
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-black hover:bg-gold-light transition disabled:opacity-60"
              >
                <Icon name="play" className="w-4 h-4" />
                {analyzing ? "جاري التحليل..." : "تشغيل التحليل"}
              </button>
            </div>

            {analyzing && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted">
                  <span>معالجة الطبقات الطيفية + نموذج Prospectivity...</span>
                  <span>{Math.min(100, Math.round(progress))}%</span>
                </div>
                <div className="h-2 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-l from-gold to-gold-light rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, progress)}%` }}
                  />
                </div>
              </div>
            )}

            {!analyzing && progress >= 100 && (
              <div className="rounded-lg bg-success/10 border border-success/30 px-4 py-3 text-sm text-success">
                ✓ اكتمل التحليل بنجاح. تم تحديد 5 أهداف جديدة. Sensor Agreement Score: 0.86
              </div>
            )}
          </div>

          {/* Targets Table */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h2 className="font-semibold">أحدث الأهداف المكتشفة</h2>
              <button className="text-xs text-gold hover:underline flex items-center gap-1">
                <Icon name="download" className="w-3.5 h-3.5" />
                تصدير GeoPackage
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted text-xs">
                    <th className="px-6 py-3 text-right font-medium">المعرف</th>
                    <th className="px-4 py-3 text-right font-medium">الاسم</th>
                    <th className="px-4 py-3 text-right font-medium">الأولوية</th>
                    <th className="px-4 py-3 text-right font-medium">النتيجة</th>
                    <th className="px-4 py-3 text-right font-medium">المعدن الرئيسي</th>
                    <th className="px-4 py-3 text-right font-medium">توافق المستشعرات</th>
                    <th className="px-4 py-3 text-right font-medium">المساحة</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_TARGETS.map((t) => (
                    <tr key={t.id} className="border-b border-border/50 hover:bg-card-hover transition">
                      <td className="px-6 py-3 font-mono text-xs text-gold">{t.id}</td>
                      <td className="px-4 py-3 font-medium">{t.name}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-bold border ${priorityColor(t.priority)}`}>
                          {t.priority}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono">{t.score.toFixed(2)}</td>
                      <td className="px-4 py-3 text-muted">{t.mineral}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 rounded-full bg-border overflow-hidden">
                            <div className="h-full bg-gold rounded-full" style={{ width: `${t.sensor * 100}%` }} />
                          </div>
                          <span className="text-xs font-mono">{t.sensor.toFixed(2)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted">{t.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map + Uncertainty mock */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="map" />
                خريطة احتمالية الاستكشاف
              </h3>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-[#0f1a0f] via-[#1a2a1a] to-[#0a0a0b] border border-border relative overflow-hidden">
                <div className="absolute top-[20%] left-[30%] w-24 h-20 rounded-full bg-success/40 blur-xl" />
                <div className="absolute top-[35%] left-[45%] w-16 h-16 rounded-full bg-success/50 blur-lg" />
                <div className="absolute top-[50%] left-[20%] w-20 h-16 rounded-full bg-warning/30 blur-xl" />
                <div className="absolute top-[25%] right-[25%] w-14 h-14 rounded-full bg-warning/25 blur-lg" />
                <div className="absolute bottom-[20%] left-[40%] w-28 h-16 rounded-full bg-muted/20 blur-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-muted mb-1">Prospectivity Map · Hybrid Model</div>
                    <div className="text-sm font-medium text-gold">نجران — حزام الذهب</div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2 text-[10px]">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success" /> عالية</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-warning" /> متوسطة</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-muted" /> منخفضة</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="analysis" />
                خريطة عدم اليقين (Uncertainty)
              </h3>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1a0f1a] via-[#2a1a2a] to-[#0a0a0b] border border-border relative overflow-hidden">
                <div className="absolute top-[15%] left-[25%] w-20 h-24 rounded-full bg-danger/20 blur-xl" />
                <div className="absolute top-[40%] right-[20%] w-28 h-20 rounded-full bg-warning/25 blur-xl" />
                <div className="absolute bottom-[25%] left-[35%] w-16 h-16 rounded-full bg-success/20 blur-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-muted mb-1">Pixel-level Confidence</div>
                    <div className="text-sm font-medium text-gold">متوسط الثقة: 78%</div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2 text-[10px]">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success" /> ثقة عالية</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-warning" /> متوسطة</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-danger" /> منخفضة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sensor Agreement + Minerals */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold mb-4">Sensor Agreement Score</h3>
              <div className="space-y-3">
                {[
                  { name: "ASTER × Sentinel-2", score: 0.91 },
                  { name: "ASTER × Hyperspectral", score: 0.84 },
                  { name: "Sentinel-2 × Hyperspectral", score: 0.79 },
                  { name: "الإجمالي (مرجح)", score: 0.86 },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-40 text-xs text-muted shrink-0">{s.name}</div>
                    <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{ width: `${s.score * 100}%` }} />
                    </div>
                    <div className="w-10 text-xs font-mono text-right">{s.score.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold mb-4">وفرة المعادن النسبية (أعلى 5)</h3>
              <div className="space-y-3">
                {[
                  { name: "K-Alunite", pct: 34 },
                  { name: "High-Al Muscovite", pct: 28 },
                  { name: "Kaolinite", pct: 18 },
                  { name: "Jarosite", pct: 12 },
                  { name: "Na-Alunite", pct: 8 },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-36 text-xs text-muted shrink-0">{m.name}</div>
                    <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-gradient-to-l from-gold to-gold-light rounded-full" style={{ width: `${m.pct}%` }} />
                    </div>
                    <div className="w-10 text-xs font-mono text-right">{m.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
