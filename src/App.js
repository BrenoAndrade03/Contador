import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: whitesmoke;
  }
  body{
    height: 100 vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: tomato;
  }
 button{
   background-color: orange;
   width: 40px;
   height: 40px;
   color: black;
   border: none;
   margin: 10px;
   border-radius: 50%;
 } 
 `;
const Envolve = styled.div`
  width: 30vw;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  padding-top: 15vh;
  background-image: linear-gradient(110deg, #250902, #38040e, #640d14);
`;
export default class Contador extends React.Component {
  state = {
    cont: 0
  };
  adicionar = () => {
    let { cont } = this.state;
    if (cont < 10) {
      this.setState({ cont: cont + 1 });
    }
  };
  remover = () => {
    let { cont } = this.state;
    if (cont > 0) {
      this.setState({ cont: cont - 1 });
    }
  };
  limpar = () => {
    this.setState({ cont: 0 });
  };
  render() {
    return (
      <Envolve>
        <GlobalStyle />
        <h1>Contador</h1>
        <h2>{this.state.cont}</h2>
        <div>
          <button onClick={this.adicionar}>+</button>
          <button onClick={this.remover}>-</button>
        </div>
        <div>
          <button onClick={this.limpar}>Clean</button>
        </div>
      </Envolve>
    );
  }
}
