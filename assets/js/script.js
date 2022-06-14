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
      this.budgetAppForm = document.getElementById("budget-input-form");
      this.budgetAppInput = document.getElementById("budget-input");
      this.budgetAppAmount = document.getElementById("total-budget-amount");
      this.expenseAmount = document.getElementById("total-expense-amount");
      this.balance = document.getElementById("balance");
      this.budgetBalanceAmount = document.getElementById("total-balance-amount");
      this.budgetExpenseForm = document.getElementById("expense-form");
      this.budgetExpenseInput = document.getElementById("expense-input");
      this.budgetAmountInput = document.getElementById("amount-input");
      this.budgetExpenseList = document.getElementById("expense-list");
    }
    // Custom class methods
    /**
     * addBudgetAmount() method.
     * Method to add total budget amount.
     * Must be a positive amount.
     * Must not be null.
     * Timeout displays for 3 seconds then dissapears */ 
     addBudgetAmount() {
        const value = this.budgetAppInput.value;
        if (value === '' || value < 1) {
          this.budgetFeedbackFail.classList.add("showItem");
          this.budgetFeedbackFail.innerHTML = `<p>Budget value cannot be empty or negative, please try again!</p>`;
          // modify variable so that setTimeout func points to the class and not global window object
          const point = this;
          setTimeout(function() {
            point.budgetFeedbackFail.classList.remove('showItem');
          }, 3000);
        }
        else {
            this.budgetFeedbackSuccess.classList.add("showItem");
            this.budgetFeedbackSuccess.innerHTML = `<p>Successfully added budget amount!</p>`;
            const point = this;
            setTimeout(function() {
              point.budgetFeedbackSuccess.classList.remove('showItem');
            }, 3000);
            this.budgetAppAmount.textContent = value;
            this.budgetAppInput.value = '';
            this.showBalance();
        }
    }
    // Method to display the Balance
    showBalance() {
        const expense = this.totalBudgetExpense();
        const total = parseInt(this.budgetAppAmount.textContent) - expense;
        this.budgetBalanceAmount.textContent = total;
        if (total < 0) {
          this.balance.classList.remove('showGreen', 'showBlack');
          this.balance.classList.add('showRed');
        }
        else if (total > 0) {
          this.balance.classList.remove('showGreen', 'showBlack');
          this.balance.classList.add('showGreen');
        }
        else if (total === 0) {
          this.balance.classList.remove('showGreen', 'showRed');
          this.balance.classList.add('showBlack');
        }
    }
    // Method to submit the expense properties
    addExpenseForm() {
        const expenseName = this.budgetExpenseInput.value;
        const expenseAmount = this.budgetAmountInput.value;
        if (expenseAmount === '' || expenseName === '' || expenseAmount < 1) {
            this.expenseFeedbackFail.classList.add('showItem');
            this.expenseFeedbackFail.innerHTML = `<p>Expense value cannot be empty or negative, please try again!</p>`;
            const point = this;
            setTimeout(function() {
            point.expenseFeedbackFail.classList.remove('showItem');
            }, 3000);
        }
        else {
            this.expenseFeedbackSuccess.classList.add('showItem');
            this.expenseFeedbackSuccess.innerHTML = `<p>Expense item added successfully!</p>`;
            let value = parseInt(expenseAmount);
            
            const point = this;
            setTimeout(function() {
            point.expenseFeedbackSuccess.classList.remove('showItem');
            }, 3000);
    
            this.budgetExpenseInput.value = "";
            this.budgetAmountInput.value = "";
            
            const divisor = parseInt(this.budgetAppAmount.textContent);
            const remainder = parseInt(expenseAmount);
            let percent = 0;
            if (divisor > 0) {
                percent = remainder/divisor*100;
            } 
            else {
                percent = "";
            }

            let expenseObj = {
                expenseID:this.budgetItemID,
                expenseTitle:expenseName,
                expenseValue:value,
                expensePercent:percent, 
            }
    
            this.budgetItemID++;
            this.budgetItemList.push(expenseObj);
            // Method to then add display balances on screen w/ expense objects as parameter
            this.addExpenseItem(expenseObj);
            this.showBalance();
        }
    }
    // Method to then add display balances on screen w/ expense objects as parameter
    addExpenseItem(expenseObj) {
        const div = document.createElement('div');
        div.classList.add('expense', 'mt-3', 'mb-3');
        div.innerHTML = `
        <div class="expense-item d-flex justify-content-between align-items-baseline">
           <h6 class="expense-title mb-0 text-uppercase list-item"><i class="fas fa-chevron-right"></i> ${expenseObj.expenseTitle}</h6>
           <h5 class="total-expense-amount mb-0 list-item">€${expenseObj.expenseValue}</h5>
           <div class="expense-icons list-item">
            <a class="btn btn-warning edit-icon btn-group" href="#" role="button" data-id="${expenseObj.expenseID}">Edit</a>
            <a class="btn btn-danger delete-icon btn-group" href="#" role="button" data-id="${expenseObj.expenseID}">Delete</a>
           </div>
           <h5>${expenseObj.expensePercent}%</h5>
        </div>
        `
        this.budgetExpenseList.appendChild(div);
    }
    // Method to calculate and set text for the Total Expense
    totalBudgetExpense() {
        let total = 0;
        if (this.budgetItemList.length > 0) {
            total = this.budgetItemList.reduce((sum, li) => sum + li.expenseValue, 0);
        }
        this.expenseAmount.textContent = total;
        return total;
    }
    // Method that accepts expense item and edits the expense item
    editExpense(element) {
        let id = parseInt(element.dataset.id);
        let parentEl = element.parentElement.parentElement.parentElement;
        this.budgetExpenseList.removeChild(parentEl);
        let expenseItem = this.budgetItemList.filter(function(item) {
            return item.expenseID === id;
        });
        this.budgetExpenseInput.value = expenseItem[0].expenseTitle;
        this.budgetAmountInput.value = expenseItem[0].expenseValue;
        let tempList = this.budgetItemList.filter(function(item) {
            return item.expenseID !== id;
        });
        this.budgetItemList = tempList;
        this.budgetExpenseInput.focus();
        this.showBalance();
    }
    //Method to delete an expense item
    deleteExpense(element) {
        this.expenseFeedbackSuccess.classList.add('showItem');
        this.expenseFeedbackSuccess.innerHTML = `<p>Expense item removed successfully!</p>`;
        const point = this;
        setTimeout(function() {
          point.expenseFeedbackSuccess.classList.remove('showItem');
        }, 3000);
        let id = parseInt(element.dataset.id);
        let parentEl = element.parentElement.parentElement.parentElement;
        this.budgetExpenseList.removeChild(parentEl);
        let tempList = this.budgetItemList.filter(function(item) {
          return item.expenseID !== id;
        });
        this.budgetItemList = tempList;
        this.showBalance();
    }
}

/**
 * Elements selected when DOM loaded.
 * New instance of class also created.
*/
function budgetAppEventListeners() {
    const budgetAppForm = document.getElementById("budget-input-form");
    const budgetExpenseForm = document.getElementById("expense-form");
    const budgetExpenseList = document.getElementById("expense-list");

    // create new instance of BudgetApp class
    const ba = new BudgetApp();

    // create submit event listener on the selected objects
    budgetAppForm.addEventListener('submit', function(event){
        // stop default submit from happening on load
        event.preventDefault();
        ba.addBudgetAmount();
    });
    // create submit event listener on the selected objects
    budgetExpenseForm.addEventListener('submit', function(event){
        // stop submit from happening on load
        event.preventDefault();
        ba.addExpenseForm();
    });
    // create click event listener on the selected objects
    budgetExpenseList.addEventListener('click', function(event){
        if (event.target.classList.contains('edit-icon')) {
            ba.editExpense(event.target)
          }
          else if (event.target.classList.contains('delete-icon')) {
            ba.deleteExpense(event.target)
        }
    });
}

/**Event listener for app that fires callback function to eventListeners() 
when all DOM elements have loaded */
window.addEventListener('DOMContentLoaded', function(){
    budgetAppEventListeners();
});

/*Use and Credit for code used in this project goes to Coding Addict [Coding Addict](https://www.youtube.com/codingaddict) - John Smilga */