import moment from "moment";

export const calcAmount = (inputs) => {
  const { deadline, howOften: method, amount } = inputs;

  const now = new Date();

  switch (method) {
    case "매월 10일":
      let monthCnt = deadline.getMonth() - now.getMonth() + 1;
      if (now.getDate() > 10) {
        monthCnt -= 1;
      }
      if (deadline.getDate() < 10) {
        monthCnt -= 1;
      }

      return priceFormat(monthCnt * amount);

    case "매주 월요일":
      let sDate = "";
      if (now.getDay() > 1) {
        sDate = moment(now).day(8)._d;
      } else {
        sDate = moment(now).day(1)._d;
      }

      const eDate = moment(deadline).day(1)._d;
      const weekCnt = moment(eDate).diff(moment(sDate), "weeks") + 2;
      return priceFormat(weekCnt * amount);

    case "매일":
      const dayCnt = Math.ceil(
        (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );
      return priceFormat(dayCnt * amount);

    default:
      break;
  }
};

export const priceFormat = (input) => {
  //   const str = String(input);
  //   return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  const comma = (input) => {
    input = String(input);
    return input.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };
  const uncomma = (input) => {
    input = String(input);
    return input.replace(/[^\d]+/g, "");
  };
  return comma(uncomma(input));
};
