import styled from "styled-components";


export const StyledHeader = styled.header`
  position:fixed;
  z-index: 999;
  top:0;
  left:0;
  width: 100vw;
  height: 13vh ;
  background: linear-gradient(10deg, #ff9800 0, #ff8400 12.5%, #ff6f12 25%, #fb5823 37.5%, #e93f2b 50%, #d52430 62.5%, #c20034 75%, #b10038 87.5%, #a2003d 100%);
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 7px;
  border: 1px solid rgba(0,0,0,0.1);
`;

export const LogoContainer = styled.div`
  width: 2%;
  height: auto;
  margin-left: 5vw;

  img{
    width: 100%;
    height: 100%;
  }
  span{
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
  }
  @media (max-height: 543px) {
           span{
            display: none;
           }
         }
  @media (max-width: 1500px) {
           img{
            width: 150%;
           }
         }
  @media (max-width: 700px) {
           img{
            width: 200%;
           }
         }
  @media (max-width: 520px) {
           span{
            display:none;
           } 
           img{
            width: 250%;
           }
         }
  @media (max-width: 350px) {
          
          margin-left: 1vw; 
          
         }              
                         
`;


export const SearchInputContainer = styled.div`
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
      }
    }
 }        

`;


export const NavContainer = styled.div`
  display: flex;
  margin-right: 5vw;
  div{
      svg{
        color: white;
        width: 50px;
        height: 35px;
        cursor: pointer;
    
      }
  }
  @media (max-width: 442px) {
           svg{
           width: 40px;
           height: 25px;
           } 

         }    

`

