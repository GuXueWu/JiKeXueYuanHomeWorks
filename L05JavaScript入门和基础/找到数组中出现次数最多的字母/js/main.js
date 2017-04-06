/**
 * Created by ROG STRIX S5 on 2017/1/9.
 */
/**
 * 计算
 */
function compute() {
    var originData = ["a", "x", "m", "d", "m", "a", "k", "m", "p", "j", "a"];
    var elementArray = new Array();
    var temp;
    //处理数据
    for (temp in originData) {
        var charData = originData[temp];
        var elementPosi = getElement(elementArray, charData);
        if (elementPosi == -1) {
            elementArray.push(new element(charData, 1, temp))
        } else {
            elementArray[elementPosi].count++;
            elementArray[elementPosi].indexStr = elementArray[elementPosi].indexStr + "," + temp;
        }
    }

    //排序
    elementArray.sort(function (a, b) {
        return b.count - a.count;
    })

    //取出最大的元素的count
    var maxCount = elementArray[0].count;
    //根据最大的count取出所有count为maxCount的对象

    var maxElements = getAllMaxElement(elementArray, maxCount);

    if (typeof(maxElements) == "undefined") {
        alert("数据异常")
        return;
    }

    var maxNames = "";
    var maxIndexStr = "";

    maxElements.forEach(function (value, index, array) {
        if (index == 0) {
            maxNames = maxNames + value.name;
            maxIndexStr = maxIndexStr + value.name + "的下标是:" + value.indexStr;
        } else {
            maxNames = maxNames + "," + value.name;
            maxIndexStr = maxIndexStr + "," + value.name + "的下标是:" + value.indexStr;
        }
    });

    document.getElementById("result").innerText = "最多出现的字符是：" + maxNames + ", 最多出现了：" + maxCount + "次, 对应的index是：" + maxIndexStr + "。";
}

/**
 * 获取所有count为最大count的元素集合
 * @param elementArray
 * @param maxCount
 */
function getAllMaxElement(elementArray, maxCount) {
    var result = new Array();
    var temp;
    for (temp in elementArray) {
        var element = elementArray[temp];
        if (element.count == maxCount) {
            result.push(element);
        }
    }
    return result;
}

/**
 * 取出目标数组中的同name的元素，没有返回null
 * @param elementArray
 * @param charData
 * @returns {*}
 */
function getElement(elementArray, charData) {
    if (elementArray.length == 0) {
        return -1;
    }
    var temp;
    for (temp in elementArray) {
        var element = elementArray[temp];
        if (element.name === charData) {
            return temp;
        }
    }
    return -1;
}

/**
 * 封装元素对象
 * @param name
 * @param count
 * @param indexStr
 */
function element(name, count, indexStr) {
    //名字
    this.name = name;
    //次数
    this.count = count;
    //下标
    this.indexStr = indexStr;
};
