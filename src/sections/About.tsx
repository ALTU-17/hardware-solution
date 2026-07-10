"use client";
import dynamic from "next/dynamic";
import Counter from "../components/Counter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Briefcase, 
  Award, 
  Users, 
  Star, 
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Sliders,
  Compass,
  Sparkles,
  Hourglass
} from "lucide-react";

export default function About() {
  const stats = [
    { 
      end: 300, 
      suffix: "+", 
      label: ".Completed Projects",
      icon: Briefcase,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    { 
      end: 20, 
      suffix: "+", 
      label: ".Years Experience",
      icon: Award,
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    { 
      end: 30, 
      suffix: "+", 
      label: ".Premium Brands",
      icon: Users,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    { 
      end: 100, 
      suffix: "%", 
      label: ".Customer Satisfaction",
      icon: Star,
      gradient: "from-rose-500/20 to-pink-500/20"
    },
  ];

  const highlights = [
    "Specialized Minimalist Glass Engineering",
    "Architectural Aluminium Slim Profiles",
    "Premium Wardrobe & Intelligent Kitchen Systems",
    "Comprehensive Structural Feasibility Consulting"
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Uncompromised Metallurgy",
      desc: "Premium alloys and anodized aluminium engineered to completely prevent wear over decades."
    },
    {
      icon: Cpu,
      title: "Advanced Motion Engineering",
      desc: "Hydraulic damping and whisper-quiet soft-close mechanics for effortless daily interaction."
    },
     {
    icon: Award,
    title: "Prior Experience & Market Presence",
    desc: "Barkha Hardware - The city's most reputed interior hardware store with decades of market presence and unmatched expertise."
  },
  {
    icon: Users,
    title: "Trusted by Industry Leaders",
    desc: "From luxury villas to commercial spaces, our legacy of quality has made us the preferred choice for premium hardware solutions."
  },
    {
      icon: Sliders,
      title: "Bespoke System Tailoring",
      desc: "Custom finishes, profile scales, and weight load capacities tailored to your blueprints."
    },
    {
      icon: Compass,
      title: "Architectural Consultation",
      desc: "Pre-execution calculations for structural load limits, glass deflection, and acoustic sealing."
    }
  ];

  return (
    <section
      id="about"
      className="bg-[#080808] py-28 px-6 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl">
        {/* Main Two-Column Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column - Narratives and Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-[#C89B3C]/10 px-4 py-2 rounded-full border border-[#C89B3C]/20">
              <span className="w-2 h-2 bg-[#C89B3C] rounded-full animate-pulse" />
              <p className="text-[#C89B3C] tracking-[6px] uppercase text-xs font-medium">
                About Us
              </p>
            </div>

            {/* Heading with gradient */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 leading-[1.1]">
              Luxury Interior
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] to-[#F5D78E]">
                Hardware Solutions
              </span>
            </h2>

            {/* Description */}
            <div className="mt-8 space-y-6">
              <p className="text-gray-300 leading-8 text-lg font-medium">
                Founded on the principles of structural precision and timeless aesthetics, Hardware Solution is a premier destination for high-end interior architectural fittings.
              </p>

              <p className="text-gray-400 leading-8">
                Over the past decade, we have established ourselves as trusted industry partners, engineering premium wardrobe structures, ultra-slim aluminum profiles, bespoke kitchen organizers, heavy-duty sliding glass tracks, and luxury designer handles. We hand-pick and supply components that transform everyday living spaces into stunning architectural layouts.
              </p>

              <p className="text-gray-400 leading-8">
                We believe exceptional spaces require more than just off-the-shelf fixtures. Our specialized engineering team works alongside leading architects, interior designers, and custom builders from blueprint stages to final execution. We consult on crucial design metrics including structural load-bearing limits, glass deflection vectors, and acoustic seal performance.
              </p>
            </div>

      
          </motion.div>

          {/* Right Column - Stats Grid AND "Why Choose Us" features to fill the gap */}
          <div className="space-y-16 lg:pt-12">
  
  {/* 2x2 Stats Grid with added top spacing room */}
  <div className="grid grid-cols-2 gap-6">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 rounded-2xl border border-[#C89B3C]/10 hover:border-[#C89B3C]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,155,60,0.05)] overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative z-10">
          <stat.icon className="w-6 h-6 text-[#C89B3C] group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="relative z-10 mt-4">
          <div className="text-4xl md:text-5xl font-black text-white group-hover:text-[#C89B3C] transition-colors duration-300">
            <Counter end={stat.end} suffix={stat.suffix} />
          </div>
        </div>
        
        <p className="relative z-10 mt-2 text-gray-400 text-sm font-medium tracking-wide">
          {stat.label}
        </p>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C89B3C] to-transparent group-hover:w-full transition-all duration-500" />
      </motion.div>
    ))}
  </div>

  {/* Why Hardware Solution Section with Fixed Padding & Enlarged Heading */}

<div className="grid grid-cols-1 md:grid-cols-1 gap-8">  
    <div className="mt-12 border-t border-white/5 pt-12">
    <h3 className="mt-0 text-xl md:text-2xl font-black tracking-wide text-white uppercase mb-8">
      Why Hardware Solution?
    </h3>
    
    <div className="grid sm:grid-cols-2 gap-6">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#C89B3C]/20 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-3">
            <reason.icon className="w-4 h-4 text-[#C89B3C]" />
            <h4 className="text-white font-bold text-lg tracking-wide group-hover:text-[#C89B3C] transition-colors">
              {reason.title}
            </h4>
          </div>
          <p className="text-gray-400 text-sm leading-5">
            {reason.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Quick Core Focus Highlights */}
  <div className="mb-20 mt-12 grid sm:grid-cols-2 gap-5 border-t border-white/5 pt-8">
    {highlights.map((item, idx) => (
      <div key={idx} className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mt-1 flex-shrink-0" />
        <span className="text-gray-300 text-sm leading-relaxed font-medium">{item}</span>
      </div>
    ))}
  </div> </div>



  {/* CTA Button */}
  {/* <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="mt-12 group inline-flex items-center gap-3 bg-[#C89B3C] text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,155,60,0.3)]"
  >
    Learn More
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </motion.button> */}

</div>

        </div>
      </div>
    </section>
  );
}