import styled from "styled-components";

export const Container = styled.div`

    main {
        max-width: 100%;
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .container-profile {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 600px;
            background-color: var(--dark); 

            .image-profile {
                border: solid 5px var(--dark-violet);
                border-radius: 3px;
                display: flex; 
            }

            .content-profile {
                display: flex;
                flex-direction: column;
                width: 50%;
                height: 100%;

                h1 {
                    font: 600 1.5rem "Roboto", sans-serif;
                    margin-top: 60px;
                    align-self: center;
                    color: var(--white);
                }

                p {
                    font: 400 1rem "Roboto", sans-serif;
                    margin-top: 30px;
                    margin-left: 30px;
                    margin-right: 30px;
                }

                button {
                    padding: 1rem 1.5rem;
                    margin-top: 1rem;
                    margin-right: 50px;
                    border-radius: 8px;
                    border: 0;
                    width: 30%;
                    align-self: flex-end;
                    background: var(--dark-violet);
                    color: var(--white);
                    font-weight: bold;
                    cursor: pointer
                    transition: background-color 0.2s;
                    transition: color 0.2s;
                }

                button:hover {
                    background-color: var(--hover-blue);
                    color: var(--dark-violet);
                }
            }
        }
    }

    @media (max-width: 1080px) {
        .container-profile {
            flex-direction: column;
            height: 1100px !important;

            .content-profile {
                width: 100% !important;
            }
        }
    }

    @media (max-width: 720px) {
        .container-profile {
            flex-direction: column;
            height: 1100px !important;

            .content-profile {
                width: 100% !important;
            }
        }
    }
`;