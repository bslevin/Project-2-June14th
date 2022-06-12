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
    // Custom class methods
    /**
     * addBudgetAmount() method.
     * Method to add total budget amount.
     * Must be a positive amount.
     * Must not be null.
     * Timeout displays for 3 seconds then dissapears */ 
     addBudgetAmount() {
        const value = this.budgetInput.value;
        if (value === '' || value < 1) {
          this.budgetFeedbackFail.classList.add("showItem");
          this.budgetFeedbackFail.innerHTML = `<p>Budget value cannot be empty or negative, please try again!</p>`;
          // modify variable so that setTimeout func points to the class and not global window object
          const point = this;
          setTimeout(function() {
            point.budgetFeedbackFail.classList.remove('showItem')
          }, 3000)
        }
        else {
            this.budgetFeedbackSuccess.classList.add("showItem");
            this.budgetFeedbackSuccess.innerHTML = `<p>Successfully added budget amount!</p>`;
            const point = this;
            setTimeout(function() {
              point.budgetFeedbackSuccess.classList.remove('showItem')
            }, 3000)
            this.budgetAmount.textContent = value;
            this.budgetInput.value = '';

        }
    }
}

/**
 * Elements selected when DOM loaded.
 * New instance of class also created.
*/
function budgetAppEventListeners() {
    const budgetForm = document.getElementById("budget-input-form");
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    // create new instance of BudgetApp class
    const ba = new BudgetApp()

    // create submit event listener on the selected objects
    budgetForm.addEventListener('submit', function(event){
        // stop default submit from happening on load
        event.preventDefault();
        ba.addBudgetAmount();
    })
    // create submit event listener on the selected objects
    expenseForm.addEventListener('submit', function(event){
        // stop submit from happening on load
        event.preventDefault();
    })
    // create click event listener on the selected objects
    expenseList.addEventListener('click', function(event){

    });
}

/**Event listener for app that fires callback function to eventListeners() 
when all DOM elements have loaded */
window.addEventListener('DOMContentLoaded', function(){
    budgetAppEventListeners();
})