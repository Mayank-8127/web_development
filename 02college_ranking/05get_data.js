// #total no of students,
// #gender ratio,
// #homestate students ratio other state students ratio foreign students,
// #median placements,
// #median placement average of 3 years,
// #total students ratio placed students ratio students going for higher studies ratio unemployed students,

// #money spent in last year
// #money recieved for sponsered research and projects in last year
// #student to faculty ratio

const fs = require('fs');

data = fs.readFileSync('/home/mayank/repos/web_development/02college_ranking/11dataofpdfs.txt', 'utf-8');
data = data.split('\n');
let list = [];
for(let i = 0; i < data.length; i++){
    if(data[i] == '<<>>'){
        let listoflist = [];
        listoflist.push(data[i+5]);
        i += 14;
        while(data[i] != 'Total Actual Student Strength (Program(s) Offered by your Institution)'){
            listoflist.push(data[i]);
            i += 7;
        }
        let courses = listoflist.length - 1;
        //listoflist.push(1);
        i += 53;
        for(let j = 0; j < courses; j++){
            for(let k = 0; k < 6; k++){
                listoflist.push(data[i]);
                i++;
            }
            i += 8;
        }
        i -= 2;
        //listoflist.push(data[i]);
        list.push(listoflist);
    }
}




let csv = list
.map((item) => {
  let row = item;
  return row.join(",");
})
.join("\n");

fs.writeFile('/home/mayank/repos/web_development/02college_ranking/12list.txt', csv, () => {});