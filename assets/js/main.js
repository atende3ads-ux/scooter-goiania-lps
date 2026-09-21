const WHATSAPP = "https://wa.me/5562999881098";

const iconArrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const iconWhats = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L.2 24l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.5ZM12.2 21.8h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.4c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2l-.9 1.1c-.2.3-.4.3-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6L8.1 4.8c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3s1.3 3.5 1.5 3.7c.2.3 2.6 4 6.3 5.6 2.3 1 3.2 1.1 4.4.9.7-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>`;

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
        <li><span>Potência</span><strong>${power}</strong></li><li><span>Autonomia</span><strong>${range}</strong></li>
        <li><span>Velocidade</span><strong>${speed}</strong></li><li><span>Suporta</span><strong>${weight}</strong></li>
        <li><span>Bateria</span><strong>${battery}</strong></li><li><span>Garantia</span><strong>${warranty}</strong></li>
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
