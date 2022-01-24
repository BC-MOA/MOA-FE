import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";

function CompDetail(props) {
  const { state } = useLocation();

  console.log(state);

  return (
    <>
      <BackHeader isScrolled={false} title={""} path={-1}></BackHeader>
    </>
  );
}

export default CompDetail;
