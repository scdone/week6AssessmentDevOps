
const {shuffleArray} = require('./utils')

let testData = [1,2,3,4,5,6,7]


describe('shuffleArray should', () => {
    
    test('shuffleArray should shuffle values in array sent in', () => {
        let shuffledArr = shuffleArray(testData)
        expect(shuffledArr).not.toEqual(testData)
    }),

    test('shuffleArray should return an array the same length as the array sent in', () => {
        let shuffledArr = shuffleArray(testData)
        expect(shuffledArr).toHaveLength(testData.length)
    })
})