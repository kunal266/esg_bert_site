import React, { useState } from 'react';
import Upload from 'rc-upload';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyDropzone = () => {
  const [nowprog,setnowprog] = useState(0);
  const [progshow,setprogshow] = useState(false);
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
      setnowprog( Math.round(step.percent));
      console.log("nowprog",nowprog);
    },
    onError(err) {
      console.log('onError', err);
    },
    style: { display: 'inline-block', width:800, height: 600, background: '#fff' },
    // openFileDialogOnClick: false
  };
  return (
    <div
      style={{
        margin: 100,
      }}
    >
      {progshow?<div><ProgressBar now={nowprog} style={{width:600}}/></div>:null}
      <div>
        <Upload {...props}>
          <a>Drag or Upload file</a>
        </Upload>
      </div>
    </div>
  );
};

export default MyDropzone;