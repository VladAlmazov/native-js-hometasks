import {UserType} from './09_01';

function increaseAge(u: UserType) {
    u.age++;
}

test('big reference type test', () => {
    let user: UserType = {
        name: 'Vlad',
        age: 22,
        address: {
            title: 'Kyiv'
        }
    }
    increaseAge(user);

    expect(user.age).toBe(23);

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000);
})
test('array reference test', () => {
    let users = [
        {name: 'Vlad', age: 22},
        {name: 'Denis', age: 22}
    ]

    const admins = users;
    admins.push({name: 'Andrei', age: 10})

    expect(users[2]).toEqual({name: 'Andrei', age: 10});
})
test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;
})
test('reference type test', () => {
    const address = {
        title: 'Kyiv'
    }

    let user: UserType = {
        name: 'Vlad',
        age: 22,
        address: address
    }
    let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 22,
        address: address
    }

    address.title = 'Kyiv City';

    expect(user.address).toBe(user2.address);
})
test('reference type array test', () => {
    const address = {
        title: 'Kyiv'
    }

    let user: UserType = {
        name: 'Vlad',
        age: 22,
        address: address
    }
    let user2: UserType = {
        name: 'Natasha',
        age: 22,
        address: address
    }
    const users = [user, user2, {name: 'Misha', age: 18, address: address}];

    const admins = [user, user2];

    admins[0].name = 'Dmitriy';

    address.title = 'Kyiv City';

    expect(users[0].name).toBe('Dmitriy');
    expect(user.name).toBe('Dmitriy');
})
test('sort array test', () => {
    const letters = ['c', 's', 'd', 'w', 'q', 'f',];
    passportist(letters)
    expect(letters).toEqual(['c', 'd', 'f', 'q', 's', 'w',]);
})

function passportist (letters: any) {
    letters.sort();
    console.log(letters)
}