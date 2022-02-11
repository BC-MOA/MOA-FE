import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserData } from "store/User";
import { UserAccount } from "store/UserAccount";
import styled from "styled-components";
import ApplyDataCard from "./ApplyDataCard";

function AddMoaSavingSuccess() {
  const history = useNavigate();
  const { state: savingType } = useLocation();
  const { updateUserData } = useContext(UserData);
  const { userAccount, setUserAccount } = useContext(UserAccount);
  return (
    <Container>
      <ScrollBox paddingValue={"80px 0 114px "}>
        <SuccessIcon>
          <img
            className="animate__animated animate__flipInX "
            src={require("assets/gather/ic_big_check.svg").default}
            alt="성공"
          />
        </SuccessIcon>
        <Notice>입출금통장이 개설됐어요</Notice>
        <CharacterImg>
          <img
            src={require("assets/army_character.svg").default}
            alt="군인캐릭터"
          />
        </CharacterImg>
        <ApplyDataCard></ApplyDataCard>
      </ScrollBox>
      <SubmitButton
        title={"확인"}
        onClickFunc={() => {
          const data = {
            accountType: "제휴",
            accountName: "모아(MOA)입출금 통장",
            bankName: "KEB 하나은행",
            accountNumber: "123-456-78-910111",
            currentAmount: 0,
            bankImageUrl:
              "https://raw.githubusercontent.com/BuenCamino3rd/test/d42a6f54e323fa3ed83729e8d294460253d53910/image/hana.svg",
          };
          updateUserData({ userInterlock: [data] });
          const temp = userAccount;
          temp.interlock.push(data);
          setUserAccount(temp);
          if ("목표" === savingType) {
            history("/gather/add-goal");
          } else {
            history("/gather/add-safebox");
          }
        }}
        isActive={true}
      ></SubmitButton>
    </Container>
  );
}
const SuccessIcon = styled.div`
  margin-bottom: 10px;
`;
const Notice = styled.div`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 24px;
`;

const CharacterImg = styled.div`
  height: 64px;
  overflow: hidden;
  text-align: end;
`;

export default AddMoaSavingSuccess;
