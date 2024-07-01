interface Person {
    firstName: string;
    lastName: string;
  }
   
  function sayHello(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = { firstName: "Jane", lastName: "User" };
   
  document.body.textContent = sayHello(user);