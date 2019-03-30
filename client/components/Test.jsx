import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
//importing selectImg action
import { selectImg } from '../actions/selectedImg'
import { test } from '../data/test'

const lionPuzzleCompleteArray = []

class Test extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        lionArray: []
      }
      this.handleClick = this.handleClick.bind(this)
      this.compareId = this.compareId.bind(this)
    }

   handleClick(id) {
     //handleClick is dispatching selectImg with an id to redux state when img is clicked 
     this.props.dispatch(selectImg(id))
    }
  
    compareId(selectedImg, id) {
      //as the imgs are in random order in json file compareId now needs to find img by id not index
      //takes the selectedImg id from redux and the id of the img element and checks for match
     if (selectedImg === Number(id)) {
       //getting the img element by its id to insert correct img
        const img = document.getElementById(Number(id))
        // const index = id -1
        //getting the 
        const actualIndex = this.state.lionArray.id
      //change data so id is key and url is value
        //change how its rendering the imgs
        img.src = this.state.lionArray[actualIndex].url
     } else {
         console.log(selectedImg, id)
     }
    }

   checkPuzzleComplete(selectedImgId, tileId) {
      if (selectedImgId === tileId) {
        lionPuzzleCompleteArray.push({[selectedImgId]: tileId})
       } else {
     console.log(selectedImgId, tileId)
    }
  }

    componentDidMount () {

      const newState = test.map(imageData => {
        return (
            {imageData}
        )
    })
    console.log(newState)

    this.setState({lionArray: newState})

  }

    render () {
 
      return (
        <div>
         <div>
        <h1>Animals</h1>
        </div>

          <div>
          {this.state.lionArray.length > 0 ? this.state.lionArray.map(image => {
            return <img key={image.id} id={image.id} className='lion-puzzle-pieces' 
             onClick={() => {this.checkPuzzleComplete(this.props.selectedImgID, image.id); this.compareId(this.props.selectedImgID, image.id)}}/>
          })
          : <div></div>
         }
        </div>

        <div>
          {this.state.lionArray.length > 0 ? Object.values(this.state.lionArray.map(imgData => {
            return <img src={imgData} key={imgData} className='lion-img-selection' 
             onClick={() => {console.log(imgData); this.handleClick(imgData)}}/>
          }))
          : <div></div>
        }
        </div>
        {/* for some reason only works when checking === 3 or < 3 - isn't rendering div when checking === 4 or < 4 */}
        {lionPuzzleCompleteArray.length === 3 ? <div><Link to='/animals-fish'><h2 style={{paddingLeft: '880px'}}>Next</h2></Link></div>
        : <div> </div>}
         
        </div>
      )
    }
  }
  //this allows us to use what has been dispatched to redux state in this component via props
  function mapStateToProps (state) {
    return {
      selectedImgID: state.selectedImgID
    }
  }

export default withRouter(connect(mapStateToProps)(Test))