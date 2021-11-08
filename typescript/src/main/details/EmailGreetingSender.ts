import {Friend} from '../Friend';
import {EmailSender} from './EmailSender';
import {GreetingSender} from '../GreetingSender';

export class EmailGreetingSender implements GreetingSender {

    constructor(
        private emailSender: EmailSender
    ) {
    }


    greetingFor(friend: Friend) {
        const message = this.emailFor(friend);
        this.emailSender
            .send(friend.getContact(), message);
    }

    private emailFor(friend: Friend) {
        return `Happy birthday, dear ${friend.getName()}!`
    }
}
