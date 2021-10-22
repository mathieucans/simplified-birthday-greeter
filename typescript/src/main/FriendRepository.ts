import {Friend} from "./Friend";

export class MonthDay {
    constructor(
        public readonly month:number,
        public readonly day:number
    ) {
    }

    static now() {
        let date = new Date();
        return new MonthDay(date.getMonth(), date.getDate())
    }
}

export interface FriendRepository {
    findFriendsBornOn( today:MonthDay) : Array<Friend>;
}
