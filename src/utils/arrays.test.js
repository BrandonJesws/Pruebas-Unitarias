import { createStore } from './arrays';

describe('Haciendo pruebas a listas / Array', () => {
    test('Probando agregar una fruta', () => {
        const store = createStore();
        store.addFruit('fresa');
        expect(store.getFruits()).toStrictEqual([ 'fresa' ]);
    });
    test('Probando agregar dos frutas', () => {
        const store = createStore();
        store.addFruit('fresa');
        store.addFruit('mango');
        expect(store.getFruits()).toStrictEqual([ 'fresa', 'mango' ]);
    });
    test('Probando si contiene fruta especifica', () => {
        const store = createStore();
        store.addFruit('manzana');
        store.addFruit('pera');
        expect(store.getFruits()).toContain('manzana');
        expect(store.getFruits()).not.toContain('banana');
    });
    test('Probando longitud del array', () => {
        const store = createStore();
        store.addFruit('manzana');
        store.addFruit('pera');
        store.addFruit('banana');
        expect(store.getFruits()).toHaveLength(3);
    });
    test('Probando agregar un objeto con informacion de frutas', () => {
        const store = createStore();
        store.addFruit({
            name: 'fruta',
            price: 10
        });
        expect(store.getFruits()).toContainEqual({ name: 'fruta', price: 10 });
    });
});