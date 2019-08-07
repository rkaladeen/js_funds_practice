// Challenge 1
// Output
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

function students_display(arr){
  for (var i = 0; i < arr.length; i++){
    // key = Object.keys(arr[i])
    console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort);
  }
}

students_display(students);

// Challenge 2
// Output
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

let users = {
  employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
  ],
  managers: [
     {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
     {'first_name' : 'Gordon', 'last_name' : 'Poe'}
  ]
};

function staff_display(obj){
  for (var key in obj){
    console.log(key.toUpperCase())
    
    for (var val in obj[key]){
      var temp = parseInt(val)
      temp++
      var char_count = obj[key][val].first_name.length + obj[key][val].last_name.length
      console.log(temp +" - "+ obj[key][val].first_name + ", " + obj[key][val].last_name + " - " + char_count)
    }
  }
}

staff_display(users);