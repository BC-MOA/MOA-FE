import styled from "styled-components";
import Picker from "react-scrollable-picker";

const KeySelctor = styled.div`
  height: 130px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Pretendard-SemiBold";
  font-size: 18px;

  img {
    width: 28px;
    margin-left: 20px;
    margin-right: -20px;
  }

  .pickerWrapper {
    width: 66px;
  }
`;

const options = {
  number: [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ],
};

const KeyPicker = (props) => (
  <KeySelctor>
    <img src={require("assets/compete/key.svg").default}></img>
    <p>베팅할 열쇠개수</p>
    <div className="pickerWrapper">
      <Picker
        optionGroups={props.keyCount.optionGroups}
        valueGroups={props.keyCount.valueGroups}
        onChange={props.handleChange}
        height={150}
      />
    </div>
    <p>개</p>
  </KeySelctor>
);

export { KeyPicker, options };
