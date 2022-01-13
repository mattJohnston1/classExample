import Workout from "./Workout.js";

export default class Day {
    constructor(dayOfWeek, workout) {
        if (workout == "Rest Day") {
            this.workout = new Workout("Rest Day", null, true)
        }
        this.dayOfWeek = dayOfWeek;
        this.workout = new Workout(workout);
    }

    toString() {
        return `
            Day of The Week: ${this.dayOfWeek},
            ${this.workout.toString()}
        `
    }
}