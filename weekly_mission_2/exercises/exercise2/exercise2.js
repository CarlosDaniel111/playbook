const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   // Ejercicio 2.1
console.log("Ejercicio 2.1")
explorers.forEach(explorer => {
   console.log(explorer.name)
})

//Ejercicio 2.2
console.log("\nEjercicio 2.2")
explorers.forEach(explorer => {
    console.log(explorer.stack)
})

//Ejercicio 2.3
console.log("\nEjercicio 2.3")
const new_list = explorers.map(explorer => {
    return explorer.stack
})
console.log(new_list)

//Ejercicio 2.4
console.log("\nEjercicio 2.4")
const explorers_js = explorers.filter(explorer => 
    explorer.stack.includes("js")
)
console.log(explorers_js)

//Ejercicio 2.5
console.log("\nEjercicio 2.5")
const explorer_cdmx = explorers.find(explorer =>
    explorer.city=="CDMX"
)
console.log(explorer_cdmx)

//Ejercicio 2.6
console.log("\nEjercicio 2.6")
const all_exercises = explorers.reduce((acc,explorer) =>
    acc + explorer.exercises_completed,0
)
console.log(all_exercises)

//Ejercicio 2.7
console.log("\nEjercicio 2.7")
const validation = explorers.some(explorer => 
    explorer.missions.frontend.exercisesFinished
)
console.log(validation)

//Ejercicio 2.8
console.log("\nEjercicio 2.8")
const validation2 = explorers.every(explorer =>
    explorer.missions.onboarding.isFinished
)
console.log(validation2)