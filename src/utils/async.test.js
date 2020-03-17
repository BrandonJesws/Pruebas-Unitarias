import { getData, getDataPromise, getDataPromiseError, getUsers } from './async';

describe('Haciendo test a operaciones asincronas', () => {
    test('Haciendo test a callback', (done) => {
        getData((name) => {
            expect(name).toBe('Brando Jesús');
            done();
        });
    });
    test('Haciendo test a promesa', (done) => {
        getDataPromise()
            .then((name)=>{
                expect(name).toBe('Brandon Jesus');
                done();
            });
    });
    test('Haciendo test a promesa con expect', () => {
        return expect(getDataPromise()).resolves.toBe('Brandon Jesus');
    });
    test('Haciendo test a promesa rechazada', (done) => {
        getDataPromiseError()
            .then((name)=>{
            })
            .catch((error) => {
                expect(error).toBe('Error');
                done();
            });
    });
    test('Haciendo test a promesa rechazada con expect', () => {
        return expect(getDataPromiseError()).rejects.toBe('Error');
    });
    test('Haciendo test a promesa con Asyn Await', async () => {
        const name = await getDataPromise();
        expect(name).toBe('Brandon Jesus');
    });
    test('Haciendo test a promesa rechazada con Asyn Await', async () => {
        try {
            const name = await getDataPromiseError();
            expect(name).toBe('Brandon Jesus');
        } catch (error) {
            expect(error).toBe('Error');
        }
    });
    test('Probando promesa con http', async () => {
        const user = await getUsers();
        expect(user).toHaveProperty('username');
    });
});