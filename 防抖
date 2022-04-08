// 定义一个请求函数
function request(val) {
    console.log("request: " + val);
}

// 定义一个防抖函数
function debounce(fn, delay) {
    let timeout;
    return function(){
      clearTimeout(timeout)
      timeout = setTimeout(()=>{
        fn.apply(this, arguments)
      },delay)
    }
}

let inputEl = document.getElementById("input");

let debounceInput = debounce(request, 500)

inputEl.addEventListener("keyup", function (e) {
    debounceInput(e.target.value);
});
