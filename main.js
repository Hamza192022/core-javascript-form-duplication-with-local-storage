
let allCarsInStorage = JSON.parse(localStorage.getItem("allCars"));
let cartable = document.getElementById('cartable');

// if data is available in localstorage then show it on cars table
if (allCarsInStorage == null || allCarsInStorage.length == 0) {

    localStorage.setItem("allCars", JSON.stringify([]));

} else {


    for (let car of allCarsInStorage) {

        let row = document.createElement('tr');
        row.innerHTML = `<td>${car.brandName}</td><td>${car.carName}</td><td>${car.color}</td><td>${car.model}</td>`

        cartable.appendChild(row);

    }

}


let addMoreBtn = document.getElementById('addMore');

addMoreBtn.addEventListener('click', ()=> {

    let createAnotherForm = document.createElement("form");
    createAnotherForm.setAttribute("action", "#");
    createAnotherForm.setAttribute("class", "carForm");
    createAnotherForm.innerHTML = `
        <div>
            <label for="brandName">Brand Name</label>
            <input type="text" id="brandName">    
        </div>
        <br>
        <div>
            <label for="carName">Car Name</label>
            <input type="text" id="carName">    
        </div>
        <br>
        <div>
            <label for="color">Color</label>
            <input type="text" id="color">    
        </div>
        <br>
        <div>
            <label for="model">Model</label>
            <input type="text" id="model">    
        </div>
        <br>
        <button type="button" class="deletebtn" onclick="delMe(event, this)">delete</button>
        <br>
    `;

    let allFormsDiv = document.getElementById('allForms');
    allFormsDiv.appendChild(createAnotherForm);

})




//            delete form by clicking button


    // let allForms = document.querySelectorAll('.carForm');

    // for(let i=1 ; i<(allForms.length) ; i++){
    //     let inputsLength = allForms[i].pop();
    //     let formItem = allForms[i];
    //     let objOfForm = {};
    //     for (let i = 0; i < inputsLength; i++){
    //         if((formItem[i].id == "brandName") || (formItem[i].id == "carName") || (formItem[i].id == "color") || (formItem[i].id == "model")){

    //             objOfForm[`${formItem[i].pop()}`] = `${formItem[i].pop()}`;
    
    //         }
    //     }
        
    //     allCarsInStorage.push(objOfForm)

    let delMe = (event, element) =>  element.parentElement.remove();

    




    // // this function delete all from data 
    //     let deletebtn = document.querySelectorAll(".deletebtn");
    //     //     // let carForm = document.querySelector(".carForm")

    //     for (let i = 0; i < (deletebtn.length); i++) {   

    //         let delBtn = deletebtn[i];
    
    //         delBtn.addEventListener("click", (e)=>{

    //             console.log(`event: `, e)
        
    //             // var allForms = document.getElementById("allForms");
    //             // allForms.parentNode.removeChild(allForms);
            
    //     });
        
    //     }  
        // deletebtn.addEventListener("click", (e)=>{

        //         console.log(`event: `, e)
        
        //         // var allForms = document.getElementById("allForms");
        //         // allForms.parentNode.removeChild(allForms);
            
        // });


    // 2nd  method
    // let deletebtn = document.getElementById("deletebtn");
    //         let carForm = document.querySelector(".carForm")

    //         deletebtn.addEventListener("click",function(){
    //             var allForms = document.getElementById("allForms");
    //             allForms.parentNode.removeChild(allForms);
    //         })

    // function Remove(carForm) {
        
    //         var allForms = document.getElementById("allForms");
    //         allForms.parentNode.removeChild(allForms);
        
    // }




   

    // let allForms = document.getElementById("allForms");
    // let latestCarsInStorage = JSON.parse(localStorage.getItem("allCars"));
    // allForms.splice(index,1)
    // let objOfForm = {};
    
    
    // localStorage.setItem("allCars" , JSON.stringify(allForms))












let submitAllFormsBtn = document.getElementById('submitForms');

submitAllFormsBtn.addEventListener('click', ()=> {

    let allForms = document.querySelectorAll('.carForm');

    // let arrayOfForms = [];

    for (let i = 0; i < (allForms.length); i++) {   

        let inputsLength = allForms[i].length;
        let formItem = allForms[i];
        let objOfForm = {};

        for (let i = 0; i < inputsLength; i++) {

            if((formItem[i].id == "brandName") || (formItem[i].id == "carName") || (formItem[i].id == "color") || (formItem[i].id == "model")){

                objOfForm[`${formItem[i].id}`] = `${formItem[i].value}`;

            }else{

                console.log(`There is another input field that type is: ${formItem[i].type} and value is: ${formItem[i].value}`)

            }

        }
        allCarsInStorage.push(objOfForm);
    
    }

    localStorage.setItem("allCars", JSON.stringify(allCarsInStorage));


    let latestCarsInStorage = JSON.parse(localStorage.getItem("allCars"));
    cartable.innerHTML = `<tr>
        <th>Brand Name</th>
        <th>Car Name</th>
        <th>Color</th>
        <th>Model</th>
    </tr>`

    for (let car of latestCarsInStorage) {

        let row = document.createElement('tr');
        row.innerHTML = `<td>${car.brandName}</td><td>${car.carName}</td><td>${car.color}</td><td>${car.model}</td>`

        cartable.appendChild(row);

    }


})