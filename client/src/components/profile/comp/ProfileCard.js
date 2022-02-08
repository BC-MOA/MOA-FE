import styled from "styled-components";
import FileUploader from "./FileUploader";
import DueProgressBar from "./DueProgressBar";
import userInfo from "../function/userInfo";

const Card = styled.div`
  width: 100%;
  height: 231px;
  border-radius: 12px;
  background-color: white;
`;

const Info = styled.div`
  display: flex;
  padding: 24px 0;

  font-family: "Pretendard-Regular";
  font-size: 14px;

  justify-content: space-evenly;
  width: 80%;

  .profileimg {
    margin-right: 15px;
  }

  .profileinfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .name {
      font-size: 21px;
      font-weight: 600;
    }

    .rank {
      display: flex;
      margin: 5px 0 10px;

      img {
        margin-right: 5px;
      }
    }
  }
`;

const ProfileCard = (props) => {
  //부대, 입영일, 이름

  const user = {
    name: "최민수",
    unit: "11사단 화랑부대",
    join_date: "2021-09-16",
    //type: "육군",
  };

  //전역일, 호봉, 계급
  const now = new Date("2021-01-16");

  //const user = userInfo(props);
  //params : 입대일, 현재
  const info = userInfo("2019-12-16", now);

  return (
    <Card>
      <Info>
        <div className="profileimg">
          <FileUploader></FileUploader>
        </div>
        <div className="profileinfo">
          <p className="name">{user.name}</p>
          <div className="rank">
            <img
              alt="none"
              src={require("assets/profile/" + info.rank + ".png")}
            ></img>
            <span>
              {info.rank} {info.step}호봉
            </span>
          </div>
          <p>{user.unit}</p>
        </div>
      </Info>
      <DueProgressBar
        now={now}
        join={info.join}
        end={info.end}
      ></DueProgressBar>
    </Card>
  );
};

export default ProfileCard;
