// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
// }

// function clearDisplay() {
//     const display = document.getElementById('display');
//     display.value = display.value.slice(0, -1); // Oxirgi belgi yoki raqamni o‘chirish
// }

// function calculateResult() {
//     const display = document.getElementById('display');
//     try {
//         let result = display.value.replace(/%/g, '/100'); // % ni /100 ga o'zgartirish
//         display.value = eval(result);
//     } catch {
//         display.value = 'Xato';
//     }
// }

// function toggleSign() {
//     const display = document.getElementById('display');
//     if (display.value) {
//         display.value = (parseFloat(display.value) * -1).toString(); // Belgini o'zgartirish
//     }
// }



let calculationInProgress = false; // Amal davomida ekanligini saqlash uchun o'zgaruvchi

function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];

    const operators = ['+', '-', '*', '/'];
    if (operators.includes(value) && operators.includes(lastChar)) {
        return; // Bir nechta operatorni qo'shishdan saqlanish
    }
    display.value += value;
    calculationInProgress = true; // Amal davomida ekanligini belgilash
}

function clearDisplay() {
    const display = document.getElementById('display');
    
    if (calculationInProgress) {
        // Agar amal davomida bo'lsa, oxirgi belgi o'chiriladi
        display.value = display.value.slice(0, -1);
    } else {
        // Agar natija chiqarilgan bo'lsa, butun ekran tozalanadi
        display.value = '';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let result = display.value.replace(/%/g, '/100');
        display.value = eval(result);
        calculationInProgress = false; // Amal tugadi
    } catch {
        display.value = 'Xato';
        setTimeout(() => display.value = '', 1500); // 1.5 sekunddan keyin tozalash
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
}

// Klaviatura yordamida qo'llab-quvvatlash
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const operators = ['+', '-', '*', '/', 'Enter', 'Backspace'];
    
    if (!isNaN(key) || operators.includes(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}


// Mobil telefonlar uchun klaviaturadan foydalanish
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const operators = ['+', '-', '*', '/', 'Enter', 'Backspace'];

    if (!isNaN(key) || operators.includes(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});

// Mobil tugmalar uchun to'g'ri qo'llanish
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('touchend', (event) => {
        event.preventDefault();
        button.click(); // Tugmachani bosish
    });
});

