// components/FeaturedShowcase.tsx
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import ProjectFeatureCard from "../components/ProjectFeatureCard";
import ProjectFCard from "../components/ProjectF2";
import ProjectFeatureCardPro from "../components/ProjectFeatureCardPro";

export default function FeaturedShowcase() {
  
  // Custom specifications matching the Gold Geometric Folding Partition Wall
  const foldingPartitionFeatures = [
    { label: "Engineering", value: "Kinetic Modular Architecture" },
    { label: "Finish", value: "Polished Mirror Electroplated Gold" },
    { label: "Tracking", value: "Heavy-Duty Top-Hung Silent Rollers" },
    { label: "Application", value: "Dynamic Spatial Segmentations" }
  ];

  // Custom specifications matching the Automatic Sensor Glass Slider
  const automaticSliderFeatures = [
    { label: "Automation", value: "Intelligent Motion-Sensing Drive" },
    { label: "Glass Structure", value: "Fluted Acoustic Safety Matrix" },
    { label: "Frame Profile", value: "Ultra-Slim Anodized Matt Black" },
    { label: "Hardware Unit", value: "Integrated Soft-Close Synchronizer" }
  ];

  return (
    <Section className="bg-[#0A0A0A] text-white py-16">
      
      {/* Existing Card 1 */}
      <Container>
        <ProjectFeatureCard video="/videos/sliding.mp4" />
      </Container>

      {/* Existing Card 2 */}
      <Container>
        <ProjectFCard
          video="/videos/sliding2.mp4"
          video2="/videos/sliding_glassdoor_sitingarea_partition.mkv"  
        />
      </Container>

      {/* ─── NEW VIDEO 1: KINETIC GEOMETRIC GOLD FOLDING WALL ─── */}
      <Container>
        <ProjectFeatureCardPro
          tag="Premium Spatial Solutions"
          title="Kinetic Geometric Gold Partition"
          description="Redefine open-concept spatial layouts with our luxury interlocking gold-faceted folding partitions. Masterfully balanced for fluid movement, these custom architectural dividers fold away effortlessly to transition spaces seamlessly."
          features={foldingPartitionFeatures}
          video="/videos/ultra_wide_door.mp4" // Rename your first video to match this path
          reverse={false}
        />
      </Container>

      {/* ─── NEW VIDEO 2: AUTOMATIC SENSOR SLIDING GLASS DOOR ─── */}
      <Container>
        <ProjectFeatureCardPro
          tag="Automated Luxury Systems"
          title="Intelligent Synchronized Glass Slider"
          description="Experience hands-free movement with our high-end smart-sensing automatic sliding glass systems. Fusing sleek structural framing with ultra-responsive micro-motors, it provides touchless architectural transitions with flawless execution."
          features={automaticSliderFeatures}
          video="/videos/smart_censor_door.mp4" // Rename your second video to match this path
          reverse={true} // Swaps sides for asymmetric layout hierarchy
        />
      </Container>

    </Section>
  );
}