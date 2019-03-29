import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectImg } from '../actions/selectedImg'
import { fishImages } from './fishPuzzleImageData'

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
        const img = document.getElementById(id.toString())
        img.src = this.state[Number(id)].img
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
         
          {/* {this.state.fishArray.map(image => {
            return <img className='fish-puzzle-pieces' key={image.id} onClick={() => this.compareId(this.props.selectedImg, image.id)}/>
          }
        )}  */
          }

        <div>
          {this.state.fishArray.length > 0 ? this.state.fishArray.map(image =>  {
          return <img key={image.id} className='fish-puzzle-pieces' onClick={() => this.compareId(this.props.selectImg, image.id)}/>
           })
           : <div></div>
         }
         </div> 

         {/* <div>
          <h1>Animals</h1>
         </div>

        <img className='fish-puzzle-pieces' id='1' 
         onClick={() => this.compareId(this.state.selectedImg, '1')}>
        </img>

        <img className='fish-puzzle-pieces' id='2' onClick={() => this.compareId(this.state.selectedImg, '2')}>
         </img> 

         <img className='fish-puzzle-pieces' id='3' onClick={() => this.compareId(this.state.selectedImg, '3')}>
         </img>

         <img className='fish-puzzle-pieces' id='4' onClick={() => this.compareId(this.state.selectedImg, '4')}>
         </img>
            <br></br>
         <img className='fish-puzzle-pieces' id='5' 
         onClick={() => this.compareId(this.state.selectedImg, '5')}>
        </img>

        <img className='fish-puzzle-pieces' id='6' onClick={() => this.compareId(this.state.selectedImg, '6')}>
         </img> 

         <img className='fish-puzzle-pieces' id='7' onClick={() => this.compareId(this.state.selectedImg, '7')}>
         </img>

         <img className='fish-puzzle-pieces' id='8' onClick={() => this.compareId(this.state.selectedImg, '8')}>
         </img>
         <br></br>
         <img className='fish-puzzle-pieces' id='9' onClick={() => this.compareId(this.state.selectedImg, '9')}>
         </img>

         <img className='fish-puzzle-pieces' id='10' onClick={() => this.compareId(this.state.selectedImg, '10')}>
         </img>

         <img className='fish-puzzle-pieces' id='11' 
         onClick={() => this.compareId(this.state.selectedImg, '11')}>
        </img>

        <img className='fish-puzzle-pieces' id='12' onClick={() => this.compareId(this.state.selectedImg, '12')}>
         </img> 
         <br></br>
         <img className='fish-puzzle-pieces' id='13' onClick={() => this.compareId(this.state.selectedImg, '13')}>
         </img>

         <img className='fish-puzzle-pieces' id='14' onClick={() => this.compareId(this.state.selectedImg, '14')}>
         </img>

         <img className='fish-puzzle-pieces' id='15' 
         onClick={() => this.compareId(this.state.selectedImg, '15')}>
        </img>

        <img className='fish-puzzle-pieces' id='16' onClick={() => this.compareId(this.state.selectedImg, '16')}>
         </img> 
         <br></br>
         <img className='fish-puzzle-pieces' id='17' onClick={() => this.compareId(this.state.selectedImg, '17')}>
         </img>

         <img className='fish-puzzle-pieces' id='18' onClick={() => this.compareId(this.state.selectedImg, '18')}>
         </img>

         <img className='fish-puzzle-pieces' id='19' onClick={() => this.compareId(this.state.selectedImg, '19')}>
         </img>

         <img className='fish-puzzle-pieces' id='20' onClick={() => this.compareId(this.state.selectedImg, '20')}>
         </img>*/}

            <div>
          {this.state.fishArray.length > 0 ? this.state.fishArray.map(imageData =>  {
          return <img src={imageData.url} key={imageData.id} className='fish-img-selection' onClick={() => this.handleClick(imageData.id)}/>
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