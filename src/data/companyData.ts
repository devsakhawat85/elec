export interface LeadershipMember {
  name: string;
  role: string;
  title: string;
  experience: string;
  education: string;
  credentials: string[];
  bio: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  discipline: 'mechanical' | 'electrical' | 'plumbing' | 'fire_protection';
  tagline: string;
  image: string;
  description: string;
  coreCapabilities: string[];
  codesAndStandards: string[];
  keyHighlights: string[];
}

export interface MarketSector {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  experienceStats: string;
  specificExpertise: string[];
  selectProjects: {
    name: string;
    location: string;
    scope: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  sector: 'k12' | 'municipal' | 'worship' | 'healthcare' | 'commercial';
  sectorLabel: string;
  disciplines: string[];
  yearOrEra: string;
  scopeSummary: string;
  details: string[];
}

export interface ClientGroup {
  category: string;
  description: string;
  items: string[];
}

export const COMPANY_INFO = {
  name: 'Premier Engineering Group, Inc.',
  shortName: 'PEG',
  tagline: 'Engineering Design Services — Mechanical, Electrical, Plumbing & Fire Protection',
  foundingYear: 1955,
  yearsOfExcellence: '70+',
  formerName: 'LJM Engineering Group (originally founded by Ralph J. Visco)',
  certifications: [
    'NJ Certified Women-Owned Business Enterprise (WBE)',
    'NJ Certified Small Business Enterprise (SBE)',
    'NJSDA Prequalified Engineering Consultant',
  ],
  contacts: {
    address: '439 Route 46 East, Rockaway, NJ 07866',
    gpsAddress: '439 Route 46 East, Denville, NJ 07834',
    phone: '973-586-3004',
    fax: '973-586-3009',
    email: 'hmcheney@pegmep.com',
    hours: 'Monday – Friday: 8:00 AM – 5:00 PM EST',
    googleMapsUrl: 'https://maps.google.com/maps?daddr=439+US-46,+Denville,+NJ+07834',
  },
  qualificationsPackageUrl: '/assets/peg_qualifications_package_2025.pdf',
  officialLogoUrl: '/assets/peg-logo.jpg',
  officialLogoEmblem: '/assets/peg-logo.png',
};

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: 'Gregory W. Cheney, P.E.',
    role: 'Executive Vice President / Principal',
    title: 'Lead Engineering Reviewer & Principal',
    experience: '35+ Years of Industry Experience',
    education: 'B.S. in Mechanical Engineering & M.S. in Engineering Management, Drexel University',
    credentials: ['Licensed Professional Engineer (NJ, NY, PA, IL)', 'ASHRAE Member'],
    bio: 'Greg directs and reviews all engineering and design work for the firm, overseeing project management, construction administration, and specialized technical services. He brings more than 35 years of engineering design and project management experience, including extensive owner-side industrial engineering leadership and mid-sized consulting practice with deep expertise in complex HVAC system design, energy efficiency, and field construction validation.',
  },
  {
    name: 'Helle-May Cheney, MBA',
    role: 'President / Principal',
    title: 'Executive Guidance & Business Administration',
    experience: '20+ Years in Technical Service Operations',
    education: 'B.S. in Engineering, Lafayette College · MBA in Operations Management & Marketing, Drexel University',
    credentials: ['NJ Certified Women-Owned Business Principal', 'Society of Marketing Professional Services'],
    bio: 'Helle-May provides the overall strategic guidance and operational leadership for Premier Engineering Group. Drawing upon two decades of executive operations and client service management with premier technical corporations, she leads business administration, client relations, contract compliance, and human resources, ensuring high standards of client attentiveness across every engagement.',
  },
  {
    name: 'Milton (Bud) A. Willis',
    role: 'Vice President',
    title: 'Project Management & Contract Administration',
    experience: '40+ Years in MEP/FP Design',
    education: 'Extensive Professional Engineering & Design Apprenticeship',
    credentials: ['LEED Training & Seminars', 'Senior MEP Field Administrator'],
    bio: 'Bud is responsible for the preparation of comprehensive working drawings, engineering specifications, and contract administration. For over 40 years, Bud has delivered mechanical and electrical designs across commercial, industrial, educational, and healthcare facilities. His LEED seminar training empowers clients to achieve sustainable, energy-efficient facility operations.',
  },
  {
    name: 'Mike Jabali',
    role: 'Senior Project Manager',
    title: 'Architectural & Engineering Coordination',
    experience: '20+ Years in A/E Project Management',
    education: 'Engineering & Construction Technology Management',
    credentials: ['Senior MEP Field Coordinator', 'Cross-Discipline Trade Lead'],
    bio: 'Mike manages complex engineering designs and cross-consultant coordination with architects, facility managers, and contractors. With over 20 years of experience managing hundreds of greenfield and renovation projects across commercial, retail, and industrial facilities, Mike ensures seamless project delivery from initial site survey through final municipal inspections.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'mechanical-hvac',
    title: 'Mechanical Engineering (HVAC)',
    shortTitle: 'Mechanical (HVAC)',
    discipline: 'mechanical',
    tagline: 'High-performance heating, cooling, and ventilation engineered for longevity, comfort, and energy efficiency.',
    image: '/assets/images/service_mechanical_hvac_1792506912831.jpg',
    description:
      'At Premier Engineering Group, our engineers take a holistic approach to designing energy-efficient heating, cooling, and ventilation systems that create quiet, safe, and healthy indoor environments. Drawing on decades of hands-on field experience, every system is designed around facility-specific limitations, physical longevity, ease of maintenance, and budgetary parameters.',
    coreCapabilities: [
      'Boiler & Chiller Plant Replacements & Upgrades',
      'Variable Refrigerant Flow (VRF) & VAV Multi-Zone Systems',
      'Direct Expansion (DX) Cooling & Heat Pump Systems',
      'Hydronic Heating & Chilled Water Distribution Networks',
      'Dedicated Outdoor Air Systems (DOAS) & Energy Recovery',
      'Building Management Systems (BMS) & Automated Controls',
      'Clean Room, STEM Lab & Healthcare Isolation Ventilation',
      'Chilled Beam Systems & Radiant Thermal Floor Heating',
      'Energy Savings Improvement Programs (ESIP) Engineering',
    ],
    codesAndStandards: [
      'ASHRAE 90.1, 62.1 & 55 Compliance',
      'NJ Uniform Construction Code (UCC) Mechanical Subcode',
      'International Mechanical Code (IMC)',
      'NFPA 90A & 90B Air Conditioning Ventilation Standards',
    ],
    keyHighlights: [
      'Holistic load calculation utilizing hourly building energy simulations.',
      'Designed over 400 school mechanical upgrade projects in New Jersey.',
      'Comprehensive construction administration and commissioning support.',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical Engineering & Power Systems',
    shortTitle: 'Electrical',
    discipline: 'electrical',
    tagline: 'Robust electrical infrastructure, standby generation, and energy-conserving lighting systems.',
    image: '/assets/images/service_electrical_power_1792506914223.jpg',
    description:
      'Premier’s electrical engineering team works hand-in-hand with all disciplines to design electrical power distribution and lighting systems that provide uninterrupted reliability and safety. From utility service entrances and backup emergency generation to architectural lighting and power factor correction, we ensure critical systems perform under all circumstances.',
    coreCapabilities: [
      'Medium to High Voltage Service Entrance & Distribution',
      'Emergency Standby Diesel & Natural Gas Generator Systems',
      'Automatic Transfer Switches (ATS) & Critical Circuiting',
      'Uninterruptible Power Supply (UPS) Systems for Critical Data',
      'Architectural Interior & Exterior LED Lighting with Photometrics',
      'Daylight Harvesting & Networked Digital Lighting Controls',
      'Substation & Transformer Replacements and Arc Flash Studies',
      'Combined Heat and Power (CHP) Electrical Interconnections',
      'Electric Vehicle (EV) Charging Station Infrastructure',
    ],
    codesAndStandards: [
      'National Electrical Code (NEC / NFPA 70)',
      'NFPA 110 (Emergency and Standby Power Systems)',
      'IESNA Recommended Lighting Practices',
      'NJ Clean Energy Program & Commercial Lighting Rebates',
    ],
    keyHighlights: [
      'Emergency generator systems engineered for police departments, DPW, and hospitals.',
      'Full coordination with public utilities (PSE&G, JCP&L, Orange & Rockland).',
      'Resilient electrical designs that support municipal continuity of operations.',
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing & Drainage Engineering',
    shortTitle: 'Plumbing',
    discipline: 'plumbing',
    tagline: 'Balanced water conveyance, resource conservation, and compliant sanitary and gas systems.',
    image: '/assets/images/service_plumbing_fire_1792506914592.jpg',
    description:
      'Not unlike a building’s cardiovascular system, a properly engineered plumbing system conveys an exact supply of clean water and specialized gases while safely discharging sanitary waste. Premier’s engineers balance hydraulic capacity, water conservation, and life safety across complex multi-story and institutional structures.',
    coreCapabilities: [
      'Domestic Potable Water Supply & Recirculation Loop Systems',
      'Sanitary Waste, Soil, and Venting Piping Networks',
      'Natural Gas & Propane Supply and Pressure Regulating Systems',
      'Water Protection Systems & Reduced Pressure Backflow Preventers',
      'Medical Gas Manifolds (O2, Medical Air, Vacuum) for Healthcare',
      'Compressed Air Distribution for Industrial & Lab Facilities',
      'Primary & Secondary Roof Drainage & Storm Water Systems',
      'Commercial High-Efficiency Water Heating & Softening Systems',
      'ADA-Compliant Fixture Layouts & Water-Saving Retrofits',
    ],
    codesAndStandards: [
      'National Standard Plumbing Code (NSPC)',
      'International Plumbing Code (IPC)',
      'NFPA 54 National Fuel Gas Code',
      'NFPA 99 Health Care Facilities Code (Gas & Vacuum)',
    ],
    keyHighlights: [
      'Specialized experience in school restroom overhauls and water quality upgrades.',
      'Sizing calculations preventing pressure drops and hot-water delivery delays.',
      'Full compliance with Lead-Free Safe Drinking Water Act standards.',
    ],
  },
  {
    id: 'fire-protection',
    title: 'Fire Alarm & Fire Protection Systems',
    shortTitle: 'Fire Protection / Alarm',
    discipline: 'fire_protection',
    tagline: 'Life safety systems engineered for immediate detection, containment, and rapid suppression.',
    image: '/assets/images/service_plumbing_fire_1792506914592.jpg',
    description:
      'Premier’s engineers thoroughly evaluate the unique construction typology, hazard classifications, and occupant load of each building to design reliable fire protection and alarm systems. In strict compliance with NFPA standards, our designs provide early detection, smoke evacuation, and reliable suppression to safeguard lives and property.',
    coreCapabilities: [
      'Wet-Pipe, Dry-Pipe, Pre-Action & Deluge Sprinkler Systems',
      'Fire Pump Design, Controller Engineering & Standpipe Systems',
      'Addressable Intelligent Fire Alarm & Voice Evacuation Systems',
      'Smoke & Heat Detection Networks & Duct Detector Integration',
      'Stairwell Pressurization & Atrium Smoke Management Systems',
      'Commercial Kitchen Fire Suppression & Hood Interlocks',
      'Municipal Backflow Prevention & Flow Test Verification',
      'NFPA 13, 14, 20 & 72 System Calculations & Hydraulic Layouts',
      'Life Safety Upgrades for Historic & Existing Structures',
    ],
    codesAndStandards: [
      'NFPA 13 (Standard for Installation of Sprinkler Systems)',
      'NFPA 72 (National Fire Alarm and Signaling Code)',
      'NFPA 101 (Life Safety Code) & NJ Fire Subcode',
      'International Fire Code (IFC) and Local AHJ Requirements',
    ],
    keyHighlights: [
      'Full coordination with local fire marshals and Authority Having Jurisdiction (AHJ).',
      'Discreet integration into architecturally sensitive religious and historic sanctuaries.',
      'Comprehensive fire flow hydraulic calculations verifying adequate water pressure.',
    ],
  },
];

export const MARKETS: MarketSector[] = [
  {
    id: 'k12-schools',
    title: 'K–12 Educational Facilities',
    subtitle: 'Over 400 school projects designed across 65+ New Jersey school districts in the last decade.',
    iconName: 'GraduationCap',
    experienceStats: '400+ Projects · 65+ Districts · NJSDA Prequalified',
    description:
      'Premier Engineering Group is a recognized leader in New Jersey K-12 public and private school engineering. From classroom unit ventilator replacements and central chiller plants to STEM maker spaces and complete restroom renovations, our engineers master the tight summer construction schedules, budget constraints, and stringent NJSDA criteria required in modern educational environments.',
    specificExpertise: [
      'Energy Savings Improvement Programs (ESIP) Energy Conservation Measures',
      'State-of-the-art STEM Labs, Maker Spaces, and Chemistry Fume Hood Exhaust',
      'Central Boiler & Chiller Plant Decarbonization & VRF Cooling Retrofits',
      'Gymnasium, Auditorium, and Cafeteria Dedicated HVAC Solutions',
      'Restroom Modernization & Water Quality Filtration Systems',
      'NJSDA Prequalified Consultant across all major engineering disciplines',
    ],
    selectProjects: [
      {
        name: 'Parsippany Board of Education',
        location: 'Parsippany, NJ',
        scope:
          'District-wide ESIP projects including high-voltage transformer and central boiler replacements, new VRF multi-zone cooling systems, and Combined Heat and Power (CHP) units.',
      },
      {
        name: 'East Brunswick Board of Education',
        location: 'East Brunswick, NJ',
        scope:
          'Comprehensive facility upgrades including new rooftop HVAC units, classroom unit ventilators, new central chiller plant, and upgraded ventilation exhaust systems.',
      },
      {
        name: 'Montgomery Board of Education',
        location: 'Montgomery, NJ',
        scope:
          'High-efficiency central boiler and chiller replacements alongside district-wide restroom infrastructure renovations.',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare Facilities',
    subtitle: 'Strict infection control, life safety, and specialized MEP for patient comfort and technical longevity.',
    iconName: 'HeartPulse',
    experienceStats: 'Hospitals · Imaging Suites · Clinics · Medical Offices',
    description:
      'From ambulatory surgery centers and specialized imaging suites to primary care suites and clinical laboratories, Premier understands that healthcare facilities require continuous mechanical reliability, tight humidity control, and positive/negative pressure cascades to ensure patient safety and regulatory compliance.',
    specificExpertise: [
      'Diagnostic Imaging Suites (MRI, CT, X-Ray) Mechanical & Electrical Support',
      'Surgical & Procedure Room Clean Air Systems & HEPA Filtration',
      'Medical Gas & Vacuum Piping Systems in compliance with NFPA 99',
      'Critical Branch Emergency Power, Standby Generators & Automatic Transfer',
      'Acoustic Attenuation & Vibration Isolation for Sensitive Equipment',
      'Infection Control Risk Assessment (ICRA) Phased Construction Coordination',
    ],
    selectProjects: [
      {
        name: 'Reproductive Medicine Associates of NJ',
        location: 'Basking Ridge & Regional Clinics, NJ',
        scope:
          'Specialized HVAC clean air filtration, clean room temperature/humidity control, medical gas supply, and backup generator power for clinical laboratories.',
      },
      {
        name: 'Regional Hospital Outpatient Suites',
        location: 'Northern & Central NJ',
        scope:
          'Renovation of clinical examination rooms, ultrasound suites, specialized lighting, and compliant medical plumbing infrastructure.',
      },
    ],
  },
  {
    id: 'municipal',
    title: 'Municipal & Public Facilities',
    subtitle: 'Cost-conscious, dependable engineering for civic centers, public works, and emergency services.',
    iconName: 'Building2',
    experienceStats: 'Courthouses · Police HQs · DPW Complexes · Libraries',
    description:
      'Premier Engineering Group understands the rigorous fiscal scrutiny and long-term planning presiding over public sector capital investments. We deliver robust, practical designs that meet public bidding specifications, minimize municipal operating expenditures, and ensure community resilience during emergencies.',
    specificExpertise: [
      'County Administration & Records Facility Central Utility Plants',
      'Emergency Management & Police Department 24/7 Backup Power Systems',
      'Public Works (DPW) Maintenance Garages & Vehicle Exhaust Capture',
      'Municipal Library Quiet HVAC Retrofits & Energy Efficient Lighting',
      'Public Bidding Document Preparation & Construction Permit Support',
    ],
    selectProjects: [
      {
        name: 'Morris County Administration & Records Building',
        location: 'Morristown, NJ',
        scope:
          'Complete central boiler plant replacement and automated hydronic controls at the county seat administration building.',
      },
      {
        name: 'Township of Hanover Municipal Complex',
        location: 'Hanover, NJ',
        scope:
          'Emergency generator upgrade at the DPW building, boiler plant replacement at the Municipal Building, and dedicated emergency power circuiting for the Police Department.',
      },
      {
        name: 'Town of Dover Public Library',
        location: 'Dover, NJ',
        scope:
          'Installation of a high-efficiency natural gas emergency backup generator and construction of a new multi-zone central HVAC system.',
      },
    ],
  },
  {
    id: 'places-of-worship',
    title: 'Places of Worship',
    subtitle: 'Preserving aesthetic sanctity and architectural beauty while incorporating modern MEP comfort and safety.',
    iconName: 'Church',
    experienceStats: 'Historic Sanctuaries · Fellowships · Multi-Story Additions',
    description:
      'Churches and sacred spaces require an extraordinary balance between thermal comfort, silent acoustic operation, and preservation of irreplaceable historic architectural fabric. Premier has extensive experience discretely integrating modern HVAC, lighting, and fire protection into soaring sanctuaries and busy parish halls.',
    specificExpertise: [
      'Ultra-Quiet Acoustic-Sensitive Air Distribution for Sanctuaries',
      'Architecturally Concealed Fire Sprinkler Piping & Head Placement',
      'Architectural Sanctuary Lighting, Dimmers & Exterior Facade Illumination',
      'Parish Center & Fellowship Hall Multi-Zone Heating and Cooling',
      'Historic Fabric Protection during Piping & Conduit Penetrations',
    ],
    selectProjects: [
      {
        name: 'Mary Mother of God Church',
        location: 'Hillsborough, NJ',
        scope:
          'Complete HVAC, electrical lighting/power, plumbing, and fire alarm design for extensive lobby renovations and two new additions across first floor and basement.',
      },
      {
        name: 'Church of St. Mary',
        location: 'Rutherford, NJ',
        scope:
          'Full MEP/FP engineering design associated with a new 2-story building addition and comprehensive renovation of basement meeting rooms and fellowship areas.',
      },
      {
        name: 'Good Shepherd Parish Church',
        location: 'Irvington, NJ',
        scope:
          'HVAC, electrical power/lighting, plumbing, and fire alarm/protection design for a major new wing addition and complete sanctuary HVAC modernization.',
      },
    ],
  },
  {
    id: 'banks-commercial',
    title: 'Banks & Commercial Facilities',
    subtitle: 'Continuing a 70-year legacy of commercial branch and multi-site facility engineering.',
    iconName: 'Landmark',
    experienceStats: 'Financial Branches · Corporate Offices · Retail · Industrial',
    description:
      'LJM Engineering Group began its legacy in 1955 with a dedicated focus on providing MEP engineering services for commercial banking institutions. Seven decades later, financial institutions, corporate headquarters, and commercial developers continue to rely on Premier for rapid, standardized multi-site rollouts and long-term cost containment.',
    specificExpertise: [
      'Multi-Branch Bank Standardization & Energy Efficient Prototype Design',
      'Secure Server Room & IT Closet Dedicated Cooling & UPS Power',
      'Tenant Improvement & Corporate Interior Open-Plan HVAC & Power Routing',
      'Commercial Retail, Restaurant Kitchen, and Fitness Center Infrastructure',
      'Warehouse & Light Industrial Heating, High-Bay Lighting & Ventilation',
    ],
    selectProjects: [
      {
        name: 'Wells Fargo & Regional Bank Branches',
        location: 'New Jersey Regional Network',
        scope:
          'HVAC upgrades, branch electrical service modernization, interior architectural lighting, and security equipment electrical coordination across multiple branch sites.',
      },
      {
        name: 'Kearny Federal Savings',
        location: 'Regional Branch Locations, NJ',
        scope:
          'Full mechanical, electrical, and plumbing engineering designs for new and renovated retail branch facilities.',
      },
      {
        name: 'Commercial Realty Group Office Parks',
        location: 'Morris & Essex Counties, NJ',
        scope:
          'Multi-tenant office space conversions, core restroom renovations, and energy-conserving common area lighting retrofits.',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'parsippany-boe',
    title: 'District-Wide ESIP & Mechanical Modernization',
    client: 'Parsippany Board of Education',
    location: 'Parsippany, NJ',
    sector: 'k12',
    sectorLabel: 'K–12 Education',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'ESIP Energy Measures'],
    yearOrEra: 'Recent Major Completion',
    scopeSummary:
      'Large-scale Energy Savings Improvement Program (ESIP) covering boiler plant replacements, new VRF cooling systems, high-voltage transformers, and combined heat & power units.',
    details: [
      'Engineered replacements of aging district heating boilers with high-efficiency condensing units.',
      'Implemented Variable Refrigerant Flow (VRF) zoned cooling systems for classroom temperature comfort.',
      'Designed Combined Heat and Power (CHP) electrical interconnections to lower peak utility draw.',
      'Supervised complete construction administration and verification of energy savings targets.',
    ],
  },
  {
    id: 'east-brunswick-boe',
    title: 'Comprehensive HVAC & Chiller Plant Infrastructure',
    client: 'East Brunswick Board of Education',
    location: 'East Brunswick, NJ',
    sector: 'k12',
    sectorLabel: 'K–12 Education',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'Plumbing'],
    yearOrEra: 'Multi-Phase Capital Program',
    scopeSummary:
      'New rooftop HVAC units, classroom unit ventilators, new central water-cooled chiller plant, and updated exhaust and ventilation systems.',
    details: [
      'Replaced outdated classroom equipment with quiet, high-efficiency unit ventilators.',
      'Engineered a state-of-the-art central chiller plant and primary/secondary chilled water piping loops.',
      'Designed new rooftop air handling units with digital economizer controls and sound attenuation.',
      'Enhanced indoor air quality and ventilation air exchange across high-occupancy learning spaces.',
    ],
  },
  {
    id: 'morris-county-records',
    title: 'Central Boiler Plant Replacement & Controls',
    client: 'County of Morris Administration',
    location: 'Morristown, NJ',
    sector: 'municipal',
    sectorLabel: 'Municipal & County',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'Controls'],
    yearOrEra: 'Major Civic Infrastructure',
    scopeSummary:
      'Complete central boiler plant replacement and hydronic distribution upgrade at the Morris County Administration and Records Building.',
    details: [
      'Engineered removal of legacy cast iron boilers and installation of high-efficiency modular boilers.',
      'Designed new variable speed hydronic pumping loops, chemical feed, and air separation systems.',
      'Connected modern building automation controls for remote scheduling and fault diagnostics.',
      'Full public bidding document package adhering to NJ Local Public Contracts Law.',
    ],
  },
  {
    id: 'township-of-hanover',
    title: 'Municipal Complex & Police Emergency Power',
    client: 'Township of Hanover',
    location: 'Hanover, NJ',
    sector: 'municipal',
    sectorLabel: 'Municipal & Public Safety',
    disciplines: ['Electrical', 'Mechanical (HVAC)', 'Emergency Power'],
    yearOrEra: 'Critical Infrastructure Upgrade',
    scopeSummary:
      'Emergency standby generator replacement at DPW, municipal building boiler plant replacement, and dedicated emergency power circuits for the Police Department.',
    details: [
      'Sized and installed heavy-duty exterior emergency diesel generator with sound-attenuated weather enclosure.',
      'Engineered dual automatic transfer switches separating life safety, critical police operations, and optional standby loads.',
      'Replaced the Municipal Building boiler plant with energy-efficient commercial hydronic heating.',
      'Ensured uninterrupted police dispatch and emergency operations during regional power grid outages.',
    ],
  },
  {
    id: 'dover-public-library',
    title: 'Public Library HVAC & Natural Gas Standby Power',
    client: 'Town of Dover',
    location: 'Dover, NJ',
    sector: 'municipal',
    sectorLabel: 'Municipal & Community',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'Natural Gas'],
    yearOrEra: 'Community Civic Facility',
    scopeSummary:
      'Installation of a clean natural gas emergency generator and construction of a new multi-zone central HVAC system for the historic Dover Public Library.',
    details: [
      'Designed quiet, low-decibel multi-zone HVAC system preserving silent library reading rooms.',
      'Engineered natural gas emergency generator delivering continuous municipal community shelter capability.',
      'Routed ductwork and electrical services unobtrusively through historic architectural features.',
    ],
  },
  {
    id: 'mary-mother-of-god',
    title: 'Sanctuary Renovation & Multi-Story Additions',
    client: 'Mary Mother of God Church',
    location: 'Hillsborough, NJ',
    sector: 'worship',
    sectorLabel: 'Places of Worship',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'Plumbing', 'Fire Alarm'],
    yearOrEra: 'Sacred Architecture',
    scopeSummary:
      'Full MEP/FP engineering design for lobby renovations, fellowship hall additions, and first-floor and basement expansions.',
    details: [
      'Designed discreet HVAC systems with low NC (noise criteria) ratings for sanctuary worship services.',
      'Engineered architectural lighting and dimming controls highlighting altar and nave architectural lines.',
      'Comprehensive plumbing design for new multi-stall fellowship restrooms and hospitality kitchens.',
      'Integrated addressable fire alarm system throughout old and new building wings.',
    ],
  },
  {
    id: 'church-of-st-mary',
    title: 'Two-Story Wing Addition & Fellowship Center',
    client: 'Church of St. Mary',
    location: 'Rutherford, NJ',
    sector: 'worship',
    sectorLabel: 'Places of Worship',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'Plumbing', 'Fire Alarm'],
    yearOrEra: 'Faith Community Expansion',
    scopeSummary:
      'Full MEP and fire alarm design associated with a new 2-story building addition and complete renovation of lower-level meeting rooms.',
    details: [
      'Multi-zone HVAC heating and air conditioning tailored to variable weekly church occupancy.',
      'High-efficiency lighting design compliant with energy codes while providing warm visual warmth.',
      'Fire alarm notification appliances coordinated with decorative woodwork and interior aesthetics.',
    ],
  },
  {
    id: 'good-shepherd-parish',
    title: 'Church Modernization & New Facility Wing',
    client: 'Good Shepherd Parish Church',
    location: 'Irvington, NJ',
    sector: 'worship',
    sectorLabel: 'Places of Worship',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'Plumbing', 'Fire Protection'],
    yearOrEra: 'Sanctuary & Community Center',
    scopeSummary:
      'HVAC, electrical power/lighting, plumbing, and fire alarm/protection design for a major new addition and sanctuary HVAC modernization.',
    details: [
      'Engineered comprehensive fire sprinkler suppression coverage across complex ceiling pitches.',
      'Modernized heating plant to lower utility expenses for the parish community.',
      'Coordinated electrical infrastructure for modern audio/visual, livestreaming, and musical instrumentation.',
    ],
  },
  {
    id: 'rma-nj-healthcare',
    title: 'Specialized Clinical & Laboratory Facility',
    client: 'Reproductive Medicine Associates of NJ',
    location: 'Basking Ridge, NJ',
    sector: 'healthcare',
    sectorLabel: 'Healthcare',
    disciplines: ['Mechanical (HVAC)', 'Electrical', 'Plumbing', 'Medical Gas'],
    yearOrEra: 'Advanced Clinical Practice',
    scopeSummary:
      'Precision temperature and humidity control, HEPA filtration, medical gases, and emergency backup power for clinical treatment and lab facilities.',
    details: [
      'Ultra-strict particulate containment and HEPA filtration for embryology and clinical labs.',
      'Redundant medical gas manifolds and vacuum lines adhering to NFPA 99 standards.',
      'Clean power conditioning and uninterruptible power supply (UPS) for sensitive lab instrumentation.',
    ],
  },
  {
    id: 'montgomery-boe',
    title: 'Boiler & Chiller Plant Overhauls & Restroom Renovation',
    client: 'Montgomery Board of Education',
    location: 'Montgomery, NJ',
    sector: 'k12',
    sectorLabel: 'K–12 Education',
    disciplines: ['Mechanical (HVAC)', 'Plumbing'],
    yearOrEra: 'District Modernization',
    scopeSummary:
      'Central boiler and chiller plant replacements alongside district-wide restroom infrastructure renovations.',
    details: [
      'Replaced end-of-life chillers with variable-speed magnetic bearing units for peak seasonal efficiency.',
      'Upgraded water supply and commercial plumbing fixtures to low-flow hands-free sensors.',
      'Seamless delivery coordinated entirely during summer recess.',
    ],
  },
];

export const CLIENT_GROUPS: ClientGroup[] = [
  {
    category: 'Architectural & Engineering Partners',
    description: 'Premier works collaboratively as a trusted MEP/FP subconsultant with leading regional architectural practices:',
    items: [
      'Array Healthcare Facilities Solutions (New York, NY)',
      'Comito Associates P.C. (Newark, NJ)',
      'DIGroupArchitecture (New Brunswick, NJ)',
      'Eric Baker Architects (Glen Ridge, NJ)',
      'FKA Architects (Oakland, NJ)',
      'Genovese Associates, Inc. (Ridgewood, NJ)',
      'Optimus Architecture (Rhinebeck, NY)',
      'Parette Somjen Architects, LLC (Rockaway, NJ)',
      'Pomarico Design Studio (Newburgh, NY)',
      'Posen Architects LLC (West Orange, NJ)',
      'SSP Architectural Group (Bridgewater, NJ)',
      'Longo Architects & Associates LLC (New Providence, NJ)',
      'Weiss Design Group (Livingston, NJ)',
    ],
  },
  {
    category: 'Public Sector & Institutional Clients',
    description: 'Serving municipalities, county administrations, regional commissions, and educational districts:',
    items: [
      'Borough of Bernardsville',
      'County of Morris (Administration, DPW & Records)',
      'Morris Union Jointure Commission',
      'Raritan Valley Community College',
      'Town of Dover (Civic Facilities & Library)',
      'Township of Hanover (Municipal & DPW)',
      'U.S. Department of Veterans Affairs',
      '65+ New Jersey K-12 Public School Districts',
    ],
  },
  {
    category: 'Private Sector & Corporate Clients',
    description: 'Providing engineering design services for corporate owners, healthcare providers, and religious institutions:',
    items: [
      'Archdiocese of Newark',
      'Avison Young Commercial Real Estate',
      'Cedar Crest Village',
      'Commercial Realty Group',
      'DHJ Management',
      'Honeywell International',
      'Kearny Federal Savings Bank',
      'Nobel-Biocare',
      'Reproductive Medicine Associates of NJ (RMA)',
      'Travelers Insurance',
      'Wells Fargo Regional Banking Network',
    ],
  },
];

export const COMPANY_TIMELINE = [
  {
    year: '1955',
    title: 'Founding by Ralph J. Visco',
    description:
      'Ralph J. Visco establishes the firm in New Jersey, quickly earning a stellar reputation for precision engineering with commercial banks, civic municipal halls, and early post-war educational institutions.',
  },
  {
    year: '1993',
    title: 'Transition to LJM Engineering Group',
    description:
      'Ralph’s son-in-law Larry Muse takes the helm, rebranding the firm as LJM Engineering Group. The firm expands rapidly into K-12 public education, healthcare suites, and complex public sector facilities.',
  },
  {
    year: '2016',
    title: 'Acquisition by Greg & Helle-May Cheney',
    description:
      'Greg and Helle-May Cheney acquire the company, sustaining its 60-year tradition as an agile, family-owned engineering firm. The firm is renamed Premier Engineering Group, Inc. ("PEG") and achieves NJ WBE and SBE certification.',
  },
  {
    year: '2020s–Present',
    title: '70+ Years of Engineering Excellence',
    description:
      'Operating from its Rockaway, NJ headquarters, Premier Engineering Group has engineered over 400 K-12 school projects, advanced decarbonization and ESIP energy measures, and continues to be the trusted partner for owners, architects, and institutions across the tri-state area.',
  },
];

export const CAREER_OPPORTUNITIES = [
  {
    title: 'Mechanical (HVAC) Design Engineer / P.E.',
    type: 'Full-Time · On-Site / Hybrid (Rockaway, NJ)',
    experience: '3–7+ Years Experience',
    description:
      'Seeking a motivated mechanical engineer with proven expertise in building HVAC load calculations, central chiller and boiler plant design, VRF multi-zone layouts, duct sizing, and preparation of full bidding construction documents in AutoCAD / Revit.',
    requirements: [
      'B.S. in Mechanical Engineering (EIT or P.E. preferred).',
      'Proficiency in AutoCAD and load calculation software (Carrier HAP or Trane TRACE).',
      'Familiarity with NJ Uniform Construction Code, ASHRAE 90.1 & 62.1.',
      'Strong communication skills for field visits and client coordination.',
    ],
  },
  {
    title: 'Electrical Systems Project Designer',
    type: 'Full-Time · Rockaway, NJ',
    experience: '2–5+ Years Experience',
    description:
      'Responsible for developing power distribution drawings, panel schedules, emergency generator circuiting, and interior/exterior lighting layouts across educational, commercial, and municipal facilities.',
    requirements: [
      'B.S. in Electrical Engineering or equivalent technical degree.',
      'Solid command of the National Electrical Code (NFPA 70).',
      'Proficient in AutoCAD drafting and photometrics calculations.',
      'Experience coordinating with mechanical trades and utility companies.',
    ],
  },
  {
    title: 'MEP AutoCAD / Revit Drafter & BIM Specialist',
    type: 'Full-Time · Rockaway, NJ',
    experience: '2+ Years Experience',
    description:
      'Assist engineering principals with drafting mechanical, electrical, plumbing, and fire protection construction sheets, detail callouts, schematic riser diagrams, and coordinating clash-free digital models.',
    requirements: [
      'Demonstrated expertise in AutoCAD (Revit / BIM experience a major plus).',
      'Understanding of architectural backgrounds and MEP trade layering.',
      'Keen eye for detail, drawing cleanliness, and schedule adherence.',
    ],
  },
];
