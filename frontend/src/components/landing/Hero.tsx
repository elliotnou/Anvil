"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(172_66%_50%/0.12),transparent_70%)] animate-orb blur-3xl" />
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,hsl(260_60%_60%/0.08),transparent_70%)] animate-orb-delayed blur-3xl" />
        <div className="absolute bottom-[-10%] left-[40%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(200_80%_55%/0.06),transparent_70%)] animate-orb-slow blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex">
          <div className="glass rounded-full px-5 py-2 flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Powered by</span>
            <span className="font-semibold text-primary">AI-Driven Safety Analysis</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8">
            <span className="block">Forge safe AI agents</span>
            <span className="text-gradient-cyan block">from any API</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Feed Anvil any API spec and get a production-ready MCP server with built-in safety
            classification, destructive action guards, and instant deployment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/adapter/ingest">
              <Button size="lg" className="btn-gradient rounded-full text-base px-10 h-14 gap-2 relative z-10">
                <span>Start Forging</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="#services">
              <Button variant="outline" size="lg" className="rounded-full text-base px-10 h-14 glass border-border/50 hover:border-primary/40">
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 60, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.35 }} className="mt-20 max-w-4xl mx-auto">
          <div className="rounded-2xl glass-strong p-1.5 glow-primary">
            <div className="rounded-xl bg-background/80 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px">
                <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-warning/70" />
                <div className="w-3 h-3 rounded-full bg-success/70" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">anvil — pipeline</span>
              </div>
              <div className="font-mono text-sm text-muted-foreground space-y-2.5">
                <p><span className="text-primary font-bold">$</span> anvil forge --spec openapi.json -o ./output</p>
                {[
                  { msg: "Ingesting spec...", detail: "petstore-api v1.0.0" },
                  { msg: "Mining capabilities...", detail: "4 tools discovered" },
                  { msg: "Classifying safety...", detail: "2 read, 1 write, 1 destructive" },
                  { msg: "Generating server...", detail: "Python + dedalus_mcp" },
                  { msg: "Writing output...", detail: "7 files generated" },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.15 }} className="text-foreground/70">
                    <span className="text-success">&#10003;</span> {line.msg} <span className="text-muted-foreground">{line.detail}</span>
                  </motion.p>
                ))}
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} className="text-foreground/70">
                  <span className="text-primary font-bold">&rarr;</span> Server ready at <span className="text-primary font-bold">http://127.0.0.1:8000/mcp</span>
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-12 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>Works with</span>
          {["Claude", "Cursor", "Gemini", "Custom Agents"].map((name) => (
            <span key={name} className="px-4 py-2 rounded-full glass text-secondary-foreground font-medium hover:border-primary/30 transition-all cursor-default">
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
