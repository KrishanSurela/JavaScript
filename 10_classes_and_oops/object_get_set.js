function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const i = new User("kkrishansurela188@gmail.com", "K@321kj");

console.log(i.email);
console.log(i.password);

//Object Based Property define

const UserOne = {
  _email: "K@gmail.com",
  _password: "987",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const Saini = Object.create(UserOne);
console.log(Saini.email);
