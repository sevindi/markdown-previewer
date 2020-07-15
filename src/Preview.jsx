import {  MarkdownPreview  } from 'react-marked-markdown'
import React, { Component } from 'react';

class Preview extends Component {

  render() {
    return (
      <div className='preview-container'>
        <MarkdownPreview className='previewBox' value={this.props.text} />
      </div>
    );
  }
}

export default Preview