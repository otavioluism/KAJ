import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: auto;
`;

const appearFromLeft = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const Content = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 5s;

  img{ 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
  }

`;

export const Photo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 5s;
  
  img{ 
    width: 100%;
  }
  
`;

export const Main = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FF9000;
  opacity: 90%;

  animation: ${appearFromLeft} 5s;

  div.texto{ 
    margin: 10px 5px 5px;
    text-align: center;
    h1.day{ 
      font-size: 45px;
      color: #FD0E0E;
      margin-bottom: 10px;
    }
    h3.entrega{ 
      color: #000000;
      font-size: 30px;
    }
    h3.garanta{ 
      color: #7B3737;
      font-size: 25px;
      font-weight: bold;
    }
    h5.especial{ 
      font-family: 'Roboto';
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  div.blocos{ 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80%, 100%));
   justify-content: center;
    gap: 15px;
    text-align: center;

    animation: ${appearFromLeft} 5s;
    
      div.ingredientes{ 
        background: #964B00;
        padding: 10px;
        border-radius: 40px 0px 40px 0px;
        margin-bottom: 10px;

        div.preco{ 
          margin-top: 30px;
          border: solid 2px;
          border-radius: 10px;
          padding: 10px;
          h1{ 
            font-size: 50px;
            color: #FFF;
            line-height: 54px
          }
        }
        h2{ 
            font-size: 23px;
            color: #FF691E;
            opacity: 70%;
          }
      }

    }
`;

export const Botao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 30px;

  animation: ${appearFromLeft} 5s;

  div{ 
    background: #FF691E;

    &:hover{ 
      border: solid 2px;
    }

    a { 
      padding: 20px;
      text-decoration: none;
      color: #FFF;
      font-size: 25px;
      font-weight: bold;
      transition: opacity 0.3s;

      &:hover{ 
        opacity: 40%;
      }
    }

    & + div { 
      margin-left: 30px;
    }
  }
`;

export const Restricao = styled.div`
  background: #FFF;
  padding: 10px;
  color: #000;
  
  animation: ${appearFromLeft} 5s;
  
  h4 { 
    text-align: center;
    margin-bottom: 10px;
  }
`;