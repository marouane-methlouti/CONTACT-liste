let contactList = [];

let inputName = document.getElementById("name");
let inputSurName = document.getElementById("surName");
let inputMail = document.getElementById("mail");
let inputTel = document.getElementById("tel");
let add = document.getElementById("add");
let container = document.getElementById("myContainer");
let checkAcccount = document.getElementById("account");
let inputFacebook = document.getElementById("facebook");
let inputLinkedin = document.getElementById("linkedin");

let divFace = document.getElementById("divFace");
let divLink = document.getElementById("divLink");

function updateDom(list) {
  container.innerHTML = "";
  for (const contact of list) {
    // creation des events
    let div = document.createElement("div");
    div.classList.add("actif");
    div.classList.add("col-4");
    let pName = document.createElement("p");
    let pSurName = document.createElement("p");
    let pMail = document.createElement("p");
    let pTel = document.createElement("p");
    let bSwitch = document.createElement("button");
    let btnDel = document.createElement("button");
    let network = document.createElement("a");

    //ajout des data
    bSwitch.innerText = "switch";
    btnDel.innerText = "suppression";
    pName.innerText = `nom: ${contact.name}`;
    pSurName.innerText = `prenom: ${contact.surName}`;
    pMail.innerText = `mail: ${contact.mail}`;
    pTel.innerText = `tel: ${contact.tel}`;

    network.style.display = "block";
    network.target = "_blank";

    if (contact instanceof ContactPerso) {
      network.innerText = contact.facebook;
      network.href = contact.facebook;
    } else if (contact instanceof ContactPro) {
      network.innerText = contact.linkedin;
      network.href = contact.linkedin;
    } else {
      alert("je ne connais le type d'instance !");
    }

    //events
    btnDel.addEventListener("click", function () {
      deleteContact(contact);
      updateDom(contactList);
    });
    bSwitch.addEventListener("click", function () {
      if (contact.isActif == false) {
        contact.isActif = true;
      } else if (contact.isActif == true) {
        contact.isActif = false;
      }
      updateDom(contactList);
    });

    if (contact.isActif == false) {
      div.classList.add("inactif");
      div.classList.remove("actif");
    } else if (contact.isActif === true) {
      div.classList.remove("inactif");
      div.classList.add("actif");
    }

    div.appendChild(pName);
    div.appendChild(pSurName);
    div.appendChild(pMail);
    div.appendChild(pTel);
    div.appendChild(network);
    div.appendChild(bSwitch);
    div.appendChild(btnDel);
    container.appendChild(div);
  }
}

add.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputName.value == "" &&
    inputSurName.value == "" &&
    inputMail == "" &&
    inputTel == ""
  ) {
    alert("remplissez tous les champs");
  } else {
    let Contact;

    if (checkAcccount.checked) {
      Contact = new ContactPro(
        inputName.value,
        inputSuRame.value,
        inputMail.value,
        inputTel.value,
        inputLinkedin.value
      );
    } else {
      Contact = new ContactPerso(
        inputName.value,
        inputSurName.value,
        inputMail.value,
        inputTel.value,
        inputFacebook.value
      );
    }

    contactList.push(Contact);
    updateDom(contactList);
  }
});

checkAcccount.addEventListener("click", function () {
  if (checkAcccount.checked) {
    divFace.classList.add("disabled");
    divLink.classList.remove("disabled");
  } else {
    divFace.classList.remove("disabled");
    divLink.classList.add("disabled");
  }
});
