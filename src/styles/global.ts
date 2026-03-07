import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at 80% 15%, rgba(255, 180, 200, 1.0), transparent 35%),
    radial-gradient(circle at 20% 50%, rgba(45, 212, 225, 0.4), transparent 25%),
    radial-gradient(circle at 80% 90%, rgba(37, 99, 235, 0.3), transparent 35%),
    #f0f0f2;
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
