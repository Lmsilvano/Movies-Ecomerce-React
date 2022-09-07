import styled from 'styled-components'
export const StyledDivCardsMovies = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 265px;
    max-width: 270px;
    height: 520px;
    margin: 10px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
    position: relative;
    .favHeart{
        position:absolute;
        right:0;
        top: 0;
        z-index: 100;
        max-width: 40px;
        max-height: 50px;
        cursor:pointer;
        transition: 1600ms;
        path{
            width: 30px;
            height: 40px;
            
        }
        :hover{
            height: 50px;
        }
         
        }
    @media (max-width: 1372px) {
            width: 35%;
         }
    @media (max-width: 932px) {
            width: 75%;
         }         
    .cardIMGMovie {
        width: 230px;
        height: 200px;
        border-radius: 10px;
        flex:1;
        img{
            width: 230px;
            height: 200px;
        }
        @media (max-width: 1430px) {
            width: 95%;
         }
         
    }
    .cardContentMovie {
        display: flex;
        flex-direction: column;
        margin: 20px;
        flex:2;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
        text-align: justify;
        box-sizing: border-box;
        width: 100% ;
        
        h3{
            font-weight: 700;
        }
        .cardContentBody{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            width: 80%;
            height: auto;
            .cardContentUpperBody{
                width: 100%;
                height: auto;
                display: flex;
                h4{
                margin-left: 8px;    
                }
                p{
                  font-weight: bolder;
                  margin-left: 2px;  
                }
            }
            .cardContentLowerBody{
                display: flex;
                flex-direction: column;
                p{
                color:black;
                margin-top: 10px;
                overflow: hidden; 
                text-overflow: ellipsis; 
                display: -webkit-box;
                -webkit-line-clamp: 2; 
                -webkit-box-orient: vertical;
                @media (max-width: 1270px) {
                    -webkit-line-clamp: 3;   
                } 
                }
             }
           
    }
       
    }
    a{
        text-decoration: none;
        color: white;
        border: 1px solid rgba(0,0,0,0.1);
        background: #24193d;
        padding: 5px;
        border-radius: 8px;
        font-weight: 500;
        :hover{
            transition: 450ms;
            background: none;
            color: #24193d;
            font-weight: bold;
        }
    }
    span{
        position: absolute;
        bottom: 35px;
        font-weight: bolder;
        right:2px;
    }

    button{
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        border-radius: 8px;
        position: absolute;
        bottom:0;
        right:0;
        width: 100%;
        height: 30px;
        color: white;
        font-weight: bolder;
        border: none;
        background: linear-gradient(10deg, #ff9800 0, #ff8400 12.5%, #ff6f12 25%, #fb5823 37.5%, #e93f2b 50%, #d52430 62.5%, #c20034 75%, #b10038 87.5%, #a2003d 100%);
        transition: 750ms;
        :hover{
            height: 34px;
            color: #5bb58b;
        }
    }
    
    
    `