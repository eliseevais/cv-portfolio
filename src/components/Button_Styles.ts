import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Button = styled.button`
    width: 280px;
    height: 72px;
    border-radius: 8px;

    background: linear-gradient(
      180deg,
      ${myTheme.colors.brightA},
      ${myTheme.colors.brightB} 70%
    );
    color: ${myTheme.colors.accentA};

    letter-spacing: 0.05em;

    cursor: pointer;
    position: relative;
    transition: ${myTheme.animations.transition};

    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    text-decoration: none;

    display: flex;
    justify-content: center;  
    align-items: center;     

    &::before {
        content: "";
        position: absolute;
        top: 2px;
        bottom: 2px;
        left: 2px;
        right: 2px;
        background: ${myTheme.colors.backgroundA};
        border-radius: 10px;
        z-index: -1;
    }

    &:hover {
        transform: scale(1.01);
    }

    @media ${myTheme.media.tablet} {
        width: 180px;
        height: 48px;
        font-size: 16px;
        margin-top: 24px;
        margin-bottom: 24px;
    }
`;
