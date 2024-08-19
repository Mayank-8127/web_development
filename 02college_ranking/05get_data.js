// #total no of students,
// #gender ratio,
// #homestate students ratio other state students ratio foreign students,
// #median placements,
// #total students ratio placed students ratio students going for higher studies ratio unemployed students,
// #student to faculty ratio

// #median placement average of 3 years,
// #money spent in last year
// #money recieved for sponsered research and projects in last year


const fs = require('fs');

function checkCourseType(course){
    a = ["PG [3","UG [3","UG [4","UG [5"];
    for(let i = 0; i < a.length; i++){
        if(course.slice(0,5) == a[i]){
            return "long";
        }
    }
    b = ["PG [1","PG [2","PG [6","UG [6","PG-In"]
    for(let i = 0; i < b.length; i++){
        if(course.slice(0,5) == b[i]){
            return "short";
        }
    }
    return "none";
}

data = fs.readFileSync('/home/mayank/repos/web_development/02college_ranking/11dataofpdfs.txt', 'utf-8');
data = data.split('\n');
let list = [];
for(let i = 0; i < data.length; i++){
    if(data[i] == '<<>>'){
        let listoflist = [];
        listoflist.push(data[i+5]);
        i += 14;
        courses = 0;
        while(data[i] != 'Total Actual Student Strength (Program(s) Offered by your Institution)'){
            i += 7;
            courses++;
        }
        listoflist.push(courses);
        listoflist.push({"UG [3": null,
            "UG [4": null,
            "UG [5": null,
            "UG [6": null,
            "PG [1": null,
            "PG [2": null,
            "PG [3": null,
            "PG [6": null,
            "PG-In": null
        });
        i += 51;
        for(let j = 0; j < courses; j++){
            course = data[i].slice(0,5);
            if(course == "PG-In"){
                i--;
                listoflist[2][course] = [data[i+2],data[i+3],data[i+4],data[i+5],data[i+6],data[i+7]];
                i += 14;
            }
            else{
                listoflist[2][course] = [data[i+2],data[i+3],data[i+4],data[i+5],data[i+6],data[i+7]];
                i += 14;
            }
        }
        i++;
        while(true){
            let coursetype = checkCourseType(data[i]);
            let course = data[i].slice(0,5);
            if(coursetype == "none"){
                break;
            }else if(coursetype == "long"){
                while(data[i] != "2022-23"){
                    i++;
                }
                listoflist[2][course].push(data[i-3], data[i-1], data[i+1], data[i+2], data[i+3].split("(")[0]);
                i += 3;
                while(isNaN(data[i])){
                    i++;
                }
                listoflist[2][course].push(data[i]);
                i++;
            }else if(coursetype == "short"){
                while(data[i] != "2022-23"){
                    i++;
                }
                listoflist[2][course].push(data[i-1], data[i+1], data[i+2], data[i+3].split("(")[0]);
                i += 3;
                while(isNaN(data[i])){
                    i++;
                }
                listoflist[2][course].push(data[i]);
                i++;
            }else{
                break;
            }
        }
        while(data[i] != "Number of faculty members entered"){
            i++;
        }
        listoflist.push(data[i+1]);

        list.push(listoflist);
    }
}




let csv = JSON.stringify(list)


fs.writeFile('/home/mayank/repos/web_development/02college_ranking/12list.txt', csv, () => {});