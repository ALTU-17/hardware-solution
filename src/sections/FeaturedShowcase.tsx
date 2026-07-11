import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import ProjectFeatureCard from "../components/ProjectFeatureCard";
import ProjectFCard from "../components/ProjectF2";
import ProjectFeatureCardPro from "../components/ProjectFeatureCardPro";

export default function FeaturedShowcase() {
  return (

    <Section>

      <Container>

        <ProjectFeatureCard
          video="/videos/sliding.mp4"  // Changed from image to video
        />

      </Container>

      <Container>

        <ProjectFCard
          video="/videos/sliding2.mp4"
          video2="/videos/sliding_glassdoor_sitingarea_partition.mkv"  
        />

      </Container>

      <Container>

        <ProjectFeatureCardPro
          video="/videos/persnol_space.mp4"
        />

      </Container>

    </Section>

  );
}

