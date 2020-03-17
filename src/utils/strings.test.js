import { saluda, getId, despide } from './strings';

describe('Pruebas de String', () => {
    const saludo = saluda('Gerardo');
    const id = getId();
    const saludoDespide = despide();
    test('Probando la función saluda', () => {
        // to match ayuda a ver si existe algun texto dentro del string
        expect(saludo).toMatch('Hola soy');
    });
    test('Probando la función getId', () => {
        expect(id).toMatch(/\d{2}-\d{3}/);
    });
    test('Probando la función getId', () => {
        expect(saludoDespide).toMatch('Bye');
    });
})