
let profilePic = document.getElementById("profile-pic");
let fullName = document.getElementById("profile-name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");
let nextBtn = document.getElementById("next");

var fetchData = async () => {
    try {
            let response = await fetch('https://randomuser.me/api/');
            let userData = await response.json()
            console.log(userData);
            profilePic.src = userData.results[0].picture.large;
            fullName.innerHTML = userData.results[0].name.title + ' ' + userData.results[0].name.first + ' '  + userData.results[0].name.last;
            email.innerHTML = userData.results[0].email;
            phone.innerHTML = "Phone : "+userData.results[0].phone;
            age.innerHTML = "Age : "+userData.results[0].dob.age;
        
    } catch (error) {
            console.log("Error: ",error);
    }
}

fetchData();

nextBtn.addEventListener('click', fetchData);

