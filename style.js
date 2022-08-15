
function genPassword() {
    let chars = "012345679ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let passwordLength = 12;
    let password = "";

    for(let i = 0;i < passwordLength; i++){
        var rannum = Math.floor(Math.random()*chars.length);
        password += chars.substring(rannum,rannum + 1);
    }

    let startitems = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var item = startitems[Math.floor(Math.random()*startitems.length)];

    let pwd = item + password;
    document.getElementById("password").value = pwd;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
  }