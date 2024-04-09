/**
 * Exercise 1
 * Growing Pains
 */
// declaring constants
const PI = 3.1415
const minSpace = 0.8

//declaring variables 
let radius = 5
let area = PI*radius*radius
let initPlant = 20
let initArea = minSpace*initPlant
let numWeeks
let plantGrows
/**
 * Example with 1 week
 */
// number of weeks
numWeeks=1
// calculate the area cover with plants
plantGrows=(numWeeks-1)*2*initArea+initArea//calculate area occuped
//calculate percent of area cover with plants
let percentPlanted=plantGrows/area

// Console logs to get the answers
console.log(`The total area is ${area} square meters`)
console.log(`Number of weeks are ${numWeeks}`)
console.log(`The area used is ${plantGrows} square meters`)
console.log(`The percent used is ${percentPlanted*100}%`)
console.log(`***************************************************`)


if(percentPlanted>0.8){
  console.log(`The garde need to be Pruned, exceed the 80% of the capacity`)
  

}else if(percentPlanted>0.5){
  console.log(`The garden is Monitored, is between 50% ad 80% of the capacity`)
}else{
  console.log(`The garden need to be Planted, is under the 50% of the capacity`)
}


/**
 * Part 2: Thinking Bigger
 */
// initial plants
initPlant=100
// initial area
initArea = minSpace*initPlant
// initial number of weeks
numWeeks=10
// variable to save area needed
let areaNeeded=0
// variable to save radius of the area needed
let radiusNeeded=0

areaNeeded=((initArea*numWeeks*2)-area)/0.8
radiusNeeded=Math.sqrt(areaNeeded/PI)
console.log(`we need an additional space of a radius of ${radiusNeeded} to not pruned the garden for ${numWeeks} weeks`)


/**
 * Part 3:  Errors in Judgement
 * 
 */
