import styled from "styled-components";

const PickupSection = styled.div`
  display: flex;
  height: 75px;
  margin: 15px auto;
  justify-content: space-around;
`;

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
`;

const PickUp = (props) => {
  const clickHandle = () => {
    props.info.func(props.type);
  };

  //버튼 상태 설정
  let buttonState;

  if (props.info.isbet) {
    if (props.type) {
      buttonState = props.info.pick;
    } else {
      buttonState = !props.info.pick;
    }
  } else {
    buttonState = false;
  }

  return (
    <Pickupbox filter={!props.info.isbet || buttonState ? 1 : 0}>
      <div className="img" onClick={clickHandle}>
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
            props.type
              ? require("assets/compete/v2.png")
              : require("assets/compete/v1.png")
          }
        ></img>
        <p>{props.versus}</p>
      </div>
    </Pickupbox>
  );
};

export { PickUp, PickupSection, Pickupbox };
