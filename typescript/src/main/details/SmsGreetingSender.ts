import {Friend} from '../Friend';
import {GreetingSender} from '../GreetingSender';

export class SmsGreetingSender implements GreetingSender {
    greetingFor(friend: Friend) {
        console.log(`To:${friend.getPhoneNumber()}, SMS: Happy birthday, my dear ${friend.getName()}!`);
    }
}