import React from "react";
import BoxList from "./BoxList";
import MiliSavingList from "./MiliSavingList";
import UserInventory from "./UserInventory";
import GatherListContext from "./GatherListContext";
import User from "./User";
function Store({ children }) {
  return (
    <User>
      <GatherListContext>
        <UserInventory>
          <BoxList>
            <MiliSavingList>{children}</MiliSavingList>
          </BoxList>
        </UserInventory>
      </GatherListContext>
    </User>
  );
}

export default Store;
