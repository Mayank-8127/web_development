//fethes html from given websites and write all of it in a text file
const fs = require('fs');

let arrLink = ['https://www.nirfindia.org/Rankings/2024/OverallRanking.html',
    'https://www.nirfindia.org/Rankings/2024/UniversityRanking.html',
    'https://www.nirfindia.org/Rankings/2024/CollegeRanking.html',
    'https://www.nirfindia.org/Rankings/2024/EngineeringRanking.html',
    'https://www.nirfindia.org/Rankings/2024/ManagementRanking.html',
    'https://www.nirfindia.org/Rankings/2024/PharmacyRanking.html',
    'https://www.nirfindia.org/Rankings/2024/MedicalRanking.html',
    'https://www.nirfindia.org/Rankings/2024/DentalRanking.html',
    'https://www.nirfindia.org/Rankings/2024/LawRanking.html',
    'https://www.nirfindia.org/Rankings/2024/ArchitectureRanking.html',
    'https://www.nirfindia.org/Rankings/2024/AgricultureRanking.html',
    'https://www.nirfindia.org/Rankings/2024/STATEPUBLICUNIVERSITYRanking.html']
for(let i = 0; i < arrLink.length; i++){
    fetch(arrLink[i])
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      fs.appendFile('/home/mayank/repos/web_development/02college_ranking/10data.txt', text,() => {});
    });
}