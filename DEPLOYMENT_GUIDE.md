# Guia de Publicação - Landing Page Rafael Junqueira

## 📋 Visão Geral

Esta é uma landing page profissional, responsiva e otimizada para conversão. O projeto está pronto para ser publicado gratuitamente em plataformas como Netlify, Vercel ou GitHub Pages.

---

## 🔧 Configuração Necessária

### 1. Adicionar Links do WhatsApp e Formulário

Abra o arquivo `client/src/pages/Home.tsx` e procure pela seção de TODO no início da página:

```javascript
// TODO: Substituir pelos links reais do WhatsApp e formulário
const whatsappLink = "https://wa.me/SEUCELULAR?text=Olá%20Rafael,%20gostaria%20de%20agendar%20uma%20triagem";
const formLink = "https://forms.google.com/seu-formulario";
```

**Para o WhatsApp:**
- Substitua `SEUCELULAR` pelo número de telefone com código do país (ex: 5514999999999)
- O texto padrão é "Olá Rafael, gostaria de agendar uma triagem" (pode ser customizado)
- Exemplo completo: `https://wa.me/5514999999999?text=Olá%20Rafael,%20gostaria%20de%20agendar%20uma%20triagem`

**Para o Formulário:**
- Crie um formulário no Google Forms
- Copie o link de compartilhamento
- Substitua a URL do `formLink`

---

## 🚀 Publicação no Netlify

### Passo 1: Preparar o Repositório
```bash
git init
git add .
git commit -m "Initial commit: Landing page Rafael Junqueira"
```

### Passo 2: Fazer Upload para GitHub
1. Crie um repositório no GitHub
2. Faça push do código:
```bash
git remote add origin https://github.com/seu-usuario/landing-rafael-junqueira.git
git branch -M main
git push -u origin main
```

### Passo 3: Conectar ao Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione seu repositório do GitHub
4. Configurações de build:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist`
5. Clique em "Deploy site"

---

## 🚀 Publicação no Vercel

### Passo 1: Fazer Upload para GitHub (se ainda não fez)
Siga os passos 1 e 2 da seção Netlify

### Passo 2: Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Vercel detectará automaticamente as configurações
5. Clique em "Deploy"

---

## 🚀 Publicação no GitHub Pages

### Passo 1: Configurar o Repositório
1. Crie um repositório com o nome `seu-usuario.github.io`
2. Faça push do código

### Passo 2: Configurar GitHub Pages
1. Vá para Settings → Pages
2. Em "Source", selecione "Deploy from a branch"
3. Selecione a branch `main` e pasta `/ (root)`
4. Clique em "Save"

### Passo 3: Atualizar vite.config.ts
Se estiver usando um repositório com nome diferente, atualize:
```typescript
export default defineConfig({
  base: '/seu-repositorio/',
  // ... resto da configuração
});
```

---

## 📱 Responsividade e Testes

A landing page foi desenvolvida com design mobile-first e é totalmente responsiva para:
- ✅ Celulares (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)

**Teste em diferentes dispositivos:**
- Chrome DevTools (F12 → Toggle device toolbar)
- Responsively App
- Seu próprio celular

---

## 🎨 Customizações Futuras

### Alterar Cores
Edite `client/src/index.css` na seção `:root`:
```css
:root {
  --primary: #A8D5BA; /* Verde menta */
  --background: #F8F6F1; /* Off-white bege */
  --foreground: #2C2C2C; /* Cinza escuro */
}
```

### Alterar Tipografia
Edite `client/index.html` para adicionar novas fontes do Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Sua+Fonte:wght@400;600;700&display=swap" rel="stylesheet" />
```

Depois atualize `client/src/index.css`:
```css
h1, h2, h3 {
  font-family: 'Sua Fonte', sans-serif;
}
```

### Adicionar Imagens Personalizadas
1. Gere ou obtenha imagens profissionais
2. Faça upload em um serviço como:
   - Unsplash
   - Pexels
   - Seu próprio servidor
3. Substitua as URLs no arquivo `Home.tsx`

---

## 🔍 SEO Básico

O site já inclui meta tags otimizadas em `client/index.html`:
- Título: "Psicoterapia Infantil e Orientação Parental | Rafael Junqueira"
- Descrição: "Atendimento psicológico infantil, adolescentes e orientação parental..."
- Keywords: psicoterapia infantil, psicologia infantil, adolescentes, etc.

**Para melhorar ainda mais:**
1. Adicione Google Analytics (já configurado)
2. Envie o sitemap para Google Search Console
3. Adicione schema.json para dados estruturados

---

## 📊 Melhorias Futuras Sugeridas

### 1. Pixel do Meta Ads
Para rastrear conversões e fazer remarketing:
```html
<!-- Adicionar em client/index.html -->
<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=SEU_PIXEL_ID&ev=PageView&noscript=1" />
```

### 2. Integração com Google Forms
Já está pronta! Basta adicionar o link do formulário na configuração.

### 3. Domínio Próprio
- Compre um domínio em Namecheap, GoDaddy, etc.
- Configure os DNS apontando para Netlify/Vercel
- Ative HTTPS automático

### 4. Chat em Tempo Real
Considere adicionar:
- Zendesk Chat
- Drift
- Intercom

### 5. Agendamento Automático
Integre com:
- Calendly
- Acuity Scheduling
- Agendor

---

## ✅ Checklist Pré-Publicação

- [ ] Links do WhatsApp e formulário configurados
- [ ] Informações de contato atualizadas
- [ ] Imagens carregando corretamente
- [ ] Testado em celular, tablet e desktop
- [ ] Links internos funcionando
- [ ] Botões com hover funcionando
- [ ] Velocidade de carregamento aceitável
- [ ] Meta tags preenchidas corretamente
- [ ] Aviso ético visível no rodapé

---

## 🆘 Troubleshooting

### Imagens não carregam
- Verifique se as URLs estão corretas
- Certifique-se de que os links são públicos
- Teste em modo incógnito (sem cache)

### Botões não funcionam
- Verifique se os links do WhatsApp estão no formato correto
- Teste o link manualmente no navegador

### Página lenta
- Comprima as imagens
- Use formatos modernos (WebP)
- Ative cache no navegador

### Responsividade quebrada
- Teste em diferentes tamanhos de tela
- Verifique o viewport meta tag
- Use Chrome DevTools para debug

---

## 📞 Suporte

Para dúvidas sobre publicação:
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

**Desenvolvido com ❤️ para psicoterapia infantil**
