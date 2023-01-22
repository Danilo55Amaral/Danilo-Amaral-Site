import styled from "styled-components";

export const Container = styled.div`
      .logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            width: 4rem;
            height: 4rem;
            background-color: var(--orange-500);
        }

        .text-uppercase {
            margin: 0 7px;
            padding: 0 7px;
            font: 600 1.5rem "Roboto", sans-serif;
            color: var(--dark);
        }
`;