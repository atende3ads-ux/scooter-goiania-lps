# Landing Pages - Scooter Goiânia

Landing pages estáticas publicadas em **https://lp.scootergoiania.com.br/**:

- `/` — hub com as linhas de produtos
- `/scooters-e-bikes/` — scooters elétricas, scooters com pedal e bikes elétricas
- `/triciclos/` — triciclos elétricos
- `/diversao-eletrica/` — patinetes, hoverboards, triciclos drift e Mini Cross
- `/oficina/` — oficina especializada

HTML, CSS e JavaScript puros, CSS mobile first, sem dependências em produção.

## Editar produtos, preços e FAQ

Os cards de produto, o sprite de ícones, os links de WhatsApp, o JSON-LD (Schema.org), o `sitemap.xml`, o `llms.txt`/`llm.txt` e o cache-busting (`?v=`) são gerados a partir de `_dev/data.mjs`:

```bash
node _dev/build.mjs
```

Rode o comando depois de alterar `_dev/data.mjs`, os FAQs do HTML, o CSS ou o JS, e faça commit dos arquivos gerados.

## Integrações

Em `assets/js/main.js`, bloco `CONFIG`:

- `gtmId`: ID do Google Tag Manager (GA4 e Google Ads são configurados dentro do GTM). O GTM carrega após o `load` da página.
- `webhookUrl`: recebe cada clique no WhatsApp (produto, seção, página, UTMs e gclid). Libere o domínio no `connect-src` da CSP em `.htaccess`.

O evento `whatsapp_click` é enviado ao `dataLayer` em todo clique no WhatsApp.

## Deploy

Push na `main` → cPanel › Git Version Control › Update from Remote › Deploy HEAD Commit. O `.cpanel.yml` copia os arquivos para o Document Root (`/home2/hg3ads37/lp.scootergoiania.com.br/`), exceto `_dev/`, `README.md` e arquivos do git.

## Desenvolvimento local

```bash
python3 -m http.server 4173
```
