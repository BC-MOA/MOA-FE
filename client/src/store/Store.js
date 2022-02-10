import React from "react";
import BoxList from "./BoxList";
import MiliSavingList from "./MiliSavingList";
import UserInventory from "./UserInventory";
import GatherListContext from "./GatherListContext";
import { AllCompeteContext } from "./CompeteAll";
import { MyCompeteContext } from "./CompeteMy";
import User from "./User";

function Store({ children }) {
  return (
    <User>
      <MyCompeteContext>
        <AllCompeteContext>
          <GatherListContext>
            <UserInventory>
              <BoxList>
                <MiliSavingList>{children}</MiliSavingList>
              </BoxList>
            </UserInventory>
          </GatherListContext>
        </AllCompeteContext>
      </MyCompeteContext>
    </User>
  );
}

export default Store;
