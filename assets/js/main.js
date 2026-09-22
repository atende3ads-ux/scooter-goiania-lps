const WHATSAPP_NUMBER = document.body.dataset.whatsappNumber || "5562999881098";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;

const iconArrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const iconWhats = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L.2 24l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.5ZM12.2 21.8h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.4c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2l-.9 1.1c-.2.3-.4.3-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6L8.1 4.8c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3s1.3 3.5 1.5 3.7c.2.3 2.6 4 6.3 5.6 2.3 1 3.2 1.1 4.4.9.7-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>`;

const icons = {
  power: `<svg viewBox="0 0 24 24"><path d="M12 2v10"/><path d="M6.2 5.8a8 8 0 1 0 11.6 0"/></svg>`,
  sound: `<svg viewBox="0 0 24 24"><path d="M5 9v6h4l5 4V5L9 9H5Z"/><path d="M17 9a4 4 0 0 1 0 6m2.5-8.5a8 8 0 0 1 0 11"/></svg>`,
  tools: `<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5-5l2.1 2.1-2.4 2.4-2.1-2.1a4 4 0 0 0 5 5l7 7a2 2 0 0 1-2.8 2.8l-7-7a4 4 0 0 0-5-5l2.1 2.1-2.4 2.4-2.1-2.1a4 4 0 0 0 5 5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.6 2.9 8.3 7 10 4.1-1.7 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  headset: `<svg viewBox="0 0 24 24"><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M6 18H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1v6Zm12 0h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1v6ZM18 18c0 2-2 3-4 3h-2"/></svg>`,
  lifebuoy: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m5.6 5.6 4.3 4.3m4.2 4.2 4.3 4.3m0-12.8-4.3 4.3m-4.2 4.2-4.3 4.3"/></svg>`,
  stability: `<svg viewBox="0 0 24 24"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><circle cx="12" cy="8" r="3"/><path d="m9 16 3-5 3 5M4 21h16"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24"><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Zm6 10 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13ZM5 14l.9 2.6L8.5 18l-2.6.9L5 21.5l-.9-2.6-2.6-.9 2.6-1.4L5 14Z"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24"><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/></svg>`,
  route: `<svg viewBox="0 0 24 24"><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 0-6h2a3 3 0 0 0 3-3V8"/></svg>`,
  speed: `<svg viewBox="0 0 24 24"><path d="M4 17a8 8 0 1 1 16 0"/><path d="m12 13 4-4M7 17h10"/></svg>`,
  weight: `<svg viewBox="0 0 24 24"><path d="M6 8h12l2 13H4L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>`,
  battery: `<svg viewBox="0 0 24 24"><rect x="3" y="6" width="16" height="12" rx="2"/><path d="M21 10v4M7 10v4m3-4v4m3-4v4m3-4v4"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24"><path d="M9 5H6a2 2 0 0 0-2 2v13h16V7a2 2 0 0 0-2-2h-3"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m8 13 2 2 5-5"/></svg>`,
  settings: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>`,
  wheel: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="m12 3 0 7m0 4 0 7m9-9-7 0m-4 0-7 0m15.4-6.4-5 5m-2.8 2.8-5 5m12.8 0-5-5m-2.8-2.8-5-5"/></svg>`,
  customize: `<svg viewBox="0 0 24 24"><path d="m4 20 5-5m2-2 7-7 2 2-7 7m-5-1 2 2m5-11 4 4"/><path d="M5 4v4M3 6h4m11 11v4m-2-2h4"/></svg>`
};

const icon = name => icons[name] || icons.sparkles;

const products = {
  scooters: [
    ["C12","10.900","1000W","50 km","32 km/h","150 kg","Lítio","90 dias","c12"],
    ["Beverly","10.900","1000W","até 60 km","32 km/h","150 kg","Lítio","90 dias","beverly"],
    ["Liberty","10.900","1000W","até 60 km","32 km/h","150 kg","Lítio","90 dias","liberty"],
    ["Loula","11.300","1000W","até 40 km","32 km/h","150 kg","Lítio","90 dias","loula"],
    ["X13","10.500","1000W","até 40 km","32 km/h","150 kg","Lítio ferro fosfato","90 dias","x13"],
    ["WD6","11.700","1000W","50 km","32 km/h","180 kg","Lítio","90 dias","wd6"],
    ["A4","10.900","1000W","até 45 km","32 km/h","150 kg","Lítio","90 dias","a4"]
  ],
  pedal: [
    ["WD-2","8.900","1000W","40 km","32 km/h","150 kg","Lítio","90 dias","wd2"],
    ["GTS","7.000","500W","até 30 km","32 km/h","150 kg","Chumbo","90 dias","gts"],
    ["Ibiza","9.900","400W","55 km","32 km/h","125 kg","Lítio","até 1 ano*","ibiza"],
    ["Bibi","5.500","500W","30 km","32 km/h","120 kg","Lítio","90 dias","bibi"],
    ["E-Town","7.200","500W","30 km","32 km/h","120 kg","Lítio","90 dias","e-town"],
    ["Smart","5.000","350W","25 km","32 km/h","60 kg","Chumbo","90 dias","smart"],
    ["Joy Rema","7.500","800W","30 km","32 km/h","120 kg","Chumbo","90 dias","joy-rema"],
    ["Malo","6.000","350W","35 km","32 km/h","90 kg","Chumbo","90 dias","malo"]
  ],
  bikes: [
    ["Pop","7.200","800W","25 km","32 km/h","130 kg","Lítio","90 dias","pop"],
    ["FT03","10.900","1000W","35 km","32 km/h","120 kg","Lítio","90 dias","ft03"],
    ["Miami","4.900","350W","30 km","32 km/h","120 kg","Lítio","90 dias","miami"],
    ["V8 Pro","10.900","1000W","até 35 km","32 km/h","120 kg","Lítio","90 dias","v8-pro"],
    ["Avant","7.500","750W","até 35 km","32 km/h","120 kg","Lítio","90 dias","avant"],
    ["Everest","7.500","750W","até 35 km","32 km/h","120 kg","Lítio","90 dias","everest"],
    ["Forest","8.500","750W","até 35 km","32 km/h","120 kg","Lítio","90 dias","forest"],
    ["GT-2000","13.500","1000W","até 60 km","32 km/h","120 kg","Lítio","90 dias","gt-2000"]
  ],
  triciclos: [
    ["Power (U1)","13.900","800W","até 50 km","32 km/h","200 kg","Lítio","90 dias","power-u1"],
    ["Family","11.800","800W","até 50 km","32 km/h","160 kg","Lítio","90 dias","family"],
    ["Fênix","11.800","800W","até 50 km","32 km/h","160 kg","Lítio","90 dias*","fenix"],
    ["Lulu","10.900","800W","até 30 km","32 km/h","150 kg","Chumbo","90 dias","lulu"]
  ],
  patinetes: [
    ["Z3","10.900","2400W","35 km","até 40 km/h","140 kg","Lítio","90 dias","z3"],
    ["X10","8.900","1200W","até 40 km","até 32 km/h","150 kg","Lítio","90 dias","x10"],
    ["D2","6.500","800W","até 35 km","até 45 km/h","120 kg","Lítio","90 dias","d2"],
    ["T2 Pro","7.000","800W","até 40 km","até 45 km/h","120 kg","Lítio","90 dias","t2-pro"],
    ["S9 Pro","3.200","300W","30 km","25 km/h","100 kg","Lítio","90 dias","s9-pro"],
    ["S9","2.900","300W","20 km","25 km/h","100 kg","Lítio","90 dias","s9"],
    ["M365 sem banco","2.500","350W","até 20 km","20 km/h","120 kg","Lítio","90 dias","m365"],
    ["M365 com banco","2.700","350W","até 20 km","20 km/h","120 kg","Lítio","90 dias","m365-banco"],
    ["T10","4.900","800W","35 km","até 40 km/h","120 kg","Lítio","90 dias","t10"],
    ["T11","4.900","800W","35 km","até 40 km/h","120 kg","Lítio","90 dias","t11"]
  ],
  miniCross: [["Mini Cross","4.900","500W","até 1h30","25 km/h","80 kg","Lítio","90 dias","mini-cross"]],
  hoverboard: [["Hoverboard","900","350W","até 1h30","18 km/h","90 kg","Lítio","90 dias","hoverboard"]],
  drift: [["Drift Foston","2.500","350W","até 1h30","18 km/h","80 kg","Lítio","90 dias","drift"],["Drift Importado","1.900","350W","até 1h30","18 km/h","80 kg","Lítio","90 dias","drift"]]
};

function productCard(p, category) {
  const [name, price, power, range, speed, weight, battery, warranty, image] = p;
  const message = encodeURIComponent(`Olá! Quero saber mais sobre o modelo ${name} da Scooter Goiânia.`);
  return `<article class="product-card">
    <div class="product-media"><img src="../assets/images/products/${image}.webp" alt="${name} da Scooter Goiânia"><span class="product-tag">${category}</span></div>
    <div class="product-body">
      <div class="product-title-row"><h3 class="product-title">${name}</h3><div class="product-price">R$ ${price}</div></div>
      <ul class="specs">
        <li><i class="spec-icon">${icon('bolt')}</i><span>Potência</span><strong>${power}</strong></li><li><i class="spec-icon">${icon('route')}</i><span>Autonomia</span><strong>${range}</strong></li>
        <li><i class="spec-icon">${icon('speed')}</i><span>Velocidade</span><strong>${speed}</strong></li><li><i class="spec-icon">${icon('weight')}</i><span>Suporta</span><strong>${weight}</strong></li>
        <li><i class="spec-icon">${icon('battery')}</i><span>Bateria</span><strong>${battery}</strong></li><li><i class="spec-icon">${icon('shield')}</i><span>Garantia</span><strong>${warranty}</strong></li>
      </ul>
      <div class="warranty">✓ Suporte pós-venda e oficina especializada</div>
      <a class="btn btn-dark" href="${WHATSAPP}?text=${message}" target="_blank" rel="noopener">Quero saber mais ${iconArrow}</a>
    </div>
  </article>`;
}

document.querySelectorAll('[data-products]').forEach(container => {
  const set = container.dataset.products;
  const label = container.dataset.label || set;
  container.innerHTML = (products[set] || []).map(p => productCard(p, label)).join('');
});

document.querySelectorAll('[data-icon]').forEach(element => {
  element.innerHTML = icon(element.dataset.icon);
});

document.querySelectorAll('[data-carousel]').forEach(wrapper => {
  const track = wrapper.querySelector('.product-carousel');
  wrapper.querySelector('[data-prev]')?.addEventListener('click', () => track.scrollBy({left: -380, behavior: 'smooth'}));
  wrapper.querySelector('[data-next]')?.addEventListener('click', () => track.scrollBy({left: 380, behavior: 'smooth'}));
});

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const message = encodeURIComponent(link.dataset.message || 'Olá! Gostaria de falar com a equipe da Scooter Goiânia.');
  link.href = `${WHATSAPP}?text=${message}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

const header = document.querySelector('.site-header');
if (header) window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 120), {passive:true});

const floating = document.querySelector('.floating-whatsapp');
if (floating) floating.innerHTML = iconWhats;

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

document.querySelectorAll('[data-animated-heading]').forEach(heading => {
  if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 620px)').matches) return;
  const lines = heading.innerText.split('\n');
  let characterIndex = 0;
  heading.textContent = '';
  lines.forEach((lineText, lineIndex) => {
    const line = document.createElement('span');
    line.className = 'animated-line';
    [...lineText].forEach(character => {
      const span = document.createElement('span');
      span.className = 'animated-char';
      span.textContent = character === ' ' ? '\u00a0' : character;
      span.style.setProperty('--char-delay', `${200 + characterIndex * 30}ms`);
      characterIndex += 1;
      line.appendChild(span);
    });
    heading.appendChild(line);
    if (lineIndex < lines.length - 1) heading.appendChild(document.createElement('br'));
  });
});
