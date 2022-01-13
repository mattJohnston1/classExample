import Exercise from "./Exercise.js";

export default class Workout {
    constructor(workout, exercises = []) {
        if (workout == "Rest Day") {
            this.workout = "Rest Day"
            this.exercises = []
        } else {
            this.workout = workout;
            this.exercises = exercises;
            if (!(exercises.length > 0)) {
                if (workout == "Legs") {
                    this.exercises = [new Exercise("Squat", 8, 4), new Exercise("Leg Press", 12, 4), new Exercise("Lunges", 12, 3), new Exercise("Leg Extension", 8, 4), new Exercise("RDL", 8, 3),new Exercise("Leg Curl", 8, 5), new Exercise("Standing Calf Raises", 15, 4)]
                } else if (workout == "Push") {
                    this.exercises = [new Exercise("Bench Press", 8, 4), new Exercise("Inclined DB Bench", 15, 3), new Exercise("Cable Fly", 12, 3), new Exercise("Machine Fly", 8, 3), new Exercise("Barbell Shoulder Raises", 8, 4), new Exercise("DB Shoulder Press"), new Exercise("Lateral Raise", 12, 3)];
                } else if (workout == "Pull") {
                    this.exercises = [new Exercise("Pull Ups", 8, 4), new Exercise("Lat Pulldown", 6, 3), new Exercise("Meadow Row", 12, 3), new Exercise("DB Row", 12, 4), new Exercise("Standing Bicep Curl", 12, 4), new Exercise("Inclined Hanging DB Curl", 12, 4)];
                }
            }
        }
    }

    toString() {
        if (this.workout == "Rest Day") {
            return `\n\t\tRest Day`
        }

        let exercises = this.exercises.map((exercise)=>{return (" " + exercise.toString() + "\n")})
        return `
                Workout: ${this.workout},
                Exercises: 
                ${exercises.join('\t\t')}
        `
    }
}