// Task 1


let x = window.prompt("Введите число: ");

if (x >= 0) {
	console.log("Число положительное")
} else {
	console.log("Число отрицательное")
}

// Task 2

let sum = 0;
let count = 0;
for (let i = 0; count != 10 ; i++) {
	if (i % 5 === 0){
		sum+=i
		count+=1
	}
} 

console.log('Сумма десяти чисел: ' + sum)

// Task 3

var numbers = [254, 115, 78, 25, 91, 45, 37]
for (let i = 0; i <= numbers.length; i++) {
	if (numbers[i]>50) console.log('Число ' + numbers[i] + ' больше 50') 
}