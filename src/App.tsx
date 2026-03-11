/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import profileImage from './img/v1.jpg';
import Careconnect from './img/CareConnect.png';
import Easytizen from './img/Easytizen.png';
import MuniManage from './img/MuniManage.png';
import SentinelFlow from './img/SentinelFlow.png';
import ShinyText from './ShinyText';
import LogoLoop from '../components/LogoLoop';
import Lanyard from './Lanyard';
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
  Camera,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Skills Data for LogoLoop ---
const SKILL_LOGOS = [
  { node: <span className="text-white font-semibold">HTML</span>, title: "HTML" },
  { node: <span className="text-blue-400 font-semibold">CSS</span>, title: "CSS" },
  { node: <span className="text-yellow-400 font-semibold">JS</span>, title: "JavaScript" },
  { node: <span className="text-blue-500 font-semibold">TS</span>, title: "TypeScript" },
  { node: <span className="text-cyan-400 font-semibold">React</span>, title: "React" },
  { node: <span className="text-teal-400 font-semibold">Tailwind</span>, title: "Tailwind CSS" },
  { node: <span className="text-blue-600 font-semibold">Flutter</span>, title: "Flutter" },
  { node: <span className="text-purple-400 font-semibold">Vite</span>, title: "Vite" },
  { node: <span className="text-green-500 font-semibold">Python</span>, title: "Python" },
  { node: <span className="text-green-600 font-semibold">Django</span>, title: "Django" },
  { node: <span className="text-purple-600 font-semibold">PHP</span>, title: "PHP" },
  { node: <span className="text-blue-700 font-semibold">WordPress</span>, title: "WordPress" },
  { node: <span className="text-green-700 font-semibold">Nginx</span>, title: "Nginx" },
  { node: <span className="text-orange-500 font-semibold">MySQL</span>, title: "MySQL" },
  { node: <span className="text-blue-800 font-semibold">PostgreSQL</span>, title: "PostgreSQL" },
  { node: <span className="text-green-800 font-semibold">MongoDB</span>, title: "MongoDB" },
  { node: <span className="text-red-500 font-semibold">Git</span>, title: "Git" },
  { node: <span className="text-orange-600 font-semibold">Ubuntu</span>, title: "Ubuntu" },
  { node: <span className="text-yellow-500 font-semibold">Firebase</span>, title: "Firebase" },
];

// --- Types & Data ---

type TabId = 'home' | 'projects' | 'profile' | 'certs';

const PORTFOLIO_DATA = {
  name: "Joshua Fronda",
  photo: profileImage,
  role: "Developer",
  location: "Batangas, PH",
  status: "IT/CS Instructor",
  bio: "A dedicated and results-driven professional with experience in web and mobile development.",
  binaryText: "0000110001 0110 000 00110111 0010110000 000 0010000 10110001 0010000 01 10010111000 011010100000 101 100110100010 00000111 00001101100 010 1101010 10011000",
  projects: [
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
    }
  ],
  experience: [
    { 
      role: 'Freelance Developer', 
      company: 'Self-Employed', 
      year: '2025 - PRESENT',
      details: [
        'Developing custom web and mobile applications for clients',
        'Providing technical consulting and solutions',
        'Managing full project lifecycle from design to deployment',
        'Working with modern technologies and best practices'
      ]
    },
    { 
      role: 'IT/CS Instructor', 
      company: 'Batangas State University TNEU - Alangilan Campus', 
      year: 'PRESENT',
      details: [
        'Teaching Advanced Computer Programming & Networking courses',
        'Teaching Mobile Computing and Mobile Development',
        'Conducting Web Designing classes',
        "Pursuing Master's in Information Technology (Graduate School 2025)"
      ]
    },
    { 
      role: 'Full Stack Developer Intern', 
      company: 'Batangas State University TNEU - Main Campus', 
      year: 'FEB — APR 2025',
      details: [
        'Developed web and mobile applications & maintained backend services',
        'Managed WordPress, deployed apps on Ubuntu servers, configured Nginx',
        'Collaborated in Agile teams (sprint planning, stand-ups, retrospectives)',
        'Tracked tasks via Trello and used Git for version control'
      ]
    },
  ],
  skills: [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 
    'Flutter', 'Vite', 'Python', 'Django', 'PHP', 'WordPress', 
    'Nginx', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Ubuntu', 'Firebase'
  ],
  certifications: [
    { title: 'Cybersecurity', issuer: 'Asian Development Bank (ADB)', date: 'Dec 2025', id: '145749-176-472-9154' },
    { title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', date: 'Dec 2025' },
    { title: 'Introduction to Data Science', issuer: 'Cisco', date: 'Nov 2025' },
    { title: 'Science and Technology Education Program', issuer: 'Pilipinas Shell Foundation, Inc.', date: 'Aug 2025' },
    { title: 'The Milestone Awardee', issuer: 'Pilipinas Shell Foundation, Inc.', date: 'Aug 2025' },
    { title: 'Leadership Enhancement and Attitude Development (LEAD)', issuer: 'Pilipinas Shell Foundation, Inc.', date: 'Jun 2025' },
    { title: 'AWS Academy Cloud Architecting', issuer: 'Amazon Web Services (AWS)', date: 'May 2025' },
    { title: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services (AWS)', date: 'Apr 2025' },
    { title: 'Tech Nexus 2024: Empowering Campus Innovators', issuer: 'DEVCON Philippines', date: 'Dec 2024' },
  ]
};

// --- Custom Hooks ---

const useTime = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
};

// --- Reusable Animation Components ---

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 120, damping: 20 } 
  }
};

// --- Carousel Component ---
const ProjectCarousel = ({ images, isOpen, onClose }: { images: any[], isOpen: boolean, onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl aspect-video rounded-[2rem] overflow-hidden glass-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Project screenshot"
            className="w-full h-full object-contain bg-black/50"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
        
        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
      </motion.div>

      {/* Lanyard Modal */}
      <AnimatePresence>
        {showLanyard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowLanyard(false)}
          >
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowLanyard(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ScreenWrapper = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
    className={`p-5 pt-10 pb-32 min-h-full flex flex-col gap-4 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Screens ---

const HomeScreen = ({ onNavigate, onOpenPhoto }: { onNavigate: (tab: TabId) => void, onOpenPhoto: () => void }) => {
  const currentTime = useTime();
  const [showLanyard, setShowLanyard] = useState(false);

  return (
    <ScreenWrapper>
      {/* Header Bento */}
      <motion.div variants={fadeUpVariant} className="glass-card rounded-[2rem] p-6 relative overflow-hidden">
        {/* Avatar Button Overlapping Top Right */}
        <button
            onClick={() => setShowLanyard(true)}
            className="absolute right-6 mt-6  top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors z-20"
            title="View Lanyard"
          >
            <ArrowUpRight size={14} />
          </button>
        <button 
          onClick={onOpenPhoto}
          className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-[#0A0A0A] shadow-xl overflow-hidden mt-9 group z-10 ring-2 ring-white/10 transition-transform hover:scale-105"
        >
          <img src={PORTFOLIO_DATA.photo} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera size={20} className="text-white" />
          </div>
        </button>

        <div className="mt-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="micro-label text-emerald-500/80">Available</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white mb-2 pr-16">
            {PORTFOLIO_DATA.name}
          </h1>
          <p className="text-sm font-medium text-neutral-400 mb-6">
            <ShinyText
              text={PORTFOLIO_DATA.role}
              speed={3}
              delay={0}
              color="#9ca3af"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            /> <br/> 
            <ShinyText
              text={PORTFOLIO_DATA.status}
              speed={3}
              delay={1}
              color="#9ca3af"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-[90%]">
            {PORTFOLIO_DATA.bio}
          </p>
        </div>
      </motion.div>

      {/* Grid Bento */}
      <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-4">
        <div className="glass-card rounded-[2rem] p-5 flex flex-col justify-between aspect-square">
          <MapPin size={20} className="text-neutral-500" />
          <div>
            <p className="micro-label mb-1">Location</p>
            <p className="text-sm font-medium text-white">{PORTFOLIO_DATA.location}</p>
            <p className="text-xs text-neutral-500 mt-1">{currentTime} Local</p>
          </div>
        </div>
        
        <div className="grid grid-rows-2 gap-4">
          <a href="https://www.linkedin.com/in/joshuafronda" target="_blank" rel="noopener noreferrer" className="glass-card rounded-[2rem] p-5 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3">
              <Linkedin size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">LinkedIn</span>
            </div>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
          </a>
          <a href="https://github.com/joshuafronda" target="_blank" rel="noopener noreferrer" className="glass-card rounded-[2rem] p-5 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3">
              <Github size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">GitHub</span>
            </div>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
          </a>
        </div>
      </motion.div>

      {/* Terminal Bento with Technical Arsenal */}
      <motion.div variants={fadeUpVariant} className="">
        <div className="flex items-center justify-between mb-5">
          <p className="micro-label">Technical Arsenal</p>
          <Terminal size={14} className="text-neutral-500" />
        </div>
        <div className="h-5 relative overflow-hidden">
          <LogoLoop
            logos={SKILL_LOGOS}
            speed={80}
            direction="left"
            logoHeight={10}
            gap={25}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#0A0A0A"
            ariaLabel="Technical skills and technologies"
          />
        </div>
      </motion.div>

      {/* Action Bento */}
      <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => onNavigate('projects')}
          className="glass-card rounded-[2rem] p-5 flex items-center justify-between group hover:bg-white text-white hover:text-black transition-all"
        >
          <span className="text-sm font-semibold">View Work</span>
          <ArrowUpRight size={18} />
        </button>
        <a 
          href="https://drive.google.com/file/d/1M6jPpTxGgahrJnvaR7lFRyS4xmmP18Lt/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-[2rem] p-5 flex items-center justify-between group hover:bg-white/[0.02] transition-colors"
        >
          <span className="text-sm font-medium text-neutral-300">Resume</span>
          <FileText size={18} className="text-neutral-500" />
        </a>
      </motion.div>
    </ScreenWrapper>
  );
};

const ProjectsScreen = () => {
  const [carouselProject, setCarouselProject] = useState<{ images: any[] } | null>(null);

  return (
    <ScreenWrapper>
      <motion.div variants={fadeUpVariant} className="px-2 mb-4">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Featured Projects</h2>
        <p className="text-sm text-neutral-500 mt-1">Selected works and case studies.</p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            variants={fadeUpVariant}
            className="glass-card rounded-[2rem] p-0 group cursor-pointer hover:border-white/20 transition-all relative overflow-hidden min-h-[320px] flex flex-col justify-end"
            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
          >
            {/* Fading Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
            </div>

            {/* Top Bar */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
              <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <span className="font-mono text-xs text-neutral-300">0{idx + 1}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCarouselProject(project);
                  }}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                  title="View Screenshots"
                >
                  <Camera size={16} className="text-white" />
                </button>
                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowUpRight size={20} className="text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 pt-12">
              <p className="micro-label mb-2 text-white/70">{project.category}</p>
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Carousel Modal */}
      <AnimatePresence>
        {carouselProject && (
          <ProjectCarousel 
            images={carouselProject.images} 
            isOpen={true} 
            onClose={() => setCarouselProject(null)} 
          />
        )}
      </AnimatePresence>
    </ScreenWrapper>
  );
};

const ProfileScreen = () => {
  return (
    <ScreenWrapper>
      <motion.div variants={fadeUpVariant} className="px-2 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Experience</h2>
        <p className="text-sm text-neutral-500 mt-1">Professional journey & skills.</p>
      </motion.div>

      <motion.div variants={fadeUpVariant} className="glass-card rounded-[2rem] p-6 mb-4">
        <div className="relative border-l border-neutral-800 ml-2 flex flex-col gap-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-neutral-400 ring-4 ring-[#0A0A0A]" />
              <p className="micro-label mb-1">{exp.year}</p>
              <h4 className="text-base font-semibold text-white">{exp.role}</h4>
              <p className="text-sm text-neutral-400 mb-4">{exp.company}</p>
              <ul className="flex flex-col gap-2">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-xs text-neutral-500 leading-relaxed flex items-start gap-2">
                    <CircleDot size={10} className="mt-1 flex-shrink-0 text-neutral-700" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </ScreenWrapper>
  );
};

const CertificationsScreen = () => {
  return (
    <ScreenWrapper>
      <motion.div variants={fadeUpVariant} className="px-2 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Certifications</h2>
        <p className="text-sm text-neutral-500 mt-1">Continuous learning & achievements.</p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
          <motion.div 
            key={idx}
            variants={fadeUpVariant}
            className="glass-card rounded-[1.5rem] p-5 flex flex-col gap-2 group hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug mb-1">{cert.title}</h3>
                <p className="text-xs text-neutral-400">{cert.issuer}</p>
              </div>
              <ExternalLink size={16} className="text-neutral-600 group-hover:text-white transition-colors flex-shrink-0" />
            </div>
            
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
              <p className="micro-label">{cert.date}</p>
              {cert.id && <p className="font-mono text-[10px] text-neutral-600">ID: {cert.id}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </ScreenWrapper>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const tabs: { id: TabId; icon: React.ElementType; label: string }[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'certs', icon: Award, label: 'Certs' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#000000] font-sans selection:bg-white/30">
      {/* Mobile Device Mockup Container */}
      <div className="w-full max-w-[400px] h-[100dvh] bg-[#000000] bg-noise text-white relative overflow-hidden flex flex-col sm:h-[850px] sm:rounded-[3rem] sm:border-[8px] sm:border-neutral-900 sm:shadow-2xl sm:shadow-white/5">
        
        {/* Status Bar Mockup */}
        <div className="hidden sm:flex justify-between items-center px-8 pt-5 pb-2 text-xs font-semibold text-white/90 z-30 relative">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-3 bg-white/90 rounded-sm"></div>
            <div className="w-3 h-3 bg-white/90 rounded-full"></div>
            <div className="w-5 h-3 bg-white/90 rounded-sm"></div>
          </div>
        </div>

        {/* Dynamic Island Mockup */}
        <div className="hidden sm:block absolute top-2 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-30 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"></div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && <HomeScreen key="home" onNavigate={setActiveTab} onOpenPhoto={() => setIsPhotoOpen(true)} />}
            {activeTab === 'projects' && <ProjectsScreen key="projects" />}
            {activeTab === 'profile' && <ProfileScreen key="profile" />}
            {activeTab === 'certs' && <CertificationsScreen key="certs" />}
          </AnimatePresence>
        </div>

        {/* Floating Bottom Navigation + Profile Preview */}
        <div className="absolute bottom-0 w-full pb-safe pt-8 px-6 z-25 sm:pb-8 pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent">
          <nav className="bg-[#0A0A0A] border border-white/10 rounded-full p-1.5 mb-2 flex justify-between items-center relative pointer-events-auto shadow-2xl backdrop-blur-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex items-center justify-center w-14 h-12 rounded-full z-10"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <motion.div
                    animate={{ color: isActive ? '#FFF' : '#525252' }}
                    className="relative z-10"
                  >
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  </motion.div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Photo Overlay Modal */}
        <AnimatePresence>
          {isPhotoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
              onClick={() => setIsPhotoOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden glass-card shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={PORTFOLIO_DATA.photo} alt={PORTFOLIO_DATA.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <button 
                  onClick={() => setIsPhotoOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
