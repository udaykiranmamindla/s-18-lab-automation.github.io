// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
const sheetId = "1ev9-Ay-tAxHAerWfGehOcSUEOq3YYv0CSUGIxur8_r4";
// sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
const sheetName = encodeURIComponent("Sheet1");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

$.ajax({
  type: "GET",
  url: sheetURL,
  dataType: "text",
  success: function (response) {
    // var data = $.csv.toArrays(response);
    var data = $.csv.toObjects(response);
    var Attendance=new Array();
    for (let i=data.length-1;i>1;i--){
    //creating array in javascript?
    if(data[i]["Attendance"].length==12){

      Attendance.push(i)
    }
    

    }
    console.log(Attendance)
    console.log(data.length)
    var circlevalue=document.querySelector("#circlevalue");
    
    var name1=document.querySelector("#name1");
    var name2=document.querySelector("#name2");
    var name3=document.querySelector("#name3");
    var name4=document.querySelector("#name4");
    var name5=document.querySelector("#name5");
    var name6=document.querySelector("#name6");
    var name7=document.querySelector("#name7");
    var name8=document.querySelector("#name8");
    var name9=document.querySelector("#name9");
    var nameh=document.querySelector("#nameh");

//     for(var i=0; i<9;i++){

//       name1.innerHTML=data[Attendance[i]]["Attendance"];
//       // year1.innerHTML=data[Attendance[i]]["year"];
//       //console.log(data[Attendance[i]]["Date"])
//       //console.log(data[Attendance[i]]["Time"])
//       desg1.innerHTML=data[Attendance[i]]["Date"];
//       time1.innerHTML=data[Attendance[i]]["Time"];
  
// }
    
   name1.innerHTML=data[Attendance[0]]["Attendance"]
    name2.innerHTML=data[Attendance[1]]["Attendance"];
    name3.innerHTML=data[Attendance[2]]["Attendance"];
    name4.innerHTML=data[Attendance[3]]["Attendance"];
    name5.innerHTML=data[Attendance[4]]["Attendance"];
    name6.innerHTML=data[Attendance[5]]["Attendance"];
    name7.innerHTML=data[Attendance[6]]["Attendance"];
    name8.innerHTML=data[Attendance[7]]["Attendance"];
    name9.innerHTML=data[Attendance[8]]["Attendance"];
    

    

    // var year1=document.querySelector("#year1");
    // var year2=document.querySelector("#year2");
    // var year3=document.querySelector("#year3");
    // var year4=document.querySelector("#year4");
    // var year5=document.querySelector("#year5");
    // var year6=document.querySelector("#year6");
    // var year7=document.querySelector("#year7");
    // var year8=document.querySelector("#year8");
    // var year9=document.querySelector("#year9");
   
    // year2.innerHTML=data[1]["year"];
    // year3.innerHTML=data[2]["year"];
    // year4.innerHTML=data[3]["year"];
    // year5.innerHTML=data[4]["year"];
    // year6.innerHTML=data[5]["year"];
    // year7.innerHTML=data[6]["year"];
    // year8.innerHTML=data[7]["year"];
    // year9.innerHTML=data[8]["year"];


    var desg1=document.querySelector("#Desig1");
    var desg2=document.querySelector("#Desig2");
    var desg3=document.querySelector("#Desig3");
    var desg4=document.querySelector("#Desig4");
    var desg5=document.querySelector("#Desig5");
    var desg6=document.querySelector("#Desig6");
    var desg7=document.querySelector("#Desig7");
    var desg8=document.querySelector("#Desig8");
    var desg9=document.querySelector("#Desig9");

    desg1.innerHTML=data[Attendance[0]]["Date "]
    desg2.innerHTML=data[Attendance[1]]["Date "]
    desg3.innerHTML=data[Attendance[2]]["Date "]
    desg4.innerHTML=data[Attendance[3]]["Date "]
    desg5.innerHTML=data[Attendance[4]]["Date "]
    desg6.innerHTML=data[Attendance[5]]["Date "]
    desg7.innerHTML=data[Attendance[6]]["Date "]
    desg8.innerHTML=data[Attendance[7]]["Date "]
    desg9.innerHTML=data[Attendance[8]]["Date "]

    var time1=document.querySelector("#Time1");
    var time2=document.querySelector("#Time2");
    var time3=document.querySelector("#Time3");
    var time4=document.querySelector("#Time4");
    var time5=document.querySelector("#Time5");
    var time6=document.querySelector("#Time6");
    var time7=document.querySelector("#Time7");
    var time8=document.querySelector("#Time8");
    var time9=document.querySelector("#Time9");

    time1.innerHTML=data[Attendance[0]]["Time"]
    time2.innerHTML=data[Attendance[1]]["Time"];
    time3.innerHTML=data[Attendance[2]]["Time"];
    time4.innerHTML=data[Attendance[3]]["Time"];
    time5.innerHTML=data[Attendance[4]]["Time"];
    time6.innerHTML=data[Attendance[5]]["Time"];
    time7.innerHTML=data[Attendance[6]]["Time"];
    time8.innerHTML=data[Attendance[7]]["Time"];
    time9.innerHTML=data[Attendance[8]]["Time"];

//   for(var i=1;i<=9;i++){
//     const names=`names$[i]`
//     const datas=`data${[i-1]}`

//   console.log(`${names}.innerHTML=${datas}["full_name"]`)
//   // `year${i}.innerHTML=data[${i}]["year"]`
//   // `desg${i}.innerHTML=data[${i}]["Designation"]`
//   // `time${i}.innerHTML=data[${i}]["Time"]`
  
// }


    // 'data' is an Array of Objects
    // ADD YOUR CODE HERE
  },
});