function PopUp(props) {
  return (
    <div className="popup-box">
      <div>
        <p>제목</p>
        <p>베팅을 정말 취소하시겠어요?</p>
        <div>
          <button>아니요</button>
          <button>예</button>
        </div>
      </div>
    </div>
  );
}

const styledPopUp = styled(PopUp)`
  .popup-box {
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;
