class HeroRating extends React.Component {
  constructor(props) {
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    localStorage.setItem(rateNode.name, this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Рейтинг: {localStorage.getItem(rateNode.name, this.state.value)}
          <select className='hero__rate' value={this.state.value} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </form>
    )
  }

}

