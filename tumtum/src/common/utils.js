export class NewAccount {
    constructor(accountInfo) {
        this.fn = accountInfo.fn;
        this.ln = accountInfo.ln;
        this.email = accountInfo.email;
        this.pwd = accountInfo.pwd;
    }
}

// 防抖动函数
export function debouncs(func, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}