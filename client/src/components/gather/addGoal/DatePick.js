import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { subDays } from "date-fns";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  .react-datepicker-popper {
    z-index: 5;
    padding: 0;
  }
  .react-datepicker {
    font-family: "Pretendard-regular";
    button {
      span::before {
        border-color: var(--a1);
      }
    }
    &__input-container {
      input {
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        border-radius: 8px;
        border: none;
        padding: 10px 16px;
        font-family: "Pretendard-Regular";
        font-size: 16px;
        line-height: 25px;

        &::placeholder {
          font-size: 16px;
          line-height: 25px;
          color: #c5c5c5;
        }
      }
    }

    &__header {
      background-color: #4caf5b26;
      border-bottom: none;
      padding: 0;
      .react-datepicker__current-month {
        padding: 10px 0;
      }
      .react-datepicker__day-names {
        background-color: #fff;
      }
      .react-datepicker__day-name {
        font-weight: 700;
        color: var(--a4);
      }
    }
    .react-datepicker__month {
      margin-top: 0;
    }
  }
`;

function DatePick({ inputs, setInputs, placeholder }) {
  const [endDate, setEndDate] = useState(null);

  return (
    <Container>
      <DatePicker
        showPopperArrow={false}
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          setInputs({
            ...inputs,
            eDate: moment(date).endOf("day")._d,
          });
        }}
        minDate={subDays(Date.parse(inputs.sDate), -32)}
        placeholderText={
          placeholder ? placeholder : "목표한 날짜를 선택해주세요."
        }
        dateFormat="yyyy년 MM월 dd일"
        dateFormatCalendar="yyyy년 MM월"
        locale={ko}
      />
    </Container>
  );
}

export default DatePick;
