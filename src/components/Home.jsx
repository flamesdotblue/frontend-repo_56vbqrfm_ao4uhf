import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandLogo = ({ label }) => (
  <div className="flex items-center justify-center h-10 rounded-md bg-white/60 backdrop-blur border border-slate-200 px-4">
    <svg width="100" height="20" viewBox="0 0 100 20" aria-label={label} role="img">
      <title>{label}</title>
      <text x="0" y="15" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" fontSize="14" fill="#0f172a">{label}</text>
    </svg>
  </div>
);

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <main id="home" className="pt-16">
      {/* Hero with Spline */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div style={{ y, opacity }} className="space-y-5">
            <span className="inline-flex items-center rounded-full bg-[#e7f6fb] px-3 py-1 text-xs font-medium text-[#0e2a36] ring-1 ring-[#bde7f5]">New: Ecosystem overlaps</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Grow faster with your partners
            </h1>
            <p className="text-lg text-slate-700 max-w-xl">
              PRM that connects data, partners, and revenue. Map overlaps, co-sell efficiently, and turn your ecosystem into a growth engine.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-md bg-[#2596be] px-5 py-3 text-sm font-semibold text-white hover:brightness-105" style={{ boxShadow: '0 12px 28px rgba(37,150,190,0.28)' }}>Get started</a>
              <a href="#features" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">See features</a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 ring-2 ring-white text-[10px] font-semibold text-emerald-700">{i + 1}</span>
                ))}
              </div>
              <span className="text-sm text-slate-600">Trusted by modern partner teams</span>
            </div>
          </motion.div>

          <div className="lg:justify-self-end w-full max-w-md">
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-slate-200 p-4 shadow-xl">
              <div className="rounded-xl bg-[#e7f6fb] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-700">Overlap score</p>
                    <p className="text-3xl font-semibold text-slate-900">87%</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-[#2596be] font-bold">↗</span>
                </div>
                <div className="mt-4 h-2 w-full rounded bg-white">
                  <div className="h-2 rounded bg-[#2596be]" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {['Accounts','Opps','Influence'].map((k, i) => (
                  <div key={k} className="rounded-lg border border-slate-200 p-3 bg-white">
                    <p className="text-xs text-slate-500">{k}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{[120, 45, '$620k'][i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div className="absolute bottom-6 inset-x-0">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-xl bg-white/70 backdrop-blur border border-slate-200 p-3 shadow-md">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {['Snowflake','Notion','Figma','Segment','Braze','Amplitude'].map((label) => (
                  <BrandLogo key={label} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Everything you need to co-sell</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">From account mapping to partner-sourced pipeline, streamline collaboration with a platform built for GTM teams.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Account mapping', desc: 'Securely map overlaps, filter by ICP, and prioritize high-fit accounts.' },
              { title: 'Co-selling workflows', desc: 'Request intros, share intel, and track influence in one place.' },
              { title: 'Partner portal', desc: 'Enable partners with resources, updates, and deal registration.' },
              { title: 'Attribution', desc: 'Attribute sourced & influenced revenue with transparent reporting.' },
              { title: 'Integrations', desc: 'Connect your CRM, data warehouse, and marketing tools.' },
              { title: 'Security', desc: 'Enterprise-grade encryption, SSO, and granular permissions.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">✓</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-feature explanations (Deep dive) */}
      <section id="details" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#e7f6fb] px-3 py-1 text-xs font-medium text-[#0e2a36] ring-1 ring-[#bde7f5]">How it works</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900">Sub-features explained</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Go deeper into the workflows your partner team uses every day. Clear steps, outcomes, and value.</p>
          </div>

          <div className="mt-12 space-y-10">
            {/* Account mapping deep dive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">Account mapping, done right</h3>
                  <p className="mt-2 text-sm text-slate-600">Connect your CRM and instantly see where your ICP overlaps with partners. Prioritize by intent, size, and territory.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Secure two-way matching with opt-in controls</li>
                    <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Filters for ICP, intent signals, and lifecycle stage</li>
                    <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Export ready lists for AE follow-up</li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#e7f6fb] to-white border border-slate-200" />
              </div>
            </div>

            {/* Co-selling deep dive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white to-[#e7f6fb] border border-slate-200" />
              </div>
              <div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">Co-selling that aligns teams</h3>
                  <p className="mt-2 text-sm text-slate-600">Request intros, share notes, and track who influenced what—all synced to your CRM.</p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { k: 'Cycle time', v: '-23%' },
                      { k: 'Win rate', v: '+18%' },
                      { k: 'New opps', v: '+34%' },
                    ].map((m) => (
                      <div key={m.k} className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                        <p className="text-xs text-slate-500">{m.k}</p>
                        <p className="text-lg font-semibold text-slate-900">{m.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Portal deep dive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">A partner portal they’ll actually use</h3>
                  <p className="mt-2 text-sm text-slate-600">Share enablement, register deals, and deliver updates in a branded hub your partners love.</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    {['Resources & playbooks','Deal registration','Announce & updates','Branding & SSO'].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#e7f6fb] to-white border border-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Insights from the ecosystem</h2>
              <p className="mt-2 text-slate-600">Best practices and stories from modern partner teams.</p>
            </div>
            <a href="#" className="hidden sm:inline text-sm font-medium text-[#2596be]">View all</a>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Guide', title: 'How to run effective account mapping', read: '7 min read' },
              { tag: 'Playbook', title: 'Co-selling with top partners', read: '6 min read' },
              { tag: 'Case study', title: 'Driving $2.4M in influenced pipeline', read: '5 min read' },
            ].map((p) => (
              <article key={p.title} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <div className="h-40 bg-gradient-to-br from-[#e7f6fb] to-white" />
                <div className="p-5">
                  <span className="inline-flex items-center rounded-full bg-[#e7f6fb] px-2.5 py-1 text-xs font-medium text-[#0e2a36] ring-1 ring-[#bde7f5]">{p.tag}</span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-[#2596be]">{p.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{p.read}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Works with your stack</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Connect Salesforce, HubSpot, Snowflake, Slack, and more. Sync data where you need it.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Salesforce','HubSpot','Snowflake','Slack','Marketo','Looker'].map((label) => (
              <BrandLogo key={label} label={label} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
