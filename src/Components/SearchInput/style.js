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
    align-items: flex-start;
    flex-direction: row;
    position: relative;
    input{
      width: 25vw !important;
      
      min-width: 193px !important;
      min-height: 30px !important;
      border: none !important;
      border-radius: 2px !important;
    }
    label{
      
      display: flex;
      height: auto;
      align-content: center;
      align-items: center;
      position:absolute;
      right:0 !important;
      width: auto !important;
      z-index:10;
      cursor: pointer !important;
      svg{
        pointer-events: all !important;
        border:none;
        background:transparent;
        outline:none;
        color: #cb2f2f;
        width: 40px;
        height: 25px;
        cursor: pointer !important;
      }
    }
 }        

`;

export default SearchInputContainer 