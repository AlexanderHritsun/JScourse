const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'Web < Cat'
        })
    } else {
        callback('Molodez');
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message);
})

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Web < Cat'
            })
        } else {
            resolve('Molodez');
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log(message)
}).catch(error => {
    console.log(error.name + ' ' + error.message);
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sleep = ms => {
    return new Promise((resolve, reject) => [
        setTimeout(() => resolve(), ms)
    ])
}

sleep(2000).then(() => console.log('After 2 sec'));
sleep(3000).then(() => console.log('After 3 sec'));

Promise.all([sleep(2000), sleep(3000)]).then(() => {
    console.log('You see this message because all promises successfully resolved')
})

Promise.race([sleep(2000), sleep(3000)]).then(() => {
    console.log('The fastest promise resolved')
})