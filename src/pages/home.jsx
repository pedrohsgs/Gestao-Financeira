import '../components/Home/index.css'

export function Home() {

    return (
        <main className='home'>

            <section className='container'>

                <div className='info1'>
                    <h1>Sistema de controle financeiro para empresas</h1>
                    <p>Bem-vindo ao nosso portal de gestão financeira, simplificando suas operações financeiras para alcançar estabilidade e prosperidade.</p>

                </div>

            </section>

            <section className="container">

                <div className='info2'>
                    <h1>Nós Oferecemos ferramentas diversificadads para acompanhar despesas, planejar investimentos e atingir objetivos financeiros.</h1>
                </div>
            </section>

            <section className="planos">

                <h1 className='titulo'>Conheça nossos planos</h1>

                <div className='planosE'>

                    <div className="gratuito">
                        <h1>Gratuito</h1>
                        <p>"Comece a controlar suas finanças com nossas ferramentas simples de acompanhamento de despesas e orçamentação, além de suporte básico ao cliente."</p>
                        <button>Experimente Gratis</button>
                    </div>

                    <div className="basico">
                        <h1>R$9,90/mês</h1>
                        <h2>Plano Basico</h2>
                        <p>"Ideal para iniciantes, oferece recursos essenciais de gestão financeira, suporte básico ao cliente e acesso a recursos educacionais.”</p>
                        <button>Assinar Agora</button>
                    </div>

                </div>

                <div className='planosD'>

                    <div className="premium">
                        <h1>R$16,90/mês</h1>
                        <h2>Plano Premium</h2>
                        <p>"Para usuários avançados, inclui análises detalhadas de investimentos, suporte prioritário ao cliente e conteúdo exclusivo para educação financeira."</p>
                        <button>Assinar Agora</button>
                    </div>

                    <div className="empresarial">
                        <h1>R$24,90/mês</h1>
                        <h2>Plano Empresarial</h2>
                        <p>"Projetado para empresas, oferece recursos avançados como relatórios personalizados, integrações empresariais e suporte dedicado para equipes."</p>
                        <button>Assinar Agora</button>
                    </div>

                </div>
            </section>

            
        </main>

    )

}