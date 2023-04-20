const randHex = (len) => {
    const maxlen = 8
    const min = Math.pow(16, Math.min(len, maxlen) - 1)
    const max = Math.pow(16, Math.min(len, maxlen)) - 1
    const n = Math.floor(Math.random() * (max - min + 1)) + min
    let r = n.toString(16)
    while (r.length < len) {
      r = r + randHex(len - maxlen)
    }
    return r
}

const generateSessionId = () => {
    // Create a session ID (24 hex chars)
    return randHex(24)
}


export default generateSessionId