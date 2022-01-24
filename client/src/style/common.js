import { css } from "styled-components";

export const styleTitle = css`
  font-family: "Pretendard-SemiBold";
  font-size: 21px;
  line-height: 33px;
  color: var(--Title_01);
`;

export const styleSubTitle = css`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  line-height: 22px;
  color: var(--Title_02);
`;

export const styleNotice = css`
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 19px;
  color: var(--Body_01);
`;

export const hideScrollBar = css`
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const backButtonBox = css`
  padding: 6px;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
  }
`;
