import {CityType} from '../02/02_02';
import {createMessages, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses} from './05_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            built: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White Street'
                }
            }
        },
            {
                id: 2,
                built: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy Street'
                    }
                }
            },
            {
                id: 3,
                built: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy Street'
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

test('List of street titles of government buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings (city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');
})

test('List of streets titles', () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe('White Street');
    expect(streetsNames[1]).toBe('Happy Street');
    expect(streetsNames[2]).toBe('Happy Street');
})
test('Create greeting messages for streets', () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White Street');
    expect(messages[1]).toBe('Hello guys from Happy Street');
    expect(messages[2]).toBe('Hello guys from Happy Street');
})