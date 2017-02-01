const React=require('react')

class DelayedButton extends React.Component{
  constructor(){
    super()
    this.handleDelay = this.handleDelay.bind(this)
  }

  handleDelay(event){
    event.persist()
    setTimeout(function() {this.props.onDelayedClick(event)}.bind(this), this.props.delay)
  }

  render(){
    return(
      <div className='DelayedButton'>
        <button onClick={this.handleDelay}/>
      </div>
    )
  }
}

module.exports = DelayedButton
