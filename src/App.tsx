import React from 'react';
import GlobalStyle from './styles/global';

import { Container, Content, Photo, Main, Botao } from './styles';

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
            <h1 className="day">HOJE!</h1>
            <h3 className="entrega">Delivery ou Retirada no Balcão</h3>
            <h3 className="garanta">GARANTA JÁ O SEU!</h3>
            <h1 className="especial">ESPECIAL BURGUER BACON CHEDDAR</h1>
         </div>
         <div className="blocos">
           <div className="ingredientes">
             <h1>INGREDIENTES</h1>
             <p>Pão Brioche Amanteigado</p>
             <p>Hambúrguer artesanal 200g</p>
             <p>Farofa de Bacon e tiras crocantes</p>
             <p>Molho Barbecue</p>
             <p>Batata Frita 180g</p>
             <div className="preco">
                <h1>R$ 28,00</h1>
             </div>
           </div>
           <div className="entrega">
             <h1>ENTREGA</h1>
             <h3>Válido para o perímetro urbano de Taió</h3>
             <h2>ADICIONAL</h2>
             <div className="preco">
                <h1>R$ 5,00</h1>
             </div>
           </div>
         </div>
       </Main>
       <Botao>
         <div>
           <a href="https://api.whatsapp.com/send?phone=5547999470695&text= Olá, gostaria de reservar um ESPECIAL BURGUER BACON CHEDDAR!" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
           > RESERVAR </a>
         </div>
       </Botao>
     </Container>
     </>
  )
}

export default App;
