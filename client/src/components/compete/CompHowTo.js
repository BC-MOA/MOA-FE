import styled from "styled-components";
import BackHeader from "components/common/BackHeader";

const Page = styled.div`
  background-color: white;
  border-radius: 2px;

  padding-top: 20px;
`;

const LogoBox = styled.div`
  border-bottom: 1px solid var(--Line_02);

  width: 80%;
  margin: 0 auto;

  padding: 20px 0 10px;

  p {
    padding: 10px 0;
    font-size: 21px;
    font-family: "Pretendard-Regular";
    font-weight: 600;
  }
`;

const StepBox = styled.div`
  padding: 30px 0 20px;

  width: 250px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
`;

const StepTextBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;

  .text {
    font-size: 16px;
    font-family: "Pretendard-SemiBold";

    margin-bottom: 18px;
  }

  .text:nth-child(4) {
    margin-bottom: 5px;
  }
`;

const BottomBox = styled.div`
  background-color: var(--Body_04);
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px 10px;

  .title {
    font-size: 16px;
    font-family: "Pretendard-Medium";
    color: var(--Title_01);
  }

  .caution {
    font-size: 12px;
    font-family: "Pretendard-Regular";

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 15px 0;
  }

  p {
    margin: 4px 0;
    color: var(--Title_02);
  }

  .caution p:not(:first-of-type) {
    padding-left: 12px;
  }
`;

const Panel = styled.img`
  width: 140px;
  height: 87px;
  align-self: flex-end;
`;

const Number = styled.div`
  background-color: var(--Line_03);
  width: 18px;
  height: 18px;

  border-radius: 50%;

  text-align: center;
  line-height: 18px;

  margin-right: 14px;
  margin-bottom: 15px;

  font-size: 12px;
  font-family: "Roboto";
`;

function CompHowTo() {
  return (
    <>
      <BackHeader isScrolled={false} title={""} path={-1}></BackHeader>
      <Page>
        <LogoBox>
          <img src={require("assets/compete/moa.svg").default}></img>
          <p>챌린지 참여 방법</p>
        </LogoBox>
        <StepBox>
          <div>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Number>4</Number>
          </div>
          <StepTextBox>
            <p className="text">참여하고 싶은 챌린지 선택</p>
            <p className="text">베팅할 쪽 선택</p>
            <p className="text">열쇠 베팅하기 (1~5개)</p>
            <p className="text">챌린지 마감 후 베팅 성공 시</p>
            <p className="text">내 배팅률만큼 열쇠 획득!</p>
          </StepTextBox>
        </StepBox>
        <BottomBox>
          <p className="title">꼭 확인해주세요</p>
          <div className="caution">
            <p>&bull; 사행성 조장 방지를 위해 베팅 가능한 열쇠 개수는</p>
            <p>최대 5개로 제한하였습니다.</p>
          </div>
          <div className="caution">
            <p>&bull; 열쇠 분배 방식</p>
            <p>내가 건 열쇠 개수 / 내가 건 쪽의 베팅률 %</p>
            <p>ex) 3개 베팅/ 내가 건 쪽 최종 베팅률 56%(=0.56) = 4.61</p>
            <p>여기에서 소수점은 버리고 계산되어</p>
            <p>최종적으로는 베팅 성공 시 열쇠 4개 획득</p>
          </div>
          <Panel src={require("assets/compete/panel.png")}></Panel>
        </BottomBox>
      </Page>
    </>
  );
}

export default CompHowTo;
