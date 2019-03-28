// import request from 'superagent'

export function selectImg(id) {
    return {
        type: 'SELECT_IMAGE',
        id
    }
}