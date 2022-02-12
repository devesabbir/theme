function Results() {
    this.gpaCal = (bn, en, mat, sci, ict, rel) => {

        let gpa;
        let grade;

        if (bn < 33 || en < 33 || mat < 33 || sci < 33 || ict < 33 || rel < 33) {
            return{
                gpa : 0,
                grade : 'F'
            }
        } else {
            let marks = (bn + en + mat + sci + ict + rel) / 6


            if (marks >= 0 && marks <= 32) {
                gpa = 0;
                grade = 'F'
            } else if (marks >= 33 && marks <= 39) {
                gpa = 1
                grade = 'D'
            } else if (marks >= 40 && marks <= 49) {
                gpa = 2
                grade = 'C'
            } else if (marks >= 50 && marks <= 59) {
                gpa = 3
                grade = 'B'
            } else if (marks >= 60 && marks <= 69) {
                gpa = 3.5
                grade = 'A-'
            } else if (marks >= 70 && marks <= 79) {
                gpa = 4
                grade = 'A'
            } else if (marks >= 80) {
                gpa = 5
                grade = 'A+'
            }

            return {
                gpa: gpa,
                grade: grade,
            }
        }


    }
}

/**
 * 
 * @param {*} key 
 * @param {*} value 
 */
function dataSend(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 
 * @param {*} key 
 */
function dataGet(key) {
    return JSON.parse(localStorage.getItem(key))
}
/**
 * Student Data Map
 */
function showData() {
    // let res = new Results();
    let data = dataGet('Students')
    let showAll = '';
    data.map((stu, index) => {

        showAll += `
        <tr>
        <td>${index + 1}</td>
        <td>${stu.Name}</td>
        <td>${stu.Roll}</td>
        <td>${stu.Class}</td>
        <td>${stu.Gender}</td>
        <td>${new Results().gpaCal(stu.Bangla,stu.English,stu.Maath,stu.Science,stu.Ict,stu.Religion).gpa}</td>
        <td>${new Results().gpaCal(stu.Bangla,stu.English,stu.Maath,stu.Science,stu.Ict,stu.Religion).grade}</td>
        <td><img src="${stu.Photo}" alt=""></td>
        <td>
            <button onclick="view(${index})">View</button>
            <button onclick="removeItem(${index})">Delete</button>
       </td>
     </tr> 
        
     `


    })


    std_list.innerHTML = showAll
}
/**
 * Remove Item From Array
 * @param {*} index 
 * @returns 
 */
function removeItem(index) {
    let conf = confirm("Are You Sure?")

    if (conf === true) {
        let data = dataGet('Students')
        data.splice(index, 1)
        dataSend('Students', data)
        showData()
    } else {
        return false;
    }

}

/**
 * Student Single View
 * @param {*} i 
 */
function view(i) {
    let data = dataGet('Students')

    if (dataGet('Students')) {
        viewpane.innerHTML = `
        <div class="row">
        <div class="col-lg-6">
            <ul class="list-group-flush">
                <li class="list-group-item"><span>Name:</span><span>${data[i].Name}</span></li>
                <li class="list-group-item"><span>Roll:</span><span>${data[i].Roll}</span></li>
                <li class="list-group-item"><span>Class:</span><span>${data[i].Class}</span></li>
                <li class="list-group-item"><span>Gender:</span><span>${data[i].Gender}</span></li>
          </ul>  
       </div>
        <div class="col-lg-6">
        <div onclick="closse()" class="close">&times;</div>
       <div class="photo">
         <img class="img img-rounded" src="${data[i].Photo}" alt="">
                </div> 
       </div>
      
   </div> 
   <div class="row">
    <div class="col">
         <table class="table table-stripe mt-2" >
             <thead>
                   <tr>
                    <th>Bangla</th>
                    <th>English</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>ICT</th>
                    <th>Religion</th>
                   </tr>
             </thead>
             <tbody>
                   <tr>
                       <td>${data[i].Bangla}</td>
                       <td>${data[i].English}</td>
                       <td>${data[i].Maath}</td>
                       <td>${data[i].Science}</td>
                       <td>${data[i].Ict}</td>
                       <td>${data[i].Religion}</td>
                   </tr>
             </tbody>
         </table> 
    </div>
   </div>
       
    `
        viewpane.classList.add('active')

    }

}

/**
 * Close Button
 */
function closse() {
    viewpane.classList.remove('active')
}