function filterAccount(accountList) {
  const inoutAccount = accountList.filter(
    (obj) => obj.accountType === "입출금"
  );

  const installAcount = accountList.filter(
    (obj) => obj.accountType === "예적금"
  );
  const interlockAccount = accountList.filter(
    (obj) => obj.accountType === "제휴"
  );

  return {
    inout: inoutAccount,
    install: installAcount,
    interlock: interlockAccount,
  };
}

export default filterAccount;
