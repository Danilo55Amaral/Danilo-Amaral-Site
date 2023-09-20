import styled from "styled-components"; 

export const Container = styled.div `
    main {
        max-width: 100%;
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        align-items: center; 

        .container-title {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 550px;
            position: relative;

            // jogando imagem para trás 
            .image {
                z-index: -1;
            }

           span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                margin-top: 400px;
                font: 600 4rem "Roboto", sans-serif;
                color: green;
           }
        }

        .container-cards {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            margin-top: 80px;
        }
    }

    /* Responsive   */
    @media (max-width: 1080px) {
        .container-title {
            span {
                margin-left: 20px;
            }
        }

        .container-cards {
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 720px) {
        .container-title {
            span {
                margin-left: 20px;
            }
        }

        .container-cards {
            flex-direction: column;
            align-items: center;
        } 
    }
`;