import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
    background-color: #F0F0F2; 
    background-image:
      radial-gradient(at 80% 30%, rgba(255, 182, 219, 1) 0px, transparent 30%),
      radial-gradient(at 15% 65%, rgba(122, 245, 337, 0.4) 0px, transparent 40%),
      radial-gradient(at 85% 90%, rgba(181, 155, 255, 0.5) 0px, transparent 30%),
      radial-gradient(at 85% 85%, rgba(158, 201, 255, 0.65) 0px, transparent 15%);
    background-attachment: fixed;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

body, input, textarea, button {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

 h1 {
    font-size: 3.5rem;    
    line-height: 130%;
    font-weight: 700;  
  }

  h2 {
    font-size: 2.25rem;    
    line-height: 130%;
    font-weight: 700;   
  }

  h3 {
    font-size: 1.25rem;   
    line-height: 130%;
    font-weight: 700;  
  }

button {
  cursor: pointer;
}

`
