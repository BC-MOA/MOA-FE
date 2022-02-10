import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import Account from "../comp/Account";
import { UserAccount } from "store/UserAccount";
import { useContext } from "react";

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
  const account_data = useContext(UserAccount).userAccount;

  return (
    <>
      <BackHeader isScrolled={false} title={false} path={-1}></BackHeader>
      <Box>
        <Title>내 계좌</Title>
        <Type>입출금 통장</Type>
        <Account list={account_data.account_deposit}></Account>
        <Type>군적금</Type>
        <Account list={account_data.account_install}></Account>
        <Type>제휴 통장</Type>
        <Account list={account_data.account_partner}></Account>
      </Box>
    </>
  );
};

export default ProfileAccount;
