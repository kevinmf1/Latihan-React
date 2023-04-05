import logo from './logo.svg';
import './App.css';
import React from 'react';
import Language from './Language';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken', count : 0};
  }

  handleClick(name) {
    this.setState({name: name});
  }

  plusValue() {
    this.setState({count: this.state.count + 1});
  }

  minusValue() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <h1>Halo, {this.state.name}!</h1>
        <h2>Nilai saya adalah {this.state.count}</h2>

        <button onClick={() => {this.handleClick('Guru Domba')}}>Guru Domba</button>
        
        {/* Ubah state untuk event onClick */}
        <button onClick={() => {this.handleClick('Ninja Ken')}}>Ninja Ken</button>
        
        {/* Ubah state untuk event onClick */}
        <button onClick={() => {this.plusValue()}}>Tambah Nilai</button>

        {/* Ubah state untuk event onClick */}
        <button onClick={() => {this.minusValue()}}>Kurangi Nilai</button>

        <div className='language'>
          <Language 
            name='HTML & CSS'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
          />
          <Language 
            name='JavaScript'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
          />
          <Language 
            name='React'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
          />
        </div>
      </div>
    );
  }
}

export default App;
