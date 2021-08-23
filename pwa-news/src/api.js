const params = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const URL = ' http://localhost:3000'

function getNews(subject) {
    return fetch(`${URL}/${subject}`, params)
        .then((response) => response.json())
        .catch((err) => {
            console.error('Ocorreu um err', err)
        })
}

export default {
    getNews
}