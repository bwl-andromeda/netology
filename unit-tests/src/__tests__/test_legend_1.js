import getHealthStatus from '../legend_1';
import {test,expect} from '@jest/globals'

test('health > 50 should return "healthy"', () => {
    const character = { name: 'Mage', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
});

test('health between 15 and 50 should return "wounded"', () => {
    const character = { name: 'Mage', health: 30 };
    expect(getHealthStatus(character)).toBe('wounded');
});

test('health less than 15 should return "critical"', () => {
    const character = { name: 'Mage', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
});