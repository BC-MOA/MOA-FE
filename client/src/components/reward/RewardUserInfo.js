import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "store/User";
import { UserInventoryData } from "store/UserInventory";
import styled from "styled-components";

function RewardUserInfo() {
  const history = useNavigate();
  const { userData } = useContext(UserData);
  const { userBoxList, userRewardList } = useContext(UserInventoryData);

  return (
    <UserInfo>
      <div className="userKeyNum">
        <div className="header">
          <img src={require("assets/ic_key_big.svg").default} alt="" />
          {!userData.id && <span>{"0"}</span>}
          {userData.id && <span>{userData?.key}</span>}
        </div>
        <div className="infoTitle">내 열쇠 개수</div>
      </div>
      <label
        onClick={() => {
          if (!userData.id) {
            history("/login");
          } else {
            history(`/reward/${userData.id}`);
          }
        }}
        className="userRewardNum"
      >
        <div className="header">
          {!userData.id && <span>{"0"}</span>}
          {userData.id && (
            <span>{userBoxList.length + userRewardList.length}</span>
          )}
        </div>
        <div className="infoTitle">
          <span>내 보관함</span>
          <img
            src={require("assets/reward/ic_to_more.svg").default}
            alt={"보관함이동"}
          />
        </div>
      </label>
    </UserInfo>
  );
}
const UserInfo = styled.div`
  display: flex;
  justify-content: start;
  gap: 40px;
  margin-bottom: 24px;
  label.userRewardNum {
    cursor: pointer;
  }
  .header {
    height: 28px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 21px;
    line-height: 28px;
    vertical-align: bottom;
    color: var(--Title_01);
    margin-bottom: 5px;
    text-align: start;
    img {
      width: 28px;
    }
  }
  .infoTitle {
    display: flex;
    align-items: center;
    font-family: "Pretendard-Medium";
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_01);
  }
`;
export default RewardUserInfo;
