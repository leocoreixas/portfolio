import guapimirim from '@/assets/projects/guapimirim-areas-protegidas.jpg'
import maricaEcosystems from '@/assets/projects/marica-ecossistemas.jpg'
import maricaLandUse from '@/assets/projects/marica-uso-cobertura-solo.jpg'
import maricaWater from '@/assets/projects/marica-recursos-hidricos.jpg'
import maricaWildlife from '@/assets/projects/marica-soltura-classificacao.jpg'
import niteroiCycling from '@/assets/projects/niteroi-cicloviario.jpg'
import serraDaCanastra from '@/assets/projects/serra-da-canastra.jpg'
import riparianVegetation from '@/assets/projects/vegetacao-ciliar.jpg'
export interface Project {
  id: string
  image: string
  location: { pt: string; en: string }
  coordinates: [number, number]
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  tools: string[]
}

export const projects: Project[] = [
  {
    id: 'marica-ecossistemas',
    image: maricaEcosystems,
    location: { pt: 'Maricá, RJ', en: 'Maricá, RJ' },
    coordinates: [-42.8186, -22.9194],
    title: {
      pt: 'Ecossistemas naturais de Maricá',
      en: 'Natural ecosystems of Maricá',
    },
    description: {
      pt: 'Mapeamento da distribuição espacial e extensão dos ecossistemas naturais do município — floresta, restinga, manguezal e áreas naturais não florestadas — a partir de imagem Sentinel-2 (20m) e dados vetoriais do INEA. Subsídio para análises ambientais, planejamento territorial e conservação da biodiversidade.',
      en: 'Mapping of the spatial distribution and extent of the municipality\u2019s natural ecosystems — forest, restinga, mangrove and non-forested natural areas — using Sentinel-2 imagery (20m) and INEA vector data. Supports environmental analysis, land-use planning and biodiversity conservation.',
    },
    tools: ['QGIS', 'ArcGIS Pro', 'Sentinel-2'],
  },
  {
    id: 'marica-soltura',
    image: maricaWildlife,
    location: { pt: 'Maricá, RJ', en: 'Maricá, RJ' },
    coordinates: [-42.9, -22.95],
    title: {
      pt: 'Classificação de áreas para soltura de fauna silvestre',
      en: 'Habitat classification for wildlife release',
    },
    description: {
      pt: 'Classificação espectral de ecossistemas de floresta, restinga e várzea para identificar áreas com potencial para soltura de animais silvestres, avaliando conectividade e fragmentação da paisagem para fundamentar planos de manejo.',
      en: 'Spectral classification of forest, restinga and floodplain ecosystems to identify suitable areas for wildlife release, assessing landscape connectivity and fragmentation to inform management plans.',
    },
    tools: ['QGIS', 'Sentinel-2', 'Google Earth Engine'],
  },
  {
    id: 'marica-recursos-hidricos',
    image: maricaWater,
    location: { pt: 'Maricá, RJ', en: 'Maricá, RJ' },
    coordinates: [-42.95, -22.88],
    title: {
      pt: 'Recursos hídricos e nascentes de Maricá',
      en: 'Water resources and springs of Maricá',
    },
    description: {
      pt: 'Identificação de unidades de conservação com recursos hídricos significativos e mapeamento da concentração de nascentes do município, apoiando a gestão hídrica, o planejamento agrícola e a definição de zonas prioritárias de preservação.',
      en: 'Identification of conservation units with significant water resources and mapping of the concentration of springs across the municipality, supporting water management, agricultural planning and the definition of priority preservation zones.',
    },
    tools: ['QGIS', 'ArcGIS Pro', 'Power BI'],
  },
  {
    id: 'marica-uso-cobertura-solo',
    image: maricaLandUse,
    location: { pt: 'Maricá, RJ', en: 'Maricá, RJ' },
    coordinates: [-42.87, -22.92],
    title: {
      pt: 'Uso, cobertura do solo e áreas protegidas de Maricá',
      en: 'Land use, land cover and protected areas of Maricá',
    },
    description: {
      pt: 'Classificação da cobertura da terra do município (áreas antrópicas, florestadas, manguezal, restinga) e delimitação das unidades de conservação municipais a partir de dados do IBGE, CNUC e INEA integrados a imagens Sentinel-2, subsidiando o planejamento territorial e a gestão ambiental.',
      en: 'Land-cover classification for the municipality (anthropic areas, forest, mangrove, restinga) and delimitation of municipal conservation units using IBGE, CNUC and INEA data integrated with Sentinel-2 imagery, supporting land-use planning and environmental management.',
    },
    tools: ['QGIS', 'Sentinel-2', 'IBGE'],
  },
  {
    id: 'niteroi-cicloviario',
    image: niteroiCycling,
    location: { pt: 'Niterói, RJ', en: 'Niterói, RJ' },
    coordinates: [-43.1034, -22.8833],
    title: {
      pt: 'Infraestrutura cicloviária de Niterói',
      en: 'Cycling infrastructure of Niterói',
    },
    description: {
      pt: 'Mapeamento da malha cicloviária (ciclovias, ciclofaixas, ciclorrotas e calçadas compartilhadas) e dos pontos de paraciclos do município, em parceria com a Coordenadoria Niterói de Bicicleta e a Secretaria de Urbanismo e Mobilidade Urbana, para apoiar o planejamento da mobilidade ativa.',
      en: 'Mapping of the cycling network (bike paths, bike lanes, bike routes and shared sidewalks) and bike-parking points across the municipality, in partnership with the Niterói Bicycle Coordination Office and the Urban Planning and Mobility Department, supporting active-mobility planning.',
    },
    tools: ['ArcGIS Pro', 'SIGeo/PMN'],
  },
  {
    id: 'guapimirim-areas-protegidas',
    image: guapimirim,
    location: { pt: 'Guapimirim / Macacu, RJ', en: 'Guapimirim / Macacu, RJ' },
    coordinates: [-42.9, -22.65],
    title: {
      pt: 'Áreas protegidas para valuation ambiental',
      en: 'Protected areas for environmental valuation',
    },
    description: {
      pt: 'Mapeamento de unidades de conservação sobrepostas a um imóvel rural na bacia do Guapimirim-Macacu, evidenciando restrições legais e potencial de valorização de ativos por meio de créditos de carbono e ESG.',
      en: 'Mapping of conservation units overlapping a rural property in the Guapimirim-Macacu watershed, highlighting legal restrictions and asset-valuation potential through carbon credits and ESG.',
    },
    tools: ['ArcGIS Pro', 'GeoINEA'],
  },
  {
    id: 'vegetacao-ciliar',
    image: riparianVegetation,
    location: { pt: 'Vale do Paraíba, RJ', en: 'Paraíba Valley, RJ' },
    coordinates: [-44.6, -22.85],
    title: {
      pt: 'Monitoramento de vegetação ciliar',
      en: 'Riparian vegetation monitoring',
    },
    description: {
      pt: 'Classificação espectral de imagem multiespectral em 3 classes (solo exposto, gramínea e vegetação em regeneração) ao longo de um curso d\u2019água, resultado de vetorização automática assistida após processamento de imagem de satélite.',
      en: 'Spectral classification of multispectral imagery into 3 classes (bare soil, grass and regenerating vegetation) along a watercourse, produced through assisted automatic vectorization after satellite image processing.',
    },
    tools: ['ArcGIS Pro', 'Sensoriamento remoto'],
  },
  {
    id: 'serra-da-canastra',
    image: serraDaCanastra,
    location: { pt: 'Serra da Canastra, MG', en: 'Serra da Canastra, MG' },
    coordinates: [-46.55, -20.25],
    title: {
      pt: 'Amostragem multilíngue — Parque Nacional da Serra da Canastra',
      en: 'Multilingual sampling — Serra da Canastra National Park',
    },
    description: {
      pt: 'Mapeamento de pontos de amostragem no entorno do Parque Nacional da Serra da Canastra, com entregas em português, inglês e espanhol para dar suporte a organizações com atuação internacional.',
      en: 'Mapping of sampling points around Serra da Canastra National Park, delivered in Portuguese, English and Spanish to support organizations with international operations.',
    },
    tools: ['ArcGIS Pro', 'IBGE', 'CNUC'],
  },
]
