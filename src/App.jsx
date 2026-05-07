import React, { useState, useEffect, useLayoutEffect } from 'react';

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
    label: "Project",
    role: "Mechanical & Systems Design",
    status: "ACTIVE WIP",
    overview: "Designing an autonomous robotic arm powered by a Raspberry Pi and OpenCV. Currently focused on the mechanical design and kinematic planning, laying a rigid physical foundation before integrating vision tracking and servo control.",
    images: [
      "/images/wip-placeholder.jpg",
      "/images/cv-kinematics.jpg",
      "/images/cv-components.jpg"
    ],
    workflow: [
      {
        icon: "👁️",
        step: "01. Architecture Definition",
        description: "Established the overall system architecture. Defined the goal of bridging a Raspberry Pi camera feed with OpenCV to eventually translate 2D pixel coordinates into physical servo actuation.",
        photos: [{ src: "/images/cv-diagram.jpg", caption: "System architecture" }, { src: "/images/cv-concept.jpg", caption: "Control flow" }]
      },
      {
        icon: "⚙️",
        step: "02. Component & Torque Specs",
        description: "Calculated required servo torque for the expected arm load and reach. Researched power distribution methods to ensure the Raspberry Pi logic circuits will remain protected from servo voltage spikes.",
        photos: [{ src: "/images/cv-calculations.jpg", caption: "Torque math" }, { src: "/images/cv-motors.jpg", caption: "Servo selection" }]
      },
      {
        icon: "📐",
        step: "03. Mechanical Design [CURRENT]",
        description: "Currently designing the physical arm structure in CAD. Focusing on joint rigidity, minimizing backlash for accurate positioning, and ensuring the camera mount will provide an unobstructed view of the workspace.",
        photos: [{ src: "/images/wip-placeholder.jpg", caption: "Current CAD model" }, { src: "/images/cv-joint-design.jpg", caption: "Linkage design" }]
      },
      {
        icon: "⚡",
        step: "04. Assembly & Wiring [PLANNED]",
        description: "The next phase involves fabricating the structural components, mounting the servos, and establishing a safe, common-ground electrical circuit to handle the power draw.",
        photos: [{ src: "/images/cv-fabrication.jpg", caption: "Fabrication prep" }, { src: "/images/cv-wiring-plan.jpg", caption: "Circuit diagram" }]
      },
      {
        icon: "💻",
        step: "05. OpenCV Integration [PLANNED]",
        description: "The final phase will integrate the software environment. Planned milestones include color/object detection, contour mapping, and writing the control loop to physically move the arm toward targeted coordinates.",
        photos: [{ src: "/images/cv-tracking-test.jpg", caption: "Vision tracking" }, { src: "/images/cv-future.jpg", caption: "Final integration" }]
      }
    ]
  },

  cprt: {
    title: "CPRT Rover Arm",
    label: "2025 Design Team",
    role: "Mechanical Designer",
    status: "COMPLETED",
    overview: "Developed a 4-DOF robotic arm for the Carleton Planetary Robotics Team to compete in the CIRC and URC international rover competitions. Focused on high-torque harmonic drives, backlash reduction, and weight optimization.",
    images: [
      "/images/cprt-render-1.jpg",
      "/images/cprt-assembly.jpg",
      "/images/cprt-fea.jpg",
      "/images/cprt-final-arm.jpg"
    ],
    workflow: [
      {
        icon: "🛰️",
        step: "01. Subsystem Requirements",
        description: "Defined mechanical requirements for a planetary rover arm, prioritizing payload capacity, weight restrictions, and precise kinematic movement while integrating seamlessly with the existing rover chassis.",
        photos: [{ src: "/images/cprt-specs.jpg", caption: "Arm specifications" }, { src: "/images/cprt-rover.jpg", caption: "Chassis integration points" }]
      },
      {
        icon: "🔍",
        step: "02. Trade Studies & Research",
        description: "Conducted deep research into harmonic drives and gear reductions to solve backlash issues. Evaluated tradeoffs between weight, torque capacity, and manufacturability for joint linkages and structural components.",
        photos: [{ src: "/images/cprt-research.jpg", caption: "Harmonic drive analysis" }, { src: "/images/cprt-materials.jpg", caption: "Material selection" }]
      },
      {
        icon: "🖥️",
        step: "03. CAD & Simulation",
        description: "Developed detailed SolidWorks models utilizing box tube and plate construction for optimal strength-to-weight ratios. Ran simulations to analyze deflection, stiffness, and expected load tolerances.",
        photos: [{ src: "/images/cprt-cad.jpg", caption: "Joint CAD" }, { src: "/images/cprt-stress.jpg", caption: "FEA stress testing" }]
      },
      {
        icon: "⚖️",
        step: "04. Critical Design Review",
        description: "Compiled testing data, engineering calculations, and manufacturing plans to defend design choices during formal faculty and team lead reviews. Adjusted tolerances and packaging based on expert feedback.",
        photos: [{ src: "/images/cprt-presentation.jpg", caption: "CDR presentation" }, { src: "/images/cprt-feedback.jpg", caption: "Review notes" }]
      },
      {
        icon: "🏭",
        step: "05. Finalization & Machining",
        description: "Iterated on the final design geometry based on CDR feedback. Prepared technical drawings and CAM toolpaths to transition the arm components into the physical manufacturing phase.",
        photos: [{ src: "/images/cprt-drawings.jpg", caption: "Technical drawings" }, { src: "/images/cprt-cam.jpg", caption: "Machining prep" }]
      },
      {
        icon: "🦾",
        step: "06. Final Assembly & Integration",
        description: "Successfully manufactured, assembled, and integrated the physical 4-DOF arm onto the rover chassis. Validated mechanical movements, verified backlash reduction, and delivered a competition-ready subsystem.",
        photos: [{ src: "/images/cprt-final-arm.jpg", caption: "Completed Arm" }, { src: "/images/cprt-mounted.jpg", caption: "Chassis Integration" }]
      }
    ]
  },

  frc2025: {
    title: "FRC 2025: Team Manager",
    role: "Team Manager & Mechanical Lead",
    status: "COMPLETED",
    overview: "Led the engineering and integration processes for Team 9659. Built upon the previous year's lessons to optimize team structure, improve design confidence, and deliver a highly competitive, maintainable robot.",
    label: "2025 Season",
    images: [
      "/images/frc25-hero.jpg",
      "/images/frc25-cad.jpg",
      "/images/frc25-action.jpg"
    ],
    workflow: [
      {
        icon: "🎯",
        step: "01. Strategic Optimization",
        description: "Utilized lessons from 2024 to dramatically improve the planning phase. Divided work streams efficiently between mechanical, electrical, and programming sub-teams to streamline the build season timeline.",
        photos: [{ src: "/images/frc25-gantt.jpg", caption: "Season timeline" }, { src: "/images/frc25-meeting.jpg", caption: "Sub-team coordination" }]
      },
      {
        icon: "📐",
        step: "02. Evaluative Engineering",
        description: "Evaluated proposed mechanisms against scoring value, manufacturing complexity, and driver usability. Locked in design choices earlier in the season with higher confidence, focusing on tasks that could be executed consistently.",
        photos: [{ src: "/images/frc25-design-matrix.jpg", caption: "Decision matrix" }, { src: "/images/frc25-cad-final.jpg", caption: "Finalized CAD" }]
      },
      {
        icon: "🧩",
        step: "03. Managed Integration",
        description: "Oversaw the physical construction, guiding junior members through assembly and wiring. Ensured strict adherence to repairability standards, making sure subsystems could be easily serviced during tight competition turnarounds.",
        photos: [{ src: "/images/frc25-build.jpg", caption: "Chassis assembly" }, { src: "/images/frc25-mentoring.jpg", caption: "Guiding junior members" }]
      },
      {
        icon: "📊",
        step: "04. Iterative Performance Tuning",
        description: "Enforced an early-testing mandate. Analyzed physical performance data during drive tests to identify weaknesses, allowing the team to iterate on manipulators and control code well before the first official match.",
        photos: [{ src: "/images/frc25-tuning.jpg", caption: "Mechanism tuning" }, { src: "/images/frc25-code.jpg", caption: "Control calibration" }]
      },
      {
        icon: "🚀",
        step: "05. Delivery & Leadership",
        description: "Successfully fielded a highly reliable robot. Proven growth in engineering management, demonstrating how structured decision-making, early testing, and strong team communication directly yield a more competitive machine.",
        photos: [{ src: "/images/frc25-competing.jpg", caption: "Match execution" }, { src: "/images/frc25-group.jpg", caption: "2025 Roster" }]
      }
    ]
  },

  frc2024: {
    title: "FRC 2024: Mechanical",
    role: "Mechanical Contributor",
    status: "COMPLETED",
    overview: "Designed, manufactured, and integrated mechanical systems for the Vanier Vikings' 2024 FIRST Robotics Competition robot. Focused on rapid prototyping, reliable fabrication under strict timelines, and establishing a strong structural foundation.",
    label: "2024 Season",
    images: [
      "/images/frc24-chassis.jpg",
      "/images/frc24-competition.jpg",
      "/images/frc24-assembly.jpg"
    ],
    workflow: [
      {
        icon: "📋",
        step: "01. Game Analysis & Requirements",
        description: "Analyzed the 2024 FRC game manual to define strict limits on budget, weight, and dimensions. Prioritized a strategy that balanced essential scoring tasks with the team's available tools and manufacturing experience to ensure match durability.",
        photos: [{ src: "/images/frc24-planning.jpg", caption: "Initial strategy breakdown" }, { src: "/images/frc24-whiteboard.jpg", caption: "Mechanism requirements" }]
      },
      {
        icon: "⚙️",
        step: "02. Conceptual Design & Triage",
        description: "Researched standard robot mechanisms and drivetrain options to identify reliable solutions realistic for the team's capabilities. Prioritized simplicity, manufacturing efficiency, and ease of repair over complexity to maximize competition uptime.",
        photos: [{ src: "/images/frc24-sketches.jpg", caption: "Mechanism brainstorming" }, { src: "/images/frc24-cad-draft.jpg", caption: "Early CAD layout" }]
      },
      {
        icon: "🛠️",
        step: "03. Fabrication & Prototyping",
        description: "Moved from concept to physical development, assisting in the manufacturing and assembly of robot components. Iterated on early prototypes that failed under stress, adjusting the build based on realistic hardware performance.",
        photos: [{ src: "/images/frc24-manufacturing.jpg", caption: "Machining parts" }, { src: "/images/frc24-wiring.jpg", caption: "Electrical integration" }]
      },
      {
        icon: "🏎️",
        step: "04. Testing & Stress Validation",
        description: "Conducted rigorous driving and mechanism tests to identify points of failure before competition. Diagnosed and resolved mechanical looseness, alignment issues, and wiring vulnerabilities during full-system load testing.",
        photos: [{ src: "/images/frc24-testing.jpg", caption: "Drive practice" }, { src: "/images/frc24-repairs.jpg", caption: "Pit repairs" }]
      },
      {
        icon: "🏁",
        step: "05. Competition & Reflection",
        description: "Represented the team at competition, performing rapid repairs in the pit between matches. Learned that simple, reliable, and easily maintainable designs heavily outperform complex systems that are difficult to repair under pressure.",
        photos: [{ src: "/images/frc24-match.jpg", caption: "Robot on the field" }, { src: "/images/frc24-team.jpg", caption: "Team 9659" }]
      }
    ]
  },

  vex2024: {
    title: "VEX Robotics",
    role: "Programmer & Mechanical Builder",
    status: "COMPLETED",
    award: "Design Award Winner | Worlds Qualifier",
    label: "2024 Season",
    overview: "Designed and programmed a high-performance competition robot for the 2024 VEX season. Achieved the Design Award at Ontario Provincials and qualified for the VEX World Championships by maintaining a rigorous engineering notebook.",
    images: [
      "/images/VexProjectBanner.jpeg",
      "/images/vex-robot-hero.jpg",
      "/images/vex-award.jpg"
    ],
    workflow: [
      {
        icon: "🏆",
        step: "01. Design Requirements & Documentation",
        description: "Defined game-specific requirements with a focus on judge-criteria excellence. Established a rigorous engineering notebook protocol to document design iterations, scoring strategies, and rule compliance from day one.",
        photos: [{ src: "/images/vex-notebook.jpg", caption: "Award-winning engineering notebook" }, { src: "/images/vex-strategy.jpg", caption: "Scoring priority analysis" }]
      },
      {
        icon: "💻",
        step: "02. C++/PROS Software Architecture",
        description: "Developed responsive driver control logic and high-precision autonomous routines using C++ and the PROS kernel. Focused on sensor-fusion and PID tuning to ensure repeatable robot movement during the autonomous period.",
        photos: [{ src: "/images/vex-code-pid.jpg", caption: "PID control loop logic" }, { src: "/images/vex-sensor-setup.jpg", caption: "Inertial/Optical sensor integration" }]
      },
      {
        icon: "🔧",
        step: "03. Mechanical Fabrication & Hybridization",
        description: "Integrated mechanical linkages with software requirements. Focused on reducing friction in high-speed drivetrains and optimizing intake geometry to ensure consistent game-object handling under competition stress.",
        photos: [{ src: "/images/vex-build-chassis.jpg", caption: "Drivetrain assembly" }, { src: "/images/vex-intake-v1.jpg", caption: "Intake prototype" }]
      },
      {
        icon: "🧪",
        step: "04. Validation & Precision Tuning",
        description: "Executed match simulations to identify hardware fatigue. Tuned autonomous code to account for battery voltage fluctuations and field friction, ensuring 100% repeatability for world-class competition standards.",
        photos: [{ src: "/images/vex-practice.jpg", caption: "Match simulation" }, { src: "/images/vex-debug.jpg", caption: "Field calibration" }]
      },
      {
        icon: "🌎",
        step: "05. Provincials & World Championship",
        description: "Successfully competed at the Provincial and World Championship levels. Received the Design Award for excellence in the engineering process, proving the value of data-driven design and systematic iteration.",
        photos: [{ src: "/images/vex-worlds-booth.jpg", caption: "VEX Worlds 2024" }, { src: "/images/vex-team-photo.jpg", caption: "Ontario Provincials" }]
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
              <div className="flex items-center gap-3 text-sm"><span className="text-emerald-400">✓</span> <span className="text-slate-500 line-through">Basic Motor Control</span></div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#F59E0B]"><span className="animate-spin">⟳</span> <span>Mechanical CAD Design</span></div>
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
        
        {/* ========================================= */}
        {/* UNIVERSAL PROJECT GRID                    */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(projectData).map(([projectId, project]) => (
            <div 
              key={projectId}
              className="bg-[#161B27] border border-[#1E2940] rounded-2xl overflow-hidden hover:border-[#60A5FA]/50 transition-all group flex flex-col hover:-translate-y-1 duration-300 shadow-xl"
            >
              
              {/* Wide Banner Image Area */}
              {/* Wide Banner Image Area - FORCED FILL */}
              <div className="h-56 w-full bg-[#0F1117] relative overflow-hidden border-b border-[#1E2940]">
                <img 
                  src={project.images[0] === "TERMINAL" ? "/jm-logo.png" : (project.images[0] || "/jm-logo.png")} 
                  alt={project.title}
                  // We added 'absolute inset-0' and removed the 'flex' centering from the parent div
                  className={`absolute inset-0 w-full h-full transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-105 ${
                    project.images[0] === "TERMINAL" ? "object-contain p-8" : "object-cover"
                  }`}
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = '/jm-logo.png'; 
                    e.target.className="absolute inset-0 w-full h-full object-contain p-12 opacity-40"; 
                  }}
                />
                
                {/* Gold Award Badge (Pinned correctly over the banner) */}
                {project.award && (
                  <div className="absolute top-4 left-4 bg-[#F59E0B]/20 border border-[#F59E0B]/50 text-[#F59E0B] text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-md shadow-lg flex items-center gap-2 z-10">
                    <span>🏆</span> {project.award}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded ${
                    project.status === 'COMPLETED' ? 'text-emerald-400 border-emerald-400/30' : 
                    project.status.includes('WIP') ? 'text-[#F59E0B] border-[#F59E0B]/30' : 
                    'text-[#60A5FA] border-[#60A5FA]/30'
                  }`}>
                    {project.status}
                  </span>
                  
                  {/* This replaces the old complex if-statement */}
                  <span className="text-[10px] font-mono text-slate-500">
                    {project.label}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs text-[#F59E0B] font-mono mb-4">{project.role}</p>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-5">
                  {project.overview}
                </p>

                <button 
                  onClick={() => onNavigate(projectId)} 
                  className="w-full border border-[#1E2940] text-slate-300 py-3 rounded-lg font-mono text-xs hover:bg-[#60A5FA] hover:text-[#0F1117] hover:border-[#60A5FA] transition-all font-bold tracking-wide mt-auto"
                >
                  View Engineering Process →
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}

{/* ========================================= */}
{/* UNIVERSAL CINEMATIC PROJECT VIEW          */}
{/* ========================================= */}
function ProjectView({ project, onBack }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);
  // 1. Initialize state at the very top (Rules of Hooks)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // AUTOPLAY LOGIC: Switches images every 5 seconds
  useEffect(() => {
    // Only start the timer if there's more than one image
    if (project.images.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000); // 5000ms = 5 seconds

    // CLEANUP: This stops the timer if the user leaves the page
    return () => clearInterval(timer);
  }, [currentImageIndex, project.images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

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

      <div className="relative w-full aspect-video md:h-[500px] bg-[#161B27] rounded-2xl overflow-hidden border border-[#1E2940] group mb-24 shadow-2xl">
          <img 
            src={project.images[currentImageIndex]} 
            className="w-full h-full object-cover"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = '/jm-logo.png'; 
            }}
          />
          {project.images.length > 1 && (
            <>
              <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0F1117]/80 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity">←</button>
              <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0F1117]/80 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity">→</button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {project.images.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`h-1.5 rounded-full transition-all ${currentImageIndex === idx ? 'bg-[#60A5FA] w-6' : 'bg-slate-600 w-1.5'}`} />
                ))}
              </div>
            </>
          )}
      </div>


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
          href="mailto:jaydenmendoza@cmail.carleton.ca" 
          className="bg-[#161B27] border border-[#1E2940] hover:border-[#60A5FA]/50 rounded-lg p-8 flex flex-col items-center justify-center text-center transition-all group"
        >
          <div className="w-12 h-12 rounded-full bg-[#60A5FA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-xl text-[#60A5FA]">✉</span>
          </div>
          <h3 className="text-lg font-bold text-slate-100 mb-1">Email Me</h3>
          <p className="font-mono text-xs text-slate-400">jaydenmendoza@cmail.carleton.ca</p>
        </a>

        {/* LINKEDIN CARD */}
        {/* EDIT: Swap the href link with your real LinkedIn profile URL */}
        <a 
          href="https://www.linkedin.com/in/jayden-mendoza/" 
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