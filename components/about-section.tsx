"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const handleDownloadResume = () => {
    const resumeUrl = "app/assets/Avishkar_Resume.pdf";

    const link = document.createElement("a");
    link.href = resumeUrl;

    link.download = "Avishkar_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            With over 1 year of experience in full-stack development, I
            specialize in building scalable web applications and innovative
            solutions that solve real-world problems.
          </p>
          <p>
            I love building fullstack applications be it mobile or on the web, I
            am also specalised in integrating and using AI for faster
            developement.
          </p>
          <p>
            If you want to colobrate on a project, please don't be afraid to
            connect with me. I'm always open to new oppourtinities.
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
