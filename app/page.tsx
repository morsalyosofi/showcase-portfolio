/*
"use client";

import styles from "./Glitch.module.scss";
import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

  export default function Home() {
  return (
    <>
      <Navbar />

      <div
        className={styles.wrapper}
       style={{
    height: "100vh",
    position: "relative",
    paddingTop: "20vh",
    paddingLeft: "1vw",
    textAlign: "center",
  }}
      >
    
        <div
          style={{
            position: "relative",
            minHeight: "60vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
      
          <div
            className={styles.imageGlitch}
            style={{
              position: "absolute",
              bottom: "7vh",
              left: "39%",
              transform: "translateX(-50%)", rotate: "-7deg",
              zIndex: 10,
            }}
          >
            <img src="/images/hmmm.png" className={styles.baseImg} />
            <img src="/images/hmmm.png" className={styles.glitchImg1} />
            <img src="/images/hmmm.png" className={styles.glitchImg2} />
            <img src="/images/hmmm.png" className={styles.glitchImg3} />
          </div>

       
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            
          
            <div
              className={pixelifySans.className}
              style={{
                color: "#93FF50",
                marginBottom: "2rem",
                fontSize: "clamp(.09rem, 2vw, 1.4rem)",
                position: "relative",
                left: "-24vw",
              }}
            >
              Hi I'm
            </div>

          
            <p className={styles.glitch} data-text="PSYCHO">
              Morsal <br /> Yosofi
            </p>

          
            <div
              className={pixelifySans.className}
              style={{
                color: "#93FF50",
                marginBottom: "2rem",
                fontSize: "clamp(1.4rem, 1.6vw, 2rem)",
                position: "relative",
                bottom: "-10vh",
                left: "-16vw",
              }}
            >
              Welcome to my portfolio :)
            </div>

          </div>
        </div>
      </div>

      <div
        className={pixelifySans.className}
        style={{
          position: "fixed",
          right: "2vw",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            color: "#93FF50",
            fontSize: "clamp(0.5rem, 1.4vw, 1rem)",
            letterSpacing: "0.2em",
          }}
        >
          Front End Developer
        </div>

        <div
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            color: "#93FF50",
            fontSize: "clamp(0.5rem, 1.4vw, 1rem)",
            letterSpacing: "0.2em",
          }}
        >
          Media Creation Student
        </div>
      </div>
    </>
  );
}
export function Navbar() {
  return (
    <div
      className={pixelifySans.className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "clamp(1rem, 4vw, 3rem)",
        padding: "1rem 2rem",
        zIndex: 9999,
      }}
    >
      <Link
        href="/about"
        style={{
          color: "#93FF50",
          textDecoration: "none",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        }}
      >
        About
      </Link>

      <Link
        href="/projects"
        style={{
          color: "#93FF50",
          textDecoration: "none",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        }}
      >
        Projects
      </Link>

      <Link
        href="/contact"
        style={{
          color: "#93FF50",
          textDecoration: "none",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        }}
      >
        Contact
      </Link>


   <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          backgroundColor: "#93FF50",
        }}
      />
    </div>
  );
}
*/

"use client";
 
import { useRef, useEffect, useState } from "react";
import styles from "./Glitch.module.scss";
import { Pixelify_Sans, Krona_One } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
 
gsap.registerPlugin(ScrollTrigger);
 
const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });
const kronaOne = Krona_One({ subsets: ["latin"], weight: "400" });
 
const STARS = [
  { top: "5%",  left: "10%" }, { top: "12%", left: "80%" }, { top: "18%", left: "55%" },
  { top: "8%",  left: "92%" }, { top: "22%", left: "30%" },
  { top: "35%", left: "5%"  }, { top: "40%", left: "88%" }, { top: "45%", left: "60%" },
  { top: "55%", left: "15%" }, { top: "58%", left: "82%" }, { top: "62%", left: "45%" },
  { top: "68%", left: "92%" }, { top: "72%", left: "25%" },
  { top: "78%", left: "70%" }, { top: "82%", left: "8%"  }, { top: "88%", left: "50%" },
  { top: "92%", left: "85%" }, { top: "96%", left: "35%" },
];
 
const PROJECTS = [
  {
    title: "cat adoption website",
    images: ["/images/pic1.png", "/images/pic2.png", "/images/pic3.png", "/images/pic4.png", "/images/pic5.png"],
    tags: ["HTML/CSS", "Javascript", "Next.js"],
    description: "In semester 3 of Front-End Development, I built a cat adoption website with Next.js as a practice project.",
    detail: `During semester 3 of Front-End Development, I created a cat adoption website using Next.js as a personal practice project to improve both my development and design skills. The goal of the website was to simulate an online platform where users could browse cats available for adoption, view information about each cat, and explore a visually engaging and user-friendly interface.
 
One of the main reasons for creating this project was to practice web design and experiment with a more unique visual style. Most cat adoption websites tend to use very simple and traditional layouts, which often feel repetitive or boring. For this project, I wanted to take a different approach by creating a more modern and non-traditional design that felt more creative and interactive while still remaining easy to navigate.
 
Although the website was not fully functional, the project gave me valuable hands-on experience with building pages and components in Next.js, working with routing, styling, and structuring a larger web application. I also practiced creating responsive layouts, organizing reusable components, and combining design ideas with front-end development. Through this project, I improved my understanding of modern web development workflows, strengthened my problem-solving skills, and gained more confidence in both coding and UI/UX design.`,
  },
  {
    title: "portfolio website 2025",
    images: ["/images/pic6.png", "/images/pic7.png", "/images/pic8.png", "/images/pic9.png"],
    tags: ["React", "SCSS", "Next.js"],
    description: "During semester 3, I created my personal showcase portfolio using Next.js to present my projects, skills, and development experience in a creative and professional way. I focused on building a responsive and interactive website with a fun and interesting design.",
    detail: `During semester 3, I created my personal showcase portfolio using Next.js. The purpose of the project was to present my work, skills, and development experience in a professional but creative way. I also wanted the website to have a fun and interesting design instead of a standard portfolio layout, so I focused on making it visually engaging and unique while still keeping it easy to navigate.
 
This project allowed me to further improve my front-end development skills by working with Next.js to build a responsive and interactive website. I practiced structuring pages, creating reusable components, and organizing content in a way that clearly showcased my projects and abilities. Alongside the technical side of development, I spent time experimenting with layouts, animations, color choices, and overall UI/UX design to give the portfolio more personality and make it stand out from more traditional portfolio websites.
 
Building this portfolio also helped me better understand how to combine functionality with design to create a polished user experience. Through the process, I improved my skills in responsive web design, component-based development, and creative problem-solving while gaining more confidence in presenting my work through a modern web application.`,
  },
  {
    title: "logo's and poster",
    images: ["/images/pic10.png", "/images/pic11.png", "/images/pic12.png"],
    tags: ["Figma", "Illustrator", "Photoshop"],
    description: "In semester 4 of Media Creation, I worked on a group project for the client Join Us, where we developed a solution aimed at helping people who struggle with loneliness or have difficulty making friends.",
    detail: `For our solution, we created a game called Kauwe Bende, an Uno-inspired card game designed to help people who struggle with loneliness or social interaction feel more comfortable meeting and talking to new people. The game included fun and accessible icebreaker questions that encouraged conversation, interaction, and teamwork in a relaxed and playful way. Our goal was to create something approachable and entertaining that could reduce social pressure and make starting conversations feel more natural and less intimidating.
 
During this group project, I mainly focused on the visual and creative side of the development process. I designed logos, posters, and multiple prototypes to help shape the identity and presentation of the game. To create these designs and prototypes, I used tools such as Figma and other design software to experiment with layouts, branding, and visual concepts. This allowed me to further develop my skills in graphic design, branding, prototyping, and UI/UX design while working within a team environment. I also gained experience translating ideas into visual concepts and creating designs that matched the friendly and social atmosphere we wanted the game to have.
 
Throughout the project, I improved my collaboration and communication skills by working closely with my teammates and contributing to both the creative process and the overall concept development.`,
  },
];
 
// IMAGE CAROUSEL
function ImageCarousel({ images, height = "18rem" }: { images: string[]; height?: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
 
  return (
    <div style={{ position: "relative", flex: "2 1 300px", height, borderRadius: "1rem", overflow: "hidden", background: "#1a1a2e" }}>
      <img src={images[idx]} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      <button onClick={prev} style={{ position: "absolute", left: "0.6rem", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", border: "1px solid #93FF50", color: "#93FF50", width: "2rem", height: "2rem", borderRadius: "4px", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>&#8249;</button>
      <button onClick={next} style={{ position: "absolute", right: "0.6rem", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", border: "1px solid #93FF50", color: "#93FF50", width: "2rem", height: "2rem", borderRadius: "4px", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>&#8250;</button>
      <div style={{ position: "absolute", bottom: "0.6rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.4rem" }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? "1.2rem" : "0.5rem", height: "0.5rem", borderRadius: "999px", background: i === idx ? "#93FF50" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.2s" }} />
        ))}
      </div>
    </div>
  );
}
 
// CYBERPUNK DIVIDER
function CyberpunkLine() {
  return (
    <div style={{ width: "100%", padding: "1.5rem 0", overflow: "hidden" }}>
      <svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ display: "block" }}>
        <line x1="0"    y1="22" x2="620"  y2="22" stroke="#93FF50" strokeWidth="1.2" />
        <line x1="620"  y1="22" x2="730"  y2="42" stroke="#93FF50" strokeWidth="1.2" />
        <line x1="730"  y1="42" x2="1080" y2="42" stroke="#93FF50" strokeWidth="1.2" />
        <line x1="1080" y1="42" x2="1200" y2="42" stroke="#93FF50" strokeWidth="7" />
      </svg>
    </div>
  );
}
 
// CYBERPUNK MODAL
function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(1160px, 97vw)",
          maxHeight: "90vh",
          overflowY: "scroll",
          scrollbarWidth: "none",
          background: "#0d0d1a",
          border: "1px solid #93FF50",
          padding: "3.5rem 4rem",
          clipPath: "polygon(0% 2.5rem, 1rem 0.6rem, 3rem 0%, calc(100% - 1rem) 0%, 100% 1rem, 100% calc(100% - 2.5rem), calc(100% - 1rem) calc(100% - 0.6rem), calc(100% - 3rem) 100%, 1rem 100%, 0% calc(100% - 1rem))",
        }}
      >
        <button onClick={onClose} className={pixelifySans.className} style={{ position: "absolute", top: "1.2rem", right: "1.8rem", background: "none", border: "none", color: "#FF0DDB", fontSize: "1.3rem", cursor: "pointer" }}>&#10005;</button>
 
        <ImageCarousel images={project.images} height="420px" />
 
        <h3 className={kronaOne.className} style={{ color: "#93FF50", fontSize: "2rem", margin: "2rem 0 1.4rem 0" }}>{project.title}</h3>
 
        {project.detail.split("\n\n").map((para, i) => (
          <p key={i} className={kronaOne.className} style={{ color: "#e5e7eb", fontSize: "0.64rem", lineHeight: "1.9", margin: "0 0 1.2rem 0", fontWeight: 400 }}>
            {para}
          </p>
        ))}
 
        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} className={pixelifySans.className} style={{ color: "#FF0DDB", border: "1px solid #FF0DDB", padding: "0.25rem 0.8rem", fontSize: "0.75rem", borderRadius: "4px" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default function Home() {
  const sectionRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const aboutRef    = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef  = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
 
  useGSAP(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;
    gsap.to(track, {
      x: () => -(track.scrollWidth / 2),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth / 2}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  });
 
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });
 
  return (
    <>
      <Navbar
        onAbout={()    => scrollTo(aboutRef)}
        onProjects={() => scrollTo(projectsRef)}
        onContact={()  => scrollTo(contactRef)}
      />
 
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
 
      {/* global stars */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {STARS.map((pos, i) => (
          <div key={i} style={{ position: "absolute", top: pos.top, left: pos.left, color: "white", fontSize: i % 3 === 0 ? "1rem" : i % 3 === 1 ? "0.5rem" : "0.7rem", opacity: 0.35 + (i % 3) * 0.1 }}>&#10022;</div>
        ))}
      </div>
 
      {/* HERO */}
      <div className={styles.wrapper} style={{ height: "100vh", position: "relative", zIndex: 1, paddingTop: "20vh", paddingLeft: "1vw", textAlign: "center" }}>
        <div style={{ position: "relative", minHeight: "60vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div className={styles.imageGlitch} style={{ position: "absolute", bottom: "7vh", left: "39%", transform: "translateX(-50%)", rotate: "-7deg", zIndex: 10 }}>
            <img src="/images/hmmm.png" className={styles.baseImg} alt="" />
            <img src="/images/hmmm.png" className={styles.glitchImg1} alt="" />
            <img src="/images/hmmm.png" className={styles.glitchImg2} alt="" />
            <img src="/images/hmmm.png" className={styles.glitchImg3} alt="" />
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className={pixelifySans.className} style={{ color: "#93FF50", marginBottom: "2rem", fontSize: "clamp(.09rem, 2vw, 1.4rem)", position: "relative", left: "-24vw" }}>Hi I&apos;m</div>
            <p className={styles.glitch} data-text="PSYCHO">Morsal <br /> Yosofi</p>
            <div className={pixelifySans.className} style={{ color: "#93FF50", marginBottom: "2rem", fontSize: "clamp(1.4rem, 1.6vw, 2rem)", position: "relative", bottom: "-10vh", left: "-16vw" }}>Welcome to my portfolio :)</div>
          </div>
        </div>
      </div>
 
      {/* right side text */}
      <div className={pixelifySans.className} style={{ position: "fixed", right: "2vw", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "2rem", zIndex: 9999 }}>
        <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: "#93FF50", fontSize: "clamp(0.5rem, 1.4vw, 1rem)", letterSpacing: "0.2em" }}>Front End Developer</div>
        <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: "#93FF50", fontSize: "clamp(0.5rem, 1.4vw, 1rem)", letterSpacing: "0.2em" }}>Media Creation Student</div>
      </div>
 
      {/* HORIZONTAL SCROLL */}
      <section ref={sectionRef} style={{ overflow: "hidden", position: "relative", zIndex: 1 }}>
        <div ref={trackRef} className={pixelifySans.className} style={{ display: "flex", alignItems: "center", height: "100vh", width: "max-content", gap: "4rem", paddingLeft: "4rem" }}>
          {["Showcase", "Portfolio 2026", "Showcase", "Portfolio 2026", "Showcase", "Portfolio 2026", "Showcase", "Portfolio 2026"].map((word, i) => (
            <span key={i} style={{ fontSize: "clamp(80px, 12vw, 160px)", whiteSpace: "nowrap", color: i % 2 === 0 ? "#070027" : "#FF0DDB", WebkitTextStroke: i % 2 === 0 ? "2px #93FF50" : undefined }}>{word}</span>
          ))}
        </div>
      </section>
 
      {/* CYBERPUNK DIVIDER */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <CyberpunkLine />
      </div>
 
      {/* ABOUT */}
      <section ref={aboutRef} style={{ position: "relative", zIndex: 1, minHeight: "100vh", padding: "4rem 5rem 6rem", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 10, marginBottom: "2.5rem" }}>
          <h2 className={pixelifySans.className} style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: "bold", margin: 0, display: "flex", gap: "0.3em", alignItems: "baseline" }}>
            <span style={{ color: "#FF0DDB" }}>about</span>
            <span style={{ color: "transparent", WebkitTextStroke: "2px #93FF50" }}>me</span>
          </h2>
          <div style={{ marginTop: "0.75rem", borderTop: "1px solid #9ca3af", width: "12rem" }} />
        </div>
 
        <div style={{ position: "relative", zIndex: 10, display: "flex", gap: "4rem", alignItems: "flex-start" }}>
          <div className={kronaOne.className} style={{ flex: "1 1 0", fontSize: "clamp(0.6rem, 0.85vw, 0.72rem)", lineHeight: "1.8", color: "#e5e7eb", display: "flex", flexDirection: "column", gap: "0.8rem", fontWeight: 400 }}>
            <p style={{ margin: 0 }}>Hi, my name is Morsal Yosofi and I am a 20-year-old ICT student with a strong passion for technology and building practical digital solutions. I enjoy learning how systems work behind the scenes and turning ideas into functional applications.</p>
            <p style={{ margin: 0 }}>During my studies, I have gained experience with both front-end and back-end development. I am particularly interested in UI and UX design and how thoughtful interfaces can improve the overall user experience.</p>
            <p style={{ margin: 0 }}>I enjoy challenging myself with new projects, experimenting with different tools, and continuously learning new technologies to improve my technical skills. My goal is to keep growing as a developer and to keep learning throughout my career.</p>
          </div>
          <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="/images/hmmm.png" alt="Morsal" style={{ width: "clamp(130px, 16vw, 210px)", imageRendering: "pixelated" }} />
          </div>
        </div>
 
        {/* SKILLS */}
        <div style={{ position: "relative", zIndex: 10, marginTop: "3rem" }}>
          <h3 className={pixelifySans.className} style={{ color: "transparent", WebkitTextStroke: "1.5px #93FF50", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", margin: "0 0 1.5rem 0" }}>skills</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", maxWidth: "600px" }}>
            {["HTML/CSS", "Javascript", "Python", "IT Infrastructure & Networking", "Git / GitHub", "UI/UX Design Basics", "Responsive Design"].map((skill) => (
              <span
                key={skill}
                className={kronaOne.className}
                style={{
                  border: "1px solid #FF0DDB",
                  borderRadius: "999px",
                  padding: "0.45rem 1.1rem",
                  color: "#FF0DDB",
                  fontSize: "clamp(0.58rem, 0.85vw, 0.72rem)",
                  fontWeight: 400,
                  background: "transparent",
                }}
              >{skill}</span>
            ))}
          </div>
        </div>
 
        {/* EXPERIENCE */}
        <div style={{ position: "relative", zIndex: 10, marginTop: "3.5rem" }}>
          <h3 className={pixelifySans.className} style={{ color: "transparent", WebkitTextStroke: "1.5px #93FF50", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", margin: "0 0 1.5rem 0" }}>expierence</h3>
          <div style={{ display: "flex", gap: "0", alignItems: "stretch" }}>
            {[
              { school: "Commanderij college", detail: "Havo" },
              { school: "Fontys", detail: "semester 1 - 2\ninfrastructure and cybersecurity" },
              { school: "Fontys", detail: "semester 3 - 4\nfront end development and media design" },
            ].map((item, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
                <div className={kronaOne.className} style={{ border: "1px solid #FF0DDB", borderRadius: "0.5rem", padding: "1rem 1.2rem", fontSize: "0.7rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem", fontWeight: 400 }}>
                  <p style={{ margin: 0, color: "#e5e7eb" }}>{item.school}</p>
                  <p style={{ margin: 0, color: "#9ca3af", whiteSpace: "pre-line" }}>{item.detail}</p>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: "2rem", display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: "100%", height: "1px", background: "#FF0DDB" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* PROJECTS */}
      <section ref={projectsRef} className={pixelifySans.className} style={{ position: "relative", zIndex: 1, minHeight: "100vh", padding: "6rem 5rem", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 10, marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: "#FF0DDB", margin: "0 0 1rem 0" }}>Projects</h2>
          <div style={{ borderTop: "1px solid #9ca3af", width: "12rem" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {PROJECTS.map((project, i) => (
            <div key={i} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2.5rem" }}>
              <ImageCarousel images={project.images} />
              <div style={{ flex: "1 1 200px" }}>
                <h3 style={{ color: "#93FF50", fontSize: "1.25rem", marginBottom: "0.75rem" }}>{project.title}</h3>
                <p className={kronaOne.className} style={{ color: "#d1d5db", fontSize: "0.72rem", marginBottom: "1.25rem", lineHeight: "1.75", fontWeight: 400 }}>
                  {project.description}
                </p>
                <button onClick={() => setActiveProject(project)} className={pixelifySans.className} style={{ background: "none", border: "none", cursor: "pointer", color: "#FF0DDB", fontSize: "0.95rem", padding: 0, textDecoration: "underline", textUnderlineOffset: "4px" }}>
                  learn more &#8594;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* CONTACT */}
      <section ref={contactRef} className={pixelifySans.className} style={{ position: "relative", zIndex: 1, minHeight: "100vh", padding: "6rem 5rem", overflow: "hidden" }}>
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: "#FF0DDB", margin: "0 0 1rem 0" }}>contact</h2>
          <div style={{ borderTop: "1px solid #9ca3af", width: "12rem" }} />
        </div>
 
        {/* two column: contact info left, image right */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "4rem" }}>
          {/* contact links */}
          <div className={kronaOne.className} style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "#d1d5db", fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)", fontWeight: 400 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <img src="/images/pic15.png" alt="email" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              <span>yosofimorsal@gmail.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <img src="/images/pic16.png" alt="phone" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              <span>0641576530</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <img src="/images/pic17.png" alt="social" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              <span>@morsal_yosofi</span>
            </div>
          </div>
 
          {/* decorative character image on the right */}
          <div style={{ flex: "0 0 auto", marginLeft: "34rem", alignSelf: "flex-start", marginTop: "-7rem" }}>
            <img
              src="/images/pic14.png"
              alt=""
              style={{ width: "clamp(120px, 14vw, 200px)", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
 
// NAVBAR
function Navbar({ onAbout, onProjects, onContact }: { onAbout: () => void; onProjects: () => void; onContact: () => void }) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
 
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10 || currentY < lastScrollY.current) setVisible(true);
      else setVisible(false);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: 9999, transform: visible ? "translateY(0)" : "translateY(-110%)", transition: "transform 0.35s ease" }}>
      {/* slimmer padding */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(1rem, 4vw, 3rem)", padding: "0.5rem 2rem", background: "rgba(7, 0, 39, 0.9)", backdropFilter: "blur(6px)" }}>
        {[
          { label: "about me",  fn: onAbout },
          { label: "projects",  fn: onProjects },
          { label: "contact",   fn: onContact },
        ].map(({ label, fn }) => (
          <button
            key={label}
            onClick={fn}
            className={pixelifySans.className}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FF0DDB"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#93FF50"; }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#93FF50", fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)", fontWeight: 400, transition: "color 0.2s" }}
          >{label}</button>
        ))}
      </div>
      <svg width="100%" height="12" viewBox="0 0 1000 12" preserveAspectRatio="none" style={{ display: "block" }}>
        <line x1="0" y1="1" x2="1000" y2="1" stroke="#93FF50" strokeWidth="1" />
        <polygon points="430,1 445,12 555,12 570,1" fill="#93FF50" />
      </svg>
    </div>
  );
}
 