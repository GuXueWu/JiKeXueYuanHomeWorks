/**
 * Created by ROG STRIX S5 on 2017/1/16.
 */
//输入元素保存数组
var _string = new Array();
//当前的计算类型
var _type;
var input = document.getElementById("input-box");

//拦截键盘按键
window.document.onkeydown = disableRefresh;
function disableRefresh(evt) {
    evt = (evt) ? evt : window.event
    if (evt.keyCode) {
        if (evt.keyCode == 13) {
            operator('result')
        }
        else if (evt.keyCode == 8) {
            input.focus();
            operator('backspace')
        }
        else if (evt.keyCode == 27) {
            operator('clear')
        }
        else if (evt.keyCode == 48) {
            typetoinput('0')
        }
        else if (evt.keyCode == 49) {
            typetoinput('1')
        }
        else if (evt.keyCode == 50) {
            typetoinput('2')
        }
        else if (evt.keyCode == 51) {
            typetoinput('3')
        }
        else if (evt.keyCode == 52) {
            typetoinput('4')
        }
        else if (evt.keyCode == 53) {
            typetoinput('5')
        }
        else if (evt.keyCode == 54) {
            typetoinput('6')
        }
        else if (evt.keyCode == 55) {
            typetoinput('7')
        }
        else if (evt.keyCode == 56) {
            typetoinput('8')
        }
        else if (evt.keyCode == 57) {
            typetoinput('9')
        }
        else if (evt.keyCode == 96) {
            typetoinput('0')
        }
        else if (evt.keyCode == 97) {
            typetoinput('1')
        }
        else if (evt.keyCode == 98) {
            typetoinput('2')
        }
        else if (evt.keyCode == 99) {
            typetoinput('3')
        }
        else if (evt.keyCode == 100) {
            typetoinput('4')
        }
        else if (evt.keyCode == 101) {
            typetoinput('5')
        }
        else if (evt.keyCode == 102) {
            typetoinput('6')
        }
        else if (evt.keyCode == 103) {
            typetoinput('7')
        }
        else if (evt.keyCode == 104) {
            typetoinput('8')
        }
        else if (evt.keyCode == 105) {
            typetoinput('9')
        }
        else if (evt.keyCode == 110) {
            typetoinput('.')
        }
        else if (evt.keyCode == 106) {
            operator('multiply')
        }
        else if (evt.keyCode == 107) {
            operator('plus')
        }
        else if (evt.keyCode == 111) {
            operator('divide')
        }
        else if (evt.keyCode == 109) {
            operator('minus')
        }
    }
}

/**
 * 输入更新输入框
 * @param num
 */
function typetoinput(num) {
    if (input.name == "type") {
        input.value = " ";
        input.name = " ";
    }
    if (num != "." && input.value[0] == 0 && input.value[1] != ".") {
        input.value = num; //充值input的值
    }
    else if (num == "." && input.value.indexOf(".") > -1) {
        input.value = input.value; //只允许输入一个点号
    }
    else if (input.value == "Infinity" || input.value == "NaN") {
        input.value = "";
        input.value += num; //拼接字符
    }
    else {
        input.value += num;
    }
}

/**
 * 操作符
 * @param type
 */
function operator(type) {
    switch (type) {
        case "clear":
            input.value = "0";
            _string.length = 0;
            break;
        case "backspace":
            if (checknum(input.value) != 0) {
                input.value = input.value.replace(/.$/, '');
                if (input.value == "") {
                    input.value = "0";
                }
            }
            break;
        case "opposite":
            if (checknum(input.value) != 0) {
                input.value = -input.value;
            }
            break;
        case "percent":
            if (checknum(input.value) != 0) {
                input.value = input.value / 100;
            }
            break;
        case "pow":
            if (checknum(input.value) != 0) {
                input.value = Math.pow(input.value, 2);
            }
            break;
        case "cos":
            input.value = Math.cos(2 * Math.PI / 360 * input.value);
            break;
        case "sin":
            input.value = Math.sin(2 * Math.PI / 360 * input.value);
            break;
        case "log":
            input.value = Math.log(input.value);
            break;
        case "sqrt":
            if (checknum(input.value) != 0) {
                input.value = Math.sqrt(input.value);
            }
            break;
        case "plus":
            if (checknum(input.value) != 0) {
                _string.push(input.value);
                _type = "plus"
                input.value = "+";
                input.name = "type";
            }
            break;
        case "minus":
            if (checknum(input.value) != 0) {
                _string.push(input.value);
                _type = "minus"
                input.value = "-";
                input.name = "type";
            }
            break;
        case "multiply":
            if (checknum(input.value) != 0) {
                _string.push(input.value);
                _type = "multiply"
                input.value = "×";
                input.name = "type";
            }
            break;
        case "divide":
            if (checknum(input.value) != 0) {
                _string.push(input.value);
                _type = "divide"
                input.value = "÷";
                input.name = "type";
            }
            break;
        case "result":
            if (checknum(input.value) != 0) {
                _string.push(input.value);
                if (parseInt(_string.length) % 2 != 0) {
                    _string.push(_string[_string.length - 2])
                }
                if (_type == "plus") {
                    input.value = (parseFloat(result(_string)[0]) + parseFloat(result(_string)[1])).toFixed(8);
                    input.name = "type"
                }
                else if (_type == "minus") {
                    input.value = (parseFloat(result(_string)[0]) - parseFloat(result(_string)[1])).toFixed(8);
                    input.name = "type"
                }
                else if (_type == "multiply") {
                    input.value = (parseFloat(result(_string)[0]) * parseFloat(result(_string)[1])).toFixed(8);
                    input.name = "type"
                }
                else if (_type == "divide") {
                    input.value = (parseFloat(result(_string)[0]) / parseFloat(result(_string)[1])).toFixed(8);
                    input.name = "type"
                }
                break;
            }
    }
}

/**
 * 获取要计算的两个数据
 * @param value
 * @returns {Array}
 */
function result(value) {
    var result = new Array;
    if (value.length % 2 == 0) {
        result.push((value[value.length - 2]));
        result.push((value[value.length - 1]));
        return (result);
    }
    else {
        result.push((value[value.length - 1]))
        result.push((value[value.length - 2]))

        return (result);
    }
}


/**
 * 校验是否为数字
 * @param inputvalue
 * @returns {number}
 */
function checknum(inputvalue) {
    if (inputvalue == "+" || inputvalue == "-" || inputvalue == "×" || inputvalue == "÷" || input.value == "0") {
        return 0;
    }
}



