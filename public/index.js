import {ajax} from '../interop/index';
const serverUrl = 'http://127.0.0.1:8082/';
// 选择器简易封装
function $(str){
  const ele = str.slice(1);
  if(str[0] === '.'){
    return document.getElementsByClassName(ele);
  }else if(str[0] === '#'){
    return document.getElementById(ele);
  }else{
    return document.getElementsByTagName(ele);
  }
}


// 通过设置 Access-Control-Allow-Origin 来解决跨域问题
$('#headAll').addEventListener('click',(e) => {
  ajax({
    url: serverUrl + 'all',
    type: 'GET',
    async: true,
    success: function(res){
      $('#all').innerText = res.info;
    },
  })
})

// 非简单请求
$('#addHeaderBtn').addEventListener('click',(e) => {
  ajax({
    url: serverUrl + 'addHeader',
    type: 'GET',
    async: true,
    header:{
      token: 'option'
    },
    success: function(res){
      $('#addHeader').innerText = res.info;
    },
  })
})