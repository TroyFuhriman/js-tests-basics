// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {
    day = day.toLowerCase()
    let days = [
        "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
    ]
    if (offset) {
        days.shift()
        days.push("sunday")
    }
    switch (day) {
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
            let num = days.indexOf(day)
            num++
            return num
        default:
            return "That's not a day of the week"

    }
}



// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {
    let scores = [-3, -2, -1, 0, 1, 2,]
    if (par) {
        scores.shift()
        scores.shift()
        scores.shift()
        scores.shift()
        scores.push(3, 4, 5, 6)
    }
    switch (score) {
        case scores[1]: return "Ace"
        case scores[2]: return "Eagle"
        case scores[3]: return "Birdie"
        case scores[4]: return "Par"
        case scores[5]: return "Bogie"
        case scores[6]: return "Double Bogie"
        default: return "Ouch"

    }
}



// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0

function cardCounter(card) {
    switch (card) {
        case "2": count++
        case "3": count++
        case "4": count++
        case "5": count++
        case "6": count++
        case "7": count
        case "8": count
        case "9": count
        case "10": count--
        case "J": count--
        case "Q": count--
        case "K": count--
        case "A": count--
            if (Math.sign(count) == 1) { return count, "bet" }
            else if (Math.sign(count) == -1) { return count, "hold" }
    }
}