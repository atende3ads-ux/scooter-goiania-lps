// Gera as partes estáticas das LPs a partir de _dev/data.mjs:
// cards de produto, sprite de ícones, links de WhatsApp, JSON-LD, sitemap.xml, llms.txt e cache-busting.
// Uso (na raiz do projeto): node _dev/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { SITE, STORES, PRODUCTS, PAGES, SET_LABELS, OFICINA_SERVICES } from './data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);
const today = new Date().toISOString().slice(0, 10);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const priceNumber = p => Number(p.replace(/\./g, ''));
const abs = p => new URL(p, SITE.url).href;

// ---------- Ícones (sprite SVG) ----------
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  power: '<path d="M12 2v10"/><path d="M6.2 5.8a8 8 0 1 0 11.6 0"/>',
  sound: '<path d="M5 9v6h4l5 4V5L9 9H5Z"/><path d="M17 9a4 4 0 0 1 0 6m2.5-8.5a8 8 0 0 1 0 11"/>',
  tools: '<path d="M14.7 6.3a4 4 0 0 0-5-5l2.1 2.1-2.4 2.4-2.1-2.1a4 4 0 0 0 5 5l7 7a2 2 0 0 1-2.8 2.8l-7-7a4 4 0 0 0-5-5l2.1 2.1-2.4 2.4-2.1-2.1a4 4 0 0 0 5 5"/>',
  shield: '<path d="M12 3 5 6v5c0 4.6 2.9 8.3 7 10 4.1-1.7 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  headset: '<path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M6 18H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1v6Zm12 0h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1v6ZM18 18c0 2-2 3-4 3h-2"/>',
  lifebuoy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m5.6 5.6 4.3 4.3m4.2 4.2 4.3 4.3m0-12.8-4.3 4.3m-4.2 4.2-4.3 4.3"/>',
  stability: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><circle cx="12" cy="8" r="3"/><path d="m9 16 3-5 3 5M4 21h16"/>',
  sparkles: '<path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Zm6 10 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13ZM5 14l.9 2.6L8.5 18l-2.6.9L5 21.5l-.9-2.6-2.6-.9 2.6-1.4L5 14Z"/>',
  bolt: '<path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>',
  route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 0-6h2a3 3 0 0 0 3-3V8"/>',
  speed: '<path d="M4 17a8 8 0 1 1 16 0"/><path d="m12 13 4-4M7 17h10"/>',
  weight: '<path d="M6 8h12l2 13H4L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  battery: '<rect x="3" y="6" width="16" height="12" rx="2"/><path d="M21 10v4M7 10v4m3-4v4m3-4v4m3-4v4"/>',
  clipboard: '<path d="M9 5H6a2 2 0 0 0-2 2v13h16V7a2 2 0 0 0-2-2h-3"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m8 13 2 2 5-5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="m12 3 0 7m0 4 0 7m9-9-7 0m-4 0-7 0m15.4-6.4-5 5m-2.8 2.8-5 5m12.8 0-5-5m-2.8-2.8-5-5"/>',
  customize: '<path d="m4 20 5-5m2-2 7-7 2 2-7 7m-5-1 2 2m5-11 4 4"/><path d="M5 4v4M3 6h4m11 11v4m-2-2h4"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
};
const svgUse = (name, extra = '') => `<svg aria-hidden="true" focusable="false"${extra}><use href="#i-${name}"/></svg>`;
const sprite = used => `<svg class="icon-sprite" aria-hidden="true" focusable="false">${[...used].sort().map(n => `<symbol id="i-${n}" viewBox="0 0 24 24">${ICONS[n]}</symbol>`).join('')}</svg>`;
// Ícone do botão flutuante: path do arquivo assets/images/icone-whatsapp.svg
const waPath = (read('assets/images/icone-whatsapp.svg').match(/<path[^>]*fill-rule="evenodd"[^>]*\sd="([^"]+)"/) || [])[1];
if (!waPath) throw new Error('Path do ícone do WhatsApp não encontrado');
const WA_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="${waPath}"/></svg>`;
const arrow = svgUse('arrow', ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"');

// ---------- Produtos ----------
const img = (slug, alt) => `<img src="../assets/images/products/${slug}-480.webp" srcset="../assets/images/products/${slug}-480.webp 480w, ../assets/images/products/${slug}-720.webp 720w, ../assets/images/products/${slug}.webp 900w" sizes="(min-width: 3200px) 660px, (min-width: 2560px) 520px, (min-width: 1920px) 400px, (min-width: 1600px) 380px, (min-width: 621px) 360px, 90vw" width="900" height="775" loading="lazy" decoding="async" alt="${esc(alt)}">`;
function productCard(p, label) {
  const [name, price, power, range, speed, weight, battery, warranty, slug] = p;
  const message = `Olá! Quero saber mais sobre o modelo ${name} da Scooter Goiânia.`;
  const spec = (icon, t, v) => `<li><i class="spec-icon">${svgUse(icon)}</i><span>${t}</span><strong>${esc(v)}</strong></li>`;
  return `<article class="product-card" id="modelo-${slug}${name.includes('Importado') ? '-importado' : ''}">
        <div class="product-media">${img(slug, `${label} ${name} à venda na Scooter Goiânia`)}<span class="product-tag">${esc(label)}</span></div>
        <div class="product-body">
          <div class="product-title-row"><h3 class="product-title">${esc(name)}</h3><div class="product-price">R$ ${price}</div></div>
          <ul class="specs">${spec('bolt', 'Potência', power)}${spec('route', 'Autonomia', range)}${spec('speed', 'Velocidade', speed)}${spec('weight', 'Suporta', weight)}${spec('battery', 'Bateria', battery)}${spec('shield', 'Garantia', warranty)}</ul>
          <div class="warranty">✓ Suporte pós-venda e oficina especializada</div>
          <a class="btn btn-dark" data-whatsapp data-product="${esc(name)}" data-message="${esc(message)}">Quero saber mais<span class="sr-only"> sobre o modelo ${esc(name)}</span> ${arrow}</a>
        </div>
      </article>`;
}

// ---------- WhatsApp ----------
function whatsappLinks(html, number) {
  return html.replace(/<a\b([^>]*\bdata-whatsapp\b[^>]*)>/g, (m, attrs) => {
    const msg = (attrs.match(/data-message="([^"]*)"/) || [])[1]?.replace(/&quot;/g, '"').replace(/&amp;/g, '&')
      || 'Olá! Gostaria de falar com a equipe da Scooter Goiânia.';
    const clean = attrs.replace(/\s(href|target|rel)="[^"]*"/g, '');
    return `<a href="https://wa.me/${number}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener"${clean}>`;
  });
}

// ---------- JSON-LD ----------
const orgId = `${SITE.url}#organizacao`;
const postal = s => ({ '@type': 'PostalAddress', streetAddress: s.street, addressLocality: s.city, addressRegion: 'GO', ...(s.postalCode && { postalCode: s.postalCode }), addressCountry: 'BR' });
const organization = {
  '@type': ['Store', 'Organization'],
  '@id': orgId,
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: abs('assets/images/icon-512.png'), width: 512, height: 512 },
  image: abs('assets/images/og-scooters.jpg'),
  description: 'Loja de veículos elétricos em Goiânia: scooters, bikes, triciclos, patinetes, hoverboards e triciclos drift, com garantia, suporte pós-venda e oficina especializada.',
  telephone: '+55 62 99988-1098',
  priceRange: SITE.priceRange,
  currenciesAccepted: 'BRL',
  address: postal(STORES[0]),
  areaServed: [{ '@type': 'City', name: 'Goiânia' }, { '@type': 'City', name: 'Aparecida de Goiânia' }],
  department: STORES.map(s => ({ '@type': 'Store', name: `${SITE.name} — ${s.name}`, address: postal(s), parentOrganization: { '@id': orgId } })),
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', telephone: '+55 62 99988-1098', availableLanguage: 'pt-BR', url: `https://wa.me/${SITE.whatsapp}` },
    { '@type': 'ContactPoint', contactType: 'technical support', name: 'Oficina Scooter Goiânia', telephone: '+55 62 99672-1097', availableLanguage: 'pt-BR', url: `https://wa.me/${SITE.whatsappOficina}` },
  ],
  knowsAbout: ['Scooter elétrica', 'Bike elétrica', 'Triciclo elétrico', 'Patinete elétrico', 'Hoverboard', 'Manutenção de veículos elétricos', 'Bateria de lítio'],
};
const website = { '@type': 'WebSite', '@id': `${SITE.url}#website`, url: SITE.url, name: SITE.name, inLanguage: 'pt-BR', publisher: { '@id': orgId } };

function productLd(p, set, pageUrl) {
  const [name, price, power, range, speed, weight, battery, warranty, slug] = p;
  const label = SET_LABELS[set];
  return {
    '@type': 'Product',
    name: `${label} ${name}`,
    sku: slug + (name.includes('Importado') ? '-importado' : ''),
    category: label,
    image: abs(`assets/images/products/${slug}.webp`),
    description: `${label} ${name} com motor de ${power}, autonomia de ${range}, velocidade de ${speed}, capacidade de ${weight}, bateria de ${battery.toLowerCase()} e garantia de ${warranty.replace('*', '')}.`,
    additionalProperty: [
      ['Potência', power], ['Autonomia', range], ['Velocidade máxima', speed], ['Peso suportado', weight], ['Bateria', battery], ['Garantia', warranty.replace('*', '')],
    ].map(([n, v]) => ({ '@type': 'PropertyValue', name: n, value: v })),
    offers: { '@type': 'Offer', price: priceNumber(price).toFixed(2), priceCurrency: 'BRL', url: `${pageUrl}#modelo-${slug}${name.includes('Importado') ? '-importado' : ''}`, seller: { '@id': orgId }, itemCondition: 'https://schema.org/NewCondition' },
  };
}

function jsonLd(page, html) {
  const url = abs(page.path);
  const title = strip((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const graph = [organization, website];
  const crumbs = [{ name: 'Início', url: SITE.url }];
  if (page.path) crumbs.push({ name: page.crumb, url });
  graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })) });
  graph.push({
    '@type': page.path === 'oficina/' ? ['WebPage', 'ItemPage'] : (page.sets.length ? 'CollectionPage' : 'WebPage'),
    '@id': `${url}#webpage`, url, name: title, description, inLanguage: 'pt-BR',
    isPartOf: { '@id': `${SITE.url}#website` }, about: { '@id': orgId }, breadcrumb: { '@id': `${url}#breadcrumb` },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(`assets/images/${page.og}`), width: 1200, height: 630 },
    dateModified: today,
  });
  if (page.sets.length) {
    const items = page.sets.flatMap(set => PRODUCTS[set].map(p => productLd(p, set, url)));
    graph.push({ '@type': 'ItemList', '@id': `${url}#modelos`, name: page.crumb, numberOfItems: items.length, itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })) });
  }
  if (page.path === 'oficina/') {
    graph.push({
      '@type': 'Service', '@id': `${url}#servico`, name: 'Oficina especializada em veículos elétricos',
      serviceType: 'Manutenção e conserto de scooters, patinetes, bikes e triciclos elétricos',
      provider: { '@id': orgId }, areaServed: organization.areaServed, url,
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Serviços da oficina', itemListElement: OFICINA_SERVICES.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })) },
    });
  }
  const faqs = [...html.matchAll(/<details class="faq-item"[^>]*><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)];
  if (faqs.length) graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: faqs.map(([, q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) });
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

// ---------- Cache busting ----------
const hash = f => crypto.createHash('sha1').update(read(f)).digest('hex').slice(0, 8);
const cssV = hash('assets/css/styles.css');
const jsV = hash('assets/js/main.js');

// ---------- Processa as páginas ----------
const faqIndex = {};
for (const page of PAGES) {
  let html = read(page.file);
  const used = new Set(['arrow']);
  html = html.replace(/<!-- build:products (\w+) -->[\s\S]*?<!-- \/build:products -->/g, (m, set) => {
    if (!PRODUCTS[set]) throw new Error(`Conjunto desconhecido: ${set}`);
    ['bolt', 'route', 'speed', 'weight', 'battery', 'shield'].forEach(i => used.add(i));
    return `<!-- build:products ${set} -->\n      ${PRODUCTS[set].map(p => productCard(p, SET_LABELS[set])).join('\n      ')}\n      <!-- /build:products -->`;
  });
  html = html.replace(/(<(span|div|i)\b[^>]*\bdata-icon="([\w-]+)"[^>]*>)(?:<svg[\s\S]*?<\/svg>)?/g, (m, open, tag, name) => {
    if (!ICONS[name]) throw new Error(`Ícone desconhecido: ${name}`);
    used.add(name);
    return open + svgUse(name);
  });
  html = html.replace(/<!-- build:wa-icon -->[\s\S]*?<!-- \/build:wa-icon -->/g, `<!-- build:wa-icon -->${WA_ICON}<!-- /build:wa-icon -->`);
  html = html.replace(/<!-- build:sprite -->[\s\S]*?<!-- \/build:sprite -->/, `<!-- build:sprite -->${sprite(used)}<!-- /build:sprite -->`);
  html = whatsappLinks(html, page.whatsapp || SITE.whatsapp);
  html = html.replace(/<!-- build:jsonld -->[\s\S]*?<!-- \/build:jsonld -->/, () => `<!-- build:jsonld -->${jsonLd(page, html)}<!-- /build:jsonld -->`);
  html = html.replace(/styles\.css\?v=[\w]+/g, `styles.css?v=${cssV}`).replace(/main\.js\?v=[\w]+/g, `main.js?v=${jsV}`);
  html = html.replace(/<span data-year>\d*<\/span>/g, `<span data-year>${today.slice(0, 4)}</span>`);
  write(page.file, html);
  faqIndex[page.path] = [...html.matchAll(/<details class="faq-item"[^>]*><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)].map(([, q, a]) => [strip(q), strip(a)]);
  console.log(`✓ ${page.file}`);
}

// 404.html: só o cache-busting do CSS
write('404.html', read('404.html').replace(/styles\.css\?v=[\w]+/g, `styles.css?v=${cssV}`));

// ---------- sitemap.xml ----------
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${PAGES.map(p => `  <url>
    <loc>${abs(p.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.path ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p.path ? '0.9' : '1.0'}</priority>
    <image:image><image:loc>${abs(`assets/images/${p.og}`)}</image:loc></image:image>
  </url>`).join('\n')}
</urlset>
`);
console.log('✓ sitemap.xml');

// ---------- llms.txt (e cópia llm.txt) ----------
const productLines = set => PRODUCTS[set].map(([n, pr, pw, r, sp, w, b, g]) => `- ${n}: R$ ${pr} · ${pw} · autonomia ${r} · ${sp} · suporta ${w} · bateria ${b.toLowerCase()} · garantia ${g}`).join('\n');
const faqBlock = p => (faqIndex[p] || []).map(([q, a]) => `- **${q}** ${a}`).join('\n');
const llms = `# Scooter Goiânia

> Loja de veículos elétricos em Goiânia (GO) com oficina própria especializada. Vende scooters elétricas, scooters com pedal, bikes elétricas, triciclos elétricos, patinetes elétricos, hoverboards, triciclos drift e Mini Cross, com garantia, suporte pós-venda e manutenção elétrica e mecânica. Atendimento pelo WhatsApp e em três lojas na região metropolitana de Goiânia.

Última atualização: ${today}. Preços em reais (R$), conforme o catálogo vigente; disponibilidade e condições devem ser confirmadas com a equipe.

## Lojas e contato

${STORES.map(s => `- ${s.name}: ${s.label}`).join('\n')}
- WhatsApp vendas: +55 62 99988-1098 (https://wa.me/${SITE.whatsapp})
- WhatsApp oficina: +55 62 99672-1097 (https://wa.me/${SITE.whatsappOficina})

## Páginas

- [Início](${SITE.url}): visão geral das linhas de produtos e da oficina.
- [Scooters e bikes elétricas em Goiânia](${abs('scooters-e-bikes/')}): scooters elétricas, scooters com pedal e bikes elétricas a partir de R$ 4.900.
- [Triciclos elétricos em Goiânia](${abs('triciclos/')}): triciclos com mais estabilidade, de R$ 10.900 a R$ 13.900.
- [Patinetes, hoverboards e triciclos drift](${abs('diversao-eletrica/')}): patinetes elétricos a partir de R$ 2.500, hoverboard, drift e Mini Cross.
- [Oficina especializada em veículos elétricos](${abs('oficina/')}): manutenção, conserto e revisão de scooters, patinetes, bikes e triciclos elétricos.

## Scooters elétricas

${productLines('scooters')}

## Scooters com pedal

${productLines('pedal')}

\\* Ibiza: motor com 1 ano de garantia; módulo e bateria, 6 meses; peças mecânicas, 3 meses.

## Bikes elétricas

${productLines('bikes')}

## Triciclos elétricos

${productLines('triciclos')}

\\* Fênix: o catálogo informa "90 dias (6 meses)"; confirme a condição vigente com a equipe.

## Patinetes elétricos

${productLines('patinetes')}

## Hoverboard, triciclo drift e Mini Cross

${productLines('hoverboard')}
${productLines('drift')}
${productLines('miniCross')}

## Oficina especializada

A oficina da Scooter Goiânia atende veículos elétricos (scooters, patinetes, bikes e triciclos) com:
${OFICINA_SERVICES.map(s => `- ${s}`).join('\n')}

Não é preciso saber qual peça apresentou defeito: o cliente descreve o problema pelo WhatsApp e a equipe orienta a avaliação. Quem comprou na Scooter Goiânia conta com suporte pós-venda e orientação sobre a garantia do modelo.

## Perguntas frequentes

${PAGES.map(p => faqBlock(p.path)).filter(Boolean).join('\n')}
`;
write('llms.txt', llms);
write('llm.txt', llms);
console.log('✓ llms.txt / llm.txt');
