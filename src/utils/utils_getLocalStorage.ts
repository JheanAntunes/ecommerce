export const getLocalStorage = (chaveLocalStorage: string) => {
    return window.localStorage.getItem(chaveLocalStorage)
}
