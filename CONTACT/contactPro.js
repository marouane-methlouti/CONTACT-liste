/*function ContactPro(name, surname, mail, tel, linkedin) {
    Contact.call(this, name, surname, mail, tel);
    this.linkedin = linkedin;
  }
*/

  class ContactPro extends Contact{
    constructor (name, surName, mail, tel, linkedin){
        super(name, surName, mail, tel);
        this.linkedin = linkedin;
    }
  }