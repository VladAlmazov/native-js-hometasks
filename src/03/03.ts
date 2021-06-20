import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingsType, HouseType} from '../02/02_02';

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export function makeStudentActive (s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export function repairedHouse(houseType: HouseType) {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export function createMessage(city: CityType) {
    //return 'Hello ' + city.title + ' citizens. I want you to be happy . All ' + city.citizensNumber + ' people'
    return `Hello ${city.title} citizens. I want you to be happy . All ${city.citizensNumber} people` // Шаблонные строки
}

