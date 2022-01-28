function prediction(keys, pick, bet) {
  const total = keys[0] + keys[1];

  const pickedKey = pick ? keys[0] : keys[1];
  const pickedRatio = (pickedKey / total).toFixed(2);

  return Math.floor(bet / pickedRatio);
}

export default prediction;
