import {Friend} from "../main/Friend";

export class FriendBuilder {
    private firstName = "John";
    private lastName = "Doe";
    private dateOfBirth = new Date(1980, 9, 10);
    private email = "john.doe@foobar.com";

    static aFriend(): FriendBuilder {
        return new FriendBuilder();
    }

    public withEmail(email: string): FriendBuilder {
        this.email = email;
        return this;
    }

    public withFirstName(firstName: string): FriendBuilder {
        this.firstName = firstName;
        return this;
    }


    public withLastName(lastName: string): FriendBuilder {
        this.lastName = lastName;
        return this;
    }

    public withDateOfBirth(dateOfBirth: Date) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public build() {
        return new Friend(this.firstName, this.email, '+33686898734');
    }
}
