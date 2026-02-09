import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SysScan",
    description: "SysScan is a security-based system monitoring tool designed to analyze computer systems for vulnerabilities, performance issues, and security threats. It helps users identify risks and maintain system health by providing real-time monitoring and analysis.",
    tags: ["System monitoring", "security", "Prototyping"],
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmgrIw5Nlkqkl9PKgHHjj71ocPM8nJEZ9DFPvzCXuvf7HCG1EUg",
    link: "https://github.com/Rajaraman-V/SysScan",
  },
  {
    title: "Brand Identity — Luxe",
    description: "Full branding package including logo, typography, color palette, and guidelines for a luxury brand.",
    tags: ["Branding", "Illustrator", "Identity"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    description: "Designed an intuitive mobile banking experience focused on simplicity and security.",
    tags: ["Mobile", "UI Design", "Figma"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Interactive analytics dashboard with data visualization for creative professionals.",
    tags: ["Dashboard", "Web Design", "Charts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Social Media Campaign",
    description: "Visual campaign design for a product launch across Instagram, Twitter, and LinkedIn.",
    tags: ["Social Media", "Graphic Design", "Campaign"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Restaurant Website",
    description: "Elegant, responsive website design for a fine-dining restaurant with online reservations.",
    tags: ["Web Design", "Responsive", "UI"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.3)] block"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-primary" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal bg-secondary text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
