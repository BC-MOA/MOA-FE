import styled from "styled-components";

//[styled comp] : 퍼센티지 bar 디자인 컴포넌트
const StyledPercentBar = styled.div`
  padding-top: 15px;
  height: 50px;
  width: 100%;

  * {
    display: inline-block;
  }

  .a {
    height: 8px;
    background-color: var(--Bar_01);
    width: ${({ ratio }) => ratio}%;
    border-radius: 8px 0 0 8px;
  }

  .b {
    height: 8px;
    background-color: var(--Bar_02);
    width: ${({ ratio }) => 100 - ratio}%;
    border-radius: 0 8px 8px 0;
  }

  .textbox {
    width: 100%;
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    margin-top: 15px;
  }

  .textbox .a-text {
    color: var(--Bar_01);
    float: left;
  }

  .textbox .b-text {
    color: var(--Bar_02);
    float: right;
  }
`;

/**
 * totalkey : 베팅된 키의 개수 리스트
 */
const PercentBar = ({ totalkey }) => {
  const A = totalkey[0];
  const B = totalkey[1];
  const ratioA = ((A / (A + B)) * 100).toFixed(2);
  const ratioB = ((B / (A + B)) * 100).toFixed(2);

  return (
    <StyledPercentBar ratio={ratioA}>
      <>
        <div className="a"></div>
        <div className="b"></div>
      </>
      <div className="textbox">
        <span className="a-text">{ratioA}%</span>
        <span className="b-text">{ratioB}%</span>
      </div>
    </StyledPercentBar>
  );
};

export default PercentBar;
