export default class GradeSchool {
    private roster: Map<number, Array<string>>;


    constructor() {
        this.roster = new Map<number, Array<string>>();
    }

    public studentRoster: () => Map<number, Array<string>> = () => this.roster;

    addStudent(name: string, grade: number) {
        if (this.studentIsInRoster(name)) return;
        const students = this.roster.get(grade);
        if (students === undefined) {
            this.roster.set(grade, [name]);
        } else {
            students.push(name);
            this.roster.set(grade, students)
        }
    }

    private studentIsInRoster = (name: string) => [...this.roster.values()]
        .concat()
        .flat()
        .includes(name);

    studentsInGrade(grade: number) {
        return this.roster.get(grade);
    }
}