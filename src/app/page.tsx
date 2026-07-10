import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Loader from "../components/Loader";
import MouseGlow from "../components/MouseGlow";
import ScrollProgress from "../components/ScrollProgress";
import SmoothScroll from "../components/SmoothScroll";
import Projects from "../sections/Projects";
import VideoHero from "../components/VideoHero";

// import FeaturedShowcase from "../sections/FeaturedShowcase";


// import About from "../sections/About";
// import Categories from "../sections/Categories";

// import FeaturedProjects from "../sections/FeaturedProjects";
// import Contact from "../sections/Contact";

// import Footer from "../sections/Footer";

import dynamic from "next/dynamic";

const FeaturedShowcase = dynamic(
  () => import("../sections/FeaturedShowcase")
);
const FeaturedShowcase2 = dynamic(
  () => import("../sections/FeaturedShowcase2")
);
const FeaturedShowcase3 = dynamic(
  () => import("../sections/FeaturedShowcase3")
);

const About = dynamic(
  () => import("../sections/About")
);

const Categories = dynamic(
  () => import("../sections/Categories")
);

const FeaturedProjects = dynamic(
  () => import("../sections/FeaturedProjects")
);

const Contact = dynamic(
  () => import("../sections/Contact")
);

const Footer = dynamic(
  () => import("../sections/Footer")
);



export default function Home() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <MouseGlow />
      <ScrollProgress />

      <Navbar />
      {/* <Hero /> */}
      <VideoHero />


      <FeaturedShowcase2 />

      <FeaturedShowcase3 />

      <FeaturedShowcase />

      <FeaturedProjects />

      <Categories />

      <About />

      <Contact />

      <Footer />
      
    </>
  );
}

// inline-flex items-center


// Turf ,Home the ,modular kit, modular wadrobe. Add GST no, Expe , city name


// git add .   
// git commit -m "Updated contact page"
// git push