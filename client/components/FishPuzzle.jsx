import React from 'react'
import { withRouter } from 'react-router-dom'

const fishRow1Col1 = {id: 1, img: '/fish/fish-row-1-col-1.jpg'}
const fishRow1Col2 = {id: 2, img: '/fish/fish-row-1-col-2.jpg'}
const fishRow1Col3 = {id: 3, img: '/fish/fish-row-1-col-3.jpg'}
const fishRow1Col4 = {id: 4, img: '/fish/fish-row-1-col-4.jpg'}
const fishRow2Col1 = {id: 5, img: '/fish/fish-row-2-col-1.jpg'}
const fishRow2Col2 = {id: 6, img: '/fish/fish-row-2-col-2.jpg'}
const fishRow2Col3 = {id: 7, img: '/fish/fish-row-2-col-3.jpg'}
const fishRow2Col4 = {id: 8, img: '/fish/fish-row-2-col-4.jpg'}
const fishRow3Col1 = {id: 9, img: '/fish/fish-row-3-col-1.jpg'}
const fishRow3Col2 = {id: 10, img: '/fish/fish-row-3-col-2.jpg'}
const fishRow3Col3 = {id: 11, img: '/fish/fish-row-3-col-3.jpg'}
const fishRow3Col4 = {id: 12, img: '/fish/fish-row-3-col-4.jpg'}
const fishRow4Col1 = {id: 13, img: '/fish/fish-row-4-col-1.jpg'}
const fishRow4Col2 = {id: 14, img: '/fish/fish-row-4-col-2.jpg'}
const fishRow4Col3 = {id: 15, img: '/fish/fish-row-4-col-3.jpg'}
const fishRow4Col4 = {id: 16, img: '/fish/fish-row-4-col-4.jpg'}
const fishRow5Col1 = {id: 17, img: '/fish/fish-row-5-col-1.jpg'}
const fishRow5Col2 = {id: 18, img: '/fish/fish-row-5-col-2.jpg'}
const fishRow5Col3 = {id: 19, img: '/fish/fish-row-5-col-3.jpg'}
const fishRow5Col4 = {id: 20, img: '/fish/fish-row-5-col-4.jpg'}

class FishPuzzle extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        1: fishRow1Col1,
        2: fishRow1Col2,
        3: fishRow1Col3,
        4: fishRow1Col4,
        5: fishRow2Col1,
        6: fishRow2Col2,
        7: fishRow2Col3,
        8: fishRow2Col4,
        9: fishRow3Col1,
        10: fishRow3Col2,
        11: fishRow3Col3,
        12: fishRow3Col4,
        13: fishRow4Col1,
        14: fishRow4Col2,
        15: fishRow4Col3,
        16: fishRow4Col4,
        17: fishRow5Col1,
        18: fishRow5Col2,
        19: fishRow5Col3,
        20: fishRow5Col4,
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
         </img>

            <div>
            <img src={fishRow1Col1.img} className='fish-img-selection' onClick={() => this.handleClick(1)}/>     
            <img src={fishRow1Col2.img} className='fish-img-selection' onClick={() => this.handleClick(2)}/> 
            <img src={fishRow1Col3.img} className='fish-img-selection' onClick={() => this.handleClick(3)}/> 
            <img src={fishRow1Col4.img} className='fish-img-selection' onClick={() => this.handleClick(4)}/>
            <img src={fishRow2Col1.img} className='fish-img-selection' onClick={() => this.handleClick(5)}/>     
            <img src={fishRow2Col2.img} className='fish-img-selection' onClick={() => this.handleClick(6)}/> 
            <img src={fishRow2Col3.img} className='fish-img-selection' onClick={() => this.handleClick(7)}/> 
            <img src={fishRow2Col4.img} className='fish-img-selection' onClick={() => this.handleClick(8)}/>
            <img src={fishRow3Col1.img} className='fish-img-selection' onClick={() => this.handleClick(9)}/>     
            <img src={fishRow3Col2.img} className='fish-img-selection' onClick={() => this.handleClick(10)}/> 
            <img src={fishRow3Col3.img} className='fish-img-selection' onClick={() => this.handleClick(11)}/> 
            <img src={fishRow3Col4.img} className='fish-img-selection' onClick={() => this.handleClick(12)}/>
            <img src={fishRow4Col1.img} className='fish-img-selection' onClick={() => this.handleClick(13)}/>     
            <img src={fishRow4Col2.img} className='fish-img-selection' onClick={() => this.handleClick(14)}/> 
            <img src={fishRow4Col3.img} className='fish-img-selection' onClick={() => this.handleClick(15)}/> 
            <img src={fishRow4Col4.img} className='fish-img-selection' onClick={() => this.handleClick(16)}/>
            <img src={fishRow5Col1.img} className='fish-img-selection' onClick={() => this.handleClick(17)}/>     
            <img src={fishRow5Col2.img} className='fish-img-selection' onClick={() => this.handleClick(18)}/> 
            <img src={fishRow5Col3.img} className='fish-img-selection' onClick={() => this.handleClick(19)}/> 
            <img src={fishRow5Col4.img} className='fish-img-selection' onClick={() => this.handleClick(20)}/>
            </div>

        </div>
      )
    }
  }

export default withRouter(FishPuzzle)