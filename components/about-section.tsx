"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const handleDownloadResume = () => {
    // Replace with actual resume file URL
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-muted-foreground"
        >
          <p>
            With over 1 year of experience in full-stack development, I specialize in building scalable web applications
            and innovative solutions that solve real-world problems.
          </p>
          <p>
            My journey in technology began with a Computer Science degree, and since then, I've worked with startups
            and enterprise companies, leading teams and delivering impactful projects.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts,
            or mentoring aspiring developers.
          </p>
          <div className="pt-8 flex justify-center">
            <Button onClick={handleDownloadResume} size="lg">
              Download Resume
              <FileDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}