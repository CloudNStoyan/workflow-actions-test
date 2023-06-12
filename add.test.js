const add = require('./add.js').add;

test('add properly adds two numbers', () => {
    expect(add(1, 2)).toEqual(3);
}); 