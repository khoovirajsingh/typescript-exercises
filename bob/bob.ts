class Bob {
    hey(message: string) {
        if (this.isQuestion(message)) return this.isShouting(message) ? 'Calm down, I know what I\'m doing!' : 'Sure.';
        else if (this.isEmpty(message)) return 'Fine. Be that way!';
        else if (this.isShouting(message)) return 'Whoa, chill out!';
        else return 'Whatever.';
    }

    private isQuestion = (message: string) => message.trim().endsWith('?');
    private isShouting = (message: string) => /[a-zA-Z]/g.test(message) && message.toUpperCase() == message;
    private isEmpty = (message: string) => message.trim().length == 0;
}

export default Bob