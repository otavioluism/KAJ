import React from 'react';
import GlobalStyle from './styles/global';

import { Container, Content, Photo, Main, Botao, Restricao } from './styles';

import imgKaj from './assets/kaj.svg'
import imgHam from './assets/photo.jpeg'

const App: React.FC = () => { 
  return (
    <>
    <GlobalStyle />
     <Container>
       <Content>
          <img src={imgKaj} alt="LogoKaj"/>
       </Content>
       <Photo>
        <img src={imgHam} alt="Hambúrguer"/>
       </Photo>
       <Main>
         <div className="texto">
            <h1 className="day">DOMINGO!</h1>
            <h3 className="entrega">Almoço do KAJ</h3>
            <h5 className="especial">(11h30min até as 14 h)</h5>
            <h3 className="garanta">GARANTA JÁ O SEU LUGAR!</h3>          
         </div>
         <div className="blocos">
           <div className="ingredientes">
             <div className="preco">
                <h1>R$ 20,00</h1>
             </div>
             <h2>LIVRE</h2>
           </div>
         </div>
       </Main>
       <Restricao>
          <h4>Restrições</h4>
          <p> - Acesso limitado, somente com reserva</p>
          <p> - Espaço limitado seguindo o distanciamento permitido</p>
          <p> - Entrada OBRIGATÓRIA com o uso de máscara</p>
       </Restricao>
       <Botao>
         <div>
           <a href="https://api.whatsapp.com/send?phone=5547999470695&text= Olá, gostaria de reservar um lugar para o almoço de Domingo!" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
           > RESERVAR </a>
           
         </div>
         <div>
           <a href="https://www.instagram.com/p/CC6VrLHpnr6/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sorteio"
           > SORTEIO </a>
         </div>
       </Botao>
     </Container>
     </>
  )
}

export default App;
