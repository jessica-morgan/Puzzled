import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectImg } from '../actions/selectedImg'
import { fishImages } from '../data/fishPuzzleImageData'

const fishPuzzleCompleteArray = []

class FishPuzzle extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        fishArray: [],
        shuffled: []
      }
      this.handleClick = this.handleClick.bind(this)
      this.compareId = this.compareId.bind(this)
      this.checkPuzzleComplete = this.checkPuzzleComplete.bind(this)
      this.shuffle = this.shuffle.bind(this)
    }

   handleClick(id) {
     this.props.dispatch(selectImg(id))
    }

    compareId(selectedImg, id) {
      if (selectedImg === Number(id)) {
        const img = document.getElementById(Number(id))
         const item = this.state.fishArray.filter(item => item.id === id )
           console.log(item)
          img.src = item[0].url
          const removed = this.state.shuffled.filter(el => el.id !== id)
        this.setState({shuffled: removed})
        } else {
       console.log(selectedImg, id)
      }
     }

    checkPuzzleComplete(selectedImgId, tileId) {
      if (selectedImgId === tileId) {
        fishPuzzleCompleteArray.push({[selectedImgId]: tileId})
       } else {
     console.log(selectedImgId, tileId)
    }
  }

  shuffle(array) {
    const newArray = []
    array.forEach(obj => {
      let newObj = Object.assign({}, obj)
      newArray.push(newObj)
    })
      var ctr = newArray.length, temp, index;
  // While there are elements in the array
      while (ctr > 0) {
  // Pick a random index
          index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
          ctr--;
  // And swap the last element with it
          temp = newArray[ctr];
          newArray[ctr] = newArray[index];
          newArray[index] = temp;
      }
      this.setState({shuffled: newArray})
   }
  
    componentDidMount () {

  const newState = fishImages.map(imageData => {
    return (
      {id: imageData.id, 
       url: imageData.img}
      )
    })
   this.setState({fishArray: newState}, () => {
  this.shuffle(this.state.fishArray)
 })
}

    render () {

      return (
        
        <div>         

        <div>
          {this.state.fishArray.length > 0 ? this.state.fishArray.map(image =>  {
            return <img key={image.id} id={image.id} className='fish-puzzle-pieces' 
             onClick={() => {this.checkPuzzleComplete(this.props.selectedImgID, image.id); 
              this.compareId(this.props.selectedImgID, image.id)}}/>
            })
          : <div></div>
         }
         </div> 

         <div>
          {this.state.fishArray.length > 0 ? this.state.shuffled.map(imgData =>  {
           return <img src={imgData.url} key={imgData.id} className='fish-img-selection' 
            onClick={() => this.handleClick(imgData.id)}/>
           })
           : <div></div>
         }

         <div>
           <button onClick={() => this.shuffle(this.state.shuffled)}>Shuffle</button>
         </div>

        </div> 

         {fishPuzzleCompleteArray.length === 19 ? <div><Link to='/'><h2 style={{paddingLeft: '880px'}}>Next</h2></Link></div>
        : <div> </div>}
         
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