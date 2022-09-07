import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: #f0f2f5;
        font-family: 'Open Sans', sans-serif;
    }

    /* Personalizando estilos do bootstrap */
    .offcanvas-backdrop.show{
        display: none !important; 
    }
    .offcanvas.offcanvas-end{
        top: 125px !important;
    }
`;