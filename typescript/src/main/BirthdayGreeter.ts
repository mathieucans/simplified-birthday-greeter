import {FriendRepository, MonthDay} from './FriendRepository';
import {GreetingSender} from './GreetingSender';

export class BirthdayGreeter {
    constructor(
        private readonly friendRepository: FriendRepository
    ) {

    }

    sendGreetings(greetingSender: GreetingSender) {
        this.friendRepository.findFriendsBornOn(MonthDay.now())
            .forEach(friend => {
                greetingSender.greetingFor(friend);
            });
    }

}

