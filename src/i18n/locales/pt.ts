export default {
  nav: {
    about: 'Sobre',
    skills: 'Ferramentas',
    services: 'Serviços',
    projects: 'Mapas',
    market: 'Mercado',
    contact: 'Contato',
  },
  hero: {
    kicker: 'D.V.M.S Environmental Solutions',
    title: 'Navegando por soluções ambientais com precisão e técnica',
    subtitle:
      'Geoprocessamento e Ciência Ambiental aplicados à conservação, ao licenciamento e à valorização de ativos territoriais.',
    ctaProjects: 'Ver mapas e projetos',
    ctaContact: 'Falar com Danilo',
    role: 'Cientista Ambiental · Geoprocessamento & SIG',
  },
  about: {
    kicker: 'Perfil consultor',
    title: 'Sobre',
    bio: 'A D.V.M.S. Environmental Solutions atua na área de Geoprocessamento, com foco em Gestão Ambiental e Análise Territorial. Seu trabalho é direcionado à transformação de dados espaciais brutos e imagens de sensoriamento remoto em diagnósticos técnicos e produtos cartográficos de alta precisão. A aplicação de Sistemas de Informação Geográfica (SIG) é utilizada como ferramenta estratégica para enfrentar desafios socioambientais, abrangendo desde a interpretação de imagens de satélite até o desenvolvimento de mapeamentos temáticos que apoiam a tomada de decisão em planejamento urbano e conservação da biodiversidade.',
    factExperience: '8 anos de experiência',
    factExperienceLabel: 'em Geoprocessamento & SIG',
    factEducation: 'Ciência Ambiental',
    factEducationLabel: 'Universidade Federal Fluminense (UFF)',
    factLanguages: 'PT · EN · ES',
    factLanguagesLabel: 'entregas multilíngues',
  },
  skills: {
    kicker: 'Ferramentas',
    title: 'Ferramentas e competências técnicas',
    groups: [
      {
        name: 'SIG',
        items: ['ArcGIS Pro (incl. ArcGIS Online)', 'ArcMap', 'QGIS'],
      },
      {
        name: 'Sensoriamento remoto & nuvem',
        items: ['Google Earth Engine (GEE)', 'Imagens Sentinel-2'],
      },
      {
        name: 'Análise de dados & programação',
        items: ['Python (Jupyter Notebook)', 'SQL'],
      },
      {
        name: 'Visualização de dados & BI',
        items: ['Power BI'],
      },
      {
        name: 'Produtividade & gestão de dados',
        items: ['Excel avançado', 'Word', 'PowerPoint'],
      },
    ],
  },
  services: {
    kicker: 'Portfólio',
    title: 'Navegando por soluções com precisão e técnica',
    items: [
      {
        code: '1.MS',
        title: 'Mapeamento & Soluções Ambientais',
        description:
          'Mapeamento técnico-científico e soluções ambientais baseadas em dados geográficos.',
      },
      {
        code: '2.LA',
        title: 'Licenciamento Ambiental',
        description:
          'Consultoria em licenciamento ambiental e suporte técnico.',
      },
      {
        code: '3.GIS',
        title: 'Consultoria em GIS',
        description:
          'Consultoria em Sistema de Informação Geográfico, base de dados e relatórios interativos.',
      },
    ],
  },
  projects: {
    kicker: 'Mapas',
    title: 'Projetos de geoprocessamento',
    subtitle:
      'Uma seleção de produtos cartográficos aplicados à conservação, recursos hídricos e valorização de ativos rurais.',
    viewFull: 'Ver mapa completo',
    tools: 'Ferramentas',
  },
  map: {
    kicker: 'No mapa',
    title: 'Onde a técnica encontra o território',
    subtitle: 'Áreas de atuação em projetos recentes de geoprocessamento e conservação.',
  },
  marketSection: {
    kicker: 'Mercado',
    title: 'Geoprocessamento como instrumento estratégico',
    intro:
      'Para produtores rurais e investidores, o geoprocessamento une conservação ambiental e valorização de ativos. Com o mapeamento de unidades de conservação presentes em imóveis rurais, é possível visualizar quais áreas possuem restrições legais, potencial hídrico ou relevância ecológica.',
    cases: [
      {
        name: 'Abundance Brasil · ConectaTerras',
        description:
          'Estruturou propriedades, documentou áreas de conservação e gerou laudos de valuation que resultaram em forte valorização, atraindo investidores e contratos de crédito de carbono.',
      },
      {
        name: 'Suzano S.A.',
        description:
          'Líder global em papel e celulose, utiliza o mapeamento e monitoramento de imóveis e florestas para garantir conformidade ambiental, comprovar potencial de créditos de carbono e fortalecer sua posição junto a investidores alinhados às práticas de ESG.',
      },
    ],
    conclusion:
      'O geoprocessamento não é apenas uma ferramenta técnica, mas um instrumento estratégico de mercado capaz de gerar receitas, reduzir riscos e aumentar a competitividade de ativos.',
  },
  contact: {
    kicker: 'Contato',
    title: 'Vamos conversar sobre o seu projeto',
    subtitle:
      'Disponível para consultorias em geoprocessamento, licenciamento ambiental e mapeamento técnico-científico — em português, inglês ou espanhol.',
    email: 'E-mail',
    phone: 'Telefone',
    linkedin: 'LinkedIn',
    location: 'Localização',
    locationValue: 'Niterói, RJ — Brasil',
    sendEmail: 'Enviar e-mail',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    madeWith: 'Site desenvolvido com React, Vite e Tailwind CSS.',
  },
} as const
