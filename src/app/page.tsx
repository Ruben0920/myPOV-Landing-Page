// app/page.tsx
'use client'; // This is a client component to handle FAQ accordion state.

import React, { useState } from "react";
import Image from "next/image";
import {
  PencilSquareIcon,
  UserPlusIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

// --- SVG Logo ---
const MyPovLogo = () => (
    <Image 
        src="/images/Logo Color.svg" 
        alt="myPOV Logo" 
        width={90} 
        height={28}
        className="h-7 w-auto"
    />
);


// --- Icon Components ---
const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-7 h-7 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white/80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.476-1.476L12.938 18l1.188-.648a2.25 2.25 0 011.476-1.476L16.25 15l.648 1.188a2.25 2.25 0 011.476 1.476L19.563 18l-1.188.648a2.25 2.25 0 01-1.476 1.476z" />
    </svg>
);
const ArrowUpTrayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white/80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
    </svg>
);


// --- Data Arrays ---

const reasons = [
  {
    icon: <div className="w-12 h-12 bg-gradient-to-br from-[#5400CB]/30 to-[#DCCAFF]/20 rounded-xl flex items-center justify-center text-white font-bold text-xl border border-[#5400CB]/40 shadow-lg shadow-[#5400CB]/20">1</div>,
    title: "Shape the Future",
    description: "By joining our app, you're helping us redefine what social media can be. Your voice matters from day one.",
    gradient: "from-[#5400CB]/20 to-[#DCCAFF]/10",
  },
  {
    icon: <div className="w-12 h-12 bg-gradient-to-br from-[#5400CB]/30 to-[#B9E200]/20 rounded-xl flex items-center justify-center text-white font-bold text-xl border border-[#5400CB]/40 shadow-lg shadow-[#5400CB]/20">2</div>,
    title: "We Actually Listen",
    description: "No corporate BS. We read every message, consider every idea. Your feedback doesn't go into a black hole.",
    gradient: "from-[#5400CB]/15 to-[#B9E200]/5",
  },
  {
    icon: <div className="w-12 h-12 bg-gradient-to-br from-[#DCCAFF]/20 to-[#5400CB]/30 rounded-xl flex items-center justify-center text-white font-bold text-xl border border-[#5400CB]/40 shadow-lg shadow-[#5400CB]/20">3</div>,
    title: "Real Connections",
    description: "We're tired of fake social media too. This is about real people, real conversations, real moments that matter.",
    gradient: "from-[#DCCAFF]/10 to-[#5400CB]/15",
  },
  {
    icon: <div className="w-12 h-12 bg-gradient-to-br from-[#B9E200]/20 to-[#5400CB]/30 rounded-xl flex items-center justify-center text-white font-bold text-xl border border-[#5400CB]/40 shadow-lg shadow-[#5400CB]/20">4</div>,
    title: "Meet the Team",
    description: "We're a small team with big dreams. You'll know us by name, and we'll know you. No faceless corporation here.",
    gradient: "from-[#B9E200]/5 to-[#5400CB]/20",
  },
]

const faqItems = [
  { question: "What is myPOV?", answer: "Think of it as Instagram without the pressure. Share what's real, connect with people who get it, and start fresh every few days. No followers, no likes, just genuine connections." },
  { question: "How do temporary accounts work?", answer: "Everything disappears after 72 hours. Your posts, matches, conversations — poof, gone. It's liberating. No pressure to maintain a perfect feed or worry about what you posted last week." },
  { question: "What if I want to keep my matches?", answer: "If you find someone you really connect with, you can both upgrade to permanent accounts. Your connection stays, but you get to build something lasting together." },
  { question: "How does the AI matching work?", answer: "We look at what you post — your photos, videos, the vibe you're putting out there — and find people who share your energy. It's not about algorithms, it's about real human connection." },
  { question: "Is this a dating app?", answer: "It's whatever you want it to be. Some people find love, others find friends, collaborators, or just someone to chat with. We're not here to define your relationships for you." },
];
const howItWorksSteps = [
  {
    icon: PencilSquareIcon,
    title: "1. Share your POV",
    description: "Post a photo, video, or thought. We'll find people who share your vibe."
  },
  {
    icon: SparklesIcon,
    title: "2. We Process It",
    description: "Our system reads your energy and matches you with like-minded people."
  },
  {
    icon: UserPlusIcon,
    title: "3. Connect & Chat",
    description: "Start conversations with people who get you. We'll help with conversation starters and ice breakers."
  },
  {
    icon: ArrowPathIcon,
    title: "4. Start Fresh",
    description: "Everything disappears after 72 hours. Clean slate, no baggage."
  }
];

// --- Section Components ---

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Image 
            src="/images/Logo Color.svg" 
            alt="myPOV Logo" 
            width={90} 
            height={28}
            className="h-7 w-auto"
        />
        <a 
          href="#form" 
          className="cursor-pointer text-sm font-semibold bg-white text-black rounded-lg px-6 py-2.5 whitespace-nowrap transition-all duration-300 hover:bg-neutral-200 hover:scale-105 hover:shadow-xl shadow-lg shadow-black/20"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );

const HowItWorksSection = () => (
  <section className="w-full py-20 md:py-32 bg-black mt-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center mb-16">
        <Image 
            src="/images/svg color.svg" 
            alt="myPOV Icon" 
            width={60} 
            height={60}
            className="h-12 w-auto mb-8 opacity-80"
        />
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center text-white">
          How It Works
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        {howItWorksSteps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-white/10 backdrop-blur-sm shadow-2xl shadow-black/20 hover:shadow-2xl hover:shadow-[#5400CB]/20 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#5400CB]/20 to-[#6C4AD9]/20 border-2 border-[#5400CB]/30 mb-6 shadow-lg shadow-[#5400CB]/20">
              <step.icon className="w-10 h-10 text-[#DCCAFF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-base text-neutral-300 leading-relaxed">{step.description}</p>

            {/* Connector Line */}
            {index < howItWorksSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full w-[120px] h-1 bg-gradient-to-r from-[#5400CB] via-[#6C4AD9] to-transparent opacity-60"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReasonsSection = () => (
    <section className="w-full py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
              <Image 
                  src="/images/svg color.svg" 
                  alt="myPOV Icon" 
                  width={60} 
                  height={60}
                  className="h-12 w-auto mb-8 opacity-80"
              />
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-center text-white">More Reasons to Join</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reasons.map((reason, index) => (
              <div
              key={index}
              className={`p-8 rounded-2xl flex flex-col items-start text-white bg-gradient-to-br ${reason.gradient} shadow-2xl shadow-purple-900/30 hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-300 hover:scale-105 border border-white/10 backdrop-blur-sm`}
            >
              <div className="w-12 h-12 mb-6 p-2 bg-white/10 rounded-xl backdrop-blur-sm">{reason.icon}</div>
              <h3 className="font-headline text-xl font-bold mb-3 leading-tight">{reason.title}</h3>
              <p className="text-base text-white/90 leading-relaxed">{reason.description}</p>
            </div>
                ))}
            </div>
        </div>
    </section>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqItems.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-neutral-900/80 to-neutral-800/60 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl shadow-black/20">
                    <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left p-8 hover:bg-white/5 transition-colors duration-300 rounded-2xl"
                    >
                    <span className="text-xl md:text-2xl font-semibold text-white">{item.question}</span>
                    <PlusIcon isOpen={openIndex === index} />
                    </button>
                    <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                    >
                    <div className="px-8 pb-8 pt-4">
                        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">{item.answer}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};


// --- Main Page Component ---
export default function LandingPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-headline { font-family: 'Oswald', sans-serif; text-transform: uppercase; }
      `}</style>
      
      <div className="flex flex-col min-h-screen bg-black text-white antialiased">
        <Header />
        
        {/* Section 1: Hero Area */}
        <main className="relative flex-grow flex flex-col items-center justify-center p-6 text-center min-h-[70vh] pt-20 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5400CB]/10 via-[#6C4AD9]/5 to-[#DCCAFF]/10 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#5400CB]/5 to-transparent animate-pulse" style={{animationDuration: '8s'}}></div>
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#5400CB]/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#DCCAFF]/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
            </div>
            {/* Small logo in corner */}
            <div className="absolute top-8 right-8 z-20">
              <Image 
                  src="/images/svg color.svg" 
                  alt="myPOV Icon" 
                  width={40} 
                  height={40}
                  className="h-8 w-auto opacity-60"
              />
            </div>
            <div className="z-10 flex flex-col items-center justify-center h-full">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-headline text-5xl md:text-7xl leading-tight md:leading-tight font-bold mb-6 drop-shadow-2xl">
                      Post. Match. Reset. Repeat.
                    </h1>
                  <br/>
                </div>
                <div className="text-center text-lg md:text-xl text-neutral-100 leading-relaxed max-w-lg mx-auto mb-8 px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/20">
                  Be Raw. Be Seen. Disappear.
                  <br />
                </div>
                <div className="w-full max-w-xl mt-12 text-center">
                  <form 
                    id="form"
                    action="https://getform.io/f/allzdqpa" 
                    method="POST"
                    className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
                  >
                      <input
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        required
                        className="flex-grow w-full md:w-auto text-lg px-8 py-5 bg-neutral-900/80 border-2 border-neutral-700 rounded-xl placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-[#5400CB]/30 focus:border-[#5400CB] transition-all duration-300 backdrop-blur-sm shadow-lg"
                        aria-label="Email for waitlist"
                      />
                      <button
                      type="submit"
                      className="cursor-pointer flex items-center justify-center w-full md:w-auto text-lg font-semibold bg-gradient-to-r from-[#5400CB] to-[#6a00ff] hover:from-[#6a00ff] hover:to-[#5400CB] active:from-[#40009a] active:to-[#5400CB] text-white rounded-xl px-10 py-5 whitespace-nowrap transition-all duration-300 shadow-2xl shadow-[#5400CB]/40 hover:shadow-2xl hover:shadow-[#6a00ff]/50 hover:scale-105 transform hover:-translate-y-1"
                    >
                      Join the Waitlist
                    </button>
                    </form>
                    <p className="mt-6 text-sm text-[#DCCAFF] font-medium">
                      Early access + 1 year of Premium.
                    </p>
                </div>
                <p className="mt-10 text-xl text-neutral-300 max-w-2xl mx-auto font-light">
                    <br />
                    No judgment. No history.
                </p>
                <p className="text-2xl font-semibold text-white mt-2">Be You.</p>
            </div>
        </main>
        
        <HowItWorksSection />
        <ReasonsSection />
        
        <FaqSection />
        
        <footer className="w-full p-6 md:p-8 text-center z-10">
          <div className="flex flex-col items-center space-y-6">
            <Image 
                src="/images/Logo Color.svg" 
                alt="myPOV Logo" 
                width={100} 
                height={33}
                className="h-12 w-auto"
            />
            <div className="text-xs text-neutral-600 space-x-4">
              <a href="#" className="hover:text-neutral-400 transition-colors">Terms</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-neutral-400 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}