$(document).ready(function() {
    //    $div1 = $('.results');
    //  $div2 = $('.results2');
    //let num1 = [6, 2, 2, 4, 3, 98, 2, 50, 40, 32]
    //let [a, b, ...num2] = num1;
    //num2 = [1, 1, ...num2];

    //mathOps($div1, num1);
    //mathOps($div2, num2);

    // function mathOps($d, num) {  slowMath.add(num[0], num[1])
    //.then(result => {
    //  console.log(result);
    //$d.append(`<p>Add ${num[0]} + ${num[1]} = ${result}</p>`);
    //return slowMath.multiply(result, num[2]);
    //     }).then(result => {
    //       console.log(result);
    //     $d.append(`<p>Multiply by ${num[2]}=  ${result}</p>`);
    //   return slowMath.divide(result, num[3]);
    //}).then(result => {
    //  console.log(result);
    //$d.append(`<p>Divide by ${num[3]}= ${result}</p>`);
    //return slowMath.subtract(result, num[4]);
    //}).then(result => {
    //  console.log(result);
    //$d.append(`<p>Subtract by ${num[4]}= ${result}</p>`);
    //return slowMath.add(result, num[5]);
    // }).then(result => {
    //console.log(result);
    //$d.append(`<p>Add by ${num[5]}= ${result}</p>`);
    // return slowMath.remainder(result, num[6]);
    //}).then(result => {
    //console.log(result);
    //$d.append(`<p>Remainder by ${num[6]}= ${result}</p>`);
    //  return slowMath.multiply(result, num[7]);
    //}).then(result => {
    //console.log(result);
    //$d.append(`<p>Multiply by ${num[7]}= ${result}</p>`);
    //  return slowMath.remainder(result, num[8]);
    //}).then(result => {
    //   console.log(result);
    // $d.append(`<p>Remainder by ${num[8]}= ${result}</p>`);
    // return slowMath.add(result, num[9]);
    //}).then(result => {
    //  $d.append(`<p>Add by ${num[9]}= ${result}</p>`);
    //console.log(`The final result is ${result}.`);
    // $d.append(`<p>The final result is ${result}.</p>`);
    //})
    //.catch(er => {

    //$(`<p>${er}.</p>`).appendTo($d).css('color', 'red');
    //  console.log(er);
    //});


    //}

    // doMath();

    const doMath = async(x, y) => {
        try {
            let response = await slowMath.add(x, y);
            console.log(response);
            let response2 = await slowMath.multiply(response, 2);
            console.log(response2);
            let response3 = await slowMath.divide(response2, 4);
            console.log(response3);
            let response4 = await slowMath.subtract(response3, 3);
            console.log(response4);
            let response5 = await slowMath.add(response4, 98);
            console.log(response5);
            let response6 = await slowMath.remainder(response5, 2);
            console.log(response6);
            let response7 = await slowMath.multiply(response6, 50);
            console.log(response7);
            let response8 = await slowMath.remainder(response7, 40);
            console.log(response8);
            let response9 = await slowMath.add(response8, 32);

            console.log(`The final result is ${response9}.`);

        } catch (err) {
            console.log(err);
        }
    }

    doMath(6, 2);



});