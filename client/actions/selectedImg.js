// import request from 'superagent'

export function selectImg(id) {
    return {
        //type of action is select_image
        type: 'SELECT_IMAGE',
        //and it takes an id
        id
    }
}