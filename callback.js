// Function should start only after previous(parent) function finished the work

const learnJS = (message, callback) => {
    console.log(`Message: ${message}`);
    callback();
};

const done = () => {
    console.log('I/`ve learnt JS');
};

learnJS('Hey, I/`m Alex!', done); // no ()