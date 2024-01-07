class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password.toUpperCase()}baAnsGur`;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  set password(value) {
    this._password = value;
  }
}

const Krishan = new User("K@krishan.ai", "hgf");
console.log(Krishan.password);
console.log(Krishan.email);

//constructor ke ander jo bhi property bnte hai unke set and get method automatically bn jate hai hai yaha password ko set krte time ham 2  2 baar password ko set kr rhe hai ek to construcor ke ander aur ek set method ke ander to call stack exceed ki error aayegi to hm get aur set method ke ander variable ko change kr dete hai
