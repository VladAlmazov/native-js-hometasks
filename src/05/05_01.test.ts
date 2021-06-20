import {createGreetingMessage, ManType} from './05_01';

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Vlad Leno', age: 22},
        {name: 'Andrei Balaban', age: 21},
        {name: 'Denis Karabin', age: 23}
    ]
})

test('Should get array of greeting messages', () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Vlad. Welcome to IT-Incubator');
    expect(messages[1]).toBe('Hello Andrei. Welcome to IT-Incubator');
    expect(messages[2]).toBe('Hello Denis. Welcome to IT-Incubator');
})