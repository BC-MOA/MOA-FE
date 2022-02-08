import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import Account from "../comp/Account";
import { data_case3 } from "components/interlock/data";

//계좌연동(interlock) data를 가져다 쓰고 있음!

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
        <Account list={data_case3.account_deposit}></Account>
        <Type>군적금</Type>
        <Account list={data_case3.account_install}></Account>
        <Type>제휴 통장</Type>
        <Account list={data_case3.account_partner}></Account>
      </Box>
    </>
  );
};

export default ProfileAccount;
