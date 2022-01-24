import React from "react";
import { ReactComponent as Travel } from "assets/goal/travel.svg";
import { ReactComponent as Electronic } from "assets/goal/electronic.svg";
import { ReactComponent as Gift } from "assets/goal/gift.svg";
import { ReactComponent as Date } from "assets/goal/date.svg";
import { ReactComponent as Clothes } from "assets/goal/clothes.svg";
import { ReactComponent as Vacation } from "assets/goal/vacation.svg";
import { ReactComponent as Medical } from "assets/goal/medical.svg";
import { ReactComponent as Etc } from "assets/goal/etc.svg";

function StoreSvg({ en_Name, name }) {
  const icons = {
    travel: Travel,
    electronic: Electronic,
    gift: Gift,
    date: Date,
    clothes: Clothes,
    vacation: Vacation,
    medical: Medical,
    etc: Etc,
  };

  const SvgName = icons[en_Name];

  return (
    <>
      <SvgName />
    </>
  );
}

export default StoreSvg;
