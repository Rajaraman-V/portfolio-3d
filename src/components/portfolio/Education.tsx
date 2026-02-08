import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    institution: "Vyasa Vidyalaya",
    degree: "CS Student",
    period: "2009 – 2023",
    logo: "https://github.com/Rajaraman-V/portfolio-3d/blob/main/pubilc/images/vyasa.png",
    highlights: "Secured 80.8% in 12th Board Exam.Secured 70% in 11th Board Exam.Ensured responsiveness and code quality.",
  },
  {
    institution: "Saveetha Engineering College",
    degree: "B.E - COMPUTER SCIENCE AND ENGINEERING (IoT)",
    period: "2023-2027",
    logo: "https://github.com/Rajaraman-V/portfolio-3d/blob/main/pubilc/images/saveetha.png",
    highlights: "Created mobile apps using React Native.Integrated APIs and worked with teams.Maintained performance and UX quality."
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Education</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 pl-16 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center overflow-hidden">
             <img
                 src={item.logo} 
                 alt={item.institution}
                 className="w-17 h-17 rounded-full bg-background border-2 border-primary shadow-lg shadow-primary/40 flex items-center justify-center overflow-hidden"

             />
             </div>


              <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="text-primary" size={18} />
                  <span className="text-xs text-primary font-display font-medium">{item.period}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{item.institution}</h3>
                <p className="text-sm text-accent font-medium mb-2">{item.degree}</p>
                <p className="text-muted-foreground text-sm">{item.highlights}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
