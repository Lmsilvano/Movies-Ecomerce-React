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
        top: 185px !important;
        @media (max-width: 410px) {
                top: 100px !important;
            }
    }
    .offcanvas-body{
        position: relative !important;
    }
    .navbar {
        display: flex !important;
        position: fixed !important;
        top:0;
        left:0;
        z-index: 999;
        justify-content: space-between !important;
        .navbar-brand{
            color: white !important;
            margin-left: 20px !important; 
            display: flex !important;
            flex-direction: column;
            align-items: center;
            
        }
        width: 100vw !important;
        background: linear-gradient(10deg, #ff9800 0, #ff8400 12.5%, #ff6f12 25%, #fb5823 37.5%, #e93f2b 50%, #d52430 62.5%, #c20034 75%, #b10038 87.5%, #a2003d 100%) !important;
        .navbar-collapse{
        flex-grow: 0 !important;
        }          
    }


    .custom-toggler, .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
    }
    .navbar-toggler {
        border: 1px solid rgba(0,0,0,0.1) !important;
        box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
    }
    .navbar-collapse{
        flex-grow: 0 !important;
    }
    
`;