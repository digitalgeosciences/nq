import { n as __toESM } from "../_runtime.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, c as Database, d as Braces, f as BookOpenCheck, h as ArrowDownRight, i as Menu, l as Container, m as ArrowUpRight, n as ShieldCheck, o as Linkedin, p as Blocks, r as Network, s as Github, t as X, u as CodeXml } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as SiHuggingface, c as SiNestjs, d as SiPostman, f as SiTypeorm, h as FaAws, i as SiGithub, l as SiNodedotjs, m as SiUdacity, n as SiFreecodecamp, o as SiJavascript, p as SiTypescript, r as SiGit, s as SiJsonwebtokens, t as SiDocker, u as SiPostgresql } from "../_libs/react-icons.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-RGkaVW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "min-h-11 px-4 py-2",
			sm: "min-h-11 rounded-md px-3 text-xs",
			lg: "min-h-12 rounded-md px-8",
			icon: "min-h-11 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var portfolio_default = {
	person: {
		"name": "Naif Alqubalee",
		"initials": "NA",
		"role": "Backend Software Engineer",
		"location": "Khobar, Saudi Arabia",
		"availability": "Open to backend engineering opportunities",
		"headline": "Backend Software Engineer | Building Secure, Scalable, & Maintainable Systems",
		"subheadline": "Specializing in NestJS, Node.js, TypeScript, and PostgreSQL.",
		"email": "naif@qubalee.com",
		"bio": "I turn ambitious product ideas into resilient backend systems. My work centers on dependable REST APIs, thoughtful relational data models, JWT and role-based access control, and repeatable Docker-based delivery.",
		"copyright": "Naif Alqubalee. Built with care and clean code."
	},
	navigation: [
		{
			"label": "About",
			"href": "#about"
		},
		{
			"label": "Skills",
			"href": "#skills"
		},
		{
			"label": "Projects",
			"href": "#projects"
		},
		{
			"label": "Certifications",
			"href": "#certifications"
		},
		{
			"label": "Contact",
			"href": "#contact"
		}
	],
	principles: [
		{
			"label": "Clean Code",
			"icon": "Braces"
		},
		{
			"label": "Scalable Architecture",
			"icon": "Network"
		},
		{
			"label": "Security",
			"icon": "ShieldCheck"
		},
		{
			"label": "Continuous Learning",
			"icon": "BookOpenCheck"
		}
	],
	skills: [
		{
			"category": "Core & Languages",
			"icon": "Code2",
			"items": [
				"TypeScript",
				"JavaScript",
				"Node.js"
			]
		},
		{
			"category": "Frameworks & ORMs",
			"icon": "Blocks",
			"items": ["NestJS", "TypeORM"]
		},
		{
			"category": "Databases & Security",
			"icon": "Database",
			"items": [
				"PostgreSQL",
				"Relational Database Design",
				"JWT",
				"Role-Based Access Control (RBAC)"
			]
		},
		{
			"category": "DevOps & Tools",
			"icon": "Container",
			"items": [
				"Docker",
				"Git",
				"GitHub",
				"Postman"
			]
		}
	],
	projects: [
		{
			"title": "FundChain",
			"subtitle": "Blockchain-Based Community Funding Platform",
			"date": "Sep 2025 — Apr 2026",
			"description": "A secure funding platform with transparent campaign workflows, verifiable transactions, and role-aware administrative controls.",
			"technologies": [
				"NestJS",
				"TypeScript",
				"PostgreSQL",
				"Blockchain"
			],
			"repository": "https://github.com/nq001"
		},
		{
			"title": "Commerce & Order Management Platform",
			"subtitle": "Modular commerce backend",
			"date": "Sep 2026",
			"description": "A maintainable order lifecycle service with inventory coordination, transactional consistency, and clear domain boundaries.",
			"technologies": [
				"Node.js",
				"NestJS",
				"TypeORM",
				"PostgreSQL"
			],
			"repository": "https://github.com/nq001"
		},
		{
			"title": "Task Manager API",
			"subtitle": "Secure productivity service",
			"date": "Aug 2026",
			"description": "A documented REST API for managing personal tasks with validated requests, JWT authentication, and ownership controls.",
			"technologies": [
				"NestJS",
				"JWT",
				"PostgreSQL",
				"Docker"
			],
			"repository": "https://github.com/nq001"
		},
		{
			"title": "Contact Management API",
			"subtitle": "Structured contact data platform",
			"date": "Aug 2026",
			"description": "A reliable CRUD API featuring clean modular architecture, robust validation, searchable records, and consistent errors.",
			"technologies": [
				"TypeScript",
				"Node.js",
				"TypeORM",
				"Postman"
			],
			"repository": "https://github.com/nq001"
		}
	],
	certifications: [
		{
			"title": "Hugging Face Agents Course",
			"credential": "Certificate of Excellence",
			"issuer": "Hugging Face",
			"icon": "HuggingFace"
		},
		{
			"title": "Machine Learning Foundations",
			"credential": "AWS Educate",
			"issuer": "AWS",
			"icon": "AWS"
		},
		{
			"title": "Introducing Generative AI with AWS",
			"credential": "Course Certificate",
			"issuer": "Udacity",
			"icon": "Udacity"
		},
		{
			"title": "Relational Database V8",
			"credential": "Developer Certification",
			"issuer": "freeCodeCamp",
			"icon": "FreeCodeCamp"
		},
		{
			"title": "Legacy Responsive Web Design V8",
			"credential": "Developer Certification",
			"issuer": "freeCodeCamp",
			"icon": "FreeCodeCamp"
		},
		{
			"title": "Software Development Job Simulation",
			"credential": "Completion Certificate",
			"issuer": "Datacom · Forage",
			"icon": "Datacom"
		},
		{
			"title": "Product Management Job Simulation",
			"credential": "Completion Certificate",
			"issuer": "Forage",
			"icon": "Forage"
		}
	],
	socials: [
		{
			"label": "Github.com/nq001",
			"url": "https://github.com/nq001",
			"icon": "Github"
		},
		{
			"label": "Linkedin.com/in/naifalqubalee",
			"url": "https://www.linkedin.com/in/naifalqubalee",
			"icon": "Linkedin"
		},
		{
			"label": "naif@qubalee.com",
			"url": "mailto:naif@qubalee.com",
			"icon": "Mail"
		}
	],
	code: [
		["keyword", "@Controller"],
		["plain", "('projects')"],
		["line", ""],
		["keyword", "export class"],
		["type", " ProjectsController "],
		["plain", "{"],
		["line", "  constructor("],
		["keyword", "    private readonly"],
		["plain", " service: ProjectsService,"],
		["line", "  ) {}"],
		["line", ""],
		["decorator", "  @Get()"],
		["keyword", "  async"],
		["type", " findAll"],
		["plain", "() {"],
		["keyword", "    return"],
		["plain", " this.service.findAll();"],
		["line", "  }"],
		["plain", "}"]
	]
};
var icons = {
	ArrowUpRight,
	Blocks,
	BookOpenCheck,
	Braces,
	Code2: CodeXml,
	Container,
	Database,
	Github,
	Linkedin,
	Mail,
	Network,
	ShieldCheck
};
function Reveal({ children, className = "" }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: reduced ? 0 : 8
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: reduced ? 0 : .26,
			ease: "easeOut"
		},
		"data-tsd-source": "/src/routes/index.tsx:65:5",
		children
	});
}
function IconByName({ name, className = "size-5" }) {
	const Icon = icons[name] ?? CodeXml;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		"aria-hidden": "true",
		"data-tsd-source": "/src/routes/index.tsx:79:10"
	});
}
function PortfolioPage() {
	const [activeSection, setActiveSection] = (0, import_react.useState)("about");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const sections = portfolio_default.navigation.map((item) => document.querySelector(item.href)).filter((section) => Boolean(section));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActiveSection(visible.target.id);
		}, {
			rootMargin: "-18% 0px -65%",
			threshold: [
				.05,
				.25,
				.5
			]
		});
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);
	const scrollTo = (href) => {
		document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
		setMenuOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main-content",
			className: "skip-link",
			"data-tsd-source": "/src/routes/index.tsx:108:7",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			"data-tsd-source": "/src/routes/index.tsx:109:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell header-inner",
				"data-tsd-source": "/src/routes/index.tsx:110:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "brand focus-ring",
						"aria-label": `${portfolio_default.person.name}, home`,
						onClick: (event) => {
							event.preventDefault();
							scrollTo("#top");
						},
						"data-tsd-source": "/src/routes/index.tsx:111:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-mark",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/index.tsx:112:13",
							children: portfolio_default.person.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "brand-copy",
							"data-tsd-source": "/src/routes/index.tsx:113:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								"data-tsd-source": "/src/routes/index.tsx:113:42",
								children: portfolio_default.person.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
								"data-tsd-source": "/src/routes/index.tsx:113:77",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-tsd-source": "/src/routes/index.tsx:113:84" }), portfolio_default.person.role]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "desktop-nav",
						"aria-label": "Primary navigation",
						"data-tsd-source": "/src/routes/index.tsx:115:11",
						children: portfolio_default.navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							onClick: (event) => {
								event.preventDefault();
								scrollTo(item.href);
							},
							className: `nav-link focus-ring ${activeSection === item.href.slice(1) ? "is-active" : ""}`,
							"aria-current": activeSection === item.href.slice(1) ? "location" : void 0,
							"data-tsd-source": "/src/routes/index.tsx:117:15",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "menu-button",
						"aria-label": menuOpen ? "Close menu" : "Open menu",
						"aria-expanded": menuOpen,
						onClick: () => setMenuOpen((open) => !open),
						"data-tsd-source": "/src/routes/index.tsx:120:11",
						children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "data-tsd-source": "/src/routes/index.tsx:121:25" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "data-tsd-source": "/src/routes/index.tsx:121:33" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				"data-tsd-source": "/src/routes/index.tsx:124:9",
				children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
					className: "mobile-nav",
					"aria-label": "Mobile navigation",
					initial: {
						opacity: 0,
						y: -8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: { duration: .18 },
					"data-tsd-source": "/src/routes/index.tsx:126:13",
					children: portfolio_default.navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: (event) => {
							event.preventDefault();
							scrollTo(item.href);
						},
						className: `mobile-nav-link focus-ring ${activeSection === item.href.slice(1) ? "is-active" : ""}`,
						"data-tsd-source": "/src/routes/index.tsx:128:17",
						children: item.label
					}, item.href))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main-content",
			"data-tsd-source": "/src/routes/index.tsx:135:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "top",
					className: "hero-section",
					"data-tsd-source": "/src/routes/index.tsx:136:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell hero-grid",
						"data-tsd-source": "/src/routes/index.tsx:137:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-copy",
							"data-tsd-source": "/src/routes/index.tsx:138:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "availability",
									"data-tsd-source": "/src/routes/index.tsx:139:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "availability-dot",
										"data-tsd-source": "/src/routes/index.tsx:139:45",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "data-tsd-source": "/src/routes/index.tsx:139:80" })
									}), portfolio_default.person.availability]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									"data-tsd-source": "/src/routes/index.tsx:140:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-tsd-source": "/src/routes/index.tsx:140:19",
										children: "Backend Software Engineer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										"data-tsd-source": "/src/routes/index.tsx:140:57",
										children: "building secure, scalable, and maintainable systems."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "hero-subtitle",
									"data-tsd-source": "/src/routes/index.tsx:141:15",
									children: [
										"Specializing in ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											"data-tsd-source": "/src/routes/index.tsx:141:60",
											children: "NestJS"
										}),
										", ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											"data-tsd-source": "/src/routes/index.tsx:141:85",
											children: "Node.js"
										}),
										",",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											"data-tsd-source": "/src/routes/index.tsx:142:17",
											children: "TypeScript"
										}),
										", and ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											"data-tsd-source": "/src/routes/index.tsx:142:50",
											children: "PostgreSQL"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-actions",
									"data-tsd-source": "/src/routes/index.tsx:143:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										asChild: true,
										"data-tsd-source": "/src/routes/index.tsx:144:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#projects",
											onClick: (event) => {
												event.preventDefault();
												scrollTo("#projects");
											},
											"data-tsd-source": "/src/routes/index.tsx:144:43",
											children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { "data-tsd-source": "/src/routes/index.tsx:144:149" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										variant: "outline",
										asChild: true,
										"data-tsd-source": "/src/routes/index.tsx:145:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											onClick: (event) => {
												event.preventDefault();
												scrollTo("#contact");
											},
											"data-tsd-source": "/src/routes/index.tsx:145:61",
											children: "Contact Me"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-facts",
									"data-tsd-source": "/src/routes/index.tsx:147:15",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-tsd-source": "/src/routes/index.tsx:147:43",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-tsd-source": "/src/routes/index.tsx:147:48",
												children: "Focus"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												"data-tsd-source": "/src/routes/index.tsx:147:66",
												children: "Type-safe systems"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-tsd-source": "/src/routes/index.tsx:147:106",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-tsd-source": "/src/routes/index.tsx:147:111",
												children: "Approach"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												"data-tsd-source": "/src/routes/index.tsx:147:132",
												children: "Security first"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-tsd-source": "/src/routes/index.tsx:147:169",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-tsd-source": "/src/routes/index.tsx:147:174",
												children: "Location"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												"data-tsd-source": "/src/routes/index.tsx:147:195",
												children: portfolio_default.person.location
											})]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePanel, { "data-tsd-source": "/src/routes/index.tsx:149:13" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "about",
					className: "section section-tinted",
					"aria-labelledby": "about-title",
					"data-tsd-source": "/src/routes/index.tsx:153:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell",
						"data-tsd-source": "/src/routes/index.tsx:154:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "01 / About",
							title: "Engineering with intention.",
							id: "about-title",
							description: "I care about the decisions behind the code—not just whether it runs.",
							"data-tsd-source": "/src/routes/index.tsx:155:13"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "philosophy-card",
							"data-tsd-source": "/src/routes/index.tsx:156:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "philosophy-copy",
								"data-tsd-source": "/src/routes/index.tsx:157:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-tsd-source": "/src/routes/index.tsx:157:48",
									children: portfolio_default.person.bio
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "principles",
								"aria-label": "Engineering principles",
								"data-tsd-source": "/src/routes/index.tsx:158:15",
								children: portfolio_default.principles.map((principle) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "principle",
									"data-tsd-source": "/src/routes/index.tsx:159:53",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "principle-icon",
										"data-tsd-source": "/src/routes/index.tsx:159:102",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconByName, {
											name: principle.icon,
											"data-tsd-source": "/src/routes/index.tsx:159:135"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-tsd-source": "/src/routes/index.tsx:159:178",
										children: principle.label
									})]
								}, principle.label))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "skills",
					className: "section",
					"aria-labelledby": "skills-title",
					"data-tsd-source": "/src/routes/index.tsx:165:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell",
						"data-tsd-source": "/src/routes/index.tsx:166:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "02 / Expertise",
							title: "Tools I trust to build well.",
							id: "skills-title",
							description: "A focused stack for dependable services, from request validation to deployment.",
							"data-tsd-source": "/src/routes/index.tsx:167:13"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "skills-grid",
							"data-tsd-source": "/src/routes/index.tsx:168:13",
							children: portfolio_default.skills.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: `skill-card skill-card-${index + 1}`,
								"data-tsd-source": "/src/routes/index.tsx:170:17",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "skill-card-head",
										"data-tsd-source": "/src/routes/index.tsx:171:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "skill-icon",
											"data-tsd-source": "/src/routes/index.tsx:171:52",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconByName, {
												name: group.icon,
												"data-tsd-source": "/src/routes/index.tsx:171:81"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "skill-index",
											"data-tsd-source": "/src/routes/index.tsx:171:120",
											children: ["0", index + 1]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										"data-tsd-source": "/src/routes/index.tsx:172:19",
										children: group.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										"data-tsd-source": "/src/routes/index.tsx:173:19",
										children: group.items.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											"data-tsd-source": "/src/routes/index.tsx:173:51",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMark, {
												name: skill,
												"data-tsd-source": "/src/routes/index.tsx:173:67"
											}), skill]
										}, skill))
									})
								]
							}, group.category))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "projects",
					className: "section section-tinted",
					"aria-labelledby": "projects-title",
					"data-tsd-source": "/src/routes/index.tsx:180:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell",
						"data-tsd-source": "/src/routes/index.tsx:181:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "03 / Selected Work",
							title: "Systems built for the real world.",
							id: "projects-title",
							description: "Backend projects shaped around security, maintainability, and clear domain logic.",
							"data-tsd-source": "/src/routes/index.tsx:182:13"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "projects-grid",
							"data-tsd-source": "/src/routes/index.tsx:183:13",
							children: portfolio_default.projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: `project-card project-card-${portfolio_default.projects.indexOf(project) % 4 + 1}`,
								"data-tsd-source": "/src/routes/index.tsx:185:17",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "project-top",
										"data-tsd-source": "/src/routes/index.tsx:186:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "project-date",
											"data-tsd-source": "/src/routes/index.tsx:186:48",
											children: project.date
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: project.repository,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "icon-link focus-ring",
											"aria-label": `View ${project.title} repository on GitHub`,
											"data-tsd-source": "/src/routes/index.tsx:186:100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "data-tsd-source": "/src/routes/index.tsx:186:262" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/index.tsx:187:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											"data-tsd-source": "/src/routes/index.tsx:187:24",
											children: project.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "project-subtitle",
											"data-tsd-source": "/src/routes/index.tsx:187:48",
											children: project.subtitle
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "project-description",
										"data-tsd-source": "/src/routes/index.tsx:188:19",
										children: project.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "tag-list",
										"aria-label": `${project.title} technologies`,
										"data-tsd-source": "/src/routes/index.tsx:189:19",
										children: project.technologies.map((technology) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											"data-tsd-source": "/src/routes/index.tsx:189:131",
											children: technology
										}, technology))
									})
								]
							}, project.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "certifications",
					className: "section",
					"aria-labelledby": "certifications-title",
					"data-tsd-source": "/src/routes/index.tsx:196:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell",
						"data-tsd-source": "/src/routes/index.tsx:197:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "04 / Credentials",
							title: "Always learning, always sharpening.",
							id: "certifications-title",
							description: "Practical learning across backend engineering, cloud, AI, and product thinking.",
							"data-tsd-source": "/src/routes/index.tsx:198:13"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cert-grid",
							"data-tsd-source": "/src/routes/index.tsx:199:13",
							children: portfolio_default.certifications.map((certification) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "cert-card",
								"data-tsd-source": "/src/routes/index.tsx:201:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CredentialMark, {
									name: certification.icon,
									"data-tsd-source": "/src/routes/index.tsx:202:19"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-tsd-source": "/src/routes/index.tsx:203:19",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "cert-issuer",
											"data-tsd-source": "/src/routes/index.tsx:203:24",
											children: certification.issuer
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											"data-tsd-source": "/src/routes/index.tsx:203:83",
											children: certification.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-tsd-source": "/src/routes/index.tsx:203:113",
											children: certification.credential
										})
									]
								})]
							}, certification.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { "data-tsd-source": "/src/routes/index.tsx:210:9" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			"data-tsd-source": "/src/routes/index.tsx:212:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell footer-inner",
				"data-tsd-source": "/src/routes/index.tsx:212:15",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-tsd-source": "/src/routes/index.tsx:212:51",
					children: ["© 2026 ", portfolio_default.person.copyright]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "back-to-top focus-ring",
					onClick: (event) => {
						event.preventDefault();
						scrollTo("#top");
					},
					"data-tsd-source": "/src/routes/index.tsx:212:88",
					children: ["Back to top ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "data-tsd-source": "/src/routes/index.tsx:212:217" })]
				})]
			})
		})
	] });
}
function SectionHeading({ eyebrow, title, description, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "section-heading",
		"data-tsd-source": "/src/routes/index.tsx:218:10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				"data-tsd-source": "/src/routes/index.tsx:218:46",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id,
				"data-tsd-source": "/src/routes/index.tsx:218:88",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-tsd-source": "/src/routes/index.tsx:218:112",
				children: description
			})
		]
	});
}
function TechMark({ name }) {
	const marks = {
		TypeScript: SiTypescript,
		JavaScript: SiJavascript,
		"Node.js": SiNodedotjs,
		NestJS: SiNestjs,
		TypeORM: SiTypeorm,
		PostgreSQL: SiPostgresql,
		Docker: SiDocker,
		Git: SiGit,
		GitHub: SiGithub,
		Postman: SiPostman,
		JWT: SiJsonwebtokens,
		"Relational Database Design": Database,
		"Role-Based Access Control (RBAC)": ShieldCheck
	};
	const key = name.toLowerCase().replace(/[^a-z]/g, "");
	const Mark = marks[name] ?? CodeXml;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `tech-mark tech-${key}`,
		"aria-hidden": "true",
		"data-tsd-source": "/src/routes/index.tsx:239:10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			className: "tech-logo",
			"data-tsd-source": "/src/routes/index.tsx:239:71"
		})
	});
}
function CredentialMark({ name }) {
	const Mark = {
		HuggingFace: SiHuggingface,
		AWS: FaAws,
		Udacity: SiUdacity,
		FreeCodeCamp: SiFreecodecamp
	}[name];
	if (Mark) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `cert-icon cert-${name.toLowerCase()}`,
		"aria-hidden": "true",
		"data-tsd-source": "/src/routes/index.tsx:252:12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			className: "cert-logo",
			"data-tsd-source": "/src/routes/index.tsx:252:88"
		})
	});
	const initials = name === "Datacom" ? "DC" : "F";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `cert-icon cert-${name.toLowerCase()} cert-lettermark`,
		"aria-hidden": "true",
		"data-tsd-source": "/src/routes/index.tsx:256:10",
		children: initials
	});
}
function CodePanel() {
	const reduced = useReducedMotion();
	const lines = [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "code-decorator",
			"data-tsd-source": "/src/routes/index.tsx:262:7",
			children: "@Controller"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-tsd-source": "/src/routes/index.tsx:262:58",
			children: "('projects')"
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-keyword",
				"data-tsd-source": "/src/routes/index.tsx:263:7",
				children: "export class"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-type",
				"data-tsd-source": "/src/routes/index.tsx:263:57",
				children: " ProjectsController "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"data-tsd-source": "/src/routes/index.tsx:263:112",
				children: "{"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-tsd-source": "/src/routes/index.tsx:264:7",
			children: "  constructor("
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-keyword",
				"data-tsd-source": "/src/routes/index.tsx:265:7",
				children: "    private readonly"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"data-tsd-source": "/src/routes/index.tsx:265:65",
				children: " service: "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-type",
				"data-tsd-source": "/src/routes/index.tsx:265:88",
				children: "ProjectsService"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"data-tsd-source": "/src/routes/index.tsx:265:138",
				children: ","
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			"data-tsd-source": "/src/routes/index.tsx:266:7",
			children: ["  ) ", "{}"]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-tsd-source": "/src/routes/index.tsx:267:7",
			children: " "
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "code-decorator",
			"data-tsd-source": "/src/routes/index.tsx:268:7",
			children: "  @Get"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-tsd-source": "/src/routes/index.tsx:268:53",
			children: "()"
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-keyword",
				"data-tsd-source": "/src/routes/index.tsx:269:7",
				children: "  async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-function",
				"data-tsd-source": "/src/routes/index.tsx:269:52",
				children: " findAll"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"data-tsd-source": "/src/routes/index.tsx:269:99",
				children: ["() ", "{"]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-keyword",
				"data-tsd-source": "/src/routes/index.tsx:270:7",
				children: "    return"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"data-tsd-source": "/src/routes/index.tsx:270:55",
				children: " this.service."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "code-function",
				"data-tsd-source": "/src/routes/index.tsx:270:82",
				children: "findAll"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"data-tsd-source": "/src/routes/index.tsx:270:128",
				children: "();"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			"data-tsd-source": "/src/routes/index.tsx:271:7",
			children: ["  ", "}"]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-tsd-source": "/src/routes/index.tsx:272:7",
			children: "}"
		}) })
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "code-window",
		initial: {
			opacity: 0,
			y: reduced ? 0 : 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: reduced ? 0 : .35 },
		"aria-label": "NestJS controller code example",
		"data-tsd-source": "/src/routes/index.tsx:275:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "code-toolbar",
				"data-tsd-source": "/src/routes/index.tsx:276:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "window-dots",
						"aria-hidden": "true",
						"data-tsd-source": "/src/routes/index.tsx:276:37",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-tsd-source": "/src/routes/index.tsx:276:85" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-tsd-source": "/src/routes/index.tsx:276:93" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-tsd-source": "/src/routes/index.tsx:276:101" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-tsd-source": "/src/routes/index.tsx:276:115",
						children: "projects.controller.ts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "code-status",
						"data-tsd-source": "/src/routes/index.tsx:276:150",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-tsd-source": "/src/routes/index.tsx:276:180" }), " NestJS"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				"data-tsd-source": "/src/routes/index.tsx:277:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					"data-tsd-source": "/src/routes/index.tsx:277:12",
					children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						className: "code-line",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: reduced ? 0 : .15 + index * .055,
							duration: reduced ? 0 : .2
						},
						"data-tsd-source": "/src/routes/index.tsx:277:46",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line-number",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/index.tsx:277:231",
							children: String(index + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-tsd-source": "/src/routes/index.tsx:277:323",
							children: line
						})]
					}, index))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "code-footer",
				"data-tsd-source": "/src/routes/index.tsx:278:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "code-ready",
					"data-tsd-source": "/src/routes/index.tsx:278:36",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-tsd-source": "/src/routes/index.tsx:278:65" }), " API ready"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"data-tsd-source": "/src/routes/index.tsx:278:90",
					children: "TypeScript"
				})]
			})
		]
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section contact-section",
		"aria-labelledby": "contact-title",
		"data-tsd-source": "/src/routes/index.tsx:285:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell",
			"data-tsd-source": "/src/routes/index.tsx:286:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "contact-intro",
				"data-tsd-source": "/src/routes/index.tsx:287:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/index.tsx:288:11",
						children: "05 / Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "contact-title",
						"data-tsd-source": "/src/routes/index.tsx:288:56",
						children: "Let’s build something dependable."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-tsd-source": "/src/routes/index.tsx:288:117",
						children: "Have a backend challenge, a role, or an idea worth exploring? I’m always open to a thoughtful conversation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "social-links",
						"data-tsd-source": "/src/routes/index.tsx:289:11",
						children: portfolio_default.socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: social.url,
							target: social.url.startsWith("http") ? "_blank" : void 0,
							rel: social.url.startsWith("http") ? "noopener noreferrer" : void 0,
							className: "social-link focus-ring",
							"aria-label": social.url.startsWith("http") ? `Visit ${social.label} profile` : `Email ${portfolio_default.person.name}`,
							"data-tsd-source": "/src/routes/index.tsx:289:71",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "social-icon",
									"data-tsd-source": "/src/routes/index.tsx:289:387",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconByName, {
										name: social.icon,
										"data-tsd-source": "/src/routes/index.tsx:289:417"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"data-tsd-source": "/src/routes/index.tsx:289:457",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
										"data-tsd-source": "/src/routes/index.tsx:289:463",
										children: "Connect via"
									}), social.label]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "data-tsd-source": "/src/routes/index.tsx:289:510" })
							]
						}, social.label))
					})
				]
			})
		})
	});
}
//#endregion
export { PortfolioPage as component };
