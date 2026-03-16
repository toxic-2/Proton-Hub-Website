"use client";

import { GlassAccordion } from "@/components/glass-accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/glass-card";

export function FaqTab() {
  return (
    <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="text-center animate-scale-in">
        <div className="glass-strong rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 glow-cyan glass-shimmer">
          <HelpCircle className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          FAQ
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Frequently asked questions about Proton Hub
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full animate-rise delay-1">
        <GlassAccordion
          items={[
            {
              title: "Is the script detected?",
              content:
                "No. Proton Hub's Muscle Legends script is fully undetected. We constantly update our code to stay ahead of any detection methods. Your account safety is our top priority.",
            },
            {
              title: "Will I get banned for using Proton Hub?",
              content:
                "Proton Hub is currently undetected, meaning the risk of getting banned is extremely low. We monitor detection status 24/7 and will immediately notify the community through our Discord if anything changes.",
            },
            {
              title: "Is Proton Hub keyless?",
              content:
                "Yes, 100%. Proton Hub has always been keyless and always will be. No key systems, no link shorteners, no ads. Just copy the script and execute it. Simple as that.",
            },
            {
              title: "Will it become key-required in the future?",
              content:
                "It is a possibility, but only if absolutely necessary to keep the project sustainable and running long-term. For now, Proton Hub remains completely free and keyless. We'll always give the community advance notice if anything changes.",
            },
            {
              title: "How do I get the script?",
              content:
                "Join our Discord server at discord.gg/proton-hub. All scripts, updates, and announcements are posted there. It's the best way to stay in the loop.",
            },
            {
              title: "What games does Proton Hub support?",
              content:
                "Currently, Proton Hub supports Muscle Legends with full features and undetected status. A second game — 99 Nights in the Forest — is in development and coming soon.",
            },
            {
              title: "Who develops Proton Hub?",
              content:
                "Proton Hub is developed solely by Toxic (Kaiser), a 14-year-old developer and prodigy. Despite being a one-person team, the quality and reliability of Proton Hub rivals — and surpasses — scripts made by full teams.",
            },
            {
              title: "How often is Proton Hub updated?",
              content:
                "Proton Hub is updated regularly to ensure scripts stay undetected and working properly. Major feature updates are announced in our Discord, and hotfixes are pushed as soon as any issues are identified.",
            },
            {
              title: "Is Proton Hub better than other Muscle Legends scripts?",
              content:
                "Absolutely. Proton Hub is faster, more reliable, fully keyless, and undetected. It's built with quality in mind by someone who genuinely cares about the community. No other Muscle Legends script comes close.",
            },
            {
              title: "Can I suggest features or new games?",
              content:
                "Yes! We love hearing from the community. Join our Discord at discord.gg/proton-hub and drop your suggestions in the appropriate channel. Your ideas help shape the future of Proton Hub.",
            },
          ]}
        />
      </div>

      {/* Bottom CTA */}
      <div className="animate-rise delay-2 w-full">
        <GlassCard variant="strong" shimmer size="large" className="text-center w-full">
          <MessageCircle className="w-7 h-7 text-primary mx-auto mb-3" />
          <p className="text-base font-bold text-foreground mb-2">
            Still have questions?
          </p>
          <p className="text-base text-muted-foreground">
            Join{" "}
            <span className="text-primary font-bold">
              discord.gg/proton-hub
            </span>{" "}
            and ask in our support channel. We{"'"}re here to help.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
