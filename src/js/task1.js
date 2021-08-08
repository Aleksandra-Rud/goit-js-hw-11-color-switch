
// ===============Вариант 1=========================

// const delay = ms => {
//     return new Promise((resolve) => setTimeout(() => {resolve(ms)}, ms))  // Твой код
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// ===============Вариант 2=========================

const delay = ms => {
    return new Promise((resolve) => setTimeout(() => {resolve(ms)}, ms))
};


// Вызовы функции для проверки
delay(2000).then((ms) => console.log(`Resolved after ${ms}ms`)); // Resolved after 2000ms
delay(1000).then((ms) => console.log(`Resolved after ${ms}ms`)); // Resolved after 1000ms
delay(1500).then((ms) => console.log(`Resolved after ${ms}ms`)); // Resolved after 1500ms

