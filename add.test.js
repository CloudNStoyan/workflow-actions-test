const add = require('./add.js').add;

test('add properly adds two numbers', () => {
    expect(add(1, 2)).toEqual(3);
}); 

test('my test that will fail', () => {
    expect(add(1,2)).toEqual(2);
})