import Day from "./Day.js";

export default class Week {
    constructor() {
        this.Sunday = new Day("Sunday", "Rest Day");
        this.Monday = new Day("Monday", "Push");
        this.Tuesday = new Day("Tuesday", "Pull");
        this.Wednesday = new Day("Wednesday", "Legs");
        this.Thursday = new Day("Thursday", "Push");
        this.Friday = new Day("Friday", "Pull");
        this.Saturday = new Day("Saturday", "Legs");
    }

    toString() {
        return `
        Week {
            ${this.Sunday.toString()}
            ${this.Monday.toString()}
            ${this.Tuesday.toString()}
            ${this.Wednesday.toString()}
            ${this.Thursday.toString()}
            ${this.Friday.toString()}
            ${this.Saturday.toString()}
        }
        `
    }
}