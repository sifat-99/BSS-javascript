let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('AND:', eligibleForLoan);

let eligibleForLoanOr = highIncome || goodCreditScore;
console.log('OR:', eligibleForLoanOr);

let applicationRefused = !eligibleForLoan;
console.log('NOT:', applicationRefused);
