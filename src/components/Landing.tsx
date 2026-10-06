"use client";

import { useEffect } from "react";
import { checkoutUrl, money, offer } from "@/config/offer";

const gallery = [
  { src: "/images/galeria/foto-01.png", alt: "Chaveiros de raposas em crochê" },
  { src: "/images/galeria/foto-02.png", alt: "Coleção de amigurumis coloridos" },
  { src: "/images/galeria/foto-03.png", alt: "Chaveiros de animais em formato quadrado" },
  { src: "/images/galeria/foto-04.png", alt: "Três bonequinhas de crochê" },
  { src: "/images/galeria/foto-05.png", alt: "Chaveiro de coelhinha com laço rosa" },
  { src: "/images/galeria/foto-06.png", alt: "Personagens em miniaturas de crochê" },
  { src: "/images/galeria/foto-07.png", alt: "Chaveiro de personagem azul em crochê" },
  { src: "/images/galeria/foto-08.png", alt: "Casal de ursinhos de crochê" },
];

const galleryRows = [gallery, [...gallery.slice(4), ...gallery.slice(0, 4)]];

const localAssets = {
  app: "/images/local/library-app.webp",
  course: "/images/local/course-card.webp",
  pricing: "/images/local/pricing-card.webp",
  sales: "/images/local/sales-card.webp",
  palette: "/images/local/palette-card.webp",
  antiOpen: "/images/local/antiopen-card.webp",
};

const reviews = [
  { src: "/images/depoimentos/avaliacao-01.webp", alt: "Conversa com foto de um hipopótamo de crochê e comentários sobre a peça" },
  { src: "/images/depoimentos/avaliacao-02.webp", alt: "Conversa sobre o segundo amigurumi e satisfação com o resultado" },
  { src: "/images/depoimentos/avaliacao-03.webp", alt: "Foto de um ursinho de crochê com elogios no grupo" },
  { src: "/images/depoimentos/avaliacao-04.webp", alt: "Foto de uma boneca de crochê recém-finalizada e comentários no grupo" },
  { src: "/images/depoimentos/avaliacao-05.png", alt: "Mensagem de agradecimento pelo passo a passo e relato da primeira venda" },
  { src: "/images/depoimentos/avaliacao-06.png", alt: "Mensagem de satisfação com as peças feitas para decorar a casa" },
];

const reviewRows = [reviews, [...reviews.slice(3), ...reviews.slice(0, 3)]];

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function Check() {
  return <span className="check">✓</span>;
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="section-heading" data-reveal>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{children}</h2>
    </div>
  );
}

export default function Landing() {
  useReveal();
  return (
    <main>
      <div className="topbar">ACESSO VITALÍCIO • PAGAMENTO ÚNICO • 7 DIAS DE GARANTIA</div>

      <section className="hero section-pad">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="wrap hero-grid">
          <div className="hero-copy hero-intro" data-reveal>
            <div className="eyebrow">+160 RECEITAS + CURSO + FERRAMENTAS</div>
            <h1>
              DO NOVELO AO <span>CHAVEIRO PRONTO:</span> TENHA AS RECEITAS E O CAMINHO PARA CRIAR, PRECIFICAR E VENDER.
            </h1>
            <p>
              Em vez de ficar procurando receita solta e travar no começo, você escolhe o modelo, segue o passo a passo e avança até a peça pronta — mesmo se ainda estiver aprendendo.
            </p>
          </div>

          <div className="hero-media" data-reveal>
            <img src="/images/mockup-chaveiros.png" width={612} height={408} alt="Coleção com mais de 160 receitas de chaveiros amigurumi e cinco bônus" fetchPriority="high" />
          </div>

          <div className="hero-actions" data-reveal>
            <div className="hero-chips">
              <span>✓ +160 receitas</span>
              <span>✓ 21 aulas</span>
              <span>✓ Biblioteca organizada</span>
            </div>
            <a href="#planos" className="cta primary">QUERO VER OS PLANOS <Arrow /></a>
            <div className="microcopy">Planos a partir de <strong>{money(offer.starter.price)}</strong> • sem mensalidade</div>
          </div>

        </div>
      </section>

      <section className="proof-strip">
        <div className="wrap proof-grid">
          <div><strong>🧶 Receitas organizadas</strong><span>Escolha o modelo sem garimpar arquivos</span></div>
          <div><strong>🎓 Curso para iniciantes</strong><span>Aprenda os pontos e avance no seu ritmo</span></div>
          <div><strong>💰 Ferramentas de venda</strong><span>Precifique e divulgue com mais clareza</span></div>
          <div><strong>♾️ Acesso vitalício</strong><span>Volte ao material sempre que quiser</span></div>
        </div>
      </section>

      <section className="section-pad muted-section">
        <div className="wrap">
          <SectionTitle eyebrow="O PROBLEMA NÃO É FALTA DE VONTADE">
            O que atrasa muita gente é <span className="pink">não saber qual peça fazer nem por onde começar.</span>
          </SectionTitle>
          <div className="pain-grid">
            {[
              ["01", "Receitas espalhadas", "Você salva ideias, mas quando vai fazer a peça não encontra um passo a passo claro."],
              ["02", "Trava nos pontos básicos", "Sem uma base, qualquer abreviação da receita parece mais difícil do que realmente é."],
              ["03", "Não sabe quanto cobrar", "Fazer a peça é uma coisa. Entender custo, tempo e margem é outra."],
            ].map(([n, t, d]) => (
              <article className="dark-card" data-reveal key={n}>
                <div className="number">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <SectionTitle eyebrow="VEJA O QUE VOCÊ PODE CRIAR">
            Chaveirinhos que <span className="pink">encantam, presenteiam e podem virar produto.</span>
          </SectionTitle>
          <div className="marquee-gallery" data-reveal>
            {galleryRows.map((row, rowIndex) => (
              <div className="marquee-shell" key={rowIndex}>
                <div className={`marquee-track${rowIndex === 1 ? " marquee-track-reverse" : ""}`}>
                  {[0, 1].map((copy) => (
                    <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                      {row.map((item) => (
                        <div className="gallery-card" key={item.src}>
                          <img src={item.src} alt={copy === 0 ? item.alt : ""} loading="lazy" width={230} height={230} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad muted-section">
        <div className="wrap mechanism-grid">
          <div data-reveal>
            <div className="eyebrow">NOSSO MECANISMO</div>
            <h2 className="left-title">ESCOLHA → APRENDA → FAÇA → PRECIFIQUE → VENDA</h2>
            <p className="section-copy">
              A oferta deixa de ser apenas um monte de receitas. Ela vira um caminho completo para sair da ideia e chegar a uma peça pronta, com apoio para quem também quer vender.
            </p>
            <a href="#planos" className="cta primary small">QUERO O CAMINHO COMPLETO <Arrow /></a>
          </div>
          <div className="steps">
            {[
              ["ESCOLHA", "Abra a biblioteca e escolha o chaveirinho que quer fazer."],
              ["APRENDA", "Use as 21 aulas para dominar os pontos e a leitura das receitas."],
              ["FAÇA", "Siga o passo a passo e avance até a peça finalizada."],
              ["PRECIFIQUE", "Use a planilha para organizar custo e preço de venda."],
              ["VENDA", "Aplique o guia de divulgação para apresentar suas peças nas redes."],
            ].map(([title, text], i) => (
              <div className="step" data-reveal key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad library-section">
        <div className="wrap library-grid">
          <div data-reveal>
            <div className="eyebrow">NÃO É UM DRIVE BAGUNÇADO</div>
            <h2 className="left-title">UMA BIBLIOTECA DE CHAVEIRINHOS NA PALMA DA MÃO.</h2>
            <p className="section-copy">
              Receitas separadas por categoria, visual leve e acesso pelo celular, tablet ou computador. A ideia é abrir, escolher e começar.
            </p>
            <ul className="feature-list">
              <li><Check /> Receitas separadas por categoria</li>
              <li><Check /> Acesso pelo celular, tablet e computador</li>
              <li><Check /> Atualizações futuras no Premium</li>
              <li><Check /> Acesso vitalício</li>
            </ul>
          </div>
          <div className="library-visual" data-reveal>
            <img src={localAssets.app} alt="Aplicativo com biblioteca de chaveiros amigurumi" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-pad tools-section">
        <div className="wrap">
          <SectionTitle eyebrow="CURSO + FERRAMENTAS">
            Além das receitas, você recebe <span className="pink">o caminho para começar e vender melhor.</span>
          </SectionTitle>
          <div className="tools-grid">
            {[
              {
                image: localAssets.course,
                tag: "21 AULAS",
                title: "Curso Amigurumi do Zero",
                text: "Pontos básicos, leitura de receitas e fundamentos para quem nunca pegou numa agulha.",
              },
              {
                image: localAssets.pricing,
                tag: "FERRAMENTA",
                title: "Planilha de Precificação",
                text: "Organize custo, tempo e margem para ter uma base melhor na hora de cobrar por cada peça.",
              },
              {
                image: localAssets.sales,
                tag: "GUIA PRÁTICO",
                title: "Como Divulgar e Vender",
                text: "Um caminho simples para mostrar suas peças e começar a buscar clientes nas redes sociais.",
              },
            ].map((item) => (
              <article className="tool-card" data-reveal key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="tool-body">
                  <div className="tool-tag">{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad muted-section">
        <div className="wrap">
          <SectionTitle eyebrow="BÔNUS DO PREMIUM">
            Mais dois materiais para <span className="pink">deixar suas peças mais bonitas e bem finalizadas.</span>
          </SectionTitle>
          <div className="bonus-grid">
            <article className="bonus-card" data-reveal>
              <img src={localAssets.palette} alt="Paleta de cores profissional" loading="lazy" />
              <div><div className="tool-tag">BÔNUS EXTRA</div><h3>Paleta de Cores Profissional</h3><p>Combinações harmoniosas para ajudar suas peças a ficarem mais consistentes visualmente.</p></div>
            </article>
            <article className="bonus-card" data-reveal>
              <img src={localAssets.antiOpen} alt="Técnica anti-abertura" loading="lazy" />
              <div><div className="tool-tag">BÔNUS EXTRA</div><h3>Técnica Anti-Abertura</h3><p>Um conteúdo focado em acabamento para reduzir o risco de a peça se desfazer com o uso.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad testimonials-section">
        <div className="wrap">
          <SectionTitle eyebrow="PROVA SOCIAL">
            Quem já começou está <span className="pink">apaixonada.</span>
          </SectionTitle>
          <div className="marquee-gallery reviews-gallery" data-reveal>
            {reviewRows.map((row, rowIndex) => (
              <div className="marquee-shell" key={rowIndex}>
                <div className={`marquee-track${rowIndex === 1 ? " marquee-track-reverse" : ""}`}>
                  {[0, 1].map((copy) => (
                    <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                      {row.map((item) => (
                        <article className="review-card" key={item.src}>
                          <h3>VEJA OS <span>DEPOIMENTOS</span><br />DOS NOSSOS CLIENTES</h3>
                          <div className="review-screenshot">
                            <img src={item.src} alt={copy === 0 ? item.alt : ""} />
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="section-pad plans-section">
        <div className="wrap">
          <SectionTitle eyebrow="ESCOLHA SEU PLANO">
            Comece com o reduzido ou leve <span className="pink">a experiência completa.</span>
          </SectionTitle>

          <div className="plans-grid">
            <article className="plan-card starter" data-reveal>
              <div className="plan-kicker">STARTER</div>
              <h3>Pack Reduzido</h3>
              <div className="price">{money(offer.starter.price)}</div>
              <div className="price-note">pagamento único</div>
              <ul>
                <li><Check /> {offer.starter.recipes} receitas selecionadas</li>
                <li><span className="x">×</span> Sem curso de 21 aulas</li>
                <li><span className="x">×</span> Sem planilha de precificação</li>
                <li><span className="x">×</span> Sem guia de divulgação</li>
                <li><span className="x">×</span> Sem paleta profissional</li>
                <li><span className="x">×</span> Sem técnica anti-abertura</li>
                <li><span className="x">×</span> Sem atualizações futuras</li>
              </ul>
              <a className="cta secondary" href={checkoutUrl(offer.starter.checkout)}>COMEÇAR PELO STARTER</a>
              {!offer.starter.checkout && <div className="checkout-note">Adicione o checkout Starter em src/config/offer.ts</div>}
            </article>

            <article className="plan-card premium" data-reveal>
              <div className="best-badge">MAIS COMPLETO</div>
              <div className="plan-kicker">PREMIUM</div>
              <h3>Receitas + Curso + Ferramentas</h3>
              <div className="price">{money(offer.premium.price)}</div>
              <div className="price-note">pagamento único • acesso vitalício</div>
              <ul>
                <li><Check /> +{offer.premium.recipes} receitas de chaveiros amigurumi</li>
                <li><Check /> Biblioteca organizada</li>
                <li><Check /> 21 aulas para iniciantes</li>
                <li><Check /> Planilha de precificação</li>
                <li><Check /> Guia para divulgar e vender</li>
                <li><Check /> Paleta de cores profissional</li>
                <li><Check /> Técnica anti-abertura</li>
                <li><Check /> Atualizações futuras</li>
              </ul>
              <a className="cta primary" href={checkoutUrl(offer.premium.checkout)} target="_blank" rel="noreferrer">QUERO O PREMIUM COMPLETO <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad guarantee-section">
        <div className="wrap guarantee-card" data-reveal>
          <div className="seal">7<span>DIAS</span></div>
          <div>
            <div className="eyebrow">RISCO ZERO</div>
            <h2>GARANTIA INCONDICIONAL DE 7 DIAS</h2>
            <p>Você pode acessar o material e conhecer a experiência. Se dentro do prazo de garantia decidir que não é para você, pode solicitar o reembolso conforme as condições da oferta.</p>
          </div>
        </div>
      </section>

      <section className="section-pad faq-section">
        <div className="wrap faq-wrap">
          <SectionTitle eyebrow="DÚVIDAS FREQUENTES">Perguntas & Respostas</SectionTitle>
          {[ 
            ["Preciso ter experiência com crochê?", "Não. O Premium inclui 21 aulas básicas para quem está começando do zero."],
            ["As receitas são em PDF?", "Sim. A oferta inclui receitas digitais organizadas para você consultar e seguir o passo a passo."],
            ["Funciona no celular?", "Sim. A biblioteca pode ser acessada pelo celular, tablet e computador."],
            ["Posso vender as peças que eu fizer?", "A proposta inclui ferramentas de precificação e divulgação para quem quer transformar as peças em uma fonte de renda."],
            ["Por quanto tempo tenho acesso?", "O plano Premium foi estruturado com acesso vitalício e atualizações futuras."],
          ].map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="wrap final-box" data-reveal>
          <div className="eyebrow">COMECE PELO PRÓXIMO CHAVEIRINHO</div>
          <h2>ESCOLHA A RECEITA. SIGA O PASSO A PASSO. TERMINE UMA PEÇA QUE VOCÊ TENHA ORGULHO DE MOSTRAR.</h2>
          <a href="#planos" className="cta primary">VER PLANOS <Arrow /></a>
        </div>
      </section>

      <footer>
        <div className="wrap">© 2026 Chaveiros Amigurumi Pro • Produto digital • Sem mensalidade</div>
      </footer>
    </main>
  );
}
