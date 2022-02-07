import styled from "styled-components";
import { useForm } from "react-hook-form";
import BackHeader from "components/common/BackHeader";

const StyledBody = styled.div`
  font-family: "Pretendard-Regular";

  text-align: left;

  .title {
    font-weight: 600;
    font-size: 21px;
    margin: 25px 0;
  }

  .type {
    font-size: 14px;
    margin: 10px 0;
  }

  .info {
    font-size: 12px;
    margin: 10px 0;
    color: var(--Body_01);
  }

  .alert {
    font-size: 12px;
    margin: 10px 0;
    color: var(--alert);

    img {
      margin-right: 5px;
    }
  }

  .input {
    background-color: white;
    height: 45px;
    border-radius: 8px;
    width: 90%;
    padding: 0 5%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      border: none;
      width: 80%;
    }
  }

  .phone {
    color: var(Title_01);
    font-size: 16px;
    font-family: Roboto;
  }

  form {
    height: calc(100vh - 150px);

    display: flex;
    flex-direction: column;
  }

  input[type="submit"] {
    width: 100%;
    height: 49px;
    border: none;
    border-radius: 12px;
    margin-top: auto;

    font-family: "Pretendard-Regular";
    font-weight: 600;
    font-size: 16px;

    background-color: var(--a5);
    color: white;
  }

  input[type="submit"]:disabled {
    background-color: var(--Line_02);
    color: var(--Body_03);
  }

  transition: 1s all;

  input[type="submit"]:not(:disabled):hover {
    opacity: 0.5;
  }
`;

const Box = styled.div`
  padding: 15px 0;
`;

const ProfileEdit = () => {
  //context에서 가져온다고 가정
  const default_phone = "01088889999";

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { password: "", passwordck: "", phone: default_phone },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <BackHeader isScrolled={false} title={false} path={-1}></BackHeader>
      <StyledBody>
        <p className="title">내 정보 수정</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <p className="type">새 비밀번호</p>
            <div className="input">
              <input
                {...register("password", {
                  pattern: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{10,20}$/,
                })}
                placeholder="새 비밀번호를 입력해주세요"
                type={"password"}
              />
              <img
                alt="none"
                src={
                  getValues("password") == "" || errors.password
                    ? require("assets/profile/uncheck.svg").default
                    : require("assets/profile/check.svg").default
                }
              ></img>
            </div>
            <p className="info">
              영문, 숫자 포함 10자 이상으로 조합해주세요(최대20자)
            </p>
            {errors.password && (
              <p className="alert">
                <img
                  alt="none"
                  src={require("assets/profile/alert.svg").default}
                ></img>
                적절한 비밀번호 양식이 아닙니다!
              </p>
            )}
          </Box>
          <Box>
            <p className="type">새 비밀번호 확인</p>
            <div className="input">
              <input
                {...register("passwordck", {
                  validate: (value) => value == getValues("password"),
                })}
                placeholder="새 비밀번호를 다시 입력해주세요"
                type={"password"}
              />
              <img
                alt="none"
                src={
                  getValues("passwordck") == "" || errors.passwordck
                    ? require("assets/profile/uncheck.svg").default
                    : require("assets/profile/check.svg").default
                }
              ></img>
            </div>
            {errors.passwordck && (
              <p className="alert">
                <img
                  alt="none"
                  src={require("assets/profile/alert.svg").default}
                ></img>
                비밀번호가 일치하지 않습니다!
              </p>
            )}
          </Box>
          <Box>
            <p className="type">휴대폰번호</p>
            <div className="input">
              <input
                {...register("phone", {
                  pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
                })}
                className={"phone"}
              />
              <img
                alt="none"
                src={
                  getValues("phone") == "" || errors.phone
                    ? require("assets/profile/uncheck.svg").default
                    : require("assets/profile/check.svg").default
                }
              ></img>
            </div>
            {errors.phone && (
              <p className="alert">
                {" "}
                <img
                  alt="none"
                  src={require("assets/profile/alert.svg").default}
                ></img>
                잘못된 휴대폰번호입니다
              </p>
            )}
          </Box>
          <input
            disabled={
              getValues("phone") == default_phone ||
              errors.phone ||
              errors.password ||
              errors.passwordck
            }
            value="수정완료"
            type="submit"
          />
        </form>
      </StyledBody>
    </>
  );
};

export default ProfileEdit;
