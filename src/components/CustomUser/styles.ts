import styled from 'styled-components'

export const FormContainer = styled.form`

    h2 {
        color: var(--blue);
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    input {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;
        margin:2px;

        &::placeholder {
            color: var(--text-body);
        }
    }

    textarea {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
        margin-top:  1rem;
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--blue);
        color: #fff;
        border-radius: 8px;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        &:hover {
            filter: brightness(0.9);
        }

    }

`
