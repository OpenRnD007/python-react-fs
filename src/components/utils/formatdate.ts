const formatdate = (dt: string) => {
    if (dt) {
        return new Date(dt).toUTCString()
    }
}

export default formatdate