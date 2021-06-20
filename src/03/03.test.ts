import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn} from './03';

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Vlad',
        age: 22,
        isActive: false,
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
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test('does student live in city', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Kyiv');
    expect(result1).toBe(false);
    expect(result2).toBe(true);
})