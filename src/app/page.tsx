// app/page.tsx
'use client'; // This is a client component to handle FAQ accordion state.

import React, { useState } from "react";
import {
  PencilSquareIcon,
  UserPlusIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";
// --- Icon Components ---

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-7 h-7 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const RefreshIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white/80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.18-3.185m-7.5 0v-4.992m0 0h-4.992M9.75 9.348l-3.182-3.182a8.25 8.25 0 0111.664 0l3.18 3.185" />
    </svg>
);
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white/80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.476-1.476L12.938 18l1.188-.648a2.25 2.25 0 011.476-1.476L16.25 15l.648 1.188a2.25 2.25 0 011.476 1.476L19.563 18l-1.188.648a2.25 2.25 0 01-1.476 1.476z" />
    </svg>
);
const NoSymbolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white/80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);
const ArrowUpTrayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white/80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
    </svg>
);


// --- Data Arrays ---

// const howItWorksSteps = [
//     { badge: "📝", title: "1. Post current POV", description: "Share a moment — photo, video, or thought." },
//     { badge: "🤖", title: "2. Interest Inference", description: "We detect themes and interests in your post." },
//     { badge: "🔗", title: "3. Get Matched", description: "Connect with people who have a similar POV." },
//     { badge: "🔁", title: "4 . Reset", description: "Every 24h your posts disappear. Start fresh every day." },
// ];

const reasons = [
  {
    icon: <ArrowUpTrayIcon />,
    title: "Be an Early Adopter",
    description: "Get in before the crowd. Help shape the culture from Day 1.",
    gradient: "from-[#5400CB] to-[#DCCAFF]",
  },
  {
    icon: <SparklesIcon />,
    title: "Your Feedback Matters",
    description: "We’re building in public. What you say will directly shape what we ship.",
    gradient: "from-[#5400CB] to-[#6C4AD9]",
  },
  {
  icon: <ArrowPathIcon />,
  title: "Join the Movement",
  description: "This isn’t a feature drop — it’s a philosophy. Let’s make social media human again.",
  gradient: "from-[#5400CB] to-[#DCCAFF]",
},
  {
    icon: <UserPlusIcon />,
    title: "Connect with Founders",
    description: "You’ll have access to the team and community as we grow. No middlemen.",
    gradient: "from-[#5400CB] to-[#5400CB]",
  },

]

const faqItems = [
  { question: "What is myPOV?", answer: "myPOV is a low-pressure social app where people connect through what they post — not how they look or how many followers they have." },
  { question: "How do temporary accounts work?", answer: "Your identity and posts disappear every 24 hours. It's a clean slate, every day." },
  { question: "What if I want to keep my matches?", answer: "Upgrade to a full-time account and build your presence without losing connections." },
  { question: "How does the AI matching work?", answer: "We analyze your content (images, videos, notes) to infer shared interests and match you with people who vibe like you." },
  { question: "Is this a dating app?", answer: "No. It’s not about swiping or bios. It's for real connections of all types — friendships, collaborations, or just conversation." },
];
const howItWorksSteps = [
  {
    icon: PencilSquareIcon,
    title: "1. Post your POV",
    description: "Share a photo, video, or thought — whatever feels real."
  },
  {
    icon: SparklesIcon,
    title: "2. Photo Processing",
    description: "Our system infers your interests and mood from your post."
  },
  {
    icon: UserPlusIcon,
    title: "3. Get Matched",
    description: "Connect with people who share your energy — instantly."
  },
  {
    icon: ArrowPathIcon,
    title: "4. Reset Tomorrow",
    description: "Everything disappears after 24h. No pressure. Start fresh."
  }
];

// --- Section Components ---

const HowItWorksSection = () => (
  <section className="w-full py-16 md:py-24 bg-black">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-16">
        How It Works
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
        {howItWorksSteps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center px-4"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#5400CB]/10 border border-[#5400CB] mb-4">
              <step.icon className="w-8 h-8 text-[#DCCAFF]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
            <p className="text-sm text-neutral-400">{step.description}</p>

            {/* Connector Line */}
            {index < howItWorksSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-[-60px] w-[120px] h-1 bg-gradient-to-r from-[#5400CB] to-transparent opacity-40"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReasonsSection = () => (
    <section className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">More Reasons to Join</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => (
              <div
              key={index}
              className={`p-5 rounded-lg flex flex-col items-start text-white bg-gradient-to-br ${reason.gradient} shadow-md shadow-purple-900/20`}
            >
              <div className="w-8 h-8 mb-3">{reason.icon}</div>
              <h3 className="font-headline text-lg font-bold mb-1">{reason.title}</h3>
              <p className="text-sm text-white/90 leading-snug">{reason.description}</p>
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
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-3">
                {faqItems.map((item, index) => (
                <div key={index} className="bg-[#1C1C1E] rounded-lg">
                    <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left p-6"
                    >
                    <span className="text-lg md:text-xl font-semibold">{item.question}</span>
                    <PlusIcon isOpen={openIndex === index} />
                    </button>
                    <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                    >
                    <div className="px-6 pb-6">
                        <p className="text-base md:text-lg text-neutral-300">{item.answer}</p>
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
        {/* Section 1: Hero Area */}
           <main className="relative flex-grow flex flex-col items-center justify-center p-6 text-center min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/mypov_landing_page.png"
        alt="MyPOV landing background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-6xl leading-tight md:leading-tight font-bold">
              Post. Match. Reset. Repeat.
            </h1>
          <br/>
          </div>
          <div className="text-center text-base md:text-lg text-neutral-100 leading-relaxed max-w-md mx-auto mb-6 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md">
          Be Raw. Be Seen. Disappear.
          <br />
        </div>
          <div className="w-full max-w-lg mt-10 text-center">
            <form 
              action="https://getform.io/f/allzdqpa" 
              method="POST"
              className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
            >
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="flex-grow w-full md:w-auto text-lg px-6 py-4 bg-neutral-900/70 border-2 border-neutral-700 rounded-lg placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#5400CB] focus:border-transparent transition-all duration-300"
                aria-label="Email for waitlist"
              />
              <button
              type="submit"
              className="cursor-pointer flex items-center justify-center w-full md:w-auto text-lg font-semibold bg-[#5400CB] hover:bg-[#6a00ff] active:bg-[#40009a] text-white rounded-lg px-8 py-4 whitespace-nowrap transition-all duration-300 shadow-lg shadow-[#5400CB]/40 hover:shadow-xl"
            >
              Join the Waitlist
            </button>
            </form>
            <p className="mt-4 text-sm text-[#DCCAFF]">
              Early access + 1 year of Premium.
            </p>
          </div>
                      <p className="mt-8 text-lg text-neutral-300 max-w-xl mx-auto">
              <br />
            No judgment. No history.
            </p>
            Be You.
        </main>
        
        <HowItWorksSection />
        <ReasonsSection />
        <FaqSection />
        
        <footer className="w-full p-6 md:p-8 text-center z-10">
          <div className="text-xs text-neutral-600 space-x-4">
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}
