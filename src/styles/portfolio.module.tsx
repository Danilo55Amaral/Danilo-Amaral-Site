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

        .container-cards {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 80px;

            .cards {
                perspective: 1500px;
                display: flex;
                width: 100%;
                justify-content: space-around;
                margin-top: 30px;
            }

            .card {
                display: flex;
                width: 400px;
                height: 450px;
                background-size: cover;
                border: 1px solid rgba(255,255,255, 25);
                border-radius: 4px;
                cursor: pointer;
                position: relative;
                transform-style: preserve-3d;
                will-change: transform;
                transition: transform .5s;
            }

            .card:hover {
                transform: translateZ(10px) rotateX(60deg) rotateY(30deg);
            }

            .card-title {
                font: 600 1.5rem "Roboto", sans-serif;
                color: var(--orange-500);
                position: absolute;
                top: 80%;
                right: 25px;
                transform: translateY(-50%);
                transition: transform .5s;
            }

            .card:hover .card-title {
                transform: translateZ(50px);
            }
        }
    }

    @media (max-width: 1080px) {
        .cards {
            flex-direction: column;
            align-items: center;
        }

        .card {
            margin-top: 30px;
            width: 330px !important;
        } 
    }

    @media (max-width: 720px) {
        .cards {
            flex-direction: column;
            align-items: center;
        }

        .card {
            margin-top: 30px;
            width: 330px !important;
        }
    }
`;