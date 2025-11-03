import illustrationMain from '../../../assets/images/40MpIkbEsTezy_preview_rev_1 1.svg'
import './style.css'
export const Main = () => {
    return(
       <main>

            <div className="content-main">

                <h1>A <span className="highlighted-word">melhor experiência </span>gastronômica da cidade</h1>

                <p>Pratos frescos, preparados com ingredientes selecionados e finalizados com o toque especial do nosso chef, garantindo sabor e qualidade em cada mordida.</p>

                <div className="container-btn-main">
                    <a href="" className="btn-secondary">Peça agora</a>
                    <a href="" className="btn-primary">Saiba mais</a>

                </div>

            </div>

            <img src={ illustrationMain } alt="Ilustração Salmão grelhado com legumes ao vapor" />

       </main>
    )
}

