var s1 = 'Hello';
//console.log(typeof(s1));

var s2 = new String('Hello');
//console.log(typeof(s2));

//console.log(window);

//window.alert(1);

//Object literal
var person1 = {
	'name': 'Austin',
	'age': 12,
	'hobbies': function() {
		return this.name+ ' is '+this.age+' and likes sleeping'
	}
};

var person2 = {
	'name': 'James',
	'age': 20,
	'hobbies': function() {
		return this.name + ' is '+this.age+' and likes eating'
	}
};

 console.log(Object.keys(person1));
 console.log(Object.values(person1));
 console.log(person1.hobbies());

