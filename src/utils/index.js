

export const setLocalStorage = (state, key = 'state') => {
    localStorage.setItem(key, JSON.stringify(state))
}
export const getLocalStorage = (key = 'state') => {
    const tasks = localStorage.getItem(key) 
    return tasks ? JSON.parse(tasks) : []
}