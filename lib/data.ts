export const personalInfo = {
  name: "Sanjukktha Senthil Kumar",
  location: "Arlington, TX",
  email: "sanjukkthasenthilkumar@gmail.com",
  phone: "6823908174",
  linkedin: "linkedin.com/in/sanjukkthasenthilkumar",
  github: "https://github.com/Sanjukktha",
  title: "Software Engineer | ML Engineer | Data Scientist",
  summary:
    "I'm a full-stack engineer with expertise spanning software engineering, machine learning, and data analytics. Currently pursuing my MS in Computer Science at UT Arlington with a perfect 4.0 GPA. I have experience building scalable systems, AI-powered applications, and data-driven solutions at Goldman Sachs, Saint-Gobain Research, TeleApps, and Bahwan CyberTek.",
};

export const resumeLinks = {
  swe: "/resumes/swe-resume.pdf",
  ml: "/resumes/ml-ai-resume.pdf",
  data: "/resumes/data-resume.pdf",
};

export const companies = [
  {
    name: "Goldman Sachs",
    logo: "/logos/goldman-sachs.png",
    url: "https://www.goldmansachs.com",
  },
  {
    name: "Saint-Gobain Research",
    logo: "/logos/saint-gobain.jpg",
    url: "https://www.saint-gobain.com",
  },
  {
    name: "TeleApps",
    logo: "/logos/teleapps.avif",
    url: "#",
  },
  {
    name: "Bahwan CyberTek",
    logo: "/logos/bahwan-cybertek.jpg",
    url: "https://www.bahwan.com",
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Texas at Arlington",
    location: "Arlington, TX",
    date: "May 2026",
    gpa: "4.00/4.00",
    courses: [
      "Software Engineering II",
      "Data Analysis & Modelling Techniques",
      "Design and Analysis of Algorithm",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "SASTRA University",
    location: "Tamil Nadu, India",
    gpa: "4.00/4.00",
    courses: [
      "Software Engineering",
      "Data warehouse & Data mining",
      "Natural Language Processing",
      "Cloud Computing",
    ],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified Solutions Architect",
  "Stanford Machine Learning Certified",
  "Microsoft Azure Data Engineer Associate",
  "Microsoft SQL Server Certification",
  "SnowPro Core Certification",
  "Azure Fundamentals",
];

export type ExperienceType = "swe" | "ml" | "data";

export interface Experience {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
  type: ExperienceType;
  logo?: string;
}

// SWE Experiences - exactly as per SWE resume
export const sweExperiences: Experience[] = [
  {
    company: "Goldman Sachs",
    role: "Summer Engineer Analyst",
    location: "Dallas, Texas, USA",
    date: "Aug 2025",
    logo: "/logos/goldman-sachs.png",
    bullets: [
      "Deployed TalentFlowAI, a multi-step agentic AI pipeline using LangChain Agents and Tool calling to automate candidate profiling",
      "Implemented embedding-based semantic scoring and decision pipelines to automate applicant prioritization and screening workflows",
      "Built an internal recruitment platform using React, TypeScript, and MongoDB, supporting workflows for 100+ recruiters in HCM division",
      "Optimized Spring Boot services and MongoDB pipelines with asynchronous processing, improving API latency by 5% for recruiter-facing systems",
      "Built reusable, WCAG-compliant UI components using GS' design system, accelerating feature delivery by 11% ensuring consistent UX",
      "Collaborated in Agile teams to deliver type-safe React features, platform optimizations, and AI-driven integrations for recruiter-facing systems",
    ],
    type: "swe",
  },
  {
    company: "Saint-Gobain Research",
    role: "Product Manager, Research Systems",
    location: "Tamil Nadu, India",
    date: "Jun 2024",
    logo: "/logos/saint-gobain.jpg",
    bullets: [
      "Led development of a web-based analytics platform tracking glass performance across 15 experimental use cases (glass fiber)",
      "Defined data standards and metadata governance to support real-time comparison of 30+ material scenarios, reducing analysis time by 12%",
      "Developed Node.js backend services and integrated Python data pipelines for automated ingestion, processing, and validation",
      "Integrated research analytics with Salesforce and HubSpot APIs to support automated technical reporting and customer insights",
    ],
    type: "swe",
  },
  {
    company: "TeleApps",
    role: "Associate Product Operations Engineer",
    location: "Tamil Nadu, India",
    date: "Mar 2023",
    logo: "/logos/teleapps.avif",
    bullets: [
      "Engineered event-driven ML inference services using Kafka, FastAPI, Redis caching, and ONNX runtime, enabling asynchronous model scoring and sub-200ms response times under concurrent campaign workloads",
      "Deployed Containerized microservices for real-time inference and internal reporting, implementing model versioning, lazy loading, and request-level caching, reducing cold-start latency and inference load time by ~20%",
      "Created end-to-end feature engineering pipelines using pandas and time-series transformations including lag features, rolling windows, seasonality indicators, and trend decomposition, improving model stability by ~15%",
    ],
    type: "swe",
  },
  {
    company: "Bahwan CyberTek",
    role: "Technology Operations Analyst",
    location: "Chennai, Tamil Nadu, India",
    date: "Feb 2022",
    logo: "/logos/bahwan-cybertek.jpg",
    bullets: [
      "Supported enterprise data by extracting, validating, and reconciling large datasets across multiple systems to improve client reporting accuracy",
      "Built Python based data analysis scripts and dashboards to evaluate user behavior and market trends for consulting and delivery teams",
      "Assisted in configuring project workflows using Adobe Workfront, supporting task tracking, documentation, and cross team coordination across analytics projects",
    ],
    type: "swe",
  },
];

// ML/AI Experiences - exactly as per ML resume
export const mlExperiences: Experience[] = [
  {
    company: "Goldman Sachs",
    role: "LLM Engineer Analyst",
    location: "Dallas, Texas, USA",
    date: "Aug 2025",
    logo: "/logos/goldman-sachs.png",
    bullets: [
      "Built and deployed TalentFlowAI, a multi-step agentic LLM pipeline using LangChain and tool calling to automate candidate profiling",
      "Implemented embedding-based semantic retrieval and ranking pipelines to automate applicant prioritization and recruiter screening workflows",
      "Designed decision orchestration logic to generate screening summaries and recommend next-stage actions using confidence signals",
      "Developed recruiter-facing web interfaces in React and TypeScript to surface AI outputs with traceability and human-in-the-loop controls",
      "Optimized Spring Boot services and MongoDB pipelines with asynchronous processing, improving inference and retrieval latency by 5%",
      "Built reusable, WCAG-compliant UI components aligned with GS design system to standardize AI-powered recruiting workflows",
    ],
    type: "ml",
  },
  {
    company: "Saint-Gobain Research",
    role: "Product Manager - ML Engineer",
    location: "Tamil Nadu, India",
    date: "Jun 2024",
    logo: "/logos/saint-gobain.jpg",
    bullets: [
      "Built a data analytics platform using regression model workflows to model experimental material performance across 15 research programs",
      "Designed standardized data schemas and metadata pipelines to enable large-scale comparison of 30+ material scenarios",
      "Developed Node.js services and Python pipelines for automated feature extraction, validation, and data quality monitoring",
      "Integrated research datasets with Salesforce and HubSpot APIs to enable ML-driven technical reporting and customer insights",
    ],
    type: "ml",
  },
  {
    company: "TeleApps",
    role: "Associate ML Operations Engineer",
    location: "Tamil Nadu, India",
    date: "Mar 2023",
    logo: "/logos/teleapps.avif",
    bullets: [
      "Built RESTful ML analytics services using TensorFlow and Flask to power customer engagement and campaign performance platforms",
      "Deployed containerized ML microservices for real-time inference and internal reporting, implementing model versioning, lazy loading, and request-level caching, reducing cold-start latency and inference load time by ~20%",
      "Created end-to-end feature engineering pipelines using pandas and time-series transformations including lag features, rolling windows, seasonality indicators, and trend decomposition, improving model stability by ~15%",
    ],
    type: "ml",
  },
  {
    company: "Bahwan CyberTek",
    role: "Data Engineer, Analytics Automation",
    location: "Chennai, Tamil Nadu, India",
    date: "Feb 2022",
    logo: "/logos/bahwan-cybertek.jpg",
    bullets: [
      "Supported enterprise data by extracting, validating, and reconciling large datasets across multiple systems to improve client reporting accuracy",
      "Built Python based data analysis scripts and dashboards to evaluate user behavior and market trends for consulting and delivery teams",
      "Assisted in configuring project workflows using Adobe Workfront, supporting task tracking, documentation, and cross team coordination across analytics projects",
    ],
    type: "ml",
  },
];

// Data Experiences - exactly as per Data resume
export const dataExperiences: Experience[] = [
  {
    company: "Goldman Sachs",
    role: "Data Engineer Analyst",
    location: "Dallas, Texas, USA",
    date: "Aug 2025",
    logo: "/logos/goldman-sachs.png",
    bullets: [
      "Built hiring analytics datasets using PostgreSQL and Amazon Redshift to analyze 10,000+ applicants and recruitment funnel performance",
      "Developed automated scoring workflows using Apache NiFi and scheduled batch jobs, reducing manual recruiter review effort by ~16%",
      "Designed hiring performance dashboards in Qlik Sense tracking 20+ KPIs including time-to-hire, offer yield, and recruiter productivity",
      "Implemented data reconciliation, completeness checks, and audit logging frameworks to improve reporting reliability by ~13%",
      "Integrated ATS, HRIS, and assessment data sources using REST APIs and data connectors to enable cross-system workforce analytics",
    ],
    type: "data",
  },
  {
    company: "Saint-Gobain Research",
    role: "Data Analyst, Research & Performance Analytics",
    location: "Tamil Nadu, India",
    date: "Jun 2024",
    logo: "/logos/saint-gobain.jpg",
    bullets: [
      "Analyzed experimental data from 15+ glass fiber trials using SQL-based aggregation to identify durability trends for R&D teams",
      "Built metadata frameworks enabling comparison of 30+ material variants, reducing analysis turnaround by ~12% for research engineers",
      "Developed automated data pipelines and validation workflows using Airflow, dbt, and BigQuery, with downstream reporting in Tableau and Looker, improving data reliability by ~11% for business analytics",
      "Designed KPI dashboards with lab performance metrics in CRM systems to support data-driven material selection and customer engg. decisions",
    ],
    type: "data",
  },
  {
    company: "TeleApps",
    role: "Associate Data Analyst, Customer & Campaign Analytics",
    location: "Tamil Nadu, India",
    date: "Mar 2023",
    logo: "/logos/teleapps.avif",
    bullets: [
      "Built customer analytics pipelines integrating Google Analytics, CRM data, and Amazon Redshift to analyze 300k+ user interactions and track acquisition, engagement, and conversion funnels across campaigns",
      "Developed executive and marketing performance dashboards in Power BI and Excel Power Pivot tracking 15+ KPIs including ROI, CTR, retention, and cohort behavior for leadership teams",
      "Implemented response modeling using Spark and scikit-learn to identify high-value users, improving campaign targeting efficiency by ~14%",
    ],
    type: "data",
  },
  {
    company: "Bahwan CyberTek",
    role: "Junior Data Engineer, Business Intelligence",
    location: "Chennai, Tamil Nadu, India",
    date: "Feb 2022",
    logo: "/logos/bahwan-cybertek.jpg",
    bullets: [
      "Built reconciliation pipelines using SQL Server, Informatica PowerCenter, and Excel Power Query to validate 500K+ records across finance and operations systems",
      "Developed operational dashboards in Power BI and SSRS to track service delivery KPIs, utilization, and exception rates for consulting teams",
      "Implemented audit frameworks using Talend Data Quality and custom validation scripts, reducing reporting discrepancies by ~18%",
    ],
    type: "data",
  },
];

export function getExperiencesByType(type: ExperienceType): Experience[] {
  switch (type) {
    case "swe":
      return sweExperiences;
    case "ml":
      return mlExperiences;
    case "data":
      return dataExperiences;
    default:
      return [];
  }
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  type: ExperienceType;
  highlights: string[];
  details: string;
}

// SWE Projects - exactly 3 from SWE resume
export const sweProjects: Project[] = [
  {
    id: "high-frequency-queue",
    title: "High-Frequency Event Queue Simulator",
    subtitle: "Distributed Event Simulation Platform",
    description:
      "A distributed event simulation platform processing 50K+ events per minute using Kafka topics with partitioned producers",
    date: "Mar 2025",
    type: "swe",
    highlights: [
      "Designed a distributed event simulation platform processing 50K+ events per minute, using Kafka topics with partitioned producers and Redis backed coordination to simulate real world queue bursts, retries, and backpressure under peak load conditions",
      "Engineered real-time dashboards in React with WebSocket updates to monitor throughput, retries, and failure rates under heavy load",
      "Benchmarked and optimized end to end streaming pipelines by tuning Kafka batch sizes, consumer concurrency, and Redis access patterns, achieving sub 200ms end to end latency while maintaining delivery guarantees in high volume scenarios",
    ],
    details:
      "This high-frequency event queue simulator demonstrates expertise in distributed systems and real-time data processing. The platform simulates real-world queue scenarios including bursts, retries, and backpressure under peak load conditions. The React-based monitoring dashboard provides real-time visibility into throughput, failure rates, and system health.",
  },
  {
    id: "mini-s3",
    title: "Mini S3 - Fault-Tolerant File Storage",
    subtitle: "Distributed Object Storage System",
    description:
      "A distributed object storage system in Java using gRPC for node to node communication, consistent hashing for data placement, and configurable replication strategies",
    date: "May 2024",
    type: "swe",
    highlights: [
      "Implemented a distributed object storage system in Java using gRPC for node to node communication, consistent hashing for data placement, and configurable replication strategies to ensure durability and horizontal scalability",
      "Built versioning and partition-tolerance mechanisms, modeling S3-like reliability across multiple concurrent users",
      "Designed and evaluated replication factor policies by simulating node outages and rebalancing events, reducing storage overhead by 13% while preserving 99.6% fault tolerance under modeled failure conditions",
    ],
    details:
      "Mini S3 is a distributed object storage system that replicates the core functionality of Amazon S3. The system uses consistent hashing for data placement across nodes and implements configurable replication strategies for durability. The gRPC-based communication layer ensures efficient node-to-node data transfer.",
  },
  {
    id: "mini-okta",
    title: "Mini-Okta - Secure Authentication Service",
    subtitle: "Authentication and MFA Service",
    description:
      "A secure authentication and MFA service using Node.js, JWT, and OAuth2, supporting token refresh workflows",
    date: "Feb 2024",
    type: "swe",
    highlights: [
      "Developed a secure authentication and MFA service using Node.js, JWT, and OAuth2, supporting token refresh workflows",
      "Implemented role-based access control (RBAC) middleware for granular user and admin-level permissions",
      "Integrated Redis based caching for active token state and session validation, optimizing token lookup and refresh paths and reducing authentication latency by ~9% under concurrent request loads",
    ],
    details:
      "Mini-Okta provides enterprise-grade authentication capabilities including multi-factor authentication, OAuth2 flows, and comprehensive session management. The RBAC middleware enables fine-grained permission control for different user roles. Redis caching optimizes token validation for high-throughput scenarios.",
  },
];

// ML Projects - exactly 3 from ML resume
export const mlProjects: Project[] = [
  {
    id: "taskpilot-ai",
    title: "TaskPilot AI",
    subtitle: "Autonomous Workflow Execution System",
    description:
      "An AI workflow engine using OpenAI APIs, FAISS vector search, and FastAPI to interpret and execute 1,000+ multi-step task scenarios",
    date: "Mar 2025",
    type: "ml",
    highlights: [
      "Built an AI workflow engine using OpenAI APIs, FAISS vector search, and FastAPI to interpret and execute 1,000+ multi-step task scenarios",
      "Implemented retrieval-augmented planning with semantic indexing to ground task execution across 50K+ internal documents",
      "Developed dynamic tool-routing layers integrating REST APIs, PostgreSQL, and AWS services, enabling automated execution with sub-400ms response latency",
      "Designed feedback, verification, and rollback mechanisms with confidence scoring and retry policies, reducing execution failures by ~22%",
    ],
    details:
      "TaskPilot AI is an autonomous workflow execution system that leverages large language models to interpret and execute complex multi-step tasks. The system uses RAG (Retrieval-Augmented Generation) to ground task execution in relevant context from internal documents, ensuring accurate and contextual responses.",
  },
  {
    id: "hiresense-ai",
    title: "HireSense AI",
    subtitle: "Resume & Interview Intelligence Platform",
    description:
      "An AI-powered recruiting intelligence platform using HuggingFace Transformers, OpenAI embeddings, Pinecone, and RAG pipelines",
    date: "May 2024",
    type: "ml",
    highlights: [
      "Built an AI-powered recruiting intelligence platform using HuggingFace Transformers, OpenAI embeddings, Pinecone, and RAG pipelines that combined vector search and structured metadata to analyze 10K+ resumes and job descriptions and generate automated skill gap reports",
      "Fine-tuned domain-specific language models on curated hiring datasets, improving skill-matching precision by ~17%",
      "Deployed scalable inference services using FastAPI, Docker, and AWS ECS, supporting 200+ concurrent users with real-time feedback",
    ],
    details:
      "HireSense AI revolutionizes the recruiting process by combining vector search with RAG pipelines to analyze resumes and job descriptions at scale. The platform uses fine-tuned language models trained on hiring datasets to understand domain-specific terminology and provide accurate skill matching.",
  },
  {
    id: "riskguard-ml",
    title: "RiskGuard ML",
    subtitle: "Transaction Fraud Detection System",
    description:
      "Supervised and semi-supervised fraud detection models using XGBoost, Random Forest, and PyTorch on 5M+ transactional records",
    date: "Feb 2024",
    type: "ml",
    highlights: [
      "Built supervised and semi-supervised fraud detection models using XGBoost, Random Forest, and PyTorch on 5M+ transactional records",
      "Implemented cross-validation, ROC-AUC optimization, and cost-sensitive threshold tuning to improve fraud detection recall by ~19%",
      "Deployed real-time risk scoring APIs using Flask, Redis caching, and Kubernetes with monitoring and drift detection pipelines",
    ],
    details:
      "RiskGuard ML is a comprehensive fraud detection system that combines multiple machine learning approaches to identify fraudulent transactions in real-time. The system uses ensemble methods with XGBoost and Random Forest for high accuracy, while PyTorch-based neural networks handle complex pattern recognition.",
  },
];

// Data Projects - exactly 3 from Data resume
export const dataProjects: Project[] = [
  {
    id: "revenuepulse",
    title: "RevenuePulse",
    subtitle: "Enterprise Sales & Forecasting Analytics Platform",
    description:
      "A centralized revenue analytics platform using Snowflake, dbt, and Airflow to consolidate billing records across 6 regional markets",
    date: "Mar 2025",
    type: "data",
    highlights: [
      "Built a centralized revenue analytics platform using Snowflake, dbt, and Airflow to consolidate billing records across 6 regional markets",
      "Designed star-schema data models enabling forecasting, win-rate analysis, and pipeline coverage reporting for 50+ sales leaders in Looker",
      "Developed predictive revenue forecasts using Prophet and XGBoost, improving quarterly forecast accuracy by ~11%",
      "Created executive dashboards tracking ARR, churn, deal velocity, and quota attainment for future stakeholders",
    ],
    details:
      "RevenuePulse is an enterprise-grade revenue analytics platform that provides comprehensive visibility into sales performance and forecasting. The platform consolidates data from multiple regional markets into a unified data warehouse using Snowflake and dbt.",
  },
  {
    id: "growthlens",
    title: "GrowthLens",
    subtitle: "Customer Funnel & Retention Intelligence System",
    description:
      "End-to-end growth analytics pipelines integrating Google Analytics, Segment, and Amazon Redshift",
    date: "May 2024",
    type: "data",
    highlights: [
      "Built end-to-end growth analytics pipelines integrating Google Analytics, Segment, and Amazon Redshift to analyze 10k+ historical user sessions across web channels",
      "Implemented cohort, attribution, and lifetime value analysis using dbt and Spark SQL, improving simulated channel ROI by ~14%",
      "Developed real-time marketing and product dashboards in Tableau and Amplitude tracking 25+ behavioral and performance metrics",
      "Applied A/B testing and uplift modeling on experimental datasets to evaluate campaign and feature impact, increasing conversion rates by ~9%",
    ],
    details:
      "GrowthLens provides comprehensive customer analytics capabilities including funnel analysis, cohort tracking, and lifetime value modeling. The platform integrates data from multiple sources to create a unified view of customer behavior.",
  },
  {
    id: "opsguard",
    title: "OpsGuard",
    subtitle: "Operational Risk & Performance Analytics Platform",
    description:
      "An operational analytics system using Azure Data Factory, Synapse Analytics, and Power BI",
    date: "Feb 2024",
    type: "data",
    highlights: [
      "Built an operational analytics system using Azure Data Factory, Synapse Analytics, and Power BI to process operational records per month in simulated service environments",
      "Deployed anomaly detection and threshold-based alerting pipelines using Isolation Forest and statistical control charts to monitor SLA compliance, proactively flag operational risks, and reduce simulated SLA violations by ~16%",
      "Automated root-cause analysis reports, reducing incident resolution time by ~21% in controlled testing scenarios",
    ],
    details:
      "OpsGuard provides comprehensive operational risk monitoring and performance analytics. The platform uses machine learning-based anomaly detection with Isolation Forest to identify potential issues before they impact SLA compliance.",
  },
];

// Get all projects combined
export const projects: Project[] = [...sweProjects, ...mlProjects, ...dataProjects];

export function getProjectsByType(type: ExperienceType): Project[] {
  switch (type) {
    case "swe":
      return sweProjects;
    case "ml":
      return mlProjects;
    case "data":
      return dataProjects;
    default:
      return [];
  }
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

// Skills as arrays of strings for bubble display - exactly as per resumes
export const skillsByCategory = {
  swe: {
    title: "Software Engineering",
    skills: [
      // Programming Languages
      "Python", "C", "C++", "JAVA", "R", "Ruby", "JavaScript", "TypeScript", "Go", "Rust", "Bash/Shell Scripting",
      // Tools
      "Git", "RESTful APIs", "GraphQL", "Docker", "AWS", "Azure", "Jenkins", "Kubernetes", "MongoDB", "MySQL", "Spring Boot", "Adobe Workfront",
      // Web Development
      "React.js", "Node.js", "HTML5", "Django", "Flask", "Ruby on Rails",
      // Knowledge areas
      "Web Development", "SDLC", "Version Control Systems", "API Design", "Software Architecture", "Cross-Platform Development",
    ],
  },
  ml: {
    title: "Machine Learning & AI",
    skills: [
      // LLM & Agentic Systems
      "Large Language Models (GPT-based, OpenAI API, HuggingFace)", "Prompt Engineering", "Tool and Function Calling",
      "Retrieval-Augmented Generation (RAG)", "Embedding Models", "Semantic Retrieval", "Autonomous Reasoning",
      "Decision Orchestration", "Verification Loops", "Human-in-the-Loop Systems",
      // Statistical Modeling
      "Supervised and Unsupervised Learning", "Ensemble Methods", "XGBoost", "LightGBM", "Random Forest",
      "scikit-learn", "TensorFlow", "PyTorch", "Feature Engineering", "Cross-Validation",
      "Hyperparameter Optimization", "Anomaly Detection", "Model Explainability (SHAP)",
      // AI Infrastructure
      "Distributed Data Pipelines", "ETL and Feature Stores", "Batch and Streaming Processing",
      "RESTful and Async APIs (FastAPI, Flask, Spring Boot)", "Vector Databases (FAISS)", "MongoDB",
      "PostgreSQL", "Redis", "Caching and Query Optimization", "Workflow Orchestration",
      // MLOps
      "Containerized ML Services (Docker)", "Model Versioning and Experiment Tracking (MLflow)",
      "CI/CD Pipelines", "Scalable Inference Architectures", "API Gateways",
      "Monitoring and Logging", "Drift Detection", "Performance Profiling", "Cloud Platforms (AWS, GCP)",
    ],
  },
  data: {
    title: "Data Science & Analytics",
    skills: [
      // Data Warehousing & Engineering
      "Snowflake", "BigQuery", "Redshift", "Synapse Analytics", "dbt", "Airflow", "Azure Data Factory", "Informatica",
      // Business Intelligence
      "Tableau", "Looker", "Power BI", "SSRS", "Amplitude", "Excel Power Pivot",
      // Analytics & Modeling
      "Advanced SQL", "Spark SQL", "XGBoost", "scikit-learn", "cohort analysis", "A/B testing", "attribution modeling",
      // Product Analytics
      "Google Analytics", "Segment", "CRM Analytics", "funnel analysis", "retention modeling", "LTV analysis",
    ],
  },
};
