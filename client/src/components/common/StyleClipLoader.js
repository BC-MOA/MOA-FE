import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

function StyleClipLoader() {
  return (
    <StyleLoader>
      <ClipLoader
        className="loader"
        css={" border-width: 5px "}
        color={`var(--a2)`}
        speedMultiplier={0.5}
        loading={true}
        size={100}
      />
    </StyleLoader>
  );
}
const StyleLoader = styled.div`
  position: absolute;
  top: -8px;
  bottom: -8px;
  left: -20px;
  right: -20px;
  background-color: var(--Surface);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyleClipLoader;
