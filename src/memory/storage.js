// In-memory storage module, functios to get, clear and store the notifications as and when required.
// Would be useful when the tests are to be carried out.

const notifications = [];

export const getNotifications = () => [...notifications]
export const clear = () => notifications.length = 0
export const store = (notification) => notifications.push(notification)
