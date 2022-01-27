import styled from "styled-components";

const PercentBar = (props) => {
  const A = props.totalKey[0];
  const B = props.totalKey[1];
  const ratioA = ((A / (A + B)) * 100).toFixed(2);

  return (
    <StyledPercentBar ratio={ratioA}>
      <>
        <div className="a"></div>
        <div className="b"></div>
      </>
      <div className="textbox">
        <span className="a-text">{ratioA}%</span>
        <span className="b-text">{100 - ratioA}%</span>
      </div>
    </StyledPercentBar>
  );
};

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

export default PercentBar;
