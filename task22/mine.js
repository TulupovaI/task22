// const list1 = document.querySelector('.list1');
// const list2Cat = document.querySelector('.list2__cat');
// const list2Dog = document.querySelector('.list2__dog');
// const list2Fish = document.querySelector('.list2__fish');
// let activeElement = null;
// const btn = document.querySelectorAll('.btn');
// const form = document.querySelector("form");
// const submitButton = document.querySelector(".send");


// list1.addEventListener('click', showList);


// function showList(e) {
//   const target = e.target;


//   list2Cat.style.display = 'none';
//   list2Dog.style.display = 'none';
//   list2Fish.style.display = 'none';


//   if (target.classList.contains('list1__cat')) {
//     list2Cat.style.display = 'block';
//   } else if (target.classList.contains('list1__dog')) {
//     list2Dog.style.display = 'block';
//   } else if (target.classList.contains('list1__fish')) {
//     list2Fish.style.display = 'block';
//   }
 
// }

// list2Cat.addEventListener('click', showProduct);
// list2Dog.addEventListener('click', showProduct);
// list2Fish.addEventListener('click', showProduct);

// function showProduct(e){
//   const target = e.target;
//   if (activeElement) {
//     activeElement.style.display = 'none';
//   }
 
//   if (target.classList.contains('cat1')) {
//     activeElement = document.querySelector('.cat1__info');
//   } else if (target.classList.contains('cat2')) {
//     activeElement = document.querySelector('.cat2__info');
//   } else if (target.classList.contains('cat3')) {
//     activeElement = document.querySelector('.cat3__info');
//   } else if (target.classList.contains('dog1')) {
//     activeElement = document.querySelector('.dog1__info');
//   } else if (target.classList.contains('dog2')) {
//     activeElement = document.querySelector('.dog2__info');
//   } else if (target.classList.contains('dog3')) {
//     activeElement = document.querySelector('.dog3__info');
//   } else if (target.classList.contains('fish1')) {
//     activeElement = document.querySelector('.fish1__info');
//   } else if (target.classList.contains('fish2')) {
//     activeElement = document.querySelector('.fish2__info');
//   } else if (target.classList.contains('fish3')) {
//     activeElement = document.querySelector('.fish3__info');
//   }

//   activeElement.style.display = 'block';
// }


// btn.forEach((button) => {
//   button.addEventListener('click', buyProduct);
// });


// function buyProduct() { 
// form.style.display = "block";
//   // alert("Товар куплено!");

//   if (activeElement) {
//     activeElement.style.display = 'none';
//     activeElement = null;
//   }

//   list2Cat.style.display = 'none';
//   list2Dog.style.display = 'none';
//   list2Fish.style.display = 'none';
// }
// // форма


// submitButton.addEventListener("click", function () {
//   const surname = document.querySelector("#suruname").value;
//   const name = document.querySelector("#name").value;
//   const pat = document.querySelector("#patronymic").value;
//   const pay = document.querySelector("input[name='pay']:checked").value;
//   const city = document.querySelector("#city-select").value;
//   const post = document.querySelector("#post-select").value;
//   const comment = document.querySelector("#comment").value;

//   const NAME_ERROR = "Please fill in the field";

//   let isValid = true;

//   function validateField(field, errorClass, errorMessage) {
//     if (field.trim() === "") {
//       isValid = false;
//       field.classList.add("error");
//       field.parentNode.querySelector("small").textContent = errorMessage;
//     } else {
//       field.classList.remove("error");
//       field.parentNode.querySelector("small").textContent = "";
//     }
//   }

//   validateField(
//     document.querySelector("#suruname"),
//     document.querySelector(".surn"),
//     NAME_ERROR
//   );
//   validateField(
//     document.querySelector("#name"),
//     document.querySelector(".n"),
//     NAME_ERROR
//   );

//   // Add validation for other fields

//   if (isValid) {
//     // Process the form if all fields are valid
//     const tableRow = `
//       <tr>
//         <td>${surname}</td>
//         <td>${name}</td>
//         <td>${pat}</td>
//         <td>${city}</td>
//         <td>${post}</td>
//         <td>${pay}</td>
//         <td>${comment}</td>      
//       </tr>
//     `;
//     const tableBody = document.querySelector("tbody");
//     tableBody.innerHTML += tableRow;
//     form.reset();
//   }
// });


const list1 = document.querySelector('.list1');
const list2Cat = document.querySelector('.list2__cat');
const list2Dog = document.querySelector('.list2__dog');
const list2Fish = document.querySelector('.list2__fish');
let activeElement = null;
const btn = document.querySelectorAll('.btn');
const forma = document.querySelector("form");
const submitButton = document.querySelector(".send");


list1.addEventListener('click', showList);


function showList(e) {
  const target = e.target;


  list2Cat.style.display = 'none';
  list2Dog.style.display = 'none';
  list2Fish.style.display = 'none';

  if (target.classList.contains('list1__cat')) {
    list2Cat.style.display = 'block';
  } else if (target.classList.contains('list1__dog')) {
    list2Dog.style.display = 'block';
  } else if (target.classList.contains('list1__fish')) {
    list2Fish.style.display = 'block';
  }

}

list2Cat.addEventListener('click', showProduct);
list2Dog.addEventListener('click', showProduct);
list2Fish.addEventListener('click', showProduct);

function showProduct(e) {
  const target = e.target;
  if (activeElement) {
    activeElement.style.display = 'none';
  }

  activeElement = document.querySelector(`.${target.classList[0]}__info`);
  activeElement.style.display = 'block';
}


btn.forEach((button) => {
  button.addEventListener('click', buyProduct);
});


function buyProduct() {
  forma.style.display = "block";

  if (activeElement) {
    activeElement.style.display = 'none';
    activeElement = null;
  }

  list2Cat.style.display = 'none';
  list2Dog.style.display = 'none';
  list2Fish.style.display = 'none';
}

//validation

//  const form = document.querySelector("#signup")


  // const surname = document.querySelector("#surname").value;
  // const name = document.querySelector("#name").value;
  // const pat = document.querySelector("#patronymic").value;
  // const pay = document.querySelector("input[name='card']:checked").value;
  // const city = document.querySelector("#city-select").value;
  // const post = document.querySelector("#post-select").value;
  // const comment = document.querySelector("#comment").value;
  // const tentacles = document.querySelector("#tentacles").value;

//   const NAME_ERROR = "Please fill in the field";
//   const CHOICE_ERROR = "Make your choice"
  
//   const nameElement = form.elements['name'];
//   const surnameElement = form.elements['surname'];
//   const patronymicElement = form.elements['patronymic'];
//   const cityElement = form.elements['city-select'];
//   const postElement = form.elements['post-select'];
//   const countElement = form.elements['tentacles'];

//   function showError(el, message){
//     const errorPlaceholder = el.parentNode.querySelector('small');
//     errorPlaceholder.textContent = message;
//     el.classList.add('error')
//   }
//   function showSuccess(el){
//     const errorPlaceholder = el.parentNode.querySelector('small');
//     errorPlaceholder.textContent = '';
//     el.classList.remove('error')
//   }
//   function validateName(el, message) {
//     if (el.value !== ''){
//       showSuccess(el);
//       return true;
//     }else{
//       showError(el, message);
//       return false;
//     }
//   }



//   form.addEventListener('submit', (event)=>{
//     event.preventDefault();

//     const isNameValid = validateName(nameElement, NAME_ERROR);
//     const isSurameValid = validateName(surnameElement, NAME_ERROR);
//     const isPatronymicValid = validateName(patronymicElement, NAME_ERROR);
//     const isCityValid = validateName(cityElement, CHOICE_ERROR);
//     const isPostValid = validateName(postElement, CHOICE_ERROR);
//     // const isCountValid = validateCount(countElement, CHOICE_ERROR);

//     if(isNameValid && isSurameValid && isPatronymicValid && isCityValid && isPostValid ){
//       console.log('Submit')

   
//             const tableRow = `
//               <tr>
//                 <td>${surname}</td>
//                 <td>${name}</td>
//                 <td>${pat}</td>
//                 <td>${pay}</td>
//                 <td>${city}</td>
//                 <td>${post}</td>               
                     
//               </tr>
//             `;
//             const tableBody = document.querySelector("tbody");
//             tableBody.innerHTML += tableRow;
//             form.reset();
//           }
//   });
const form = document.querySelector("#signup");
const table = document.querySelector("table");

const NAME_ERROR = "Please fill in the field";
const CHOICE_ERROR = "Make your choice";

function showError(el, message) {
  const errorPlaceholder = el.parentNode.querySelector("small");
  errorPlaceholder.textContent = message;
  el.classList.add("error");
}

function showSuccess(el) {
  const errorPlaceholder = el.parentNode.querySelector("small");
  errorPlaceholder.textContent = "";
  el.classList.remove("error");
}

function validateName(el, message) {
  if (el.value !== "") {
    showSuccess(el);
    return true;
  } else {
    showError(el, message);
    return false;
  }
}

function createTableEntry(data) {
  const { surname, name, pat, pay, city, post, tentacles} = data;

  const tableRow = `
    <tr>
      <td>${surname}</td>
      <td>${name}</td>
      <td>${pat}</td>
      <td>${pay}</td>
      <td>${city}</td>
      <td>${post}</td>
      <td>${tentacles }</td>

    </tr>
  `;

  const tableBody = table.querySelector("tbody");
  tableBody.innerHTML += tableRow;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameElement = form.elements["name"];
  const surnameElement = form.elements["surname"];
  const patronymicElement = form.elements["patronymic"];
  const cityElement = form.elements["city-select"];
  const postElement = form.elements["post-select"];
  const countElement = form.elements["tentacles"];

  const isNameValid = validateName(nameElement, NAME_ERROR);
  const isSurameValid = validateName(surnameElement, NAME_ERROR);
  const isPatronymicValid = validateName(patronymicElement, NAME_ERROR);
  const isCityValid = validateName(cityElement, CHOICE_ERROR);
  const isPostValid = validateName(postElement, CHOICE_ERROR);

  const close = document.querySelector('.close');

  if (isNameValid && isSurameValid && isPatronymicValid && isCityValid && isPostValid) {
    const data = {
      surname: surnameElement.value,
      name: nameElement.value,
      pat: patronymicElement.value,
      pay: form.querySelector("input[name='card']:checked").value,
      city: cityElement.value,
      post: postElement.value,
      tentacles: countElement.value,
    };

    createTableEntry(data);
    form.style.display = "none";
    table.style.display = "block";
    close.style.display = "block";

    form.reset();
  }
});

document.querySelector('.close').onclick = function() {  
  table.style.display = "none";  
}
