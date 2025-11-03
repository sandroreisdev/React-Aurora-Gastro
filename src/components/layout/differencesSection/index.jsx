import { DifferencesCard } from "../../cards/differencesCards"
import iconTomato from '../../../assets/images/tomato.svg'
import iconChef from '../../../assets/images/chef.svg'
import iconChair from '../../../assets/images/chair.svg'
import iconCalendar from '../../../assets/images/calendar.svg'

import './style.css'

export const DifferencesSection = () => {
    return(
        <section className="differences-section">

            <h2>Nossos <span className="highlight-word">Diferenciais</span></h2>

            <div className="container-cards-differences">
               <DifferencesCard 
                    linkImg={iconTomato} 
                    altImg="Ilustração do Tomate" 
                    titulo="Ingredientes Frescos" 
                    descricao="Selecionados diariamente para garantir o melhor sabor."/>

                 <DifferencesCard 
                    linkImg={iconChef} 
                    altImg="Ilustração do Chef" 
                    titulo="Chef Especializado" 
                    descricao="Receitas únicas criadas por nosso chef premiado."/>

                 <DifferencesCard 
                    linkImg={iconChair} 
                    altImg="Ilustração da Cadeira" 
                    titulo="Ambiente Aconchegante" 
                    descricao="Espaço perfeito para momentos especiais."/>

                 <DifferencesCard 
                    linkImg={iconCalendar} 
                    altImg="Ilustração do Calendário" 
                    titulo="Reserva Simples" 
                    descricao="Garanta sua mesa com apenas alguns cliques."/>
            </div>

        </section>
    )
}