import React from "react";
import { ReactComponent as Travel } from "assets/goal/travel.svg";
import { ReactComponent as Electronic } from "assets/goal/electronic.svg";
import { ReactComponent as Gift } from "assets/goal/gift.svg";
import { ReactComponent as Date } from "assets/goal/date.svg";
import { ReactComponent as Clothes } from "assets/goal/clothes.svg";
import { ReactComponent as Vacation } from "assets/goal/vacation.svg";
import { ReactComponent as Medical } from "assets/goal/medical.svg";
import { ReactComponent as Etc } from "assets/goal/etc.svg";
import { ReactComponent as Bankbook } from "assets/goal/bankbook.svg";
import { ReactComponent as Safebox } from "assets/goal/safebox.svg";

function StoreSvg({ category }) {
  const icons = {
    여행: Travel,
    전자기기: Electronic,
    선물: Gift,
    데이트: Date,
    의류: Clothes,
    휴가비: Vacation,
    의료비: Medical,
    기타: Etc,
    군적금: Bankbook,
    비상금: Safebox,
  };

  const SvgName = icons[category];

  return (
    <>
      <SvgName />
    </>
  );
}

export default StoreSvg;
