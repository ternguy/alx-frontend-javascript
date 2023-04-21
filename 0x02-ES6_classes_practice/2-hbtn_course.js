export default class HolbertonCourse {
	constructor(name, length, students) {
	if (typeof name !== 'string') throw new TypeError('name must be a string');
	if (!number.isInteger(length)) throw new TypeError('length must be a number');
	if (!Array.isArray(students)) throw new TypeError('students type must be a Array');
		this.name = _name;
		this.length = _length;
		this.students = _students;
	}
	//getter method
	get name() {
		return this._name;
	}
	//setter
	set name(value){
		if (typeof value !== 'string') throw new TypeError('Value must be string');
		this._name = _value;
	}
	//getter method
	get length(){
		return this._length;
	}
	//setter method
	set length(value){
	if (!number.isInteger(value)) throw new TypeError('length nust be a number');
		this._length = value;
	}
	//getter method
	get students() {
		return this.length;
	}
	//setter method on the attribute students
	set students(value) {
		if (!Array.isArray(value)) throw new TypeError('students type must be an Array');
		this._students = value;
	}

}
