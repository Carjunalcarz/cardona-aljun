class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var userOne = new User("aljun@gmail.com", "Aljun");
var userTwo = new User("alcarz@gmail.com", "alcarz");

userOne.login();
userTwo.logout();

// the ''new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// = calls the constructor method
