export default class Exercise {
    constructor(exercise, reps = 0, sets = 0) {
        this.exercise = exercise;
        this.reps = reps;
        this.sets = sets;
    }
    toString() {
        return `${this.exercise}(${this.sets} x ${this.reps})`
    }
}