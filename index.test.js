const helloWorld = require('./index');

test('returns "Hola Mundo"', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});
