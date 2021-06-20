export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Vlad Leno', age: 22},
    {name: 'Andrei Balaban', age: 21},
    {name: 'Denis Karabin', age: 23}
]

const dimychTransformator = (man: ManType) => ({ // ставим () что бы ретурнуть объект без фигурных скобок и ретурна
        stack: ['css', 'html', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })


const devs1 = [
    {
        stack: ['css', 'html', 'tdd', 'react'],
        firstName: 'VLad', lastName: 'Leno'
    },
    {
        stack: ['css', 'html', 'tdd', 'react'],
        firstName: 'Andrei', lastName: 'Balaban'
    },
    {
        stack: ['css', 'html', 'tdd', 'react'],
        firstName: 'Denis', lastName: 'Karabin'
    }
]

let d1 = dimychTransformator(people[0]);
let d2 = dimychTransformator(people[1]);
let d3 = dimychTransformator(people[2]);

const devs2 = [
    d1, d2, d3
]

const devs3 = people.map(dimychTransformator);
const devs4 = people.map(man => ({
    stack: ['css', 'html', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`);

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`);
}