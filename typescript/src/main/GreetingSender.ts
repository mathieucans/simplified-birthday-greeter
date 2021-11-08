import {Friend} from './Friend';

export interface GreetingSender {
    greetingFor(friend: Friend);
}