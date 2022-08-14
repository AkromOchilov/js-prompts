let fullname = prompt('Ismingizni kiriting:');
let age = prompt(`Xush kelibsiz ${fullname}, yoshingiz nechida?`);
let gender = prompt("Ma'lumot uchun jinsingizni aytsangiz:");
let mail = prompt("Bo'glanish uchun e-mailingini kiritsangiz:");
let check = prompt(
	`Ma'lumotlar to'g'ri kiritilganmi? \n Ism: ${fullname} \n Yoshingiz: ${age} \n Jinsingiz: ${gender} \n E-mail: ${mail} `,
);
let goal = prompt(
	`Juda yaxshi ${fullname}, ${age} yoshli foydalanuvchi. Ushbu sahifadan foydalanishdan qanday natija kutayapsiz?`,
);

let data = {
	fullname,
	age,
	gender,
	mail,
	goal,
};
alert("Vaqtingiz unumli o'tsin!");
console.log(data);
