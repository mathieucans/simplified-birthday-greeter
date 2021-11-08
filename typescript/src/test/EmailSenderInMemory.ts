import {EmailSender} from "../main/details/EmailSender";

export class EmailSenderInMemory extends EmailSender{
    private _content : string = ''
    content() {
        return this._content;
    }

    send(emailAddress: string, message: string){
        this._content = "To:" + emailAddress + ", Subject: Happy birthday!" + ", Message: " + message
    }
}
