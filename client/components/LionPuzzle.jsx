import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
//importing selectImg action
import { selectImg } from '../actions/selectedImg'
import { lionImages } from '../data/lionPuzzleImageData'

class LionPuzzle extends React.Component {
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
     if (selectedImg === Number(id)) {
        const img = document.getElementById(Number(id))
        const index = id -1
        img.src = this.state.lionArray[index].url
     } else {
         console.log(selectedImg, id)
     }
    }

    componentDidMount () {

      const newState = lionImages.map(imageData => {
        return (
          {id: imageData.id, 
           url: imageData.img}
        )
    })

    this.setState({lionArray: newState}, () => console.log(this.state))

  }

    render () {
 
      return (
        <div>
         <div>
        <h1>Animals</h1>
        </div>

          <div>
          {this.state.lionArray.length > 0 ? this.state.lionArray.map(image => {
            return <img key={image.id} id={image.id} className='lion-puzzle-pieces' onClick={() => this.compareId(this.props.selectedImgID, image.id)}/>
          })
          : <div></div>
         }
        </div>

        <div>
          {this.state.lionArray.length > 0 ? this.state.lionArray.map(imgData => {
            return <img src={imgData.url} key={imgData.id} className='lion-img-selection' onClick={() => this.handleClick(imgData.id)}/>
          })
          : <div></div>
        }
        </div>

        <Link to='/animals-fish'><h2 style={{paddingLeft: '880px'}}>Next</h2></Link>

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

export default withRouter(connect(mapStateToProps)(LionPuzzle))