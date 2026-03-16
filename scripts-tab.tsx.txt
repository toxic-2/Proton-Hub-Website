"use client";

import { useState } from "react";
import { StatusDot } from "@/components/status-dot";
import { GlassCard } from "@/components/glass-card";
import { GlassAccordion } from "@/components/glass-accordion";
import { ScrollText, Terminal, Copy, Check } from "lucide-react";

const PROTON_LOADSTRING = `loadstring(game:HttpGet("https://api.jnkie.com/api/v1/luascripts/public/872c219b6414b9d92cd6da82962bff7e1f23b00bb6c1930e069cfa00952078ff/download"))()`;

export function ScriptsTab() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PROTON_LOADSTRING);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy");
    }
  };
  return (
    <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="text-center animate-scale-in">
        <div className="glass-strong rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 glow-cyan glass-shimmer">
          <ScrollText className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Scripts
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Available game scripts and their current status
        </p>
      </div>

      {/* Proton Hub Loadstring */}
      <div className="animate-rise delay-1 w-full">
        <GlassCard variant="strong" shimmer size="large" className="w-full border-2 border-primary/30">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-3 h-3 rounded-full bg-emerald-400 glow-green animate-pulse" />
              <span className="text-xl font-bold text-foreground">Proton Hub - Muscle Legends</span>
              <span className="text-xs font-bold text-primary glass rounded-full px-4 py-1.5 tracking-wide">FEATURED</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our flagship script. 100% keyless, undetected, and the best Muscle Legends script available. Copy the loadstring below and execute it in your executor.
            </p>
            <div className="glass-inner rounded-2xl p-5 font-mono text-sm text-foreground overflow-x-auto">
              <code className="break-all">{PROTON_LOADSTRING}</code>
            </div>
            <button
              onClick={copyToClipboard}
              className="glass rounded-xl px-6 py-4 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-semibold text-base"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              {copied ? "Copied to Clipboard!" : "Copy Loadstring"}
            </button>
          </div>
        </GlassCard>
      </div>

      {/* Legend */}
      <div className="animate-rise delay-2 w-full">
        <GlassCard variant="strong" shimmer size="large" className="w-full">
          <h3 className="text-xs font-bold text-muted-foreground mb-5 uppercase tracking-[0.2em]">
            Status Legend
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {[
              { color: "green" as const, label: "Undetected" },
              { color: "yellow" as const, label: "Semi Detected" },
              { color: "red" as const, label: "Detected / Bannable" },
              { color: "blue" as const, label: "Coming Soon / Idea" },
            ].map(({ color, label }) => (
              <div key={color} className="flex items-center gap-4">
                <StatusDot color={color} size="md" />
                <span className="text-sm text-foreground font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Game Status */}
      <div className="animate-rise delay-3 w-full">
        <GlassCard variant="strong" shimmer size="large" className="w-full">
          <h3 className="text-xs font-bold text-muted-foreground mb-5 uppercase tracking-[0.2em]">
            Game Status
          </h3>
          <div className="flex flex-col gap-4">
            <div className="glass-inner rounded-2xl px-6 py-5 flex items-center justify-between hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-center gap-4">
                <StatusDot color="green" size="md" />
                <span className="text-base font-bold text-foreground">
                  Muscle Legends
                </span>
              </div>
              <span className="text-sm text-emerald-400 font-bold glass rounded-full px-5 py-2 tracking-wide">
                Undetected
              </span>
            </div>
            <div className="glass-inner rounded-2xl px-6 py-5 flex items-center justify-between hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-center gap-4">
                <StatusDot color="blue" size="md" />
                <span className="text-base font-bold text-foreground">
                  99 Nights in the Forest
                </span>
              </div>
              <span className="text-sm text-blue-400 font-bold glass rounded-full px-5 py-2 tracking-wide">
                Coming Soon
              </span>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Script Details Dropdowns */}
      <div className="w-full animate-rise delay-4">
        <h3 className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-[0.2em] px-2">
          Script Details
        </h3>
        <GlassAccordion
          items={[
            {
              title: "Muscle Legends",
              content: (
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <StatusDot color="green" size="md" />
                    <span className="text-emerald-400 font-bold text-base">
                      Status: Undetected
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    The most powerful and reliable Muscle Legends script
                    available. Proton Hub{"'"}s flagship script features
                    auto-farm, auto-workout, strength multipliers, and much
                    more. Completely keyless and undetected — just execute and
                    dominate.
                  </p>
                  <div className="glass-inner rounded-2xl p-5 font-mono text-sm text-foreground flex items-center gap-4">
                    <Terminal className="w-5 h-5 text-primary shrink-0" />
                    <span>
                      <span className="text-primary font-bold">{"--"}</span>{" "}
                      Join{" "}
                      <span className="text-primary font-bold underline decoration-primary/30 underline-offset-2">
                        discord.gg/proton-hub
                      </span>{" "}
                      to get the script
                    </span>
                  </div>
                </div>
              ),
            },
            {
              title: "99 Nights in the Forest",
              content: (
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <StatusDot color="blue" size="md" />
                    <span className="text-blue-400 font-bold text-base">
                      Status: Coming Soon
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    A brand new script currently in development. This will be
                    Proton Hub{"'"}s second supported game, expanding the hub
                    beyond Muscle Legends. Stay tuned for updates and early
                    access announcements.
                  </p>
                  <div className="glass-inner rounded-2xl p-5 font-mono text-sm text-foreground flex items-center gap-4">
                    <Terminal className="w-5 h-5 text-primary shrink-0" />
                    <span>
                      <span className="text-primary font-bold">{"--"}</span>{" "}
                      Join{" "}
                      <span className="text-primary font-bold underline decoration-primary/30 underline-offset-2">
                        discord.gg/proton-hub
                      </span>{" "}
                      to get notified when it drops
                    </span>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
