import React from 'react';
import { Users, MessageSquare, Handshake, Building2, Star, Check } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const TestimonialCard = ({ role, name, img, text }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <img src={img} alt={name} className="h-12 w-12 rounded-full object-cover" />
      <div>
        <p className="font-semibold leading-tight">{role}</p>
        <p className="text-sm text-gray-600">{name}</p>
      </div>
    </div>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);

const BlogCard = ({ tag, title, excerpt }) => (
  <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{tag}</span>
    <h3 className="mt-3 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
    <button className="mt-4 text-indigo-600 text-sm font-medium hover:underline">Read more</button>
  </article>
);

const IntegrationsLogo = ({ name }) => (
  <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm">
    {name}
  </div>
);

const Home = ({ onGoPricing }) => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-indigo-50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-medium">
                <Star className="h-4 w-4" /> Partner Relationship Management
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                Unify your partner ecosystem with a modern PRM
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Onboard, enable, and grow with partners on one platform. Drive revenue with deal registration, a secure partner portal, and collaborative communications.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button onClick={() => onGoPricing()} className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                  View Pricing
                </button>
                <button onClick={() => alert('Our sales team will reach out shortly!')} className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50">
                  Talk to sales
                </button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> SOC2-ready</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> SSO & RBAC</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> API-first</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 shadow-inner flex items-center justify-center">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <FeatureCard icon={Users} title="Partner Portal" desc="Give new and existing partners a unified place to collaborate, access assets, and manage opportunities." />
                    <FeatureCard icon={Handshake} title="Onboarding" desc="Invite, verify, and activate partners with guided workflows and approvals." />
                    <FeatureCard icon={MessageSquare} title="Communication" desc="Broadcast updates, run campaigns, and chat in context with partner teams." />
                    <FeatureCard icon={Building2} title="Deal Registration" desc="Capture and track partner-led deals with clear routing and attribution." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid (detailed) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Everything you need to scale partnerships</h2>
          <p className="mt-2 text-gray-600">Purpose-built modules that work beautifully together.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Handshake} title="Partner Onboarding" desc="Streamlined invites, e-sign, compliance checks, and tiering to activate partners faster." />
            <FeatureCard icon={Users} title="Partner Portal" desc="Centralize content, enablement paths, certifications, and marketplace listings." />
            <FeatureCard icon={MessageSquare} title="Partner Communication" desc="Forums, announcements, and messaging to keep every partner in the loop." />
            <FeatureCard icon={Building2} title="Deal Registration" desc="Standardize deal intake, avoid conflicts, and keep revenue attribution clean." />
            <FeatureCard icon={Users} title="Partner Program" desc="Define program tiers, benefits, MDF, and co-marketing with measurable outcomes." />
            <FeatureCard icon={Star} title="Partner Marketing" desc="Launch co-branded campaigns, shareable assets, and track sourced pipeline." />
          </div>
        </div>
      </section>

      {/* ICP / Who should use */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Who should use AlliedPRM?</h2>
          <p className="mt-2 text-gray-600">Focused outcomes for every stakeholder in your ecosystem.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <TestimonialCard role="Partnerships Team" name="Aisha Gupta, Head of Alliances" img="https://i.pravatar.cc/120?img=1" text="We cut partner activation time by 60% and gained full visibility into sourced pipeline." />
            <TestimonialCard role="Sales Team" name="Diego Ramirez, VP Sales" img="https://i.pravatar.cc/120?img=2" text="Conflict-free registrations and clean attribution made our channel a first-class motion." />
            <TestimonialCard role="Growth Team" name="Mei Chen, Growth Lead" img="https://i.pravatar.cc/120?img=3" text="Co-marketing kits and partner marketplace helped us 3x referrals in one quarter." />
            <TestimonialCard role="CXOs" name="James Okafor, COO" img="https://i.pravatar.cc/120?img=4" text="Reliable forecasting from partner data improved planning and executive alignment." />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Insights & Blog</h2>
              <p className="mt-2 text-gray-600">PRM, Partner Onboarding, Enablement, and Marketing best practices.</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium hover:underline">View all</button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <BlogCard tag="PRM" title="What is Partner Relationship Management?" excerpt="A practical guide to building a scalable partner motion." />
            <BlogCard tag="Onboarding" title="Design an Onboarding Playbook" excerpt="From invite to activation: steps that reduce time-to-value." />
            <BlogCard tag="Enablement" title="Certifications that Drive Revenue" excerpt="How to build enablement paths partners will love." />
            <BlogCard tag="Marketing" title="Co-Marketing that Converts" excerpt="Turn partners into a growth channel with the right assets." />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Integrations</h2>
          <p className="mt-2 text-gray-600">Connect your CRM, support, and marketing stack in minutes.</p>
          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            <IntegrationsLogo name="Salesforce" />
            <IntegrationsLogo name="HubSpot" />
            <IntegrationsLogo name="Zendesk" />
            <IntegrationsLogo name="Slack" />
            <IntegrationsLogo name="Google" />
            <IntegrationsLogo name="Microsoft" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
