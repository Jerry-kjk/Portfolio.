document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#form")
    const input = document.createElement("input")
    input.id = ("id")
    input.type = "hidden"
    form.appendChild(input)

  fetch("http://localhost:3000/patients")
    .then((res) => res.json())
    .then(function (patients) {

      patients.map(function (patient) {
        let patientName = document.querySelector("#listpatients");
        const patientDisplay = document.createElement("h5");

        patientName.appendChild(patientDisplay);

        patientDisplay.innerHTML = patient_name;

        patientDisplay.addEventListener("click", patientDetails);

        function patientDetails() {
          const patientName = document.querySelector("#name");
          const patientAge = document.querySelector("#age");
          const mobileNum = document.querySelector("#mobile");
          const mail = document.querySelector("#mail");
          const patient = document.querySelector("#patient");
          const address = document.querySelector("#address")
          

          patientName.textContent = patient.name;
          patientAge.textContent = patient.age;
          mobileNum.textContent = patient.mobile_number;
          patientAddress.textContent = patient.address;
          mail.textContent = patient.email;
          patient.textContent = patient.patients;
          input.value = patient.id
        }
      });

      let searchBar = document.querySelector("#search")
      searchBar.addEventListener("keyup", searchDoctor)

      function searchDoctor() {
        let searchValue = searchBar.value.toUpperCase()
        let item = document.getElementsByTagName("h6")

        for(let i = 0; i<item.length; i++){
            let span = item[i]
            
    
    
            if(span.innerHTML.toUpperCase().indexOf(searchValue)> -1){
                item[i].style.display = ""
            }
            else{
                item[i].style.display = "none"
            }
    }
      }
    });

    const btn = document.getElementById("button")
    btn.addEventListener("click", addPatient)

    function addPatient(e){
        e.preventDefault()

        let newPatients = document.querySelector("#patient")
        let addInput = document.querySelector("#add").value;
        let id = document.querySelector("#id").value;
        console.log(addInput) 

        newPatients.innerHTML = addInput

        fetch(`http://localhost:3000/patients/${id}`,{
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
            
          },
          body: JSON.stringify({patients:newPatients.textContent})

        })
        .then(res => res.json())
        .then(patient => patients.textContent = patient.patients)

        e.reset()

    }

});

