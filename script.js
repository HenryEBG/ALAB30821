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
let percentPlanted
/***********************
 * Example with 1 week
 ***********************/

console.log("***************************")
console.log("*** Ex. 1 Growing Pains ***")
console.log("***************************")


// number of weeks
numWeeks=1
// calculate the area cover with plants
plantGrows=Math.pow(2,numWeeks-1)*initArea//(numWeeks-1)*2*initArea+initArea//calculate area occuped
//calculate percent of area cover with plants
percentPlanted=plantGrows/area

// Console logs to get the answers
console.log(`The total area is ${area} square meters`)
console.log(`Number of weeks are ${numWeeks}`)
console.log(`The area used is ${plantGrows} square meters`)
console.log(`The percent used is ${percentPlanted*100}%`)
console.log(``)

//control flow
if(percentPlanted>0.8){
  console.log(`The garden need to be Pruned, exceed the 80% of the capacity`)
  

}else if(percentPlanted>0.5){
  console.log(`The garden is Monitored, is between 50% ad 80% of the capacity`)
}else{
  console.log(`The garden need to be Planted, is under the 50% of the capacity`)
}

console.log(`***************************************************`)

/**
 * Example with 1 week
 */
// number of weeks
numWeeks=2
// calculate the area cover with plants
plantGrows=Math.pow(2,numWeeks-1)*initArea//(numWeeks-1)*2*initArea+initArea//calculate area occuped
//calculate percent of area cover with plants
percentPlanted=plantGrows/area

// Console logs to get the answers
console.log(`The total area is ${area} square meters`)
console.log(`Number of weeks are ${numWeeks}`)
console.log(`The area used is ${plantGrows} square meters`)
console.log(`The percent used is ${percentPlanted*100}%`)
console.log(`***************************************************`)
// control flow 
if(percentPlanted>0.8){
  console.log(`The garde need to be Pruned, exceed the 80% of the capacity`)
}else if(percentPlanted>0.5){
  console.log(`The garden is Monitored, is between 50% ad 80% of the capacity`)
}else{
  console.log(`The garden need to be Planted, is under the 50% of the capacity`)
}
console.log(`***************************************************`)



/**
 * Example with 3 week
 */
// number of weeks
numWeeks=3
// calculate the area cover with plants
plantGrows=Math.pow(2,numWeeks-1)*initArea//calculate area occuped
//calculate percent of area cover with plants
percentPlanted=plantGrows/area

// Console logs to get the answers
console.log(`The total area is ${area} square meters`)
console.log(`Number of weeks are ${numWeeks}`)
console.log(`The area used is ${plantGrows} square meters`)
console.log(`The percent used is ${percentPlanted*100}%`)
console.log(`***************************************************`)
//control flow
if(percentPlanted>0.8){
  console.log(`The garde need to be Pruned, exceed the 80% of the capacity`)
  

}else if(percentPlanted>0.5){
  console.log(`The garden is Monitored, is between 50% ad 80% of the capacity`)
}else{
  console.log(`The garden need to be Planted, is under the 50% of the capacity`)
}
console.log(`***************************************************`)



/**
 * Part 2: Thinking Bigger
 */

console.log("*****************************")
console.log("*** Ex. 2 Thinking Bigger ***")
console.log("*****************************")

// initial plants
initPlant=100
// initial area
initArea = minSpace*initPlant
// initial number of weeks
numWeeks=10
// variable to save area needed
let areaUsed=0
let areaNeeded=0
// variable to save radius of the area needed
let radiusNeeded=0

//calculate areaNeeded
// plantGrows=Math.pow(2,numWeeks-1)*initArea
areaUsed=Math.pow(2,numWeeks-1)*initArea
areaNeeded=(areaUsed-area)/0.8
//calculate radiusNeeded use Math.sqrt 
radiusNeeded=Math.sqrt(areaNeeded/PI)

// Console logs to get the answers
console.log(`The total area used is ${areaUsed} square meters`)
console.log(`The total area extra needed is ${areaNeeded} square meters`)
console.log(`Number of weeks are ${numWeeks}`)

console.log(`***************************************************`)
//control flow
console.log(`we need an additional space of a radius of ${radiusNeeded} to not pruned the garden for ${numWeeks} weeks`)



/**
 * Part 3:  Errors in Judgement
 * 
 */

 console.log("*********************************")
 console.log("*** Ex. 3 Errors in Judgement ***")
 console.log("*********************************")


try{
// number of weeks
numWeeks=1
initPlant=100
initArea=minSpace*100

// calculate the area cover with plants
plantGrows=Math.pow(2,numWeeks-1)*initArea//(numWeeks-1)*2*initArea+initArea//calculate area occuped
//calculate percent of area cover with plants
percentPlanted=plantGrows/area
if(percentPlanted>1){
  throw(`Error of judgement, there is not enough space in a ${area} square meters to begin with ${initPlant} plants for 10 weeks. We need ${(percentPlanted-1)*100}% equal to ${plantGrows-area} square meters more of garden.`)
}
// Console logs to get the answers
console.log(`The total area is ${area} square meters`)
console.log(`Number of weeks are ${numWeeks}`)
console.log(`The area used is ${plantGrows} square meters`)
console.log(`The percent used is ${percentPlanted*100}%`)
console.log(``)

//control flow
if(percentPlanted>0.8){
  console.log(`The garden need to be Pruned, exceed the 80% of the capacity`)
  

}else if(percentPlanted>0.5){
  console.log(`The garden is Monitored, is between 50% ad 80% of the capacity`)
}else{
  console.log(`The garden need to be Planted, is under the 50% of the capacity`)
}

console.log(`***************************************************`)
} catch(err){
    console.log(`Error ${err}`)
}
