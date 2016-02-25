function Account(accountName){
	this._accountName = accountName;
	this._person = new Person;
	this._lastOperation = ''; 
	this._balance = 0; 
	this._isActivated = false;
}