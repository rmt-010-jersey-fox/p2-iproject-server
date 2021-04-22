function convert(d) {
    let day = 0;
    if (d === "sunday") {
        day = 7 
    } else if ( d === "monday") {
        day = 1
    } else if ( d=== "tuesday") {
        day = 2
    } else if ( d === "wednesday") {
        day = 3
    } else if ( d === "thursday") {
        day = 4
    } else if ( d === "friday") {
        day = 5
    } else if ( d === "saturday") {
        day = 6
    }
    return day;
}
function addDays(input) {
    // console.log(input, "input addDays")
    input = convert(input)
    // console.log(input, "input after convert")

    let add = 0;
    const date = new Date()
    const today = date.getDay()
    console.log(today)
    if (input < today) {
        add = 7 - today + input
    } else {
        add = input - today
    }
    console.log(add, " add this days")
    var result = new Date();
    result.setDate(result.getDate() + (add + 1));
    return result;
}

module.exports = {addDays}