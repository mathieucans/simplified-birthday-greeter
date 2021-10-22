export class Friend {
    constructor(
        public readonly name:string,
        public readonly contact:string
    ) {
    }

    public getName() {
        return this.name;
    }

    public getContact() {
        return this.contact;
    }
}
