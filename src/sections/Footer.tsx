"use client";

import Link from "next/link";
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Award,
  Shield,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="bg-black border-t border-white/10">

      {/* CTA */}

      <Container>

        <div className="rounded-[36px] border border-[#C89B3C]/20 bg-gradient-to-br from-[#121212] to-[#0B0B0B] px-8 py-16 md:px-14 text-center">

          <p className="uppercase tracking-[8px] text-[#C89B3C] text-xs">

            Premium Interior Hardware

          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">

            Ready To Transform

            <span className="block text-[#C89B3C]">

              Your Interior?

            </span>

          </h2>

         {/* <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8 text-center">
  From luxury wardrobes to premium aluminium
  partitions, Hardware Solution creates timeless
  interior spaces with exceptional craftsmanship.
</p> */}

{/* <div className="mt-10 flex flex-wrap justify-center gap-4">
  <a href="tel:+919730236100">
    <Button className="text-xs px-2 py-1">
      Call Now
    </Button>
  </a>
  <a href="https://wa.me/919730236100" target="_blank">
    <Button variant="outline" className="text-xs px-2 py-1">
      WhatsApp
    </Button>
  </a>
</div> */}

        </div>

      </Container>

      {/* Footer */}

      <Container className="py-20">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black">

              HARDWARE

              <span className="block text-[#C89B3C]">

                SOLUTION

              </span>

            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Smart Hardware For Smart spaces
              <br />
              Sliding | Wardrobe | Partition
              <br />
              Premiume finish guaranteed
            </p>

            <div className="mt-8">

              <p className="text-white font-semibold">

                Owner

              </p>

              <p className="text-[#C89B3C]">

                Syed Aslam Hashmi

              </p>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-xl">

              Quick Links

            </h3>

            <div className="mt-6 space-y-4">

              <FooterLink
                href="/#home"
                title="Home"
              />

              <FooterLink
                href="/#about"
                title="About"
              />

              <FooterLink
                href="/#categories"
                title="Categories"
              />

              <FooterLink
                href="/#projects"
                title="Projects"
              />

              <FooterLink
                href="/#contact"
                title="Contact"
              />

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="font-bold text-xl">

              Our Products

            </h3>

            <div className="mt-6 space-y-4 text-gray-400">

              <p>Glass Profiles</p>

              <p>Sliding Systems</p>

              <p>Wardrobe Systems</p>

              <p>Kitchen Hardware</p>

              <p>Luxury Handles</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl">

              Contact

            </h3>

            <div className="mt-6 space-y-6">

              <Info
                icon={<Phone size={18} />}
                text="+91 97302 36100"
              />

              <Info
                icon={<Mail size={18} />}
                text="hardwaresolution34@gmail.com"
              />

              <Info
                icon={<MapPin size={18} />}
                text="Aurangabad, Maharashtra"
              />

              <a
                href="https://wa.me/919730236100"
                target="_blank"
                className="inline-flex items-center gap-3 text-[#C89B3C]"
              >

                <MessageCircle size={18}/>

                WhatsApp

              </a>

            </div>

          </div>

        </div>

{/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-500 text-sm">
              © 2026 Hardware Solution · All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <Shield size={14} className="text-[#C89B3C]" />
                Quality Assured
              </span>
              <span className="w-px h-4 bg-white/10"></span>
              <span className="flex items-center gap-1">
                <Award size={14} className="text-[#C89B3C]" />
                Premium Quality
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-gray-500 hover:text-[#C89B3C] text-sm transition-colors">
              Privacy
            </Link>
            <span className="w-px h-4 bg-white/10"></span>
            <Link href="/terms" className="text-gray-500 hover:text-[#C89B3C] text-sm transition-colors">
              Terms
            </Link>
            <button
              onClick={scrollTop}
              className="h-12 w-12 rounded-full border border-[#C89B3C]/20 hover:bg-[#C89B3C] hover:text-black transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:shadow-[#C89B3C]/20"
            >
              <ArrowUp size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

      </Container>

    </footer>
  );
}

function FooterLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="block text-gray-400 hover:text-[#C89B3C] transition"
    >
      {title}
    </Link>
  );
}

function Info({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-gray-400">
      <span className="text-[#C89B3C]">{icon}</span>
      <span>{text}</span>
    </div>
  );
}