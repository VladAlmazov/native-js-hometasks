import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('reference type test', () => {
    let user: UserType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(11)
    expect(user.hair).toBe(22)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Odessa')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Odessa')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')

})
test('change house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(userCopy.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})
test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(userCopy.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('ts')
})
test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'html', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(userCopy.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('html')
})
test('update company title', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Vlad',
        hair: 22,
        address: {
            city: 'Kyiv',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-incubator'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})
test('update company', () => {
    let companies = {
        'Vlad': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-incubator'}],
        'Stas': [{id: 1, title: 'IT-incubator'}]
    }

    const copy = updateCompanyTitle2(companies, 'Vlad', 1, 'EPAM')

    expect(copy['Vlad']).not.toBe(companies['Vlad'])
    expect(copy['Stas']).toBe(companies['Stas'])
    expect(copy['Vlad'][0].title).toBe('EPAM')
})
