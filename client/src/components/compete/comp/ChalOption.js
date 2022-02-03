import styled from "styled-components";

//[styled comp] : 개별 선택 항목 컨테이너
const Pickupbox = styled.div`
  display: flex;
  align-items: flex-start;

  .thumb p {
    margin-top: 5px;
    font-family: "Pretendard-Medium";
    font-size: 14px;
  }

  .thumb {
    filter: ${({ filter }) => (filter ? "none" : "grayscale(80%)")};
  }

  transition: 1s all;

  .thumb:hover {
    transform: scale(1.1);
  }
`;

/**
 * [comp]
 * PickUp
 *
 * [state]
 * none
 *
 * [props]
 * versus : list of string / 챌린지 대상
 * type: bool/ 선택지 순서 구분
 * pick : bool/ 선택한 대상
 * bet : bool/ 베팅 여부
 */
const PickUp = (props) => {
  let buttonState = false;

  /**
   * 베팅 되있을 때
   * 순서에 따라서 pick값에 따른 버튼 활성화 조건 설정
   * */
  if (props.isbet) {
    buttonState = props.type ? props.pick : !props.pick;
  }

  return (
    //조건에 따라 grayscale 필터 설정
    <Pickupbox filter={!props.isbet || buttonState ? true : false}>
      <div className="img">
        <img
          src={
            buttonState
              ? require("assets/compete/checked.svg").default
              : require("assets/compete/check.svg").default
          }
        ></img>
      </div>
      <div className="thumb">
        <img
          src={
            //챌린지 대상 이미지 url 적용해야함
            props.type
              ? "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/맨시티.png"
              : require("assets/compete/v1.png")
          }
        ></img>
        <p>{props.versus}</p>
      </div>
    </Pickupbox>
  );
};

export { PickUp };
