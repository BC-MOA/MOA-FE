import moment from "moment";

export const calcAmount = (inputs) => {
  const { sDate, eDate, howOften: method, amount } = inputs;

  switch (method) {
    case "매월 10일":
      let monthCnt = (eDate.getYear() - sDate.getYear()) * 12;
      monthCnt += eDate.getMonth() - sDate.getMonth() + 1;
      if (sDate.getDate() > 10) {
        monthCnt -= 1;
      }
      if (eDate.getDate() < 10) {
        monthCnt -= 1;
      }

      return monthCnt * amount;

    case "매주 월요일":
      let calc_sDate = "";
      if (sDate.getDay() > 1) {
        calc_sDate = moment(sDate).day(8)._d;
      } else {
        calc_sDate = moment(sDate).day(1)._d;
      }

      const calc_eDate = moment(eDate).day(1)._d;
      const weekCnt = moment(calc_eDate).diff(moment(calc_sDate), "weeks") + 1;
      return weekCnt * amount;

    case "매일":
      const dayCnt = calc_days(sDate, eDate);
      return dayCnt * amount;

    default:
      break;
  }
};

export const calc_dDay = (sDate, eDate) => {
  return moment(eDate).diff(moment(sDate), "days");
};

export const calc_days = (sDate, eDate) => {
  return moment(eDate).diff(moment(sDate), "days") + 1;
};
