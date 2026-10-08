import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleHelp,
  CreditCard,
  Menu,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  X,
} from "lucide-react";
import { catalogCategories, partFamilies, products, type CatalogProduct } from "../data/products";
import { photoCredits, type PhotoCredit } from "../data/photoCredits";
import { buildWhatsAppUrl, type ContactTopic } from "../lib/whatsapp";

function PhotoCreditLine({ credit, className = "" }: { credit: PhotoCredit; className?: string }) {
  return (
    <p className={`photo-credit-line ${className}`}>
      Foto: <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer">{credit.author}</a>
      {" · "}<a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">{credit.licenseLabel}</a>
      {credit.additionalLicenseUrl && credit.additionalLicenseLabel && <>
        {" / "}<a href={credit.additionalLicenseUrl} target="_blank" rel="noopener noreferrer">{credit.additionalLicenseLabel}</a>
      </>}
    </p>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const [notice, setNotice] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("pt-BR");
    return products.filter((product) => {
      const matchesCategory = category === "Todos" || product.category === category;
      const searchable = [
        product.name,
        product.category,
        product.description,
      ]
        .join(" ")
        .toLocaleLowerCase("pt-BR");
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [category, search]);

  function openContact(topic: ContactTopic, product?: CatalogProduct, family?: string) {
    const url = buildWhatsAppUrl(topic, product, family);
    if (!url) {
      setNotice("O número comercial do WhatsApp ainda precisa ser configurado antes de ativar este atendimento.");
      window.setTimeout(() => setNotice(""), 6000);
      return;
    }
    setNotice("");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="store-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <div className="notice-bar">
        <span className="notice-bar-dot" aria-hidden="true" />
        Peças e acessórios para a linha Toyota
        <span className="notice-bar-note">Loja independente</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#topo" aria-label="Rota Peças — início" onClick={closeMobileMenu}>
          <img
            className="brand-mark"
            src="/rotaglyph.svg"
            alt=""
            aria-hidden="true"
            onError={(event) => { if (!event.currentTarget.dataset.fallback) { event.currentTarget.dataset.fallback = "true"; event.currentTarget.src = "/rotaglyph.svg"; } }}
          />
          <span className="brand-copy">
            <strong>ROTA <span>PEÇAS</span></strong>
            <small>LINHA TOYOTA · LOJA INDEPENDENTE</small>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#catalogo" onClick={closeMobileMenu}>Catálogo</a>
          <a href="#consultas" onClick={closeMobileMenu}>Parcelas e quitação</a>
          <a href="#como-funciona" onClick={closeMobileMenu}>Como funciona</a>
          <button className="button button-primary nav-contact" type="button" onClick={() => openContact("atendimento")}>
            <MessageCircle size={17} /> Fale no WhatsApp <ArrowUpRight size={15} />
          </button>
        </nav>
      </header>

      {notice && <div className="site-notice" role="status"><CircleHelp size={17} />{notice}</div>}

      <main id="conteudo">
        <section className="hero-section" id="topo" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> PEÇAS, ACESSÓRIOS E ATENDIMENTO DIRETO</p>
            <h1 id="hero-title">Encontre a peça.<br /><span>Converse com quem resolve.</span></h1>
            <p className="hero-description">
              Uma vitrine prática para procurar peças e acessórios para seu Toyota — e consultar valor, aplicação e condições pelo WhatsApp.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#catalogo">Explorar catálogo <ArrowRight size={17} /></a>
              <button className="button button-outline" type="button" onClick={() => openContact("atendimento")}>
                <MessageCircle size={17} /> Falar com a equipe
              </button>
            </div>
            <div className="hero-assurance">
              <div className="assurance-icon"><BadgeCheck size={18} /></div>
              <span><strong>Aplicação confirmada antes da compra</strong><small>Informe o modelo, ano e versão do veículo.</small></span>
            </div>
            <span className="hero-index">01 <i /> 03</span>
          </div>
          <div className="hero-art" aria-label="Fotografia real de uma Toyota Hilux com tendas no teto">
            <img
              src="/images/toyota-hilux-roof-tents.jpg"
              alt="Toyota Hilux D-4D com tendas instaladas no teto em Hardap, Namíbia, em 2007."
              fetchPriority="high"
            />
            <div className="hero-art-tag"><span>FOTO REAL / HILUX</span><small>ACESSÓRIO NO TETO</small></div>
            <div className="hero-art-stamp"><span>IMAGEM</span><strong>real</strong><span>COM CRÉDITO</span></div>
            <span className="hero-art-index">FOTO DE REFERÊNCIA · HARDAP, NAMÍBIA</span>
            <PhotoCreditLine credit={photoCredits.hero} className="hero-photo-credit" />
          </div>
        </section>

        <section className="benefit-strip" aria-label="Benefícios do atendimento">
          <div className="benefit-item"><Search size={19} /><span>Busca simples<br /><strong>por peça ou modelo</strong></span></div>
          <div className="benefit-item"><ShieldCheck size={19} /><span>Aplicação<br /><strong>confirmada com a equipe</strong></span></div>
          <div className="benefit-item"><CreditCard size={19} /><span>Parcelas e quitação<br /><strong>consultadas no atendimento</strong></span></div>
          <div className="benefit-item"><MessageCircle size={19} /><span>Conversa direta<br /><strong>pelo WhatsApp</strong></span></div>
        </section>

        <section className="catalog-section section-wrap" id="catalogo" aria-labelledby="catalog-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> PEÇAS PARA A SUA PRÓXIMA ROTA</p>
              <h2 id="catalog-title">Encontre o que<br /><span>seu Toyota precisa.</span></h2>
            </div>
            <p className="section-intro">Veja fotos reais de referência de veículos e acessórios Toyota. Para peças sem foto ou sem ficha confirmada, consulte a equipe antes do pedido.</p>
          </div>

          <div className="catalog-toolbar">
            <label className="search-box">
              <Search size={19} aria-hidden="true" />
              <span className="sr-only">Buscar por nome de peça ou categoria</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Busque peça ou categoria..."
              />
              <kbd>⌕</kbd>
            </label>
            <button className="button button-outline catalog-help" type="button" onClick={() => openContact("atendimento")}>
              <MessageCircle size={16} /> Procurar outra peça
            </button>
          </div>

          <div className="category-row" role="group" aria-label="Filtrar por categoria">
            {catalogCategories.map((item) => (
              <button
                className={`category-chip ${category === item ? "is-active" : ""}`}
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item === "Todos" && <SlidersHorizontal size={14} />}
                {item}
              </button>
            ))}
            <span className="result-count">{filteredProducts.length} {filteredProducts.length === 1 ? "item" : "itens"}</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product, index) => (
                <article className={`product-card product-card-${index + 1}`} key={product.id}>
                  <button className="product-image-button" type="button" onClick={() => setSelectedProduct(product)} aria-label={`Ver detalhes de ${product.name}`}>
                  <img src={product.image} alt={product.imageAlt} loading="lazy" />
                    <span className="product-category-label">{product.category}</span>
                    <span className="product-open-icon"><ArrowUpRight size={18} /></span>
                  </button>
                  <div className="product-card-body">
                    <div className="product-meta"><span>FOTO REAL · REFERÊNCIA</span><span className="product-meta-dot" /></div>
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <PhotoCreditLine credit={product.photoCredit} />
                    <div className="product-fit"><Truck size={15} /><span>Estoque e aplicação não confirmados</span></div>
                    <div className="product-card-bottom">
                      <span className="price-label">VALOR</span>
                      <strong>Consulte</strong>
                      <button className="icon-link" type="button" aria-label={`Abrir detalhes de ${product.name}`} onClick={() => setSelectedProduct(product)}><ArrowRight size={18} /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28} />
              <h3>Não encontrou a peça?</h3>
              <p>Consulte a equipe sobre esta família ou informe o nome da peça no atendimento. A aplicação é confirmada antes do pedido.</p>
              <div className="empty-state-actions">
                <button className="button button-primary" type="button" onClick={() => openContact("atendimento", undefined, category === "Todos" ? undefined : category)}>Consultar esta família <ArrowUpRight size={15} /></button>
                <button className="button button-outline" type="button" onClick={() => { setSearch(""); setCategory("Todos"); }}>Limpar filtros</button>
              </div>
            </div>
          )}

          <div className="part-family-panel" aria-labelledby="part-families-title">
            <div className="part-family-heading">
              <p className="eyebrow"><span className="eyebrow-line" /> ALÉM DOS ITENS EM DESTAQUE</p>
              <h3 id="part-families-title">Procura outra peça?</h3>
              <p>Consulte também as principais famílias de peças. Os produtos não exibidos ficam sujeitos a disponibilidade e confirmação da aplicação.</p>
            </div>
            <div className="part-family-grid">
              {partFamilies.map((family, index) => (
                <button
                  className={`part-family-item ${category === family.name ? "is-selected" : ""}`}
                  key={family.name}
                  type="button"
                  aria-pressed={category === family.name}
                  onClick={() => { setCategory(family.name); setSearch(""); document.getElementById("catalog-title")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                >
                  <span className="part-family-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="part-family-copy"><strong>{family.name}</strong><small>{family.detail}</small></span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-footnote"><span className="footnote-mark">i</span><p>As fotografias são reais e licenciadas, mas servem apenas como referência visual: não confirmam estoque, compatibilidade, preço ou origem Toyota das peças. Confirme modelo, ano, versão e código com a equipe.</p></div>
        </section>

        <section className="consult-section" id="consultas" aria-labelledby="consult-title">
          <div className="consult-inner">
            <div className="consult-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> CONDIÇÕES SEM SURPRESA</p>
              <h2 id="consult-title">Precisa consultar<br /><span>parcelas ou quitação?</span></h2>
              <p>Conte à equipe o que você precisa. A gente orienta sobre os próximos passos, valores e condições disponíveis para o seu pedido.</p>
              <div className="consult-security"><ShieldCheck size={19} /><span>Não envie CPF, documentos ou dados de pagamento pela página.</span></div>
            </div>
            <div className="consult-cards">
              <article className="consult-card">
                <div className="consult-card-top"><span className="consult-number">01</span><CreditCard size={21} /></div>
                <h3>Consultar parcelas</h3>
                <p>Converse com a equipe sobre as opções de pagamento disponíveis para sua compra.</p>
                <button className="text-link" type="button" onClick={() => openContact("parcelas")}>
                  Consultar pelo WhatsApp <ArrowUpRight size={16} />
                </button>
              </article>
              <article className="consult-card consult-card-accent">
                <div className="consult-card-top"><span className="consult-number">02</span><PackageCheck size={21} /></div>
                <h3>Consultar quitação</h3>
                <p>Solicite orientação sobre valor e condições de quitação do pedido ou parcelas.</p>
                <button className="text-link" type="button" onClick={() => openContact("quitacao")}>
                  Iniciar consulta <ArrowUpRight size={16} />
                </button>
              </article>
              <span className="consult-decoration" aria-hidden="true">R / 01</span>
            </div>
          </div>
          <div className="consult-bottom"><span>01 — ATENDIMENTO DIRETO</span><span>VALORES E CONDIÇÕES SUJEITOS À CONFIRMAÇÃO</span></div>
        </section>

        <section className="steps-section section-wrap" id="como-funciona" aria-labelledby="steps-title">
          <div className="steps-header">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> DO CATÁLOGO À CONVERSA</p>
              <h2 id="steps-title">Uma escolha melhor<br /><span>começa com informação.</span></h2>
            </div>
            <p className="section-intro">Sem adivinhar aplicação. Sem surpresa no valor. Só um caminho claro para encontrar sua peça.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card"><span className="step-index">01</span><div className="step-icon"><Search size={20} /></div><h3>Encontre</h3><p>Busque pelo nome ou família da peça.</p><ArrowDownRight className="step-arrow" size={19} /></article>
            <article className="step-card"><span className="step-index">02</span><div className="step-icon"><BadgeCheck size={20} /></div><h3>Confirme</h3><p>Converse com a equipe para confirmar aplicação, valor e disponibilidade.</p><ArrowDownRight className="step-arrow" size={19} /></article>
            <article className="step-card"><span className="step-index">03</span><div className="step-icon"><MessageCircle size={20} /></div><h3>Consulte</h3><p>Se precisar, consulte parcelas ou quitação pelo atendimento.</p><Check className="step-arrow step-check" size={19} /></article>
          </div>
        </section>

        <section className="independent-note section-wrap" aria-label="Informação sobre a loja">
          <div className="independent-note-icon"><CircleHelp size={21} /></div>
          <div><strong>Atendimento independente, com aplicação verificada.</strong><p>Rota Peças é uma loja independente de peças e acessórios. Não somos o site oficial nem representantes oficiais da Toyota. A marca e os nomes dos modelos são citados apenas para indicar aplicação pretendida.</p></div>
          <ChevronRight className="independent-note-arrow" size={20} />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand brand-footer" href="#topo" aria-label="Rota Peças — voltar ao início">
            <img className="brand-mark" src="/rotaglyph.svg" alt="" aria-hidden="true" onError={(event) => { if (!event.currentTarget.dataset.fallback) { event.currentTarget.dataset.fallback = "true"; event.currentTarget.src = "/rotaglyph.svg"; } }} />
            <span className="brand-copy"><strong>ROTA <span>PEÇAS</span></strong><small>LINHA TOYOTA · LOJA INDEPENDENTE</small></span>
          </a>
          <p>Peças e acessórios para sua próxima rota. Atendimento direto para confirmar aplicação, valores e condições.</p>
          <button className="button button-light" type="button" onClick={() => openContact("atendimento")}><MessageCircle size={17} /> Falar no WhatsApp <ArrowUpRight size={15} /></button>
        </div>
        <section className="photo-attributions" aria-labelledby="photo-attributions-title">
          <h2 id="photo-attributions-title">Créditos das fotografias</h2>
          {Object.values(photoCredits).map((credit) => (
            <p key={credit.title}>
              {credit.title} — © <a href={credit.authorUrl} target="_blank" rel="noopener noreferrer">{credit.author}</a>; <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer">fonte original</a>; <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">{credit.licenseLabel}</a>
              {credit.additionalLicenseUrl && credit.additionalLicenseLabel && <>; <a href={credit.additionalLicenseUrl} target="_blank" rel="noopener noreferrer">{credit.additionalLicenseLabel}</a></>}.
            </p>
          ))}
          <p>Os arquivos estão sem alteração; a página apenas os redimensiona para exibição. As imagens não implicam endosso nem confirmam estoque, aplicação ou venda do item fotografado.</p>
        </section>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Rota Peças · Vitrine independente</span><span>Valores, disponibilidade e aplicação sujeitos à confirmação.</span><a href="#topo">Voltar ao topo ↑</a></div>
      </footer>

      <button className="floating-contact" type="button" onClick={() => openContact("atendimento")} aria-label="Falar com a equipe pelo WhatsApp">
        <MessageCircle size={21} /><span>Fale com a equipe</span><ArrowUpRight size={15} />
      </button>

      {selectedProduct && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProduct(null); }}>
          <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
            <button className="modal-close" type="button" onClick={() => setSelectedProduct(null)} aria-label="Fechar detalhes"><X size={20} /></button>
            <div className="modal-image"><img src={selectedProduct.image} alt={selectedProduct.imageAlt} /></div>
            <div className="modal-content">
              <p className="eyebrow"><span className="eyebrow-line" /> {selectedProduct.category.toUpperCase()} · FOTO REAL</p>
              <h2 id="product-modal-title">{selectedProduct.name}</h2>
              <p className="modal-description">{selectedProduct.description}</p>
              <PhotoCreditLine credit={selectedProduct.photoCredit} className="modal-photo-credit" />
              <dl className="product-specs">
                <div><dt>Aplicação</dt><dd>Confirme o modelo, ano, versão e código com a equipe.</dd></div>
                <div><dt>Valor</dt><dd>Consultar</dd></div>
                <div><dt>Disponibilidade</dt><dd>Confirme antes do pedido</dd></div>
              </dl>
              <button className="button button-primary modal-contact" type="button" onClick={() => openContact("produto", selectedProduct)}><MessageCircle size={17} /> Consultar este produto <ArrowUpRight size={15} /></button>
              <small className="modal-safety">Não informe dados de pagamento ou documentos nesta página.</small>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
