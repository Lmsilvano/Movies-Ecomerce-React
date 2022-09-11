import styled from 'styled-components'
export const StyledPFormError = styled.p`
                      
    background: #ff0000ad;
    color: white;
    font-weight: 400;
    margin: 5px auto;
    text-align: center;
    width: 100%;
    border-radius: 5px;
    transition: 700ms;
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
                   
`

export const StyledivForm = styled.div`
     display: flex;
     flex-direction: column;
     div{
        position: relative;
     }
     input:-webkit-autofill {
    -webkit-text-fill-color: blue !important;
    }
    input:valid{
        -webkit-text-fill-color: blue !important;
    }
     input {
          width: 100%;
          height: 30px;
          box-sizing: border-box;
          line-height: 30px;
          font-size:14px;
          border:0;
          background: none;
          border-bottom:1px solid #ccc;
          outline:none;
          border-radius: 0;
          -webkit-appearance: none;
          &:focus,&:valid{
            &~label{
              color: #2962ff;
              transform: translateY(-20px);
              font-size:0.825em;
              cursor:default;
            }
          }
          &:focus{
            &~.underline{
              width: 100%;
            }
          }
        }
        label{
          position: absolute;
          top:0;
          left:0;
          height: 30px;
          line-height: 30px;
          color:#ccc;
          cursor:text;
          transition: all 200ms ease-out;
          z-index:10;
        }
        .underline{
          content:'';
          display: block;
          position: absolute;
          bottom:-1px;
          left:0;
          width: 0;
          height: 2px;
          background: #2962ff;
          transition: all 200ms ease-out;
        }
                   
`


export const StyledivForm2 = styled.div`
    margin-top: 20px;
    width: 45%;
    height: auto;
    
    form{ 

      .secondRow, .fifthRow{
            display: flex;
            align-content: center;
            justify-content: space-between;
            align-items: center;
            div{
              width: 45%;
            }
           }
        div{
            div{
              margin-top: 30px;
              position: relative;
              height: 50px;
              overflow: hidden;
            }
        
            div input{
              width: 100%;
              height: 100%;
              color: #595f6e !important;
              padding-top: 20px;
              border:none;
              outline:none;
              border: 1px solid rgba(0,0,0,0.1);
              box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
            }
        
            div label{
              position: absolute;
              bottom: 0px;
              left: 0%;
              width: 100%;
              height: 100%;
              pointer-events: none;
              border-bottom: 1px solid black;
            }
            div label::after{
              content: "";
              position: absolute;
              left: 0px;
              bottom: -1px;
              height: 100%;
              width: 100%;
              border-bottom: 3px solid #5fa8d3;
              transform: translateX(-102%);
              transition: transform 0.3s ease;
            }
            div span{
              position:absolute;
              bottom: 5px;
              left: 2px;
              transition: all 0.3s ease;
            }

            div input:focus + label span, div input:valid + label span{
              transform: translateY(-125%);
              font-size: 14px;
              color: #5fa8d3;
            }
            div input:focus + label:after, div input:valid + label::after{
              transform: translateX(0%) ;
            }
          }  
    }

`