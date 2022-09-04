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
            flex-direction: column;
            width: 100%;

            .image {
                display: flex;
            }

           span {
                display: flex;
                margin-top: -100px;
                align-self: center;
                position: relative;
                font: 600 4rem "Roboto", sans-serif;
                color: var(--orange-500)
           }
        }

        .container-cards {
            display: flex;
            width: 100%;
            margin-top: 100px;

            .group-cards {
                display: flex;
                justify-content: space-around;
                width: 100%;

                .card {
                    display: flex;
                    width: 18rem;

                    p {
                        font: 400 1rem "Roboto", sans-serif;
                        color: black;
                    }
                }
            }
        }
    }

    @media (max-width: 1080px) {
        .group-cards {
            flex-direction: column;
            align-items: center;
            
            .card {
                margin-top: 30px;
            }
        }
    }

    @media (max-width: 720px) {
        .group-cards {
            flex-direction: column;
            align-items: center;
            
            .card {
                margin-top: 30px;
            }
        }
    }
`;