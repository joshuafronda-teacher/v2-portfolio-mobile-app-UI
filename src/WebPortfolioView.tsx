/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * WebPortfolioView.tsx
 * Full-screen web/desktop portfolio — same data, completely redesigned layout.
 */

import React, { useState, useEffect } from 'react';
import profileImage from './img/v1.jpg';
import Careconnect from './img/CareConnect.png';
import Easytizen from './img/EASYtizen.png';
import MuniManage from './img/MuniManage.png';
import SentinelFlow from './img/SentinelFlow.png';
import ProjectGo1 from './img/projectgo1.png';
import ProjectGo2 from './img/projectgo2.png';
import CloudSync from './img/cloudsync.png';
import RewardImg from './img/reward.jpeg';
import ShotImg from './img/shot.jpeg';
import Speaker1Img from './img/Speaker1.jpeg';
import Speaker2Img from './img/Speaker2.jpeg';
import Speaker3Img from './img/Speaker3.jpeg';
import { motion, AnimatePresence } from 'motion/react';
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
} from 'lucide-react';

// ─── Data (same as mobile) ─────────────────────────────────────────────────

const PORTFOLIO_DATA = {
  name: 'Joshua Fronda',
  photo: profileImage,
  role: 'Developer',
  location: 'Batangas, PH',
  status: 'IT Instructor',
  bio: 'A dedicated and results-driven professional with experience in web and mobile development. AI Prompt Engineer — leveraging tools like Claude, Gemini, GLM, SWE, ChatGPT, Kimi, and Cursor to accelerate development workflows and deliver quality solutions.',
  email: 'joshuafronda@email.com',
  projects: [
    {
      id: 'p5',
      title: 'Project Go',
      category: 'Project Management',
      desc: 'Role-Based Workflows — Rigid permissions mapped to Owners, Managers, Finance, and Engineers. View only what matters to you. Real-time Messaging — Built-in direct messages and channels. Keep conversations attached to the project context. Budget Tracking — Live financial dashboards. Monitor allocation vs. expenditure securely without third-party tools. Smart Contracts — Generate professional Project Charters dynamically from your form inputs. Signed, sealed, delivered. Milestone Tracking — Break projects down to deliverables. Require strict sign-offs to pass progression gates.',
      images: [ProjectGo1, ProjectGo2],
      link: '',
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
      category: 'Dashboard',
      desc: 'Municipal management and developer dashboard for local government operations.',
      images: [MuniManage],
      link: 'https://muni-manage.vercel.app/',
    },
    {
      id: 'p3',
      title: 'CareConnect + Pay',
      category: 'Healthcare Platform',
      desc: 'Healthcare and payments platform with developer-focused tools.',
      images: [Careconnect],
      link: 'https://careconnect-iota.vercel.app/',
    },
    {
      id: 'p4',
      title: 'Sentinel Flow',
      category: 'Observability',
      desc: 'Observability and workflow platform with developer dashboard.',
      images: [SentinelFlow],
      link: 'https://sentinel-flow.vercel.app/',
    },
    {
      id: 'p6',
      title: 'CloudSync',
      category: 'Collaboration',
      desc: 'Streamline your workflow, collaborate seamlessly, and deliver projects on time. CloudSync is the all-in-one platform for modern teams.',
      images: [CloudSync],
      link: '',
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
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Tailwind CSS',
    'Flutter', 'Kotlin', 'Java', 'Vite', 'Python', 'Django', 'PHP', 'WordPress',
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

const HomeSection = ({ onNavigate }: { onNavigate: (s: WebSection) => void }) => {
  const time = useTime();

  return (
    <motion.section variants={stagger} initial="hidden" animate="show" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-16 gap-10">
      {/* Hero */}
      <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-500/80">Open to Opportunities</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-3">
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

        {/* Profile photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src={PORTFOLIO_DATA.photo} alt={PORTFOLIO_DATA.name} className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0A0A0A] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <Terminal size={16} className="text-neutral-400" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Stack</p>
                <p className="text-xs font-medium text-white">{PORTFOLIO_DATA.skills.length}+ Technologies</p>
              </div>
            </div>
          </div>
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
    <motion.section variants={stagger} initial="hidden" animate="show" className="max-w-6xl mx-auto px-8 py-16">
      <motion.div variants={fadeUp} className="mb-8">
        <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Selected Works</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white">Featured Projects</h2>
        <p className="text-neutral-500 mt-2 text-sm">Case studies & live deployments.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            className="group relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] cursor-pointer hover:border-white/20 transition-all duration-500 min-h-[280px] flex flex-col justify-end"
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
              {project.images.length > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setModal({ images: project.images, title: project.title }); }}
                className="mt-4 text-xs font-mono text-neutral-500 hover:text-white transition-colors flex items-center gap-1"
              >
                Preview screenshot →
              </button>
              )}
            </div>
          </motion.div>
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
  <motion.section variants={stagger} initial="hidden" animate="show" className="max-w-6xl mx-auto px-8 py-16">
    <motion.div variants={fadeUp} className="mb-8">
      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Career</p>
      <h2 className="text-4xl font-semibold tracking-tight text-white">Experience</h2>
      <p className="text-neutral-500 mt-2 text-sm">Professional journey & skills.</p>
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-4">
      {PORTFOLIO_DATA.experience.map((exp, idx) => (
        <motion.div
          key={idx}
          variants={fadeUp}
          className="bg-[#0A0A0A] border border-white/[0.08] rounded-3xl p-5 flex flex-col gap-3 hover:border-white/20 transition-colors"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-1">{exp.year}</p>
            <h3 className="text-base font-semibold text-white leading-snug">{exp.role}</h3>
            <p className="text-xs text-neutral-500 mt-1">{exp.company}</p>
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
        </motion.div>
      ))}
    </div>
  </motion.section>
);

// ─── Certifications Section ────────────────────────────────────────────────

const CertificationsSection = () => (
  <motion.section variants={stagger} initial="hidden" animate="show" className="max-w-6xl mx-auto px-8 py-16">
    <motion.div variants={fadeUp} className="mb-8">
      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Credentials</p>
      <h2 className="text-4xl font-semibold tracking-tight text-white">Certifications</h2>
      <p className="text-neutral-500 mt-2 text-sm">Continuous learning & achievements.</p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PORTFOLIO_DATA.certifications.map((cert, idx) => (
        <motion.div
          key={idx}
          variants={fadeUp}
          className="bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between gap-3 group hover:border-white/20 transition-colors"
        >
          <div className="flex justify-between items-start gap-3">
            <div>
              <h3 className="text-sm font-semibold text-white leading-snug mb-1">{cert.title}</h3>
              <p className="text-xs text-neutral-500">{cert.issuer}</p>
            </div>
            <ExternalLink size={14} className="text-neutral-700 group-hover:text-white transition-colors flex-shrink-0" />
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-white/[0.06]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">{cert.date}</p>
            {cert.id && <p className="font-mono text-[9px] text-neutral-700">ID: {cert.id}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

// ─── Achievement Section ──────────────────────────────────────────

const AchievementSection = () => {
  const [activeImg, setActiveImg] = useState(0);
  const images = PORTFOLIO_DATA.competition.images;
  const comp = PORTFOLIO_DATA.competition;

  return (
    <motion.section variants={stagger} initial="hidden" animate="show" className="max-w-6xl mx-auto px-8 py-16">
      <motion.div variants={fadeUp} className="mb-8">
        <p className="font-mono text-[10px] uppercase tracking-widest text-amber-500/70 mb-2">Recognition</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white">Achievements</h2>
        <p className="text-neutral-500 mt-2 text-sm">Competitions & national recognition.</p>
      </motion.div>

      {/* Hero achievement card */}
      <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden border border-amber-500/20 bg-[#0A0A0A] shadow-2xl shadow-amber-500/5">
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
    <motion.div
      variants={fadeUp}
      className="relative mt-4 rounded-3xl overflow-hidden border border-violet-500/20 bg-[#0A0A0A] shadow-2xl shadow-violet-500/5"
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
  );
};

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

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrolled(target.scrollTop > 40);
    };
    const el = document.getElementById('web-portfolio-scroll');
    el?.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[150] bg-[#050505] overflow-hidden flex flex-col"
    >
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[160] transition-all duration-300 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-center relative">
          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-neutral-500 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Close / back to mobile */}
          {onClose && (
          <button
            onClick={onClose}
            className="absolute right-8 flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-400 bg-white/5 border border-white/10 rounded-full hover:text-white hover:bg-white/10 transition-all"
          >
            <Monitor size={14} />
            <span className="hidden sm:inline">Back to Mobile</span>
            <X size={14} />
          </button>
          )}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-1 px-4 pb-3 overflow-x-auto scrollbar-hide">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-neutral-500 hover:text-white'
                  }`}
              >
                <Icon size={13} />
                {item.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Scrollable Content */}
      <div id="web-portfolio-scroll" className="flex-1 overflow-y-auto scrollbar-hide pt-16 pb-16">
        {/* Subtle grid bg */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HomeSection onNavigate={setActiveSection} />
            </motion.div>
          )}
          {activeSection === 'projects' && (
            <motion.div key="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProjectsSection />
            </motion.div>
          )}
          {activeSection === 'experience' && (
            <motion.div key="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ExperienceSection />
            </motion.div>
          )}
          {activeSection === 'certs' && (
            <motion.div key="certs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CertificationsSection />
            </motion.div>
          )}
          {activeSection === 'achievements' && (
            <motion.div key="achievements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AchievementSection />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Footer — fixed bottom */}
      <footer className="fixed bottom-0 left-0 right-0 z-[155] border-t border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-neutral-600">© 2025 {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/joshuafronda" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/joshuafronda" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default WebPortfolioView;
