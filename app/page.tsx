"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUp, ArrowUpRight, CheckCircle2, ChevronRight, ExternalLink,
  Globe2, Mail, Menu, Network, ShieldCheck,
  Terminal, X, Server, FolderKanban, Award, Languages, UserRound
} from "lucide-react";

type Lang = "fr" | "en";

const content = {
  fr: {
    nav: ["Accueil", "À propos", "Expertise", "Projets", "Parcours", "Contact"],
    heroEyebrow: "INGÉNIEUR IT · SYSTÈMES & RÉSEAUX · CYBERSÉCURITÉ · GESTION DE PROJETS IT",
    heroTitle: "Concevoir, sécuriser et faire évoluer des infrastructures IT fiables, résilientes et adaptées aux enjeux métiers",
    heroText: "Ingénieur IT spécialisé en systèmes, réseaux et cybersécurité, avec une double compétence en infrastructure et gestion de projets IT.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaCV: "Télécharger mon CV",
    available: "Ouvert aux opportunités IT & cybersécurité",
    aboutTitle: "Une approche structurée, de l’analyse de l’existant à la mise en œuvre",
    aboutText: "Identifier les risques, concevoir une réponse adaptée, déployer, documenter et mesurer les résultats.",
    stats: [
      ["Infrastructure", "Systèmes & réseaux"],
      ["Cybersécurité", "Défensive & SOC"],
      ["Projet IT", "Planification & pilotage"],
      ["Langues", "EN · FR · AR"]
    ],
    expertiseTitle: "Domaines d’expertise",
    expertiseText: "Un socle technique orienté production, sécurité et amélioration continue.",
    expertise: [
      ["Cybersécurité & SOC", "SOC, SIEM, EDR, IDS/IPS, supervision et analyse des événements de sécurité, détection des activités suspectes, investigation des menaces, réponse aux incidents et remédiation.", ShieldCheck],
      ["Administration Systèmes & Réseaux", "Administration avancée Windows/Linux : Active Directory, DHCP, DNS, GPO, serveurs Web, Fichiers, RDS, WSUS, PKI, messagerie et environnements Citrix.\nConfiguration des réseaux IP, routage, Wi-Fi, VLAN, proxy, VPN, VoIP/SIP.", Server],
      ["Gestion de projets IT", "• Planification\n• Organisation\n• Coordination\n• Documentation\n• Suivi des résultats", Award],
      ["Automatisation de la réponse aux incidents", "Déploiement et intégration de solutions pour automatiser la réponse aux incidents et centraliser la collecte et l’analyse des logs.", Terminal],
      ["Assistance aux utilisateurs", "Gestion de parc et ticketing, licences, matériels et consommables.\nDiagnostic des incidents, gestion des habilitations et droits d’accès, support des postes et des environnements de travail.", UserRound],
      ["Audit & risques", "Cartographie du SI, analyse de risques, contrôle de sécurité, vulnérabilités et préconisations.", FolderKanban],
      ["Systèmes & hardening", "Durcissement des OS, contrôle des accès, gestion des certificats et sécurisation des infrastructures.", Terminal],
      ["Réseaux & pare-feu", "Politiques de sécurité, administration réseau, NGFW.", Network],
      ["Threat Intelligence", "Veille cyber, analyse des menaces et suivi des vulnérabilités.", Globe2]
    ],
    toolsTitle: "Outils & technologies",
    tools: {
      "Analyse Réseau": "Wireshark · Nmap · Suricata · NtopNG · Specops Password Policy · PsLoggedOn · EvlWatcher · BloodHound",
      "Sécurité Offensive": "Metasploit · Burp Suite · Nessus · Yersinia",
      "Pare-feu": "PfSense · FortiGate · Nftables",
      "SOC / Monitoring": "Wazuh · Nagios · PRTG · Centreon · Graylog · Rsyslog · NXLog",
      "Équipements réseaux": "Cisco · Aruba · Netgear",
      "Virtualisation": "Proxmox · VMware Esxi / vCenter/vSphere · Hyper-V · VDI / Citrix · Docker",
      "Backup": "Veeam · R-Drive Image · Bacula · SAN/NAS",
      "Cloud": "Azure · AWS (IaaS, PaaS, SaaS)",
      "Autre": "Proofpoint · Squid · GLPI · 3CX · HCL Notes · WireGuard · Domino · Apache2 · IIS · Samba · FOG · RustDesk"
    },
    projectsTitle: "Projets sélectionnés",
    projectsText: "Des réalisations centrées sur la sécurité, la supervision et la maîtrise du risque.",
    projects: [
      {
        tag: "CYBERSÉCURITÉ · JAN. → MARS 2026",
        title: "Audit et renforcement de la posture cybersécurité de SAUViX - TPE spécialisée dans la sauvegarde de données décentralisé",
        desc: "Cartographie complète du SI, analyse des risques et déploiement d’une chaîne open-source de supervision et de réponse.",
        bullets: ["Cartographie complète du SI (inventaire, réseau, actifs) et audit des pratiques organisationnelles", "Analyse de risques avec matrice de criticité", "Tests d’intrusion avec Nmap, Nessus Essential et attaque par force brute (Veeam)", "Automatisation de la réponse aux incidents par le déploiement et l’intégration de GLPI, Centreon, Graylog et RustDesk", "Collecte centralisée des logs Windows/Linux via NXLog et Rsyslog", "Évaluation de l’impact via des KPI et retour d’expérience du déploiement", "Analyse RSE et préconisations Green IT (sobriété numérique)", "Réalisation du cahier des charges fonctionnel", "Méthode de gestion hybride : cascade + itérative", "Documentation technique et préconisations stratégiques : PCA/PRA et conformité RGPD"]
      },
      {
        tag: "CYBERSÉCURITÉ · MARS 2026",
        title: "Audit & sécurisation du SI de l’association Keur Kamer",
        desc: "État des lieux de l’infrastructure, renforcement des accès Microsoft 365 et amélioration des pratiques de sécurité.",
        bullets: ["État des lieux de l’infrastructure et audit des pratiques d’administration", "Analyse de la posture cybersécurité et identification des vulnérabilités (Wi-Fi, accès, sauvegardes)", "Sécurisation des comptes et des accès du tenant Microsoft 365 : administrateurs globaux, partages SharePoint et MFA", "Déploiement de KeePass pour la gestion centralisée et chiffrée des mots de passe", "Mise à jour automatique des postes de travail et proposition de sauvegarde Microsoft 365", "Définition de comptes temporaires dédiés aux bénévoles et limitation du stockage par compte", "Rédaction d’une documentation pédagogique de bonnes pratiques cyber pour les utilisateurs", "Méthode de gestion : Waterfall (cascade)", "Préconisations RSE low-tech et durabilité"]
      },
      {
        tag: "SOC · AVR. → JUIL. 2025",
        title: "Mise en place d’un SOC au cœur d’une infrastructure type PME",
        desc: "Conception d’un environnement de détection et de réponse combinant pare-feu, IDS/IPS, SIEM et EDR.",
        bullets: ["Planification et organisation", "Audit & conformité de l’infrastructure avec Nmap et Nessus", "Renforcement des configurations de sécurité sur les OS", "Gestion avancée de pare-feu PfSense", "Mise en place de Suricata et configuration IDS/IPS", "Mise en place de Wazuh SIEM et configuration EDR", "Surveillance des fichiers sensibles", "Investigation forensique", "Réponse aux incidents et correctifs", "Réalisation de SMART, Gantt, PERT, WBS, PBS", "Méthode de gestion utilisée : Waterfall et Spirale (rigide)", "Documentation technique des nouveaux systèmes ajoutés", "Veille technologique sur les composants essentiels du SI"]
      },
      {
        tag: "INFRASTRUCTURE & PROJET IT · OCT. 2023 → AVR. 2024",
        title: "Manager le déménagement d’une PME de consulting IT",
        desc: "Pilotage de la modernisation, migration, sécurisation et haute disponibilité de l’infrastructure informatique.",
        bullets: ["Planification et organisation", "Virtualisation des serveurs", "Modernisation, mise à jour et sécurisation de l’infrastructure ; redondance et haute disponibilité", "Sécurisation des switches ; migration de pare-feu vers pfSense", "VPN Site-to-Site avec WireGuard ; supervision Active Directory avec BloodHound", "Proxy Squid ; monitoring réseau avec NtopNG ; Suricata IDS/IPS", "Surveillance accès distant avec EvlWatcher et utilisateurs connectés avec PsLoggedOn", "Plan de sauvegarde/restauration avec Bacula ; PCA/PRA", "Méthodes Scrum et Kanban ; DAT, SMART, RACI, Gantt, PERT, WBS, OBS, PBS ; réunions, budget prévisionnel et documentation"]
      }
    ],
    careerTitle: "Parcours professionnel",
    experiences: [
      ["2026", "Ingénieur en Cybersécurité — stage", "Keur Kamer · Paris", "Mars → avril 2026"],
      ["2026", "Ingénieur en Cybersécurité — stage", "SAUViX · Paris", "Janvier → février 2026"],
      ["2023–2024", "Administrateur Systèmes & Réseaux", "Lelievre · Paris", "Septembre 2023 → septembre 2024"],
      ["2023", "Technicien Supérieur Systèmes & Réseaux — stage", "La Salle Saint Rosaire · Sarcelles", "Mai → juillet 2023"],
      ["2010–2022", "Technicien en véhicules industriels", "Veolia · Renault · Loxam · Intérim · Paris ouest", ""]
    ],
    educationTitle: "Diplômes & formations",
    education: [
      ["2026", "Mastère Européen Expert IT Cybersécurité & Haute Disponibilité — Manager de Projets IT", "Fédération Européenne des Écoles · Genève"],
      ["2024", "Administrateur d’Infrastructures Sécurisées · Bac+3", "IMIE · Levallois-Perret"],
      ["2023", "Technicien Supérieur en Systèmes & Réseaux · Bac+2", "WebForce3 · Cergy"]
    ],
    qualitiesTitle: "Langues",
    strengthsTitle: "Qualités",
    interestsTitle: "Centres d’intérêt",
    qualities: ["Adaptabilité", "Excellence relationnelle", "Culture de l’amélioration continue"],
    languages: [["Anglais", "B2"], ["Français", "Natif"], ["Arabe littéraire", "Natif"]],
    interests: "• Sports : Judo · Fitness · Plongée sous-marine · Running\n• Technologies & veille informatique\n• Musique : Instrument à cordes pincées · Piano numérique",
    contactTitle: "Parlons de votre prochain projet IT.",
    contactText: "Vous recherchez un profil capable de comprendre l’infrastructure, d’identifier les risques et de contribuer concrètement à la sécurisation et à l’évolution du SI ?",
    email: "a.aithocine@hotmail.com",
    footer: "INGÉNIEUR IT · SYSTÈMES & RÉSEAUX · CYBERSÉCURITÉ · GESTION DE PROJETS IT"
  },
  en: {
    nav: ["Home", "About", "Expertise", "Projects", "Career", "Contact"],
    heroEyebrow: "IT ENGINEER · SYSTEMS & NETWORKS · CYBERSECURITY · IT PROJECT MANAGEMENT",
    heroTitle: "Design, secure and evolve reliable, resilient IT infrastructures aligned with business needs",
    heroText: "IT Engineer specialized in systems, networks and cybersecurity, with a dual background in infrastructure and IT project management.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    ctaCV: "Download my CV",
    available: "Open to IT & cybersecurity opportunities",
    aboutTitle: "A structured approach, from initial assessment to implementation",
    aboutText: "Identify risks, design an appropriate response, deploy, document and measure results.",
    stats: [
      ["Infrastructure", "Systems & networks"],
      ["Cybersecurity", "Defensive & SOC"],
      ["IT projects", "Planning & delivery"],
      ["Languages", "EN · FR · AR"]
    ],
    expertiseTitle: "Areas of expertise",
    expertiseText: "A technical foundation focused on production, security and continuous improvement.",
    expertise: [
      ["Cybersecurity & SOC", "SOC, SIEM, EDR, IDS/IPS, suspicious activity detection, incident response and remediation.", ShieldCheck],
      ["Systems & network administration", "Advanced Windows/Linux administration: Active Directory, DHCP, DNS, GPO, Web, File servers, RDS, WSUS, PKI, messaging.\nIP network configuration, routing, Wi-Fi, VLANs, proxy, VPN, VoIP/SIP and Citrix environments.", Server],
      ["IT project management", "• Planning\n• Organization\n• Coordination\n• Documentation\n• Outcome tracking", Award],
      ["Incident response automation", "Deployment and integration of GLPI, Centreon, Graylog and RustDesk to automate incident response. Centralized Windows/Linux log collection via NXLog and Rsyslog.", Terminal],
      ["User support", "IT asset and ticketing management with GLPI, licenses, hardware, consumables and user assistance. Incident diagnosis, access-rights management, workstation support and workplace-environment support.", UserRound],
      ["Audit & risk", "IT mapping, risk analysis, security controls, vulnerability assessment and recommendations.", FolderKanban],
      ["Threat intelligence", "Cybersecurity watch, threat analysis and vulnerability tracking.", Globe2],
      ["Networks & firewalls", "Security policies, network administration, NGFW.", Network],
      ["Systems & hardening", "OS hardening, access control, certificate management and infrastructure security.", Terminal]
    ],
    toolsTitle: "Tools & technologies",
    tools: {
      "Network analysis": "Wireshark · Nmap · Suricata · NtopNG · Specops Password Policy · PsLoggedOn · EvlWatcher · BloodHound",
      "Offensive security": "Metasploit · Burp Suite · Nessus · Yersinia",
      "Firewalls": "PfSense · FortiGate · Nftables",
      "SOC / Monitoring": "Wazuh · Nagios · PRTG · Centreon · Graylog · Rsyslog · NXLog",
      "Network equipment": "Cisco · Aruba · Netgear",
      "Virtualization": "Proxmox · VMware Esxi / vCenter/vSphere · Hyper-V · VDI / Citrix · Docker",
      "Backup": "Veeam · R-Drive Image · Bacula · SAN/NAS",
      "Cloud": "Azure · AWS (IaaS, PaaS, SaaS)",
      "Other": "Proofpoint · Squid · GLPI · 3CX · HCL Notes · WireGuard · Domino · Apache2 · IIS · Samba · FOG · RustDesk"
    },
    projectsTitle: "Selected projects",
    projectsText: "Hands-on work focused on security, monitoring and risk control.",
    projects: [
      {
        tag: "CYBERSECURITY · JAN. → MAR. 2026",
        title: "Cybersecurity posture audit & reinforcement — SAUViX",
        desc: "Full IT mapping, risk analysis and deployment of an open-source monitoring and incident-response stack.",
        bullets: ["Full IT mapping (inventory, network, assets) and organizational-practice audit", "Risk analysis with criticality matrix", "Pentesting with Nmap, Nessus Essential and brute-force attack (Veeam)", "Incident-response automation through the deployment and integration of GLPI, Centreon, Graylog and RustDesk", "Centralized Windows/Linux log collection via NXLog and Rsyslog", "Impact assessment through KPIs and deployment feedback", "CSR analysis and Green IT recommendations (digital sobriety)", "Functional requirements specification", "Hybrid management method: Waterfall + Iterative", "Technical documentation and strategic recommendations: BCP/DR and GDPR compliance"]
      },
      {
        tag: "CYBERSECURITY · MAR. 2026",
        title: "IT security audit & reinforcement — Keur Kamer",
        desc: "Infrastructure assessment, Microsoft 365 access hardening and improvement of security practices.",
        bullets: ["Infrastructure assessment and administration-practice audit", "Cybersecurity posture analysis and identification of vulnerabilities (Wi-Fi, access, backups)", "Microsoft 365 account and access security: global administrators, SharePoint sharing and MFA", "KeePass deployment for centralized encrypted password management", "Automatic workstation updates and Microsoft 365 backup proposal", "Temporary volunteer accounts and per-account storage limits", "User-oriented documentation of cybersecurity best practices", "Management method: Waterfall", "Low-tech CSR and sustainability recommendations"]
      },
      {
        tag: "SOC · APR. → JUL. 2025",
        title: "SOC implementation at the heart of a SME infrastructure",
        desc: "Design of a detection and response environment combining firewall, IDS/IPS, SIEM and EDR.",
        bullets: ["Planning and organization", "Infrastructure audit & compliance with Nmap and Nessus", "Security configuration hardening on operating systems", "Advanced PfSense firewall management", "Suricata deployment and IDS/IPS configuration", "Wazuh SIEM deployment and EDR configuration", "Sensitive-file monitoring", "Forensic investigation", "Incident response and remediation", "SMART, Gantt, PERT, WBS and PBS deliverables", "Management methods: Waterfall and Spiral", "Technical documentation of newly added systems", "Technology watch on essential IT-system components"]
      },
      {
        tag: "INFRASTRUCTURE & IT PROJECT · OCT. 2023 → APR. 2024",
        title: "Managing an IT consulting SME infrastructure move",
        desc: "Management of infrastructure modernization, migration, security and high availability during an SME move.",
        bullets: ["Planning and organization", "Server virtualization", "Infrastructure modernization, updating and security; redundancy and high availability", "Switch security; firewall migration to pfSense", "WireGuard Site-to-Site VPN; Active Directory monitoring with BloodHound", "Squid proxy; network monitoring with NtopNG; Suricata IDS/IPS", "Remote-access monitoring with EvlWatcher and connected-user monitoring with PsLoggedOn", "Backup/restore plan with Bacula; BCP/DR", "Scrum and Kanban; DAT, SMART, RACI, Gantt, PERT, WBS, OBS, PBS; meetings, budget planning and documentation"]
      }
    ],
    careerTitle: "Professional career",
    experiences: [
      ["2026", "Cybersecurity Engineer — internship", "Keur Kamer · Paris", "March → April 2026"],
      ["2026", "Cybersecurity Engineer — internship", "SAUViX · Paris", "January → February 2026"],
      ["2023–2024", "Systems & Network Administrator", "Lelievre · Paris", "September 2023 → September 2024"],
      ["2023", "Senior Systems & Network Technician — internship", "La Salle Saint Rosaire · Sarcelles", "May → July 2023"],
      ["2010–2022", "Industrial Vehicle Technician", "Veolia · Renault · Loxam · Temporary assignments · West Paris", ""]
    ],
    educationTitle: "Education & training",
    education: [
      ["2026", "European Master’s — IT Expert, Cybersecurity & High Availability — IT Project Manager", "Fédération Européenne des Écoles · Geneva"],
      ["2024", "Secure Infrastructure Administrator · Bachelor level", "IMIE · Levallois-Perret"],
      ["2023", "Senior Systems & Networks Technician · Associate level", "WebForce3 · Cergy"]
    ],
    qualitiesTitle: "Languages",
    strengthsTitle: "Strengths",
    interestsTitle: "Interests",
    qualities: ["Adaptability", "Strong interpersonal skills", "Continuous improvement mindset"],
    languages: [["English", "B2"], ["French", "Native"], ["Literary Arabic", "Native"]],
    interests: "• Sports: Judo · Fitness · Scuba diving · Running\n• Technology & IT watch\n• Music: Plucked-string instrument · Digital piano",
    contactTitle: "Let’s talk about your next IT project.",
    contactText: "Looking for a profile able to understand infrastructure, identify risks and contribute hands-on to securing and evolving your IT environment?",
    email: "a.aithocine@hotmail.com",
    footer: "IT ENGINEER · SYSTEMS & NETWORKS · CYBERSECURITY · IT PROJECT MANAGEMENT"
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <main>
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="container nav">
          <button className="brand" onClick={() => go("home")} aria-label="Home">
            <span className="brand-mark">AA</span>
            <span className="brand-text">Ali Aithocine</span>
          </button>

          <nav className={menu ? "nav-links open" : "nav-links"}>
            {t.nav.map((item, i) => <button key={item} onClick={() => go(["home","about","expertise","projects","career","contact"][i])}>{item}</button>)}
          </nav>

          <div className="nav-actions">
            <div className="lang-switch" aria-label="Choisir la langue / Choose language">
              <button className={`lang-option ${lang === "fr" ? "active" : ""}`} onClick={() => setLang("fr")} aria-label="Français" title="Français">🇫🇷 <span>FR</span></button>
              <button className={`lang-option ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")} aria-label="English" title="English">🇬🇧 <span>EN</span></button>
            </div>
            <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" />{t.heroEyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => go("projects")}>{t.ctaProjects}<ArrowDown size={17}/></button>
              <button className="btn ghost" onClick={() => go("contact")}>{t.ctaContact}<ArrowUpRight size={17}/></button>
              <a className="btn cv-download" href={lang === "fr" ? "/CV_Ali_Aithocine_FR.pdf" : "/CV_Ali_Aithocine_EN.pdf"} download={lang === "fr" ? "CV_Ali_Aithocine_FR.pdf" : "CV_Ali_Aithocine_EN.pdf"}>{t.ctaCV}<ArrowDown size={17}/></a>
            </div>
            <div className="availability"><CheckCircle2 size={17}/>{t.available}</div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="hero-photo-card">
              <img src="/ali-aithocine.png" alt="Ali Aithocine — Ingénieur IT, Systèmes, Réseaux & Cybersécurité" className="hero-photo" />
              <div className="hero-photo-caption">
                <span>ALI AITHOCINE</span>
                <small>IT · SYSTEMS · NETWORKS · CYBERSECURITY</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">01 — {t.nav[1]}</span>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="about-grid">
            <p className="lead">{t.aboutText}</p>
            <div className="stats">
              {t.stats.map(([a,b]) => <div className="stat" key={a}><strong>{a}</strong><span>{b}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section dark-section">
        <div className="container">
          <div className="section-head light">
            <span className="section-kicker">02 — {t.nav[2]}</span>
            <h2>{t.expertiseTitle}</h2>
            <p>{t.expertiseText}</p>
          </div>
          <div className="expertise-grid">
            {t.expertise.map(([title, desc, Icon], index) => {
              const I = Icon as any;
              const titleText = String(title);
              const descText = String(desc);
              return <article className="expertise-card" key={`${titleText}-${index}`}><div className="icon-box"><I size={22}/></div><h3>{titleText}</h3><p>{descText}</p></article>
            })}
          </div>
          <div className="tools-panel">
            <div><span className="section-kicker">{t.toolsTitle}</span><h3>Practical toolkit</h3></div>
            <div className="tools-scroll" aria-label="Liste des outils et technologies">
              <div className="tools-list">
                {Object.entries(t.tools).map(([k,v]) => <div className="tool-row" key={k}><b>{k}</b><span>{v}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">03 — {t.nav[3]}</span>
            <h2>{t.projectsTitle}</h2>
            <p>{t.projectsText}</p>
          </div>
          <div className="projects-grid">
            {t.projects.map((p, idx) => <article className="project-card" key={p.title}>
              <div className="project-number">0{idx + 1}</div>
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>{p.bullets.map(b => <li key={b}><CheckCircle2 size={15}/>{b}</li>)}</ul>
            </article>)}
          </div>
        </div>
      </section>

      <section id="career" className="section soft">
        <div className="container career-grid">
          <div>
            <span className="section-kicker">04 — {t.nav[4]}</span>
            <h2>{t.careerTitle}</h2>
            <div className="timeline">
              {t.experiences.map(([year, role, company, date]) => <div className="timeline-item" key={role + company}><div className="timeline-dot"/><span className="year">{year}</span><h3>{role}</h3><strong>{company}</strong><small>{date}</small></div>)}
            </div>
          </div>
          <div>
            <span className="section-kicker">{t.educationTitle}</span>
            <div className="education-list">
              {t.education.map(([year, degree, school]) => <article key={degree} className="edu"><span>{year}</span><div><h3>{degree}</h3><p>{school}</p></div></article>)}
            </div>
            <div className="mini-panels">
              <div><Languages size={18}/><h3>{t.qualitiesTitle}</h3>{t.languages.map(([a,b]) => <p key={a}>• <b>{a}</b> — {b}</p>)}</div>
              <div><UserRound size={18}/><h3>{t.strengthsTitle}</h3>{t.qualities.map(q => <p key={q}>• {q}</p>)}</div>
              <div className="interest-panel"><Award size={18}/><h3>{t.interestsTitle}</h3><p className="interest-list">{t.interests}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div>
            <span className="section-kicker">05 — {t.nav[5]}</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a className="contact-email" href={`mailto:${t.email}`}><Mail size={16}/><span>{t.email}</span><ArrowUpRight size={15}/></a>
          </div>
          <form
            className="contact-form"
            action="https://formsubmit.co/a.aithocine@hotmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio Ali Aithocine" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <label>
              <span>{lang === "fr" ? "Nom" : "Name"}</span>
              <input type="text" name="name" required placeholder={lang === "fr" ? "Votre nom" : "Your name"} />
            </label>
            <label>
              <span>{lang === "fr" ? "Adresse e-mail" : "Email address"}</span>
              <input type="email" name="email" required placeholder={lang === "fr" ? "votre@email.com" : "your@email.com"} />
            </label>
            <label>
              <span>{lang === "fr" ? "Message" : "Message"}</span>
              <textarea name="message" rows={6} required placeholder={lang === "fr" ? "Votre message..." : "Your message..."} />
            </label>
            <button className="btn form-submit" type="submit">
              <Mail size={17}/> {lang === "fr" ? "Envoyer le message" : "Send message"} <ArrowUpRight size={17}/>
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Ali Aithocine</span>
          <span>{t.footer}</span>
          <button onClick={() => window.scrollTo({top:0, behavior:"smooth"})}><ArrowUp size={16}/> Top</button>
        </div>
      </footer>
    </main>
  );
}
