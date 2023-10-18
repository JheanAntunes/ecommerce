export const setLocalStorage = (chaveLocalStorage: string, value: string) => {
    window.localStorage.setItem(chaveLocalStorage, value)
}
