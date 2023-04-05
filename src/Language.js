import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        {/* Ganti code di bawah agar mendisplay prop name */}
        <div className='language-name'>{this.props.name}</div>
        
        {/* Ganti nilai atribut src agar mendisplay prop image */}
        <img 
          className='language-image'
          src={this.props.image}
        />
        
      </div>
    );
  }
}

export default Language;
