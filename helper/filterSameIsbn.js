function filterSameISBN(data) {
    let array = []
    for (let i = 0; i < data.length; i++) {
        let count = 0
        for (let j = i + 1; j < data.length; j++) {
            if (data[j].isbn !== data[i].isbn) {
                count++
            }
        }
        if (count == data.length - 1 - i  && data[i].isbn != 'None') {
            array.push(data[i])
        }
    }
    return array
}

module.exports = filterSameISBN