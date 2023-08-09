import orderByProps from '../js/orderByProps';

test('array is created right', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const arr = ['name', 'level'];

  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(object, arr)).toEqual(result);
});
