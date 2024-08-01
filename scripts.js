let name_User = document.getElementById("name_User");
let password_User = document.getElementById("password");
let disguise_menu = document.getElementById("menuDiv");
let containerDiv = document.getElementById("containerDiv");
let user_open = document.getElementById("user_open");
let back_two  = document.getElementById("back_two");
//let submit_validate = document.getElementById("submit_validate");
let value_enter = document.getElementById("value");
let password_validate = document.getElementById("password_validate");

user_open.style.display = "none";
containerDiv.style.display = "none";


console.log(name_User, password_User, disguise_menu, containerDiv);
if (!name_User || !password_User || !disguise_menu || !containerDiv) {
        console.error('¡Faltan uno o más elementos!');
}
document.getElementById("menuForm").addEventListener("submit", (event) => {
    event.preventDefault()

    const selectedMenu = document.getElementById("menu").value;
    if (selectedMenu === "new-User") {
        disguise_menu.style.display = "none";
        containerDiv.style.display = "block";
    }else if (selectedMenu === "User") {
        user_open.style.display = "block";
        disguise_menu.style.display = "none";
    }
})

class NewUser{

    constructor(name, password) {
        this.name = name.trim();
        this.password = password;
    }
    static enterDat(name, password){
        return new NewUser(name, password);
    }
}

let userList = []
document.getElementById("select-enter").addEventListener("submit", (event) => {
    event.preventDefault()
    const name = name_User.value; // Get the value of the input
    const password = password_User.value; // Get the value of the input
    let enter_User = NewUser.enterDat(name, password)
    userList.push(enter_User)
    console.log(enter_User)
})

let back = document.getElementById("back")



document.getElementById("search_user").addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredName = value_enter.value.trim(); // Remove extra spaces
    const enteredPassword = password_validate.value;

    console.log("Entered Name:", enteredName);
    console.log("Entered Password:", enteredPassword);

    let userFound = userList.some(user => {
        console.log("Checking user:", user.name); // Debug information
        return user.name.toLowerCase() === enteredName.toLowerCase() &&
               user.password === enteredPassword;
    });
    if (userFound) {
        console.log("Correct");
    } else {
        console.log("Invalid credentials");
    }
})



back.addEventListener("click", (event) => {
    event.preventDefault()
    disguise_menu.style.display = "block";
    containerDiv.style.display = "none";
});

back_two.addEventListener("click", (event) => {
    event.preventDefault()
    disguise_menu.style.display = "block";
    user_open.style.display = "none";
})