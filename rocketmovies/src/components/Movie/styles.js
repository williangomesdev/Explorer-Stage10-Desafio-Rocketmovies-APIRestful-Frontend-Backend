import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE_900};
  border: none;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.4375rem;

    svg {
      width: 0.75rem;
      height: 0.75rem;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }

  p {
    text-align: justify;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  footer {
    width: 100%;
    display: flex;
  }
`;
