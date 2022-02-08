import React from "react";
import BoxList from "./BoxList";
import MiliSavingList from "./MiliSavingList";
import UserInventory from "./UserInventory";
import GatherListContext from "./GatherListContext";

function Store({ children }) {
  return (
    <GatherListContext>
      <UserInventory>
        <BoxList>
          <MiliSavingList>{children}</MiliSavingList>
        </BoxList>
      </UserInventory>
    </GatherListContext>
  );
}

export default Store;
