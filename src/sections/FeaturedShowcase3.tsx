import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import ProjectShowcase from "../components/ProjectShowcase";
import { motion } from "framer-motion";
export default function FeaturedShowcase3() {
  return (
    <Section id="projects">
      
      <Container>



      

        <ProjectShowcase
          title="Gold Fluted Glass"
          subtitle="Luxury Residential Project"
          description="A premium gold aluminium sliding partition with fluted glass designed to create elegant interiors while maintaining natural light and privacy."

          videos={[
            "/projectvid/modern_bathrrom.mp4",
            "/projectvid/glass_sliding_room_partition.mp4",
            "/projectvid/shower.mp4",
            // "/Projectvid/sliding_glassdoor_sitingarea_partition.mp4",
            // "/Projectvid/persnol_space.mp4",

            "/projectvid/paintingframe_style_sliding_glassdoor.mp4",
            "/projectvid/2in1_sliding_glassdoor.mp4",
            "/projectvid/glass_sliding_room.mp4",
            "/projectvid/glassdoor.mp4",

          ]}

          specs={[
            { title: "Material", value: "Premium Aluminium" },
            { title: "Glass", value: "Fluted Glass" },
            { title: "Finish", value: "Matte Gold" },
            { title: "Installation", value: "Hardware Solution" }
          ]}
        />
      </Container>
    </Section>
  );
}