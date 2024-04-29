function changeMe(arr) {
    for(let i = 0; i <= arr.length -1; i++) {
    if(i === 0) console.log(`1. ${arr[i][0]} ${arr[i][1]}`)
        
    let biography = {
    firstName : arr[i][0],
    lastName : arr[i][1],
    gender : arr[i][2],
    age :  arr[i][3]
    }
    if(biography.age !== undefined) biography.age = new Date().getFullYear() - biography.age  
    else biography.age = 'Invalid Birth Year';
    
    console.log(biography);
    }
}

  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""