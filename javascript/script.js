import { animate, scroll, inView } from "https://esm.run/framer-motion";

const assets = {
    logo: 'https://r2.flowith.net/files/o/1756949057878-sparkflux_b2b_ai_company_logo_index_0@1024x1024.png',
    heroBackground: 'https://r2.flowith.net/files/o/1756949026323-futuristic_abstract_tech_background_index_1@1024x1024.png',
    client1: 'https://r2.flowith.net/files/o/1756949067022-quantum_leap_tech_logo_design_index_3@1024x1024.png',
    client2: 'https://r2.flowith.net/files/o/1756949057727-innovate_ai_logo_design_index_4@1024x1024.png',
    client3: 'https://r2.flowith.net/files/o/1756949038796-nexus_corp_fictional_logo_index_2@1024x1024.png',
    client4: 'https://r2.flowith.net/files/o/1756949032739-dataweave_fictional_logo_design_index_5@1024x1024.png',
};

const Header = () => `
    <header class="fixed top-0 left-0 right-0 z-50 bg-brand-black/50 backdrop-blur-lg">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center">
                <img src="${assets.logo}" alt="SparkFlux Logo" class="h-10 w-10 mr-3">
                <span class="font-title text-2xl font-bold text-brand-white">SparkFlux</span>
            </div>
            <a href="#contact" class="btn-primary font-body text-sm font-semibold text-white bg-brand-blue px-6 py-3 rounded-lg hidden md:block">
                Fale com um especialista
            </a>
        </nav>
    </header>
`;

const Hero = () => `
    <section id="hero" class="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
        <div class="absolute inset-0 z-0">
            <img src="${assets.heroBackground}" alt="Fundo Abstrato Tecnológico" class="w-full h-full object-cover opacity-20">
            <div class="absolute inset-0 bg-brand-black opacity-60"></div>
        </div>
        <div class="relative z-10 px-6 animated-section">
            <h1 class="font-title text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight mb-4">
                Automatize o Complexo. <span class="text-brand-blue">Acelere o Futuro.</span>
            </h1>
            <p class="font-body text-lg md:text-xl text-brand-gray-light max-w-3xl mx-auto mb-8">
                Desenvolvemos soluções de Inteligência Artificial sob medida que transformam seus processos operacionais e impulsionam seus resultados.
            </p>
            <a href="#contact" class="btn-primary font-body font-semibold text-white bg-brand-blue px-8 py-4 rounded-lg text-lg">
                Quero uma Demonstração
            </a>
        </div>
    </section>
`;

const SocialProof = () => `
    <section id="social-proof" class="py-16 sm:py-24 bg-brand-black/30 animated-section">
        <div class="container mx-auto px-6 text-center">
            <h3 class="font-body text-sm font-semibold text-brand-gray uppercase tracking-widest mb-8">
                Empresas que confiam na nossa inteligência
            </h3>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                <img src="${assets.client1}" alt="Quantum Leap Logo" class="h-8 md:h-10 client-logo" loading="lazy">
                <img src="${assets.client2}" alt="Innovate AI Logo" class="h-8 md:h-10 client-logo" loading="lazy">
                <img src="${assets.client3}" alt="Nexus Corp Logo" class="h-8 md:h-10 client-logo" loading="lazy">
                <img src="${assets.client4}" alt="DataWeave Logo" class="h-8 md:h-10 client-logo" loading="lazy">
            </div>
        </div>
    </section>
`;

const ProblemSolution = () => `
    <section id="problem-solution" class="py-20 md:py-32 bg-brand-dark animated-section">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div class="text-left">
                    <span class="font-body text-brand-blue font-semibold text-sm uppercase">O Desafio</span>
                    <h2 class="font-title text-4xl md:text-5xl font-bold text-brand-white mt-2 mb-4">Processos manuais estão freando seu crescimento?</h2>
                    <p class="font-body text-lg text-brand-gray-light">Empresas perdem incontáveis horas e recursos valiosos em tarefas repetitivas e propensas a erros. Esse gargalo operacional impede a escalabilidade e desvia o foco do que realmente importa: a inovação.</p>
                </div>
                <div class="bg-white/5 p-8 rounded-xl border border-white/10">
                    <span class="font-body text-brand-orange font-semibold text-sm uppercase">A Solução SparkFlux</span>
                    <h3 class="font-title text-3xl font-bold text-brand-white mt-2 mb-4">Fluxos de IA que trabalham por você.</h3>
                    <p class="font-body text-lg text-brand-gray-light">Transformamos seus processos manuais em fluxos de trabalho inteligentes e automatizados. Com SparkFlux, sua equipe foca em estratégia, enquanto a eficiência e a precisão se tornam o novo padrão da sua operação.</p>
                </div>
            </div>
        </div>
    </section>
`;

const Benefits = () => {
    const benefits = [
        { icon: 'zap', title: 'Redução de Custos', description: 'Automatize tarefas e diminua drasticamente os custos operacionais.' },
        { icon: 'scaling', title: 'Escalabilidade Rápida', description: 'Escale suas operações sem aumentar a equipe na mesma proporção.' },
        { icon: 'blend', title: 'Integração de Sistemas', description: 'Conecte todas as suas ferramentas em um ecossistema coeso e inteligente.' },
        { icon: 'lightbulb', title: 'Inovação Acessível', description: 'Implemente IA de ponta com um ROI claro e rápido, sem projetos complexos.' }
    ];

    return `
    <section id="benefits" class="py-20 md:py-32 animated-section">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                 <span class="font-body text-brand-blue font-semibold text-sm uppercase">Vantagens</span>
                 <h3 class="font-title text-4xl md:text-5xl font-bold text-brand-white mt-2">Por que escolher a SparkFlux?</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${benefits.map(benefit => `
                    <div class="bg-white/5 p-8 rounded-xl border border-white/10 text-center transition-all duration-300 hover:border-brand-blue hover:-translate-y-2">
                        <div class="flex justify-center mb-4">
                            <div class="bg-brand-blue/10 p-4 rounded-lg">
                                <i data-lucide="${benefit.icon}" class="w-8 h-8 text-brand-blue"></i>
                            </div>
                        </div>
                        <h4 class="font-title text-xl font-bold text-white mb-2">${benefit.title}</h4>
                        <p class="font-body text-brand-gray-light text-sm leading-relaxed">${benefit.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
};

const HowItWorks = () => {
    const steps = [
        { icon: 'search-check', title: 'Consultoria Gratuita', description: 'Fale com um engenheiro de sistemas real para discutir os requisitos e objetivos do seu projeto. Entenderemos sua visão e o ajudaremos a traçar o melhor caminho a seguir.' },
        { icon: 'cpu', title: 'Definição de Escopo & Proposta', description: 'Com base na nossa consulta, forneceremos um escopo detalhado para o seu projeto. Este documento incluirá as etapas claras, um cronograma realista, o orçamento completo e sugestões de melhorias ou expansões para o seu sistema.' },
        { icon: 'plug-zap', title: 'Início do Projeto (Kick-off)', description: 'Depois da aprovação da proposta, realizaremos nossa reunião de abertura para definir prioridades, alinhar expectativas e dar início ao processo com clareza e segurança.' },
        { icon: 'trending-up', title: 'Resultados & Acompanhamento', description: 'Entregamos os resultados conforme os objetivos definidos, acompanhando indicadores e oferecendo suporte para evolução contínua.' }
    ];

    return `
    <section id="how-it-works" class="py-20 md:py-32 section-glow animated-section">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <span class="font-body text-brand-blue font-semibold text-sm uppercase">Nosso Processo</span>
                <h2 class="font-title text-4xl md:text-5xl font-bold text-brand-white mt-2">Da Ideia à Implementação em 4 Passos</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${steps.map((step, index) => `
                    <div class="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-brand-blue hover:-translate-y-2">
                        <div class="flex items-center mb-4">
                            <div class="bg-brand-blue/10 p-3 rounded-lg mr-4">
                                <i data-lucide="${step.icon}" class="w-6 h-6 text-brand-blue"></i>
                            </div>
                            <span class="font-title text-2xl font-bold text-white">${String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <h3 class="font-title text-xl font-bold text-white mb-2">${step.title}</h3>
                        <p class="font-body text-brand-gray-light text-sm leading-relaxed">${step.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
};

const Cases = () => {
    const cases = [
        { logo: assets.client1, company: 'QuantumLeap Tech', description: 'Automação do processo de onboarding de clientes, reduzindo o tempo de ativação em 75%.' },
        { logo: assets.client3, company: 'Nexus Corp', description: 'Implementação de IA para análise de risco de crédito, aumentando a precisão em 40% e diminuindo perdas.' },
        { logo: assets.client4, company: 'DataWeave', description: 'Criação de um assistente virtual para suporte interno, resolvendo 60% dos chamados sem intervenção humana.' }
    ];

    return `
    <section id="cases" class="py-20 md:py-32 bg-brand-dark animated-section">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <span class="font-body text-brand-blue font-semibold text-sm uppercase">Resultados Reais</span>
                <h2 class="font-title text-4xl md:text-5xl font-bold text-brand-white mt-2">Cases de Sucesso</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${cases.map(c => `
                    <div class="bg-white/5 p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-brand-orange hover:-translate-y-2 flex flex-col items-center text-center">
                        <img src="${c.logo}" alt="${c.company} Logo" class="h-12 mb-6" loading="lazy">
                        <h4 class="font-title text-xl font-bold text-white mb-3">${c.company}</h4>
                        <p class="font-body text-brand-gray-light text-sm leading-relaxed flex-grow">${c.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

const Agendar = () => `
        <section id="contact" class="py-20 md:py-32 bg-brand-black/30 animated-section">
        <div class="container mx-auto px-6 text-center">
        </div>
        </section>

`;

const Cta = () => `
    <section id="contact" class="py-20 md:py-32 bg-brand-black/30 animated-section">
        <div class="container mx-auto px-6 text-center">
            <h2 class="font-title text-4xl md:text-5xl font-bold text-white mb-4">Pronto para transformar seus processos?</h2>
            <p class="font-body text-lg text-brand-gray-light max-w-2xl mx-auto mb-8">Fale com um especialista. Preencha o formulário e nossa equipe entrará em contato em até 24 horas.</p>
            <div class="max-w-2xl mx-auto mt-10 text-left">
                <form id="contato-form" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Nome" name="nome" class="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray focus:ring-2 focus:ring-brand-blue focus:outline-none transition" required>
                        <input type="email" placeholder="Email Corporativo" name="email" class="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray focus:ring-2 focus:ring-brand-blue focus:outline-none transition" required>
                    </div>
                    <input type="text" placeholder="Empresa" name="empresa" class="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray focus:ring-2 focus:ring-brand-blue focus:outline-none transition" required>
                    <textarea placeholder="Mensagem" name="mensagem" rows="4" class="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray focus:ring-2 focus:ring-brand-blue focus:outline-none transition" required></textarea>
                    <div class="text-center">
                        <button type="submit" class="btn-primary font-body font-semibold text-white bg-brand-blue px-10 py-4 rounded-lg text-lg w-full md:w-auto">Enviar Mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
`;


const Faq = () => {
    const faqs = [
        { q: "Preciso entender de tecnologia para usar?", a: "Não. Nossa equipe cuida de toda a complexidade técnica, desde o diagnóstico até a implementação. Focamos em entregar a solução pronta para você usar e colher os resultados." },
        { q: "Funciona para o meu negócio?", a: "Nossas soluções são altamente personalizáveis e se aplicam a diversos setores, de finanças e logística a marketing e RH. Realizamos um diagnóstico inicial para garantir que a automação gerará valor para sua operação específica." },
        { q: "Quais sistemas podem ser integrados?", a: "Podemos integrar com a maioria dos sistemas modernos (CRMs, ERPs, bancos de dados, APIs) e também criar soluções para sistemas legados. Nossa plataforma é flexível e agnóstica a tecnologias." },
        { q: "É caro implementar automação com IA?", a: "O investimento varia conforme a complexidade, mas focamos em projetos com ROI claro e rápido. A automação gera economia de custos e aumento de eficiência que muitas vezes pagam o investimento em poucos meses." },
        { q: "Como acompanho os resultados?", a: "Fornecemos dashboards customizados que permitem acompanhar em tempo real os KPIs mais importantes para o seu negócio, como tempo economizado, redução de erros e aumento de produtividade." }
    ];

    return `
    <section id="faq" class="py-20 md:py-32 animated-section">
        <div class="container mx-auto px-6 max-w-3xl">
            <div class="text-center mb-12">
                <h2 class="font-title text-4xl md:text-5xl font-bold text-white">Ainda tem dúvidas?</h2>
            </div>
            <div id="faq-container" class="space-y-4">
                ${faqs.map((faq, index) => `
                    <div class="faq-item bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                        <button class="faq-question w-full flex justify-between items-center text-left p-6 hover:bg-white/10\">\n                            <span class="font-body font-semibold text-lg text-white">${faq.q}</span>
                            <i data-lucide="chevron-down" class="faq-icon w-6 h-6 text-brand-gray transition-transform"></i>
                        </button>
                        <div class="faq-answer">
                            <p class="font-body text-brand-gray-light p-6 pt-0">${faq.a}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
};


const Footer = () => `
    <footer class="bg-brand-dark py-12">
        <div class="container mx-auto px-6 text-center text-brand-gray">
            <div class="flex justify-center items-center mb-6">
                <img src="${assets.logo}" alt="SparkFlux Logo" class="h-8 w-8 mr-2">
                <span class="font-title text-xl font-bold text-white">SparkFlux</span>
            </div>
            <p class="font-body text-sm mb-6">Fluxos que transformam negócios.</p>
            <div class="flex justify-center space-x-6 mb-6">
                <a href="#" class="hover:text-brand-blue transition"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
                <a href="#" class="hover:text-brand-blue transition"><i data-lucide="twitter" class="w-5 h-5"></i></a>
                <a href="mailto:matheuslima@sparkflux.com.br" class="hover:text-brand-blue transition"><i data-lucide="mail" class="w-5 h-5"></i></a>
            </div>
            <p class="font-body text-sm">&copy; ${new Date().getFullYear()} SparkFlux. Todos os direitos reservados.</p>
        </div>
    </footer>
`;

const App = () => {
    const root = document.getElementById('root');
    root.innerHTML = `
        ${Header()}
        <main>
            ${Hero()}

            ${ProblemSolution()}
            ${Benefits()}
            ${HowItWorks()}
            ${Cases()}
            ${Agendar()}
            ${Cta()}
            ${Faq()}
        </main>
        ${Footer()}
    `;
};

const initAnimations = () => {
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach(section => {
        const elementsToAnimate = section.querySelectorAll('h1, h2, h3, h4, p, a, div.grid > div, form > div, form > input, form > textarea, form > button, #faq-container > div, img.client-logo');

        elementsToAnimate.forEach((el, index) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
        });

        inView(section, () => {
            elementsToAnimate.forEach((el, index) => {
                animate(
                    el,
                    { opacity: 1, y: 0 },
                    { duration: 0.6, delay: index * 0.05, ease: 'easeOut' }
                );
            });
            return (unsubscribe) => { }; // one-shot animation
        }, { amount: 0.2 });
    });
};

const initFaq = () => {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    faqContainer.addEventListener('click', (e) => {
        const questionButton = e.target.closest('.faq-question');
        if (questionButton) {
            const faqItem = questionButton.parentElement;

            const wasActive = faqItem.classList.contains('active');

            faqContainer.querySelectorAll('.faq-item').forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            if (!wasActive) {
                faqItem.classList.add('active');
            }
        }
    });
};


document.addEventListener('DOMContentLoaded', () => {
    App();
    lucide.createIcons();
    initAnimations();
    initFaq();


 // === Formulário AJAX para n8n ===
    const form = document.getElementById('contato-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // previne navegação

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('https://atendimentosparkflow-n8n.ytekld.easypanel.host/webhook/sparkflux-form', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                console.log(result); // {"message":"Workflow was started"}

                // Feedback pro usuário
                // alert("Mensagem enviada com sucesso!");
                form.reset();
            } catch (error) {
                console.error(error);
                alert("Erro ao enviar a mensagem.");
            }
        });
    }
});