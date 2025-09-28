// place files you want to import through the `$lib` alias in this folder.

// ✅ Set a cookie
export function setCookie(name: string, value: string | number | boolean, days?: number): void {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${encodeURIComponent(String(value))}${expires}; path=/`;
}

// ✅ Get a cookie with type casting
export function getCookie<T extends string | number | boolean = string>(name: string, type: 'string' | 'number' | 'boolean' = 'string'): T | null {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');

    for (let c of cookies) {
        c = c.trim();
        if (c.indexOf(nameEQ) === 0) {
            const rawValue = decodeURIComponent(c.substring(nameEQ.length));
            switch (type) {
                case 'number':
                    return Number(rawValue) as T;
                case 'boolean':
                    return (rawValue === 'true') as T;
                default:
                    return rawValue as T;
            }
        }
    }
    return null;
}

// ✅ Delete a cookie
export function deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
