import { overrideSubMenuStyling } from "components/apps/MonacoEditor/functions";
import styled from "styled-components";

const buttonSize = "48px";
const paddingSize = "32px";

const StyledPhotos = styled.div.attrs({ onBlur: overrideSubMenuStyling })`
  background-color: #222;
  display: flex;
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
  padding-bottom: ${paddingSize};
  padding-top: ${buttonSize};
  position: relative;

  svg {
    fill: #fff;
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${paddingSize} ${paddingSize};
    overflow: hidden;
    place-content: center;
    place-items: center;
    width: 100%;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  nav {
    display: flex;
    height: ${buttonSize};
    place-content: center;
    place-items: center;
    position: absolute;

    &.top {
      top: 0;
      width: 100%;

      svg {
        height: 16px;
      }
    }

    &.bottom {
      bottom: 0;
      right: 0;

      svg {
        height: 20px;
        margin-top: 2px;
      }
    }

    button {
      height: ${buttonSize};
      width: ${buttonSize};

      &:disabled {
        pointer-events: none;

        svg {
          fill: rgb(125, 125, 125);
        }
      }

      &:hover {
        background-color: rgba(75, 75, 75, 0.5);
      }

      &:active {
        background-color: rgba(100, 100, 100, 0.5);
      }
    }
  }
`;

export default StyledPhotos;
