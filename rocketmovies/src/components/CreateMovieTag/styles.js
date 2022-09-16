import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 19%;
  min-width: 200px;

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : `${theme.COLORS.BACKGROUND_INPUT}`};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_400}` : "none"};
  border-radius: 0.625rem;
  padding: 1rem;

  input {
    width: 100%;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme, isNew }) =>
        isNew ? `${theme.COLORS.GRAY_400}` : `${theme.COLORS.WHITE}`};
    }
  }
  > button {
    height: 24px;
    border: none;
    background: transparent;

    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
`;
