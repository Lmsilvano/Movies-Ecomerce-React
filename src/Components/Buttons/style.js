import styled from 'styled-components'
export const StyledButton = styled.div`
    
    button{
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        border-radius: 8px;
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