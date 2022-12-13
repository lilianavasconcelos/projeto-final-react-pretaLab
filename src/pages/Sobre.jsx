import { Header } from "../components/Header"

import style from '../styles/pages/sobre.module.css'

import aboutMe from '../assets/aboutMe.svg'
import sobreImg from '../assets/sobreImg.png'


export function Sobre(){
    return(
        <>

        <Header text ='Um pouco sobre mim' image={aboutMe} />
        
        <div className={style.sobreContainer}>
          <img className={style.bioImage} src={sobreImg} alt='imagem circular em tons roxos com foto central da desenvolvedora'/>
               
        <div className={style.bioContainer}>
            <h2 className={style.bioTitle}>Lila Vasconcelos, prazer!</h2>
            <p className={style.bioText}> Sou mineira, de Belo Horizonte, criada na região periférica da cidade 
            e o estudo sempre esteve presente na minha família como potencia para transformação da nossa 
            realidade social. Me graduei em Antropologia, pela Universidade Federal de Minas Gerais e, foi 
            justamente percorrendo aldeias indígenas que eu tenho um encontro profissional com o universo 
            da tecnologia. Num primeiro momento, fazendo a parte gráfica de livros de autores indígenas, 
            tratando fotos e criando sites no wordpress. Quando eu encontrei a comunidade PretaLab era o 
            momento certo de transformação para desenvolver as habilidades técnicas no universo do 
            desenvolvimento. E eis me aqui na roda da vida, potencializada pelo conhecimento, me transformando 
            e aprendendo para compartilhar com o mundo!
            </p>
        </div>
        </div>
        
        </>

    )
}