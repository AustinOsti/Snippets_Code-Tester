//Constructors

function Members(name, age, hobby) {
	this.name = name;
	this.age = age;
	this.hobby = hobby;
};

Members.prototype.summary = function(){
	return this.name+' is '+this.age+' and likes '+this.hobby;
};

var guy1 = new Members('Austin', 12, 'sleeping');
var guy2 = new Members('James', 20, 'eating');

console.log(guy1);
console.log(guy2);

console.log(guy2.summary());