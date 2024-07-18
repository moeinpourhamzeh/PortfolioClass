var a = [5, 3, 4, 1, 2]
console.log(a)

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            var temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
}
console.log(a)