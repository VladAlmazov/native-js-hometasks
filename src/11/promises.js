const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false;
        }
        return true;
    },
    read() {
        const data = localStorage.getItem('some-key')
        if (!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (error) {
                return reject(error);
            }
        })

        return promise;
    },
    readAsync() {

        return new Promise((res) => {
            const data = localStorage.getItem('some-key')
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    },
}

const result = repo.save({name: 'Vlad'})
console.log('Saved')
const data = repo.read()
console.log(data)

const run = async () => {
    await repo.saveAsync({name: 'Vlad'})
    console.log('Saved')
    const data = await repo.readAsync()
    console.log(data)
}
run()

function wait(ms) {
    return new Promise( (res) => {
        setTimeout(() => {res()}, ms )
    })
}

async function runTimer () {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}
runTimer()

const api = {
    async save() { // резолвится ничем

    },
    async read() { // возвращает promise который резорвится этим значением
        return {name: 'Vlad'}
    },
}

async function xxx() { // возвращает зарезолвленный promise

}

async function runAPI() {
    await api.save()
    console.log('Saved')
    let data = await api.read()
    console.log('read: ', data)
    let a = xxx()
    console.log(a)
}

runAPI()



















