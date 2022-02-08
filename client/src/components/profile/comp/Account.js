import styled from "styled-components";
import AccountCard from "./AccountCard";

const ListBox = styled.div`
  width: 100%;
`;

const Account = ({ list }) => {
  let cardList = [];

  if (list.length != 0) {
    for (const obj of list) {
      cardList.push(<AccountCard obj={obj} key={obj.key}></AccountCard>);
    }
  }

  return (
    list.length != 0 && (
      <ListBox>
        <div>{cardList}</div>
      </ListBox>
    )
  );
};

export default Account;
