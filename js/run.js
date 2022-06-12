/**
* Main project class.
* Presets properties of class constructor to select elements from the DOM.
* Constructor method is run everytime the class is instantiated and contains the below properties. 
*/
class BudgetApp {
    constructor() {
      this.budgetItemList = [];
      this.budgetItemID = 0;
      this.budgetFeedbackFail = document.querySelector(".budget-feedback-failed");
      this.budgetFeedbackSuccess = document.querySelector(".budget-feedback-success");
      this.expenseFeedbackFail = document.querySelector(".expense-feedback-failed");
      this.expenseFeedbackSuccess = document.querySelector(".expense-feedback-success");
      this.budgetForm = document.getElementById("budget-input-form");
      this.budgetInput = document.getElementById("budget-input");
      this.budgetAmount = document.getElementById("total-budget-amount");
      this.expenseAmount = document.getElementById("total-expense-amount");
      this.balance = document.getElementById("balance");
      this.balanceAmount = document.getElementById("total-balance-amount");
      this.expenseForm = document.getElementById("expense-form");
      this.expenseInput = document.getElementById("expense-input");
      this.amountInput = document.getElementById("amount-input");
      this.expenseList = document.getElementById("expense-list");
    }
}

/**Event listener for app that fires callback function to eventListeners() 
when all DOM elements have loaded */
window.addEventListener('DOMContentLoaded', function(){
    budgetAppEventListeners();
})