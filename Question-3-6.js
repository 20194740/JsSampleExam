function fullName(){
    let fName = 'mohamed',
    sName='ahmed';
    return [fName,sName];
}

let arr = fullName();
let fName = arr[0],
    sName = arr[1];

    console.log(`full name: ${fName} ${sName}`)