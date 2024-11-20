var userOne = {
  email: "aljun.anodrac@gmail.com",
  name: "Aljun",
  login() {
    console.log(this.email, "Has logged in");
  },
  logout() {
    console.log("has logout");
  },
};

var userTwo = {
    email: "aljun.anodrac@gmail.com",
    name: "Aljun",
    login() {
      console.log(this.email, "Has logged in");
    },
    logout() {
      console.log("has logout");
    },
  };
  

// console.log(userOne.name);
// console.log(userOne.login);
// console.log(userOne.logout);

// userOne.name = 'aljun';
// userOne['name'] = 'aljunix';

var prop = "name";
var prop1 = "email";

console.log(userOne[prop]);
console.log(userOne[prop1]);

userOne.age = 25;
