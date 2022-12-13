import { Header } from '../components/Header'
import style from '../styles/pages/portifolio.module.css'

import portifolioImg from '../assets/portifolioImg.svg'
import todoList from '../assets/todoList.gif'
import videoProjetoContadorPalpiteiro from '../assets/videoProjetoContadorPalpiteiro.gif'
import gitLogo from '../assets/gitLogo.svg'



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
                </div>

                <div className={style.cardProjeto}>
                <h1>Barbearia</h1>
                <img src={todoList} />
                <p>Uma aplicação em HTML/CSS para fazer um site</p>
                </div>

                <div className={style.cardProjeto}>
                <h1>Contador</h1>
                <img src={videoProjetoContadorPalpiteiro} />
                <p>Uma aplicação em React para fazer um contador</p>
                </div>
            </div>

        
        </div>
        </>


    )
}


