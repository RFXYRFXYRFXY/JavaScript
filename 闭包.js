//一个闭包函数
function fn() {
    const a = 1;
    console.log('a' + a);
}

//尝试修改闭包中的a的值
function fnn() {
    // 此处的const并未被fn调用，构成一个闭包
    const a = 2;
    fn();
}

// 调用fnn函数，尝试修改fn中的const 的值
fnn();
