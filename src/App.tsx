import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Terminal, 
  Shield, 
  Database, 
  Server, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  ChevronRight,
  User,
  Briefcase,
  Zap,
  Cpu,
  Monitor,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fullText = "Full Stack Developer & Cyber Security Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 85, icon: Globe, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 80, icon: Server, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', level: 75, icon: Database, color: 'from-green-500 to-teal-500' },
    { name: 'Express.js', level: 80, icon: Terminal, color: 'from-gray-400 to-gray-600' },
    { name: 'Cyber Security', level: 70, icon: Shield, color: 'from-red-400 to-pink-500' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with payment integration and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Security Audit Tool',
      description: 'Network vulnerability scanner with real-time threat detection',
      tech: ['Python', 'Nmap', 'React', 'Socket.io'],
      link: '#',
      github: '#',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['React', 'Express', 'MongoDB', 'WebSockets'],
      link: '#',
      github: '#',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const codeSnippets = [
    'const developer = "passionate";',
    'function buildAmazingApps() {}',
    'npm install creativity',
    'git commit -m "magic"',
    'console.log("Hello World!");',
    'import React from "react";',
    'const skills = ["JS", "React"];',
    'async/await',
    'MongoDB.connect()',
    'express.listen(3000)',
    '{ success: true }',
    'cybersecurity.scan()',
    'fullstack.developer',
    'MERN.stack',
    'API.create()',
    'database.query()',
    'security.encrypt()',
    'responsive.design'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden relative">
      {/* Animated Coding Background - Responsive */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
        
        {/* Floating Code Snippets - Responsive count */}
        {[...Array(window.innerWidth < 768 ? 15 : 25)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-xs sm:text-sm font-mono animate-bounce ${
              ['text-blue-400', 'text-green-400', 'text-yellow-400', 'text-pink-400', 'text-cyan-400', 'text-purple-400'][Math.floor(Math.random() * 6)]
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </div>
        ))}

        {/* Animated Geometric Shapes - Responsive count */}
        {[...Array(window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full animate-pulse ${
              ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-pink-500', 'bg-cyan-500', 'bg-purple-500'][Math.floor(Math.random() * 6)]
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Binary Rain Effect - Responsive */}
        {[...Array(window.innerWidth < 768 ? 5 : 10)].map((_, i) => (
          <div
            key={`binary-${i}`}
            className="absolute text-green-400 text-xs font-mono opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1010101' : '0101010'}
          </div>
        ))}
      </div>

      {/* Navigation - Fully Responsive */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-lg border-b border-purple-500/30 z-50 shadow-lg shadow-purple-500/20">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            {'<Shreyash />'}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative group hover:text-cyan-400 transition-all duration-300 font-medium text-sm lg:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-purple-500/30">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Fully Responsive */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          {/* Glowing Orbs - Responsive positioning */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl sm:blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl sm:blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="mb-6 sm:mb-8 relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse leading-tight">
              Shreyash Srivastav
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-mono h-8 sm:h-10 md:h-12 flex items-center justify-center px-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-center">
                {typedText}
              </span>
              <span className="animate-ping text-cyan-400 ml-1">|</span>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
            Fresh B.Tech IT graduate passionate about building 
            <span className="text-cyan-400 font-semibold"> innovative solutions </span>
            with modern web technologies and securing 
            <span className="text-purple-400 font-semibold"> digital landscapes</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-3">
              <Briefcase size={20} className="group-hover:animate-bounce" />
              View My Work
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-purple-400 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
              <Mail size={20} className="group-hover:animate-bounce" />
              Get In Touch
              <Zap size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Animated Icons - Responsive */}
          <div className="mt-12 sm:mt-16 flex justify-center space-x-4 sm:space-x-8">
            {[Code, Terminal, Database, Shield].map((Icon, index) => (
              <div
                key={index}
                className={`p-2 sm:p-4 rounded-full bg-gradient-to-r ${
                  ['from-blue-500 to-cyan-500', 'from-green-500 to-teal-500', 'from-purple-500 to-pink-500', 'from-red-500 to-orange-500'][index]
                } animate-bounce shadow-lg`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <Icon size={24} className="sm:w-8 sm:h-8 text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Responsive */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto relative z-10 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105">
                <User className="text-cyan-400 mb-4 sm:mb-6 animate-pulse" size={40} />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I'm a recently graduated <span className="text-cyan-400 font-semibold">B.Tech Information Technology</span> student with a passion for creating 
                  robust web applications and securing digital infrastructures. My journey in tech has been 
                  driven by <span className="text-purple-400 font-semibold">curiosity</span> and a constant desire to learn and implement cutting-edge technologies.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105">
                <Code className="text-purple-400 mb-4 sm:mb-6 animate-pulse" size={40} />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">What I Do</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I specialize in <span className="text-purple-400 font-semibold">full-stack development</span> using the MERN stack, creating seamless user experiences 
                  from front-end to back-end. Additionally, I'm passionate about <span className="text-pink-400 font-semibold">cybersecurity</span>, focusing on 
                  building secure applications and understanding threat landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Responsive Grid */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto relative z-10 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-gray-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-600/50 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${skill.color} mr-3 sm:mr-4 group-hover:animate-spin`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3 mb-2 sm:mb-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-2 sm:h-3 rounded-full transition-all duration-2000 ease-out shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-400 font-medium">{skill.level}% Proficiency</span>
                    <Cpu className="text-cyan-400 animate-pulse" size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section - Responsive Cards */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="container mx-auto relative z-10 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-600/50 overflow-hidden hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`h-1 sm:h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Monitor className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text mr-2 sm:mr-3 group-hover:animate-pulse`} size={24} />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-white/20 hover:border-white/40 transition-all`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <a 
                      href={project.link}
                      className="group/link flex items-center justify-center sm:justify-start gap-2 text-cyan-400 hover:text-cyan-300 transition-all font-medium text-sm sm:text-base"
                    >
                      <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform" />
                      Live Demo
                    </a>
                    <a 
                      href={project.github}
                      className="group/link flex items-center justify-center sm:justify-start gap-2 text-purple-400 hover:text-purple-300 transition-all font-medium text-sm sm:text-base"
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Responsive Layout */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto relative z-10 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed">
                I'm always open to discussing <span className="text-cyan-400 font-semibold">new opportunities</span>, 
                <span className="text-purple-400 font-semibold"> exciting projects</span>, or just having a chat about 
                <span className="text-pink-400 font-semibold"> technology</span>!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
              {[
                { icon: Mail, title: 'Email', info: 'sshreyash153@gmail.com', color: 'from-blue-500 to-cyan-500' },
                { icon: Phone, title: 'Phone', info: '+91 7522045299', color: 'from-purple-500 to-pink-500' },
                { icon: MapPin, title: 'Location', info: 'Gorakhpur,India', color: 'from-green-500 to-teal-500' }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="group text-center p-6 sm:p-8 bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-600/50 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <div className={`inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-r ${contact.color} mb-4 sm:mb-6 group-hover:animate-bounce`}>
                    <contact.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white">{contact.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg break-all">{contact.info}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
              {[
                { icon: Github, color: 'hover:text-purple-400', bg: 'hover:bg-purple-500/20', link: 'https://github.com/shauryagith'  },
                { icon: Linkedin, color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20', link: 'https://www.linkedin.com/in/shreyash-shourya-srivastav-328057228/' },
                { icon: Twitter, color: 'hover:text-cyan-400', bg: 'hover:bg-cyan-500/20', link: 'https://x.com/sshreyash153' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 sm:p-4 rounded-full border border-gray-600 text-gray-400 ${social.color} ${social.bg} transition-all duration-300 transform hover:scale-125 hover:border-current`}
                >
                  <social.icon size={28} className="group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-purple-500/30 py-6 sm:py-8 lg:py-10 px-4 sm:px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            © 2025 Shreyash. All rights reserved.
            <span className="text-cyan-400 font-semibold"> </span> 
            <span className="text-purple-400 font-semibold"> </span>
            <span className="animate-pulse"> </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;