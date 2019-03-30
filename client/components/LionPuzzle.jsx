import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
//importing selectImg action
import { selectImg } from '../actions/selectedImg'
import { lionImages } from '../data/lionPuzzleImageData'

const lionPuzzleCompleteArray = []

class LionPuzzle extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        lionArray: [],
        shuffled: []
      }
      this.handleClick = this.handleClick.bind(this)
      this.compareId = this.compareId.bind(this)
      this.checkPuzzleComplete = this.checkPuzzleComplete.bind(this)
      this.shuffle = this.shuffle.bind(this)
    }

   handleClick(id) {
     console.log(id)
     //handleClick is dispatching selectImg with an id to redux state when img is clicked 
     this.props.dispatch(selectImg(id))
    }
  
    compareId(selectedImg, id) {
     if (selectedImg === Number(id)) {
       const img = document.getElementById(Number(id))
        const item = this.state.lionArray.filter(item => item.id === id )
          console.log(item)
         img.src = item[0].url
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
      const newState = lionImages.map(imageData => {
        return (
          {id: imageData.id, 
           url: imageData.img}
        )
    })
    this.setState({lionArray: newState}, () => {
      this.shuffle(this.state.lionArray)
    })
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
             onClick={() => {this.checkPuzzleComplete(this.props.selectedImgID, image.id); 
              this.compareId(this.props.selectedImgID, image.id)}}/>
          })
          : <div></div>
         }
         
        </div>

        <div>
          
          {this.state.lionArray.length > 0 ? this.state.shuffled.map(imgData => {
            return <img src={imgData.url} key={imgData.id} className='lion-img-selection' 
             onClick={() => this.handleClick(imgData.id)}/>
          })
          : <div></div>
        }

        <div >
          <button onClick={() => this.shuffle(this.state.shuffled)}>Shuffle</button>
        </div>

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

export default withRouter(connect(mapStateToProps)(LionPuzzle))