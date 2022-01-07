function run() {
    let x = parseInt(document.getElementById("num").value);
    if (x > 0) {
        alert("Đây là số lớn hơn 0");
    }
    else if(x===0){
        alert("Đây là số 0");
    }
    else{
        alert("Đây là số bé hơn 0")
    }
}
