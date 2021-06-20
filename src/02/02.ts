type LocalCityType = {
    title: string
    countryTitle: string
}
type LocalAddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: 'Vlad',
    age: 22,
    isActive: true,
    address: {
        streetTitle: 'Pushkina 2',
        city: {
            title: 'Kyiv',
            countryTitle: 'Ukraine'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}