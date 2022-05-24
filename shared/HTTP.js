

export const get = (url , options) => {
    return fetch(url , {
        ...options,
        method : 'GET',
    })
}


export const post = (url , data, options) => {
    return fetch(url , {
        ...options,
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })
}












