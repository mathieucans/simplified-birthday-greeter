import {Friend} from '../Friend';
import {EmailSender} from './EmailSender';
import {GreetingSender} from '../GreetingSender';

export class EmailGreetingSender implements GreetingSender {
    greetingFor(friend: Friend) {
        const message = this.emailFor(friend);
        new EmailSender()
            .send(friend.getContact(), message);
    }

    private emailFor(friend: Friend) {
        return `Happy birthday, dear ${friend.getName()}!`
    }
}