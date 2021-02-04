// Task 1

let letters = [];
const baas = 'Backend As A Service';
const splitter = baas.split(' ');

const showSplitted = async () => {
	splitter.forEach(function (item, index, list) {
		letters.push(item[0]);
	})
	console.log(letters);
}

const showJoined = async () => {
	const joined = letters.join('');
	console.log(joined);
}

showSplitted();
showJoined();





// Task 2

const arg = 8;

const type = one => {
	const date = new Date;
	const newDate = date.toLocaleString();
	if (typeof(one) === 'number') {
		console.log(newDate);
		}
	else {
		console.log("Неверный тип данных")
	}
}

type(arg);

// Task 3

function xyz() {
	console.log(arguments.callee);
}

xyz(10, false, "google");


// Task 4

function userInfo (user) {
	if (user.registered == true) {
		console.log('Дата регистрации: ' + user.data)
	}
	else {
		console.log('Незарегистрированный пользователь: ' + user.name)
	}
}

function getInfo () {
	return userInfo(this)
}

let user1 = {
	name: 'Roman',
	registered: false,
	data: '08.03.96',
	getInfo,
}

let user2 = {
	name: 'Alexandr',
	registered: true,
	data: '01.07.91',
	getInfo,
}

user1.getInfo();
user2.getInfo();

