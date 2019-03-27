import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const lionRow1Col1 = {id: 1, img: '/lion/lion-row-1-col-1.jpg'}
const lionRow1Col2 = {id: 2, img: '/lion/lion-row-1-col-2.jpg'}
const lionRow2Col1 = {id: 3, img: '/lion/lion-row-2-col-1.jpg'}
const lionRow2Col2 = {id: 4, img: '/lion/lion-row-2-col-2.jpg'}

class LionPuzzle extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        1: lionRow1Col1,
        2: lionRow1Col2,
        3: lionRow2Col1,
        4: lionRow2Col2,
        selectedImg: []
      }
      this.handleClick = this.handleClick.bind(this)
      this.compareId = this.compareId.bind(this)
    }

   handleClick(id) {
     this.setState({selectedImg: id})
    }
  
    compareId(selectedImg, id) {
     if (selectedImg === Number(id)) {
        const img = document.getElementById(id.toString())
        img.src = this.state[Number(id)].img
     } else {
         console.log(selectedImg, id)
     }
    }

    render () {

      
      return (
        <div>
         <div>
          <h1>Animals</h1>
         </div>

        <img className='lion-puzzle-pieces' id='1' 
         onClick={() => this.compareId(this.state.selectedImg, '1')}>
        </img>

        <img className='lion-puzzle-pieces' id='2' onClick={() => this.compareId(this.state.selectedImg, '2')}>
         </img> 

        <br></br>

         <img className='lion-puzzle-pieces' id='3' onClick={() => this.compareId(this.state.selectedImg, '3')}>
         </img>

         <img className='lion-puzzle-pieces' id='4' onClick={() => this.compareId(this.state.selectedImg, '4')}>
         </img>

        <Link to='/animals-fish'><h2 style={{paddingLeft: '880px'}}>Next</h2></Link>

            <div>
            <img src={lionRow2Col2.img} className='lion-img-selection' onClick={() => this.handleClick(4)}/>     
            <img src={lionRow1Col2.img} className='lion-img-selection' onClick={() => this.handleClick(2)}/> 
            <img src={lionRow2Col1.img} className='lion-img-selection' onClick={() => this.handleClick(3)}/> 
            <img src={lionRow1Col1.img} className='lion-img-selection' onClick={() => this.handleClick(1)}/>
            </div>

        </div>
      )
    }
  }

export default withRouter(LionPuzzle)