const loan_term = document.getElementById("loan-term");

const loan = document.getElementById("loan");
const display = document.getElementById("display");
const monthly = document.getElementById("monthly")
loan.addEventListener("submit", function (e) {
  e.preventDefault();

  const loan_amount = loan.elements["loan-amount"].value;
  const loan_interest = loan.elements["loan-interest"].value;
  const loan_term = loan.elements["loan-term"].value;

  const calculate = loan_amount * (loan_interest / 100) * loan_term;

  monthly.textContent = `Monthly Payment PHP: ${calculate}`;

  


});
