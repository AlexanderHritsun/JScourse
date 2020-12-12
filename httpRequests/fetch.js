const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
   return fetch(url, {
       method,
       body: JSON.stringify(body),
       headers: headers
   }).then(response => {
       if (response.ok) {
           return response.json();
       }

       return response.json().then(err => {
           const e = new Error('Something went wrong...');
           e.data = err;
           throw e;
       })
   });
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