console.log('Start');

console.log('Start 2');

function messageWithTimeout() {
    console.log('Timeout');
}

window.setTimeout(() => {
    console.log('Inside timeout, after 2000 seconds')
}, 2000);

setTimeout(messageWithTimeout, 3000);

console.log('End');

// Call stack => Web API => Callback Queue => Stack


