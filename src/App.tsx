const SIGN_UP_URL = 'https://app.mycofre.com/cadastro'

const features = [
  {
    title: 'Tudo em um lugar',
    description:
      'Contas, cartões, metas e investimentos reunidos em uma visão clara para decidir melhor.',
  },
  {
    title: 'Patrimônio líquido real',
    description:
      'Acompanhe seu patrimônio com cálculo consistente: saldo em contas + investimentos - faturas em aberto.',
  },
  {
    title: 'Planejamento com metas',
    description:
      'Defina objetivos e acompanhe progresso com foco no que realmente importa para você.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-badge">MYCOFRE</div>
        <h1>Controle financeiro simples para quem quer evoluir de verdade.</h1>
        <p className="hero-copy">
          Organize sua vida financeira, acompanhe seu patrimonio liquido e tome
          decisoes melhores com menos planilhas e mais clareza.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SIGN_UP_URL}>
            Criar conta gratis
          </a>
          <a className="btn btn-ghost" href="#como-funciona">
            Ver como funciona
          </a>
        </div>
      </header>

      <main>
        <section id="como-funciona" className="section">
          <h2>Feito para conversao em resultado</h2>
          <p className="section-lead">
            Menos friccao no dia a dia e mais consistencia para construir seu
            patrimonio.
          </p>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-contrast">
          <h2>Comece em menos de 2 minutos</h2>
          <ol className="steps">
            <li>Crie sua conta</li>
            <li>Cadastre contas e categorias</li>
            <li>Acompanhe sua evolucao financeira diariamente</li>
          </ol>
          <a className="btn btn-primary btn-wide" href={SIGN_UP_URL}>
            Quero comecar agora
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MyCofre</p>
      </footer>
    </div>
  )
}

export default App
