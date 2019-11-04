import React from 'react';
import {ReactReduxContext} from 'react-redux';
import { v4 } from 'node-uuid'

const onChangeFile=(event,store)=>{
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0];
    var id = v4();
    store.dispatch({
        type:"ADD_IMG",
        id,
        image:file.name,
    })
    console.log(file);
}

const AddPhoto = () => {
    const inputRef = React.useRef();
    return (
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <div  className="custom-file">
                    <input
                        className="custom-file-input"
                        id="customFile"
                        type="file"
                        ref={inputRef}
                        onChange={event => onChangeFile(event,store)}
                        accept="image/jpg,image/jpeg,image/png"
                    />
                    <label className="custom-file-label" for="customFile">Choose file</label>
                </div>
            )}
    </ReactReduxContext.Consumer>
        
    )
}

export default AddPhoto;
