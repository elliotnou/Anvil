"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Layers, Rocket } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Safety-first by default",
    description: "Every generated tool is automatically classified. Destructive actions are flagged and badged so AI agents know to ask before acting.",
    points: ["READ / WRITE / DESTRUCTIVE classification", "Badges injected into tool descriptions", "Allowlist & denylist per tool"],
    gradient: "from-primary/20 to-transparent",
    iconColor: "from-primary to-primary/60",
  },
  {
    icon: Layers,
    title: "Works with any API format",
    description: "Anvil ingests OpenAPI 3.x, Swagger 2.x, Postman collections, and even raw developer docs pages via AI-powered parsing.",
    points: ["Automatic $ref resolution", "Swagger UI auto-discovery", "Gemini fallback for messy docs"],
    gradient: "from-[hsl(260_60%_60%/0.15)] to-transparent",
    iconColor: "from-[hsl(260_60%_60%)] to-[hsl(260_50%_50%)]",
  },
  {
    icon: Rocket,
    title: "Production-ready output",
    description: "Generated servers include async Python code, typed parameters, error handling, auto-generated tests, and deployment manifests.",
    points: ["Complete server.py with @tool decorators", "Contract test suite per tool", "Dockerfile + deployment manifest"],
    gradient: "from-[hsl(200_80%_55%/0.12)] to-transparent",
    iconColor: "from-[hsl(200_80%_55%)] to-[hsl(210_70%_45%)]",
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="section-glow-line absolute top-0 left-0 right-0" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 glass rounded-full px-4 py-1.5">Features</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-5">Built for the agentic web</h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">Safety, compatibility, and production-readiness built into every generated server.</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }} className="card-glass p-8 flex flex-col relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.iconColor} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3 mt-auto">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-secondary-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
