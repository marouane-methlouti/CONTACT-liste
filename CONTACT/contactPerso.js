/*function ContactPerso(name, surname, mail, tel, facebook) {
    Contact.call(this, name, surname, mail, tel);
    this.facebook = facebook;
  }
*/

  class ContactPerso extends Contact{
    constructor (name, surName, mail, tel, facebook){
        super(name, surName, mail, tel);
        this.facebook = facebook;
    }
  }