'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { FaArrowDown } from "react-icons/fa6";

export default function ScrollIndicator () {
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => setMounted(true), []);

  useGSAP (() => {
    const tl = gsap.timeline(); 
    tl.to("#scroll-indicator-text", {
      opacity: 0, 
      scale: 0.9,
      y: -20,
      scrollTrigger: {
        trigger: "#scroll-indicator", 
        start: "clamp(90% bottom)", 
        end: "clamp(bottom 50%)",
        scrub: 1,
      }
    }).to("#scroll-indicator", {
      opacity: 0,
      y: -11,
      scrollTrigger: {
        trigger: "#scroll-indicator", 
        start: "clamp(90% bottom)", 
        end: "clamp(bottom 50%)",
        scrub: 1,
      }
    })
    .from('#scroll-indicator, #scroll-indicator-text', { 
      duration: 0.5,
      delay: 0.5, 
      ease: "power3.out",
      y: "-20%", 
      opacity: 0,
    }).fromTo("#scroll-arrow", {
      y: 0, 
      duration: 0.25, 
    }, {
      y: 3,
      ease: "power1.inOut"
    }).fromTo('#scroll-arrow', { 
      duration: 0.25,
    }, {
      y: -3, 
      duration: 0.5, 
      repeat: -1, 
      yoyo: true,
      ease: "power1.inOut",
    })
    gsap.delayedCall(0.5, () => ScrollTrigger.refresh());
  });

  if (!mounted) return (
    <>
      <aside id="scroll-indicator-text" className="fixed w-fit h-4 mx-auto left-0 right-0 bottom-14 z-10 will-change-scroll hidden">
        <Link href="/#about" className="h-full w-full rounded-md" aria-label="scroll to next section">
          <p className="text-xs">Scroll to Discover</p>
        </Link>
      </aside>
      <aside id="scroll-indicator" className="fixed w-fit mx-auto left-0 right-0 bottom-5 z-10 will-change-scroll hidden">
        <Link href="/#about" className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-400" aria-label="scroll to next section">
          <FaArrowDown id="scroll-arrow"/>
        </Link>
      </aside>
    </>
  )

  return (
    <>
      <aside id="scroll-indicator-text" className="fixed w-fit h-4 mx-auto left-0 right-0 bottom-14 z-10 will-change-scroll">
        <Link href="/#about" className="h-full w-full rounded-md" aria-label="scroll to next section">
          <p className="text-xs">Scroll to Discover</p>
        </Link>
      </aside>
      <aside id="scroll-indicator" className="fixed w-fit mx-auto left-0 right-0 bottom-5 z-10 will-change-scroll">
        <Link href="/#about" className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-400" aria-label="scroll to next section">
          <FaArrowDown id="scroll-arrow"/>
        </Link>
      </aside>
    </>
  );
};