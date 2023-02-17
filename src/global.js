import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  

 
  body {
 
  
   
    background: ${({ theme }) => theme.primaryDark};
   
    
    
  
  }

 

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;
