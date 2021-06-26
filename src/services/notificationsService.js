import { delay } from 'redux-saga';

const notificationsService = {
    getNotifications: async () => {
        console.warn("REAL NOTIFICATION SERVICE! REALLY CONTACTING APIS!")
        await delay(1000);
        return { count: 42 };
    }
}

export default notificationsService;