import styled from "styled-components";

export const Container = styled.div`

    main {
        max-width: 100%;
        margin: 70px auto;
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

            /* .image {
                border: solid 5px var(--dark-violet);
                border-radius: 3px;
                box-shadow: 10px 15px black;
            } */
            .image {
                /* border: solid 5px var(--dark-violet);
                border-radius: 3px; */
                box-shadow: 10px 10px 10px black;
            }
            
            .content {
                margin-left: 40px;

                span {
                    font: 600 1.5rem "Roboto", sans-serif;
                    color: var(--orange-500)
                }

                h1 {
                    font: 500 3rem "Roboto", sans-serif;
                    color: var(--blue-800);
                }

               /*animate */
                h1::before {
                    content: attr(data-text);
                    position: absolute;
                    width: 0%;
                    height: 100%;
                    color: var(--white);
                    overflow: hidden;
                    animation: animate 6s linear infinite;
                }

                @keyframes animate {
                    0%{
                        width: 0;
                    }
                    70%{
                        width: 50%;
                    }
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

        .container-projects {
            display: flex;
            flex-direction: column;
            width: 85%;
            height: 700px;
            margin-top: 150px;
            background-color: var(--dark);
            border-radius: 15px;

            span {
                align-self: center;
                font: 600 3rem "Roboto", sans-serif;
                margin-top: 30px;
            }

            .group-projects {
                display: flex;
                justify-content: space-around;
                margin-top: 50px;

                .card-project {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;

                    span {
                        font: 500 1.5rem "Roboto", sans-serif;
                    }
                }

                .image-project {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: solid 5px var(--white);
                    border-radius: 10px;
                }
            }

            button {
                    padding: 1rem 1.5rem;
                    margin-top: 4rem;
                    margin-right: 50px;
                    border-radius: 8px;
                    border: 0;
                    width: 10rem;
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

            .container-projects {
                width: 90% !important;
                height: 1500px !important;
                align-items: center !important;
                margin-top: 90px !important;

                .group-projects {
                    flex-direction: column;
                    width: 80%;
                    
                    .card-project {
                        margin-top: 30px;
                        

                    }
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

            /* animate - necessario alteração apenas em max-width: 720px  */
                @keyframes animate {
                    0%{
                        width: 0;
                    }
                    70%{
                        width: 80%;
                    }
                }
        }

        .group-services {
            flex-direction: column;
            margin-top: 30px !important;
            
            .card-services {
                margin-top: 30px;
            }
        }

        .container-projects {
            width: 90% !important;
            height: 1500px !important;
            align-items: center !important;
            margin-top: 90px !important;

            .group-projects {
                flex-direction: column;
                width: 80%;
                
                .card-project {
                    margin-top: 30px;
                }
           }
        }
    }
`;