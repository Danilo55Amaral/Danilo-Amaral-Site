import styled from "styled-components";

export const Container =styled.div `
    main {
        max-width: 100%;
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .container-title {
            display: flex;
            flex-direction: column;
            width: 100%;

            .image {
                display: flex;
            }

           span {
                display: flex;
                margin-top: -85px;
                align-self: center;
                position: relative;
                font: 600 4rem "Roboto", sans-serif;
                color: var(--white);
           }
        }
    }

    @media (max-width: 1080px) {
        
    }

    @media (max-width: 720px) {
        /* Apenas necessário em telas de celular */
        .container-title {
            span {
                font: 600 2rem "Roboto", sans-serif !important;
            }
        }
    }
`;