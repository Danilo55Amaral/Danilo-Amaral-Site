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
            justify-content: center;
            width: 100%;
            height: 550px;
            position: relative;

            .image {
                z-index: -1;
            }

           span {
                display: flex;
                justify-content: center;
                width: 100%;
                margin-top: 450px;
                font: 600 4rem "Roboto", sans-serif;
                color: var(--white);
           }
        }

        .container-contact {
            display: flex;
            justify-content: space-around;
            width: 100%; 
            height: 800px;
            position: relative; /*  Componente image  */
            margin-top: 80px;

            .bg-image {
                z-index: -1; /* background */
            }  

            .contact {
                display: flex;
                flex-direction: column;
                margin-top: 120px;
                width: 50%;

                h1 {
                    font: 600 3rem "Roboto", sans-serif;
                }

                p {
                    font: 400 1.2rem "Roboto", sans-serif;
                }
                
                span {
                    font: 600 1.5rem "Roboto", sans-serif;
                    margin-top: 30px;
                }

                span:hover {
                    color: var(--magenta)
                }
            } 
            
            .icon {
                display: flex;
                flex-direction: column;
                 margin-top: 120px;
                 
                 span {
                    font: 600 1.5rem "Roboto", sans-serif;
                 }

                 span:hover {
                    color: var(--magenta)
                }

                 .wpp {
                    margin-top: 20px;
                    cursor: pointer;
                 }
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

        .container-contact {
            flex-direction: column;
            align-items: center;

            .icon {
                width: 50%;
            }
        }
    }
`;