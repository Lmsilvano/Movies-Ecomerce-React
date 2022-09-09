import styled from "styled-components";


export const StyledMain = styled.main`
  width: 70vw;
  height: auto;
  /* border: 1px solid black; */
  margin-left: 15vw;
  margin-top: 20vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 829px) {
            width: 95vw;
            margin-left: 8vw;
            margin-top: 20vh;
         }
`;