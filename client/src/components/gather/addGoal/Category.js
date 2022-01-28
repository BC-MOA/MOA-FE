import React from "react";
import CategoryEl from "./CategoryEl";
import styled from "styled-components";

const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 23px;
  background-color: #fff;
  padding: 16px 20px;
  border-radius: 8px;
`;

function Category({ inputs, setInputs }) {
  const categories = [
    "여행",
    "전자기기",
    "선물",
    "데이트",
    "의류",
    "휴가비",
    "의료비",
    "기타",
  ];

  return (
    <>
      <CategoryBox>
        {categories.map((El, idx) => (
          <CategoryEl El={El} key={idx} inputs={inputs} setInputs={setInputs} />
        ))}
      </CategoryBox>
    </>
  );
}

export default Category;
