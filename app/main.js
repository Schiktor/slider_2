
// const addButton = document.querySelector('.add-btn');
// const container = document.querySelector('.container');
// const input = document.querySelector('.text');
// const textTask = document.querySelector('.text-task');


// // ДОБАВЛЕНИЕ БЛОКА

// const asd = () => {
    
// }

// const addedNews = () => {
//     let element = document.createElement('div');
//     const description = document.querySelectorAll('.description')
    
//     element.classList.add('description')
//     if(input.value != '') {
//         element.innerHTML = `<p class="text-task">${(description.length + 1)} - ${input.value}
//         </p><button class="remove-text">Удалить</button>`;
//     } else {
//         return null
//     }
//     container.append(element)
//     return container
// }

// addButton.addEventListener('click', addedNews)

// // Открытие кнопки удалить

// container.addEventListener('click', (evt) => {
//     let btnRemoveText = document.querySelector('.remove-text')
//     let target = evt.target.closest('p')
//     if(!target) {return} else {
//     let s = btnRemoveText.classList.remove('remove-text')
//     return s
//     }
// })

// const ob = {
//     a:1,
//     b:2
// }

// const arr = ['a', 'b', 'c']


// const f = (start, step) => {
//     return function() {
//         start = start + step
//         return start
//     }
    
// }


// ...............


// const generator = f(10, 3)
// Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.
//  Например, если мы пропустим через функцию 9119, получится 811181, потому что 92 — это 81, 
//  а 12 — это 1. (81-1-1-81) Пример №2: Ввод 765 будет


// codeWars № 6
// const arrDegree = (num) => {
// return Number((String(num).split('').map((el) => el**2)).join(''))
// }
// console.log(arrDegree(44));

// ...............

// codeWars № 7

// Завершите функцию, которая принимает строковый параметр и меняет
//  местами каждое слово в строке. Все пробелы в строке должны быть сохранены.

// const isStr = (str) => {
//    return (str.split(' ').map((el) => el.split('').reverse().join(''))).join(' ');
// console.log(isStr('привет меня зовут маша'));
// }

// ...............








// const generator2 = f(10, 1)
// console.log(generator())
// console.log(generator2())
// console.log(generator())
// console.log(generator2())

// let house = {
//     rooms: 'asd',
//     floors: 2,
//     material: 2,
//     coefficient: 2,
//     calculateSquare: function () {
//         return this.coefficient
//     },
//     calculatePrice: function () {
//         return this.
//     }


// }

// let materialPrice = function(item) {
//         return house[item]
// }

// console.log(materialPrice('rooms'))

// console.log(films.map((el) => Object.values(el).join(' ')
// ));

// const d = (arr) => {
// return console.log(Object.values(arr[0]))
// }

// d([{id: 1, title: 'Die hard'}, {id: 2, title: 'Die hard'}])
let value = 3
value > 4  ? console.log('больше') : console.log('меньше')
