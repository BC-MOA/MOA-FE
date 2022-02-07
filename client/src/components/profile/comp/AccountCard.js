import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  height: 80px;
  background-color: white;
  border-radius: 12px;
  margin: 10px 0;

  padding: 0 5%;

  display: flex;
  //justify-content: center;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;

    * {
      margin: 3px 0;
    }

    .sum {
      font-family: "Pretendard-SemiBold";
      font-size: 16px;
      color: var(--Title_02);
    }

    .account {
      font-family: "Pretendard-Regular";
      font-size: 14px;
      color: var(--Body_01);
    }
  }
`;

const AccountCard = ({ id, obj }) => {
  const moneyFormatter = new Intl.NumberFormat();

  const styledSum = moneyFormatter.format(obj.sum);

  return (
    <Card key={id}>
      <img src={obj.thumb}></img>
      <div className="content">
        <div className="sum">{styledSum}원</div>
        <div className="account">{obj.account}</div>
      </div>
    </Card>
  );
};

export default AccountCard;
