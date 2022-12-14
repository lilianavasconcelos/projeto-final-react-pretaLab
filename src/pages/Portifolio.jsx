import { Header } from '../components/Header'
import style from '../styles/pages/portifolio.module.css'

import portifolioImg from '../assets/portifolioImg.svg'
import todoList from '../assets/todoList.gif'
import videoProjetoContadorPalpiteiro from '../assets/videoProjetoContadorPalpiteiro.gif'
import barbeariaAlura from '../assets/barbeariaAlura.gif'
import carrinhoDeCompras from '../assets/carrinhoDeCompras.gif'



export function Portifolio(){
    return(
        <>
        <Header text='Meus projetinhos' image={portifolioImg}/>
        <div className={style.projectsContainer}>
            <h2 className={style.projectsTitle}>Favoritos</h2>
            <div className={style.cardsContainer} >
                <div className={style.cardProjeto}>
                <h1>To Do List</h1>
                <img src={todoList} />
                <p>Uma aplicação em JavaScript para fazer um To Do List</p>
                <button className={style.cardLink} type='button'><a className={style.cardLink} href='https://todolistliliana.netlify.app/' target='_blank'>Ver projeto</a></button>            
                </div>

                <div className={style.cardProjeto}>
                <h1>Barbearia</h1>
                <img src={barbeariaAlura} />
                <p>Uma aplicação em HTML/CSS para fazer um site</p>
                <button className={style.cardLink} type='button'><a className={style.cardLink} href='https://github.com/lilianavasconcelos/cria-o-site-barbearia' target='_blank'>Ver projeto</a></button>
                </div>

                <div className={style.cardProjeto}>
                <h1>Carrinho</h1>
                <img src={carrinhoDeCompras} />
                <p>Uma aplicação em JavaScript para fazer um carrinho de compras</p>
                <button className={style.cardLink} type='button'><a className={style.cardLink} href='https://github.com/lilianavasconcelos/projeto-carrinho-de-compras' target='_blank'>Ver projeto</a></button>
                
                </div>
            </div>

        
        </div>
        </>


    )
}


