import styled from "styled-components";
import AccountCard from "./AccountCard";
import { hideScrollBar } from "style/common";

const ListBox = styled.div`
  width: 100%;
  height: 190px;

  ${hideScrollBar}
`;

const Account = ({ list }) => {
  let cardList = [];

  if (list.length != 0) {
    for (const obj of list) {
      cardList.push(<AccountCard obj={obj} id={obj.key}></AccountCard>);
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
