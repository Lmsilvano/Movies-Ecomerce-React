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
      width: 20vw;
      min-width: 193px;
      min-height: 30px;
      border: none;
      border-radius: 2px;
    }
    label{
      display: flex;
      height: 100%;
      align-content: center;
      align-items: center;
      position:absolute;
      right:0;
      z-index:10;
      svg{
        border:none;
        background:transparent;
        outline:none;
        color: #cb2f2f;
        width: 40px;
        height: 25px;
        cursor: pointer;
      }
    }
 }        

`;

export default SearchInputContainer 