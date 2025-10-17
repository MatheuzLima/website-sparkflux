# 🚀 SparkFlux  

Um **site moderno e leve** feito com **HTML, CSS e JavaScript puro**, projetado para apresentar serviços de forma clara e visualmente agradável.  
O foco do projeto é a **simplicidade**, **animações suaves** e um **formulário de contato funcional** integrado ao **n8n**.

---

## ✨ Principais Recursos

- Estrutura modular com **funções JavaScript** para cada seção do site.  
- **Animações leves** com Framer Motion (via esm.run).  
- **Formulário de contato** integrado ao n8n, enviando mensagens diretamente para o **Zoho Mail**.  
- Suporte a **páginas adicionais** (ex.: Política de Privacidade e Termos de Uso) usando **rotas via hash**.  
- **Hospedagem simples e rápida** com Netlify.

---

## 🧰 Tecnologias

- **HTML5 + CSS3 + JavaScript (ES6)**
- **Tailwind CSS (via CDN)** com tema personalizado diretamente no HTML  
- **Framer Motion (esm.run)** para animações  
- **Lucide Icons** para ícones  
- **n8n + Zoho Mail** para automação de formulários  
- **Netlify** para deploy e hospedagem  

---

## 📩 Integração do Formulário

O formulário envia os dados diretamente para o **Webhook do n8n**:  

```javascript
fetch('https://meu-link/webhook/sparkflux-form', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

Fluxo:  
1. O usuário preenche o formulário.  
2. O **n8n** recebe os dados e envia para o **Zoho Mail**.  
3. Opcionalmente, os dados podem ser salvos em planilhas ou bancos de dados.  

---

## ⚙️ Rodando Localmente

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/sparkflux.git
   cd sparkflux
   ```
2. Abra o arquivo `index.html` diretamente no navegador.  
   *(Não é necessário instalar nada.)*

---

## 🌍 Deploy

**Netlify:**  
1. Crie uma conta em [Netlify](https://netlify.com).  
2. Faça upload do projeto ou conecte o repositório GitHub.  
3. O site será publicado automaticamente.  

Outras opções: Vercel, GitHub Pages ou qualquer servidor estático.  

---

## 📂 Estrutura do Projeto

```
/root
 ├── index.html
 ├── /styles
 │    └── style.css
 └── /javascript
      ├── script.js
      ├── PrivacyPolicy.js
      └── Terms.js
```

---

## 🧑‍💻 Personalizando

1. Atualize a URL do seu webhook n8n no arquivo `script.js`.  
2. Faça o deploy no serviço que preferir.  

---

## 📬 Contato

📧 **contato.matheuslimams@gmail.com**  
