import React, { useState, useEffect } from 'react';

{/* ========================================= */}
{/* DATA STORAGE (EASY EDIT LISTS)            */}
{/* ========================================= */}
const skills = [
  'SolidWorks', 'FEA / Simulation', 'Mechanical Design', 'ESP32 / Arduino', 
  'Raspberry Pi', 'Python', 'C++', '3D Printing', 'Kenesto CAD VCS', 'OpenCV'
];

const projectData = {
  opencv: {
    title: "Computer Vision Robotic Arm",
    status: "Planned / Early WIP",
    role: "Lead Mechatronics Designer",
    overview: "Designing and building an automated 4-DOF robotic arm system capable of physically sorting varied waste materials based on visual inputs.",
    images: ["/images/opencv-concept.jpg"],
    workflow: [
      {
        step: "1. Problem & Research",
        icon: "🔍",
        description: "Defined the challenge: A system to identify and manipulate materials with different physical surface properties. Research focused on adaptive grippers and industrial sorting techniques.",
        photos: [{ src: "/images/opencv-sorting-problem.jpg", caption: "Industrial waste complexity" }]
      },
      {
        step: "2. Requirements & Specs",
        icon: "📋",
        description: "Crucial requirements: 4 Degree of Freedom (DOF), minimum payload of 200g, and zero positional lag between vision processing and motor actuation.",
        photos: [{ src: "/images/opencv-requirements.jpg", caption: "Load calculation spreadsheet" }]
      },
      {
        step: "3. Brainstorm & Architect",
        icon: "💡",
        description: "Chose a parallel gripper for robustness. Designed a dual-controller layout: Raspberry Pi for vision (OpenCV) and an ESP32 for dedicated servo control.",
        photos: [
          { src: "/images/opencv-brainstorm.jpg", caption: "Gripper architecture options" },
          { src: "/images/opencv-system-wiring.jpg", caption: "Dual-controller architecture diagram" }
        ]
      },
      {
        step: "4. Develop & Prototype",
        icon: "🛠️",
        description: "Modeled in SolidWorks (v2024). Components were 3D printed with PLA. Developed ESP32 control firmware to handle kinematic instructions.",
        photos: [{ src: "/images/opencv-cad-assembly.jpg", caption: "Full SolidWorks assembly" }]
      },
      {
        step: "5. [CURRENT PHASE] Test Solution",
        icon: "🧪",
        description: "Current testing exposed slippage on aluminum cans. Currently redesigning gripper geometry based on physical force-curve data.",
        photos: [{ src: "/images/opencv-failed-gripper-test.jpg", caption: "Physical test: Gripper slippage" }]
      }
    ]
  },

  cprt: {
    title: "CPRT Rover Arm",
    status: "Ongoing",
    role: "Mechanical Contributor",
    overview: "Developing a robust 4-DOF robotic arm for the Carleton Planetary Robotics Team to compete in international rover competitions (CIRC/URC).",
    images: ["/images/cprt-rover-arm.jpg"],
    workflow: [
      {
        step: "1. Define Problem",
        icon: "🚀",
        description: "The arm must maintain precision for fine motor tasks like flipping switches or retrieving soil samples in harsh planetary simulation environments.",
        photos: [{ src: "/images/cprt-urc-requirements.jpg", caption: "Competition Rulebook Analysis" }]
      },
      {
        step: "2. Specify Requirements",
        icon: "📐",
        description: "Strict mass limits required aggressive weight reduction. Target: 5kg max lift at full extension while maintaining high safety factors.",
        photos: [{ src: "/images/cprt-torque-calcs.jpg", caption: "Joint Torque & Statics Analysis" }]
      },
      {
        step: "3. Brainstorm & Design",
        icon: "🖥️",
        description: "Designed a 4-DOF arm in SolidWorks. Utilized planetary gearboxes and high-torque brushless motors for the shoulder and elbow joints.",
        photos: [{ src: "/images/cprt-arm-cad.jpg", caption: "SolidWorks Main Assembly" }]
      },
      {
        step: "4. Develop & Prototype",
        icon: "🏗️",
        description: "Performed FEA (Finite Element Analysis) on main linkages. Used simulation data to remove material from non-load-bearing areas to save weight.",
        photos: [{ src: "/images/cprt-fea-analysis.jpg", caption: "Stress/Strain FEA Simulation" }]
      }
    ]
  },

  frc2025: {
    title: "FRC 2025: Team Manager",
    status: "Completed",
    role: "Team Manager & Lead Coordinator",
    overview: "Directed team logistics and administrative workflows for Team 9659, implementing professional PDM systems to streamline engineering.",
    images: ["/images/frc-2025-leadership.jpg"],
    workflow: [
      {
        step: "1. Problem Definition",
        icon: "⚖️",
        description: "Identified a bottleneck in productivity due to unorganized version control and poor resource management.",
        photos: [{ src: "/images/frc-logistics-map.jpg", caption: "Shop Floor Optimization Plan" }]
      },
      {
        step: "2. Specify Requirements",
        icon: "📝",
        description: "Required a cloud-based CAD management solution and improved shop accessibility for student members.",
        photos: [{ src: "/images/kenesto-setup.jpg", caption: "Kenesto PDM Implementation" }]
      },
      {
        step: "3. Brainstorm & Prototype",
        icon: "📅",
        description: "Managed the build season schedule using Agile-lite methodology and oversaw the procurement of raw materials.",
        photos: [{ src: "/images/frc-build-schedule.jpg", caption: "Build Season Gantt Chart" }]
      },
      {
        step: "4. Communicate Results",
        icon: "🏆",
        description: "Led the team through competition cycles with improved organization, faster pit turnaround, and more reliable documentation.",
        photos: [{ src: "/images/frc-2025-competition.jpg", caption: "Team 9659 at Regional Event" }]
      }
    ]
  },

  frc2024: {
    title: "FRC 2024: Mechanical",
    status: "Completed",
    role: "Mechanical Fabrication Member",
    overview: "Hands-on manufacturing and assembly of a high-performance competition robot for Team 9659.",
    images: ["/images/frc-2024-build.jpg"],
    workflow: [
      {
        step: "1. Research & Research",
        icon: "⚙️",
        description: "Studied drivetrain designs to determine the best chassis configuration for traction versus maneuverability in the game challenge.",
        photos: [{ src: "/images/frc-drivetrain-study.jpg", caption: "Drivetrain Comparison Study" }]
      },
      {
        step: "2. Develop & Prototype",
        icon: "🔨",
        description: "Utilized CNC milling, lathes, and precise manual machining to create custom gussets, motor mounts, and drive axles.",
        photos: [
          { src: "/images/frc-cnc-work.jpg", caption: "CNC Milling of Chassis" },
          { src: "/images/frc-manual-machining.jpg", caption: "Lathe work for axles" }
        ]
      },
      {
        step: "3. Test Solution",
        icon: "🕹️",
        description: "Conducted driver practice to find mechanical weak points. Iterated on the chain tensioning system to prevent slippage.",
        photos: [{ src: "/images/frc-driver-practice.jpg", caption: "Full Speed Field Testing" }]
      }
    ]
  }
};

{/* ========================================= */}
{/* MAIN APP COMPONENT                        */}
{/* ========================================= */}
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#0F1117] text-slate-300 font-sans selection:bg-[#60A5FA] selection:text-white">
      
      {/* NAVIGATION BAR */}
      <nav className="border-b border-[#1E2940] bg-[#0F1117]/95 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="font-mono text-sm font-bold text-slate-100 tracking-wider hover:text-[#60A5FA] transition-colors"
          >
            JM<span className="text-[#60A5FA]">.</span>eng
          </button>
          <div className="flex gap-6 font-mono text-xs tracking-widest text-slate-400">
            <button onClick={() => setCurrentPage('home')} className="hover:text-slate-100 transition-colors">PORTFOLIO</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-slate-100 transition-colors">CONTACT</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* 1. Show Home Page */}
        {currentPage === 'home' && <HomeView onNavigate={setCurrentPage} />}
        
        {/* 2. Show Contact Page */}
        {currentPage === 'contact' && <ContactView onBack={() => setCurrentPage('home')} />}
        
        {/* 3. Show Project Page (Only if the project exists in our data) */}
        {projectData[currentPage] ? (
          <ProjectView project={projectData[currentPage]} onBack={() => setCurrentPage('home')} />
        ) : (
          currentPage !== 'home' && currentPage !== 'contact' && (
            <div className="text-center py-20">
              <p className="text-slate-500 font-mono text-sm mb-4">ENGINEERING ERROR: Project ID "{currentPage}" not found.</p>
              <button onClick={() => setCurrentPage('home')} className="text-[#60A5FA] underline">Return to Hangar</button>
            </div>
          )
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1E2940] mt-20">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center font-mono text-xs text-slate-500">
          <span>© 2026 Jayden Mendoza</span>
          <span>Carleton University — Mechatronics</span>
        </div>
      </footer>
    </div>
  );
}

{/* ========================================= */}
{/* HOME PAGE VIEW                            */}
{/* ========================================= */}
function HomeView({ onNavigate }) {
  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="pt-10">
        <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#60A5FA] mb-6 flex items-center gap-4">
          <div className="w-8 h-px bg-[#60A5FA]"></div>
          CARLETON UNIVERSITY
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-100 leading-tight mb-6 tracking-tight">
          Jayden<br />
          <span className="text-[#60A5FA]">Mendoza.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
          Mechatronics Engineering Student & Hardware Designer. Specializing in mechanical design, system integration, and bringing robotics concepts to physical reality.
        </p>
        
        {/* SKILLS STRIP */}
        <div className="border-y border-[#1E2940] py-4 flex flex-wrap gap-x-6 gap-y-3">
          {skills.map(skill => (
            <div key={skill} className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]"></div>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* WIP SPOTLIGHT SECTION */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
          <span className="font-mono text-xs font-bold tracking-widest text-[#F59E0B] uppercase">Currently Building</span>
          <div className="flex-1 h-px bg-[#1E2940]"></div>
        </div>

        <div className="bg-[#161B27] border border-[#F59E0B]/30 rounded-lg overflow-hidden grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#0F1117] to-[#1a2035] border-b md:border-b-0 md:border-r border-[#F59E0B]/20 min-h-[300px] flex items-center justify-center relative group">
            <img 
              src="/images/opencv-wip.jpg" 
              alt="WIP Render" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="text-center relative z-10 p-6">
              <div className="font-mono text-xs text-slate-500 mb-2">[ DROP IMAGE HERE ]</div>
              <div className="text-xs text-slate-600 border border-slate-700 rounded px-2 py-1">public/images/opencv-wip.jpg</div>
            </div>
            <div className="absolute top-4 left-4 bg-[#F59E0B] text-[#0F1117] font-mono text-[10px] font-bold px-2 py-1 rounded tracking-wider">
              ACTIVE PROJECT
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-1">Computer Vision Robotic Arm</h3>
            <p className="text-[#F59E0B] text-sm mb-6">Automated Waste Sorting System</p>
            
            <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded p-4 mb-6">
              <div className="font-mono text-[10px] text-[#F59E0B] tracking-widest uppercase mb-2">Current Challenge</div>
              <p className="text-sm text-slate-300">Optimizing 3D-printed gripper geometry for reliable holds on varied surfaces (aluminum, plastic, paper) without mechanical slippage.</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm"><span className="text-emerald-400">✓</span> <span className="text-slate-500 line-through">Mechanical CAD Design</span></div>
              <div className="flex items-center gap-3 text-sm"><span className="text-emerald-400">✓</span> <span className="text-slate-500 line-through">Basic Motor Control</span></div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#F59E0B]"><span className="animate-spin">⟳</span> <span>Vision Integration (OpenCV)</span></div>
            </div>

            <button 
              onClick={() => onNavigate('opencv')}
              className="text-[#F59E0B] font-mono text-xs border border-[#F59E0B]/30 hover:bg-[#F59E0B]/10 px-4 py-2 rounded transition-colors"
            >
              View Project Specs →
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT GRID SECTION */}
      <section>
        <div className="font-mono text-xs tracking-widest text-[#60A5FA] mb-2">// EXPERIENCE & PROJECTS</div>
        <h2 className="text-3xl font-bold text-slate-100 mb-8">Engineering Portfolio</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* 1. OPENCV PROJECT */}
          <div className="bg-[#161B27] border border-[#1E2940] rounded-lg p-6 hover:border-[#60A5FA]/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">Mechatronics</div>
              <span className="bg-[#F59E0B]/10 text-[#F59E0B] font-mono text-[9px] px-2 py-1 rounded border border-[#F59E0B]/20">ACTIVE WIP</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Computer Vision Robotic Arm</h3>
            <p className="text-sm text-slate-400 mb-6">4-DOF sorting system integrating Raspberry Pi, ESP32, and OpenCV.</p>
            <button onClick={() => onNavigate('opencv')} className="text-[#60A5FA] font-mono text-xs hover:underline">View Workflow →</button>
          </div>

          {/* 2. CPRT PROJECT */}
          <div className="bg-[#161B27] border border-[#1E2940] rounded-lg p-6 hover:border-[#60A5FA]/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">Carleton Robotics</div>
              <span className="bg-[#60A5FA]/10 text-[#60A5FA] font-mono text-[9px] px-2 py-1 rounded border border-[#60A5FA]/20">ONGOING</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">CPRT Rover Arm</h3>
            <p className="text-sm text-slate-400 mb-6">Mechanical design and FEA for international rover competitions.</p>
            <button onClick={() => onNavigate('cprt')} className="text-[#60A5FA] font-mono text-xs hover:underline">View Workflow →</button>
          </div>

          {/* 3. FRC 2025 (MANAGEMENT) */}
          <div className="bg-[#161B27] border border-[#1E2940] rounded-lg p-6 hover:border-[#60A5FA]/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">FIRST Robotics</div>
              <span className="bg-emerald-400/10 text-emerald-400 font-mono text-[9px] px-2 py-1 rounded border border-emerald-400/20">COMPLETED</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">FRC 2025: Team Manager</h3>
            <p className="text-sm text-slate-400 mb-6">Logistics, PDM implementation, and team coordination for Team 9659.</p>
            <button onClick={() => onNavigate('frc2025')} className="text-[#60A5FA] font-mono text-xs hover:underline">View Workflow →</button>
          </div>

          {/* 4. FRC 2024 (MECHANICAL) */}
          <div className="bg-[#161B27] border border-[#1E2940] rounded-lg p-6 hover:border-[#60A5FA]/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">FIRST Robotics</div>
              <span className="bg-emerald-400/10 text-emerald-400 font-mono text-[9px] px-2 py-1 rounded border border-emerald-400/20">COMPLETED</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">FRC 2024: Mechanical</h3>
            <p className="text-sm text-slate-400 mb-6">Hands-on fabrication and assembly of a high-performance competition bot.</p>
            <button onClick={() => onNavigate('frc2024')} className="text-[#60A5FA] font-mono text-xs hover:underline">View Workflow →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

{/* ========================================= */}
{/* UNIVERSAL CINEMATIC PROJECT VIEW          */}
{/* ========================================= */}
function ProjectView({ project, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]); // This runs every time the 'project' data changes
  // 1. Initialize state at the very top (Rules of Hooks)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 2. Safety Check: If the data hasn't arrived, show a loading state
  if (!project || !project.workflow) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F1117]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#60A5FA] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Initialising Telemetry...</p>
          <button onClick={onBack} className="text-[#60A5FA] mt-8 underline font-mono text-xs">← ABORT TO HOME</button>
        </div>
      </div>
    );
  }

  // 3. Select the Hero Image (defaults to first image in the list)
  const heroImage = project.images && project.images.length > 0 
    ? project.images[0] 
    : '/images/JM-placeholder.jpg';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 selection:bg-[#60A5FA] selection:text-[#0F1117]">
      
      {/* NAVIGATION BAR (Sticky Overlay) */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto bg-[#0F1117]/80 backdrop-blur-md border border-[#1E2940] px-4 py-2 rounded-full font-mono text-[10px] text-slate-400 hover:text-[#60A5FA] hover:border-[#60A5FA]/50 transition-all flex items-center gap-2 group shadow-2xl"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> ESC // RETURN TO HANGAR
        </button>
      </nav>

      {/* 1. TUNED CINEMATIC HERO SECTION */}
      <header className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden border-b border-[#1E2940] group flex items-center">
         <img 
            src={heroImage} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
            onError={(e) => { e.target.src = '/images/JM-placeholder.jpg'; }}
          />

          {/* Stronger Overlay for better contrast */}
          <div className="absolute inset-0 bg-[#0F1117]/50 group-hover:bg-[#0F1117]/30 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent"></div>
          
          {/* Centered Content Area */}
          <div className="relative w-full max-w-7xl mx-auto px-8 md:px-20 mt-12">
            <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-6 animate-in slide-in-from-left-4 duration-700">
                   <span className="bg-[#60A5FA] text-[#0F1117] px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter">
                    {project.role}
                   </span>
                   <div className="w-12 h-px bg-slate-700"></div>
                   <span className="font-mono text-[10px] text-[#60A5FA] tracking-[0.3em] uppercase">STATUS: {project.status}</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9] uppercase italic drop-shadow-2xl animate-in slide-in-from-left-6 duration-1000">
                  {project.title}
                </h1>
                
                <p className="text-sm md:text-lg text-slate-300 leading-relaxed max-w-xl font-medium border-l-2 border-[#60A5FA] pl-6 animate-in slide-in-from-left-8 duration-1000">
                  {project.overview}
                </p>
            </div>
          </div>
      </header>

      {/* 2. TECHNICAL WORKFLOW (The "Engine Room") */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col items-center mb-24 text-center">
            <div className="h-20 w-px bg-gradient-to-b from-[#60A5FA] to-transparent mb-8"></div>
            <h2 className="text-xs font-mono font-bold tracking-[0.5em] text-slate-500 uppercase mb-2">
                Engineering Design Lifecycle
            </h2>
            <p className="text-[10px] font-mono text-slate-700 tracking-widest uppercase">Serial Sequence v2026.04</p>
        </div>
        
        <div className="space-y-32">
          {project.workflow.map((phase, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative group/phase">
              
              {/* Connector Line Logic */}
              {index < project.workflow.length - 1 && (
                <div className="absolute left-[20px] top-[40px] w-px h-[calc(100%+128px)] bg-[#1E2940] hidden md:block group-hover/phase:bg-[#60A5FA]/20 transition-colors"></div>
              )}

              {/* STEP INDICATOR */}
              <div className="md:col-span-1 hidden md:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl border border-[#1E2940] bg-[#161B27] flex items-center justify-center font-mono text-[10px] text-slate-500 group-hover/phase:border-[#60A5FA] group-hover/phase:text-[#60A5FA] transition-all rotate-45 group-hover/phase:rotate-0">
                      <span className="rotate-[-45deg] group-hover/phase:rotate-0 transition-transform">0{index + 1}</span>
                  </div>
              </div>

              {/* CONTENT BLOCK */}
              <div className="md:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                      <span className="text-3xl filter grayscale group-hover/phase:grayscale-0 transition-all">{phase.icon}</span>
                      <h3 className={`text-2xl font-bold tracking-tight uppercase ${phase.step.includes('[CURRENT') ? 'text-[#F59E0B]' : 'text-slate-100'}`}>
                          {phase.step.includes('.') ? phase.step.split('.')[1].trim() : phase.step}
                      </h3>
                  </div>
                  
                  <div className="h-px w-full bg-[#1E2940]"></div>
                  
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                      {phase.description}
                  </p>
              </div>

              {/* VISUAL EVIDENCE BLOCK */}
              <div className="md:col-span-6 grid gap-6 grid-cols-1 sm:grid-cols-2">
                  {phase.photos.map((photo, photoIndex) => (
                      <div key={photoIndex} className="bg-[#161B27] border border-[#1E2940] rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-[#60A5FA]/40 group/img">
                          <div className="w-full h-48 md:h-56 relative">
                              <img 
                                  src={photo.src} 
                                  alt={photo.caption} 
                                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700 group-hover/img:scale-105"
                                  onError={(e) => { e.target.src = '/images/JM-placeholder.jpg'; }}
                              />
                              <div className="absolute inset-0 bg-[#0F1117]/20 group-hover/img:bg-transparent transition-colors"></div>
                          </div>
                          <div className="p-4 bg-[#0F1117]/90 flex items-center justify-between">
                              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest truncate">{photo.caption}</span>
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="max-w-6xl mx-auto px-6 py-24 border-t border-[#1E2940] text-center">
          <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-8">End of Project Log</p>
          <button 
            onClick={onBack}
            className="bg-white text-[#0F1117] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#60A5FA] transition-all shadow-xl shadow-white/5"
          >
            RETURN TO PORTFOLIO
          </button>
      </footer>
    </div>
  );
}

{/* ========================================= */}
{/* CONTACT PAGE VIEW                         */}
{/* ========================================= */}
function ContactView({ onBack }) {
  return (
    <div className="max-w-2xl mx-auto pt-6 animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="font-mono text-xs text-slate-500 hover:text-[#60A5FA] flex items-center gap-2 mb-12 transition-colors"
      >
        ← BACK TO PORTFOLIO
      </button>

      <div className="mb-12">
        <div className="font-mono text-xs text-[#60A5FA] tracking-widest uppercase mb-4 flex items-center gap-4">
          <div className="w-8 h-px bg-[#60A5FA]"></div>
          COMMUNICATION LINK
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 leading-tight">Get In Touch.</h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Whether you want to discuss a mechatronics project, explore collaboration opportunities, or just talk hardware—my inbox is open.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* EMAIL CARD */}
        {/* EDIT: Swap the mailto: address with your real email */}
        <a 
          href="mailto:jayden.mendoza@example.com" 
          className="bg-[#161B27] border border-[#1E2940] hover:border-[#60A5FA]/50 rounded-lg p-8 flex flex-col items-center justify-center text-center transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-[#60A5FA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-xl text-[#60A5FA]">✉</span>
          </div>
          <h3 className="text-lg font-bold text-slate-100 mb-1">Email Me</h3>
          <p className="font-mono text-xs text-slate-400">jayden.mendoza@example.com</p>
        </a>

        {/* LINKEDIN CARD */}
        {/* EDIT: Swap the href link with your real LinkedIn profile URL */}
        <a 
          href="https://linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#161B27] border border-[#1E2940] hover:border-[#60A5FA]/50 rounded-lg p-8 flex flex-col items-center justify-center text-center transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-[#60A5FA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-xl text-[#60A5FA]">in</span>
          </div>
          <h3 className="text-lg font-bold text-slate-100 mb-1">Connect</h3>
          <p className="font-mono text-xs text-slate-400">LinkedIn Profile</p>
        </a>
      </div>
    </div>
  );
}