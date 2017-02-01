const React=require('react')

class CoordinatesButton extends React.Component{
  constructor(){
    super()
    this.mouseClick = this.mouseClick.bind(this)
  }

  mouseClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
}

  render(){
    return(
      <div className='CoordinatesButton'>
        <button onClick={this.mouseClick}/>
      </div>
    )
  }
}

module.exports = CoordinatesButton
