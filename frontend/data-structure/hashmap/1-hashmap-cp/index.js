function ageDistribution(persons) {
    let result = new Map();
    // TODO: answer here
    for (let peson of persons) {
        if (result.has(peson.age)) {
            result.set(peson.age, result.get(peson.age) + 1);
        } else {
            result.set(peson.age, 1);
        }
    }
    return result
}

function groupByAge(persons) {
    let result = new Map();
    // TODO: answer here
    for (let peson of persons) {
        if (result.has(peson.age)) {
            result.get(peson.age).push(peson);
        } else {
            result.set(peson.age, [peson]);
        }
    }
    return result
}

let people = [
    { name: "Bob", age: 21 },
    { name: "Sam", age: 28 },
    { name: "Ann", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ben", age: 28 },
]

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
    ageDistribution, groupByAge
}