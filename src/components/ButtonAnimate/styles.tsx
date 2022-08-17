import styled from "styled-components"; 

export const Container = styled.div `

    h1 {
        margin-top: 100px;
    }

    .gradient-button {
        position: relative;
        width: 230px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-family: "Roboto";
        font-size: 20px;
        font-weight: 300;
        text-decoration: none;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        margin-top: 100px;
    }

    .button {
            width: 100%;
            height: 100%;
            background-color: #000;
            border-radius: 9px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            transition: all 500ms;
        }

        .gradient {
            width: 200%;
            height: 107%;
            position: absolute;
            background-image: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
            background-size: 50%;
        }

        .gradient-button:hover .button {
            width: 95%;
            height: 85%;
        }

        .gradient-button:hover .gradient {
            animation: gradientloop 1s linear 0s infinite normal;
        }

        @keyframes gradientloop {

            0%{
                background-position: 0%;
            }
            100%{
                background-position: -100%;
            }
        }
`;

