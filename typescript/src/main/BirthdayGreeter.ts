import {FriendRepository, MonthDay} from './FriendRepository';
import {Friend} from './Friend';
import {EmailSender} from './EmailSender';

export class BirthdayGreeter {
    constructor(
        private readonly friendRepository: FriendRepository
    ) {

    }

    sendGreetings(emailGreeting: GreetingSender) {
        this.friendRepository.findFriendsBornOn(MonthDay.now())
            .forEach(friend => {
                emailGreeting.greetingFor(friend);
            });
    }

}

export interface GreetingSender {
    greetingFor(friend: Friend) ;
}

export class EmailGreeting implements GreetingSender {
    greetingFor(friend: Friend) {
        const message = this.emailFor(friend);
        new EmailSender()
            .send(friend.getContact(), message);
    }

    private emailFor(friend: Friend) {
        return `Happy birthday, dear ${friend.getName()}!`
    }
}
