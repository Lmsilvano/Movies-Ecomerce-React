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