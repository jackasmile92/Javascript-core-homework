

var transferService = (function () {
	function registerNewAccount(person, account, balance) {
		if (balance < 0){
			throw("Отрицательный баланс!");
		}
		account.person  = person;
		account.balance = balance;
		var today;
		account.lastOperation = dates.currDate(today);
		account.isActivated = true;
		console.log("Операция выполнена успешно!");
		person.accounts.push(account);

		return account;
   	}


   	function transferNewSumm (accountFrom, accountTo, summ){
   	   	if (( accountFrom.balance - summ ) < 0){
   	   		throw("Недостаточно денег на счету!");
   	   	}

   	   	if (accountFrom.isActivated == false ) {
   	   		throw("Аккаунт еще не активирован!");
   	   	}
   	   	if (accountTo.isActivated == false ) {
   	   		throw("Аккаунт еще не активирован!");
   	   	}

   	   	accountFrom.balance = accountFrom.balance - summ;
   	   	accountTo.balance = accountTo.balance + summ;
   	   	var today;
   	   	today = dates.currDate(today);
   	   	accountFrom.lastOperation = today;
   	   	accountTo.lastOperation = today;
   	   	console.log("Перевод денег со счета "+ accountFrom.person.name + " ("+accountFrom.accountName+
   	   				") в размере " + summ + " на счет " + accountTo.person.name + 
   	   				" ("+ accountTo.accountName + ") прошел успешно!");
   	 
   }

   	function  getPersonAccounts(person){
   	   	return person.accounts;
   	}

   return {
       register: registerNewAccount,
  	   transfer: transferNewSumm,
	   getAccounts: getPersonAccounts
     
   }
})();