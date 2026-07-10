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
          video2="/Projectvid/sliding_glassdoor_sitingarea_partition.mp4"  
        />

      </Container>
      <Container>

        <ProjectFeatureCardPro
          video="/Projectvid/persnol_space_glass_sliding_room_partition_wnew.mp4"
        />

      </Container>


    </Section>

  );
}

