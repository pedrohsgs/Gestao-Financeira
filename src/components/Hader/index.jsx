import './index.css'

export function Header() {

    return (
        <header id="header">

            <section className="header">

                <div className="logo">

                    <h1>
                        Millionaire <br />Minds
                    </h1>

                </div>

                <div>
                <ul className="menu1">
                        <li><a href="./pages/gerenciamento"> Login </a></li>
                    </ul>
                </div>

            </section>
        </header>
    )
}