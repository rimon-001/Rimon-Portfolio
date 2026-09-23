import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Terminal,
  Code2,
  Cpu,
  Shield,
  ExternalLink,
  Mail,
  Sun,
  Moon,
  Command,
  Search,
  Check,
  Copy,
  ArrowUpRight,
  ChevronRight,
  FolderGit2,
  Sparkles,
  Layers,
  Activity,
  Calendar,
  Clock,
  Send,
  Compass,
  Laptop,
  BookOpen,
  ArrowUp,
  X,
  Menu,
  FileText,
  Play,
  Maximize2
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const PORTFOLIO_DATA = {
  name: "Rimon",
  title: "Software Engineering Student & Developer",
  status: "Available for Internships & Collaboration",
  location: "Dhaka, Bangladesh",
  year: "2026",
  bio: "I build practical software, explore modern web architectures, and delve deeply into systems, networking, and cybersecurity. Focused on engineering high-integrity, performance-driven tools.",
  socials: {
    github: "https://github.com/rimon-001",
    linkedin: "https://www.linkedin.com/in/md-jahid-hasan-rimon-3801952b5/",
    email: "abedrana100power@gmail.com",
    resume: "#"
  },
  now: [
    {
      id: "01",
      title: "Strengthening Systems & Algorithms",
      desc: "Deep diving into C memory management, data structures, pointer arithmetic, and algorithmic complexity.",
      tags: ["C", "Algorithms", "Memory", "POSIX"]
    },
    {
      id: "02",
      title: "Modern Full-Stack Architectures",
      desc: "Architecting responsive, accessible web interfaces using React, Next.js paradigms, and Tailwind CSS.",
      tags: ["React", "TypeScript", "Tailwind", "State Design"]
    },
    {
      id: "03",
      title: "Cybersecurity & Linux Hardening",
      desc: "Investigating packet forensics, Linux kernel system calls, secure networking protocols, and CTF challenges.",
      tags: ["Linux", "Wireshark", "Networking", "Pen-Testing"]
    }
  ],
  stack: [
    {
      category: "Languages",
      skills: [
        { name: "C", level: "Primary", detail: "Low-level logic, memory pointers, CLI utilities" },
        { name: "Python", level: "Intermediate", detail: "Scripting, automation, network socket experiments" },
        { name: "JavaScript / TypeScript", level: "Advanced", detail: "Modern ES6+, typed interfaces, async operations" }
      ]
    },
    {
      category: "Frontend & Web",
      skills: [
        { name: "React", level: "Advanced", detail: "Component architecture, hooks, lifecycle, performance" },
        { name: "Next.js", level: "Intermediate", detail: "App router, SSR/SSG concepts, server actions" },
        { name: "Tailwind CSS", level: "Mastery", detail: "Design tokens, bespoke layouts, micro-animations" },
        { name: "HTML5 / Semantic Web", level: "Mastery", detail: "Accessibility (a11y), responsive structures" }
      ]
    },
    {
      category: "Systems & Tooling",
      skills: [
        { name: "Git & GitHub", level: "Daily Workflow", detail: "Atomic commits, branching models, CI actions" },
        { name: "Linux / POSIX", level: "Daily Driver", detail: "Bash scripting, permission trees, systemd" },
        { name: "VS Code & Neovim", level: "Editor", detail: "Custom keymaps, LSP integration, efficiency" }
      ]
    },
    {
      category: "Currently Exploring",
      skills: [
        { name: "Cybersecurity Ops", level: "Exploring", detail: "Vulnerability analysis, OWASP Top 10, hash mechanics" },
        { name: "Computer Networks", level: "Exploring", detail: "TCP/IP stack, socket programming, DNS, HTTP/3" }
      ]
    }
  ],
  projects: [
    {
      id: "land-calc",
      number: "01",
      title: "Land Measurement & Cadastral Engine",
      subtitle: "Practical Surveying & Calculation Toolkit",
      description: "A precision mathematical calculation engine built to digitize regional land geometry, converting between legacy units (Katha, Bigha, Acre, Decimal) and Cartesian coordinate plots with boundary perimeter visualization.",
      tech: ["C Logic", "JavaScript", "Math Geometry", "HTML5 Canvas"],
      category: "Practical Software",
      github: "https://github.com",
      demoUrl: "interactive",
      previewType: "calculator"
    },
    {
      id: "net-probe",
      number: "02",
      title: "NetShield: Network Packet & Port Inspector",
      subtitle: "Cybersecurity & Protocol Visualization Tool",
      description: "A developer tool designed to demonstrate handshake sequences, simulate packet telemetry, inspect OSI model headers, and analyze simulated network threats with instant latency profiling.",
      tech: ["Python Sockets", "WebSockets", "Cybersecurity", "UI Simulation"],
      category: "Security & Systems",
      github: "https://github.com",
      demoUrl: "interactive",
      previewType: "packet-tracer"
    },
    {
      id: "dev-hub",
      number: "03",
      title: "Nexus CLI: Developer System Dashboard",
      subtitle: "Minimalist Workspace Telemetry & Task Pipeline",
      description: "A lightweight terminal-like workstation utility orchestrating active memory consumption, Git branch statuses, and automated build scripts into a unified keyboard-centric command environment.",
      tech: ["TypeScript", "Tailwind CSS", "Linux CLI", "State Engine"],
      category: "Developer Tooling",
      github: "https://github.com",
      demoUrl: "interactive",
      previewType: "nexus"
    }
  ],
  journey: [
    {
      year: "2026",
      quarter: "Q1 — Present",
      title: "Software Engineering Core & Security Research",
      description: "Building production-grade client apps, contributing to open-source workflows, and actively participating in cybersecurity capture-the-flag (CTF) challenges.",
      status: "In Progress"
    },
    {
      year: "2025",
      quarter: "Mid — Late 2025",
      title: "Systems Programming & Web Exploration",
      description: "Wrote core algorithmic modules in C, mastered DOM manipulation and modern component state modeling in React, and setup automated developer environments in Linux.",
      status: "Completed"
    },
    {
      year: "2024",
      quarter: "Early 2024",
      title: "The Ignition Point",
      description: "Discovered computer science fundamentals, wrote first foundational C programs, and built foundational algorithmic problem-solving habits.",
      status: "Foundation"
    }
  ],
  beyondCode: [
    { label: "Continuous Learning", icon: "BookOpen", hint: "Daily tech papers & security research" },
    { label: "Minimalist Ergonomics", icon: "Laptop", hint: "Clean keymaps, tactile productivity" },
    { label: "Systems Architecture", icon: "Cpu", hint: "Appreciating how hardware talks to OS" },
    { label: "Open Source Ethos", icon: "FolderGit2", hint: "Building in public & sharing tools" },
    { label: "Problem Solving", icon: "Compass", hint: "Mathematical curiosity & algorithmic puzzles" }
  ]
};

function generateContributionGrid() {
  const weeks = 28;
  const daysPerWeek = 7;
  const grid = [];
  let totalCommits = 0;
  
  for (let w = 0; w < weeks; w++) {
    const weekDays = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const factor = (w * 7 + d);
      const intensitySeed = (Math.sin(factor * 0.45) + Math.cos(factor * 0.28) + 2) / 4;
      const count = Math.random() > 0.32 ? Math.floor(intensitySeed * 7 + Math.random() * 3) : 0;
      totalCommits += count;
      weekDays.push({
        day: d,
        week: w,
        count: count,
        date: `2026-W${w + 1}-D${d + 1}`
      });
    }
    grid.push(weekDays);
  }
  return { grid, totalCommits };
}

function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState("whoami");
  const [commandInput, setCommandInput] = useState("");
  const [customHistory, setCustomHistory] = useState([]);
  const [pingLatency, setPingLatency] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setPingLatency(Math.floor(14 + Math.random() * 8));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const clean = commandInput.trim().toLowerCase();
    if (!clean) return;

    let output = "";
    switch (clean) {
      case "help":
        output = "Available: whoami, status, stack, cybersecurity, clear, ping, date";
        break;
      case "whoami":
        output = "Rimon — Software Engineering Student & Full-Stack / Systems Developer";
        break;
      case "status":
        output = "● STATUS: Online | Location: Bangladesh | Ready for projects & internships";
        break;
      case "stack":
        output = "Core: C, Python, JavaScript, TypeScript, React, Next.js, Tailwind, Linux";
        break;
      case "cybersecurity":
        output = "🛡️ Active tracks: Network Packet Forensics, Linux Hardening, OWASP Core";
        break;
      case "ping":
        output = `64 bytes from rimon.dev: icmp_seq=1 ttl=58 time=${pingLatency} ms (nominal)`;
        break;
      case "date":
        output = new Date().toUTCString();
        break;
      case "clear":
        setCustomHistory([]);
        setCommandInput("");
        return;
      default:
        output = `zsh: command not found: ${clean}. Try 'help' for commands.`;
    }

    setCustomHistory((prev) => [...prev, { cmd: commandInput, out: output }]);
    setCommandInput("");
  };

  return (
    <div className="w-full rounded-xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/70 inline-block"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500/70 inline-block"></span>
          <span className="h-3 w-3 rounded-full bg-emerald-500/70 inline-block"></span>
          <span className="ml-2 text-zinc-400 text-[11px] font-medium tracking-tight">rimon@se-station:~</span>
        </div>

        <div className="flex items-center gap-1 bg-zinc-950/60 p-1 rounded-lg border border-zinc-800/50">
          <button
            onClick={() => setActiveTab("whoami")}
            className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === "whoami" ? "bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/30" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            whoami
          </button>
          <button
            onClick={() => setActiveTab("probe")}
            className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === "probe" ? "bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/30" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            sec-probe
          </button>
          <button
            onClick={() => setActiveTab("cli")}
            className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === "cli" ? "bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/30" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            interactive $
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 min-h-[260px] max-h-[320px] overflow-y-auto space-y-3 leading-relaxed text-zinc-300">
        {activeTab === "whoami" && (
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-400">rimon@dev</span>
              <span className="text-zinc-500">:</span>
              <span className="text-indigo-400">~/profile</span>
              <span className="text-zinc-500">$</span>
              <span className="text-zinc-100 font-semibold">cat identity.json</span>
            </div>
            <pre className="text-indigo-300/90 text-[11px] bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/50 overflow-x-auto">
{`{
  "developer": "Rimon",
  "track": "B.Sc Software Engineering (2026)",
  "specialties": ["Modern Web", "C Systems", "Networking"],
  "cybersecurity": {
    "focus": ["Linux Forensics", "Socket Analysis", "Vulnerability Defense"],
    "mindset": "Defense in depth & clean memory execution"
  },
  "status": "● Building high-leverage products"
}`}
            </pre>
            <div className="flex items-center gap-2 text-zinc-400 pt-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Summer / Fall 2026 Internships</span>
            </div>
          </div>
        )}

        {activeTab === "probe" && (
          <div className="space-y-2 text-[11px]">
            <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800/50 pb-2">
              <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                SECURITY TELEMETRY LOG
              </span>
              <span className="text-emerald-400">TLS 1.3 · ENCRYPTED</span>
            </div>
            <div className="space-y-1.5 font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>[PROBE:01] Kernel Socket Layer</span>
                <span className="text-emerald-400">STABLE (0 leaks)</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>[PROBE:02] Wireshark Trace Buffer</span>
                <span className="text-indigo-300">LISTEN :8080 :443</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>[PROBE:03] Cryptographic Nonce Check</span>
                <span className="text-emerald-400">VALIDATED SHA-256</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>[PROBE:04] Latency Ping (Local Host)</span>
                <span className="text-yellow-400">{pingLatency} ms response</span>
              </div>
            </div>
            <p className="text-zinc-500 text-[10px] mt-2 italic">
              "Understanding vulnerabilities is the prerequisite to constructing unshakeable software."
            </p>
          </div>
        )}

        {activeTab === "cli" && (
          <div className="space-y-2">
            <div className="text-zinc-400 text-[11px]">
              Welcome to Rimon's micro-shell. Type <span className="text-indigo-300 font-bold">help</span> to list commands.
            </div>
            {customHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <span className="text-emerald-400">$</span>
                  <span className="text-zinc-200">{item.cmd}</span>
                </div>
                <div className="text-indigo-300/90 pl-3 border-l-2 border-indigo-500/30 text-[11px]">
                  {item.out}
                </div>
              </div>
            ))}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="type: whoami, status, ping, clear..."
                className="w-full bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-600 text-xs"
              />
            </form>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-zinc-800/70 bg-zinc-900/40 px-4 py-2 text-[10px] text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            zsh 5.9
          </span>
          <span>UTF-8</span>
        </div>
        <span className="text-zinc-400 font-medium">Dhaka, BD (UTC+6)</span>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [katha, setKatha] = useState(3.5);
  const [bighaResult, setBighaResult] = useState(0);
  const [sqFtResult, setSqFtResult] = useState(0);
  const [decimalResult, setDecimalResult] = useState(0);

  const [packets, setPackets] = useState([
    { id: 1, proto: "TCP", src: "192.168.1.104", dst: "52.84.12.8", info: "SYN [Seq=0 Win=64240]", state: "normal" },
    { id: 2, proto: "TLSv1.3", src: "52.84.12.8", dst: "192.168.1.104", info: "Client Hello, Server Hello", state: "secure" },
    { id: 3, proto: "DNS", src: "192.168.1.1", dst: "8.8.8.8", info: "Standard query A rimon.dev", state: "normal" }
  ]);

  useEffect(() => {
    const val = parseFloat(katha) || 0;
    const sqFt = val * 720;
    setSqFtResult(sqFt.toLocaleString());
    setBighaResult((val / 20).toFixed(3));
    setDecimalResult((sqFt / 435.6).toFixed(2));
  }, [katha]);

  const addSimulatedPacket = () => {
    const protocols = ["TCP", "UDP", "HTTPS", "ARP", "ICMP"];
    const randProto = protocols[Math.floor(Math.random() * protocols.length)];
    const newPacket = {
      id: Date.now(),
      proto: randProto,
      src: `192.168.0.${Math.floor(Math.random() * 200 + 10)}`,
      dst: `10.0.4.${Math.floor(Math.random() * 100 + 1)}`,
      info: randProto === "ICMP" ? "Echo (ping) request" : "Payload transmission 1024 bytes",
      state: randProto === "ARP" ? "warning" : "normal"
    };
    setPackets((prev) => [newPacket, ...prev.slice(0, 4)]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-zinc-200">
        <div className="flex items-center justify-between border-b border-zinc-800/80 px-6 py-4 bg-zinc-900/50">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Play className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-semibold text-zinc-100 text-sm tracking-tight">{project.title}</h3>
              <p className="text-zinc-400 text-xs">Live Interactive Simulator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {project.previewType === "calculator" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Input Land Size in Katha (Regional Benchmark):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={katha}
                    onChange={(e) => setKatha(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700/70 rounded-lg px-3.5 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-indigo-500 font-mono"
                  />
                  <span className="text-sm font-semibold text-indigo-400 px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    Katha
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-center">
                <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Total Area</div>
                  <div className="text-lg font-bold text-zinc-100 mt-1">{sqFtResult}</div>
                  <div className="text-[10px] text-indigo-400">Square Feet (sq.ft)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Bigha Metric</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">{bighaResult}</div>
                  <div className="text-[10px] text-zinc-400">1 Bigha = 20 Katha</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Decimals (Shatak)</div>
                  <div className="text-lg font-bold text-purple-400 mt-1">{decimalResult}</div>
                  <div className="text-[10px] text-zinc-400">Standard Deed Unit</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 flex flex-col items-center justify-center">
                <div className="text-xs text-zinc-400 mb-2">Mathematical Plot Grid (Simulation)</div>
                <div className="w-full h-32 rounded-lg bg-zinc-950 border border-dashed border-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <div 
                    className="border-2 border-indigo-400/80 bg-indigo-500/15 transition-all duration-300 rounded flex items-center justify-center text-xs font-mono text-indigo-300"
                    style={{
                      width: `${Math.min(Math.max((katha || 1) * 24, 60), 280)}px`,
                      height: `${Math.min(Math.max((katha || 1) * 16, 40), 100)}px`
                    }}
                  >
                    {katha} Katha Plot
                  </div>
                  <span className="absolute bottom-1 right-2 text-[10px] text-zinc-600 font-mono">Scale 1:500</span>
                </div>
              </div>
            </div>
          )}

          {project.previewType === "packet-tracer" && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 text-xs">Live Captured Packets (Local Sniffer Interface)</span>
                <button
                  onClick={addSimulatedPacket}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-sans font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Activity className="w-3.5 h-3.5" />
                  Capture Packet
                </button>
              </div>

              <div className="space-y-2">
                {packets.map((pkt) => (
                  <div
                    key={pkt.id}
                    className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {pkt.proto}
                      </span>
                      <span className="text-zinc-300 text-[11px]">{pkt.src} &rarr; {pkt.dst}</span>
                    </div>
                    <span className="text-zinc-400 text-[11px] truncate">{pkt.info}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-zinc-900/30 rounded-lg border border-zinc-800 text-[11px] text-zinc-400">
                💡 <strong className="text-zinc-300">Engineering Note:</strong> Packet parsing verifies checksum integrity and inspects socket endpoints before passing payloads down to userland memory.
              </div>
            </div>
          )}

          {project.previewType === "nexus" && (
            <div className="space-y-3 font-mono text-xs text-zinc-300">
              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2">
                <div className="text-indigo-400 font-bold">$ nexus --system-health</div>
                <div className="text-emerald-400">✔ Memory: 342MB / 16GB (Minimal Footprint)</div>
                <div className="text-zinc-300">✔ Active Git Daemons: 3 repositories watched</div>
                <div className="text-zinc-300">✔ Subprocess latency: 4.2ms avg loop</div>
                <div className="text-purple-400">⚡ Build tool: Vite + Clang toolchain linked</div>
              </div>
              <p className="text-zinc-400 text-xs font-sans">
                Engineered to replace bloated dashboard GUIs with swift terminal-native commands.
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-3.5 bg-zinc-900/30">
          <span className="text-xs text-zinc-400">Module: {project.category}</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg border border-zinc-700/80 text-xs text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommandPalette({ isOpen, onClose, onNavigate, onToggleTheme, currentTheme }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const commandItems = useMemo(() => [
    { id: "work", title: "Go to Selected Work", section: "work", icon: Code2, group: "Navigation" },
    { id: "now", title: "View 'Now' Section", section: "now", icon: Activity, group: "Navigation" },
    { id: "stack", title: "Inspect Tech Stack", section: "stack", icon: Layers, group: "Navigation" },
    { id: "journey", title: "View Engineering Journey", section: "journey", icon: Calendar, group: "Navigation" },
    { id: "contact", title: "Let's Build Something (Contact)", section: "contact", icon: Mail, group: "Navigation" },
    { id: "github", title: "Visit GitHub Profile", url: PORTFOLIO_DATA.socials.github, icon: GithubIcon, group: "External" },
    { id: "linkedin", title: "Connect on LinkedIn", url: PORTFOLIO_DATA.socials.linkedin, icon: LinkedinIcon, group: "External" },
    { id: "theme", title: `Switch to ${currentTheme === "dark" ? "Light" : "Dark"} Mode`, action: onToggleTheme, icon: currentTheme === "dark" ? Sun : Moon, group: "Preferences" },
    { id: "copy-email", title: "Copy Email Address", action: () => navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email), icon: Copy, group: "Preferences" },
  ], [currentTheme, onToggleTheme]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return commandItems;
    return commandItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }, [commandItems, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800/80 bg-zinc-900/50">
          <Search className="w-4 h-4 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
          />
          <button
            onClick={onClose}
            className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 cursor-pointer"
          >
            ESC
          </button>
        </div>

        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.section) onNavigate(item.section);
                    if (item.url) window.open(item.url, "_blank");
                    if (item.action) item.action();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 border border-zinc-800">
                      <IconComp className="w-4 h-4" />
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">{item.group}</span>
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 bg-zinc-900/60 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between">
          <span>Use ⌘K anytime to browse quickly</span>
          <span className="font-mono">Rimon · Portfolio</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactState, setContactState] = useState({ name: "", email: "", message: "", status: "idle" });

  const [bdTime, setBdTime] = useState("");
  const { grid: commitGrid, totalCommits } = useMemo(() => generateContributionGrid(), []);
  const [hoveredCommit, setHoveredCommit] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setBdTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactState.email || !contactState.message) return;
    setContactState((prev) => ({ ...prev, status: "sending" }));
    setTimeout(() => {
      setContactState({ name: "", email: "", message: "", status: "success" });
      setTimeout(() => {
        setContactState((prev) => ({ ...prev, status: "idle" }));
      }, 5000);
    }, 1200);
  };

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-[#08090A] text-[#F5F5F5]" : "bg-[#F8F9FA] text-[#111827]";
  const cardBg = isDark ? "bg-zinc-950/60 border-zinc-800/80" : "bg-white border-zinc-200 shadow-sm";
  const mutedText = isDark ? "text-zinc-400" : "text-zinc-600";

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 ${bgClass}`}>
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onNavigate={scrollToSection}
        onToggleTheme={toggleTheme}
        currentTheme={theme}
      />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4">
        <nav className={`w-full max-w-4xl px-4 py-2.5 rounded-full border backdrop-blur-xl shadow-lg transition-all duration-200 flex items-center justify-between ${
          isDark 
            ? "bg-zinc-950/70 border-zinc-800/90 shadow-black/40" 
            : "bg-white/80 border-zinc-200/90 shadow-zinc-300/40"
        }`}>
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight group"
          >
            <span className="h-6 w-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
              R
            </span>
            <span className="font-mono tracking-wider text-xs uppercase font-bold text-zinc-100">
              {PORTFOLIO_DATA.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-xs font-medium">
            <button
              onClick={() => scrollToSection("work")}
              className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${isDark ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("now")}
              className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${isDark ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
            >
              Now
            </button>
            <button
              onClick={() => scrollToSection("stack")}
              className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${isDark ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
            >
              Stack
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${isDark ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${isDark ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCmdOpen(true)}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border transition-all cursor-pointer ${
                isDark 
                  ? "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700" 
                  : "bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
                isDark 
                  ? "border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50" 
                  : "border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden rounded-full text-zinc-400 hover:text-zinc-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-30 p-4 rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 md:hidden">
          {["work", "now", "stack", "journey", "contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:bg-zinc-800/70 hover:text-white capitalize transition-colors"
            >
              {sec}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 px-2">
            <span>Command Menu</span>
            <button
              onClick={() => { setMobileMenuOpen(false); setCmdOpen(true); }}
              className="px-2.5 py-1 rounded bg-zinc-800 text-indigo-400 font-mono"
            >
              Open ⌘K
            </button>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-28">
        <section id="hero" className="pt-8 sm:pt-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{PORTFOLIO_DATA.status}</span>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-zinc-400 hidden sm:inline">{PORTFOLIO_DATA.location} · {PORTFOLIO_DATA.year}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-mono tracking-widest text-indigo-400 font-semibold uppercase">
                  Available for Internships · 2026
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-indigo-300">Rimon</span>.
                  <br />
                  <span className={`text-2xl sm:text-4xl font-bold ${mutedText} block mt-1`}>
                    Software Engineering Student & Developer
                  </span>
                </h1>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${mutedText}`}>
                {PORTFOLIO_DATA.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => scrollToSection("work")}
                  className="px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Selected Work</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-3 rounded-xl border font-medium text-xs sm:text-sm transition-all flex items-center gap-2 ${
                    isDark 
                      ? "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200" 
                      : "border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800"
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className={`px-4 py-3 rounded-xl border font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                    isDark 
                      ? "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200" 
                      : "border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800"
                  }`}
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? "Email Copied" : "Copy Email"}</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span>Ashulia / Dhaka, BD</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  Local Time: <strong className="text-zinc-400 font-mono">{bdTime || "03:00 AM"}</strong>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <InteractiveTerminal />
            </div>
          </div>
        </section>

        <section id="now" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                Telemetry
              </span>
              <h2 className="text-2xl font-bold tracking-tight">What I'm Working On Right Now</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">Updated for 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.now.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:border-indigo-500/40 ${cardBg}`}
              >
                <div className="text-xs font-mono text-indigo-400 font-bold mb-3">
                  {item.id} // FOCUS
                </div>
                <h3 className="text-base font-semibold mb-2 text-zinc-100">
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${mutedText}`}>
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                Portfolio Centerpiece
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Selected Engineering Work</h2>
            </div>
            <p className={`text-xs max-w-sm ${mutedText}`}>
              Practical utilities and systems built with zero fluff and rigorous architecture.
            </p>
          </div>

          <div className="space-y-8">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <div
                key={proj.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 group hover:border-zinc-700 ${cardBg}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-indigo-400">
                          {proj.number}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                        <span className="text-xs uppercase font-mono text-zinc-500 tracking-wider">
                          {proj.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-indigo-300 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-medium text-indigo-400/90 font-mono">
                        {proj.subtitle}
                      </p>
                      <p className={`text-sm leading-relaxed ${mutedText}`}>
                        {proj.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={() => setActiveProject(proj)}
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Launch Interactive Demo</span>
                        </button>

                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-2 rounded-xl border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 text-xs font-medium transition-colors flex items-center gap-1.5"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code Repo</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-zinc-800/80 bg-zinc-950/80 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="space-y-3 max-w-xs relative z-10">
                      <div className="mx-auto w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <div className="text-xs font-mono font-semibold text-zinc-200">
                        Preview: {proj.previewType}
                      </div>
                      <p className="text-[11px] text-zinc-500">
                        Click "Launch Interactive Demo" to inspect calculation pipelines, protocol packets, and runtime state.
                      </p>
                      <button
                        onClick={() => setActiveProject(proj)}
                        className="text-xs text-indigo-400 hover:text-indigo-300 underline font-mono flex items-center justify-center gap-1 mx-auto cursor-pointer"
                      >
                        Inspect Module
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                Building In Public
              </span>
              <h2 className="text-2xl font-bold tracking-tight">GitHub Activity Stream · 2026</h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span>{totalCommits} commits logged</span>
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:underline flex items-center gap-1"
              >
                GitHub Profile <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border ${cardBg}`}>
            <div className="overflow-x-auto pb-2">
              <div className="inline-flex gap-1.5 min-w-full">
                {commitGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((day, dIdx) => {
                      let cellColor = isDark ? "bg-zinc-900 border border-zinc-800/50" : "bg-zinc-200 border border-zinc-300";
                      if (day.count > 0 && day.count <= 2) {
                        cellColor = "bg-indigo-950 border border-indigo-900 text-indigo-300";
                      } else if (day.count > 2 && day.count <= 4) {
                        cellColor = "bg-indigo-700 text-white";
                      } else if (day.count > 4) {
                        cellColor = "bg-indigo-500 shadow-sm shadow-indigo-500/50";
                      }

                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredCommit(day)}
                          onMouseLeave={() => setHoveredCommit(null)}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-pointer hover:scale-125 ${cellColor}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 mt-3 border-t border-zinc-800/80 text-xs font-mono text-zinc-500">
              <div>
                {hoveredCommit ? (
                  <span className="text-zinc-200 font-medium">
                    {hoveredCommit.count === 0 ? "No commits" : `${hoveredCommit.count} commits`} on {hoveredCommit.date}
                  </span>
                ) : (
                  <span>Hover over blocks to view weekly contributions</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span>Less</span>
                <span className={`w-3 h-3 rounded-sm ${isDark ? "bg-zinc-900" : "bg-zinc-200"}`}></span>
                <span className="w-3 h-3 rounded-sm bg-indigo-950"></span>
                <span className="w-3 h-3 rounded-sm bg-indigo-700"></span>
                <span className="w-3 h-3 rounded-sm bg-indigo-500"></span>
                <span>More</span>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Capabilities
            </span>
            <h2 className="text-2xl font-bold tracking-tight">Technical Stack & Systems</h2>
            <p className={`text-xs ${mutedText}`}>
              Refined toolsets utilized daily for software engineering and experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.stack.map((group, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${cardBg}`}
              >
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4">
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-300">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-indigo-400">
                    {group.skills.length} modules
                  </span>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-indigo-500/30 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-normal">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Milestones
            </span>
            <h2 className="text-2xl font-bold tracking-tight">Engineering Journey & Trajectory</h2>
          </div>

          <div className={`p-6 sm:p-8 rounded-2xl border ${cardBg}`}>
            <div className="relative border-l border-zinc-800 ml-3 sm:ml-4 space-y-8">
              {PORTFOLIO_DATA.journey.map((item, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 group">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:scale-110 transition-transform"></div>

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">
                        ({item.quarter})
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed max-w-2xl ${mutedText}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Perspectives
            </span>
            <h2 className="text-2xl font-bold tracking-tight">Beyond Code</h2>
            <p className={`text-xs ${mutedText}`}>
              Principles shaping how I build software and approach engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PORTFOLIO_DATA.beyondCode.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-start gap-3 transition-all hover:border-zinc-700 ${cardBg}`}
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-200">{item.label}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{item.hint}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-6">
          <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden ${cardBg}`}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Let's Build Something.
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                  I am always open to exploring software engineering internships, open-source initiatives, or tech discussions around modern web systems and cybersecurity.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/20 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{copiedEmail ? "Email Address Copied!" : "Email Me Directly"}</span>
                </button>

                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-zinc-700/80 hover:bg-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-zinc-700/80 hover:bg-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>

              <form onSubmit={handleContactSubmit} className="pt-6 border-t border-zinc-800/80 space-y-4">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Quick Message Dispatch
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactState.name}
                    onChange={(e) => setContactState({ ...contactState, name: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={contactState.email}
                    onChange={(e) => setContactState({ ...contactState, email: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <textarea
                  rows="3"
                  required
                  placeholder="What would you like to build or discuss?"
                  value={contactState.message}
                  onChange={(e) => setContactState({ ...contactState, message: e.target.value })}
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={contactState.status === "sending"}
                    className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{contactState.status === "sending" ? "Dispatching..." : "Send Message"}</span>
                  </button>

                  {contactState.status === "success" && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Message received. I'll get back to you!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200">
                {PORTFOLIO_DATA.name}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-xs text-zinc-500 font-mono">Software Engineering Student</span>
            </div>
            <p className="text-[11px] text-zinc-500">
              Building practical software &bull; Exploring cybersecurity &bull; Ashulia, Bangladesh
            </p>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 text-center">
            Designed with <span className="text-indigo-400">Linear/Vercel</span> design language &bull; 2026
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              aria-label="Back to top"
              className="p-2 rounded-xl border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-zinc-600">&copy; 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
