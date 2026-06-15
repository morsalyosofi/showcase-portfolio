"use client";
 
import { useRef, useEffect, useState } from "react";
import styles from "./Glitch.module.scss";
import { Pixelify_Sans, Space_Grotesk, Bungee_Shade } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
 
gsap.registerPlugin(ScrollTrigger);
 
const pixelify   = Pixelify_Sans({ subsets: ["latin"] });
const grotesk    = Space_Grotesk({ subsets: ["latin"] });
const bungeeShade = Bungee_Shade({ subsets: ["latin"], weight: "400" });
 
const BG       = "#070027";  // deep navy-black
const CYAN     = "#93FF50";  // electric cyan  (replaces green #93FF50)
const ORANGE   = "#FF0DDB";  // neon orange    (replaces pink #FF0DDB)
 
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
    title: "Cat Adoption Website",
    year: "2024",
    images: ["/images/pic1.png","/images/pic2.png","/images/pic3.png","/images/pic4.png","/images/pic5.png"],
    tags: ["HTML/CSS","JavaScript","Next.js"],
    description: "A Next.js practice project — a non-traditional cat adoption platform with a creative layout designed to stand out from standard shelter sites.",
    detail: `During semester 3 of Front-End Development, I created a cat adoption website using Next.js as a personal practice project to improve both my development and design skills.
 
Most cat adoption websites use very simple and traditional layouts that feel repetitive or boring. For this project, I wanted a more modern, non-traditional design that felt creative and interactive while remaining easy to navigate.
 
Although the website was not fully functional, the project gave me hands-on experience building pages and components in Next.js, working with routing, styling, and structuring a larger web application. I also practised creating responsive layouts, organising reusable components, and combining design ideas with front-end development.`,
  },
  {
    title: "Portfolio Website 2025",
    year: "2025",
    images: ["/images/pic6.png","/images/pic7.png","/images/pic8.png","/images/pic9.png"],
    tags: ["React","SCSS","Next.js"],
    description: "Personal showcase portfolio built with Next.js — responsive, animated, and deliberately off-template. Focused on combining strong UI/UX with expressive visual design.",
    detail: `During semester 3, I created my personal showcase portfolio using Next.js. I wanted the website to have a fun, interesting design instead of a standard portfolio layout, so I focused on making it visually engaging and unique while still keeping it easy to navigate.
 
This project improved my front-end skills through building a responsive, interactive website. I practised structuring pages, creating reusable components, and combining design ideas with front-end development.
 
Building this portfolio helped me better understand how to combine functionality with design to create a polished user experience. Through the process I improved my skills in responsive web design, component-based development, and creative problem-solving.`,
  },
  {
    title: "Logos & Poster — Kauwe Bende",
    year: "2025",
    images: ["/images/pic10.png","/images/pic11.png","/images/pic12.png"],
    tags: ["Figma","Illustrator","Photoshop"],
    description: "Visual identity for Kauwe Bende, an Uno-inspired card game for the Join Us client — helping people who struggle with loneliness connect through play.",
    detail: `For semester 4 Media Creation, our group created Kauwe Bende for the client Join Us — an Uno-inspired card game designed to help people who struggle with loneliness.
 
I focused on the visual side: designing logos, posters, and multiple prototypes using Figma and other design software. This shaped the game's identity and presentation, and allowed me to develop my skills in graphic design, branding, and UI/UX.
 
Throughout the project I improved my collaboration skills by working closely with teammates, contributing to both the creative process and overall concept development.`,
  },
];
 
const SKILLS = ["HTML / CSS","JavaScript","Python","Networking","Git / GitHub","UI/UX Design","Responsive Design","Figma","Next.js"];
const EXPERIENCE = [
  { school: "Commanderij College", detail: "HAVO" },
  { school: "Fontys — Semester 1–2", detail: "Infrastructure & Cybersecurity" },
  { school: "Fontys — Semester 3–4", detail: "Front-End Development & Media Design" },
];
 
// ── IMAGE CAROUSEL ──────────────────────────────────────────────────────────
function ImageCarousel({ images, height = "260px" }: { images: string[]; height?: string }) {
  const [idx, setIdx] = useState(0);
  return (
    <div style={{ position:"relative", height, borderRadius:"6px", overflow:"hidden", background:"rgba(7,0,39,0.8)", border:"1px solid rgba(147,255,80,0.2)", flexShrink:0 }}>
      <img src={images[idx]} alt="" style={{ width:"100%", height:"100%", objectFit:"contain", display:"block" }} />
      <button onClick={() => setIdx(i => (i-1+images.length)%images.length)} style={{ position:"absolute", left:"0.75rem", top:"50%", transform:"translateY(-50%)", background:"rgba(7,0,39,0.85)", border:"1px solid #93FF50", color:"#93FF50", width:"2rem", height:"2rem", borderRadius:"3px", cursor:"pointer", fontSize:"1.1rem", display:"flex", alignItems:"center", justifyContent:"center" }}>&#8249;</button>
      <button onClick={() => setIdx(i => (i+1)%images.length)} style={{ position:"absolute", right:"0.75rem", top:"50%", transform:"translateY(-50%)", background:"rgba(7,0,39,0.85)", border:"1px solid #93FF50", color:"#93FF50", width:"2rem", height:"2rem", borderRadius:"3px", cursor:"pointer", fontSize:"1.1rem", display:"flex", alignItems:"center", justifyContent:"center" }}>&#8250;</button>
      <div style={{ position:"absolute", bottom:"0.65rem", left:"50%", transform:"translateX(-50%)", display:"flex", gap:"0.35rem" }}>
        {images.map((_,i) => (
          <button key={i} onClick={() => setIdx(i)} style={{ width:i===idx?"1.2rem":"0.4rem", height:"0.4rem", borderRadius:"999px", background:i===idx?"#93FF50":"rgba(147,255,80,0.25)", border:"none", cursor:"pointer", padding:0, transition:"all 0.2s" }} />
        ))}
      </div>
    </div>
  );
}
 
// ── PROJECT MODAL ───────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:99999, background:"rgba(7,0,39,0.95)", display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem", backdropFilter:"blur(8px)" }}>
      <div onClick={e => e.stopPropagation()} style={{ position:"relative", width:"min(1000px,95vw)", maxHeight:"88vh", overflowY:"auto", scrollbarWidth:"none", background:"#0d0d2e", border:"1px solid rgba(147,255,80,0.3)", borderRadius:"6px", padding:"clamp(2rem,5vw,3.5rem)" }}>
        <button onClick={onClose} className={pixelify.className} style={{ position:"absolute", top:"1.25rem", right:"1.25rem", background:"none", border:"1px solid rgba(255,13,219,0.5)", color:"#FF0DDB", fontSize:"0.75rem", cursor:"pointer", padding:"0.3rem 0.8rem", letterSpacing:"0.1em", borderRadius:"2px" }}>✕ close</button>
        <ImageCarousel images={project.images} height="380px" />
        <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", margin:"2.5rem 0 0.75rem 0" }}>
          <span className={pixelify.className} style={{ color:"#FF0DDB", fontSize:"0.75rem", letterSpacing:"0.2em" }}>{project.year}</span>
          <div style={{ flex:1, height:"1px", background:"rgba(147,255,80,0.12)" }} />
        </div>
        <h3 className={grotesk.className} style={{ color:"#93FF50", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:700, margin:"0 0 1.5rem 0" }}>{project.title}</h3>
        {project.detail.split("\n\n").map((para, i) => (
          <p key={i} className={grotesk.className} style={{ color:"rgba(255,255,255,0.7)", fontSize:"clamp(0.88rem,1.1vw,1rem)", lineHeight:"2", margin:"0 0 1.1rem 0", fontWeight:400, wordSpacing:"0.05em" }}>{para}</p>
        ))}
        <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginTop:"1.5rem" }}>
          {project.tags.map(tag => (
            <span key={tag} className={pixelify.className} style={{ color:"#FF0DDB", border:"1px solid rgba(255,13,219,0.45)", padding:"0.3rem 0.8rem", fontSize:"0.75rem", borderRadius:"2px" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
 
// ── CYBERPUNK DIVIDER ───────────────────────────────────────────────────────
function CyberpunkLine() {
  return (
    <div style={{ width:"100%", overflow:"hidden", lineHeight:0, position:"relative", zIndex:1 }}>
      <svg width="100%" height="50" viewBox="0 0 1200 50" preserveAspectRatio="none" style={{ display:"block" }}>
        <line x1="0"    y1="18" x2="580"  y2="18" stroke="#93FF50" strokeWidth="1.5" opacity="0.8"/>
        <line x1="580"  y1="18" x2="680"  y2="36" stroke="#93FF50" strokeWidth="1.5" opacity="0.8"/>
        <line x1="680"  y1="36" x2="1060" y2="36" stroke="#93FF50" strokeWidth="1.5" opacity="0.8"/>
        <line x1="1060" y1="36" x2="1200" y2="36" stroke="#93FF50" strokeWidth="7"   opacity="0.9"/>
      </svg>
    </div>
  );
}
 
// ── SECTION HEADER ──────────────────────────────────────────────────────────
function SectionHeader({ label, title, outline }: { label: string; title: string; outline: string }) {
  return (
    <div style={{ marginBottom:"3rem" }}>
      <span className={pixelify.className} style={{ color:"rgba(147,255,80,0.45)", fontSize:"0.78rem", letterSpacing:"0.3em", display:"block", marginBottom:"0.6rem" }}>{label}</span>
      <h2 className={grotesk.className} style={{ fontSize:"clamp(2.8rem,6vw,4.5rem)", fontWeight:900, letterSpacing:"-0.03em", margin:0, lineHeight:1, display:"flex", gap:"0.3em", alignItems:"baseline", flexWrap:"wrap" }}>
        <span style={{ color:"#FF0DDB" }}>{title}</span>
        <span style={{ color:"transparent", WebkitTextStroke:"2px #93FF50" }}>{outline}</span>
      </h2>
      <div style={{ marginTop:"0.9rem", width:"10rem", height:"1px", background:"linear-gradient(to right, rgba(147,255,80,0.5), transparent)" }} />
    </div>
  );
}
 
// ── MAIN ────────────────────────────────────────────────────────────────────
export default function Home() {
  const marqueeRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const aboutRef    = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef  = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
 
  // Shorter marquee: only scrolls its own width (not doubled), so it ends quickly
  useGSAP(() => {
    const section = marqueeRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;
    gsap.to(track, {
      x: () => -(track.scrollWidth / 2),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth / 4}`, // ← shorter scroll distance = exits faster
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  });
 
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) =>
    ref.current?.scrollIntoView({ behavior:"smooth" });
 
  const pad = "clamp(2rem, 7vw, 6rem)";
 
  return (
    <>
      <Navbar
        onAbout={()    => scrollTo(aboutRef)}
        onProjects={() => scrollTo(projectsRef)}
        onContact={()  => scrollTo(contactRef)}
      />
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
 
      {/* fixed background colour + stars — sits behind everything */}
      <div style={{ position:"fixed", inset:0, zIndex:0, background:BG, pointerEvents:"none" }} />
      <div style={{ position:"fixed", inset:0, zIndex:1, pointerEvents:"none" }}>
        {STARS.map((pos, i) => (
          <div key={i} style={{
            position:"absolute", top:pos.top, left:pos.left,
            color:"white",
            fontSize:i%3===0?"1rem":i%3===1?"0.5rem":"0.7rem",
            opacity:0.38 + (i%3)*0.12,
          }}>&#10022;</div>
        ))}
      </div>
 
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className={styles.wrapper} style={{ height:"100vh", background:"transparent", position:"relative", zIndex:1, overflow:"hidden", display:"flex", alignItems:"center", paddingTop:"80px" }}>
 
        <div style={{ position:"relative", zIndex:2, width:"100%", display:"flex", alignItems:"center", paddingLeft:"clamp(2rem,7vw,6rem)", paddingRight:"clamp(2rem,7vw,6rem)", gap:"2rem" }}>
 
          {/* LEFT: text */}
          <div style={{ flex:"1 1 0", minWidth:0 }}>
 
            {/* "hi i'm :)" tag */}
            <div className={pixelify.className} style={{ color:"#FF0DDB", fontSize:"clamp(0.9rem,1.6vw,1.2rem)", marginBottom:"1rem", display:"inline-block", border:"1px solid rgba(255,13,219,0.5)", padding:"0.2rem 0.85rem", borderRadius:"2px", rotate:"-1.5deg", letterSpacing:"0.08em" }}>
              hi i&apos;m :)
            </div>
 
            {/* big glitch name — Bungee Shade with glitch effect */}
            <div style={{ marginBottom:"0.4rem" }}>
              <p
                className={`${styles.glitch} ${bungeeShade.className}`}
                data-text="MORSAL"
                style={{ fontSize:"clamp(4rem,10vw,9rem)", margin:0, color:"#fff", lineHeight:0.9 }}
              >
                MORSAL
              </p>
              <p
                className={grotesk.className}
                style={{ fontSize:"clamp(4.5rem,11vw,10rem)", fontWeight:900, letterSpacing:"-0.04em", margin:0, color:"transparent", WebkitTextStroke:"2px #93FF50", lineHeight:0.9, marginLeft:"clamp(0.5rem,2vw,2.5rem)" }}
              >
                YOSOFI<span style={{ color:"#FF0DDB", WebkitTextStroke:"0" }}>.</span>
              </p>
            </div>
 
            {/* subtitle */}
            <div className={pixelify.className} style={{ color:"#93FF50", fontSize:"clamp(0.82rem,1.3vw,1rem)", letterSpacing:"0.12em", margin:"1.8rem 0 2.5rem 0.2rem" }}>
              front-end developer &amp; media creator ✦
            </div>
 
            {/* CTA buttons */}
            <div style={{ display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
              <button
                onClick={() => scrollTo(projectsRef)}
                className={pixelify.className}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background="#93FF50"; (e.currentTarget as HTMLButtonElement).style.color=BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background="transparent"; (e.currentTarget as HTMLButtonElement).style.color="#93FF50"; }}
                style={{ background:"transparent", border:"1px solid #93FF50", color:"#93FF50", padding:"0.75rem 1.8rem", fontSize:"clamp(0.75rem,1vw,0.88rem)", letterSpacing:"0.12em", cursor:"pointer", borderRadius:"2px", transition:"all 0.18s" }}
              >
                view my work →
              </button>
              <button
                onClick={() => scrollTo(contactRef)}
                className={pixelify.className}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background="#FF0DDB"; (e.currentTarget as HTMLButtonElement).style.color=BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background="transparent"; (e.currentTarget as HTMLButtonElement).style.color="#FF0DDB"; }}
                style={{ background:"transparent", border:"1px solid #FF0DDB", color:"#FF0DDB", padding:"0.75rem 1.8rem", fontSize:"clamp(0.75rem,1vw,0.88rem)", letterSpacing:"0.12em", cursor:"pointer", borderRadius:"2px", transition:"all 0.18s" }}
              >
                get in touch
              </button>
            </div>
 
          </div>
 
          {/* RIGHT: glitching character */}
          <div style={{ flex:"0 0 auto", position:"relative", alignSelf:"flex-end", marginBottom:"3vh", marginRight:"5vw" }}>
            <div className={pixelify.className} style={{ position:"absolute", top:"-2.2rem", right:"0", color:"#FF0DDB", fontSize:"0.68rem", letterSpacing:"0.12em", border:"1px solid rgba(255,13,219,0.45)", padding:"0.2rem 0.65rem", borderRadius:"2px", rotate:"2deg", whiteSpace:"nowrap" }}>
              ✦ media creation student
            </div>
            <div className={styles.imageGlitch} style={{ rotate:"-7deg" }}>
              <img src="/images/hmmm.png" className={styles.baseImg}    alt="" style={{ width:"clamp(160px,20vw,280px)", imageRendering:"pixelated", display:"block" }} />
              <img src="/images/hmmm.png" className={styles.glitchImg1} alt="" style={{ width:"clamp(160px,20vw,280px)", imageRendering:"pixelated", display:"block" }} />
              <img src="/images/hmmm.png" className={styles.glitchImg2} alt="" style={{ width:"clamp(160px,20vw,280px)", imageRendering:"pixelated", display:"block" }} />
              <img src="/images/hmmm.png" className={styles.glitchImg3} alt="" style={{ width:"clamp(160px,20vw,280px)", imageRendering:"pixelated", display:"block" }} />
            </div>
          </div>
        </div>
 
        {/* scroll hint bottom left */}
        <div className={pixelify.className} style={{ position:"absolute", bottom:"2rem", left:"clamp(2rem,7vw,6rem)", display:"flex", alignItems:"center", gap:"0.6rem", zIndex:2, color:"rgba(147,255,80,0.3)", fontSize:"0.65rem", letterSpacing:"0.2em" }}>
          <div style={{ width:"1px", height:"1.75rem", background:"rgba(147,255,80,0.25)" }} />
          scroll ↓
        </div>
      </div>
 
      {/* vertical side labels — fixed right */}
      <div className={pixelify.className} style={{ position:"fixed", right:"2vw", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:"2rem", zIndex:9999 }}>
        <div style={{ writingMode:"vertical-rl", transform:"rotate(180deg)", color:"#93FF50", fontSize:"clamp(0.5rem,1.4vw,1rem)", letterSpacing:"0.2em" }}>Front End Developer</div>
        <div style={{ writingMode:"vertical-rl", transform:"rotate(180deg)", color:"#93FF50", fontSize:"clamp(0.5rem,1.4vw,1rem)", letterSpacing:"0.2em" }}>Media Creation Student</div>
      </div>
 
      <CyberpunkLine />
 
      {/* ── HORIZONTAL SCROLL MARQUEE (shorter) ──────────────────────────── */}
      <section ref={marqueeRef} style={{ overflow:"hidden", position:"relative", zIndex:1, borderTop:"1px solid rgba(147,255,80,0.08)", borderBottom:"1px solid rgba(147,255,80,0.08)" }}>
        <div ref={trackRef} className={grotesk.className} style={{ display:"flex", alignItems:"center", height:"100vh", width:"max-content", gap:"3rem", paddingLeft:"3rem" }}>
          {/* Only 4 words instead of 8 — half the scroll length */}
          {["Showcase","Portfolio 2026","Showcase","Portfolio 2026","Showcase","Portfolio 2026","Showcase","Portfolio 2026"].map((word, i) => (
            <span key={i} style={{
              fontSize:"clamp(70px,11vw,130px)",
              fontWeight:900,
              letterSpacing:"-0.03em",
              whiteSpace:"nowrap",
              color:i%2===0?"transparent":"#FF0DDB",
              WebkitTextStroke:i%2===0?"1.5px rgba(147,255,80,0.5)":undefined,
            }}>{word}</span>
          ))}
        </div>
      </section>
 
      <CyberpunkLine />
 
      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section ref={aboutRef} style={{ background:BG, position:"relative", zIndex:1, padding:`4.5rem ${pad} 4.5rem` }}>
        <SectionHeader label="— who am i" title="about" outline="me" />
 
        {/* bio + image — clean two column */}
        <div style={{ display:"flex", gap:"5rem", alignItems:"center", marginBottom:"3.5rem" }}>
          <div style={{ flex:"1 1 0", display:"flex", flexDirection:"column", gap:"1.4rem" }}>
            <p className={grotesk.className} style={{ color:"rgba(255,255,255,0.75)", fontSize:"clamp(1rem,1.2vw,1.1rem)", lineHeight:"2", margin:0, fontWeight:400, wordSpacing:"0.05em" }}>
              Hi, my name is Morsal Yosofi — a 20-year-old ICT student with a passion for building things that look good and work well. I enjoy learning how systems work and turning ideas into real digital products.
            </p>
            <p className={grotesk.className} style={{ color:"rgba(255,255,255,0.75)", fontSize:"clamp(1rem,1.2vw,1.1rem)", lineHeight:"2", margin:0, fontWeight:400, wordSpacing:"0.05em" }}>
              During my studies I&apos;ve worked across front-end development, back-end basics, and UI/UX design. I&apos;m particularly drawn to interfaces — how the way something looks and feels shapes the way people use it.
            </p>
            <p className={grotesk.className} style={{ color:"rgba(255,255,255,0.75)", fontSize:"clamp(1rem,1.2vw,1.1rem)", lineHeight:"2", margin:0, fontWeight:400, wordSpacing:"0.05em" }}>
              I&apos;m always looking for the next project to push my skills further. My goal is to keep growing as a developer and designer throughout my career.
            </p>
          </div>
          <div style={{ flex:"0 0 auto" }}>
            <img src="/images/hmmm.png" alt="Morsal" style={{ width:"clamp(130px,14vw,200px)", imageRendering:"pixelated", display:"block" }} />
          </div>
        </div>
 
        {/* skills */}
        <div style={{ marginBottom:"3rem" }}>
          <div className={pixelify.className} style={{ color:"rgba(147,255,80,0.5)", fontSize:"0.75rem", letterSpacing:"0.28em", marginBottom:"1.2rem" }}>— skills</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.55rem" }}>
            {SKILLS.map(skill => (
              <span key={skill} className={pixelify.className} style={{ color:"#FF0DDB", border:"1px solid rgba(255,13,219,0.35)", padding:"0.4rem 1rem", fontSize:"0.78rem", borderRadius:"2px", background:"rgba(255,13,219,0.03)" }}>{skill}</span>
            ))}
          </div>
        </div>
 
        {/* experience */}
        <div>
          <div className={pixelify.className} style={{ color:"rgba(147,255,80,0.5)", fontSize:"0.75rem", letterSpacing:"0.28em", marginBottom:"1.2rem" }}>— experience</div>
          <div style={{ display:"flex", gap:"0", alignItems:"stretch" }}>
            {EXPERIENCE.map((item, i, arr) => (
              <div key={i} style={{ display:"flex", alignItems:"stretch", flex:1 }}>
                <div className={grotesk.className} style={{ border:"1px solid rgba(255,13,219,0.3)", borderRadius:"0.5rem", padding:"1.2rem 1.5rem", flex:1, display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                  <p style={{ margin:0, color:"#e5e7eb", fontSize:"clamp(0.88rem,1vw,0.98rem)", fontWeight:600 }}>{item.school}</p>
                  <p style={{ margin:0, color:"rgba(147,255,80,0.4)", fontSize:"0.75rem", letterSpacing:"0.04em", lineHeight:"1.7" }}>{item.detail}</p>
                </div>
                {i < arr.length-1 && (
                  <div style={{ width:"2rem", display:"flex", alignItems:"center", flexShrink:0 }}>
                    <div style={{ width:"100%", height:"1px", background:"rgba(255,13,219,0.35)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <CyberpunkLine />
 
      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section ref={projectsRef} style={{ background:BG, position:"relative", zIndex:1, padding:`4.5rem ${pad} 4.5rem` }}>
        <SectionHeader label="— what i've built" title="my" outline="projects" />
        <div style={{ display:"flex", flexDirection:"column" }}>
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              style={{ display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:"4rem", alignItems:"center", padding:"3.5rem 1rem", borderTop:i>0?"1px solid rgba(147,255,80,0.08)":"none", cursor:"pointer", borderRadius:"6px", transition:"background 0.2s" }}
              onClick={() => setActiveProject(project)}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(147,255,80,0.03)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background="transparent"; }}
            >
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1rem" }}>
                  <span className={pixelify.className} style={{ color:"rgba(147,255,80,0.25)", fontSize:"0.68rem", letterSpacing:"0.25em" }}>0{i+1}</span>
                  <span className={pixelify.className} style={{ color:"#FF0DDB", fontSize:"0.68rem", letterSpacing:"0.2em" }}>{project.year}</span>
                </div>
                <h3 className={grotesk.className} style={{ color:"#fff", fontSize:"clamp(1.2rem,2.2vw,1.7rem)", fontWeight:700, letterSpacing:"-0.02em", margin:"0 0 1rem 0" }}>{project.title}</h3>
                <p className={grotesk.className} style={{ color:"rgba(255,255,255,0.5)", fontSize:"clamp(0.88rem,1vw,0.98rem)", lineHeight:"1.95", margin:"0 0 1.5rem 0", fontWeight:400, wordSpacing:"0.04em" }}>{project.description}</p>
                <div style={{ display:"flex", gap:"0.45rem", flexWrap:"wrap", marginBottom:"1.75rem" }}>
                  {project.tags.map(tag => (
                    <span key={tag} className={pixelify.className} style={{ color:"#FF0DDB", border:"1px solid rgba(255,13,219,0.35)", padding:"0.3rem 0.75rem", fontSize:"0.72rem", borderRadius:"2px" }}>{tag}</span>
                  ))}
                </div>
                <span className={pixelify.className} style={{ color:"#93FF50", fontSize:"0.82rem", letterSpacing:"0.1em", borderBottom:"1px solid rgba(147,255,80,0.4)", paddingBottom:"2px" }}>
                  read more &#8594;
                </span>
              </div>
              <ImageCarousel images={project.images} height="clamp(200px,22vw,320px)" />
            </div>
          ))}
        </div>
      </section>
 
      <CyberpunkLine />
 
      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section ref={contactRef} style={{ background:BG, position:"relative", zIndex:1, padding:`4.5rem ${pad} 4.5rem` }}>
        <SectionHeader label="— say hello" title="get in" outline="touch" />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem", alignItems:"start" }}>
          <div>
            <p className={grotesk.className} style={{ color:"rgba(255,255,255,0.5)", fontSize:"clamp(0.9rem,1.2vw,1.05rem)", lineHeight:"2", margin:"0 0 3rem 0", fontWeight:400, wordSpacing:"0.05em" }}>
              Want to work together or just say hello? Feel free to reach out — I&apos;m always open to new opportunities and fun projects. :)
            </p>
            <div style={{ display:"flex", flexDirection:"column" }}>
              {[
                { icon:"/images/pic15.png", label:"email",     value:"yosofimorsal@gmail.com" },
                { icon:"/images/pic16.png", label:"phone",     value:"0641576530" },
                { icon:"/images/pic17.png", label:"instagram", value:"@morsal_yosofi" },
              ].map((item, i, arr) => (
                <div key={item.label} style={{ display:"flex", alignItems:"center", gap:"1.5rem", padding:"1.4rem 0", borderBottom:i<arr.length-1?"1px solid rgba(147,255,80,0.08)":"none" }}>
                  <div style={{ width:"40px", height:"40px", border:"1px solid rgba(147,255,80,0.18)", borderRadius:"4px", background:"rgba(147,255,80,0.04)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <img src={item.icon} alt={item.label} style={{ width:"18px", height:"18px", objectFit:"contain" }} />
                  </div>
                  <div>
                    <div className={pixelify.className} style={{ color:"rgba(147,255,80,0.35)", fontSize:"0.65rem", letterSpacing:"0.2em", marginBottom:"0.2rem" }}>{item.label}</div>
                    <div className={grotesk.className} style={{ color:"rgba(255,255,255,0.8)", fontSize:"clamp(0.88rem,1.1vw,1rem)", fontWeight:500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* typographic decoration */}
          <div style={{ display:"flex", flexDirection:"column", gap:"0.15rem", paddingTop:"0.5rem" }}>
            <div className={grotesk.className} style={{ fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:900, letterSpacing:"-0.04em", lineHeight:0.88, color:"transparent", WebkitTextStroke:"1.5px rgba(147,255,80,0.18)" }}>let&apos;s</div>
            <div className={grotesk.className} style={{ fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:900, letterSpacing:"-0.04em", lineHeight:0.88, color:"#93FF50" }}>work</div>
            <div className={grotesk.className} style={{ fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:900, letterSpacing:"-0.04em", lineHeight:0.88, color:"transparent", WebkitTextStroke:"1.5px rgba(255,13,219,0.45)" }}>together</div>
            <div className={grotesk.className} style={{ fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:900, letterSpacing:"-0.04em", lineHeight:0.88, color:"#FF0DDB" }}>:)</div>
          </div>
        </div>
 
        {/* footer */}
        <div style={{ marginTop:"4rem", paddingTop:"2rem", borderTop:"1px solid rgba(147,255,80,0.08)", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <span className={pixelify.className} style={{ color:"rgba(147,255,80,0.2)", fontSize:"0.65rem", letterSpacing:"0.2em" }}>&#169; 2026 Morsal Yosofi</span>
          <span className={pixelify.className} style={{ color:"rgba(147,255,80,0.2)", fontSize:"0.65rem", letterSpacing:"0.2em" }}>built with Next.js</span>
        </div>
      </section>
    </>
  );
}
 
// ── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ onAbout, onProjects, onContact }: { onAbout:()=>void; onProjects:()=>void; onContact:()=>void }) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 10 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{ position:"fixed", top:0, left:0, width:"100vw", zIndex:9999, transform:visible?"translateY(0)":"translateY(-110%)", transition:"transform 0.3s ease" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0.85rem clamp(2rem,6vw,5rem)", background:"rgba(7,0,39,0.97)", backdropFilter:"blur(12px)" }}>
        {/* logo — grotesk, fun with star */}
        <span className={grotesk.className} style={{ color:"#fff", fontSize:"1.1rem", fontWeight:900, letterSpacing:"-0.02em", display:"flex", alignItems:"center", gap:"0.4rem" }}>
          MY<span style={{ color:"#FF0DDB" }}>.</span>
          <span style={{ color:"rgba(147,255,80,0.35)", fontSize:"0.7rem", fontWeight:400, letterSpacing:"0.1em" }} className={pixelify.className}>★</span>
        </span>
        {/* links — pixelify, evenly spread in their section */}
        <div style={{ display:"flex", gap:"clamp(2rem,5vw,5rem)", alignItems:"center" }}>
          {[{ label:"about me", fn:onAbout },{ label:"projects", fn:onProjects },{ label:"contact", fn:onContact }].map(({ label, fn }) => (
            <button key={label} onClick={fn} className={pixelify.className}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color="#FF0DDB"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color="#93FF50"; }}
              style={{ background:"none", border:"none", cursor:"pointer", color:"#93FF50", fontSize:"clamp(0.88rem,1.3vw,1.05rem)", letterSpacing:"0.08em", transition:"color 0.2s" }}
            >{label}</button>
          ))}
        </div>
      </div>
      {/* cyberpunk chevron line — brighter */}
      <svg width="100%" height="14" viewBox="0 0 1000 14" preserveAspectRatio="none" style={{ display:"block" }}>
        <line x1="0" y1="1" x2="1000" y2="1" stroke="#93FF50" strokeWidth="1" opacity="0.6"/>
        <polygon points="430,1 448,13 552,13 570,1" fill="#93FF50" opacity="0.6"/>
      </svg>
    </nav>
  );
}
 