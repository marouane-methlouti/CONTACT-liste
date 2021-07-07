function deleteContact(elem) {
  let index = contactList.findIndex(function (contact) {
    return contact.id === elem.id;
  });

  contactList.splice(index, 1);
}




