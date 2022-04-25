class Score {
    constructor(name, correct, wrong, empty) {
        // TODO: answer here
        this.name = name;
        this.correct = correct;
        this.score = 4 * correct - wrong
    }
}

class Scores {
    constructor(scores) {
        // TODO: answer here
        this.scores = scores;
    }

    topStudents() {
        // TODO: answer here
        let sortedScores = this.scores.sort((a, b) => {
            return b.score - a.score ||
            b.correct - a.correct ||
            a.name.localeCompare(b.name)
        });
        return sortedScores.map(score => score.name);
    }
}
console.log(new Scores([
    new Score("Bob", 3, 2, 0),
    new Score("Sam", 2, 1, 0),
    new Score("Ann", 1, 1, 0),
    new Score("Joe", 2, 1, 0),
    new Score("Ben", 1, 1, 0),
]).topStudents());

module.exports = {
    Score,
    Scores
}
