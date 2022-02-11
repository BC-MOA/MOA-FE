import Container from "components/common/Container";
import { Header } from "components/common/Header";
import NavBar from "components/common/NavBar";
import ScrollBox from "components/common/ScrollBox";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
import BubbleContent from "./BubbleContent";
import StoreSvg from "components/gather/addGoal/StoreSvg";
import { UserData } from "store/User";
import StateGather from "components/gather/detail/StateGather";
import { GatherList } from "store/GatherListContext";
import { AllCompete } from "store/CompeteAll";
import { groupBy } from "components/common/utils";

const gatherCategorys = [
  {
    id: 1,
    name: "군적금",
    adText: "은행 최고이율과 국가지원혜택까지 받아보세요.",
  },
  {
    id: 2,
    name: "목표",
    adText: "부대 내에서 목표를 잡고 돈을 모아나가보세요.",
  },
  {
    id: 3,
    name: "비상금",
    adText: "저축하고 남은 돈을 비상금처럼 따로 보관하세요.",
  },
];

function Home() {
  const { userData } = useContext(UserData);
  const { gatherList } = useContext(GatherList);
  const history = useNavigate();
  const [challengeList, setChallengeList] = useState([]);
  const { allCompList } = useContext(AllCompete);
  useEffect(() => {
    setChallengeList([allCompList[0], allCompList[1], allCompList[2]]);
  }, []);

  const filtered = groupBy(gatherList, "savingMode");
  const filteredList = {
    army: filtered["군적금"] ? filtered["군적금"] : [],
    goal: filtered["목표"] ? filtered["목표"] : [],
    safebox: filtered["비상금"] ? filtered["비상금"] : [],
  };

  return (
    <Container>
      <Header $title={true} keys={30} alarm={false}></Header>
      <ScrollBox paddingValue={"24px 0 "}>
        <UserAmountMsg>
          {!userData.id && (
            <>
              <p>안녕하세요</p>
              <p>저축을 시작하려는 군인이시군요!</p>
            </>
          )}
          {userData.id && (
            <>
              <p>{userData.name}님이 지금까지 모은 금액은?</p>
              <div className="num">
                <span className="roboto">
                  {Number("2000").toLocaleString()}
                </span>
                <span>원</span>
                <div className="highlight"></div>
              </div>
            </>
          )}
        </UserAmountMsg>
        <BubbleContent isLogin={true} savingNum={0} />
        {!userData.id &&
          gatherCategorys.map((x) => (
            <AboutGather key={x.id}>
              <div
                className={`icon ${
                  x.name === "군적금"
                    ? "armySaving"
                    : x.name === "목표"
                    ? "goal"
                    : ""
                }`}
              >
                <StoreSvg category={x.name === "목표" ? "여행" : x.name} />
              </div>
              <div className="content">
                <div>{x.name}</div>
                <div className="adText">{x.adText}</div>
              </div>
            </AboutGather>
          ))}
        {userData.id && (
          <>
            {0 !==
            (filteredList.army.length &&
              filteredList.goal.length &&
              filteredList.safebox.length)
              ? [
                  filteredList.army[0],
                  filteredList.goal[0],
                  filteredList.safebox[0],
                ].map((x) => (
                  <StateGather key={x.id} props={x} noneClick={true} />
                ))
              : gatherList
                  .slice(0, 3)
                  .map((x) => (
                    <StateGather key={x.id} props={x} noneClick={true} />
                  ))}
          </>
        )}
        <Btn
          onClick={() => {
            if (!userData.id) {
              history("/login");
            } else {
              history("/gather");
            }
          }}
        >
          {!userData.id ? "저축 시작하기" : "더보기"}
        </Btn>
        <AboutChallenge>
          <div className="mainTitle">
            <span>현재 진행중인 </span>
            <span className="green">인기 챌린지</span>
          </div>
          <div className="challengeList">
            {challengeList &&
              challengeList.map((item) => (
                <div className="challengeItem" key={uuid()}>
                  <img
                    src={require(`assets/compete/${item.thumb}`)}
                    alt="itme.title"
                  />
                  <div className="about">
                    <div className="title">{item.title}</div>
                    <div className="subtitle">
                      <span>
                        {item.versus[0]} vs {item.versus[1]}
                      </span>
                      <div className="tag">
                        <span className="roboto">{item.total}</span>명 참여
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Btn
            onClick={() => {
              history("/compete");
            }}
          >
            더보기
          </Btn>
        </AboutChallenge>
        <AboutReward
          onClick={() => {
            history("/reward");
          }}
          src={require("assets/about_reward.png")}
          alt={"모아박스구경가기"}
        />
      </ScrollBox>
      <NavBar />
    </Container>
  );
}

const Btn = styled.button`
  width: 100%;
  padding: 12px 0;
  margin: 16px 0;
  border-radius: 12px;
  font-family: "Pretendard-Medium";
  font-size: 16px;
  line-height: 25px;
  border: none;
  color: var(--Body_01);
  background-color: var(--Line_03);
`;
const AboutGather = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 17px 16px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  font-family: "Pretendard-SemiBold";
  color: var(--Title_02);
  font-size: 18px;
  line-height: 28px;

  .icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.armySaving {
      path.main {
        fill: var(--a3);
      }
    }
    &.goal {
      path.main {
        fill: var(--subBlue);
      }
    }
  }
  .content {
    flex: 1;
    text-align: left;
  }
  .adText {
    margin-top: 4px;
    font-family: "Pretendard-Regular";
    font-size: 12px;
    line-height: 19px;
    color: var(--Body_01);
  }
  & + & {
    margin-top: 8px;
  }
`;

const AboutChallenge = styled.div`
  margin-top: 24px;
  margin-bottom: 5px;
  .mainTitle {
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    line-height: 28px;
    text-align: start;
    margin-bottom: 20px;

    .green {
      color: var(--a2);
    }
  }
  .challengeList {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 4px;
  }

  .challengeItem {
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
    border-radius: 12px;
    padding: 16px 20px;

    .about {
      margin-left: 12px;
      text-align: start;
      flex-grow: 1;
      .title {
        font-family: "Pretendard-SemiBold";
        font-size: 16px;
        line-height: 25px;
        color: var(--Title_01);
      }
      .subtitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Pretendard-Medium";
        color: var(--Body_01);
        font-size: 14px;
        line-height: 22px;
        .tag {
          display: flex;
          align-items: center;
          background: rgba(76, 175, 91, 0.15);
          border-radius: 8px;
          font-family: "Pretendard-Medium";
          font-size: 12px;
          color: var(--a2);
          padding: 0 8px;
          .roboto {
            font-family: "Roboto";
            font-weight: 500;
            font-size: 13px;
          }
        }
      }
    }
  }
`;
const UserAmountMsg = styled.div`
  color: var(--Title_01);
  text-align: start;
  font-family: "Pretendard-SemiBold";
  line-height: 28px;
  margin-bottom: 20px;
  p {
    font-size: 18px;
  }
  .num {
    width: fit-content;
    font-size: 24px;
    margin-left: 4px;
    font-size: 24px;
    .highlight {
      height: 10px;
      background: #4caf5b;
      opacity: 0.3;
      border-radius: 2px;
      margin-top: -14px;
    }
    .roboto {
      font-family: "Roboto";
      font-weight: bold;
    }
  }
`;
const AboutReward = styled.img`
  width: 100%;
  cursor: pointer;
`;
export default Home;
