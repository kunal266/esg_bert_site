import React, { useState } from 'react';
import Upload from 'rc-upload';
import { ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyDropzone = () => {
  const [nowprog, setnowprog] = useState(0);
  const [progshow, setprogshow] = useState(false);
  const props = {
    action: 'https://httpbin.org/post',
    type: 'drag',
    accept: '.txt,.pdf,.docx,.doc',
    beforeUpload(file) {
      console.log('beforeUpload', file.name);
    },
    onStart: file => {
      console.log('onStart', file.name);
      setprogshow(true)
    },
    onSuccess(file) {
      console.log('onSuccess', file);
    },
    onProgress(step, file) {
      // console.log('onProgress', Math.round(step.percent), file.name);
      setnowprog(Math.round(step.percent));
      console.log("nowprog", nowprog);
    },
    onError(err) {
      console.log('onError', err);
    },
    style: { display: 'inline-block', background: '#eee', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: "8px" },
    // openFileDialogOnClick: false
  };
  return (
    <div
      style={{
        margin: 100,
      }}
    >
      <div>
        <Upload {...props}  className="d-flex justify-content-center flex-column  "  style={{width:"90%",height:"90%"}}>

          <div className=' d-flex justify-content-center align-items-center'>
          <img src={require('../Assets/files.png')} alt="file_icon" style={{width:"70px",height:"70px"}}/>
          <br/>
          <a >Drag or Upload file</a></div>
          <br/>
      {progshow ? <div className="d-flex justify-content-center pt-md "><ProgressBar now={nowprog} style={{ width: 600 }} /></div> : null}
        </Upload>
      </div>
    </div>
  );
};

export default MyDropzone;