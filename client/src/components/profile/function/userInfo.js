/**
 * 입대일: 2021년 9월 16일
 * 자대배치 일자(입대 5주 뒤): 10월 21일
 * 제대일: 2023년 3월 15일 (545일, 18개월 근무)
 * 현재 날짜: 2022년 1월 27일 (목) (D-411)
 *
 * [개월수]
 * 이병: 2
 * 일병: 5
 * 상병: 5
 * 병장: 6
 */

const rank_list = ["이병", "일병", "상병", "병장", "예비역"];

function monthDiff(dateFrom, dateTo) {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

function userInfo(join_date, now) {
  const joinDate = new Date(join_date);

  //전역일
  const endDate_ = new Date(join_date);
  const endDate = new Date(endDate_.setDate(joinDate.getDate() + 575));

  //호봉 : 각 계급이 된 개월 수
  //계급
  const class1_ = new Date(join_date);
  const class2_ = new Date(join_date);
  const class3_ = new Date(join_date);

  const class1 = new Date(class1_.setMonth(joinDate.getMonth() + 2));
  const class2 = new Date(class2_.setMonth(joinDate.getMonth() + 7));
  const class3 = new Date(class3_.setMonth(joinDate.getMonth() + 12));

  let rank;
  let step;

  if (now < class1) {
    step = monthDiff(joinDate, now);
    rank = rank_list[0];
  } else if (class1 <= now && now < class2) {
    step = monthDiff(class1, now);
    rank = rank_list[1];
  } else if (class2 <= now && now < class3) {
    step = monthDiff(class2, now);
    rank = rank_list[2];
  } else if (class3 <= now && now < endDate) {
    step = monthDiff(class3, now);
    rank = rank_list[3];
  } else if (now >= endDate) {
    step = "";
    rank = rank_list[4];
  }

  console.log(step, rank);

  return {
    join: joinDate,
    end: endDate,
    step: step,
    rank: rank,
    now: now,
  };
}

export default userInfo;
