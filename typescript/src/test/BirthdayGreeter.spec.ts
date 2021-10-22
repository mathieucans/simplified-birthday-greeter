import {FriendBuilder} from "./FriendBuilder";
import {deepEqual, instance, mock, when} from "ts-mockito";
import {FriendRepository, MonthDay} from "../main/FriendRepository";
import {BirthdayGreeter} from "../main/BirthdayGreeter";



describe('BirthdayGreeter should', () => {
    let friendRepository: FriendRepository;
    let birthdayGreeter: BirthdayGreeter;
    let printStream: string = '';

    beforeEach(() => {
        friendRepository = mock<FriendRepository>()
        birthdayGreeter = new BirthdayGreeter(instance(friendRepository));
        captureConsole()
    });

    test('send a greeting email to the friend born today', () => {
        const aFriend = FriendBuilder.aFriend().build();
        when(friendRepository.findFriendsBornOn(deepEqual(MonthDay.now())))
            .thenReturn([aFriend]);

        birthdayGreeter.sendGreetings();

        const content = "To:" + aFriend.getContact() + ", Subject: Happy birthday!, Message: Happy birthday, dear " + aFriend.getName() + "!";
        expect(printStream).toEqual(content);
    });

    test(`not send any greeting email when its nobody's birthday`, () => {
        when(friendRepository.findFriendsBornOn(deepEqual(MonthDay.now())))
            .thenReturn([]);

        birthdayGreeter.sendGreetings();

        expect(printStream).toEqual('');
    });

    function captureConsole(){
        printStream = ''
        var oldLog = console.log;
        console.log = function (message) {
            printStream += message
            oldLog.apply(console, arguments);
        };
    }
});
