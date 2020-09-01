export class NewAccount {
    constructor(accountInfo) {
        this.fn = accountInfo.fn;
        this.ln = accountInfo.ln;
        this.email = accountInfo.email;
        this.pwd = accountInfo.pwd;
    }
}