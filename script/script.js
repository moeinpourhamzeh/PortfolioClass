function testClicked() {
    var textArray = ['one', 'two', 'three']
    textArray.push('four')
    textArray.splice(2, 1)
    console.log(textArray)
    var textArray2 = ['Hi', 'Hello']

    textArrayMixed = textArray.concat(textArray2)

    console.log(textArrayMixed)



}