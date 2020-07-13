import React from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/markdown'
import 'brace/theme/solarized_dark'

const Editor = (props) => {
  return (
    <div className='editor-container'>
      <AceEditor
        height="100%"
        width="100%"
        mode="markdown"
        theme="solarized_dark"
        fontSize={18}
        value={props.value}
        onChange={props.updatePreview}
      />
    </div>
  );
}


export default Editor