import styled from "styled-components";

export const Container = styled.div`
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
                width: 100%;
                margin-top: 400px;
                font: 600 4rem "Roboto", sans-serif;
                color: var(--orange-500)
           }
        }

        .text-area {
            margin-top: 100px;
            font: 600 4rem "Roboto", sans-serif;
            color: green;
        }

        .container-skills {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 50px;
            height: 700px;
            width: 100%;
            background-color: var(--dark);

            .skill {
                display: flex;
                flex-direction: column;
                align-items: center;
                font: 600 1.5rem "Roboto", sans-serif;
                color: var(--orange-500);
            }
            
            .skill-card {
                cursor: pointer;
                position: relative;
                overflow: hidden;
                display: flex;
                align-Items: center;
                justify-Content: center;

                footer {
                    position: absolute;
                    width: 100%;
                    height: 30%;
                    padding: 2rem;

                    display: flex;
                    align-Items: center;
                    justify-Content: space-between;
                    background-Color: rgba(0, 0, 0, 0.6);

                    strong {
                        font-Size: lg;
                    }

                    span {
                        font-Size: xl;
                        font-Weight: bold;
                        color: green;
                    }

                    transform: translateY(110%);
                    opacity: 0;
                    transition: all 0.2s ease-in-out;
                }

                footer:hover {
                        transform: translateY(100%);
                        opacity: 1
                    }
            }
        }
    }
    /* Responsive */ 
    @media (max-width: 1080px) {
        .container-skills {
            flex-direction: column;
            height: 1500px !important;
        }

        .text-area {
            margin-left: 30px;
        }
    }

    @media (max-width: 720px) {
        .container-skills {
            flex-direction: column;
            height: 1500px !important;
        }

        .text-area {
            margin-left: 30px;
        }
    }
`;