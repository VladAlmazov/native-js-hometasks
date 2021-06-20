import {CityType, GovernmentBuildingsType} from '../02/02_02';

const ages = [10, 20, 22, 1, 100, 90, 14];

export const predicate = (age: number) => age > 90; // если перед ретурном больше ничего нет


const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
]
export const cheapPredicate = (course: CourseType) => course.price < 160

const chipCourse = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150}
]

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}
