import delay from 'redux-saga';

// Asynchronous testing with the `done` callback.
it('async test 1', done => setTimeout(done, 100));

// Asynchronous testing with a Promise return type.
it('async test 2', () => new Promise(resolve => setTimeout(resolve, 100)));

// Asynchronous testing with async/await.
it('async test 2', async () => await delay(100));