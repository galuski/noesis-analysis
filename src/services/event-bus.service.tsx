type Listener = (data: any) => void;

function createEventEmitter() {
    const listenersMap: Record<string, Listener[]> = {};

    return {
        on(evName: string, listener: Listener) {
            listenersMap[evName] = (listenersMap[evName] || []);
            listenersMap[evName].push(listener);
            return () => {
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener);
            };
        },
        emit(evName: string, data: any) {
            if (!listenersMap[evName]) return;
            listenersMap[evName].forEach(listener => listener(data));
        }
    };
}

export const eventBusService = createEventEmitter();

// פונקציית עזר נוחה להצגת הודעה
export function showUserMsg(txt: string, type: 'success' | 'error' = 'success') {
    eventBusService.emit('show-user-msg', { txt, type });
}