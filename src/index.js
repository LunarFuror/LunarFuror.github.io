class Die extends React.Component {
  render(){
    return(
      prop.value
    );
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dice: [{value: Math.floor(Math.random() * 6)+1, selected: false}]
    };
  }

  addDie() {
    this.setState({
      dice: this.state.dice.concat({value: Math.floor(Math.random() * 6)+1, selected: false})
    });
  }
  
  createTable = () => {
    let table = []

    // Outer loop to create parent
    let children = []
    //Inner loop to create children
    for (const die of this.state.dice) {
      children.push(<td><button>{die.value}</button></td>)
    }
    //Create the parent and add the children
    table.push(<tr>{children}</tr>)
    return table
  }

  render() {
    return (
		<div>
			<button onClick={()=>this.addDie()}>
				Add Die
			</button>
        <table>
          {this.createTable()}
        </table>
		</div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);