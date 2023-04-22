// cacher le formulaire

const btnadd = document.querySelector('.btnadd');
const form = document.querySelector('form');

// Afficher le formulaire & cacher le bouton 'Ajouter'

btnadd.addEventListener('click', () => {
    form.style.visibility = "visible"
    btnadd.style.visibility = "hidden"

})

// ajouter un nouveau contact 

const btnSave = document.querySelector('.btn-submit');
const message = document.querySelector('.message');
const listContact = document.querySelector('.list-contact')
const listContactItem = document.createElement('div.list-contact-item')
const genre = document.querySelector('#gender').value

btnSave.addEventListener('click', (e) => {
    e.preventDefault()
    form.style.visibility = "hidden"
    btnadd.style.visibility = "visible"
    message.style.display = "none"

    listContactItem.innerHTML += ` 
            <div><img class="photo" src="media/js.png" alt="profil"></div>
    <div class="contact-info">
        <h3>
            <span>${document.querySelector('#name').value}</span>
            <span >${document.querySelector('#firstname').value} </span>
        </h3>
        <p>${document.querySelector('#contry').value}</p>
        <p>${document.querySelector('#mail').value} </p>
        <p>${document.querySelector('#gender').value}</p>
    </div>
    <div class="btn-item-conctact">
        <i class="bxs-edit-alt bx"></i>
        <i class="bxs-trash bx "></i>
    </div>`
    listContact.append(listContactItem)
})








/*
for (const cours of courses) {
    coursListeView.innerHTML +=
        `    <div class="cours">
                 <div><img src="${cours.image}" alt="${cours.name}" id="${cours.id}"></div>
                 <iv><label for="${cours.id}">${cours.name}</label></div>
             </div> `
} 

*/