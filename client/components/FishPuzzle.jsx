import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectImg } from '../actions/selectedImg'
import { fishImages } from '../data/fishPuzzleImageData'

class FishPuzzle extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        fishArray: []
      }
      this.handleClick = this.handleClick.bind(this)
      this.compareId = this.compareId.bind(this)
    }

   handleClick(id) {
     this.props.dispatch(selectImg(id))
    }

    compareId(selectedImg, id) {
     if (selectedImg === Number(id)) {
        const img = document.getElementById(Number(id))
        const index = id -1
        img.src = this.state.fishArray[index].url
      } else {
         console.log(selectedImg, id)
     }
    }

    componentDidMount () {

      const newState = fishImages.map(imageData => {
        return (
          {id: imageData.id, 
           url: imageData.img}
        )
    })

    this.setState({fishArray: newState}, () => console.log(this.state))

  }
    render () {

      return (
        
        <div>         

        <div>
          {this.state.fishArray.length > 0 ? this.state.fishArray.map(image =>  {
          return <img key={image.id} id={image.id} className='fish-puzzle-pieces' onClick={() => this.compareId(this.props.selectedImgID, image.id)}/>
           })
           : <div></div>
         }
         </div> 

         <div>
          {this.state.fishArray.length > 0 ? this.state.fishArray.map(imgData =>  {
          return <img src={imgData.url} key={imgData.id} className='fish-img-selection' onClick={() => this.handleClick(imgData.id)}/>
           })
           : <div></div>
         }
         </div> 
        </div>
      )
    }
  }


  function mapStateToProps (state) {
    return {
      selectedImgID: state.selectedImgID
    }
  }

export default withRouter(connect(mapStateToProps)(FishPuzzle))