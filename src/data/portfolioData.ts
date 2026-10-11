import heroWorkspaceImg from '../assets/images/hero_analytics_workspace_1791655559584.jpg';
import novitechPowerbiImg from '../assets/images/project_novitech_powerbi_1791655573559.jpg';
import novitechBomCostImg from '../assets/images/novitech_bom_cost_view_1791658694320.jpg';
import healthplusSqlImg from '../assets/images/project_healthplus_sql_1791655588764.jpg';
import healthplusTelemedicineImg from '../assets/images/healthplus_telemedicine_view_1791658704749.jpg';
import freshmartExcelImg from '../assets/images/project_freshmart_excel_1791655598947.jpg';
import freshmartPivotImg from '../assets/images/freshmart_pivot_store_view_1791658716110.jpg';
import pythonMlImg from '../assets/images/project_python_ml_1791655609088.jpg';

export type ProjectCategory =
  | 'All Projects'
  | 'Power BI'
  | 'SQL'
  | 'Excel'
  | 'Python'
  | 'LaTeX & Math';

export interface CodeSnippet {
  title: string;
  language: 'sql' | 'python' | 'dax' | 'latex';
  description: string;
  code: string;
  sourceFileUrl?: string;
}

export interface DatasetTableInfo {
  tableName: string;
  fileName: string;
  columns: string[];
  description: string;
}

export interface GallerySlide {
  src: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  technologyLabel: string;
  projectTypeBadge: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  featured: boolean;
  resumeVerified: boolean;
  repoVerified: boolean;
  shortDescription: string;
  objective: string;
  problemAddressed: string;
  approachSummary: string;
  keyLearningsSummary: string;
  skillsDemonstrated: string[];
  features: string[];
  gallery: GallerySlide[];
  overview: string;
  businessProblem: string;
  datasetSummary: string;
  datasetTables: DatasetTableInfo[];
  tools: string[];
  dataCleaningSteps: string[];
  analyticalApproach: string[];
  keyFindings: string[];
  codeSnippets: CodeSnippet[];
  githubUrl?: string;
  rawFileUrls: { label: string; url: string }[];
  liveDemoUrl?: string;
  thumbnail: string;
  imageCaption: string;
  isPlaceholderVisual: boolean;
}

export interface SkillItem {
  name: string;
  summary: string;
  appliedIn: string;
  relatedProjectIds: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  scoreNote: string;
  tags: string[];
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  date: string;
  category: 'Academic Programme' | 'Government / Space Course' | 'Research Presentation' | 'Competitive';
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  type: 'Certification' | 'Learnathon' | 'Webinar' | 'Achievement' | 'Course';
  isAward?: boolean;
  description: string;
  verifiedFromResume: boolean;
}

export interface JourneyStop {
  id: string;
  label: string;
  period: string;
  info: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  toolsUsed: string[];
}

export const PROFILE_DATA = {
  name: 'Sowmiga K',
  monogram: 'SK',
  brandTag: '<SK/>',
  eyebrow: 'WELCOME TO MY PORTFOLIO',
  greeting: "I'm Sowmiga K",
  headline: 'Aspiring Data Analyst | SQL Developer | Power BI & Python Enthusiast',
  professionalTitle: 'Aspiring Data Analyst · SQL · Python · Power BI · Excel',
  location: 'Coimbatore, Tamil Nadu, India',
  phone: '+91 96884 40339',
  email: 'sowmigakarthikeyan@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/sowmiga-k/',
  linkedinHandle: 'linkedin.com/in/sowmiga-k',
  githubProfileUrl: 'https://github.com/SowmigaK',
  githubRepoUrl: 'https://github.com/SowmigaK/Sowmiga',
  githubHandle: 'github.com/SowmigaK/Sowmiga',
  portraitUrl: '/profile-photo.jpeg',
  heroLead1:
    'Analytical and detail-oriented professional with a strong interest in Python programming and Data Analytics, skilled in problem solving, data interpretation, and analytical thinking.',
  heroLead2:
    'Hands-on project work across Power BI (NoviTech Manufacturing Dashboard), SQL (HealthPlus Healthcare Data Analysis), Microsoft Excel (FreshMart Sales Dashboard), Python (NumPy & Linear Regression), and Statistical Content Development.',
  currentlyExploring:
    'Currently exploring: SQL Querying, Power BI Executive Dashboards, Python Data Analysis, and Exploratory Data Analysis',
  heroQuote:
    '"Turning complex raw data into structured insights and clear operational decisions."',
  heroDescription:
    "I'm an aspiring Data Analyst with hands-on project experience in SQL, Power BI, Microsoft Excel, and Python. I enjoy cleaning relational data, uncovering analytical patterns, building interactive executive dashboards, and translating findings into clear business decisions.",
  executiveSummary:
    'Analytical and detail-oriented professional with a strong interest in Python programming and Data Analytics, skilled in problem solving, data interpretation, and analytical thinking. Eager to apply these skills to derive insights from data and contribute to data-driven decision-making.',
  heroVisual: heroWorkspaceImg,
  aboutIntroduction:
    'I am an aspiring Data Analyst developing practical skills in data analysis, Python programming, relational SQL querying, and business intelligence reporting. I enjoy working with structured datasets to clean inconsistencies, explore patterns, and translate raw numbers into clear, meaningful insights.',
  aboutEducation: {
    degree: 'B.Sc. Mathematics',
    institution: 'Vellalar College for Women',
    period: 'June 2023 – May 2026',
    detail: 'Building a quantitative foundation in descriptive statistics, probability distributions, linear algebra, and analytical reasoning.'
  },
  aboutTechnicalInterests: [
    'Python',
    'SQL',
    'Microsoft Excel',
    'Power BI',
    'Data Visualization',
    'Statistics',
    'Exploratory Data Analysis'
  ],
  aboutLearningJourney:
    'Through hands-on academic and self-driven projects, I focus on learning end-to-end analytical workflows — from understanding Business Requirements Documents (BRDs) and cleaning multi-table datasets to writing SQL queries, building interactive Power BI and Excel dashboards, and strengthening my problem-solving abilities.',
  aboutProfessionalGoal:
    'My goal is to apply my analytical and programming knowledge to real-world datasets, contribute to data-driven decision-making in an entry-level analytics role, and continuously grow into a capable data analytics professional.',
  aboutParagraphs: [
    'I am an aspiring Data Analyst developing practical skills in data analysis, Python programming, relational SQL querying, and business intelligence reporting. I enjoy working with structured datasets to clean inconsistencies, explore patterns, and translate raw numbers into clear, meaningful insights.',
    'Through hands-on projects across healthcare, manufacturing, and retail datasets, I focus on building a reliable foundation in SQL, Power BI, Microsoft Excel, and statistical analysis to support informed decision-making.'
  ],
  orbitChips: [
    {
      title: 'B.Sc. Mathematics',
      subtitle: 'Vellalar College for Women (72%)'
    },
    {
      title: 'Power BI & DAX',
      subtitle: 'Star Schema, Power Query, KPIs'
    },
    {
      title: 'SQL Analytics',
      subtitle: 'JOINs, CTEs, Window Functions'
    },
    {
      title: 'Excel Dashboards',
      subtitle: 'Pivot Tables, Lookup Formulas'
    },
    {
      title: 'Python & ML',
      subtitle: 'NumPy, Linear Regression, OOP'
    },
    {
      title: 'INITMATH & ISRO',
      subtitle: 'MTTS Trust & ISRO–IIRS GNSS'
    }
  ],
  aboutHighlights: [
    {
      title: 'Relational SQL & Data Hygiene',
      detail: 'Writing structured JOINs, CTEs, and window functions (ROW_NUMBER, RANK, LAG, LEAD) alongside safe SQL data-cleaning scripts.'
    },
    {
      title: 'Power BI Data Modeling & DAX',
      detail: 'Connecting multi-table CSV/Excel sources via Power Query, designing Star & Bridge schemas, and tracking manufacturing & operational KPIs.'
    },
    {
      title: 'Spreadsheet & Statistical Rigor',
      detail: 'Building dynamic Excel Pivot Table dashboards and applying mathematical foundations in descriptive statistics, correlation, and linear regression.'
    },
    {
      title: 'Business Requirement Alignment',
      detail: 'Translating formal Business Requirement Documents (BRDs) into measurable KPIs for healthcare, manufacturing, and retail domains.'
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'data-analytics',
    title: 'Data Analytics & Statistics',
    subtitle: 'End-to-end data preparation, exploratory analysis, and quantitative reasoning',
    skills: [
      {
        name: 'Data Cleaning',
        summary: 'Handling missing values, standardizing text casing (UPPER/TRIM), resolving duplicate records, and validating post-cleaning constraints.',
        appliedIn: 'Applied in HealthPlus SQL cleaning scripts and FreshMart 6-workbook Excel normalization.',
        relatedProjectIds: ['healthplus-sql', 'freshmart-excel']
      },
      {
        name: 'Exploratory Data Analysis (EDA)',
        summary: 'Investigating distributions, identifying outliers, computing summary statistics, and validating hypotheses across multi-table datasets.',
        appliedIn: 'Used across Healthcare, Manufacturing, and Retail BRD case studies.',
        relatedProjectIds: ['novitech-powerbi', 'healthplus-sql', 'freshmart-excel', 'python-ml-workspace']
      },
      {
        name: 'Data Visualization',
        summary: 'Selecting clear chart encodings to track production defects, clinic workloads, telemedicine adoption, and store profitability.',
        appliedIn: 'Implemented across Power BI (.pbix) and Excel (.xlsx / .pptx) executive reports.',
        relatedProjectIds: ['novitech-powerbi', 'aerohome-powerbi', 'freshmart-excel']
      },
      {
        name: 'Descriptive Statistics',
        summary: 'Formulating and solving statistical problems involving mean, variance, standard deviation, correlation matrices, and probability.',
        appliedIn: 'Applied in Statistics Content Development (LaTeX) and Python NumPy correlation analysis.',
        relatedProjectIds: ['statistics-latex', 'python-ml-workspace']
      }
    ]
  },
  {
    id: 'sql-databases',
    title: 'SQL & Relational Databases',
    subtitle: 'Querying, cleaning, and aggregating multi-table relational datasets',
    skills: [
      {
        name: 'SQL JOINs & Schemas',
        summary: 'Combining fact and dimension tables using INNER JOIN and LEFT JOIN across Clinics, Specialists, Members, Billing, and Payments.',
        appliedIn: 'Used in HealthPlus Care and Medicare Hospital SQL analyses.',
        relatedProjectIds: ['healthplus-sql', 'medicare-sql']
      },
      {
        name: 'Window Functions (RANK, LAG, LEAD)',
        summary: 'Sequencing member consultations with ROW_NUMBER, ranking specialist workloads with RANK, and computing days between patient visits with LAG/LEAD.',
        appliedIn: 'Queries #31–#34 in HealthPlus.sql repository script.',
        relatedProjectIds: ['healthplus-sql']
      },
      {
        name: 'CTEs & Subqueries',
        summary: 'Building readable WITH clauses and SUM(CASE WHEN ...) expressions to audit billing vs. payment collection gaps and telemedicine adoption.',
        appliedIn: 'Queries #1, #5, and #35 in HealthPlus.sql.',
        relatedProjectIds: ['healthplus-sql']
      },
      {
        name: 'GROUP BY & Data Filtering',
        summary: 'Executing controlled UPDATE statements with SQL_SAFE_UPDATES checks and verifying category counts via GROUP BY.',
        appliedIn: 'Pre-analysis sanity check pipeline in HealthPlus.sql.',
        relatedProjectIds: ['healthplus-sql', 'medicare-sql']
      }
    ]
  },
  {
    id: 'power-bi',
    title: 'Power BI & Business Intelligence',
    subtitle: 'Data transformation, star-schema modeling, DAX measures, and executive dashboards',
    skills: [
      {
        name: 'Power Query',
        summary: 'Ingesting raw CSV and Excel tables, enforcing column data types, trimming keys, and preparing clean staging tables.',
        appliedIn: 'Used to prepare 8 CSV tables in NoviTech and raw Excel sheets in AeroHome.',
        relatedProjectIds: ['novitech-powerbi', 'aerohome-powerbi']
      },
      {
        name: 'DAX Measures',
        summary: 'Calculating defect rates, downtime minutes, energy consumption per unit (kWh), procurement lead times, and supplier delay rates.',
        appliedIn: 'Core executive metrics in NoviTech Manufacturing Dashboard.',
        relatedProjectIds: ['novitech-powerbi', 'aerohome-powerbi']
      },
      {
        name: 'Data Modeling & Relationships',
        summary: 'Connecting fact tables (Production Runs, Purchase Orders) to dimensions (Plants, Products, Operators, Suppliers, Bill of Materials).',
        appliedIn: 'Implemented in NOVA_TECH.pbix and AeroHome.pbix.',
        relatedProjectIds: ['novitech-powerbi', 'aerohome-powerbi']
      },
      {
        name: 'KPI & Interactive Dashboards',
        summary: 'Designing drill-through executive views with slicers by plant location, product category, shift, and supplier tier.',
        appliedIn: 'Delivered in NOVA_TECH.pbix and AeroHome.pbix.',
        relatedProjectIds: ['novitech-powerbi', 'aerohome-powerbi']
      }
    ]
  },
  {
    id: 'excel-analytics',
    title: 'Microsoft Excel Analytics',
    subtitle: 'Multi-sheet workbook cleaning, Pivot Tables, formulas, and retail performance dashboards',
    skills: [
      {
        name: 'Pivot Tables',
        summary: 'Summarizing transactional sales across stores, product categories, customer segments, and suppliers.',
        appliedIn: 'FreshMart Sales Dashboard and TrendMart Fashion Enterprise analysis.',
        relatedProjectIds: ['freshmart-excel', 'trendmart-excel']
      },
      {
        name: 'Advanced Formulas',
        summary: 'Linking normalized tables (Customers, Employees, Products, Stores, Suppliers, Transactions) for margin and order calculations.',
        appliedIn: 'Applied across 6 cleaned FreshMart Excel workbooks.',
        relatedProjectIds: ['freshmart-excel', 'trendmart-excel']
      },
      {
        name: 'Excel Charts & Dashboards',
        summary: 'Building interactive chart layouts in Excel and synthesizing executive findings into structured presentation decks (.pptx).',
        appliedIn: 'FreshMart Sales Performance Dashboard(1).pptx.',
        relatedProjectIds: ['freshmart-excel']
      }
    ]
  },
  {
    id: 'programming-tools',
    title: 'Programming & Mathematical Tools',
    subtitle: 'Python scripting, numerical computing, mathematical software, and technical typesetting',
    skills: [
      {
        name: 'Python',
        summary: 'Writing modular Python classes, reading/parsing CSV datasets with csv.DictReader, and handling exceptions.',
        appliedIn: 'Python Workspace repository scripts and NK TECH Python Full Stack certification.',
        relatedProjectIds: ['python-ml-workspace']
      },
      {
        name: 'NumPy & Linear Regression',
        summary: 'Training supervised LinearRegression models, reshaping feature vectors (ravel), and computing Pearson correlation matrices (np.corrcoef).',
        appliedIn: 'ML/linearprac.ipynb and ML/ML.ipynb in GitHub repository.',
        relatedProjectIds: ['python-ml-workspace']
      },
      {
        name: 'MATLAB & SageMath',
        summary: 'Mathematical computation, matrix algebra, and algorithmic problem-solving grounded in B.Sc. Mathematics coursework.',
        appliedIn: 'Academic mathematical modeling and INITMATH training.',
        relatedProjectIds: ['statistics-latex']
      },
      {
        name: 'LaTeX & Overleaf',
        summary: 'Collaborative mathematical typesetting for statistical derivations, probability proofs, and structured academic problem sets.',
        appliedIn: 'Statistics Content Development team project.',
        relatedProjectIds: ['statistics-latex']
      }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'novitech-powerbi',
    title: 'NoviTech Manufacturing Dashboard',
    subtitle: 'Executive Visibility into Multi-Plant Production, Downtime, Quality & Supplier Costs',
    technologyLabel: 'Power BI',
    projectTypeBadge: 'Executive BI Dashboard',
    category: 'Power BI',
    featured: true,
    resumeVerified: true,
    repoVerified: true,
    shortDescription:
      'An executive-focused Power BI manufacturing dashboard (NOVA_TECH.pbix) built from an 8-table relational dataset to monitor plant production performance, downtime, defect rates, and raw material procurement.',
    objective:
      'Provide executive-level visibility into manufacturing performance and operational issues across production facilities.',
    problemAddressed:
      'Help identify patterns in production performance, plant downtime, product defects, energy consumption, and supplier-related procurement costs and delays using the 8-table manufacturing dataset.',
    approachSummary:
      'Cleaned and connected 8 CSV tables (Production Runs, Purchase Orders, Bill of Materials, Plants, Products, Operators, Materials, and Suppliers) in Power Query, modeled a Star & Bridge schema, and built DAX KPIs, interactive visualizations, and slicers.',
    keyLearningsSummary:
      'Connected shop-floor production metrics (quantity produced, defective units, downtime minutes, and energy kWh) with supplier purchase order lead times and delay flags to enable multi-plant operational exploration.',
    skillsDemonstrated: [
      'Power BI',
      'Dashboard Design',
      'KPI Reporting',
      'Data Visualization',
      'Business Analysis',
      'Power Query & DAX'
    ],
    features: [
      'Executive Manufacturing KPIs',
      'Star & Bridge Schema',
      'Power Query Data Cleaning',
      'Interactive Slicers',
      'Supplier Cost & Delay Tracking'
    ],
    gallery: [
      {
        src: novitechPowerbiImg,
        caption: '01 Executive Manufacturing Overview — Plant Output, Downtime & Defect Rate KPIs'
      },
      {
        src: novitechBomCostImg,
        caption: '02 Star Schema Data Model & Supplier Lead-Time Procurement View'
      },
      {
        src: heroWorkspaceImg,
        caption: '03 Operational KPI Grid & Multi-Plant Performance Comparison'
      }
    ],
    overview:
      'Developed an executive Power BI dashboard (NOVA_TECH.pbix) backed by an 8-table relational manufacturing dataset and Business Requirements Document (Novitech_Manufacturing_BRD.docx). The dashboard unifies plant production runs with raw material purchase orders and bill-of-materials requirements.',
    businessProblem:
      'Manufacturing leadership needed a unified executive view to identify patterns in production output, plant downtime minutes, defective units, energy consumption (kWh), and supplier delivery delays across facilities.',
    datasetSummary:
      '8 relational CSV tables stored in Sowmiga/Power BI/Novitech/raw data/ comprising 2 fact tables, 5 dimension tables, and 1 bridge table.',
    datasetTables: [
      {
        tableName: 'fact_production_runs',
        fileName: 'fact_production_runs.csv',
        columns: ['production_run_id', 'date', 'plant_id', 'product_id', 'operator_id', 'quantity_produced', 'quantity_defective', 'downtime_minutes', 'energy_consumed_kwh'],
        description: 'Daily production run logs capturing output volume, defective units, downtime minutes, and energy consumption.'
      },
      {
        tableName: 'fact_purchase_orders',
        fileName: 'fact_purchase_orders.csv',
        columns: ['po_id', 'date', 'supplier_id', 'material_id', 'quantity_ordered', 'unit_price', 'lead_time_days', 'is_delayed'],
        description: 'Procurement orders tracking raw material quantities, unit pricing, delivery lead times, and delay flags.'
      },
      {
        tableName: 'bridge_bill_of_materials',
        fileName: 'bridge_bill_of_materials.csv',
        columns: ['product_id', 'material_id', 'quantity_required'],
        description: 'Bridge mapping linking finished products to required raw material quantities.'
      },
      {
        tableName: 'dim_plants, dim_products & dim_suppliers',
        fileName: 'dim_plants.csv / dim_products.csv / dim_suppliers.csv',
        columns: ['plant_id', 'plant_name', 'location_city', 'capacity_mwh', 'product_id', 'product_name', 'unit_cost', 'supplier_id'],
        description: 'Plant capacity metadata, product unit cost targets, operator shifts, and supplier records.'
      }
    ],
    tools: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'KPI Reporting', 'Data Visualization'],
    dataCleaningSteps: [
      'Imported 8 CSV source files into Power Query and standardized date and numeric formats across fact_production_runs and fact_purchase_orders.',
      'Verified primary and foreign key relationships across plant_id, product_id, operator_id, material_id, and supplier_id.',
      'Configured bridge table relationships (bridge_bill_of_materials) to connect finished products with raw material requirements.'
    ],
    analyticalApproach: [
      'Built a relational data model linking Production Runs and Purchase Orders to shared Plant, Product, Operator, and Supplier dimensions.',
      'Created DAX measures for Total Production Output, Defect Rate %, Downtime Minutes, Energy per Unit (kWh), and Supplier Delay Rate %.',
      'Added interactive slicers by plant location, product line, operator shift, and supplier to explore operational bottlenecks.'
    ],
    keyFindings: [
      'Consolidated production performance, plant downtime, and defect tracking with supplier lead-time and unit price data in a single executive view.',
      'Enabled side-by-side comparison of plant output and defect rates across shifts and product categories using verified dataset fields.',
      'Delivered a complete Power BI report (NOVA_TECH.pbix) aligned with the NoviTech Manufacturing Business Requirements Document.'
    ],
    codeSnippets: [
      {
        title: 'Core Manufacturing DAX Measures (NoviTech Model)',
        language: 'dax',
        description: 'DAX formulas structured for fact_production_runs and fact_purchase_orders.',
        sourceFileUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Power%20BI/Novitech',
        code: `-- 1. Total Units Produced & Defect Rate %
Total Units Produced = SUM(fact_production_runs[quantity_produced])

Total Defective Units = SUM(fact_production_runs[quantity_defective])

Defect Rate % = 
DIVIDE(
    [Total Defective Units],
    [Total Units Produced],
    0
)

-- 2. Energy Intensity (kWh per Produced Unit)
Energy per Unit (kWh) = 
DIVIDE(
    SUM(fact_production_runs[energy_consumed_kwh]),
    [Total Units Produced],
    0
)

-- 3. Procurement Delayed Order Ratio
Supplier Delay Rate % = 
DIVIDE(
    CALCULATE(COUNTROWS(fact_purchase_orders), fact_purchase_orders[is_delayed] = 1),
    COUNTROWS(fact_purchase_orders),
    0
)`
      }
    ],
    githubUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Power%20BI/Novitech',
    rawFileUrls: [
      {
        label: 'View Dashboard File (NOVA_TECH.pbix)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Power%20BI/Novitech/completed/NOVA_TECH.pbix'
      },
      {
        label: 'Manufacturing BRD (.docx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Power%20BI/Novitech/raw%20data/Novitech_Manufacturing_BRD.docx'
      },
      {
        label: '8 Raw CSV Dataset Files',
        url: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Power%20BI/Novitech/raw%20data'
      }
    ],
    thumbnail: novitechPowerbiImg,
    imageCaption: 'NoviTech Manufacturing Power BI Dashboard preview (NOVA_TECH.pbix available in GitHub repo).',
    isPlaceholderVisual: true
  },
  {
    id: 'healthplus-sql',
    title: 'HealthPlus Healthcare Data Analysis',
    subtitle: 'Relational Data Cleaning & 38-Query Clinical Operations Analysis in SQL',
    technologyLabel: 'SQL',
    projectTypeBadge: 'SQL Data Analysis',
    category: 'SQL',
    featured: true,
    resumeVerified: true,
    repoVerified: true,
    shortDescription:
      'Comprehensive SQL data cleaning and 38-query analysis on the HealthPlus Care relational database covering clinic consultations, telemedicine usage, specialist workloads, and billing collection gaps.',
    objective:
      'Analyze relational healthcare data to answer meaningful operational, clinical, and financial questions using SQL.',
    problemAddressed:
      'Clean inconsistent categorical records across raw healthcare tables and answer structured business questions regarding clinic consultation volume, telemedicine adoption, specialist workload distribution, and uncollected billing balances.',
    approachSummary:
      'Standardized text fields with UPPER(TRIM(...)) and handled missing member emails in SQL, then wrote 38 queries using WHERE filtering, COUNT/SUM/AVG aggregations, GROUP BY, INNER/LEFT JOINs, subqueries, CASE WHEN, CTEs, and Window Functions (ROW_NUMBER, RANK, LAG, LEAD).',
    keyLearningsSummary:
      'Answered 38 verified analytical questions from Healthplus.sql — quantifying clinic volume share, comparing in-clinic vs. telemedicine visits, ranking specialists by consultation count, measuring days between consecutive patient visits with LAG(), and auditing billed vs. collected payment amounts.',
    skillsDemonstrated: [
      'SQL Querying',
      'Data Cleaning in SQL',
      'JOINs & Subqueries',
      'Window Functions & CTEs',
      'Data Analysis',
      'Interpreting Results'
    ],
    features: [
      '38 Analytical SQL Queries',
      'SQL Data Standardization',
      'JOINs, GROUP BY & Subqueries',
      'Window Functions (RANK, LAG, LEAD)',
      'Billing Collection Gap CTE'
    ],
    gallery: [
      {
        src: healthplusSqlImg,
        caption: '01 Relational Database Schema (Clinics, Specialists, Members, Billing) & SQL Queries'
      },
      {
        src: healthplusTelemedicineImg,
        caption: '02 In-Clinic vs Telemedicine Consultation Split & Billing Collection Gap Analysis'
      }
    ],
    overview:
      'Completed a relational SQL data cleaning and analysis project on the HealthPlus Care database (Healthplus.sql). Starting from raw healthcare tables and the HealthPlus_Care_BRD(2).docx specification, the script standardizes categorical columns and executes 38 SQL queries across clinical, membership, and billing tables.',
    businessProblem:
      'Healthcare operations required clean, standardized relational tables to evaluate clinic consultation distribution, telemedicine vs. in-clinic adoption, specialist workload rankings, patient follow-up intervals, and billing collection gaps.',
    datasetSummary:
      'Relational SQL schema documented in HealthPlus_Care_DB_dataset(6).xlsx and Healthplus.sql spanning Consultation, Clinics, Specialists, Members, Billing, Payments, Claims, Lab_Tests, and Chronic_Care_Programs.',
    datasetTables: [
      {
        tableName: 'Consultation & Clinics',
        fileName: 'Healthplus.sql',
        columns: ['consultation_id', 'member_id', 'specialist_id', 'clinic_id', 'consultation_date', 'consultation_mode', 'reason_for_visit', 'status'],
        description: 'Clinical consultation records joined to physical clinic locations (clinic_id, clinic_name, city).'
      },
      {
        tableName: 'Specialists & Members',
        fileName: 'Healthplus.sql',
        columns: ['specialist_id', 'first_name', 'last_name', 'specialization', 'member_id', 'gender', 'email', 'membership_type'],
        description: 'Specialist directory by medical specialization and enrolled member demographic records.'
      },
      {
        tableName: 'Billing, Payments & Claims',
        fileName: 'Healthplus.sql',
        columns: ['bill_id', 'total_amount', 'bill_status', 'payment_amount', 'payment_mode', 'payment_status', 'claim_status'],
        description: 'Billing invoices, payment transaction statuses, and insurance claim records.'
      }
    ],
    tools: ['SQL', 'MySQL', 'JOINs', 'GROUP BY', 'Subqueries', 'Window Functions', 'CTEs', 'Data Cleaning'],
    dataCleaningSteps: [
      'Used UPDATE statements with UPPER(TRIM(...)) to standardize gender, membership_type, claim_status, test_status, payment_status, and program_status fields.',
      "Replaced missing or blank member email addresses with 'no_email@healthplus.com' where email IS NULL OR TRIM(email) = ''.",
      'Verified post-cleaning data consistency using GROUP BY count checks across Consultation, Payments, and Chronic_Care_Programs.'
    ],
    analyticalApproach: [
      'Used INNER JOIN, GROUP BY, and scalar subqueries to compute each clinic’s consultation count and percentage share of total network volume.',
      'Applied SUM(CASE WHEN ...) conditional aggregation to compare IN-CLINIC vs. TELEMEDICINE consultations per clinic.',
      'Used Window Functions: ROW_NUMBER() to order member consultations, RANK() to rank specialists by workload, and LAG() / LEAD() with DATEDIFF() to measure days between visits.',
      'Constructed a Common Table Expression (WITH payment_summary AS ...) with LEFT JOIN to calculate the collection gap between billed and successfully paid amounts.'
    ],
    keyFindings: [
      'Answered 38 operational and financial questions directly in SQL across clinical, membership, lab, and billing tables.',
      'Demonstrated practical proficiency in combining data cleaning (UPDATE/TRIM) with multi-table JOINs, CTEs, and Window Functions.',
      'Provided reproducible SQL queries that isolate specialist workload distribution, patient visit frequency, and uncollected billing balances.'
    ],
    codeSnippets: [
      {
        title: 'Data Cleaning & Post-Cleaning Sanity Checks (Healthplus.sql)',
        language: 'sql',
        description: 'Verbatim SQL data standardization and verification queries from Sowmiga/SQL/healthplus/cleaned data/Healthplus.sql.',
        sourceFileUrl: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/SQL/healthplus/cleaned%20data/Healthplus.sql',
        code: `-- Clean Contact Info & Demographics in Members
UPDATE Members
SET email = 'no_email@healthplus.com'
WHERE email IS NULL OR TRIM(email) = '';

UPDATE Members SET gender = UPPER(TRIM(gender));
UPDATE Members SET membership_type = UPPER(TRIM(membership_type));

-- Standardize Diagnostic & Program Statuses
UPDATE Claims SET claim_status = UPPER(TRIM(claim_status));
UPDATE Lab_Tests SET test_status = UPPER(TRIM(test_status));
UPDATE Package_Subscriptions SET payment_status = UPPER(TRIM(payment_status));
UPDATE Chronic_Care_Programs SET program_status = UPPER(TRIM(program_status));

-- Re-enable Safe Update Mode & Run Sanity Checks
SET SQL_SAFE_UPDATES = 1;
SELECT status, COUNT(*) AS total_count FROM Consultation GROUP BY status;
SELECT payment_mode, COUNT(*) AS total_count FROM Payments GROUP BY payment_mode;`
      },
      {
        title: 'Clinic Network Share & Telemedicine Adoption (Queries #1 & #5)',
        language: 'sql',
        description: 'Real analytical SQL queries calculating clinic volume share and conditional telemedicine adoption rates.',
        sourceFileUrl: 'https://github.com/SowmigaK/Sowmiga/blob/main/SQL/Healthplus.sql',
        code: `-- 1. Which clinics generate the highest consultation volumes across the network?
SELECT 
    c.clinic_id,
    c.clinic_name,
    c.city,
    COUNT(con.consultation_id) AS total_consultations,
    ROUND((COUNT(con.consultation_id) * 100.0 / (SELECT COUNT(*) FROM Consultation)), 2) AS network_share_pct
FROM Consultation con
JOIN Clinics c ON con.clinic_id = c.clinic_id
GROUP BY c.clinic_id, c.clinic_name, c.city
ORDER BY total_consultations DESC
LIMIT 5;

-- 5. How does telemedicine adoption vary across individual physical clinics?
SELECT 
    c.clinic_name,
    SUM(CASE WHEN con.consultation_mode = 'IN-CLINIC' THEN 1 ELSE 0 END) AS in_clinic_visits,
    SUM(CASE WHEN con.consultation_mode = 'TELEMEDICINE' THEN 1 ELSE 0 END) AS telemedicine_visits,
    COUNT(con.consultation_id) AS total_visits,
    ROUND((SUM(CASE WHEN con.consultation_mode = 'TELEMEDICINE' THEN 1 ELSE 0 END) * 100.0 / COUNT(con.consultation_id)), 2) AS telemedicine_adoption_pct
FROM Consultation con
JOIN Clinics c ON con.clinic_id = c.clinic_id
GROUP BY c.clinic_name
ORDER BY total_visits DESC;`
      },
      {
        title: 'Window Functions (RANK, LAG) & Billing Collection Gap CTE (Queries #32, #33, #35)',
        language: 'sql',
        description: 'Window functions and Common Table Expressions from Healthplus.sql.',
        sourceFileUrl: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/SQL/healthplus/cleaned%20data/Healthplus.sql',
        code: `-- 32. Rank Specialists by Consultation Workload
SELECT 
    s.specialist_id,
    CONCAT(s.first_name, ' ', s.last_name) AS specialist_name,
    s.specialization,
    COUNT(c.consultation_id) AS total_consultations,
    RANK() OVER (ORDER BY COUNT(c.consultation_id) DESC) AS workload_rank
FROM Consultation c
JOIN Specialists s ON c.specialist_id = s.specialist_id
GROUP BY s.specialist_id, specialist_name, s.specialization
ORDER BY workload_rank;

-- 33. Compare Current Consultation with Previous Consultation using LAG
SELECT 
    member_id,
    consultation_id,
    consultation_date,
    LAG(consultation_date) OVER (PARTITION BY member_id ORDER BY consultation_date) AS previous_consultation_date,
    DATEDIFF(
        consultation_date,
        LAG(consultation_date) OVER (PARTITION BY member_id ORDER BY consultation_date)
    ) AS days_since_previous_consultation
FROM Consultation
ORDER BY member_id, consultation_date;

-- 35. Validated Billing and Payment Collection Gap
WITH payment_summary AS (
    SELECT
        bill_id,
        SUM(CASE WHEN payment_status = 'Success' THEN payment_amount ELSE 0 END) AS successful_payment_amount
    FROM Payments
    GROUP BY bill_id
)
SELECT
    b.bill_id,
    ROUND(b.total_amount, 2) AS billed_amount,
    ROUND(COALESCE(p.successful_payment_amount, 0), 2) AS collected_amount,
    ROUND(b.total_amount - COALESCE(p.successful_payment_amount, 0), 2) AS collection_gap,
    b.bill_status
FROM Billing b
LEFT JOIN payment_summary p ON b.bill_id = p.bill_id
ORDER BY collection_gap DESC;`
      }
    ],
    githubUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/SQL/healthplus',
    rawFileUrls: [
      {
        label: 'View SQL Code (Healthplus.sql)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/SQL/healthplus/cleaned%20data/Healthplus.sql'
      },
      {
        label: 'HealthPlus Care BRD (.docx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/SQL/healthplus/raw%20data/HealthPlus_Care_BRD(2).docx'
      },
      {
        label: 'Healthcare DB Dataset (.xlsx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/SQL/healthplus/raw%20data/HealthPlus_Care_DB_dataset(6).xlsx'
      }
    ],
    thumbnail: healthplusSqlImg,
    imageCaption: 'Relational schema and SQL query workbench preview (Full 38-query Healthplus.sql available in repository).',
    isPlaceholderVisual: true
  },
  {
    id: 'freshmart-excel',
    title: 'FreshMart Sales Dashboard',
    subtitle: 'Retail Sales, Profit, Order & Category Performance Analysis in Microsoft Excel',
    technologyLabel: 'Microsoft Excel',
    projectTypeBadge: 'Excel Sales Dashboard',
    category: 'Excel',
    featured: true,
    resumeVerified: true,
    repoVerified: true,
    shortDescription:
      'Sales performance analysis across 6 cleaned Microsoft Excel workbooks (Customers, Employees, Products, Sales Transactions, Stores, Suppliers), summarized using Excel formulas, PivotTables, and dashboard charts.',
    objective:
      'Analyze retail sales performance and present important business metrics in a clear, structured Excel dashboard.',
    problemAddressed:
      'Consolidate fragmented retail records across 6 separate workbooks to evaluate sales revenue, profit, order performance, store comparisons, and product/category trends.',
    approachSummary:
      'Cleaned 6 Excel dataset files (Customers, Employees, Products, Sales Transactions, Stores, and Suppliers), applied Excel formulas and PivotTables to summarize metrics, and built visual charts and a dashboard presentation (FreshMart Sales Performance Dashboard(1).pptx).',
    keyLearningsSummary:
      'Summarized sales, profit, and order performance across stores and product categories from the 6 cleaned FreshMart workbooks, translating raw transaction rows into an organized retail performance report.',
    skillsDemonstrated: [
      'Microsoft Excel',
      'PivotTables',
      'Excel Formulas',
      'Data Summarization',
      'Data Visualization',
      'Business Reporting'
    ],
    features: [
      '6 Cleaned Retail Workbooks',
      'PivotTables & Charts',
      'Sales, Profit & Order Metrics',
      'Store & Category Comparisons',
      'Dashboard Presentation (.pptx)'
    ],
    gallery: [
      {
        src: freshmartExcelImg,
        caption: '01 FreshMart Retail Sales, Profit & Order Performance Dashboard'
      },
      {
        src: freshmartPivotImg,
        caption: '02 Cleaned 6-Workbook Excel Model & PivotTable Category Summaries'
      }
    ],
    overview:
      'Completed an end-to-end Microsoft Excel sales analysis for FreshMart retail operations. Using raw multi-table retail records and the FreshMart_BRD(1).docx requirements document, six core workbooks were cleaned and summarized using Excel formulas, PivotTables, and dashboard charts.',
    businessProblem:
      'Retail stakeholders needed clear visibility into sales, profit, order volume, store performance, supplier contributions, and product category comparisons from separate operational spreadsheets.',
    datasetSummary:
      '6 cleaned Microsoft Excel workbooks stored in Sowmiga/Excel/Project/Fresh_mart/Cleaned/ along with the FreshMart Sales Performance Dashboard(1).pptx file.',
    datasetTables: [
      {
        tableName: 'FreshMart_Sales_Transactions',
        fileName: 'FreshMart_Sales_Transactions(cleaned).xlsx',
        columns: ['transaction_id', 'store_id', 'product_id', 'customer_id', 'employee_id', 'quantity', 'sales_amount', 'profit'],
        description: 'Cleaned transactional sales records linking stores, products, customers, and employees.'
      },
      {
        tableName: 'FreshMart_Products & Suppliers',
        fileName: 'FreshMart_Products(Cleaned).xlsx / FreshMart_Suppliers(Cleaned).xlsx',
        columns: ['product_id', 'product_name', 'category', 'unit_cost', 'unit_price', 'supplier_id', 'supplier_name'],
        description: 'Product category details, pricing, and supplier records.'
      },
      {
        tableName: 'FreshMart_Stores, Customers & Employees',
        fileName: 'FreshMart_Stores(Cleaned).xlsx / Customers / Employess',
        columns: ['store_id', 'store_region', 'customer_id', 'segment', 'employee_id', 'role'],
        description: 'Cleaned store, customer, and employee reference workbooks.'
      }
    ],
    tools: ['Microsoft Excel', 'PivotTables', 'Excel Formulas', 'Charts', 'Data Cleaning', 'Dashboard Reporting'],
    dataCleaningSteps: [
      'Cleaned and formatted six separate Excel workbooks: Customers, Employees, Products, Sales Transactions, Stores, and Suppliers.',
      'Removed duplicate rows, standardized text and category labels, and verified key fields across transaction and reference sheets.',
      'Prepared structured Excel tables ready for PivotTable summarization and chart creation.'
    ],
    analyticalApproach: [
      'Used Excel formulas to link transactional sales records with product categories, store details, and supplier attributes.',
      'Created PivotTables and charts to compare sales, profit, and order performance across stores and product categories.',
      'Presented the dashboard visuals and key retail metrics in the FreshMart Sales Performance Dashboard deck.'
    ],
    keyFindings: [
      'Organized 6 separate retail workbooks into a structured Excel analysis covering sales, profit, and order performance.',
      'Compared product/category and store performance using PivotTables and Excel charts aligned with the FreshMart BRD.',
      'Published all 6 cleaned Excel files and the dashboard presentation in the GitHub repository for verification.'
    ],
    codeSnippets: [],
    githubUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Excel/Project/Fresh_mart',
    rawFileUrls: [
      {
        label: 'View Dashboard Deck (.pptx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Excel/Project/Fresh_mart/FreshMart%20Sales%20Performance%20Dashboard(1).pptx'
      },
      {
        label: 'Cleaned Excel Workbooks (6 Files)',
        url: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Excel/Project/Fresh_mart/Cleaned'
      },
      {
        label: 'FreshMart BRD (.docx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Excel/Project/Fresh_mart/Cleaned/FreshMart_BRD(1).docx'
      }
    ],
    thumbnail: freshmartExcelImg,
    imageCaption: 'FreshMart Excel Sales Dashboard preview (6 cleaned .xlsx workbooks and .pptx deck available in GitHub repo).',
    isPlaceholderVisual: true
  },
  {
    id: 'statistics-latex',
    title: 'Statistics Content Development',
    subtitle: 'Structured Educational Material for Statistical & Mathematical Concepts',
    technologyLabel: 'LaTeX, Overleaf | Team Project',
    projectTypeBadge: 'Educational Team Project',
    category: 'LaTeX & Math',
    featured: true,
    resumeVerified: true,
    repoVerified: false,
    shortDescription:
      'Collaborative academic team project focused on developing clear, structured educational material, statistical problems, and step-by-step worked solutions using LaTeX in Overleaf.',
    objective:
      'Develop clear, structured educational material for statistical and mathematical concepts.',
    problemAddressed:
      'Present foundational statistical topics — including mean, variance, and probability distributions — with accurate mathematical notation, clear step-by-step worked solutions, and consistent document formatting.',
    approachSummary:
      'Collaborated with team members in Overleaf to formulate statistical problems, write step-by-step worked solutions, apply LaTeX mathematical formatting, and refine document structure for readability and accuracy.',
    keyLearningsSummary:
      'Strengthened core statistical understanding (central tendency, dispersion, and probability) alongside practical skills in technical documentation, symbolic LaTeX formatting, and collaborative teamwork.',
    skillsDemonstrated: [
      'Statistical Understanding',
      'Technical Documentation',
      'LaTeX',
      'Overleaf',
      'Teamwork'
    ],
    features: [
      'Statistical Problem Sets',
      'Step-by-Step Worked Solutions',
      'Mean, Variance & Probability',
      'LaTeX Mathematical Formatting',
      'Overleaf Team Collaboration'
    ],
    gallery: [
      {
        src: pythonMlImg,
        caption: '01 Statistical Problem Formulation — Mean, Variance & Probability Solutions in LaTeX'
      }
    ],
    overview:
      'A collaborative educational team project documented on my resume focused on developing structured learning material for statistical and mathematical concepts using LaTeX and Overleaf.',
    businessProblem:
      'Students and learners benefit from clearly structured statistical problems paired with accurate, step-by-step worked solutions and clean mathematical typesetting.',
    datasetSummary:
      'Educational problem sets and worked solutions covering descriptive statistics (mean, variance) and probability distributions authored in Overleaf.',
    datasetTables: [
      {
        tableName: 'Statistical Educational Modules',
        fileName: 'Overleaf Collaborative LaTeX Document',
        columns: ['Mean & Central Tendency', 'Variance & Dispersion', 'Probability Problems & Worked Solutions'],
        description: 'Structured educational problem sets and step-by-step mathematical derivations refined collaboratively.'
      }
    ],
    tools: ['LaTeX', 'Overleaf', 'Descriptive Statistics', 'Probability', 'Technical Documentation', 'Teamwork'],
    dataCleaningSteps: [
      'Reviewed worked solutions across team members to verify mathematical accuracy for mean, variance, and probability calculations.',
      'Standardized LaTeX equation formatting and document sections in Overleaf for consistent presentation.'
    ],
    analyticalApproach: [
      'Drafted statistical problems and detailed step-by-step solutions to explain core mathematical concepts clearly.',
      'Used LaTeX math environments in Overleaf to format equations, fractions, summations, and probability expressions cleanly.'
    ],
    keyFindings: [
      'Produced clear, well-organized educational material for statistical concepts through structured team collaboration.',
      'Reinforced foundational statistical knowledge that supports exploratory data analysis and quantitative reasoning.'
    ],
    codeSnippets: [
      {
        title: 'Representative LaTeX Formatting — Mean, Variance & Probability',
        language: 'latex',
        description: 'Example of structured LaTeX mathematical formatting used for statistical definitions and worked solutions.',
        sourceFileUrl: 'https://www.overleaf.com/project/6933b4e764ec47a06898fe72',
        code: `\\documentclass[11pt,a4paper]{article}
\\usepackage{amsmath, amssymb}

\\begin{document}
\\section*{Statistical Measures: Mean and Variance}

For a dataset $x_1, x_2, \\dots, x_n$, the sample mean $\\bar{x}$ and sample variance $s^2$ are given by:

\\begin{align*}
  \\bar{x} &= \\frac{1}{n} \\sum_{i=1}^{n} x_i \\\\
  s^2 &= \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2
\\end{align*}

For two events $A$ and $B$ with $P(B) > 0$, conditional probability is defined as:
\\[
  P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}
\\]
\\end{document}`
      }
    ],
    liveDemoUrl: 'https://www.overleaf.com/project/6933b4e764ec47a06898fe72',
    rawFileUrls: [
      {
        label: 'Open Overleaf Project',
        url: 'https://www.overleaf.com/project/6933b4e764ec47a06898fe72'
      }
    ],
    thumbnail: pythonMlImg,
    imageCaption: 'Educational statistics and LaTeX documentation project in Overleaf.',
    isPlaceholderVisual: true
  },
  {
    id: 'python-ml-workspace',
    title: 'Python Data Analysis & Linear Regression Workspace',
    subtitle: 'NumPy Arrays, Correlation Matrices, Linear Regression & CSV Scripting',
    technologyLabel: 'Python (NumPy, scikit-learn)',
    projectTypeBadge: 'Python Analytics Workspace',
    category: 'Python',
    featured: false,
    resumeVerified: true,
    repoVerified: true,
    shortDescription:
      'Collection of Python scripts and Jupyter Notebooks in my GitHub repository practicing NumPy array operations, Pearson correlation matrices (np.corrcoef), simple Linear Regression, and CSV file handling.',
    objective:
      'Practice and apply Python programming, numerical computing, and foundational regression analysis on structured datasets.',
    problemAddressed:
      'Develop clean, reusable Python scripts and notebooks for reading CSV files, manipulating numerical arrays, measuring linear correlation, and fitting simple regression models.',
    approachSummary:
      'Wrote Jupyter Notebooks (linearprac.ipynb, ML.ipynb, npprac.ipynb) using NumPy and scikit-learn to fit LinearRegression models and compute correlation matrices, alongside Python scripts for CSV parsing and object-oriented record management.',
    keyLearningsSummary:
      'Practiced reshaping feature arrays with NumPy .ravel(), computing correlation coefficients (np.corrcoef), fitting LinearRegression models, and structuring modular Python code with exception handling.',
    skillsDemonstrated: [
      'Python',
      'NumPy',
      'Linear Regression',
      'Correlation Analysis',
      'CSV File Handling',
      'Jupyter Notebook'
    ],
    features: [
      'Linear Regression (scikit-learn)',
      'Pearson Correlation Matrix',
      'NumPy Array Operations',
      'CSV DictReader Scripts',
      'OOP Student Record Class'
    ],
    gallery: [
      {
        src: pythonMlImg,
        caption: '01 Jupyter Notebook — Linear Regression Fit & 2x2 Pearson Correlation Matrix'
      },
      {
        src: heroWorkspaceImg,
        caption: '02 Python Analytics & Scripting Workspace Overview'
      }
    ],
    overview:
      'A hands-on Python learning and analytics workspace in GitHub (Sowmiga/Python Workspace/) containing foundational Python scripts, CSV data handling, Object-Oriented Programming exercises, NumPy array manipulation, and Linear Regression notebooks.',
    businessProblem:
      'Building practical programming fluency in Python to ingest tabular files, compute statistical relationships, and run simple predictive models.',
    datasetSummary:
      'Includes ML_data.xlsx, Practice_data.xlsx, practice_file - practise.csv, and Jupyter Notebooks (ML.ipynb, ML_practice.ipynb, linearprac.ipynb, npprac.ipynb).',
    datasetTables: [
      {
        tableName: 'ML & Practice Datasets',
        fileName: 'ML_data.xlsx / Practice_data.xlsx / practice_file - practise.csv',
        columns: ['Feature Vectors (X)', 'Target Variables (y)', 'Student Marks & Attendance Records'],
        description: 'Tabular datasets used for regression fitting, correlation matrix computation, and CSV parsing.'
      }
    ],
    tools: ['Python', 'NumPy', 'scikit-learn', 'Jupyter Notebook', 'CSV Handling', 'OOP'],
    dataCleaningSteps: [
      'Reshaped 2D feature arrays into 1D vectors using NumPy .ravel() for correlation calculations.',
      'Parsed CSV files using Python csv.DictReader and handled file/value errors with try/except blocks.'
    ],
    analyticalApproach: [
      'Trained LinearRegression() models in scikit-learn to predict target values from input features.',
      'Computed Pearson correlation matrices using np.corrcoef(X1, y) to examine linear relationships.',
      'Created an Object-Oriented Student class managing student IDs, department, marks, and average calculations.'
    ],
    keyFindings: [
      'Verified strong positive linear correlation (r = 0.9978) on sample study-marks data and generated point predictions using scikit-learn.',
      'Documented foundational Python scripts and notebooks in GitHub to support ongoing data analytics learning.'
    ],
    codeSnippets: [
      {
        title: 'Linear Regression & Pearson Correlation Matrix (linearprac.ipynb)',
        language: 'python',
        description: 'Verbatim Python code from Sowmiga/Python Workspace/ML/linearprac.ipynb.',
        sourceFileUrl: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Python%20Workspace/ML/linearprac.ipynb',
        code: `import numpy as np
from sklearn.linear_model import LinearRegression

# study_marks: X is 2D feature matrix, y is target vector
X = np.array([[12], [5], [15], [4]])
y = np.array([78, 45, 88, 39])

# Initialize and train the linear regression model
model = LinearRegression()
model.fit(X, y)

# Predict target value for feature input [[8]]
ans = model.predict([[8]])
print("Predicted score:", ans)  # Output: [58.]

# Convert 2D feature array to 1D array using ravel() for correlation matrix
X1 = X.ravel()
corr_matrix = np.corrcoef(X1, y)
print(corr_matrix)
# array([[1.        , 0.99785361],
#        [0.99785361, 1.        ]])`
      },
      {
        title: 'Object-Oriented Student Record System & CSV Ingestion',
        language: 'python',
        description: 'From Sowmiga/Python Workspace/Foundations/oops/Student_management.py & CSV_handling.py.',
        sourceFileUrl: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Python%20Workspace/Foundations/oops/Student_management.py',
        code: `import csv

class Student:
    def __init__(self, id, name, department, marks, attendance=None):
        self.id = id
        self.name = name
        self.department = department
        self.marks = marks
        # Protected attribute for encapsulation
        self._attendance = attendance

    def display(self):
        return f"Name: {self.name} | Dept: {self.department}"

    def average_marks(self):
        return round(sum(self.marks) / len(self.marks), 2)

std1 = Student(101, "Sowmi", "Mathematics", [85, 90])
std2 = Student(102, "Vinothini", "Computer Science", [78, 85])
print(std1.display(), "| Avg:", std1.average_marks())`
      }
    ],
    githubUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Python%20Workspace',
    rawFileUrls: [
      {
        label: 'View Notebook (linearprac.ipynb)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Python%20Workspace/ML/linearprac.ipynb'
      },
      {
        label: 'ML Analysis Notebook (ML.ipynb)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Python%20Workspace/ML/ML.ipynb'
      },
      {
        label: 'NumPy Practice Notebook (.ipynb)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Python%20Workspace/Foundations/numpy/npprac.ipynb'
      }
    ],
    thumbnail: pythonMlImg,
    imageCaption: 'Python Jupyter Notebook correlation and linear regression preview (Real .ipynb files available in GitHub repo).',
    isPlaceholderVisual: true
  },
  {
    id: 'aerohome-powerbi',
    title: 'AeroHome Manufacturing Analytics',
    subtitle: 'Power BI Operational Reporting & Data Transformation Pipeline',
    technologyLabel: 'Power BI',
    projectTypeBadge: 'Power BI Report',
    category: 'Power BI',
    featured: false,
    resumeVerified: false,
    repoVerified: true,
    shortDescription:
      'Interactive Power BI report (AeroHome.pbix) transforming raw manufacturing dataset spreadsheets according to business requirement specifications.',
    objective:
      'Transform raw manufacturing spreadsheet data into a structured Power BI report aligned with business requirements.',
    problemAddressed:
      'Prepare and visualize raw operational manufacturing records so key production metrics can be explored interactively.',
    approachSummary:
      'Imported AeroHome_Manufacturing_Dataset.xlsx into Power Query for data cleaning and type standardization, and built interactive visuals in AeroHome.pbix.',
    keyLearningsSummary:
      'Practiced end-to-end Power Query data preparation and aligning report visuals with a formal Business Requirements Document (AeroHome_Manufacturing_BRD(1).docx).',
    skillsDemonstrated: [
      'Power BI',
      'Power Query',
      'Data Cleaning',
      'Dashboard Visualization'
    ],
    features: [
      'Power Query ETL',
      'Operational KPI Modeling',
      'BRD-Aligned Visuals',
      'Interactive Slicers'
    ],
    gallery: [
      {
        src: novitechBomCostImg,
        caption: '01 AeroHome Manufacturing Data Model & KPI Overview'
      },
      {
        src: novitechPowerbiImg,
        caption: '02 Production Line Output & Quality Monitoring View'
      }
    ],
    overview:
      'Developed the AeroHome Manufacturing Power BI project stored in Sowmiga/Power BI/AeroHome/. The project translates the AeroHome_Manufacturing_BRD(1).docx requirements and raw Excel dataset into a cleaned, modeled Power BI file (AeroHome.pbix).',
    businessProblem:
      'Operations teams required structured visual tracking of manufacturing production metrics, efficiency indicators, and resource utilization from raw spreadsheet exports.',
    datasetSummary:
      'Raw Excel dataset (AeroHome_Manufacturing_Dataset.xlsx), Business Requirements Document, and completed Power BI report (AeroHome.pbix).',
    datasetTables: [
      {
        tableName: 'AeroHome_Manufacturing_Dataset',
        fileName: 'AeroHome_Manufacturing_Dataset.xlsx',
        columns: ['Production Metrics', 'Operational KPIs', 'Plant & Line Attributes', 'Quality Indicators'],
        description: 'Primary source workbook transformed via Power Query into the AeroHome.pbix analytical model.'
      }
    ],
    tools: ['Power BI', 'Power Query', 'DAX', 'Data Cleaning', 'Dashboard Development'],
    dataCleaningSteps: [
      'Ingested AeroHome_Manufacturing_Dataset.xlsx into Power Query and cleaned column headers, nulls, and data types.',
      'Aligned table structures with the KPI definitions specified in AeroHome_Manufacturing_BRD(1).docx.'
    ],
    analyticalApproach: [
      'Modeled cleaned operational tables and authored DAX measures to summarize production and quality performance.',
      'Designed interactive visual cards and trend charts in AeroHome.pbix.'
    ],
    keyFindings: [
      'Transformed raw single-workbook manufacturing logs into a reusable, interactive Power BI dashboard artifact (AeroHome.pbix).',
      'Established clear traceability between the Business Requirements Document and visual KPI outputs.'
    ],
    codeSnippets: [],
    githubUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Power%20BI/AeroHome',
    rawFileUrls: [
      {
        label: 'View Dashboard File (AeroHome.pbix)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Power%20BI/AeroHome/Cleaned/AeroHome.pbix'
      },
      {
        label: 'AeroHome BRD (.docx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Power%20BI/AeroHome/raw%20data/AeroHome_Manufacturing_BRD(1).docx'
      },
      {
        label: 'Raw Manufacturing Dataset (.xlsx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Power%20BI/AeroHome/raw%20data/AeroHome_Manufacturing_Dataset.xlsx'
      }
    ],
    thumbnail: novitechBomCostImg,
    imageCaption: 'Power BI manufacturing analytics preview (AeroHome.pbix and source .xlsx available in GitHub repo).',
    isPlaceholderVisual: true
  },
  {
    id: 'medicare-sql',
    title: 'Medicare Hospital Analytics Dataset',
    subtitle: 'Clinical & Hospital Operational Dataset Preparation for SQL',
    technologyLabel: 'SQL (Dataset Preparation)',
    projectTypeBadge: 'SQL Dataset Artifact',
    category: 'SQL',
    featured: false,
    resumeVerified: false,
    repoVerified: true,
    shortDescription:
      'Hospital analytics relational dataset repository organized in Excel and CSV formats for SQL table ingestion and clinical data exploration.',
    objective:
      'Prepare and organize hospital operational dataset files in CSV and Excel formats for SQL database querying.',
    problemAddressed:
      'Structure multi-sheet hospital records into clean, query-ready files for exploring patient admissions and departmental utilization.',
    approachSummary:
      'Organized Hospital_Analytics_DB_dataset files in both Excel (.xlsx) and flat CSV formats inside the SQL repository directory.',
    keyLearningsSummary:
      'Practiced preparing healthcare dataset structures and schema layouts suitable for relational database import and SQL exploration.',
    skillsDemonstrated: [
      'SQL Data Preparation',
      'CSV & Excel Formatting',
      'Healthcare Dataset Organization'
    ],
    features: [
      'Hospital Admissions Dataset',
      'Relational SQL Schema',
      'CSV & Excel Staging',
      'Clinical KPI Exploration'
    ],
    gallery: [
      {
        src: healthplusTelemedicineImg,
        caption: '01 Hospital Analytics Relational Dataset & Departmental Breakdown'
      },
      {
        src: healthplusSqlImg,
        caption: '02 SQL Table Schema & Query Workbench'
      }
    ],
    overview:
      'Maintained inside Sowmiga/SQL/Medicare/ and SQL/Hospital_Analytics_DB_dataset, this project organizes multi-sheet hospital analytics datasets (.xlsx and .csv) for relational database ingestion and clinical operational reporting.',
    businessProblem:
      'Structuring multi-table hospital records into queryable formats to evaluate patient throughput, departmental utilization, and clinical outcomes.',
    datasetSummary:
      'Hospital_Analytics_DB_dataset(8).xlsx and Hospital_Analytics_DB_dataset(2).csv stored in the SQL directory of the repository.',
    datasetTables: [
      {
        tableName: 'Hospital_Analytics_DB_dataset',
        fileName: 'Hospital_Analytics_DB_dataset(8).xlsx / (2).csv',
        columns: ['Hospital Admissions', 'Departmental Encounters', 'Patient Demographics', 'Treatment Records'],
        description: 'Comprehensive hospital analytics dataset curated for relational SQL investigation.'
      }
    ],
    tools: ['SQL', 'Relational Data Preparation', 'CSV / Excel Ingestion', 'Healthcare Analytics'],
    dataCleaningSteps: [
      'Converted multi-sheet hospital workbooks into flat CSV structures suitable for SQL table import.',
      'Audited schema consistency across clinical encounter and patient demographic columns.'
    ],
    analyticalApproach: [
      'Structured hospital operational data for SQL filtering, aggregation, and multi-table JOIN queries.'
    ],
    keyFindings: [
      'Established clean, import-ready healthcare dataset artifacts in both CSV and Excel formats within the SQL repository.'
    ],
    codeSnippets: [],
    githubUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/SQL/Medicare',
    rawFileUrls: [
      {
        label: 'Medicare Hospital Dataset (.xlsx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/SQL/Medicare/raw/Hospital_Analytics_DB_dataset(8).xlsx'
      },
      {
        label: 'Hospital Analytics CSV',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/SQL/Hospital_Analytics_DB_dataset(2).csv'
      }
    ],
    thumbnail: healthplusTelemedicineImg,
    imageCaption: 'Healthcare database schema preview (Medicare dataset files hosted in GitHub repo).',
    isPlaceholderVisual: true
  },
  {
    id: 'trendmart-excel',
    title: 'TrendMart Fashion Enterprise Dataset',
    subtitle: 'Retail Fashion Business Requirements & Spreadsheet Preparation',
    technologyLabel: 'Microsoft Excel',
    projectTypeBadge: 'Excel Retail Dataset',
    category: 'Excel',
    featured: false,
    resumeVerified: false,
    repoVerified: true,
    shortDescription:
      'Enterprise fashion retail dataset and Business Requirements Document organized in GitHub for spreadsheet analysis and category performance exploration.',
    objective:
      'Review business requirements and structure fashion retail spreadsheet data for category and sales analysis.',
    problemAddressed:
      'Align raw retail apparel transaction records with formal analytical questions defined in the TrendMart Business Requirements Document.',
    approachSummary:
      'Organized TrendMart_Fashion_Enterprise_Dataset(2).xlsx alongside TrendMart_BRD.docx to map key retail metrics for Excel PivotTable analysis.',
    keyLearningsSummary:
      'Practiced reviewing Business Requirements Documents (BRDs) and inspecting multi-column retail workbooks prior to spreadsheet modeling.',
    skillsDemonstrated: [
      'Microsoft Excel',
      'BRD Requirement Mapping',
      'Retail Data Exploration'
    ],
    features: [
      'Fashion Retail Dataset (.xlsx)',
      'Formal BRD Specification',
      'Category Margin Slicing',
      'Seasonal Trend Modeling'
    ],
    gallery: [
      {
        src: freshmartPivotImg,
        caption: '01 TrendMart Fashion Retail Workbook & Pivot Slicers'
      },
      {
        src: freshmartExcelImg,
        caption: '02 Category Performance & Regional Store Comparison'
      }
    ],
    overview:
      'Stored in Sowmiga/Excel/Project/Trend_kart/, this project pairs the TrendMart_BRD.docx specification with the TrendMart_Fashion_Enterprise_Dataset(2).xlsx workbook to analyze fashion retail operations.',
    businessProblem:
      'Understanding apparel category performance, inventory turnover, and customer purchasing patterns across an enterprise fashion catalog.',
    datasetSummary:
      'TrendMart_Fashion_Enterprise_Dataset(2).xlsx and TrendMart_BRD.docx in the GitHub repository.',
    datasetTables: [
      {
        tableName: 'TrendMart_Fashion_Enterprise_Dataset',
        fileName: 'TrendMart_Fashion_Enterprise_Dataset(2).xlsx',
        columns: ['Apparel SKU & Category', 'Order Transactions', 'Store & Channel Metrics', 'Margin Breakdown'],
        description: 'Enterprise fashion retail workbook paired with formal business requirement definitions.'
      }
    ],
    tools: ['Microsoft Excel', 'Pivot Tables', 'Retail KPI Analysis', 'BRD Mapping'],
    dataCleaningSteps: [
      'Reviewed raw enterprise fashion records against TrendMart_BRD.docx analytical objectives.',
      'Prepared structured worksheet tables for Pivot Table slicing and category aggregation.'
    ],
    analyticalApproach: [
      'Mapped business questions from the TrendMart BRD to spreadsheet summary tables and category performance metrics.'
    ],
    keyFindings: [
      'Organized enterprise fashion retail data and formal documentation in version control for repeatable spreadsheet reporting.'
    ],
    codeSnippets: [],
    githubUrl: 'https://github.com/SowmigaK/Sowmiga/tree/main/Sowmiga/Excel/Project/Trend_kart/Raw_data',
    rawFileUrls: [
      {
        label: 'TrendMart Enterprise Dataset (.xlsx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Excel/Project/Trend_kart/Raw_data/TrendMart_Fashion_Enterprise_Dataset(2).xlsx'
      },
      {
        label: 'TrendMart BRD (.docx)',
        url: 'https://github.com/SowmigaK/Sowmiga/blob/main/Sowmiga/Excel/Project/Trend_kart/Raw_data/TrendMart_BRD.docx'
      }
    ],
    thumbnail: freshmartPivotImg,
    imageCaption: 'Spreadsheet retail analytics preview (TrendMart dataset and BRD available in GitHub repo).',
    isPlaceholderVisual: true
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Mathematics',
    institution: 'Vellalar College for Women, Erode',
    location: 'Tamil Nadu, India',
    period: 'June 2023 – May 2026',
    scoreLabel: 'Percentage',
    scoreValue: '72%',
    scoreNote: 'Verified from uploaded resume (configurable inline).',
    tags: [
      'Linear Algebra',
      'Real Analysis',
      'Descriptive Statistics',
      'Probability',
      'Python',
      'MATLAB',
      'SageMath',
      'LaTeX'
    ],
    highlights: [
      'Strong quantitative foundation in mathematical modeling, statistical inference, probability distributions, and analytical reasoning.',
      'Selected for the prestigious 6-day Initiation Into Mathematics (INITMATH 2025) regional training programme under the MTTS Trust.',
      'Applied computational and analytical tools across SQL, Power BI, Microsoft Excel, Python, MATLAB, SageMath, and Overleaf.'
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'Initiation Into Mathematics (INITMATH 2025)',
    organization: 'MTTS Trust (Mathematics Training and Talent Search)',
    date: 'Jan 2025',
    category: 'Academic Programme',
    description:
      'Selected for a 6-day regional training programme under the MTTS Trust, focusing on linear algebra, real analysis, and problem-solving through advanced mathematical lectures and guided exploration.'
  },
  {
    title: 'Overview of Global Navigation Satellite System (GNSS)',
    organization: 'ISRO–IIRS, Dehradun',
    date: 'Sep – Oct 2024',
    category: 'Government / Space Course',
    description:
      'Completed the online course organized by ISRO–IIRS, Dehradun, covering the fundamentals and applications of satellite-based navigation systems.'
  },
  {
    title: 'Presented Paper at Regional Youth Astronomy & Space Science Congress (YASSC)',
    organization: 'YASSC Congress',
    date: 'Jul 2025',
    category: 'Research Presentation',
    description:
      'Presented an academic research paper at the Regional Youth Astronomy & Space Science Congress (YASSC).'
  },
  {
    title: 'Online Analytical & Mathematics Quiz Competitions',
    organization: 'Multi-Institutional Competitions',
    date: '2023 – 2025',
    category: 'Competitive',
    description:
      'Participated in multiple online quiz competitions across diverse topics, consistently achieving strong results.'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Python Full Stack Development',
    issuer: 'NK TECH',
    date: 'May 2025',
    type: 'Certification',
    description:
      'Successfully completed a Python Full Stack Development certification course covering Python programming, OOP, file handling, and application workflows.',
    verifiedFromResume: true
  },
  {
    title: 'Business Analytics Webinar',
    issuer: 'GUVI & HCL',
    date: 'Jun 2025',
    type: 'Webinar',
    description:
      'Completed industry-focused Business Analytics training organized by GUVI & HCL on analytical workflows and business KPI reporting.',
    verifiedFromResume: true
  },
  {
    title: 'Generative AI Learnathon',
    issuer: 'GUVI SAWIT.AI',
    date: 'Sep 2024',
    type: 'Learnathon',
    description:
      'Completed the Generative AI Learnathon program by GUVI SAWIT.AI, exploring modern AI concepts and practical problem solving.',
    verifiedFromResume: true
  },
  {
    title: 'Overview of Global Navigation Satellite System (GNSS)',
    issuer: 'ISRO–IIRS, Dehradun',
    date: 'Sep – Oct 2024',
    type: 'Course',
    description:
      'Completed the official online certification course by ISRO–IIRS, Dehradun on satellite-based navigation systems and applications.',
    verifiedFromResume: true
  },
  {
    title: 'Initiation Into Mathematics (INITMATH 2025)',
    issuer: 'MTTS Trust',
    date: 'Jan 2025',
    type: 'Achievement',
    isAward: true,
    description:
      'Selected for the prestigious 6-day regional training programme in linear algebra, real analysis, and mathematical problem-solving.',
    verifiedFromResume: true
  },
  {
    title: 'Paper Presentation — YASSC Congress',
    issuer: 'Regional Youth Astronomy & Space Science Congress',
    date: 'Jul 2025',
    type: 'Achievement',
    isAward: true,
    description:
      'Authored and presented a technical paper at the Regional Youth Astronomy & Space Science Congress (YASSC).',
    verifiedFromResume: true
  }
];

export const JOURNEY_STOPS: JourneyStop[] = [
  {
    id: 'bsc-math',
    label: 'B.Sc. Mathematics',
    period: 'Jun 2023',
    info: 'Started Bachelor of Science in Mathematics at Vellalar College for Women (2023–2026), building core foundations in Statistics, Probability, Linear Algebra, and Real Analysis (72%).'
  },
  {
    id: 'genai-guvi',
    label: 'Gen AI Learnathon',
    period: 'Sep 2024',
    info: 'Completed the Generative AI Learnathon organized by GUVI SAWIT.AI (Sep 2024), exploring modern AI tools and data workflows.'
  },
  {
    id: 'isro-iirs',
    label: 'ISRO–IIRS GNSS',
    period: 'Oct 2024',
    info: 'Completed the official ISRO–IIRS Dehradun online course "Overview of Global Navigation Satellite System (GNSS)" (Sep–Oct 2024).'
  },
  {
    id: 'initmath-2025',
    label: 'INITMATH 2025',
    period: 'Jan 2025',
    info: 'Selected for the 6-day regional training programme under the MTTS Trust (Jan 2025), focusing on advanced mathematical problem solving.'
  },
  {
    id: 'python-fullstack',
    label: 'Python Full Stack',
    period: 'May 2025',
    info: 'Earned the Python Full Stack Development certification from NK TECH (May 2025) and built NumPy, OOP, and Linear Regression notebooks.'
  },
  {
    id: 'guvi-hcl-ba',
    label: 'Business Analytics',
    period: 'Jun 2025',
    info: 'Completed the GUVI & HCL Business Analytics Webinar (Jun 2025) and developed FreshMart Excel, HealthPlus SQL, and NoviTech Power BI projects.'
  },
  {
    id: 'yassc-paper',
    label: 'YASSC Paper',
    period: 'Jul 2025',
    info: 'Presented a research paper at the Regional Youth Astronomy & Space Science Congress (YASSC) in July 2025.'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Understand the Business Question',
    subtitle: 'BRD Alignment & KPI Definition',
    description:
      'Review the Business Requirements Document (BRD) with stakeholders to clarify core objectives—whether reducing manufacturing downtime, auditing clinic consultation volumes, or improving retail store margins.',
    deliverables: ['Problem Statement', 'Target KPI List', 'Domain Scope'],
    toolsUsed: ['BRD Analysis', 'Domain Research']
  },
  {
    stepNumber: '02',
    title: 'Collect & Inspect the Data',
    subtitle: 'Schema Auditing & Profiling',
    description:
      'Inventory all available tables (CSV exports, multi-sheet Excel workbooks, or SQL schemas), inspect primary/foreign keys, and profile record counts, date ranges, and missing values.',
    deliverables: ['Entity Inventory', 'Data Quality Audit', 'Key Mapping'],
    toolsUsed: ['SQL SELECT', 'Power Query', 'Excel Filters']
  },
  {
    stepNumber: '03',
    title: 'Clean & Prepare the Data',
    subtitle: 'Standardization & Relational Modeling',
    description:
      'Standardize inconsistent text fields (UPPER/TRIM), impute or flag missing values, remove duplicates, and connect fact, dimension, and bridge tables into a clean analytical model.',
    deliverables: ['Cleaned Tables', 'Star / Bridge Schema', 'Sanity Checks'],
    toolsUsed: ['SQL UPDATE', 'Power Query ETL', 'Excel Formulas']
  },
  {
    stepNumber: '04',
    title: 'Analyze Using SQL, Excel, or Python',
    subtitle: 'Aggregations, Window Functions & Statistical Tests',
    description:
      'Write relational JOINs, CTEs, and Window Functions (RANK, LAG, LEAD), build multi-dimensional Pivot Tables, or compute correlation matrices and regression models in Python.',
    deliverables: ['Analytical Queries', 'DAX Measures', 'Statistical Outputs'],
    toolsUsed: ['MySQL / SQL', 'DAX', 'Python & NumPy']
  },
  {
    stepNumber: '05',
    title: 'Visualize with Charts & Dashboards',
    subtitle: 'Executive BI & Interactive Storytelling',
    description:
      'Design uncluttered Power BI and Excel dashboards with intuitive slicers, clear visual hierarchy, and tabular precision so managers can explore trends without visual noise.',
    deliverables: ['Power BI (.pbix)', 'Excel Dashboards', 'Trend Visuals'],
    toolsUsed: ['Power BI', 'Excel Charts', 'LaTeX']
  },
  {
    stepNumber: '06',
    title: 'Communicate Insights & Actions',
    subtitle: 'Decision Support & Documentation',
    description:
      'Translate technical findings into plain business recommendations—highlighting collection gaps, high-defect production runs, or top-performing retail categories.',
    deliverables: ['Executive Deck (.pptx)', 'Actionable Findings', 'Documented Repo'],
    toolsUsed: ['PowerPoint', 'Technical Writing', 'GitHub']
  }
];
