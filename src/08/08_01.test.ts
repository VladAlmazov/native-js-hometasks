type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType = {
}

beforeEach(() => {
    users = {
        '100': {id: 100, name: 'Dimych'},
        '123141243': {id: 123141243, name: 'Natasha'},
        '1231415': {id: 1231415, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})


test('should select corresponding user', () => {
    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina');
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'});
})
test('should delete corresponding user', () => {
    delete users['1']

    expect(users['1']).toBeUndefined();
})

