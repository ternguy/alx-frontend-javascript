export default class Currency() {
	constuctor(code,name){
		this._code = code;
		this._name = name;
	}
	//getter method on code
	get code () {

		return this._code;
	}
	//setter 
	set code (cd)
	{
		this._code = cd;
	}

	//getter method on name
	get name() {

		return this._name;
	}
	//setter
	set name(N)
	{
		this._name = N;
	}
	displayFullCurrency ()
	{
		return `${this.name} ${this.code}`;
	}
}
