"use client";

import { useState } from "react";
import Link from "next/link";

const Icon = ({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) => {
  const icons: Record<string, React.ReactNode> = {
    spectrum: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    layers: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    brain: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    map: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    cloud: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    arrow: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    ),
    rocket: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    menu: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    close: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  };
  return <>{icons[name] || null}</>;
};

export default function HomePage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [mobileMenu, setMobileMenu] = useState(false);
  const isAr = lang === "ar";

  const t = {
    nav: {
      features: isAr ? "الميزات" : "Features",
      how: isAr ? "كيف تعمل" : "How it works",
      pricing: isAr ? "الأسعار" : "Pricing",
      dashboard: isAr ? "لوحة التحكم" : "Dashboard",
      start: isAr ? "ابدأ مجاناً" : "Start Free",
    },
    hero: {
      badge: isAr ? "منصة SaaS متقدمة لاستكشاف الذهب" : "Advanced Gold Exploration SaaS",
      title: isAr ? "اكتشف أهداف الذهب بدقة أعلى" : "Discover Gold Targets with Higher Precision",
      subtitle: isAr
        ? "تحليل طيفي متعدد المستشعرات + نماذج هجينة + خرائط احتمالية متوافقة مع معايير JORC و NI 43-101. تدعم ASTER و Sentinel-2 و EMIT و EnMAP و PRISMA."
        : "Multi-sensor spectral analysis + hybrid models + prospectivity maps compliant with JORC & NI 43-101. Supports ASTER, Sentinel-2, EMIT, EnMAP & PRISMA.",
      cta: isAr ? "جرب التحليل مجاناً" : "Try Free Analysis",
      demo: isAr ? "شاهد كيف تعمل" : "See How It Works",
      disclaimer: isAr
        ? "الأداة تُحسّن ترتيب الأهداف ولا تؤكد تواجد الذهب. التحقق الميداني والتحاليل الجيوكيميائية ضروريان."
        : "The tool improves target ranking and does not confirm gold presence. Field verification and geochemical assays are essential.",
    },
    stats: [
      { value: "12+", label: isAr ? "مؤشر طيفي" : "Spectral Indices" },
      { value: "5", label: isAr ? "مستشعرات مدعومة" : "Supported Sensors" },
      { value: "JORC", label: isAr ? "تقارير متوافقة" : "Compliant Reports" },
      { value: "99.9%", label: isAr ? "وقت التشغيل" : "Uptime" },
    ],
    featuresTitle: isAr ? "لماذا GoldSpectra AI أقوى؟" : "Why GoldSpectra AI is Stronger?",
    features: [
      {
        icon: "spectrum",
        title: isAr ? "تحليل طيفي متقدم" : "Advanced Spectral Analysis",
        desc: isAr
          ? "مكتبة USGS Spectral Library كاملة + SAM مع معايرة ASTER/Sentinel-2 + دعم Hyperspectral (EMIT, EnMAP, PRISMA) + فصل المعادن الفرعية بـ Deep Learning."
          : "Full USGS Spectral Library + SAM with ASTER/Sentinel-2 calibration + Hyperspectral support (EMIT, EnMAP, PRISMA) + Deep Learning sub-mineral separation.",
      },
      {
        icon: "layers",
        title: isAr ? "تكامل متعدد الطبقات" : "Multi-Layer Fusion",
        desc: isAr
          ? "دمج المغناطيسية الجوية والجاذبية والرادار والخرائط الجيولوجية + نموذج Prospectivity هجين (Knowledge + Data-Driven) + Sensor Agreement Score."
          : "Integrate aeromagnetics, gravity, radar & geology maps + Hybrid Prospectivity model (Knowledge + Data-Driven) + Sensor Agreement Score.",
      },
      {
        icon: "brain",
        title: isAr ? "ذكاء اصطناعي و تحقق إحصائي" : "AI & Statistical Validation",
        desc: isAr
          ? "Spatial Cross-Validation + ROC-AUC + Uncertainty Maps + تقارير JORC/NI 43-101 جاهزة للمستثمرين."
          : "Spatial Cross-Validation + ROC-AUC + Uncertainty Maps + JORC/NI 43-101 ready investor reports.",
      },
      {
        icon: "map",
        title: isAr ? "خرائط وفرة المعادن" : "Relative Mineral Abundance",
        desc: isAr
          ? "ليس تصنيفاً ثنائياً فقط — خرائط كمية لوفرة المعادن النسبية مع مستوى ثقة لكل بكسل."
          : "Not just binary classification — quantitative relative mineral abundance maps with per-pixel confidence.",
      },
      {
        icon: "shield",
        title: isAr ? "أمان وامتثال مؤسسي" : "Enterprise Security & Compliance",
        desc: isAr
          ? "OAuth 2.0 / SSO + تشفير AES-256 + GDPR + SOC 2 + Audit Log كامل + وضع On-Premise."
          : "OAuth 2.0 / SSO + AES-256 encryption + GDPR + SOC 2 + Full Audit Log + On-Premise mode.",
      },
      {
        icon: "cloud",
        title: isAr ? "قابلية التوسع السحابية" : "Cloud Scalability",
        desc: isAr
          ? "معالجة غير متزامنة + PostGIS / COG + Tile Server + Docker/Kubernetes + REST API و Webhooks."
          : "Async processing + PostGIS / COG + Tile Server + Docker/Kubernetes + REST API & Webhooks.",
      },
    ],
    howTitle: isAr ? "كيف تعمل المنصة؟" : "How does it work?",
    steps: [
      {
        num: "01",
        title: isAr ? "حدد منطقة الدراسة" : "Define Study Area",
        desc: isAr ? "ارسم المضلع أو استورد Shapefile/KML. اختر المستشعرات والطبقات." : "Draw polygon or import Shapefile/KML. Select sensors and layers.",
      },
      {
        num: "02",
        title: isAr ? "شغّل التحليل" : "Run Analysis",
        desc: isAr ? "المعالجة تتم في الخلفية. احصل على إشعار عند الاكتمال." : "Processing runs in background. Get notified when complete.",
      },
      {
        num: "03",
        title: isAr ? "راجع الأهداف" : "Review Targets",
        desc: isAr ? "أولوية A/B/C + خرائط الوفرة + Uncertainty + Sensor Agreement." : "Priority A/B/C + abundance maps + Uncertainty + Sensor Agreement.",
      },
      {
        num: "04",
        title: isAr ? "صدّر التقارير" : "Export Reports",
        desc: isAr ? "GeoTIFF, KML, GeoPackage + تقارير JORC/NI 43-101 PDF." : "GeoTIFF, KML, GeoPackage + JORC/NI 43-101 PDF reports.",
      },
    ],
    pricingTitle: isAr ? "خطط مرنة لكل مرحلة" : "Flexible Plans for Every Stage",
    plans: [
      {
        name: isAr ? "مجاني" : "Free",
        price: "$0",
        period: isAr ? "/شهر" : "/mo",
        features: isAr
          ? ["منطقة 1 كم²", "تحليل واحد شهرياً", "مؤشرات أساسية", "تصدير KML", "دعم المجتمع"]
          : ["1 km² area", "1 analysis / month", "Basic indices", "KML export", "Community support"],
        cta: isAr ? "ابدأ مجاناً" : "Start Free",
        popular: false,
      },
      {
        name: isAr ? "احترافي" : "Pro",
        price: "$500",
        period: isAr ? "/شهر" : "/mo",
        features: isAr
          ? ["منطقة 25 كم²", "تحليل غير محدود", "كل المؤشرات + ML", "تصدير PDF + GeoTIFF", "تقارير JORC أساسية", "دعم أولوية"]
          : ["25 km² area", "Unlimited analyses", "All indices + ML", "PDF + GeoTIFF export", "Basic JORC reports", "Priority support"],
        cta: isAr ? "اشترك الآن" : "Subscribe Now",
        popular: true,
      },
      {
        name: isAr ? "مؤسسي" : "Enterprise",
        price: isAr ? "حسب الطلب" : "Custom",
        period: "",
        features: isAr
          ? ["مناطق غير محدودة", "API كامل + SSO", "Hyperspectral متقدم", "On-Premise", "استشارات جيولوجية", "دعم مخصص 24/7"]
          : ["Unlimited areas", "Full API + SSO", "Advanced Hyperspectral", "On-Premise", "Geological consulting", "24/7 dedicated support"],
        cta: isAr ? "تواصل معنا" : "Contact Us",
        popular: false,
      },
    ],
    ctaTitle: isAr ? "جاهز لرفع كفاءة استكشافك؟" : "Ready to boost your exploration efficiency?",
    ctaSub: isAr
      ? "انضم إلى الجيولوجيين وشركات التعدين التي تستخدم GoldSpectra AI لتحسين ترتيب الأهداف."
      : "Join geologists and mining companies using GoldSpectra AI to improve target ranking.",
    footer: {
      rights: isAr ? "جميع الحقوق محفوظة" : "All rights reserved",
      disclaimer: isAr
        ? "إخلاء مسؤولية: هذه الأداة أداة مساعدة لاتخاذ القرار فقط. لا تضمن وجود الذهب. يجب التحقق الميداني والتحاليل الجيوكيميائية دائماً."
        : "Disclaimer: This tool is a decision-support aid only. It does not guarantee gold presence. Field verification and geochemical assays are always required.",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark font-bold text-black text-sm">
              GS
            </div>
            <span className="text-lg font-bold tracking-tight">
              GoldSpectra <span className="text-gold">AI</span>
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted hover:text-gold transition">{t.nav.features}</a>
            <a href="#how" className="text-sm text-muted hover:text-gold transition">{t.nav.how}</a>
            <a href="#pricing" className="text-sm text-muted hover:text-gold transition">{t.nav.pricing}</a>
            <Link href="/dashboard" className="text-sm text-muted hover:text-gold transition">{t.nav.dashboard}</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted hover:border-gold hover:text-gold transition"
            >
              {isAr ? "EN" : "عربي"}
            </button>
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black hover:bg-gold-light transition"
            >
              {t.nav.start}
            </Link>
            <button className="md:hidden p-2 text-muted" onClick={() => setMobileMenu(!mobileMenu)}>
              <Icon name={mobileMenu ? "close" : "menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="border-t border-border bg-card px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-sm py-2" onClick={() => setMobileMenu(false)}>{t.nav.features}</a>
              <a href="#how" className="text-sm py-2" onClick={() => setMobileMenu(false)}>{t.nav.how}</a>
              <a href="#pricing" className="text-sm py-2" onClick={() => setMobileMenu(false)}>{t.nav.pricing}</a>
              <Link href="/dashboard" className="text-sm py-2 text-gold font-medium">{t.nav.dashboard}</Link>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            <span className="text-gold-gradient">{t.hero.title}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-base font-bold text-black hover:bg-gold-light transition shadow-lg shadow-gold/20"
            >
              {t.hero.cta}
              <Icon name="arrow" className="w-5 h-5" />
            </Link>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-medium text-foreground hover:border-gold/50 hover:text-gold transition"
            >
              {t.hero.demo}
            </a>
          </div>

          <p className="mt-8 text-xs text-muted/70 max-w-2xl mx-auto leading-relaxed border border-border/40 rounded-lg px-4 py-3 bg-card/50">
            ⚠️ {t.hero.disclaimer}
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gold">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.featuresTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((f, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-6 card-glow transition-all duration-300 hover:border-gold/30"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition">
                  <Icon name={f.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 sm:py-28 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.howTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-gold/20 mb-3">{s.num}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.pricingTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.plans.map((p, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 transition-all ${
                  p.popular
                    ? "border-gold bg-gradient-to-b from-gold/10 to-card scale-[1.02] shadow-xl shadow-gold/10"
                    : "border-border bg-card"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-black">
                    {isAr ? "الأكثر طلباً" : "Most Popular"}
                  </div>
                )}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gold">{p.price}</span>
                  <span className="text-muted text-sm">{p.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Icon name="check" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${
                    p.popular
                      ? "bg-gold text-black hover:bg-gold-light"
                      : "border border-border hover:border-gold hover:text-gold"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-muted text-lg mb-10">{t.ctaSub}</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-10 py-4 text-base font-bold text-black hover:bg-gold-light transition shadow-lg shadow-gold/25"
          >
            <Icon name="rocket" className="w-5 h-5" />
            {t.hero.cta}
          </Link>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-card/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark font-bold text-black text-xs">
                GS
              </div>
              <span className="font-semibold">
                GoldSpectra <span className="text-gold">AI</span>
              </span>
            </div>
            <p className="text-xs text-muted text-center max-w-2xl leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-border/40 text-center text-xs text-muted">
            © {new Date().getFullYear()} GoldSpectra AI. {t.footer.rights}.
          </div>
        </div>
      </footer>
    </div>
  );
}
