import React from "react";
import CategoryEl from "./CategoryEl";
import styled from "styled-components";

const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 23px;
  margin-top: 4px;
  background-color: #fff;
  padding: 16px 20px;
  border-radius: 8px;
`;

function Category() {
  const categories = [
    {
      en_Name: "travel",
      kr_Name: "여행",
    },
    {
      en_Name: "electronic",
      kr_Name: "전자기기",
    },
    {
      en_Name: "gift",
      kr_Name: "선물",
    },
    {
      en_Name: "date",
      kr_Name: "데이트",
    },
    {
      en_Name: "clothes",
      kr_Name: "의류",
    },
    {
      en_Name: "vacation",
      kr_Name: "휴가비",
    },
    {
      en_Name: "medical",
      kr_Name: "의료비",
    },
    {
      en_Name: "etc",
      kr_Name: "기타",
    },
  ];

  return (
    <div>
      <div className="SubTitle">무엇을 위해서?</div>
      <CategoryBox>
        {categories.map((El, idx) => (
          <CategoryEl El={El} key={idx} />
        ))}
      </CategoryBox>
    </div>
  );
}

export default Category;
