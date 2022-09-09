import styled from 'styled-components';

export const ImgContainer = styled.div`
            display:flex;
            flex-direction: column;
            color: white;
        
        @media (max-width: 410px) {
                img{
                    
                    width: 40px;
                    height: 58px;
                }
                h4{
                    display:none;
                }
            }
            @media (max-width: 325px) {
                img{
                    
                    width: 20px;
                    height: 38px;
                }
            }
            @media (max-width: 306px) {
                img{
                    
                    display: none;
                }
            }

`