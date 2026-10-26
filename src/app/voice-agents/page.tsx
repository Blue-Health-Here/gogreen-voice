import type { Metadata } from "next";
import { CallDemo } from "@/components/CallDemo";
import { CTA, CheckList, PageHero, SectionHead, Stats } from "@/components/Sections";
import { workflows } from "@/lib/content";
import { LottieAnim } from "@/components/LottieAnim";

export const metadata: Metadata = { title: "Voice agents", description: "AI voice agents that navigate payer IVRs and talk with reps." };

export default function VoiceAgents() {
  return (
    <>
      <PageHero dark eyebrow="Voice agents" title="Callers that never get tired of hold music." intro="GoGreen Voice agents get through phone trees, wait on hold, talk naturally with reps and record every detail accurately.">
        <div className="mt-14"><CallDemo items={workflows} /></div>
      </PageHero>
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="What agents do" title="They handle the call the way your best caller would." />
            <LottieAnim name="voice-pulse" className="mx-auto mt-6 h-64 w-64 lg:mx-0" label="Animated voice agent on a call" />
          </div>
          <CheckList items={[
            "Navigate IVRs by voice or keypad, including tricky payer menus",
            "Wait on hold for as long as it takes, across many calls at once",
            "Verify identity using the member and provider details you supply",
            "Ask follow-up questions when an answer is incomplete or unclear",
            "Read back key values to confirm accuracy before hanging up",
            "Identify themselves as virtual assistants on every call",
          ]} />
        </div>
      </section>
      <section className="section bg-forest text-cream">
        <div className="container">
          <SectionHead dark eyebrow="Quality" title="Accuracy you can measure." intro="Every call is scored, and low-confidence fields go to human review before they reach your systems." />
          <div className="mt-12"><Stats dark items={[{ stat: "99%", label: "field accuracy target (illustrative)" }, { stat: "100%", label: "calls recorded & transcribed" }, { stat: "<1 min", label: "from hang-up to write-back" }, { stat: "∞", label: "patience on hold" }]} /></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
