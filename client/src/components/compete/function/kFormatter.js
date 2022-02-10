/**
 * [function] : kFormatter
 * 1000이상의 숫자를 '천' 표기법으로 변환
 *
 * [args]
 * num : 숫자
 *
 * [return]
 * 변환된 숫자 string
 */

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "천"
    : Math.sign(num) * Math.abs(num);
}

export default kFormatter;
