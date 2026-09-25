// Fonte única dos dados das LPs. Depois de editar, rode: node _dev/build.mjs
export const SITE = {
  url: 'https://lp.scootergoiania.com.br/',
  name: 'Scooter Goiânia',
  whatsapp: '5562999881098',        // vendas
  whatsappOficina: '5562996721097', // oficina
  priceRange: 'R$ 900 – R$ 13.900',
};

export const STORES = [
  { name: 'Setor Oeste', street: 'Av. T-7, 310', district: 'Setor Oeste', city: 'Goiânia', postalCode: '', label: 'Av. T-7, 310 - Setor Oeste, Goiânia - GO' },
  { name: 'Buriti Shopping', street: 'Av. José Leandro da Cruz', district: 'Vila São Tomaz', city: 'Aparecida de Goiânia', postalCode: '74915-515', label: 'Av. José Leandro da Cruz - Vila São Tomaz, Aparecida de Goiânia - GO - CEP 74915-515' },
  { name: 'AlphaMall', street: 'Av. Alphaville Flamboyant', district: 'Alphaville Flamboyant', city: 'Goiânia', postalCode: '74884-527', label: 'Av. Alphaville Flamboyant - Goiânia - GO - CEP 74884-527' },
];

// [nome, preço, potência, autonomia, velocidade, peso suportado, bateria, garantia, imagem]
export const PRODUCTS = {
  scooters: [
    ['C12','10.900','1000W','50 km','32 km/h','150 kg','Lítio','90 dias','c12'],
    ['Beverly','10.900','1000W','até 60 km','32 km/h','150 kg','Lítio','90 dias','beverly'],
    ['Liberty','10.900','1000W','até 60 km','32 km/h','150 kg','Lítio','90 dias','liberty'],
    ['Loula','11.300','1000W','até 40 km','32 km/h','150 kg','Lítio','90 dias','loula'],
    ['X13','10.500','1000W','até 40 km','32 km/h','150 kg','Lítio ferro fosfato','90 dias','x13'],
    ['WD6','11.700','1000W','50 km','32 km/h','180 kg','Lítio','90 dias','wd6'],
    ['A4','10.900','1000W','até 45 km','32 km/h','150 kg','Lítio','90 dias','a4'],
  ],
  pedal: [
    ['WD-2','8.900','1000W','40 km','32 km/h','150 kg','Lítio','90 dias','wd2'],
    ['GTS','7.000','500W','até 30 km','32 km/h','150 kg','Chumbo','90 dias','gts'],
    ['Ibiza','9.900','400W','55 km','32 km/h','125 kg','Lítio','até 1 ano*','ibiza'],
    ['Bibi','5.500','500W','30 km','32 km/h','120 kg','Lítio','90 dias','bibi'],
    ['E-Town','7.200','500W','30 km','32 km/h','120 kg','Lítio','90 dias','e-town'],
    ['Smart','5.000','350W','25 km','32 km/h','60 kg','Chumbo','90 dias','smart'],
    ['Joy Rema','7.500','800W','30 km','32 km/h','120 kg','Chumbo','90 dias','joy-rema'],
    ['Malo','6.000','350W','35 km','32 km/h','90 kg','Chumbo','90 dias','malo'],
  ],
  bikes: [
    ['Pop','7.200','800W','25 km','32 km/h','130 kg','Lítio','90 dias','pop'],
    ['FT03','10.900','1000W','35 km','32 km/h','120 kg','Lítio','90 dias','ft03'],
    ['Miami','4.900','350W','30 km','32 km/h','120 kg','Lítio','90 dias','miami'],
    ['V8 Pro','10.900','1000W','até 35 km','32 km/h','120 kg','Lítio','90 dias','v8-pro'],
    ['Avant','7.500','750W','até 35 km','32 km/h','120 kg','Lítio','90 dias','avant'],
    ['Everest','7.500','750W','até 35 km','32 km/h','120 kg','Lítio','90 dias','everest'],
    ['Forest','8.500','750W','até 35 km','32 km/h','120 kg','Lítio','90 dias','forest'],
    ['GT-2000','13.500','1000W','até 60 km','32 km/h','120 kg','Lítio','90 dias','gt-2000'],
  ],
  triciclos: [
    ['Power (U1)','13.900','800W','até 50 km','32 km/h','200 kg','Lítio','90 dias','power-u1'],
    ['Family','11.800','800W','até 50 km','32 km/h','160 kg','Lítio','90 dias','family'],
    ['Fênix','11.800','800W','até 50 km','32 km/h','160 kg','Lítio','90 dias*','fenix'],
    ['Lulu','10.900','800W','até 30 km','32 km/h','150 kg','Chumbo','90 dias','lulu'],
  ],
  patinetes: [
    ['Z3','10.900','2400W','35 km','até 40 km/h','140 kg','Lítio','90 dias','z3'],
    ['X10','8.900','1200W','até 40 km','até 32 km/h','150 kg','Lítio','90 dias','x10'],
    ['D2','6.500','800W','até 35 km','até 45 km/h','120 kg','Lítio','90 dias','d2'],
    ['T2 Pro','7.000','800W','até 40 km','até 45 km/h','120 kg','Lítio','90 dias','t2-pro'],
    ['S9 Pro','3.200','300W','30 km','25 km/h','100 kg','Lítio','90 dias','s9-pro'],
    ['S9','2.900','300W','20 km','25 km/h','100 kg','Lítio','90 dias','s9'],
    ['M365 sem banco','2.500','350W','até 20 km','20 km/h','120 kg','Lítio','90 dias','m365'],
    ['M365 com banco','2.700','350W','até 20 km','20 km/h','120 kg','Lítio','90 dias','m365-banco'],
    ['T10','4.900','800W','35 km','até 40 km/h','120 kg','Lítio','90 dias','t10'],
    ['T11','4.900','800W','35 km','até 40 km/h','120 kg','Lítio','90 dias','t11'],
  ],
  miniCross: [['Mini Cross','4.900','500W','até 1h30','25 km/h','80 kg','Lítio','90 dias','mini-cross']],
  hoverboard: [['Hoverboard','900','350W','até 1h30','18 km/h','90 kg','Lítio','90 dias','hoverboard']],
  drift: [
    ['Drift Foston','2.500','350W','até 1h30','18 km/h','80 kg','Lítio','90 dias','drift'],
    ['Drift Importado','1.900','350W','até 1h30','18 km/h','80 kg','Lítio','90 dias','drift'],
  ],
};

// Páginas: caminho, nome curto (breadcrumb), imagem OG, conjuntos de produtos exibidos
export const PAGES = [
  { path: '', file: 'index.html', crumb: 'Início', og: 'og-home.jpg', sets: [] },
  { path: 'scooters-e-bikes/', file: 'scooters-e-bikes/index.html', crumb: 'Scooters e bikes elétricas', og: 'og-scooters.jpg', sets: ['scooters', 'pedal', 'bikes'] },
  { path: 'triciclos/', file: 'triciclos/index.html', crumb: 'Triciclos elétricos', og: 'og-triciclos.jpg', sets: ['triciclos'] },
  { path: 'diversao-eletrica/', file: 'diversao-eletrica/index.html', crumb: 'Patinetes, hoverboards e drift', og: 'og-diversao.jpg', sets: ['patinetes', 'hoverboard', 'drift', 'miniCross'] },
  { path: 'oficina/', file: 'oficina/index.html', crumb: 'Oficina especializada', og: 'og-oficina.jpg', sets: [], whatsapp: '5562996721097' },
];

export const SET_LABELS = {
  scooters: 'Scooter elétrica', pedal: 'Scooter com pedal', bikes: 'Bike elétrica', triciclos: 'Triciclo elétrico',
  patinetes: 'Patinete elétrico', hoverboard: 'Hoverboard', drift: 'Triciclo drift', miniCross: 'Mini Cross',
};

export const OFICINA_SERVICES = [
  'Revisão elétrica e mecânica', 'Troca de módulos e parte elétrica', 'Avaliação e troca de bateria de lítio',
  'Pneus, rodas, desempeno, guidão, quadro e soldas', 'Suspensão', 'Adaptações e customizações',
];
