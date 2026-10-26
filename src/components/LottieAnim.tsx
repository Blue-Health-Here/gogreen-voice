"use client";
import dynamic from "next/dynamic";
import { useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import voicePulse from "@/lib/lottie/voice-pulse.json";
import dataFlow from "@/lib/lottie/data-flow.json";
import successCheck from "@/lib/lottie/success-check.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const sources = { "voice-pulse": voicePulse, "data-flow": dataFlow, "success-check": successCheck };

/** Plays a brand Lottie animation only while on screen; shows a still frame for reduced-motion users. */
export function LottieAnim({ name, loop = true, className, label }: { name: keyof typeof sources; loop?: boolean; className?: string; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const lottie = useRef<LottieRefCurrentProps>(null);
  const inView = useInView(ref, { margin: "100px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const l = lottie.current;
    if (!l) return;
    if (reduce) l.goToAndStop(loop ? 30 : 89, true);
    else if (inView) l.play();
    else l.pause();
  }, [inView, reduce, loop]);

  return (
    <div ref={ref} className={className} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <Lottie
        lottieRef={lottie}
        animationData={sources[name]}
        loop={loop}
        autoplay={!reduce}
        onDOMLoaded={() => { if (reduce) lottie.current?.goToAndStop(loop ? 30 : 89, true); }}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
