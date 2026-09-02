export default {
  nav: {
    about: 'About',
    skills: 'Tools',
    services: 'Services',
    projects: 'Maps',
    market: 'Market',
    contact: 'Contact',
  },
  hero: {
    kicker: 'D.V.M.S Environmental Solutions',
    title: 'Navigating environmental solutions with precision and technique',
    subtitle:
      'Geoprocessing and Environmental Science applied to conservation, licensing, and land asset valuation.',
    ctaProjects: 'View maps & projects',
    ctaContact: 'Talk to Danilo',
    role: 'Environmental Science · Geoprocessing & GIS',
  },
  about: {
    kicker: 'About',
    title: '',
      bio: 'D.V.M.S. Environmental Solutions develops Geoprocessing solutions focused on Environmental Management and Territorial Analysis. We convert spatial data and remote sensing imagery into technical diagnostics and high-precision cartographic products. Through GIS, we provide strategic support for urban planning and biodiversity conservation, contributing effective solutions to socio-environmental challenges.',
    factExperience: '8 years of experience',
    factExperienceLabel: 'in Geoprocessing & GIS',
    factEducation: 'Environmental Science',
    factEducationLabel: 'Federal Fluminense University (UFF)',
    factLanguages: 'PT · EN · ES',
    factLanguagesLabel: 'multilingual deliverables',
  },
  skills: {
    kicker: 'Tools',
    title: 'Tools & technical skills',
    groups: [
      {
        name: 'Geographic Information System (GIS)',
        items: ['ArcGIS Pro (incl. ArcGIS Online)', 'ArcMap', 'QGIS'],
      },
      {
        name: 'Remote sensing & cloud',
        items: ['Google Earth Engine (GEE)', 'Sentinel-2 imagery'],
      },
      {
        name: 'Data analysis & programming',
        items: ['Python (Jupyter Notebook)', 'SQL'],
      },
      {
        name: 'Data visualization & BI',
        items: ['Power BI'],
      },
      {
        name: 'Productivity & data management',
        items: ['Advanced Excel', 'Word', 'PowerPoint'],
      },
    ],
  },
  services: {
    kicker: 'Portfolio',
    title: 'Navigating solutions with precision and technique',
    items: [
      {
        code: '1.MS',
        title: 'Mapping & Environmental Solutions',
        description:
          'Technical-scientific mapping and environmental solutions based on geographic data.',
      },
      {
        code: '2.LA',
        title: 'Environmental Licensing',
        description: 'Consultancy in environmental licensing and technical support.',
      },
      {
        code: '3.GIS',
        title: 'GIS Consulting',
        description:
          'Consulting in Geographic Information Systems, databases and interactive reports.',
      },
    ],
  },
  projects: {
    kicker: 'Maps',
    title: 'Geoprocessing projects',
    subtitle:
      'A selection of cartographic products applied to conservation, water resources and rural asset valuation.',
    viewFull: 'View full map',
    tools: 'Tools',
  },
  map: {
    kicker: 'On the map',
    title: 'Where technique meets territory',
    subtitle: 'Areas of work in recent geoprocessing and conservation projects.',
  },
  marketSection: {
    kicker: 'Market',
    title: 'Geoprocessing as a strategic tool',
    intro:
      'For rural producers and investors, geoprocessing brings together environmental conservation and asset valuation. By mapping conservation units within rural properties, it becomes possible to clearly see which areas carry legal restrictions, water potential, or ecological relevance.',
    cases: [
      {
        name: 'Abundance Brasil · ConectaTerras',
        description:
          'Structured properties, documented conservation areas and produced valuation reports that led to strong appreciation, attracting investors and carbon-credit contracts.',
      },
      {
        name: 'Suzano S.A.',
        description:
          'A global leader in pulp and paper, uses property and forest mapping and monitoring to ensure environmental compliance, prove carbon-credit generation potential, and strengthen its position with ESG-aligned investors.',
      },
    ],
    conclusion:
      'Geoprocessing is not just a technical tool, but a strategic market instrument capable of generating revenue, reducing risk and increasing asset competitiveness.',
  },
  contact: {
    kicker: 'Contact',
    title: "Let's talk about your project",
    subtitle:
      'Available for consulting in geoprocessing, environmental licensing and technical-scientific mapping — in Portuguese, English or Spanish.',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    location: 'Location',
    locationValue: 'Niterói, RJ — Brazil',
    sendEmail: 'Send email',
  },
  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Built with React, Vite and Tailwind CSS.',
  },
} as const
