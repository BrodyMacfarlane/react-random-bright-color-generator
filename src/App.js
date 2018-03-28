import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      color: '#FFFFFF',
      lastPosition: 0
    }
    this.updateColor = this.updateColor.bind(this)
  }

  componentDidMount(){
    setInterval(() => {
      this.updateColor()
      console.log(this.state.color)
    }, 1500)
  }

  updateColor(){
    let threefiveseven = [3,5,7]
    let oneToThree = 2 * (Math.floor((Math.random())*3) + 1) + 1
    console.log(oneToThree)
    if(oneToThree === this.state.lastPosition){
      console.log("repeat!!")
      let spliceIndex = threefiveseven.indexOf(oneToThree)
      threefiveseven.splice(spliceIndex, 1)
      let oneandtwo = Math.floor(Math.random() * 2)
      oneToThree = threefiveseven[oneandtwo]
      console.log("the new oneToThree: " + oneToThree)
    }
    let colorArr = ['#']
    let possibilities = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8']
    let rand1 = Math.floor((Math.random()*possibilities.length))
    let rand2 = Math.floor((Math.random()*possibilities.length))
    let rand3 = Math.floor((Math.random()*possibilities.length))
    let rand4 = Math.floor((Math.random()*possibilities.length))
    let rand5 = Math.floor((Math.random()*possibilities.length))
    let rand6 = Math.floor((Math.random()*possibilities.length))
    colorArr.push(possibilities[rand1],possibilities[rand2],possibilities[rand3],possibilities[rand4],possibilities[rand5],possibilities[rand6])
    colorArr[oneToThree - 1] = 'F'
    colorArr[oneToThree - 2] = 'F'
    this.setState({
      color: colorArr.join(""),
      lastPosition: oneToThree
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color}}>
      </div>
    );
  }
}

export default App;
