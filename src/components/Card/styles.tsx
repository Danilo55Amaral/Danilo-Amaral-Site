import styled from "styled-components";

export const Container = styled.div`
    .card {
        height: 400px;
        width: 300px;
        border-radius: 0.5rem;
        border: 0;
        background: var(--dark);
        position: relative;

        strong {
            font-weight: 700;
            color: var(--white);
            margin: 3rem;
        }

        button {
            background: var(--dark-violet);
            color: var(--white);
            border-radius: 0.5rem;
            border: 0;
            padding-left: 3rem;
            padding-right: 3rem;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            position: absolute;
            bottom: 10rem;
            right: 0px;
            cursor: pointer;
            transition: background-color 0.2s;
            transition: color 0.2s;
        }

        button:hover {
            background-color: var(--hover-blue);
            color: var(--dark-violet);
        }
    } 
`;