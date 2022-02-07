/**
 * [function] : prediction
 * 예상획득 열쇠를 계산
 *
 * [args]
 * keys: 배팅된 열쇠 개수 비율 리스트
 * pick: 선택한 대상
 * bet: 내가 베팅한 개수
 *
 * [return]
 * 예상 획득 키 개수
 */

function prediction(keys, pick, bet) {
  const total = keys[0] + keys[1];

  const pickedKey = pick ? keys[0] : keys[1];
  const pickedRatio = (pickedKey / total).toFixed(2);

  return Math.ceil(bet / pickedRatio);
}

export default prediction;
