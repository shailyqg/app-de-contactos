let contacts = [];

function addContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const contact = { name, email };
        contacts.push(contact);
        displayContacts();
        clearForm();
    }
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${contact.name} - ${contact.email} <button class="delete-btn" onclick="deleteContact(${index})">Eliminar</button>`;
        contactList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

