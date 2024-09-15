export class User {
    constructor(
        private email: string,
        private Token: string,
        private localId: string,
        private expirationDate: Date
    ) { }
}