# 🚀 SparkFlux - Website

Este projeto é uma **Website moderno e dinâmico** desenvolvida em **Vanilla JavaScript** utilizando **template strings** para renderização de componentes.  
O objetivo principal é apresentar serviços/produtos de forma clara, com animações leves e um **formulário de contato totalmente funcional** integrado ao **n8n**.

---

## 📌 Funcionalidades

- Estrutura modular baseada em **funções JavaScript** (cada seção é um componente).
- Animações de entrada utilizando **Framer Motion (inView + animate)**.
- Formulário de contato integrado via **Webhook no n8n**, que envia os dados para a **caixa de entrada no Zoho Mail**.
- Suporte a múltiplas páginas (ex.: Política de Privacidade e Termos de Uso) via **rotas com hash** (`#/privacy`, `#/terms`).
- Deploy contínuo realizado na **Netlify**.

---

## 🛠️ Tecnologias Utilizadas

- **Vanilla JavaScript (ES6+)**
- **Template Strings** para renderização dinâmica
- **Framer Motion (via esm.run)** para animações
- **Lucide Icons** para ícones
- **Netlify** para hospedagem
- **n8n** para automação de recebimento de formulários
- **Zoho Mail** como caixa de entrada de destino dos leads

---

## 📩 Integração do Formulário

Os dados do formulário são enviados para o endpoint configurado no **n8n**:

```javascript
fetch('https://atendimentosparkflow-n8n.ytekld.easypanel.host/webhook/sparkflux-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});

Fluxo dos dados:
	1.	Usuário preenche o formulário (nome, e-mail, telefone, mensagem).
	2.	Dados são enviados via webhook para o n8n.
	3.	O n8n processa os dados e direciona para a caixa de entrada Zoho Mail.
	4.	Opcionalmente, os dados podem ser salvos em planilhas, bancos de dados ou outras ferramentas integradas ao n8n.

⸻

⚙️ Como rodar o projeto localmente

1. Clone o repositório

git clone https://github.com/seu-usuario/sparkflux-landing.git
cd sparkflux-landing

2. Abra no navegador

Não é necessário nenhum build ou instalação de dependências. Basta abrir o arquivo index.html diretamente em seu navegador.

⸻

🌍 Como fazer deploy

Netlify
	1.	Crie uma conta em Netlify.
	2.	Faça upload do projeto ou conecte o repositório GitHub.
	3.	O deploy será feito automaticamente, com link público imediato.

Outras opções
	•	Vercel
	•	GitHub Pages
	•	Hospedagem manual em qualquer servidor estático (Nginx, Apache, etc).

⸻

📜 Estrutura do Projeto

/root
  |-- index.html
  |-- /assets
  |     |-- logo.png
  |     |-- imagens...
  |-- /styles
  |     |-- main.css
  |-- /javascript
        |-- script.js (renderização + rotas + animações + formulário)
        |-- PolicyPrivaty.js
        |-- Terms.js
        
🧑‍💻 Como usar no seu próprio projeto
	1.	Copie os arquivos index.html, style.css e app.js para sua estrutura.
	2.	Substitua o logo e imagens em /assets.
	3.	Configure seu próprio webhook n8n no arquivo app.js (substituindo a URL do fetch).
	4.	Faça deploy no serviço de sua preferência.

⸻

📬 Contato

Caso queira adaptar este projeto ou tenha dúvidas sobre a integração:
✉️ contato.matheuslimams@gmail.com