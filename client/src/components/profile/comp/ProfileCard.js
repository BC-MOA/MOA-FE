import styled from "styled-components";
import FileUploader from "./FileUploader";
import DueProgressBar from "./DueProgressBar";

const Card = styled.div`
  width: 335px;
  height: 231px;
  border-radius: 12px;
  background-color: white;
`;

const Info = styled.div`
  display: flex;
  padding: 24px 16px;

  font-family: "Pretendard-Regular";
  font-size: 14px;

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

const rank_list = ["이병", "일병", "상병", "병장"];

const ProfileCard = (props) => {
  const user = props.user;

  return (
    <Card>
      <Info>
        <div className="profileimg">
          <FileUploader></FileUploader>
        </div>
        <div className="profileinfo">
          <p className="name">{user.name}</p>
          <div className="rank">
            <img src={require("assets/profile/" + user.rank + ".png")}></img>
            <span>
              {rank_list[user.rank - 1]} {user.pay_step}호봉
            </span>
          </div>
          <p>{user.unit}</p>
        </div>
      </Info>
      <DueProgressBar type={user.type} join={user.join_date}></DueProgressBar>
    </Card>
  );
};

export default ProfileCard;
