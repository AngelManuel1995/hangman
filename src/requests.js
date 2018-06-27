/*
    // const getPuzzle = (wordCount) => {
    //     return new Promise((resolve, reject) => {
    //         const request = new XMLHttpRequest()
            
    //         request.addEventListener('readystatechange', (e) => {
    //             if(e.target.readyState === 4 && e.target.status){
    //                 const data = JSON.parse(e.target.responseText)
    //                 resolve(data.puzzle)
    //             }else if(e.target.readyState === 4){
    //                 reject('An error has taken place')
    //             }
    //         })
        
    //         request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    //         request.send()
    //     })
    // } 
*/

const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        let data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to fetch data')
    }
}

const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((data) => {
        if(data.status === 200){
            return data.json()
        }else{
            throw new Error('unable to fetch data')
        }
    }).then((data) => {
        return data.puzzle
    })
}

/*
    // const getPuzzle = (wordCount,callback) => {

    //     const request = new XMLHttpRequest()

    //     request.addEventListener('readystatechange', (e) => {
    //         if(e.target.readyState === 4 && e.target.status){
    //             const data = JSON.parse(e.target.responseText)
    //             callback(undefined,data.puzzle)
    //         }else if(e.target.readyState === 4){
    //             callback('An errar has taken place',undefined)
    //         }
    //     })

    //     request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    //     request.send()
    // }
*/

const getCountry = async (countryCode) => {
    let response = await fetch(`https://restcountries.eu/rest/v2/all`) 
    if(response.status === 200){
        let data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }else{
        throw new Error('Unable to fetch data')
    }
}

const getCountryOld = (countryCode) => {
    return fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('unable to fetch data')
        }
    }).then((data) => {
        return data.find((country) => {
            return country.alpha2Code === countryCode
        })
    })
}

const getLocation = async () => {
    let response = await fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c')
    if(response.status === 200){
         return response.json()
    }else{
        throw new Error('Unable to fetch data')
    }
}

const getLocationOld = () => {
    return fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c').then((response) => {
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Unable to fetch data')
        }
    })
}

/*
    // const getCountry = (countryCode) => {
    //     return new Promise( (resolve, reject) => {
    //         const request = new XMLHttpRequest()

    //         request.addEventListener('readystatechange', (e) => {
    //             if(e.target.readyState === 4 && e.target.status){
    //                 const data = JSON.parse(e.target.responseText)
    //                 resolve(data)                
    //             }else if(e.target.readyState === 4){
    //                 reject('An error has taken place')
    //             }
    //         })

    //         request.open('GET', `https://restcountries.eu/rest/v2/alpha/${countryCode}`)
    //         request.send()
    //     })
    // }
*/
/*
    // const getCountry = (countryCode, callback) => {
    //     const request = new XMLHttpRequest()

    //     request.addEventListener('readystatechange', (e) => {
    //         if(e.target.readyState === 4 && e.target.status){
    //             const data = JSON.parse(e.target.responseText)
    //             callback(undefined, data)
    //         }else if(e.target.readyState === 4){
    //             callback('An error has taken place')
    //         }
    //     })

    //     request.open('GET', `https://restcountries.eu/rest/v2/alpha/${countryCode}`)
    //     request.send()
    // }
*/

export { getPuzzle as default }