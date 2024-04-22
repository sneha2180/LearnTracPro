export default class Storage {
    static getItem(item: string): string | null {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem(item);
        } else {
            console.warn('localStorage is not available. Returning null.');
            return null;
        }
    }
}
