import styled from 'styled-components'
export const StyledDivCardsKart = styled.div`
        position:relative;
        display: flex;
        position: relative;
        align-content: center;
        justify-content: space-between;
        align-items: flex-start;
        border: 1px solid rgba(0,0,0,0.1);
        margin-bottom: 5px;
        padding: 5px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 8px;
        }
        svg{
            position: absolute;
            top:0;
            right:0;
            cursor: pointer;
            @media (max-width: 405px) {
                    top: 20px; 
                } 
        }
        span{
            margin-right: 20px;
            display: flex;
        }
        p{
            text-align: center;
            width: 220px;
            font-weight: bolder;
        }
`