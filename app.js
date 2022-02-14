//get Elements
const student_form = document.getElementById('student_form')
const std_list = document.querySelector('.std-list')
const viewpane = document.querySelector('.view')

student_form.addEventListener('submit', function (e) {
    e.preventDefault()
    let nAme = this.querySelector('input[placeholder="Name"]')
    let rollNumber = this.querySelector('input[placeholder="Roll Number"]')
    let cLass = this.querySelector('input[placeholder="Class"]')
    let phoTo = this.querySelector('input[placeholder="Photo"]')
    let genDer = this.querySelector('input[type="radio"]:checked')
    //marks
    let bn = this.querySelector('input[placeholder="Bangla"]')
    let en = this.querySelector('input[placeholder="English"]')
    let math = this.querySelector('input[placeholder="Math"]')
    let science = this.querySelector('input[placeholder="Science"]')
    let ict = this.querySelector('input[placeholder="Ict"]')
    let religion = this.querySelector('input[placeholder="Religion"]')
    

    let allStudents = []

    if (dataGet('Students')) {
        allStudents = dataGet('Students')
    } else {
        allStudents = []
    }

    if (nAme.value == '' || rollNumber.value == '' || rollNumber.value == '' || cLass.value == '' || phoTo.value == '' || bn.value == '' || en.value == '' || math.value == '' || science.value == '' || ict.value == '' || religion.value == '') {
        alert('All Feild Are Requred !')
    } else {
        allStudents.push({
            Name: nAme.value,
            Roll: rollNumber.value,
            Class: cLass.value,
            Photo: phoTo.value,
            Gender: genDer.value,
            Bangla:  parseFloat(bn.value),
            English: parseFloat(en.value),
            Maath: parseFloat(math.value),
            Science: parseFloat(science.value),
            Ict: parseFloat(ict.value),
            Religion: parseFloat(religion.value),

        })

        dataSend('Students', allStudents)
        showData()
    }


})

showData()


// get theme Elements 
const themMenu = document.querySelectorAll('.menu ul a')
const pane = document.querySelectorAll('.pane')

themMenu.forEach( item => {
    item.addEventListener('click', function(event){
         event.preventDefault()
         event.stopPropagation()
          event.stopImmediatePropagation()

         themMenu.forEach( item => {
             item.classList.remove('active')
         })
         
         item.classList.add('active')
         pane.forEach( item => {
             item.classList.remove('active')
         })
         let panel = document.querySelector(this.getAttribute('href'))
         panel.classList.add('active')
    })
})

