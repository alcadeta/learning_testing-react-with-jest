let count = 0;

const notificationsService = {
    __setcount: (_count) => {
        count = _count
    },
    getNotifications: async () => {
        console.warn("GOOD JOB! USING MOCK SERVICE!");
        return { count };
    },
};

export default notificationsService;