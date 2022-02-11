/**
 * 
 * @param {*} key 
 * @param {*} value 
 */
function dataSend(key,value){
   localStorage.setItem(key,JSON.stringify(value))
}

/**
 * 
 * @param {*} key 
 */
function dataGet(key){
    return JSON.parse(localStorage.getItem(key))
}
/**
 * Student Data Map
 */
function showData() {
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
        <td>${gpa(stu.Bangla,stu.English,stu.Math,stu.Science,stu.Ict,stu.Religion)}</td>
        <td>g</td>
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
                       <td>${data[i].Math}</td>
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
function closse(){
    viewpane.classList.remove('active')
}


function gpa(ban,eng,mat,sci,ict,rel){
     let total = ban + eng + mat + sci + ict + rel 
     let  avg  = total / 6

    return avg;
}
