/**

 * @license

 * SPDX-License-Identifier: Apache-2.0

 *

 * WebPortfolioView.tsx

 * Full-screen web/desktop portfolio — same data, completely redesigned layout.

 */



import React, { useState, useEffect } from 'react';

import profileImage from './img/solo.jpeg';

import Careconnect from './img/CareConnect.png';

import Easytizen from './img/EASYtizen.png';

import MuniManage from './img/MuniManage.png';

import SentinelFlow from './img/SentinelFlow.png';

import ProjectGo1 from './img/projectgo1.png';

import ProjectGo2 from './img/projectgo2.png';

import RewardImg from './img/reward.jpeg';

import ShotImg from './img/shot.jpeg';

import Speaker1Img from './img/Speaker1.jpeg';

import Speaker2Img from './img/Speaker2.jpeg';

import Speaker3Img from './img/Speaker3.jpeg';

import V1Portfolio from './img/V1-portfolio.png';

import { motion, AnimatePresence } from 'motion/react';

import StaggeredMenu from './StaggeredMenu';

import {

  Home,

  Briefcase,

  User,

  Award,

  ArrowUpRight,

  Github,

  Linkedin,

  Terminal,

  FileText,

  ExternalLink,

  MapPin,

  CircleDot,

  X,

  ChevronLeft,

  ChevronRight,

  Monitor,

  Mail,

  Trophy,

  Medal,

  Star,

  Mic,

  GraduationCap,

  MessageCircle,

  BookOpen,

} from 'lucide-react';

import BorderGlow from './BorderGlow';



// ─── Data (same as mobile) ─────────────────────────────────────────────────



const PORTFOLIO_DATA = {

  name: 'Joshua Fronda',

  photo: profileImage,

  role: 'Developer',

  location: 'Batangas, PH',

  status: 'IT Instructor',

  bio: 'A dedicated and results-driven professional with experience in web and mobile development. AI Prompt Engineer — leveraging tools like Claude, Gemini, GLM, SWE, ChatGPT, Kimi, and Cursor to accelerate development workflows and deliver quality solutions.',

  email: 'joshuafronda@email.com',

  education: [

    { degree: 'Bachelor of Science in Information Technology', major: 'Business Analytics', period: '2021 – 2025' },

    { degree: 'Master of Information Technology', major: '', period: '2025 – Present' },

  ],

  projects: [

    {

      id: 'p5',

      title: 'Project Go',

      category: 'Web Development',

      desc: 'Role-Based Workflows — Rigid permissions mapped to Owners, Managers, Finance, and Engineers. View only what matters to you. Real-time Messaging — Built-in direct messages and channels. Keep conversations attached to the project context. Budget Tracking — Live financial dashboards. Monitor allocation vs. expenditure securely without third-party tools. Smart Contracts — Generate professional Project Charters dynamically from your form inputs. Signed, sealed, delivered. Milestone Tracking — Break projects down to deliverables. Require strict sign-offs to pass progression gates.',

      images: [ProjectGo1, ProjectGo2],

      link: '',

      pdfLink: 'https://drive.google.com/file/d/1TFsXDxQFCUo3H0vX_Gxl7UNzph3KnqdO/view?usp=drive_link',

    },

    {

      id: 'p1',

      title: 'EASYtizen',

      category: 'Web & Mobile App',

      desc: 'An Integrated Web and Mobile Application for Document Requests and Data Analytics. Experience the future of barangay management with our innovative digital platform.',

      images: [Easytizen],

      link: 'https://fir-config-6ca5c.web.app/',

    },

    {

      id: 'p2',

      title: 'Muni-Manage',

      category: 'Web Development',

      desc: 'Municipal management and developer dashboard for local government operations.',

      images: [MuniManage],

      link: 'https://muni-manage.vercel.app/',

    },

    {

      id: 'p3',

      title: 'CareConnect + Pay',

      category: 'Web Development',

      desc: 'Healthcare and payments platform with developer-focused tools.',

      images: [Careconnect],

      link: 'https://careconnect-iota.vercel.app/',

    },

    {

      id: 'p4',

      title: 'Sentinel Flow',

      category: 'Web Development',

      desc: 'Observability and workflow platform with developer dashboard.',

      images: [SentinelFlow],

      link: 'https://sentinel-flow.vercel.app/',

    },

    {

      id: 'p6',

      title: 'V1 Portfolio',

      category: 'Web Development',

      desc: 'First version of my personal portfolio website — showcasing projects, skills, and experience with a clean, responsive design.',

      images: [V1Portfolio],

      link: 'https://v1project.vercel.app/',

    },

  ],

  experience: [

    {

      role: 'Freelance Developer',

      company: 'Self-Employed',

      year: '2025 – PRESENT',

      details: [

        'Developing custom web and mobile applications for clients',

        'Providing technical consulting and solutions',

        'Managing full project lifecycle from design to deployment',

        'Working with modern technologies and best practices',

      ],

    },

    {

      role: 'IT/CS Instructor',

      company: 'Batangas State University TNEU – Alangilan Campus',

      year: '2025 – PRESENT',

      details: [

        'Teaching Advanced Computer Programming & Networking courses',

        'Teaching Mobile Computing and Mobile Development',

        'Conducting Web Designing classes',

        "Pursuing Master's in Information Technology (Graduate School 2025)",

      ],

    },

    {

      role: 'Full Stack Developer Intern',

      company: 'Batangas State University TNEU – Main Campus',

      year: 'FEB — APR 2025',

      details: [

        'Developed web and mobile applications & maintained backend services',

        'Managed WordPress, deployed apps on Ubuntu servers, configured Nginx',

        'Collaborated in Agile teams (sprint planning, stand-ups, retrospectives)',

        'Tracked tasks via Trello and used Git for version control',

      ],

    },

  ],

  skills: [

    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS',

    'Flutter', 'Vite', 'Python', 'Django', 'PHP', 'WordPress',

    'Nginx', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Ubuntu', 'Firebase',

    'Windsurf', 'Antigravity', 'Cursor', 'Visual Studio',

  ],

  certifications: [

    { title: 'Certificate of Achievement – Second Prize Innovation Track', issuer: 'Huawei ICT Competition', date: 'Dec 2025' },

    { title: 'Cybersecurity', issuer: 'Asian Development Bank (ADB)', date: 'Dec 2025', id: '145749-176-472-9154' },

    { title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', date: 'Dec 2025' },

    { title: 'Introduction to Data Science', issuer: 'Cisco', date: 'Nov 2025' },

    { title: 'Science and Technology Education Program', issuer: 'Pilipinas Shell Foundation, Inc.', date: 'Aug 2025' },

    { title: 'The Milestone Awardee', issuer: 'Pilipinas Shell Foundation, Inc.', date: 'Aug 2025' },

    { title: 'Leadership Enhancement and Attitude Development (LEAD)', issuer: 'Pilipinas Shell Foundation, Inc.', date: 'Jun 2025' },

    { title: 'AWS Academy Cloud Architecting', issuer: 'Amazon Web Services (AWS)', date: 'May 2025' },

    { title: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services (AWS)', date: 'Apr 2025' },

    { title: 'Tech Nexus 2024: Empowering Campus Innovators', issuer: 'DEVCON Philippines', date: 'Dec 2024' },

  ],

  competition: {

    title: '10th Huawei ICT Competition 2025–2026',

    track: 'Innovation Track · Philippines',

    prize: '2nd Place',

    team: 'NEXT CS',

    scope: '2,900+ students nationwide',

    org: 'CICS Department',

    description: 'Out of 2,900 students across the Philippines, NEXT CS proved its strength by winning Second Prize in the 10th Huawei ICT Competition 2025–2026 – Philippines, Innovation Track, proudly representing the CICS Department and our universities.',

    images: [RewardImg, ShotImg],

  },

  trickOrTech: {

    title: 'TRICK OR TECH: The AI Dilemma',

    role: 'Resource Speaker',

    host: 'CICS Mabini – Batangas State University TNEU',

    description: 'Invited as a Resource Speaker for the tech talk “TRICK OR TECH: The AI Dilemma” hosted by the CICS Department of Batangas State University – The National Engineering University, Mabini Campus.',

    images: [Speaker1Img, Speaker2Img, Speaker3Img],

  },

};



// ─── Types ─────────────────────────────────────────────────────────────────



type WebSection = 'home' | 'projects' | 'experience' | 'certs' | 'achievements';



// ─── Hooks ─────────────────────────────────────────────────────────────────



const useTime = () => {

  const [time, setTime] = useState('');

  useEffect(() => {

    const update = () => {

      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));

    };

    update();

    const id = setInterval(update, 1000);

    return () => clearInterval(id);

  }, []);

  return time;

};



// ─── Motion variants ───────────────────────────────────────────────────────



const fadeUp = {

  hidden: { opacity: 0, y: 24 },

  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 20 } },

};



const stagger = {

  hidden: { opacity: 0 },

  show: { opacity: 1, transition: { staggerChildren: 0.07 } },

};



// ─── Image Carousel Modal ─────────────────────────────────────────────────



const ImageModal = ({

  images,

  title,

  onClose,

}: {

  images: string[];

  title: string;

  onClose: () => void;

}) => {

  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  const next = () => setIdx((i) => (i + 1) % images.length);



  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      exit={{ opacity: 0 }}

      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-lg p-8"

      onClick={onClose}

    >

      <motion.div

        initial={{ scale: 0.9, opacity: 0 }}

        animate={{ scale: 1, opacity: 1 }}

        exit={{ scale: 0.9, opacity: 0 }}

        transition={{ type: 'spring', damping: 25, stiffness: 300 }}

        className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl"

        onClick={(e) => e.stopPropagation()}

      >

        <AnimatePresence mode="wait">

          <motion.img

            key={idx}

            src={images[idx]}

            alt={title}

            className="w-full h-full object-contain"

            initial={{ opacity: 0, scale: 1.04 }}

            animate={{ opacity: 1, scale: 1 }}

            exit={{ opacity: 0, scale: 0.96 }}

            transition={{ duration: 0.25 }}

          />

        </AnimatePresence>

        {images.length > 1 && (

          <>

            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">

              <ChevronLeft size={18} />

            </button>

            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">

              <ChevronRight size={18} />

            </button>

          </>

        )}

        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">

          <X size={18} />

        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">

          <p className="text-sm font-medium text-white">{title}</p>

        </div>

      </motion.div>

    </motion.div>

  );

};



// ─── Home Section ──────────────────────────────────────────────────────────



const TYPING_LINES = [
  { prefix: '→ ', text: 'Installing Master of Information Technology...', delay: 45 },
  { prefix: '  ', text: '2025 – Present · in progress', delay: 35 },
  { prefix: '✓ ', text: 'BSIT · Business Analytics · 2021-2025 [completed]', delay: 30 },

];

const useTypingEffect = (lines: typeof TYPING_LINES) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsComplete(true);
      return;
    }
    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev];
          updated[currentLine] = line.prefix + line.text.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar(c => c + 1);
      }, line.delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines]);

  return { displayedLines, isTyping: !isComplete };
};

const HomeSection = ({ onNavigate }: { onNavigate: (s: WebSection) => void }) => {

  const time = useTime();
  const { displayedLines: typedLines, isTyping } = useTypingEffect(TYPING_LINES);


  return (

    <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-16 gap-12 relative overflow-hidden">

      {/* Hero */}

      <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-10 items-center">
    
        <div className="relative z-10">

          <div className="flex items-center gap-2 mb-5">

  
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-500/80">Open to Opportunities</span>

          </div>

          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-3">

            {PORTFOLIO_DATA.name}

          </h1>

          <p className="text-xl text-neutral-400 font-medium mb-2">{PORTFOLIO_DATA.role} · {PORTFOLIO_DATA.status}</p>

          <div className="flex items-center gap-2 text-neutral-500 mb-5">

            <MapPin size={14} />

            <span className="text-sm">{PORTFOLIO_DATA.location} · {time} Local</span>

          </div>

          <p className="text-neutral-400 text-base leading-relaxed max-w-md mb-6">

            {PORTFOLIO_DATA.bio}

          </p>

          <div className="space-y-2 mb-6">

              {PORTFOLIO_DATA.education.map((edu) => (

                <div key={edu.period} className="flex items-start gap-2">



              

                </div>

            ))}

          </div>

          <div className="flex flex-wrap gap-3">

            <button

              onClick={() => onNavigate('projects')}

              className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2"

            >

              View Projects <ArrowUpRight size={16} />

            </button>

            <a

              href="https://drive.google.com/file/d/1M6jPpTxGgahrJnvaR7lFRyS4xmmP18Lt/view?usp=drive_link"

              target="_blank"

              rel="noopener noreferrer"

              className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"

            >

              <FileText size={16} /> Resume

            </a>

            <a

              href="https://github.com/joshuafronda"

              target="_blank"

              rel="noopener noreferrer"

              className="w-11 h-11 bg-white/5 border border-white/10 text-neutral-400 rounded-full hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"

            >

              <Github size={18} />

            </a>

            <a

              href="https://www.linkedin.com/in/joshuafronda"

              target="_blank"

              rel="noopener noreferrer"

              className="w-11 h-11 bg-white/5 border border-white/10 text-neutral-400 rounded-full hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"

            >

              <Linkedin size={18} />

            </a>

          </div>

        </div>



        {/* Terminal + Floating Cards */}

        <div className="relative flex flex-col items-center lg:items-end gap-6">

          {/* Terminal Window */}

          <motion.div

            variants={fadeUp}

            className="w-full max-w-lg bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"

          >

            {/* Title bar */}

            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">

              <div className="flex gap-1.5">

                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />

                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />

                <span className="w-3 h-3 rounded-full bg-[#28c840]" />

              </div>

              <span className="font-mono text-[11px] text-neutral-500 ml-2">education.ts</span>

            </div>

            {/* Terminal body */}

            <div className="p-4 font-mono text-sm leading-relaxed min-h-[160px]">

              {typedLines.map((line, i) => (

                <div key={i} className={`mb-1 ${i === typedLines.length - 1 && !isTyping ? 'text-emerald-400' : i === 0 ? 'text-white' : 'text-neutral-400'}`}>

                  {line}

                  {i === typedLines.length - 1 && isTyping && (

                    <span className="inline-block w-2 h-4 bg-white/80 ml-0.5 animate-pulse" />

                  )}

                </div>

              ))}

              {!isTyping && typedLines.length > 0 && (

                <div className="mt-2 text-emerald-400/60 flex items-center gap-2">

                  <GraduationCap size={12} />

                  <span className="text-xs">Pursuing academic excellence</span>

                </div>

              )}

            </div>

          </motion.div>



        </div>

      </motion.div>



      {/* Skills strip */}

      <motion.div variants={fadeUp}>

        <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-3">Technical Arsenal</p>

        <div className="flex flex-wrap gap-2">

          {PORTFOLIO_DATA.skills.map((skill) => (

            <span

              key={skill}

              className="px-3 py-1.5 text-xs font-medium text-neutral-400 bg-white/[0.04] border border-white/[0.08] rounded-full hover:text-white hover:border-white/20 transition-colors"

            >

              {skill}

            </span>

          ))}

        </div>

      </motion.div>

    </motion.section>

  );

};



// ─── Projects Section ──────────────────────────────────────────────────────



const ProjectsSection = () => {

  const [modal, setModal] = useState<{ images: string[]; title: string } | null>(null);



  return (

    <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="max-w-6xl mx-auto px-8 py-16">

      <motion.div variants={fadeUp} className="mb-8">

        <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Selected Works</p>

        <h2 className="text-4xl font-semibold tracking-tight text-white">Featured Projects</h2>

        <p className="text-neutral-500 mt-2 text-sm">Case studies & live deployments.</p>

      </motion.div>



      <div className="space-y-10">

        {Object.entries(
          PORTFOLIO_DATA.projects.reduce<Record<string, typeof PORTFOLIO_DATA.projects>>((acc, project) => {
            const cat = project.category;
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(project);
            return acc;
          }, {})
        ).map(([category, projects]) => (

          <div key={category}>

            <motion.div variants={fadeUp} className="mb-4">

              <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-1">{category}</p>

            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">

              {projects.map((project, idx) => (

                <motion.div

                  key={project.id}

                  variants={fadeUp}

                  className="h-full"

                >

                  <BorderGlow

                    edgeSensitivity={30}

                    glowColor="40 80 80"

                    backgroundColor="#0A0A0A"

                    borderRadius={24}

                    glowRadius={40}

                    glowIntensity={1}

                    coneSpread={25}

                    animated={false}

                    colors={['#c084fc', '#f472b6', '#38bdf8']}

                    fillOpacity={0.5}

                    className="h-full"

                  >

                    <div

                      className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] cursor-pointer min-h-[280px] flex flex-col justify-end h-full"

                      onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}

                    >

                  {/* BG Image */}

                  {project.images[0] ? (

                  <div className="absolute inset-0">

                    <img

                      src={project.images[0]}

                      alt={project.title}

                      className="w-full h-full object-cover opacity-25 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out"

                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />

                  </div>

                  ) : (

                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

                  )}



                  {/* Top bar */}

                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">

                    <span className="font-mono text-[10px] text-neutral-500 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">

                      0{idx + 1}

                    </span>

                    <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white transition-colors">

                      <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />

                    </div>

                  </div>



                  {/* Content */}

                  <div className="relative z-10 p-6">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">{project.category}</p>

                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

                    <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">{project.desc}</p>

                    <div className="flex items-center gap-4 mt-4">

                      {project.images.length > 0 && (

                      <button

                        onClick={(e) => { e.stopPropagation(); setModal({ images: project.images, title: project.title }); }}

                        className="text-xs font-mono text-neutral-500 hover:text-white transition-colors flex items-center gap-1"

                      >

                        Preview screenshot →

                      </button>

                      )}

                      {(project as any).pdfLink && (

                      <a

                        href={(project as any).pdfLink}

                        target="_blank"

                        rel="noopener noreferrer"

                        onClick={(e) => e.stopPropagation()}

                        className="text-xs font-mono text-neutral-500 hover:text-white transition-colors flex items-center gap-1"

                      >

                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/></svg>

                        View PDF

                      </a>

                      )}

                    </div>

                  </div>

                    </div>

                  </BorderGlow>

                </motion.div>

              ))}

            </div>

          </div>

        ))}

      </div>



      <AnimatePresence>

        {modal && <ImageModal images={modal.images} title={modal.title} onClose={() => setModal(null)} />}

      </AnimatePresence>

    </motion.section>

  );

};



// ─── Experience Section ────────────────────────────────────────────────────



const ExperienceSection = () => (

  <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="max-w-6xl mx-auto px-8 py-16">

    <motion.div variants={fadeUp} className="mb-8">

      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Career</p>

      <h2 className="text-4xl font-semibold tracking-tight text-white">Experience</h2>

      <p className="text-neutral-500 mt-2 text-sm">Professional journey & skills.</p>

    </motion.div>



    {/* Timeline layout */}

    <div className="relative">

      {/* Timeline line */}

      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent hidden md:block" />



      <div className="space-y-6">

        {PORTFOLIO_DATA.experience.map((exp, idx) => (

          <motion.div

            key={idx}

            variants={fadeUp}

            className="relative"

          >

            {/* Timeline dot */}

            <div className="absolute left-6 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#0A0A0A] z-10 hidden md:block" />



            <div className="md:pl-14">

              <BorderGlow

                edgeSensitivity={30}

                glowColor="40 80 80"

                backgroundColor="#0A0A0A"

                borderRadius={24}

                glowRadius={40}

                glowIntensity={1}

                coneSpread={25}

                animated={false}

                colors={['#c084fc', '#f472b6', '#38bdf8']}

                fillOpacity={0.5}

                className="h-full"

              >

                <div className="bg-[#0A0A0A] rounded-3xl p-5 flex flex-col gap-3 h-full">

              <div className="flex items-start justify-between gap-3">

                <div>

                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-1">{exp.year}</p>

                  <h3 className="text-base font-semibold text-white leading-snug">{exp.role}</h3>

                  <p className="text-xs text-neutral-500 mt-1">{exp.company}</p>

                </div>

                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">

                  <Briefcase size={16} className="text-neutral-500" />

                </div>

              </div>

              <div className="w-full h-px bg-white/[0.06]" />

              <ul className="flex flex-col gap-1.5">

                {exp.details.map((d, di) => (

                  <li key={di} className="flex items-start gap-2 text-xs text-neutral-500 leading-relaxed">

                    <CircleDot size={10} className="flex-shrink-0 mt-0.5 text-neutral-700" />

                    <span>{d}</span>

                  </li>

                ))}

              </ul>

                </div>

              </BorderGlow>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </motion.section>

);



// ─── Certifications Section ────────────────────────────────────────────────



const CertificationsSection = () => {

  const certColors = [
    { accent: 'text-blue-400', bg: 'from-blue-500/8', border: 'border-blue-500/15' },
    { accent: 'text-violet-400', bg: 'from-violet-500/8', border: 'border-violet-500/15' },
    { accent: 'text-emerald-400', bg: 'from-emerald-500/8', border: 'border-emerald-500/15' },
    { accent: 'text-amber-400', bg: 'from-amber-500/8', border: 'border-amber-500/15' },
    { accent: 'text-rose-400', bg: 'from-rose-500/8', border: 'border-rose-500/15' },
    { accent: 'text-cyan-400', bg: 'from-cyan-500/8', border: 'border-cyan-500/15' },
  ];

  return (

    <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="max-w-6xl mx-auto px-8 py-16">

      <motion.div variants={fadeUp} className="mb-8">

        <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Credentials</p>

        <h2 className="text-4xl font-semibold tracking-tight text-white">Certifications</h2>

        <p className="text-neutral-500 mt-2 text-sm">Continuous learning & achievements.</p>

      </motion.div>



      {/* Masonry / Pinterest-style grid using CSS columns */}

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">

        {PORTFOLIO_DATA.certifications.map((cert, idx) => {

          const color = certColors[idx % certColors.length];

          const isLong = cert.title.length > 60 || cert.id;

          return (

            <motion.div

              key={idx}

              variants={fadeUp}

              className="break-inside-avoid"

            >

              <div className={`group relative bg-[#0A0A0A] ${color.border} border rounded-2xl p-5 flex flex-col gap-3 hover:border-white/20 transition-all duration-300 overflow-hidden`}>

                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">

                  <div className="flex items-start justify-between gap-3 mb-2">

                    <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center ${color.accent} shrink-0`}>

                      <Award size={14} />

                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-600 shrink-0 mt-1">{cert.date}</span>

                  </div>

                  <h3 className={`text-sm font-semibold text-white leading-snug mb-1 ${isLong ? '' : ''}`}>{cert.title}</h3>

                  <p className="text-xs text-neutral-500">{cert.issuer}</p>

                  {cert.id && (

                    <div className="mt-3 pt-3 border-t border-white/[0.06]">

                      <p className="font-mono text-[9px] text-neutral-700">Credential ID: {cert.id}</p>

                    </div>

                  )}

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

    </motion.section>

  );

};



// ─── Achievement Section ──────────────────────────────────────────



const AchievementSection = () => {

  const [activeImg, setActiveImg] = useState(0);

  const images = PORTFOLIO_DATA.competition.images;

  const comp = PORTFOLIO_DATA.competition;



  return (

    <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="max-w-6xl mx-auto px-8 py-16">

      <motion.div variants={fadeUp} className="mb-8">

        <p className="font-mono text-[10px] uppercase tracking-widest text-amber-500/70 mb-2">Recognition</p>

        <h2 className="text-4xl font-semibold tracking-tight text-white">Achievements</h2>

        <p className="text-neutral-500 mt-2 text-sm">Competitions & national recognition.</p>

      </motion.div>



      {/* Hero achievement card */}

      <motion.div variants={fadeUp}>

        <BorderGlow

          edgeSensitivity={30}

          glowColor="45 90 60"

          backgroundColor="#0A0A0A"

          borderRadius={24}

          glowRadius={40}

          glowIntensity={1}

          coneSpread={25}

          animated={false}

          colors={['#fbbf24', '#f59e0b', '#fcd34d']}

          fillOpacity={0.5}

          className="h-full"

        >

          <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] shadow-2xl">

        {/* Subtle amber glow bg */}

        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />



        <div className="grid lg:grid-cols-2 gap-0">

          {/* Left – image panel */}

          <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.img

                key={activeImg}

                src={images[activeImg]}

                alt="Competition photograph"

                className="absolute inset-0 w-full h-full object-cover"

                initial={{ opacity: 0, scale: 1.05 }}

                animate={{ opacity: 1, scale: 1 }}

                exit={{ opacity: 0, scale: 0.96 }}

                transition={{ duration: 0.4 }}

              />

            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0A] hidden lg:block" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden" />



            {/* Thumbnail row */}

            <div className="absolute bottom-4 left-4 flex gap-2">

              {images.map((img, i) => (

                <button

                  key={i}

                  onClick={() => setActiveImg(i)}

                  className={`w-14 h-10 rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? 'border-amber-400 scale-110' : 'border-white/10 opacity-60 hover:opacity-100'

                    }`}

                >

                  <img src={img} alt="" className="w-full h-full object-cover" />

                </button>

              ))}

            </div>

          </div>



          {/* Right – details panel */}

          <div className="p-6 lg:p-8 flex flex-col justify-center gap-4">

            {/* Prize badge */}

            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 rounded-full px-4 py-2 w-fit">

              <Trophy size={16} />

              <span className="text-sm font-bold tracking-wide">{comp.prize}</span>

            </div>



            <div>

              <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-2">{comp.track}</p>

              <h3 className="text-2xl font-semibold text-white leading-snug mb-1">{comp.title}</h3>

            </div>



            <p className="text-neutral-400 text-sm leading-relaxed">{comp.description}</p>



            {/* Stats row */}

            <div className="grid grid-cols-3 gap-3">

              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-3 text-center">

                <Medal size={18} className="text-amber-400 mx-auto mb-1.5" />

                <p className="text-white font-bold text-lg">2nd</p>

                <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest mt-0.5">Place</p>

              </div>

              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-3 text-center">

                <Star size={18} className="text-amber-400 mx-auto mb-1.5" />

                <p className="text-white font-bold text-lg">2,900+</p>

                <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest mt-0.5">Students</p>

              </div>

              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-3 text-center">

                <Trophy size={18} className="text-amber-400 mx-auto mb-1.5" />

                <p className="text-white font-bold text-lg">PH</p>

                <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest mt-0.5">National</p>

              </div>

            </div>



            {/* Team */}

            <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">

              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">Team</span>

              <span className="text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full px-3 py-1">{comp.team}</span>

              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">{comp.org}</span>

            </div>

          </div>

        </div>

          </div>

        </BorderGlow>

      </motion.div>



      {/* Speaker Card – TRICK OR TECH */}

      <SpeakerCard />



    </motion.section>

  );

};



const SpeakerCard = () => {

  const [activeImg, setActiveImg] = useState(0);

  const speak = PORTFOLIO_DATA.trickOrTech;

  const images = speak.images;



  return (

    <BorderGlow

      edgeSensitivity={30}

      glowColor="260 80 70"

      backgroundColor="#0A0A0A"

      borderRadius={24}

      glowRadius={40}

      glowIntensity={1}

      coneSpread={25}

      animated={false}

      colors={['#8b5cf6', '#a78bfa', '#c4b5fd']}

      fillOpacity={0.5}

      className="h-full mt-4"

    >

    <motion.div

      variants={fadeUp}

      className="relative rounded-3xl overflow-hidden bg-[#0A0A0A]"

    >

      {/* Purple glow bg */}

      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent pointer-events-none" />



      <div className="grid lg:grid-cols-2 gap-0">

        {/* Left – image gallery */}

        <div className="relative h-56 lg:h-auto min-h-[260px] overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.img

              key={activeImg}

              src={images[activeImg]}

              alt="Speaker event photograph"

              className="absolute inset-0 w-full h-full object-cover"

              initial={{ opacity: 0, scale: 1.05 }}

              animate={{ opacity: 1, scale: 1 }}

              exit={{ opacity: 0, scale: 0.96 }}

              transition={{ duration: 0.4 }}

            />

          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0A] hidden lg:block" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden" />

          {/* Thumbnails */}

          <div className="absolute bottom-4 left-4 flex gap-2">

            {images.map((img, i) => (

              <button

                key={i}

                onClick={() => setActiveImg(i)}

                className={`w-14 h-10 rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? 'border-violet-400 scale-110' : 'border-white/10 opacity-60 hover:opacity-100'

                  }`}

              >

                <img src={img} alt="" className="w-full h-full object-cover" />

              </button>

            ))}

          </div>

        </div>



        {/* Right – details */}

        <div className="p-6 lg:p-8 flex flex-col justify-center gap-4">

          {/* Role badge */}

          <div className="inline-flex items-center gap-2 bg-violet-500/15 border border-violet-500/30 text-violet-300 rounded-full px-4 py-2 w-fit">

            <Mic size={15} />

            <span className="text-sm font-bold tracking-wide">{speak.role}</span>

          </div>



          <div>

            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Tech Talk</p>

            <h3 className="text-2xl font-semibold text-white leading-snug">{speak.title}</h3>

          </div>



          <p className="text-neutral-400 text-sm leading-relaxed">{speak.description}</p>



          {/* Host */}

          <div className="flex items-start gap-3 pt-3 border-t border-white/[0.06]">

            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mt-0.5">Hosted by</span>

            <span className="text-xs text-white leading-snug">{speak.host}</span>

          </div>

        </div>

      </div>

    </motion.div>

    </BorderGlow>

  );

};



// ─── Contact Section ──────────────────────────────────────────────────────



const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Reach out for project inquiries, collaborations, or freelance work.',
    cta: 'Send Email',
    href: 'mailto:joshuafronda@email.com',
    color: 'from-blue-500/10 to-transparent',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Connect with me on LinkedIn for quick conversations and networking.',
    cta: 'Message on LinkedIn',
    href: 'https://www.linkedin.com/in/joshuafronda',
    color: 'from-violet-500/10 to-transparent',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Explore my open-source projects, contributions, and code repositories.',
    cta: 'View Profile',
    href: 'https://github.com/joshuafronda',
    color: 'from-emerald-500/10 to-transparent',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: BookOpen,
    title: 'Resume / Docs',
    description: 'Download my resume or view detailed project documentation.',
    cta: 'View Resume',
    href: 'https://drive.google.com/file/d/1M6jPpTxGgahrJnvaR7lFRyS4xmmP18Lt/view?usp=drive_link',
    color: 'from-amber-500/10 to-transparent',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
  },
];

const ContactSection = () => (

  <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="max-w-6xl mx-auto px-8 py-16">

    <motion.div variants={fadeUp} className="mb-8">

      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Get in Touch</p>

      <h2 className="text-4xl font-semibold tracking-tight text-white">Contact</h2>

      <p className="text-neutral-500 mt-2 text-sm">Let's build something together.</p>

    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

      {CONTACT_CHANNELS.map((channel, idx) => (

        <motion.a

          key={channel.title}

          href={channel.href}

          target={channel.href.startsWith('mailto') ? undefined : '_blank'}

          rel={channel.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}

          variants={fadeUp}

          className={`group relative bg-[#0A0A0A] border ${channel.border} rounded-2xl p-5 flex flex-col gap-4 hover:border-white/20 transition-all duration-300 overflow-hidden`}

        >

          <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

          <div className="relative z-10 flex flex-col gap-4 h-full">

            <div className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center ${channel.iconColor} group-hover:scale-110 transition-transform duration-300`}>

              <channel.icon size={20} />

            </div>

            <div>

              <h3 className="text-base font-semibold text-white mb-1">{channel.title}</h3>

              <p className="text-xs text-neutral-500 leading-relaxed">{channel.description}</p>

            </div>

            <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">

              <span>{channel.cta}</span>

              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

            </div>

          </div>

        </motion.a>

      ))}

    </div>

  </motion.section>

);



// ─── Nav ───────────────────────────────────────────────────────────────────



const NAV_ITEMS: { id: WebSection; label: string; icon: React.ElementType }[] = [

  { id: 'home', label: 'Home', icon: Home },

  { id: 'projects', label: 'Projects', icon: Briefcase },

  { id: 'experience', label: 'Experience', icon: User },

  { id: 'certs', label: 'Certifications', icon: Award },

  { id: 'achievements', label: 'Achievements', icon: Trophy },

];



// ─── Main ──────────────────────────────────────────────────────────────────



interface WebPortfolioViewProps {

  onClose?: () => void;

}



const WebPortfolioView: React.FC<WebPortfolioViewProps> = ({ onClose }) => {

  const [activeSection, setActiveSection] = useState<WebSection>('home');

  const [scrolled, setScrolled] = useState(false);



  const scrollToSection = (id: WebSection) => {
    const el = document.getElementById(`section-${id}`);
    const container = document.getElementById('web-portfolio-scroll');
    if (el && container) {
      const offset = el.offsetTop - 80;
      container.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  useEffect(() => {

    const container = document.getElementById('web-portfolio-scroll');

    const handleScroll = (e: Event) => {

      const target = e.target as HTMLElement;

      setScrolled(target.scrollTop > 40);

      const sectionIds: WebSection[] = ['home', 'projects', 'experience', 'certs', 'achievements'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sec = document.getElementById(`section-${sectionIds[i]}`);
        if (sec && sec.offsetTop - 120 <= target.scrollTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }

    };

    container?.addEventListener('scroll', handleScroll);

    return () => container?.removeEventListener('scroll', handleScroll);

  }, []);



  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      exit={{ opacity: 0 }}

      transition={{ duration: 0.3 }}

      className="fixed inset-0 z-[150] bg-[#050505] overflow-hidden flex flex-col"

    >

      {/* Staggered Menu Navigation */}

      <StaggeredMenu

        position="right"

        isFixed={true}

        items={[

          { label: 'Home', ariaLabel: 'Go to home section', onClick: () => scrollToSection('home') },

          { label: 'Projects', ariaLabel: 'View projects', onClick: () => scrollToSection('projects') },

          { label: 'Experience', ariaLabel: 'View experience', onClick: () => scrollToSection('experience') },

          { label: 'Certs', ariaLabel: 'View certifications', onClick: () => scrollToSection('certs') },

          { label: 'Achievements', ariaLabel: 'View achievements', onClick: () => scrollToSection('achievements') },

        ]}

        socialItems={[

          { label: 'GitHub', link: 'https://github.com/joshuafronda' },

          { label: 'LinkedIn', link: 'https://www.linkedin.com/in/joshuafronda' },

        ]}

        displaySocials={true}

        displayItemNumbering={true}

        menuButtonColor="#fff"

        openMenuButtonColor="#fff"

        changeMenuColorOnOpen={true}

        colors={['#1e1e22', '#35353c', '#4a4a54', '#5f5f6c']}

        accentColor="#c084fc"

        closeOnClickAway={true}

      />



      {/* Close / back to mobile button */}

      {onClose && (

        <button

          onClick={onClose}

          className="fixed top-4 right-24 z-[161] flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-400 bg-white/5 border border-white/10 rounded-full hover:text-white hover:bg-white/10 transition-all"

        >

          <Monitor size={14} />

          <span className="hidden sm:inline">Back to Mobile</span>

          <X size={14} />

        </button>

      )}



      {/* Scrollable Content */}

      <div id="web-portfolio-scroll" className="flex-1 overflow-y-auto scrollbar-hide pt-16 pb-16">



        <div

          className="absolute inset-0 pointer-events-none z-0 opacity-30"

          style={{

            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',

            backgroundSize: '60px 60px',

          }}

        />



        <div id="section-home">

          <HomeSection onNavigate={scrollToSection} />

        </div>

        <div className="max-w-6xl mx-auto px-8">

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </div>

        <div id="section-projects">

          <ProjectsSection />

        </div>

        <div className="max-w-6xl mx-auto px-8">

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </div>

        <div id="section-experience">

          <ExperienceSection />

        </div>

        <div className="max-w-6xl mx-auto px-8">

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </div>

        <div id="section-certs">

          <CertificationsSection />

        </div>

        <div className="max-w-6xl mx-auto px-8">

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </div>

        <div id="section-achievements">

          <AchievementSection />

        </div>

        <div className="max-w-6xl mx-auto px-8">

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </div>

        <div id="section-contact">

          <ContactSection />

        </div>



      </div>




    </motion.div>

  );

};



export default WebPortfolioView;

