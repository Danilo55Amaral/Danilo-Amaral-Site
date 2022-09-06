import styled from "styled-components";

export const Container = styled.footer `
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        align-content: space-between;
        margin-bottom: 0;
        width:100%;
        height:260px;  /* Mesma Altura do Rodapé */
        background-color: var(--dark);
        color: var(--white);

        margin-top: 90px;

        .bar {
            width: 100%;
            height: 50px;
            background-color: var(--blue-800);
            display: flex;
            align-items: center;
            justify-content: center;
            
            p {
                align-self: center;
            }
        }
   
        hr {
            margin-top: 0;
            border-color: #FFFF;
            width: 100%;
        }

        .content {
            display: flex;
            justify-content: space-evenly;
            width:100%;
            height:160px;
            margin-top: 10px;

            .icons {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 5.5rem;
                height: 7rem;
                color: var(--magenta);
                cursor: pointer;
            }

            .icons > span {
                    font: 800 1rem "Roboto", sans-serif;
                    color: var(--white);    
                }
        }

        span {
          font: 100 1rem "Roboto", sans-serif;
          align-self: center;
        }

        .links > a {
            color: #FFFF;
            font: 800 1rem "Roboto", sans-serif;
        }

        .links a:hover {
            color: var(--magenta);
        }

        .coppy {
            height: 20%;
        }
    }
`;