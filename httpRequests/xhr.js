const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open(method, url);

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    })
}

// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const body = {
    name: 'Alex',
    age: 22
}


sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));