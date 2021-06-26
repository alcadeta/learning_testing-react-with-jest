import { delay } from 'redux-saga';

export default {
    getNotifications: async () => {
        console.warn("REAL NOTIFICATION SERVICE! REALLY CONTACTING APIS!")
        await delay(1000);
        return { count: 42 };
    }
}