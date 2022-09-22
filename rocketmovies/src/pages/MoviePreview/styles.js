import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > main {
    max-width: 1137px;
    height: 581px;
    text-align: justify;
    margin-top: 2.5rem;
    margin-inline: auto;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-button {
      height: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      border-inline: 0.8rem solid ${({ theme }) => theme.COLORS.ROSE};
      border-radius: 1rem;
      background-clip: padding-box;
    }

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      > div.back-button {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.625rem;

        color: ${({ theme }) => theme.COLORS.ROSE};

        > svg {
          color: ${({ theme }) => theme.COLORS.ROSE};
        }
      }

      a {
        background: ${({ theme }) => theme.COLORS.ROSE};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
        padding-block: 0.8438rem;
        padding-inline: 2rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        line-height: 1.3125rem;

        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1.25rem;
      margin-block: 1.5rem;

      > div {
        display: flex;
        flex-direction: row;
        gap: 0.7031rem;
        svg.rating {
          display: block;
          width: 1.25rem;
          height: 1.25rem;
          color: ${({ theme }) => theme.COLORS.ROSE};
          opacity: 1;
        }

        svg {
          display: none;
        }
      }
    }

    > div:nth-child(3) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }

    > div:nth-child(4) {
      margin-block: 2.5rem;
    }
  }
`;
