import React, { useState } from "react";
import styled from "styled-components";

const StyledFileInput = styled.label`
  cursor: pointer;
  input {
    display: none;
  }

  img {
    width: 80px;
    height: 80px;

    border-radius: 50%;
  }
`;

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const changeHandler = (event) => {
    setFile(event.target.files[0]);

    //파일 검사

    //api 호출해서 제출
  };

  return (
    <StyledFileInput>
      <img
        alt="none"
        src={
          file
            ? URL.createObjectURL(file)
            : require("assets/profile/fileinput.png")
        }
      ></img>
      <input type="file" name="file" onChange={changeHandler} />
    </StyledFileInput>
  );
};

export default FileUploader;
