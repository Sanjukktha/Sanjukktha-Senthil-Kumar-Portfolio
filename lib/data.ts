export const personalInfo = {
  name: "Sanjukktha Senthil Kumar",
  firstName: "Sanjukktha",
  lastName: "Senthil Kumar",
  location: "Dallas, TX",
  email: "sanjukkthasenthilkumar@gmail.com",
  phone: "6823908174",
  linkedin: "linkedin.com/in/sanjukkthasenthilkumar",
  github: "https://github.com/Sanjukktha",
  title: "AI & Software Engineer",
  eyebrow: "AI & Software Engineer · Dallas, TX (Open to Relocation)",
  tagline: "Building scalable systems and intelligent products",
  summary:
    "Software engineer building full-stack applications and AI systems that work in the real world.",
  about: [
    "I'm Sanjukktha Senthil Kumar, a software engineer finishing my CS master's at UT Arlington (GPA: 4.0, graduated May 2026) with 3+ years of professional experience building full-stack applications and AI systems across enterprise and startup environments.",
    "I've worked across the stack, from frontend interfaces to backend services to cloud infrastructure, and have hands-on production experience with agentic AI pipelines, RAG systems, and distributed backend engineering. I enjoy working on problems where the engineering actually matters and where what I ship reaches real users.",
    "Based in Dallas, TX, open to relocation. Available full-time from June 2026.",
  ],
};

export const heroStats = [
  {
    value: "4.0",
    decimal: 1,
    suffix: "",
    label: "MS Computer Science GPA at UT Arlington",
  },
  {
    value: "3",
    suffix: "+",
    label: "Years building production full-stack and AI systems",
  },
  {
    value: "9",
    suffix: "+",
    label: "Shipped projects across systems, AI, and data",
  },
  {
    value: "7",
    suffix: "",
    label: "Cloud and ML certifications across AWS, Azure, and Stanford",
  },
];

export const companies = [
  {
    name: "Goldman Sachs",
    logo: "/logos/goldman-sachs.png",
    url: "https://www.goldmansachs.com",
    size: "h-14",
  },
  {
    name: "Saint-Gobain Research",
    logo: "/logos/saint-gobain.png",
    url: "https://www.saint-gobain.com",
    size: "h-10",
  },
  {
    name: "TeleApps",
    logo: "/logos/teleapps.avif",
    url: "#",
    size: "h-10",
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Texas at Arlington",
    location: "Arlington, TX",
    date: "Aug 2024 – May 2026",
    gpa: "4.00",
    honors:
      "Software Engineering II · Data Analysis & Modelling Techniques · Design and Analysis of Algorithms",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "SASTRA University",
    location: "Tamil Nadu, India",
    date: "",
    gpa: "4.00",
    honors:
      "Software Engineering · Data Warehousing & Mining · Natural Language Processing · Cloud Computing",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified Solutions Architect",
  "Stanford Machine Learning",
  "Microsoft Azure Data Engineer Associate",
  "Microsoft SQL Server",
  "SnowPro Core",
  "Azure Fundamentals",
];

export interface Experience {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
  tags: string[];
  logo?: string;
  pdfPath?: string;
}

export const experiences: Experience[] = [
  {
    company: "Goldman Sachs",
    role: "Summer Engineer Analyst",
    location: "Dallas, TX",
    date: "Jun 2025 – Aug 2025",
    logo: "/logos/goldman-sachs.png",
    pdfPath: "/work-exp/goldman-sachs.pdf",
    bullets: [
      "Architected TalentFlowAI, a multi-step agentic AI pipeline using LangChain AgentExecutor with Pydantic-validated tools, GPT-4 via Azure OpenAI, and cosine similarity search over Pinecone vector embeddings to automate candidate screening.",
      "Engineered a Python/FastAPI microservice for AI inference integrated with a Spring Boot backend over HTTP, following enterprise polyglot architecture patterns for production AI/ML in Java stacks.",
      "Implemented production reliability guardrails — iteration caps, automatic retry on malformed tool calls, Pydantic input schema validation, and explicit zero-result handling — to prevent hallucinated candidates.",
      "Built a candidate progression tracking platform in React/TypeScript with a Spring Boot/MongoDB backend, surfacing real-time pipeline blockers across pre-interview vetting, offer, and post-offer stages.",
      "Integrated ServiceNow ticket visibility at pipeline blockers and built reusable WCAG-compliant UI components on the GS UI toolkit to ensure accessibility compliance.",
    ],
    tags: [
      "LangChain",
      "Agentic AI",
      "GPT-4 / Azure OpenAI",
      "Pinecone",
      "FastAPI",
      "React / TypeScript",
      "Spring Boot",
      "MongoDB",
    ],
  },
  {
    company: "Saint-Gobain Research",
    role: "Product Engineer, Research Systems",
    location: "Tamil Nadu, India",
    date: "Jan 2024 – Jun 2024",
    logo: "/logos/saint-gobain.png",
    pdfPath: "/work-exp/saint-gobain.pdf",
    bullets: [
      "Led a Phase 0 feasibility study evaluating AI automation potential for experiment intake — designed an OpenAI extraction layer with tool calling to parse unstructured submissions into JSON records, quantifying 800+ requests / 2 weeks with 76% of QA tasks automatable.",
      "Built an analytics platform with a Node.js/REST backend and Python ingestion pipelines supporting comparison across 30+ material scenarios and 15 experimental use cases, enabling researchers to cut manual aggregation.",
      "Designed a Pydantic schema with bulk insert via SQLAlchemy, enforcing canonical data standards across 8 global sites.",
      "Integrated the platform with Salesforce (sObject API) for technical reporting and to surface material data directly on client records.",
    ],
    tags: [
      "OpenAI",
      "Tool Calling",
      "Node.js",
      "Python",
      "SQLAlchemy",
      "Pydantic",
      "Salesforce",
    ],
  },
  {
    company: "TeleApps",
    role: "Associate Product Operations Engineer",
    location: "Tamil Nadu, India",
    date: "Mar 2022 – Dec 2023",
    logo: "/logos/teleapps.avif",
    pdfPath: "/work-exp/teleapps-tech-ops.pdf",
    bullets: [
      "Engineered ML inference services using Kafka, FastAPI, Redis caching, and ONNX Runtime to classify caller intent in IVR utterances for a telecom client, achieving sub-200ms end-to-end latency under concurrent campaign workloads without GPU infrastructure.",
      "Containerized microservices for inference with request-level caching, model versioning, and lazy loading at first inference request.",
      "Designed ETL pipelines in pandas including lag features, rolling windows, seasonality indicators, and trend decomposition for a call-volume workload prediction model, reducing customer wait times.",
    ],
    tags: [
      "Kafka",
      "FastAPI",
      "Redis",
      "ONNX Runtime",
      "Python",
      "Pandas",
      "Docker",
    ],
  },
  {
    company: "TeleApps",
    role: "Technology Operations Analyst",
    location: "Tamil Nadu, India",
    date: "Jun 2021 – Feb 2022",
    logo: "/logos/teleapps.avif",
    pdfPath: "/work-exp/teleapps-product-engineer.pdf",
    bullets: [
      "Built Python data pipelines to extract, validate, and reconcile wind turbine sensor time-series data — implementing per-column z-score outlier detection and forward-fill gap recovery to preserve data integrity without silently dropping flagged readings.",
      "Developed performance dashboards using matplotlib and seaborn (heatmaps, anomaly scatter plots), enabling operations teams to identify underperforming turbines.",
      "Configured Adobe Workfront project workflows with task dependencies, approval stages, and cross-team status tracking to coordinate batched data deliverables to client-facing delivery teams.",
    ],
    tags: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Time-Series",
      "Adobe Workfront",
    ],
  },
];

export type ProjectCategory = "Software Engineering" | "AI / ML" | "Data Analytics";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  date: string;
  highlights: string[];
  tags: string[];
  details: string;
  /** Tagline on cover SVG */
  coverLabel: string;
}

export const projects: Project[] = [
  // SOFTWARE ENGINEERING
  {
    id: "high-frequency-queue",
    title: "High-Frequency Event Queue Simulator",
    category: "Software Engineering",
    description:
      "Distributed event simulation platform processing 50K+ events per minute using Kafka topics with partitioned producers and Redis-backed coordination.",
    date: "Mar 2025",
    highlights: [
      "Designed a distributed event simulation platform processing 50K+ events per minute using Kafka topics with partitioned producers and Redis-backed coordination, simulating real-world queue bursts, retries, and backpressure under peak load.",
      "Engineered real-time React dashboards with WebSocket updates to monitor throughput, retries, and failure rates under heavy load.",
      "Benchmarked and tuned Kafka batch sizes, consumer concurrency, and Redis access patterns, achieving sub-200ms end-to-end latency while preserving delivery guarantees.",
    ],
    tags: ["Kafka", "Redis", "React", "WebSocket", "Distributed Systems"],
    details:
      "A high-frequency event queue simulator showcasing distributed systems and real-time data processing under realistic load patterns.",
    coverLabel: "KAFKA · REDIS · STREAMING",
  },
  {
    id: "mini-s3",
    title: "Mini S3 — Fault-Tolerant File Storage",
    category: "Software Engineering",
    description:
      "Distributed object storage system in Java with gRPC node-to-node communication, consistent hashing for placement, and configurable replication.",
    date: "May 2024",
    highlights: [
      "Implemented a distributed object storage system in Java using gRPC for node-to-node communication, consistent hashing for data placement, and configurable replication strategies.",
      "Built versioning and partition-tolerance mechanisms modeling S3-like reliability across multiple concurrent users.",
      "Evaluated replication-factor policies by simulating node outages and rebalancing, reducing storage overhead by 13% while preserving 99.6% fault tolerance.",
    ],
    tags: ["Java", "gRPC", "Consistent Hashing", "Replication"],
    details:
      "Mini S3 replicates the core functionality of Amazon S3 — consistent hashing for placement, configurable replication, and gRPC for efficient inter-node transfer.",
    coverLabel: "GRPC · HASHING · REPLICATION",
  },
  {
    id: "mini-okta",
    title: "Mini-Okta — Secure Authentication Service",
    category: "Software Engineering",
    description:
      "Authentication and MFA service using Node.js, JWT, and OAuth2 with token-refresh workflows and Redis-cached session validation.",
    date: "Feb 2024",
    highlights: [
      "Developed a secure authentication and MFA service using Node.js, JWT, and OAuth2 with token-refresh workflows.",
      "Implemented role-based access-control (RBAC) middleware for granular user and admin permissions.",
      "Integrated Redis-based caching for active token state and session validation, reducing authentication latency by ~9% under concurrent load.",
    ],
    tags: ["Node.js", "JWT", "OAuth2", "Redis", "RBAC"],
    details:
      "Enterprise-grade authentication: MFA, OAuth2 flows, RBAC, and Redis-cached sessions for high-throughput token validation.",
    coverLabel: "JWT · OAUTH2 · MFA",
  },

  // AI / ML
  {
    id: "taskpilot-ai",
    title: "TaskPilot AI",
    category: "AI / ML",
    description:
      "Autonomous workflow execution engine using OpenAI APIs, FAISS, and FastAPI to plan and execute 1,000+ multi-step task scenarios with retrieval-augmented planning.",
    date: "Mar 2025",
    highlights: [
      "Built an AI workflow engine using OpenAI APIs, FAISS vector search, and FastAPI to interpret and execute 1,000+ multi-step task scenarios.",
      "Implemented retrieval-augmented planning with semantic indexing to ground execution across 50K+ internal documents.",
      "Developed dynamic tool-routing layers integrating REST APIs, PostgreSQL, and AWS services with sub-400ms response latency.",
      "Designed feedback, verification, and rollback mechanisms with confidence scoring and retry policies, reducing execution failures by ~22%.",
    ],
    tags: ["OpenAI", "FAISS", "RAG", "FastAPI", "Tool Routing"],
    details:
      "Autonomous workflow execution grounded by RAG over internal documents, with confidence scoring, verification, and rollback.",
    coverLabel: "AGENTS · RAG · TOOL ROUTING",
  },
  {
    id: "hiresense-ai",
    title: "HireSense AI",
    category: "AI / ML",
    description:
      "AI recruiting intelligence platform using HuggingFace Transformers, OpenAI embeddings, Pinecone, and RAG to analyze 10K+ resumes and generate skill-gap reports.",
    date: "May 2024",
    highlights: [
      "Built an AI recruiting platform using HuggingFace Transformers, OpenAI embeddings, Pinecone, and RAG to analyze 10K+ resumes and job descriptions and generate automated skill-gap reports.",
      "Fine-tuned domain-specific language models on curated hiring datasets, improving skill-matching precision by ~17%.",
      "Deployed scalable inference using FastAPI, Docker, and AWS ECS, supporting 200+ concurrent users with real-time feedback.",
    ],
    tags: ["HuggingFace", "Pinecone", "RAG", "Fine-tuning", "AWS ECS"],
    details:
      "Combines vector search and structured metadata to analyze resumes at scale, with fine-tuned language models for domain-specific skill matching.",
    coverLabel: "EMBEDDINGS · RAG · FINE-TUNING",
  },
  {
    id: "riskguard-ml",
    title: "RiskGuard ML",
    category: "AI / ML",
    description:
      "Supervised and semi-supervised fraud-detection models using XGBoost, Random Forest, and PyTorch on 5M+ transactional records, deployed for real-time risk scoring.",
    date: "Feb 2024",
    highlights: [
      "Built supervised and semi-supervised fraud-detection models using XGBoost, Random Forest, and PyTorch on 5M+ transactional records.",
      "Implemented cross-validation, ROC-AUC optimization, and cost-sensitive threshold tuning to improve fraud-detection recall by ~19%.",
      "Deployed real-time risk-scoring APIs using Flask, Redis caching, and Kubernetes with monitoring and drift detection.",
    ],
    tags: ["XGBoost", "PyTorch", "Kubernetes", "Drift Detection"],
    details:
      "Ensemble fraud detection with XGBoost and Random Forest plus PyTorch neural pattern recognition, deployed for real-time risk scoring.",
    coverLabel: "XGBOOST · PYTORCH · ROC-AUC",
  },

  // DATA ANALYTICS
  {
    id: "revenuepulse",
    title: "RevenuePulse",
    category: "Data Analytics",
    description:
      "Centralized revenue analytics platform using Snowflake, dbt, and Airflow to consolidate billing across 6 regional markets, with predictive forecasting.",
    date: "Mar 2025",
    highlights: [
      "Built a centralized revenue analytics platform using Snowflake, dbt, and Airflow to consolidate billing records across 6 regional markets.",
      "Designed star-schema models enabling forecasting, win-rate analysis, and pipeline coverage reporting for 50+ sales leaders in Looker.",
      "Developed predictive revenue forecasts using Prophet and XGBoost, improving quarterly forecast accuracy by ~11%.",
      "Created executive dashboards tracking ARR, churn, deal velocity, and quota attainment.",
    ],
    tags: ["Snowflake", "dbt", "Airflow", "Looker", "Prophet"],
    details:
      "Enterprise revenue analytics consolidating six markets in a unified Snowflake warehouse with dbt models and predictive forecasts.",
    coverLabel: "ARR · CHURN · FORECASTING",
  },
  {
    id: "growthlens",
    title: "GrowthLens",
    category: "Data Analytics",
    description:
      "End-to-end growth analytics integrating Google Analytics, Segment, and Redshift to analyze 10K+ user sessions across cohort, attribution, and LTV models.",
    date: "May 2024",
    highlights: [
      "Built end-to-end growth analytics pipelines integrating Google Analytics, Segment, and Amazon Redshift to analyze 10K+ historical user sessions across web channels.",
      "Implemented cohort, attribution, and lifetime-value analysis using dbt and Spark SQL, improving channel ROI by ~14%.",
      "Developed real-time marketing and product dashboards in Tableau and Amplitude tracking 25+ behavioral and performance metrics.",
      "Applied A/B testing and uplift modeling to evaluate campaign and feature impact, increasing conversion rates by ~9%.",
    ],
    tags: ["Redshift", "dbt", "Spark SQL", "Tableau", "A/B Testing"],
    details:
      "Customer analytics across funnel, cohort, and LTV models with uplift testing and real-time dashboards in Tableau and Amplitude.",
    coverLabel: "COHORT · ATTRIBUTION · LTV",
  },
  {
    id: "opsguard",
    title: "OpsGuard",
    category: "Data Analytics",
    description:
      "Operational analytics on Azure Data Factory and Synapse with Isolation-Forest anomaly detection and automated root-cause reporting.",
    date: "Feb 2024",
    highlights: [
      "Built an operational analytics system using Azure Data Factory, Synapse Analytics, and Power BI to process operational records monthly in simulated service environments.",
      "Deployed anomaly detection and threshold-based alerting using Isolation Forest and statistical control charts, reducing simulated SLA violations by ~16%.",
      "Automated root-cause analysis reports, reducing incident resolution time by ~21% in controlled testing.",
    ],
    tags: ["Azure Data Factory", "Synapse", "Power BI", "Isolation Forest"],
    details:
      "Operational risk and performance monitoring with ML anomaly detection and automated RCA reporting.",
    coverLabel: "SLA · ANOMALY · RCA",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "Go",
      "Rust",
      "Ruby",
      "C / C++",
      "R",
      "Bash / Shell",
      "SQL",
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "HTML5",
      "Spring Boot",
      "FastAPI",
      "Django",
      "Flask",
      "Ruby on Rails",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "LangChain",
      "LangGraph",
      "MCP (Model Context Protocol)",
      "Claude Code",
      "OpenAI / GPT-4",
      "Hugging Face",
      "LlamaIndex",
      "n8n",
      "Whisper",
      "Tool / Function Calling",
      "Retrieval-Augmented Generation (RAG)",
      "Vector DBs (Pinecone, FAISS)",
      "Agentic Workflows",
      "Prompt Engineering",
      "PyTorch",
      "scikit-learn",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Snowflake",
      "BigQuery",
      "Redshift",
      "Databricks",
      "dbt",
      "Apache Airflow",
      "Apache Spark",
      "Apache Kafka",
      "Pandas",
      "NumPy",
      "Advanced SQL",
      "Tableau",
      "Power BI",
      "Looker",
      "ETL / ELT Pipelines",
      "Time-Series Forecasting",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS (EC2, S3, Lambda, ECS, Redshift)",
      "Azure (OpenAI, Functions, Synapse)",
      "GCP (BigQuery)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Serverless",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "Tools & Practice",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Confluence",
      "Jenkins",
      "GitHub Actions",
      "CI / CD Pipelines",
      "Postman",
      "Agile / Scrum",
      "SDLC",
      "Code Review",
      "API Design",
      "System Design",
      "Cross-Platform Development",
    ],
  },
];
