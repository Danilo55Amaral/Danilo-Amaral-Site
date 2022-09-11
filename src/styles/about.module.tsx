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
                    cursor: pointer;
                    transition: background-color 0.2s;
                    transition: color 0.2s;
                }

                button:hover {
                    background-color: var(--hover-blue);
                    color: var(--dark-violet);
                }
            }
        }

        .container-skills {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 80px;
            background-color: var(--blue-800);

            h1 {
                font: 600 2rem "Roboto", sans-serif;
                margin-top: 30px;
                color: var(--orange-500);
            }

            .group-skills {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50%;
                height: 100%;
                margin-bottom: 60px;
            }

            .group-tools {
                display: flex;
                flex-direction: column;
                align-self: flex-start;
                align-items: center;
                width: 50%;
                height: 100%;
            }

            .card {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    width: 90%;
                    height: 5rem;
                    margin-top: 20px;
                    background-color: var(--dark);

                    transition: background-color 0.2s;

                    span {
                        font: 600 2rem "Roboto", sans-serif;
                        color: var(--dark-violet);
                    }
                }

                .card:hover {
                    background-color: var(--hover-blue);
                    color: var(--dark-violet);
                }
        }

        .container-certifications {
            display: flex;
            flex-direction: column;
            margin-top: 100px;
            width: 100%;

            span {
                align-self: center;
                font: 600 1.5rem "Roboto", sans-serif;
                color: var(--orange-500);
            }

            .certifications {
                display: flex;
                justify-content: space-around;
                margin-top: 30px;
                background-color: var(--blue-800);

                .card-certification {
                    margin-top: 50px;
                    margin-bottom: 50px;
                }
            }

            button {
                    padding: 1rem 1.5rem;
                    margin-top: 1rem;
                    margin-right: 50px;
                    border-radius: 8px;
                    border: 0;
                    width: 15%;
                    align-self: flex-end;
                    background: var(--dark-violet);
                    color: var(--white);
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    transition: color 0.2s;

                    svg {
                        width: 30px;
                        height: 30px;
                    }

                    svg:first-child {
                        margin-right: 1rem;
                        margin-left: 1rem;
                    }
                }

                button:hover {
                    background-color: var(--hover-blue);
                    color: var(--dark-violet);
                }
        }
    }

    /* Responsive  */
    @media (max-width: 1080px) {
        .container-profile {
            flex-direction: column;
            height: 1100px !important;

            .content-profile {
                width: 100% !important;
            }
        }

        .container-skills {
            flex-direction: column;

            .group-skills {
                width: 100% !important;
            }

            .group-tools {
                width: 100% !important;
                margin-bottom: 60px;
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

        .container-skills {
            flex-direction: column;

            .group-skills {
                width: 100% !important;
            }

            .group-tools {
                width: 100% !important;
                margin-bottom: 60px;
            }       
        }

        .container-certifications {

            .certifications {
                flex-direction: column;
                align-items: center;
            }

            button {
                width: 50% !important;
            }
        }
    }
`;