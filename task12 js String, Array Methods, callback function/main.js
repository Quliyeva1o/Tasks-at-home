// 1. Massivin birinci elementini almaq üçün JavaScript funksiyasını yazın. 'n' parametrinin ötürülməsi massivin ilk 'n' elementlərini qaytaracaq.
// (Array metodundan istifadə edin)
// Misal:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]


function getFirst(arr, n = 1) {
    return arr.slice(0, n);
}

// console.log(getFirst([1, 73, 99, 20]));
// console.log(getFirst([1, 73, 99, 20], 2));
// console.log(getFirst([1, 73, 99, 20], 0));
// console.log(getFirst([1, 73, 99, 20], 4)); 






// 2. Write a simple JavaScript function to join all elements of the following array into a string.
// console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

function join(arr, s) {
    return arr.join(s);
}

// console.log(join([1, 73, 99, 20], "*"));
// console.log(join([1, 73, 99, 20], "/"));





//   3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
//   Example: 
//   console.log(convert('saLamNecesen)) -> SAlAMnECESEN

function convert(soz) {
    let yenisoz = '';
    for (let i = 0; i < soz.length; i++) {
        let a = soz[i];
        if (a === a.toUpperCase()) {
            yenisoz += a.toLowerCase();
        } else {
            yenisoz += a.toUpperCase();
        }
    }
    return yenisoz;
}

// console.log(convert('saLamNecesen')); 





// 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]



function clear(arr) {
    return arr.filter(function (element) {
        return element;
    });
}

//   console.log(clear([0, 1, false, 2, undefined, '', 3, null])); 



// 5. Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

function clearDuplicate(arr) {
    return arr.filter(function (element, index) {
        return arr.indexOf(element) === index;
    });
}

//   console.log(clearDuplicate([1, 2, 1, 2, 3])); 
//   console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); 



//6. Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true


function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }
}
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]));
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]));
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));




// 7. Bir string ve bir char qebul eden bir function yazın.
// Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin.
//  Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.


function indexsum(str, char) {
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            sum += i;
        }
    }

    return sum === 0 ? -1 : sum;
}

//   console.log(indexsum("salam", 'a'));
//   console.log(indexsum("necesen", 'b')); 





// 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir.
// Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. 
// Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, 
// eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.


function addFun(arr, index, str) {
    if (index >= arr.length) {
        arr.push(str);
    } else {
        arr.splice(index, 0, str);
    }
    return arr;
}


//   console.log(addFun(['a', 'salam', 'b', 'world'], 3, "dev")); 
//   console.log(addFun(['a', 'b', 'c'], 5, "xyz")); 




// 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.
// gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir.
//  Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

function task9(arr1, arr2, char) {
    let mergedArray = arr1.concat(arr2);

    let result = mergedArray.join(char);

    return result;
}

//   console.log(task9([1, 2], [3, 4], '*')); 



// 10. Students object-lerinden ibaret bir array-iniz  olsun. student object-inde (name,surname,age,point) deyerleri var.
// Hemin array-i telebelerin yashina gore azalan sira ile sort edin.
// Hemin array-i telebelerin point deyerine esasen sort edin.
// Hemin array-i parametr olaraq qebul eden  bir funtion yazin.
//  Point-i en ashagi olan ve en yuxari olan teleblerin name-lerini bir array-e yigib return edin. (Math class-indan istifade edin)

var students = [

    { name: 'rena', surname: 'quliyeva', age: 19, point: 100 },
    { name: 'fidan', surname: 'nezirove', age: 20, point: 0 },
    { name: 'lacin', surname: 'abbasov', age: 23, point: 2 }

];

function sortage(arr) {
    return arr.sort((a, b) => b.age - a.age);
}
// console.log(sortage(students))

function sortpoint(arr) {
    return arr.sort((a, b) => a.point - b.point);
}
// console.log(sortpoint(students))

function lowhigh(arr) {
    let sortedByPoint = sortpoint(arr);
    let lowestPoint = sortedByPoint[0].point;
    let highestPoint = sortedByPoint[sortedByPoint.length - 1].point;

    let lowhighstudents = [];

    for (var student of sortedByPoint) {
        if (student.point === lowestPoint || student.point === highestPoint) {
            lowhighstudents.push(student.name);
        }
    }

    return lowhighstudents;
}


console.log(lowhigh(students)); 
