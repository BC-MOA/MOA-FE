import React from "react";
import { hideScrollBar } from "style/common";
import styled from "styled-components";

function ScrollBox({ onScrollFunc, children, paddingValue }) {
  return (
    <ScrollBoxStyle onScroll={onScrollFunc} paddingValue={paddingValue}>
      {children}
    </ScrollBoxStyle>
  );
}
ScrollBox.defaultProps = {
  paddingValue: "12px 0 0 0",
};
const ScrollBoxStyle = styled.div`
  ${hideScrollBar}
  height: 100%;
  padding: ${(props) => {
    return props.paddingValue;
  }};
  box-sizing: border-box;
  flex: 1;
`;

export default ScrollBox;
