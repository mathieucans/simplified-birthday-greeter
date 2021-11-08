export class EmailSender {
    send(emailAddress: string, message: string) {
        console.log("To:" + emailAddress + ", Subject: Happy birthday!" + ", Message: " + message);
    }
}
