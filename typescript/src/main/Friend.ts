export class Friend {
    constructor(
        public readonly name:string,
        public readonly contact:string,
        public readonly phoneNumber:string
    ) {
    }

    public getName() {
        return this.name;
    }

    public getContact() {
        return this.contact;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }
}
