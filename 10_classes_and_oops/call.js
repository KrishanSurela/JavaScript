function setUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //setUsername(username);
  //setUsername.call(username); method call to hoga lekin object me koi change nhi hoga means username ab bhi nhi aayega

  setUsername.call(this,username)
  this.email = email;
  this.password = password;
}

const chai = new createUser("Krishan", "Krishan@fb.com", "123");

console.log(chai);

