/**
 * Exercise 1
 * Growing Pains
 */

const PI = 3.1415
const radius = 10
const area = PI*radius*radius

const minSpace = 0.8
const initPlant = 20
const initArea = minSpace*initPlant

console.log(`The total area is ${area} square meters`)
let numWeeks=2
console.log(`Number of weeks are ${numWeeks}`)
let plantGrows=numWeeks*2*initArea
console.log(`The area used is ${plantGrows} square meters`)
let percentPlanted=plantGrows/area
console.log(`The percent used is ${percentPlanted*100}%`)


if(percentPlanted>0.8){
  console.log(`The garde need to be Pruned, exceed the 80% of the capacity`)
  

}else if(percentPlanted>0.5){
  console.log(`The garden is Monitored, is between 50% ad 80% of the capacity`)
}else{
  console.log(`The garden need to be Planted, is under the 50% of the capacity`)
}
