export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']

// export const usersObj = {
//     '0': 'Dimych',
//     '1': 'Natasha',
//     '2': 'Valera',
//     '3': 'Katya'
// }

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '100': {id: 100, name: 'Dimych'},
    '123141243': {id: 123141243, name: 'Natasha'},
    '1231415': {id: 1231415, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
//users[1]   // максимально быстро можна достать нужный элемент  О(1)
let user = {id: 100500, name: 'Maks'};
users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Vitya'

export const usersObj = [
    {id: 100, name: 'Dimych'},
    {id: 123141243, name: 'Natasha'},
    {id: 1231415, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
//usersObj.find(u => u.id === 1)   // надо перебрать весь масив что бы найти нужный id,  O(n)
// let usersCopy = [...usersArray.filter(), user]
// let usersArray = usersArray.filter(u => u.id !== user.id)