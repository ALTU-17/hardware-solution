"use client";

import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    MessageSquare,
    ArrowRight,
    Video,
    PhoneCall
} from "lucide-react";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {

    return (
        <Section
            id="contact"
            className="bg-[#080808]"
        >
            <Container>
                {/* Top Layout: Left (Text) and Right (Contact Info) Split */}
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left */}
                    <div>
                        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
                            Contact
                        </p>
                        
                        <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
                            Let's Build
                            <span className="block text-[#C89B3C]">
                                Something Extraordinary
                            </span>
                        </h2>

                        {/* About Our Work Paragraphs */}
                        <p className="mt-8 text-gray-400 leading-8">
                            Whether you're designing a luxury home, premium office, hotel, villa, or commercial space, Hardware Solution delivers premium interior hardware with exceptional craftsmanship.
                        </p>
                        
                        <p className="mt-4 text-gray-400 leading-8">
                            From luxury wardrobes to premium aluminium partitions, we create functional art for architectural spaces. We partner closely with leading architects, interior designers, and visionary developers to bridge the gap between complex engineering and breathtaking design.
                        </p>

                        <p className="mt-4 text-gray-400 leading-8">
                            We don't just supply components; we consult on structural feasibility, load-bearing dynamics, and acoustic performance to ensure your high-end fixtures operate flawlessly for lifetimes.
                        </p>
                    </div>

                  {/* Right */}
<div className="mt-12 space-y-8">
    {/* Two Phone Numbers Side by Side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
            icon={<Phone size={22} />}
            title="Call Us"
            value="+91 97302 36100"
            href="tel:+919730236100"
        />
        <InfoCard
            icon={<PhoneCall size={22} />}
            title="Call Us"
            value="+91 86248 48468"
            href="tel:+918624848468"
        />
    </div>

   

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <InfoCard
        icon={<MessageCircle size={22} />}
        title="WhatsApp"
        value="Start a Conversation"
        href="https://wa.me/919730236100"
    />
    
    <InfoCard
        icon={<BsInstagram size={22} />}
        title="Instagram"
        value="Follow for latest designs & projects"
        href="https://www.instagram.com/hardwaresolution173?igsh=MTN1ampyOXc4YTFiNw=="
    /> </div>
 <InfoCard
        icon={<Mail size={22} />}
        title="Email"
        value="hardwaresolution34@gmail.com"
        href="mailto:hardwaresolution34@gmail.com"
    />
    

    <InfoCard
        icon={<MapPin size={22} />}
        title="Location"
        value="Sant Eknath Housing Society,
          Kailash Nagar, Mondha,
          Chhatrapati Sambhajinagar (Aurangabad) Maharashtra 431001"
        href={null}
    />
</div>
                    </div>

                {/* Bottom Layout: Centered Why Hardware Solution Section */}
                <div className="mt-20 border-t border-gray-800 pt-16">
                    <h3 className="text-2xl font-bold tracking-wide text-white uppercase mb-12 text-center">
                        Why Hardware Solution?
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C89B3C]/30 transition duration-300">
                            <div className="text-[#C89B3C] text-3xl font-black mb-4">
                                20+
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg">Years of Architectural Excellence</h4>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    A decade of engineering trust, sourcing top-tier global materials, and executing flawless high-end installations across diverse landscapes.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C89B3C]/30 transition duration-300">
                            <div className="text-[#C89B3C] mb-4 bg-[#C89B3C]/10 p-3 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg">Glass Door & Partition Mastery</h4>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    Our core specialty. From minimalist frameless glass systems to acoustic aluminum partitions, we deliver seamless glass engineering with ultra-thin profiles.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C89B3C]/30 transition duration-300">
                            <div className="text-[#C89B3C] mb-4 bg-[#C89B3C]/10 p-3 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.172-.435.744-.435.916 0l2.428 6.134 6.597.55c.472.039.66.618.314.934l-4.935 4.665 1.44 6.463c.103.46-.425.845-.835.597l-5.805-3.123-5.805 3.123c-.41.248-.938-.137-.835-.597l1.44-6.463-4.935-4.665c-.347-.316-.159-.895.314-.934l6.597-.55 2.428-6.134Z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg">Bespoke Customization</h4>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    Every luxury space demands unique configurations. We provide customized premium hardware finishes, bespoke sizes, and specialized opening mechanisms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

function Input({
    placeholder
}:{
    placeholder:string
}){
    return(
        <input
            placeholder={placeholder}
            className="w-full rounded-2xl bg-[#0B0B0B] border border-white/10 px-5 py-4 outline-none focus:border-[#C89B3C] transition"
        />
    )
}

function InfoCard({
    icon,
    title,
    value,
    href
}:any){
    const content=(
        <div className="flex items-center gap-5 group">
            <div className="h-14 w-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-black transition">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500">
                    {title}
                </p>
                <p className="text-lg font-semibold">
                    {value}
                </p>
            </div>
        </div>
    );

    if(href){
        return(
            <a
                href={href}
                target="_blank"
                className="block"
            >
                {content}
            </a>
        )
    }

    return content;
}