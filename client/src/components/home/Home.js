import Container from "components/common/Container";
import { Header } from "components/common/Header";
import NavBar from "components/common/NavBar";
import ScrollBox from "components/common/ScrollBox";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
import BubbleContent from "./BubbleContent";
import axios from "axios";

function Home() {
  const history = useNavigate();
  const [challengeList, setChallengeList] = useState([]);
  useEffect(() => {
    // todo 인기 챌린지 받아오기
    setChallengeList([
      { name: "1", type1: "A", type2: "B", 참여자: "100" },
      { name: "2", type1: "A", type2: "B", 참여자: "200" },
      { name: "3", type1: "A", type2: "B", 참여자: "300" },
    ]);
  }, []);
  useEffect(() => {
    axios
      .get("/v1/hello")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Header title={true} keys={30} alarm={false}></Header>
      <ScrollBox paddingValue={"24px 0 "}>
        <UserAmountMsg>
          <p>{"민수"}님이 지금까지 모은 금액은?</p>
          <div className="num">
            <span className="roboto">{Number(200000).toLocaleString()}</span>
            <span>원</span>
            <div className="highlight"></div>
          </div>
        </UserAmountMsg>
        <BubbleContent savingNum={0} />
        {/* <AboutMoa
            src={require("assets/about_moa.png")}
            alt={"모아이용방법확인하기"}
          /> */}
        {/* 공통 */}
        <AboutChallenge>
          <div className="mainTitle">
            <span>현재 진행중인 </span>
            <span className="green">인기 챌린지</span>
          </div>
          <div className="challengeList">
            {challengeList &&
              challengeList.map((item) => (
                <div className="challengeItem" key={uuid()}>
                  <img src={require("./example.png")} alt="" />
                  <div className="about">
                    <div className="title">{item.name}</div>
                    <div className="subtitle">
                      <span>
                        {item.type1} vs {item.type2}
                      </span>
                      <div className="tag">
                        <span className="roboto">{item.참여자}</span>명 참여
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={() => {
              history("/compete");
            }}
          >
            더보기
          </button>
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
// style

// const AboutMoa = styled.img`
//   display: block;
//   margin-bottom: 54px;
// `;
const AboutChallenge = styled.div`
  margin-bottom: 40px;
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
    margin-bottom: 12px;
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
  button {
    width: 100%;
    padding: 12px 0;
    border-radius: 12px;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    line-height: 25px;
    border: none;
    color: var(--Body_01);
    background-color: var(--Line_03);
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
