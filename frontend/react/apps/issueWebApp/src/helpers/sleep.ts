export const sleep = (seconds: number = 1): Promise<boolean> => {

    return new Promise<boolean>((resolve: (value: boolean) => void) => {
        setTimeout(() => resolve(true), seconds * 1000);

    })
}