"use client";

import blogApp from "./assets/blogApp.png";
import Apple from "./assets/Apple.png"
import Wrapper from "./assets/wrapper.png"

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Database,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/about-section";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Blog Application",
    description:
      "A full-stack Blog Application platform built with Next.js,shadCn and MongoDb",
    image: blogApp,
    tags: ["Next.js", "ShadCn", "Tailwind CSS", "TypeScript", "MongoDB"],
    link: "https://tech-blogs-chi.vercel.app",
    github: "https://github.com/Spikree/Tech-Blogs",
  },
  {
    title: "HTML wrapper",
    description:
      "A vs-code extension which wraps the selected text in any HTML tag of your choice",
    image: Wrapper,
    tags: ["TypeScript", "VS code extension api"],
    link: "https://marketplace.visualstudio.com/items?itemName=Spikey.wrapper-html",
    github: "https://github.com/Spikree/element-wrapping-vs-code-extension-",
  },
  {
    title: "Apple Website Clone",
    description:
      "A frontend web application, built with react js and react three fiber",
    image: Apple,
    tags: ["React.js", "React Three Fiber", "GSAP"],
    link: "https://apple-website-clone-6the.onrender.com/",
    github: "https://github.com/Spikree/apple-website-clone-",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center p-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="sm:text-6xl text-4xl font-bold mb-4">
            Avishkar Mahalingpure
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-8">
            Full Stack Web And Mobile App Developer
          </h2>
          <div className="flex gap-4 justify-center mb-12">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    width={500} // Adjust based on your design
                    height={300} // Adjust based on your design
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.link}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <Code2 className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground">
                React,Vue.js, Next.js, TypeScript, Tailwind CSS
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <Database className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground">
                Node.js, Express, PostgreSQL, MongoDb
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <Palette className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">
                Figma, Adobe XD, UI/UX Design
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-8">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:contact@example.com">
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
