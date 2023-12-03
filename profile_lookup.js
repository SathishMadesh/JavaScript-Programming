const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  
  var contact = contacts.find((c) => {
    return c.firstName === name;
});

if (contact) {
    // Check if the property (prop) exists in the contact
    if (contact.hasOwnProperty(prop)) {
        // Return the value of the property
        return contact[prop];
    } else {
        // Return the string if the property does not exist
        return "No such property";
    }
} else {
    // Return the string if the contact does not exist
    return "No such contact";
}
}


console.log(lookUpProfile("Akira", "likes"));

console.log(lookUpProfile("Kristian", "lastName"));

console.log(lookUpProfile("Sherlock", "likes"));

console.log(lookUpProfile("Bob", "number"));