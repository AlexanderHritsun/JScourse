// Closure - in simple words, it's a function which returns inside another function:

const urlGenerator = (domain) => {
    return (url) => {
        return `https://${url}.${domain}`;
    }
}

const comUrl = urlGenerator('com'); // now comUrl contains the function which was returned by urlGenerator
const uaUrl = urlGenerator('ua');

console.info(comUrl('google')); // and we can call it even after the urlGenerator has been executed
console.info(uaUrl('dia'));