import React from "react";
import BoxList from "./BoxList";
import MiliSavingList from "./MiliSavingList";
import UserInventory from "./UserInventory";

function Store({ children }) {
  return (
    <UserInventory>
      <BoxList>
        <MiliSavingList>{children}</MiliSavingList>
      </BoxList>
    </UserInventory>
  );
}

export default Store;
