/*function Contact(name, surname, mail, tel) {
    this.id = Date.now();
    this.name = name;
    this.surName = surname;
    this.mail = mail;
    this.tel = tel;
    this.isActif = true;
  }
*/

  class Contact{
    constructor(name, surName, mail, tel){
        this.id = Date.now();
        this.name = name;
        this.surName = surName;
        this.mail = mail;
        this.tel = tel;
        this.isActif = true;
    }
  }