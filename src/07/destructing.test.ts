import {ManDestructingType} from './Destructing';

let man: ManDestructingType;

beforeEach(() => {
    man = {
        name: 'Vlad',
        age: 22,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test('1', () => {
    // const age = man.age;
    // const lessons = man.lessons;

    const {age, lessons} = man;
    const {title} = man.address.street

    expect(age).toBe(22);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Nezavisimosti street');
})

test('2', () => {
    // const age = man.age;
    // const lessons = man.lessons;

    const {age: a, lessons: l} = man;  //  сокращение что бы создать переменные a и l
    const {title} = man.address.street

    expect(a).toBe(22);
    expect(l.length).toBe(3);
    expect(title).toBe('Nezavisimosti street');
})

test('3', () => {
    const l1 = man.lessons[0];
    const l2 = man.lessons[1];

    const [, , ls3] = man.lessons;  // вытягивает только третий элемент
    //const [ls1, ...restLessons] = man.lessons;  // вытягивает только первый элемент, а остальные добавляет в массив restLessons
    const[, ls2, ...restLessons] = man.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    //expect(ls1.title).toBe('1');
    // expect(ls2.title).toBe('2');
    expect(ls3.title).toBe('3');

    // expect(restLessons.length).toBe(2);
    // expect(restLessons[0].title).toBe('2');

    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('3');
    expect(restLessons[0].name).toBe('react');
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'});
    expect(restLessons[0]).toStrictEqual({name: 'react', title: '3'}); //  порядок свойств не играет роли
})
