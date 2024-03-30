
// 1. Bir reqem daxil edirsiniz ve hemin reqeme uygun olan ayin adini qaytarir, meselen 5 daxil olunsa function "May" return etmelidir,
//  eger 12 - den boyuk ve ya menfi olan bir deyer daxil olunsa invalid input return etmelidir.

// regular functions
function month() {
    var reqem = Number(prompt("1ve 12 arasinda reqem daxil edin"))
    switch (reqem) {
        case 1:
            alert("yanvar")
            break;
        case 2:
            alert("fevral")
            break;
        case 3:
            alert("mart")
            break;
        case 4:
            alert("aprel")
            break;
        case 5:
            alert("may")
            break;
        case 6:
            alert("iyun")
            break;
        case 7:
            alert("iyul")
            break;
        case 8:
            alert("avqust")
            break;
        case 9:
            alert("sentyabr")
            break;
        case 10:
            alert("oktyabr")
            break;
        case 11:
            alert("noyabr")
            break;
        case 12:
            alert("dekabr")
            break;

        default:
            alert("invalid input")

    }
}
// month()




// anonym function  
const monthan = function () {
    var reqem = Number(prompt("1ve 12 arasinda reqem daxil edin"))
    switch (reqem) {
        case 1:
            alert("yanvar")
            break;
        case 2:
            alert("fevral")
            break;
        case 3:
            alert("mart")
            break;
        case 4:
            alert("aprel")
            break;
        case 5:
            alert("may")
            break;
        case 6:
            alert("iyun")
            break;
        case 7:
            alert("iyul")
            break;
        case 8:
            alert("avqust")
            break;
        case 9:
            alert("sentyabr")
            break;
        case 10:
            alert("oktyabr")
            break;
        case 11:
            alert("noyabr")
            break;
        case 12:
            alert("dekabr")
            break;

        default:
            alert("invalid input")

    }
}
// monthan()



// array function 
const monthar = () => {
    var reqem = Number(prompt("1ve 12 arasinda reqem daxil edin"))
    switch (reqem) {
        case 1:
            alert("yanvar")
            break;
        case 2:
            alert("fevral")
            break;
        case 3:
            alert("mart")
            break;
        case 4:
            alert("aprel")
            break;
        case 5:
            alert("may")
            break;
        case 6:
            alert("iyun")
            break;
        case 7:
            alert("iyul")
            break;
        case 8:
            alert("avqust")
            break;
        case 9:
            alert("sentyabr")
            break;
        case 10:
            alert("oktyabr")
            break;
        case 11:
            alert("noyabr")
            break;
        case 12:
            alert("dekabr")
            break;

        default:
            alert("invalid input")

    }
}
// monthar()




// 2. Prompt-dan 2 dəyər qəbul edirsiniz. biri bir simvoldur, biri isə bir rəqəm və nəticədə həmin rəqəm sayı qədər simvol-u ekrana çap etməlidir. 
// Məsələn, inputlar: b ve 5 daxil olunubsa, nəticə bbbbb olmalıdır.

// regular
function task2() {
    var i = prompt("ededi daxil edin")
    var a = prompt("simvolu daxil edin")
    result = ("")
    for (b = 0; b < i; b++) {
        result += a
    }
    window.alert(result)
}
// task2()

//anonym
const task2an = function () {
    var i = prompt("ededi daxil edin")
    var a = prompt("simvolu daxil edin")
    result = ("")
    for (b = 0; b < i; b++) {
        result += a
    }
    window.alert(result)
}
// task2an()

//arrow
task2ar = () => {
    var i = prompt("ededi daxil edin")
    var a = prompt("simvolu daxil edin")
    result = ("")
    for (b = 0; b < i; b++) {
        result += a
    }
    window.alert(result)
}
// task2ar()







// 3. Daxil olunmuş ədədin mərtəbələrinin cəmini qaytaran alqoritm yazın. Məsələn: 125 daxil olunarsa, nəticə 1+2+5=>8 qaytarmalıdır.

// regular
function task3() {
    let a = prompt("eded daxil edin")
    let sum = 0
    for (i = 0; i < a.length; i++) {
        sum += Number(a[i])
    }
    alert(sum)
}
// task3()

//anonym
const task3an = function () {
    let a = prompt("eded daxil edin")
    let sum = 0
    for (i = 0; i < a.length; i++) {
        sum += Number(a[i])
    }
    alert(sum)
}
// task3an()

//arrow
task3ar = () => {
    let a = prompt("eded daxil edin")
    let sum = 0
    for (i = 0; i < a.length; i++) {
        sum += Number(a[i])
    }
    alert(sum)
}
// task3ar()




// 4. Bir alqoritm yazın, bir ədəd qəbul edir ve hemin ədədin perfect number olub-olmamasini yoxlayir.
// Perfect number - ededin ozunden bashqa butun bolenlerinin cemin ededin ozune beraberdir-se o zaman eded perfect number hesab olunur. 
// Meselen 6 -->  1+2+3 =  6, demeli 6 perfect number-dir. (perfect numbers - 6, 28, 496, 8128, and 33550336)

//regular
function task4() {
    let a = prompt("bir eded daxil edin")

    let sum = 0
    for (i = 1; i < a; i++) {
        if (a % i == 0) {
            sum += i

        }
    }
    if (sum == a) {
        alert(`${a} is perfect number`)
    }
    else {
        alert(`${a} is not a perfect number`)
    }
}
// task4()

//anonym
const task4an = function () {
    let a = prompt("bir eded daxil edin")

    let sum = 0
    for (i = 1; i < a; i++) {
        if (a % i == 0) {
            sum += i

        }
    }
    if (sum == a) {
        alert(`${a} is perfect number`)
    }
    else {
        alert(`${a} is not a perfect number`)
    }
}
// task4an()

//arrow
task4ar = () => {
    let a = prompt("bir eded daxil edin")

    let sum = 0
    for (i = 1; i < a; i++) {
        if (a % i == 0) {
            sum += i

        }
    }
    if (sum == a) {
        alert(`${a} is perfect number`)
    }
    else {
        alert(`${a} is not a perfect number`)
    }
}
// task4ar()




// 5. Daxil olunan ədədin polindrome olub-olmamasını yoxlayan alqoritm yazın. 
// Polindrome ədədlər soldan-sağa və sağdan-sola eyni olan ədədlərdir.
// Məsələn: 121, 4554, 12321 etc. Əgər polindrome-dursa true çap olunsun, əks halda isə false.

//regular
function task5() {
    let a = prompt("bir eded daxil edin")
    let b = ""
    for (i = a.length - 1; i >= 0; i--) {
        b += a[i]

    }
    if (a == b) {
        window.alert(`${a} is polindrome number`)
    }
    else {
        window.alert(`${a} is not a polindrome number`)
    }


}
// task5()

//anonym
const task5an = function () {
    let a = prompt("bir eded daxil edin")
    let b = ""
    for (i = a.length - 1; i >= 0; i--) {
        b += a[i]

    }
    if (a == b) {
        window.alert(`${a} is polindrome number`)
    }
    else {
        window.alert(`${a} is not a polindrome number`)
    }


}
// task5an()

task5ar = () => {
    let a = prompt("bir eded daxil edin")
    let b = ""
    for (i = a.length - 1; i >= 0; i--) {
        b += a[i]

    }
    if (a == b) {
        window.alert(`${a} is polindrome number`)
    }
    else {
        window.alert(`${a} is not a polindrome number`)
    }


}
// task5ar()




// 6. Listdəki sadə ədədlərin ədədi ortasını qaytaran bir alqoritm yazın. 
// Məsələn: [3,7,9,4,24,25,8]; bu listdəki sadə ədədlərin ədədi ortasını hesablayıb qaytarılmalıdır.

//regular
function task6() {
    const arr = [3, 7, 9, 4, 24, 25, 8];
    let sadecem = 0;
    let counter = 0;
    sadeEededleriSayi = 0
    for (j = 0; j < arr.length; j++) {
        for (i = 2; i < arr[j]; i++) {
            if (arr[j] % i === 0) {
                counter++;
                break;
            }
        }
        if (counter === 0) {
            sadecem += arr[j];
            sadeEededleriSayi++
        }
        counter = 0;
    }
    console.log(sadecem / sadeEededleriSayi)
}
// task6();

//anonym
const task6an = function () {
    const arr = [3, 7, 9, 4, 24, 25, 8];
    let sadecem = 0;
    let counter = 0;
    sadeEededleriSayi = 0
    for (j = 0; j < arr.length; j++) {
        for (i = 2; i < arr[j]; i++) {
            if (arr[j] % i === 0) {
                counter++;
                break;
            }
        }
        if (counter === 0) {
            sadecem += arr[j];
            sadeEededleriSayi++
        }
        counter = 0;
    }
    console.log(sadecem / sadeEededleriSayi)
}
// task6an()

// arrow
task6ar = () => {
    const arr = [3, 7, 9, 4, 24, 25, 8];
    let sadecem = 0;
    let counter = 0;
    sadeEededleriSayi = 0
    for (j = 0; j < arr.length; j++) {
        for (i = 2; i < arr[j]; i++) {
            if (arr[j] % i === 0) {
                counter++;
                break;
            }
        }
        if (counter === 0) {
            sadecem += arr[j];
            sadeEededleriSayi++
        }
        counter = 0;
    }
    console.log(sadecem / sadeEededleriSayi)
}
// task6ar()



// 7. Listdəki ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın.
//  Math objectindən istifadə edə bilməzsiniz.
//  Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.

//regular
function task7() {
    const arr = [4, 2, 7, 9, 3, 12, 46, 32, 19];
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(`ededi orta :${(min + max) / 2}`)
}
// task7()

//anonym
const task7an=function() {
    const arr = [4, 2, 7, 9, 3, 12, 46, 32, 19];
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(`ededi orta :${(min + max) / 2}`)
}
// task7an()

//array
task7ar=()=>{
    const arr = [4, 2, 7, 9, 3, 12, 46, 32, 19];
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(`ededi orta :${(min + max) / 2}`)
}
// task7ar()

