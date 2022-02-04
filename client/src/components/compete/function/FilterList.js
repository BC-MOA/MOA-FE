import EndCompeteCard from "../comp/Card/EndCompeteCard";
import BetCompeteCard from "../comp/Card/BetCompeteCard";
import BasicCompeteCard from "../comp/Card/BasicCompeteCard";

/**
 * [function] : filterExpired
 * 만료된 챌린지 분류
 *
 * [args]
 * done : bool - 만료 filter 여부
 * compList : 챌린지 리스트
 *
 * [return]
 * 분류된 챌린지 리스트
 */
function filterExpired(done, compList) {
  let filterdList;

  const now = new Date();

  //ing
  if (!done) {
    filterdList = compList.filter((obj) => obj.due > now);
  }
  //done
  else {
    filterdList = compList.filter((obj) => obj.due < now);
  }

  return filterdList;
}

/**
 * [function] : filterList
 * 만료된 챌린지 분류 -> 컴포넌트 생성
 *
 * [args]
 * condition : bool/string - filter 되는 조건
 * compList : 챌린지 리스트
 *
 * [return]
 * 분류된 챌린지 컴포넌트 리스트
 */
function createCardList(condition, compList) {
  let filterdList = [];
  let cardList = [];

  //조건이 boolean이면 내 챌린지, 아니면 전체 챌린지
  if (typeof condition == "boolean") {
    //만료일 filter
    filterdList = filterExpired(condition, compList);

    //최신순으로 정렬
    filterdList = filterdList.sort((a, b) => b.due - a.due);

    for (const obj of filterdList) {
      cardList.push(
        condition ? (
          <EndCompeteCard type={false} key={obj.key} obj={obj}></EndCompeteCard>
        ) : (
          <BetCompeteCard key={obj.key} obj={obj}></BetCompeteCard>
        )
      );
    }
  } else {
    switch (condition) {
      case "done":
        filterdList = filterExpired(true, compList);
        filterdList = filterdList.sort((a, b) => b.due - a.due);

        break;
      case "popular":
        filterdList = filterExpired(false, compList);
        filterdList = filterdList.sort(
          (a, b) => parseInt(b.total) - parseInt(a.total)
        );

        break;
      case "recent":
        filterdList = filterExpired(false, compList);
        filterdList = filterdList.sort((a, b) => b.due - a.due);
        break;
    }

    for (const obj of filterdList) {
      cardList.push(
        condition != "done" ? (
          <BasicCompeteCard key={obj.key} obj={obj}></BasicCompeteCard>
        ) : (
          <EndCompeteCard type={true} key={obj.key} obj={obj}></EndCompeteCard>
        )
      );
    }
  }

  return cardList;
}

export default createCardList;
