import React, { useState, useEffect, useLayoutEffect } from 'react';

const img = (path) => `${import.meta.env.BASE_URL}${(path || '').replace(/^\//, '')}`;

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
    overview: "Engineering a closed-loop autonomous robotic arm driven by a Raspberry Pi + OpenCV vision pipeline. The system translates live 2D camera coordinates into precise servo actuation — targeting sub-5mm positional accuracy for real-time object classification and retrieval.",
    techStack: ["Raspberry Pi 4", "OpenCV", "Python", "SolidWorks", "PID Control", "Servo PWM", "3D Printing"],
    keyAchievements: [

    ],
    images: [
      "/images/opencv-placeholder.svg"
    ],
    workflow: [
      {
        icon: "👁️",
        step: "01. Architecture Definition",
        description: "Defined the end-to-end system architecture linking a Raspberry Pi camera feed through an OpenCV perception layer to a real-time servo actuation loop. Established coordinate transformation math to convert 2D pixel detections into 3D workspace positions, forming the control-theory backbone before writing a single line of code.",
        photos: [
          { src: "/images/opencv-placeholder.svg", caption: "System architecture concept" },
          { src: "/images/opencv-placeholder.svg", caption: "Control flow diagram" }
        ]
      },
      {
        icon: "⚙️",
        step: "02. Component & Torque Specs",
        description: "Performed static and dynamic torque calculations across all three joints under worst-case payload and maximum reach conditions. Sized servo selection with a 2× safety margin and engineered an isolated power rail to protect Raspberry Pi logic from servo-induced voltage transients — preventing the most common cause of single-board computer failure in actuated systems.",
        photos: [
          { src: "/images/opencv-placeholder.svg", caption: "Torque budget analysis" },
          { src: "/images/opencv-placeholder.svg", caption: "Servo selection matrix" }
        ]
      },
      {
        icon: "📐",
        step: "03. Mechanical Design [CURRENT]",
        description: "Actively designing the structural arm geometry in SolidWorks. Focused on three precision outcomes: minimizing joint backlash to maintain millimeter-level precision, maximizing link rigidity to eliminate deflection error, and positioning the camera mount to maintain unobstructed workspace visibility across the full range of motion.",
        photos: [
          { src: "/images/opencv-placeholder.svg", caption: "Active CAD model" },
          { src: "/images/opencv-placeholder.svg"
            , caption: "Joint linkage design" }
        ]
      },
      {
        icon: "⚡",
        step: "04. Assembly & Wiring [PLANNED]",
        description: "Next phase: fabricate 3D-printed structural components, mount and calibrate servos to zero-reference positions, and build a common-ground power distribution circuit with appropriately rated wiring gauges. Will validate mechanical range of motion against the kinematic model before any software integration begins.",
        photos: [
          { src: "/images/opencv-placeholder.svg", caption: "Fabrication preparation" },
          { src: "/images/opencv-placeholder.svg", caption: "Wiring architecture plan" }
        ]
      },
      {
        icon: "💻",
        step: "05. OpenCV Integration [PLANNED]",
        description: "Final phase integrates the full perception-to-actuation pipeline: HSV-masked color detection, contour centroid extraction, and a PID-based servo control loop that drives the end-effector toward detected object coordinates. Planned milestones include achieving consistent pick cycles across multiple object geometries and surface materials.",
        photos: [
          { src: "/images/opencv-placeholder.svg", caption: "Vision tracking prototype" },
          { src: "/images/opencv-placeholder.svg", caption: "Final integration target" }
        ]
      }
    ]
  },

  cprt: {
    title: "CPRT Rover Arm",
    label: "2025 Design Team",
    role: "Mechanical Designer",
    status: "COMPLETED",
    overview: "Engineered a competition-ready 4-DOF robotic arm for the Carleton Planetary Robotics Team (CPRT), targeting both CIRC and URC international rover competitions. Delivered a zero-backlash harmonic-drive joint architecture that achieved a reduction in structural mass while maintaining full payload spec — a design that passed peer CDR review and entered physical manufacturing.",
    techStack: ["SolidWorks", "FEA / Simulation", "Harmonic Drives", "Box Tube Construction", "GD&T"],
    keyAchievements: [
      "22% structural mass reduction vs. initial design baseline",
      "Zero-backlash harmonic drive joints — passed CDR review",
      "4-DOF arm design cleared for physical manufacturing",
      "Full FEA validation under competition payload conditions"
    ],
    images: [
      "/images/CPRTSlideshow1.jpg",
      "/images/CPRTSlideshow2.jpg",
      "/images/CPRTFinalAssemblyintegration.jpg"
    ],
    workflow: [
      {
        icon: "🛰️",
        step: "01. Subsystem Requirements",
        description: "Reverse-engineered competition scoring rubrics from CIRC and URC rule sets to extract concrete mechanical requirements: defined payload capacity thresholds, articulation envelope constraints, and maximum allowable arm mass as a fraction of overall rover budget. Created a structured requirements matrix that served as the design's acceptance criteria throughout the entire development cycle.",
        photos: [
          { src: "/images/CPRTSubsystemRequirments.jpg", caption: "Competition requirements" },
          { src: "/images/CPRTsubsystemrequirments2.jpg", caption: "Basic Design" }
        ]
      },
      {
        icon: "🔍",
        step: "02. Trade Studies & Research",
        description: "Conducted quantitative trade studies across three joint actuator architectures — direct drive, planetary gearbox, and harmonic drive — evaluating backlash magnitude, torque density, backdrivability, and manufacturing lead time. Harmonic drives were selected based on their zero-backlash characteristic, critical for maintaining end-effector positioning accuracy during teleoperated tasks at competition.",
        photos: [
          { src: "/images/CPRTTradeStudiesandResearch.png", caption: "Harmonic Drive" },
          { src: "/images/CPRTTradeStudiesandResearch2.jpg", caption: "Material and mass analysis" }
        ]
      },
      {
        icon: "🖥️",
        step: "03. CAD & Simulation",
        description: "Developed full parametric SolidWorks models using box tube and plate construction to maximize structural rigidity per unit mass. Ran iterative FEA studies across expected load cases, identifying and eliminating two stress concentration zones in the elbow joint that would have caused fatigue failure within 20 operating hours. Final design achieved a 22% mass reduction from the initial baseline.",
        photos: [
          { src: "/images/CPRTCADandSim.jpg", caption: "Version 1" },
          { src: "/images/CPRTCADandSimulation1.png", caption: "FEA stress distribution" }
        ]
      },
      {
        icon: "⚖️",
        step: "04. Critical Design Review",
        description: "Compiled a formal CDR package including engineering calculations, FEA result summaries, manufacturing tolerance stack-ups, and a risk register. Presented and defended all design decisions before a panel of faculty advisors and senior team leads. Incorporated three structural tolerance adjustments and one packaging revision based on expert review feedback.",
        photos: [
          { src: "/images/CPRTCriticaldesignreview.jpg", caption: "CDR presentation deck" },
          { src: "/images/CPRTCriticalDesignReview1.jpg", caption: "Post-review revision notes" }
        ]
      },
      {
        icon: "🏭",
        step: "05. Finalization & Machining",
        description: "Translated the CDR-approved design into a full set of GD&T-annotated technical drawings and CAM toolpaths for the machine shop. Resolved three feature ambiguities identified during drawing review before any cutting began — eliminating the most common source of scrapped parts and rework cycles in student manufacturing pipelines.",
        photos: [
          { src: "/images/CPRTFinalizationMAchining.jpg", caption: "GD&T technical drawings" },
          { src: "/images/CPRTFinalizationandMachining1.png", caption: "CAM toolpath verification" }
        ]
      },
      {
        icon: "🦾",
        step: "06. Final Assembly & Integration",
        description: "Successfully assembled the 4-DOF arm from machined components and integrated it onto the rover chassis within dimensional tolerance. Validated the full articulation envelope against the kinematic model, confirmed zero-backlash performance at each joint under load, and delivered a competition-ready subsystem cleared for field deployment.",
        photos: [
          { src: "/images/CPRTFinalAssemblyintegration.jpg", caption: "Completed arm assembly" },
          { src: "/images/CPRTSlideshow1.jpg", caption: "Final integration" }
        ]
      }
    ]
  },

  frc2025: {
    title: "FRC 2025: Team Manager",
    role: "Team Manager & Mechanical Lead",
    award: "Design Award Winner",
    status: "COMPLETED",
    label: "2025 Season",
    overview: "Directed the full engineering lifecycle of Team 9659's 2025 FRC robot — from strategic game analysis through competition deployment. Implemented structured project management frameworks that compressed the design freeze milestone by two weeks versus the prior year, enabling significantly more drive and mechanism practice time before the first qualifying event.",
    techStack: ["SolidWorks", "Project Management", "Mechanism Design", "Drivetrain Integration", "Systems Engineering", "FRC Control System"],
    keyAchievements: [
      "Design freeze achieved 2 weeks earlier than 2024 season",
      "Sub-team workflow restructuring cut integration conflicts",
      "Early testing mandate identified 3 critical failure modes pre-competition",
      "Delivered most mechanically reliable robot in team history"
    ],
    images: [
      "/images/FRC2025Banner.jpg",
      "/images/FRC2025Slideshow1.jpg",
      "/images/FRC2025Slideshow2.jpg",
      "/images/FRC2025Slideshow3.jpg"
    ],
    workflow: [
      {
        icon: "🎯",
        step: "01. Strategic Optimization",
        description: "Applied a structured post-mortem from 2024 to redesign the team's engineering process before build season began. Decomposed work into three parallel streams — mechanical, electrical, and programming — with defined interface contracts and weekly sync gates. This eliminated the serial blocking dependencies that had cost the team 10 days of effective build time the prior year.",
        photos: [
          { src: "/images/FRC2025StrategicOptimization.jpg", caption: "Season timeline and workstreams" },
          { src: "/images/FRC2025StrategicOptimization1.jpg", caption: "Sub-team coordination framework" }
        ]
      },
      {
        icon: "📐",
        step: "02. Evaluative Engineering",
        description: "Facilitated structured mechanism evaluation sessions using a weighted scoring matrix that ranked proposals against five criteria: autonomous scoring value, cycle time, manufacturing complexity, driver operability, and repair speed. This framework allowed the team to reach design lock-in two weeks ahead of the 2024 pace — directly translating to more drive practice repetitions before the first qualifier.",
        photos: [
          { src: "/images/FRC2025EvaluativeEngineering.jpg", caption: "Mechanism decision matrix" },
          { src: "/images/FRC2025EvaluativeEngineering1.jpg", caption: "Finalized CAD configuration" }
        ]
      },
      {
        icon: "🧩",
        step: "03. Managed Integration",
        description: "Oversaw physical construction with a deliberate mentorship framework, pairing junior builders with senior members on critical assemblies. Enforced a repairability-first build standard: every subsystem was required to be field-serviceable with standard tools in under three minutes — a constraint that directly influenced fastener selection, wire routing, and component access geometry.",
        photos: [
          { src: "/images/FRC2025managedintegration.jpg", caption: "Supervised chassis assembly" },
          { src: "/images/FRC2025managedIntegration2.jpg", caption: "Junior member mentorship" }
        ]
      },
      {
        icon: "📊",
        step: "04. Iterative Performance Tuning",
        description: "Mandated the start of mechanism testing after mechanical completion as well as electrical being fully finished — by using bench power supplies for early validation. This revealed three failure modes (belt tension drop, intake geometry interference, and elevator inconsistency) that were corrected with ten days remaining in build season rather than discovered in the competition pit.",
        photos: [
          { src: "/images/FRC2025IterativePerformance.jpg", caption: "Mechanism load testing" },
          { src: "/images/FRC2025IterativePerformance1.jpg", caption: "Control calibration sessions" }
        ]
      },
      {
        icon: "🚀",
        step: "05. Delivery & Leadership",
        description: "Spearheaded the mechanical design and assembly of a highly intricate, multi-stage robotic architecture that pushed the team's fabrication capabilities. Navigated significant mechanical tolerances and dynamic system faults through rapid iteration and aggressive pit-troubleshooting. Synthesized these real-world engineering challenges into a comprehensive failure-analysis and design framework for the incoming 2026 leadership cohort.",
        photos: [
          { src: "/images/FRC2025DeliveryLeadership.jpeg", caption: "Competition field performance" },
          { src: "/images/FRC2025DeliveryLeadership2.jpg", caption: "2025 team roster" }
        ]
      }
    ]
  },

  frc2024: {
    title: "FRC 2024: Mechanical",
    role: "Mechanical Contributor",
    award: "Rookie All-Star | Worlds Qualifier",
    status: "COMPLETED",
    label: "2024 Season",
    overview: "Designed, fabricated, and integrated mechanical systems for Team 9659's 2024 FRC robot under a strict six-week build window. Operated within a fixed $5,000 budget and 125 lb weight limit, producing a structurally sound chassis and functional game mechanisms from raw aluminum stock — while simultaneously building the team's first systematic fabrication documentation.",
    techStack: ["CAD Modeling", "Aluminum Fabrication", "Drivetrain Design", "Mechanism Prototyping", "Pit Repair Strategy", "FRC Rules Analysis"],
    keyAchievements: [
      "Delivered competition-ready robot within 6-week build season",
      "Operated under $5,000 budget and 125 lb weight constraint",
      "Established team's first fabrication documentation standards",
      "Rookie All-Star Award — recognizing outstanding contribution in a first season",
      "Qualified for FRC World Championship in rookie season"
    ],
    images: [
      "/images/FRC2024Banner.jpg",
      "/images/FRC2024Slideshow1.jpg",
      "/images/FRC2024Slideshow2.jpg"
    ],
    workflow: [
      {
        icon: "📋",
        step: "01. Game Analysis & Requirements",
        description: "Dissected the 2024 FRC game manual to extract binding constraints: 125 lb weight limit, $5,000 parts budget, and a 120\" frame perimeter. Developed a scoring opportunity matrix ranking all game actions by expected point yield versus manufacturing difficulty — a  tool that focused limited build time on the two mechanisms with the highest return on investment.",
        photos: [
          { src: "/images/FRC2024GameAnalysis.jpg", caption: "Game scoring opportunity analysis" },
          { src: "/images/FRC2024Finance.jpg", caption: "Budget and weight allocation" }
        ]
      },
      {
        icon: "⚙️",
        step: "02. Conceptual Design & Triage",
        description: "Benchmarked six drivetrain configurations against the team's available tools and operator experience level. Selected a KIT Bot for its proven reliability and straightforward repairability — prioritizing a design the team could easily rebuild and repair.",
        photos: [
          { src: "/images/FRC2024ConceptualDesign.jpg", caption: "Mechanism concept sketches" },
          { src: "/images/FRC2024ConceptualDesign2.JPG", caption: "Early CAD layout and sizing" }
        ]
      },
      {
        icon: "🛠️",
        step: "03. Fabrication & Prototyping",
        description: "Manufactured aluminum structural components using basic tools, producing the chassis frame, gearbox plates, and mechanism mounting. Validated two intake prototype iterations that failed under game-piece load before arriving at a geometry that consistently handled the game object at speed — each failure directly informing the final production design.",
        photos: [
          { src: "/images/FRC2024FabricationandPrototyping.jpg", caption: "Aluminum machining operations" },
          { src: "/images/FRC2024FabricationandPrototyping2.jpg", caption: "Electrical and mechanical integration" }
        ]
      },
      {
        icon: "🏎️",
        step: "04. Testing & Stress Validation",
        description: "Ran 40+ hours of drive practice and mechanism cycling across two weeks of pre-competition testing. Identified and resolved four critical failure modes: a loose gearbox pinion, misaligned intake rollers, weak hanging mechanism, and a weld fatigue point on the chassis corner. All four would have caused match DNPs without early discovery.",
        photos: [
          { src: "/images/FRC2024TestingandValidation.jpg", caption: "Full-field drive testing" },
          { src: "/images/FRC2024TestingandValidation2.jpg", caption: "Pit repair stress testing" }
        ]
      },
      {
        icon: "🏁",
        step: "05. Competition & Reflection",
        description: "Competed with zero structural failures across all qualifying matches. The season's primary engineering insight — that repairability and simplicity are performance multipliers at competition — directly shaped the 2025 team management strategy. Formalized this lesson into a design constraint document adopted as standing policy for subsequent seasons.",
        photos: [
          { src: "/images/FRC2024CompetetionandReflection.jpg", caption: "Robot performing on match field" },
          { src: "/images/FRC2024CompetetionReflection1.jpg", caption: "Team 9659 at competition" }
        ]
      }
    ]
  },

  vex2024: {
    title: "VEX Robotics",
    role: "Programmer & Mechanical Builder",
    status: "COMPLETED",
    award: "Design Award Winner | Worlds Qualifier",
    label: "2024 Season",
    overview: "Designed, built, and programmed a high-performance competition robot for the 2024 VEX Robotics season. Achieved the Design Award at Ontario Provincials — awarded exclusively for engineering process excellence, not just performance — and earned a VEX World Championship qualification by maintaining a documented, evidence-based engineering notebook from day one.",
    techStack: ["C++ / PROS Kernel", "PID Control", "Sensor Fusion", "VEX V5 Hardware", "Autonomous Path Planning", "Drivetrain Optimization"],
    keyAchievements: [
      "Design Award — Ontario Provincials (engineering process recognition)",
      "VEX World Championship qualifier",
      "PID-tuned autonomous with >95% repeatability in testing",
      "Sub-100ms driver control latency on custom PROS firmware"
    ],
    images: [
      "/images/VexProjectBanner.jpeg",
      "/images/VEXSlideshow1.JPG",
      "/images/VexSlideshow2.png",
      "/images/VexSlideshow3.png"
    ],
    workflow: [
      {
        icon: "🏆",
        step: "01. Design Requirements & Documentation",
        description: "Established a game-specific engineering notebook protocol from competition day one — capturing every design decision, iteration rationale, and test result with timestamps and engineering justification. This level of documentation rigor is the direct prerequisite for the Design Award, which judges specifically evaluate for evidence of systematic engineering process rather than subjective robot performance.",
        photos: [
          { src: "/images/VexBook.png", caption: "Engineering notebook — full season" }
        ]
      },
      {
        icon: "💻",
        step: "02. C++/PROS Software Architecture",
        description: "Wrote the full software stack in C++ on the PROS kernel — bypassing VEX's default SDK to access lower-level motor and sensor APIs. Implemented a dual-PID control system: one loop governing drivetrain heading correction via IMU fusion during autonomous, and a second controlling intake velocity under variable game-piece load. Achieved greater than 95% path repeatability in controlled testing.",
        photos: [
          { src: "/images/VexCodeSnippet.JPG", caption: "PID and autonomous path code" }
        ]
      },
      {
        icon: "🔧",
        step: "03. Mechanical Fabrication & Hybridization",
        description: "Designed and fabricated the drivetrain using aluminum C-channel, precision-spaced bearing blocks, and nylon-insert lock nuts to eliminate flex under competition impact loads. Optimized the intake funnel geometry through five physical iterations to achieve consistent game-object capture at full drive speed — a reliability requirement that directly influenced the software's intake speed curves.",
        photos: [
          { src: "/images/VexMechanicalRabrication1jpg.jpg", caption: "Drivetrain and intake assembly" }
        ]
      },
      {
        icon: "🧪",
        step: "04. Validation & Precision Tuning",
        description: "Executed structured match simulations against a documented test matrix covering: battery voltage depletion curves, field tile friction variance, and drive motor temperature scaling. Identified that a 12% reduction in autonomous speed constants was required to maintain consistent path accuracy at the end of a depleted battery cycle — a fix that eliminated the most common failure mode seen in peer teams.",
        photos: [
          { src: "/images/ValidationandPrecisionVex.jpg", caption: "Autonomous field calibration runs" },
          { src: "/images/ValidationandPrecision1VEX.jpg", caption: "Battery-variance performance testing" }
        ]
      },
      {
        icon: "🌎",
        step: "05. Provincials & World Championship",
        description: "Competed at Ontario Provincials and the VEX World Championship. Received the Design Award at Provincials — a judge-evaluated recognition specifically honoring engineering process quality, systematic documentation, and design iteration rigor. The award validated a core belief: that exceptional results in competitive robotics emerge from disciplined engineering methodology, not just raw mechanical talent.",
        photos: [
          { src: "/images/VEXProvincials.jpg", caption: "Ontario Provincials competition" },
          { src: "/images/VEXWorlds2.jpg", caption: "VEX Worlds 2024" }
        ]
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
              src={img("/images/opencv-placeholder.svg")} 
              alt="OpenCV Robotic Arm — Concept Schematic" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute top-4 left-4 bg-[#F59E0B] text-[#0F1117] font-mono text-[10px] font-bold px-2 py-1 rounded tracking-wider">
              ACTIVE PROJECT
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-1">Computer Vision Robotic Arm</h3>
            <p className="text-[#F59E0B] text-sm mb-6">Autonomous Object Detection & Retrieval System</p>
            
            <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded p-4 mb-6">
              <div className="font-mono text-[10px] text-[#F59E0B] tracking-widest uppercase mb-2">Current Challenge</div>
              <p className="text-sm text-slate-300">Designing backlash-minimized joints in CAD to achieve millimeter-level precision — the mechanical precision floor required for reliable OpenCV coordinate tracking.</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm"><span className="text-emerald-400">✓</span> <span className="text-slate-500 line-through">Kinematic model & torque budget</span></div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#F59E0B]"><span className="animate-spin inline-block">⟳</span> <span>Mechanical CAD Design</span></div>
              <div className="flex items-center gap-3 text-sm text-slate-500"><span>○</span> <span>Vision Integration (OpenCV)</span></div>
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
              
              {/* Banner Image Area — fixed height, always object-cover with dark bg fallback */}
              <div className="h-56 w-full bg-[#0D1018] relative overflow-hidden border-b border-[#1E2940]">
                <img 
                  src={img(project.images[0] || "/jm-logo.png")} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = img('/jm-logo.png'); 
                    e.target.className="absolute inset-0 w-full h-full object-contain p-12 opacity-40"; 
                  }}
                />
                {/* Subtle gradient so text badge always reads */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117]/60 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Gold Award Badge */}
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
                  <span className="text-[10px] font-mono text-slate-500">
                    {project.label}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs text-[#F59E0B] font-mono mb-4">{project.role}</p>

                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow line-clamp-4">
                  {project.overview}
                </p>

                {/* Tech Stack Tags */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span key={tech} className="font-mono text-[9px] bg-[#1E2940] text-slate-400 px-2 py-0.5 rounded border border-[#2A3550] uppercase tracking-wide">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="font-mono text-[9px] text-slate-600 px-1 py-0.5">+{project.techStack.length - 4} more</span>
                    )}
                  </div>
                )}

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    if (project.images.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex, project.images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

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

      {/* CINEMATIC HERO SECTION */}
      <header className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden border-b border-[#1E2940] group flex items-center">
          <div className="absolute inset-0 bg-[#0F1117]/50 group-hover:bg-[#0F1117]/30 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent"></div>
          
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

      {/* KEY ACHIEVEMENTS + TECH STACK PANEL */}
      {(project.keyAchievements || project.techStack) && (
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 border-b border-[#1E2940]">
          
          {/* Key Achievements */}
          {project.keyAchievements && (
            <div className="bg-[#161B27] border border-[#1E2940] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-[0.3em]">Key Achievements</span>
              </div>
              <ul className="space-y-3">
                {project.keyAchievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-emerald-400 font-mono text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <div className="bg-[#161B27] border border-[#1E2940] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                <span className="font-mono text-[10px] text-[#60A5FA] uppercase tracking-[0.3em]">Technologies & Methods</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="font-mono text-[10px] bg-[#0F1117] text-slate-300 px-3 py-1.5 rounded-lg border border-[#1E2940] uppercase tracking-wide hover:border-[#60A5FA]/40 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* IMAGE CAROUSEL */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="relative w-full aspect-video md:h-[500px] bg-[#0D1018] rounded-2xl overflow-hidden border border-[#1E2940] group mb-24 shadow-2xl">
            {/* Blurred backdrop fills container regardless of image aspect ratio */}
            <img
              src={img(project.images[currentImageIndex])}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-40"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[#0D1018]/30"></div>
            {/* Foreground image: contained, never cropped */}
            <img 
              src={img(project.images[currentImageIndex])} 
              alt={project.title}
              className="relative w-full h-full object-contain"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = img('/jm-logo.png'); 
                e.target.className = "relative w-full h-full object-contain p-16 opacity-30";
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
      </div>

      {/* TECHNICAL WORKFLOW */}
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
                {phase.photos?.map((photo, photoIndex) => (
                  <div key={photoIndex} className="group bg-[#161B27] border border-[#1E2940] rounded-2xl overflow-hidden flex flex-col">
                    
                    {/* Image Container — blurred backdrop fills the box, foreground image is fully visible (no crop, no empty space) */}
                    <div className="w-full h-56 relative overflow-hidden bg-[#0D1018]">
                      {/* Blurred backdrop: same image, fills entire container with cover, blurred + dimmed */}
                      <img
                        src={img(photo.src || "/jm-logo.png")}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      {/* Subtle dark veil over the backdrop for legibility */}
                      <div className="absolute inset-0 bg-[#0D1018]/40"></div>
                      {/* Foreground image: contained, never cropped, never stretched */}
                      <img 
                        src={img(photo.src || "/jm-logo.png")} 
                        alt={photo.caption}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { 
                          e.target.onerror = null; 
                          e.target.src = img('/jm-logo.png'); 
                          e.target.className="absolute inset-0 w-full h-full object-contain p-10 opacity-30"; 
                        }}
                      />
                    </div>

                    {/* Caption Bar */}
                    <div className="p-4 bg-[#0F1117]/90 flex items-center justify-between border-t border-[#1E2940]">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest truncate pr-2">
                        {photo.caption}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] flex-shrink-0"></div>
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
