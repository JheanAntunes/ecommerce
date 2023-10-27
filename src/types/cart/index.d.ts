declare global {
    namespace NodeJS {
        interface ProcessEnv {
            domain: string
        }
    }
}
export {}
