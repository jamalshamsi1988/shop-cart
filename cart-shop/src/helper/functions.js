
const shorten=title=>{
    const splitedTitle=title.split(" ");
    return `${splitedTitle[0]} ${splitedTitle[1]}`

}

export {shorten};