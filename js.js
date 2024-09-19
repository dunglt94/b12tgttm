let value = prompt('Nhập số:');
let number = [-3, 5, 1, 3, 2, 10];
// document.write(number);
let index = -1;
for (let i = 0; i < number.length; i++) {
    if (value == number[i]) {
       index = i;
    }
}
if (index > -1) {
    alert(`Value ${value} found at ${index}`);
} else {
    alert(`Value ${value} not found`);
}
