"use strict";
function signUp() {
  var email = document.querySelector("#email").value;
  var account = {};
  account.email = email;

  var xhr = new XMLHttpRequest();
  xhr.open("post", "https://www.thef2e.com/api/isSignUp", true);
  xhr.setRequestHeader("Content-type", "application/json");
  var params = JSON.stringify(account);
  
  xhr.send(params);
  xhr.onload = function (e) {
    var result = JSON.parse(xhr.responseText);
    
    if (result.success) {
      var signupTime = new Date(result.timeStamp);
      var strData    = signupTime.getFullYear() + "/" + (signupTime.getMonth() + 1) + "/" + signupTime.getDate() + "  " + signupTime.getHours() + ":" + signupTime.getMinutes() + ":" + signupTime.getSeconds();
      
      document.querySelector(".signupInfor").innerHTML  = result.message;
      document.querySelector("#nickName").innerHTML     = "你的報名名稱： " + result.nickName;
      document.querySelector("#skill").innerHTML        = "你的報名項目： " + result.skill;
      document.querySelector("#date").innerHTML         = "你的報名時間： " + strData;
      
    } else {
      alert(result.message);
    }
  };
}

// 查詢報名人數
function call_api_signUpTotal() {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://www.thef2e.com/api/signUpTotal", true);
  xhr.setRequestHeader("Content-type", "application/json");
  //xhr.send(null);
  xhr.onload = () => {
    var result = JSON.parse(xhr.responseText);
    document.querySelector(".txt_total").innerHTML = "目前有" + result.total + "位參賽者";
  }
  xhr.send();
}

var btn_submit = document.querySelector("#btn_submit");
btn_submit.addEventListener("click", signUp, true);

call_api_signUpTotal();