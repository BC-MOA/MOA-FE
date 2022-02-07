import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import Account from "../comp/Account";

const data = {
  account_deposit: [
    {
      key: 1,
      account: "KB나라사랑우대통장",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
    },
    {
      key: 2,
      account: "KB나라사랑우대통장",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
    },
    {
      key: 3,
      account: "KB나라사랑우대통장",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
    },
  ],
  account_install: [
    {
      key: 1,
      account: "KB나라사랑우대통장",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
    },
    {
      key: 2,
      account: "KB나라사랑우대통장",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
    },
  ],
  account_partner: [],
};

const Title = styled.p`
  font-family: "Pretendard-Regular";
  font-weight: 600;
  font-size: 21px;

  margin: 25px 0;
`;

const Box = styled.div`
  font-family: "Pretendard-Regular";

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Type = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 15px 0;
`;

const ProfileAccount = () => {
  return (
    <>
      <BackHeader isScrolled={false} title={false} path={-1}></BackHeader>
      <Box>
        <Title>내 계좌</Title>
        <Type>입출금 통장</Type>
        <Account list={data.account_deposit}></Account>
        <Type>군적금</Type>
        <Account list={data.account_install}></Account>
        <Type>제휴 통장</Type>
        <Account list={data.account_partner}></Account>
      </Box>
    </>
  );
};

export default ProfileAccount;
