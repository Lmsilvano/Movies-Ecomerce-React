import styled from "styled-components";
const SearchInputContainer = styled.div`
 display: flex;
 min-width: 193px;
 min-height: 30px;
 div {
    display: flex;
    min-width: 193px;
    min-height: 30px;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
    input{
      width: 25vw !important;
      
      min-width: 193px !important;
      min-height: 30px !important;
      border: none !important;
      border-radius: 2px !important;
    }
    
      svg{
        pointer-events: all !important;
        border:none;
        background:transparent;
        outline:none;
        color: #cb2f2f;
        width: 40px;
        height: 25px;
        position:absolute;
        right: 0;
        cursor: pointer !important;
      }
    
 }        

`;

export default SearchInputContainer 