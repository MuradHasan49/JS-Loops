function longWord(str) {
    let sp = str.split(" ")
    let len = sp[0]
    for (let s of sp) {
        if (s.length > len.length) {
            len = s
        }
    }
    return len
}

console.log(longWord("hello world i a new developer"))