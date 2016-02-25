

var transferService = (function () {
	var newAccount;

	function registerNewAccount(person, accountName, balance) {
		if (balance < 0){
			throw("Отрицательный баланс!");
		}
		account = new Account;
		account._accountName = accountName;
		account._person  = person;
		account._balance = balance;
		var today;
		account._lastOperation = dates.currDate(today);
		account._isActivated = true;
		console.log("Операция выполнена успешно!");
		return account;
   	}


   	function transferNewSumm (accountFrom, accountTo, summ){
   	   	if (( accountFrom._balance - summ ) < 0){
   	   		throw("Недостаточно денег на счету!");
   	   	}

   	   	if (accountFrom._isActivated == false ) {
   	   		throw("Аккаунт еще не активирован!");
   	   	}
   	   	if (accountTo._isActivated == false ) {
   	   		throw("Аккаунт еще не активирован!");
   	   	}

   	   	accountFrom._balance = accountFrom._balance - summ;
   	   	accountTo._balance = accountTo._balance + summ;
   	   	var today;
   	   	today = dates.currDate(today);
   	   	accountFrom._lastOperation = today;
   	   	accountTo._lastOperation = today;
   	   	console.log("Операция выполнена успешно!");
   }

   	function  getPersonAccounts(person){
   	   	return person._accounts;
   	}

   return {
       register: registerNewAccount,
  	   transfer: transferNewSumm,
	   getAccounts: getPersonAccounts
     
   }
})();