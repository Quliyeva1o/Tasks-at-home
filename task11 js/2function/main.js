// Function 1 - 

//  1 eded daxil olunur. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 
//  50-100 araligindadirsa o edede qeder 5e bolunen,
//  100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini return edən bir function yazin. (arrow function)

Function1 = (a) => {
    counter = 0
    if (a < 50) {
        for (i = 1; i < a; i++) {
            if (i % 3 == 0) {
                counter++
            }
        }
    }

    else if (a > 50 && a < 100) {
        for (i = 1; i < a; i++) {
            if (i % 5 == 0) {
                counter++
            }
        }
    }
    else if (a > 100) {
        for (i = 1; i < a; i++) {
            if (i % 8 == 0) {
                counter++
            }
        }
    }
    return counter;
}

// console.log(Function1(51))

//Function 2 - 2 string qəbul edən bir function yazın və 2 string-dəki ortaq hərflərin sayını return etməlidir.
//  Məsələn: alma və salam daxil olunarsa, a,l və m hərfləri, yəni 3 return etməlidir. Təkrarlanan hərflər bir dəfə sayılmalıdır. (anonym function)
const Function2 = function (a, b) {
    counter = []
    for (i = 0; i < a.length; i++) {
        if (b.includes(a[i])&& !counter.includes(a[i])) {
            counter+=a[i] 
         
        }
      


    }
    console.log(counter.length)

}
Function2("alma","salam")