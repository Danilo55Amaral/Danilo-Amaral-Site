import styled from "styled-components";

export const Container = styled.header`

    .navbar {
        font-family: "Roboto";
        background-color: var(--blue-900);
        border-bottom: 1px solid var(--gray-900);

        ul {
            text-align: center;
            text-transform: uppercase;
            font-weight: 500;
        }

        ul * {
            box-sizing: border-box;
            -webkit-transition: all 0.35s ease;
            transition: all 0.35s ease;
        }

        ul li {
            display: inline-block;
            margin: 0 1.5em;
            overflow: hidden;
        }
        
        ul  a {
            padding: 0 0.5rem;
            color: var(--white);
            position: relative;
            display: inline-block;
            letter-spacing: 1px;
            margin: 0;
            text-decoration: none;
            line-height: 5rem;
            height: 5rem;

            transition: color 0.2s;

            & + a {
                margin-left: 2rem;
            }

            &:hover {
                color: var(--dark-violet);
            }

            &.active {
                color: var(--dark-violet);
                font-weight: bold;
            }

            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background: var(--magenta);
            } 
        }

        h1 {
            font: 600 2rem "Roboto", sans-serif;
            color: var(--orange-500);
            margin-left: 10px;
        }
    }

         /* Responsive */
    @media (max-width: 1080px) {
            
        button {
            margin-top: 20px;
            margin-bottom: 20px;
            border: none;
            box-shadow: none;
        }
    }

    @media (max-width: 720px) {
            
        button {
            margin-top: 20px;
            margin-bottom: 20px;
            border: none;
            box-shadow: none;
        }
    }
`;