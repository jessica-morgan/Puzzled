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
  
    shuffle(array) {
      const newArray = []
      array.forEach(obj => {
        let newObj = Object.assign({}, obj)
        newArray.push(newObj)
      })
        var ctr = newArray.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = newArray[ctr];
            newArray[ctr] = newArray[index];
            newArray[index] = temp;
        }
        this.setState({shuffled: newArray})
     }

    compareId(selectedImg, id) {
     if (selectedImg === id) {
       const img = document.getElementById(id)
        const item = this.state.lionArray.filter(item => item.id === id )
         img.src = item[0].url
// if these match remove the item from shuffled state
          const removed = this.state.shuffled.filter(el => el.id !== id)
        this.setState({shuffled: removed})
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
        <body className='lion-page'>
        <div>
         <div className='category-title'>
          Animals
        </div>
          <div className='flexbox-left'>
          {this.state.lionArray.length > 0 ? this.state.lionArray.map(image => {
            if (image.id === 1 || image.id === 3) {
            return <img key={image.id} id={image.id} 
             onClick={() => {this.checkPuzzleComplete(this.props.selectedImgID, image.id); 
              this.compareId(this.props.selectedImgID, image.id)}}/>
             }
            })
          : <div></div>
         }
        </div>
        <div className='flexbox-right'>
          {this.state.lionArray.length > 0 ? this.state.lionArray.map(image => {
            if (image.id === 2 || image.id === 4) {
            return <img key={image.id} id={image.id} 
             onClick={() => {this.checkPuzzleComplete(this.props.selectedImgID, image.id); 
              this.compareId(this.props.selectedImgID, image.id)}}/>
             }
            })
          : <div></div>
         }
        </div>

        <div >
          {this.state.lionArray.length > 0 ? this.state.shuffled.map(imgData => {
            return <img src={imgData.url} key={imgData.id} id={imgData.id} className='lion-img-selection' 
             onClick={() => this.handleClick(imgData.id)}/>
          })
          : <div></div>
         }

          {lionPuzzleCompleteArray.length < 4 ? <button className='shuffle-button' onClick={() => this.shuffle(this.state.shuffled)}>Shuffle</button>
          : <div></div>}
        
          {lionPuzzleCompleteArray.length === 4 ? <div><Link to='/animals/fish'><img src='/next-button.png' className='next-button'/></Link></div>
          : <div> </div>
         }
        </div>

        <div style={{marginLeft: '749px'}}>
         {lionPuzzleCompleteArray.length === 4 ? <div className='category-title'>Well done!</div>
         : <div> </div>}
        </div>
        <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/>
        </div>
        </body>
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