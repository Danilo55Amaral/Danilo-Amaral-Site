import styled from "styled-components"; 

export const Container = styled.div`

.carousel-container {
      width: 100%;
      padding-bottom: 30px;
      border-top: 5px solid var(--magenta);
      cursor: pointer;
      
      .carousel-inner, h5, p {
        font: 600 1rem "Roboto", sans-serif;
        color: var(--orange-900);
        background-color: var(--magenta);
      }
      .carousel-caption > h5,p {
        border: 3px solid var(--magenta);
        border-radius: 5px;
      }
    }
    /* Responsive  */
    @media (max-width: 720px) {
            .carousel-container {
              width: 100% !important; 
              margin-left: 0px !important;
            }  
        }
`;