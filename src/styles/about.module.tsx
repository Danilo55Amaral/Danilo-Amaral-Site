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
            width: 100%;
            height: 30rem;
            background-color: var(--dark);

            .image-profile {
                width: 50%;
                background-color: gray;
            }
        }
    }
`;