import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: auto;
`;

export const Content = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
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
  margin-bottom: 10px;

  div.texto{ 
    margin-top: 10px;
    text-align: center;
    h1.day{ 
      font-size: 40px;
      color: #FD0E0E;
      margin-bottom: 10px;
    }
    h3.entrega{ 
      color: #000000;
      font-size: 30px;
      margin-bottom: 20px;
    }
    h3.garanta{ 
      color: #7B3737;
      font-size: 25px;
      font-weight: bold;
    }
    h1.especial{ 
      font-family: 'Roboto';
      font-size: 45px;
    }
  }

  div.blocos{ 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
   justify-content: center;
    gap: 15px;
    text-align: center;
    
      div.ingredientes{ 
        background: #964B00;
        padding: 20px;
        margin: 10px;

        h1{ 
          color: #000000;
          margin-bottom: 20px;
        }

        p {
          margin-top: 15px;
          font-size: 20px;
        }

        div.preco{ 
          margin-top: 30px;
          background: #FF9000;
          border-radius: 10px;
          h1{ 
            color: #FFF;
          }
        }
      }

      div.entrega{ 
        background: #964B00;
        padding: 20px;
        margin: 10px;

        h1{
          color: #000000;

        }

        h3{ 
          margin-top: 20px;
          color: #FF9000;
          margin-bottom: 20px;
        }

        div.preco{ 
          margin-top: 20px;
          background: #FF9000;
          border-radius: 10px;
          h1{ 
            color: #FFF;
          }
        }
      }
    }
`;

export const Botao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  div{ 
    padding: 10px;
    background: #FF691E;

    a { 
      text-decoration: none;
      color: #FFF;
      font-size: 30px;
      font-weight: bold;
    }
  }
`;