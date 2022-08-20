import styled from "styled-components";

export const Container = styled.div`
    main {
        max-width: 100%;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .container-profile {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 400px;
            background-color: var(--blue-800);

            .image {
                border: solid 5px var(--dark-violet);
                border-radius: 3px;
                box-shadow: 10px 15px black;
            }
            
            .content {
                margin-left: 40px;

                span {
                    font: 600 1.5rem "Roboto", sans-serif;
                    color: var(--orange-500)
                }

                h1 {
                    font: 500 3rem "Roboto", sans-serif;
                }

                p {
                    font: 400 1.2rem "Roboto", sans-serif;
                }
            }
        }

        .container-services {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 80%;
            margin-top: 60px;

            span {
                align-self: center;
                font: 600 1.5rem "Roboto", sans-serif;
                color: var(--orange-500);
                margin-top:  20px;
            }

            h1 {
                align-self: center;
                font: 400 2rem "Roboto", sans-serif;
            }

            .group-services {
                display: flex;
                justify-content: space-around;
                margin-top: 60px;
            }

            .card-services {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
        /* Responsive */
    @media (max-width: 1080px) {
        .container-profile {
                flex-direction: column;
                height: 700px !important;

                .content {
                    margin-top: 30px;
                }
            }

            .group-services {
                flex-direction: column;
                margin-top: 30px !important;
            
                .card-services {
                    margin-top: 30px;
                }
            }
        }

    @media (max-width: 720px) {
        .container-profile {
            flex-direction: column;
            height: 700px !important;

            .content {
                margin-top: 30px;
            }
        }

        .group-services {
            flex-direction: column;
            margin-top: 30px !important;
            
            .card-services {
                margin-top: 30px;
            }
        }
    }
`;