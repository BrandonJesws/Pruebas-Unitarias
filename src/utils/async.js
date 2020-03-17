export const getData = (callback) => {
    const name = 'Brando Jesús';
    setTimeout(()=>{
        callback(name);
    }, 1000)
}

export const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Brandon Jesus')
        }, 1000)
    })
}
export const getDataPromiseError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('Error')
        }, 1000)
    })
}
export const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await res.json();
    return user;
}