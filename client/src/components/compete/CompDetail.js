import { useLocation } from "react-router-dom";

function CompDetail(props) {
  const { state } = useLocation();

  //const id = props ? props.match.params.id : "none";
  console.log(state);
  return <div>세부 페이지입니다</div>;
}

export default CompDetail;
