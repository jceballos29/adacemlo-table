
const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

function selectUsers(){
    let emailEnd = '@academlo.com'
    u = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.endsWith(emailEnd)) {
            u.push(users[i])    
        }
    }

    return u
}

const newUsersList = selectUsers()
console.log(newUsersList);

let item = document.getElementById('users-table')

for (let i = 0; i < newUsersList.length; i++) {

    
    let tr = document.createElement('tr');
    item.appendChild(tr)

    let name = document.createElement('td')
    name.innerHTML = newUsersList[i].name;
    tr.appendChild(name);

    let age = document.createElement('td')
    age.innerHTML = newUsersList[i].age;
    tr.appendChild(age);

    let email = document.createElement('td')
    email.innerHTML = newUsersList[i].email;
    tr.appendChild(email);

    let gender = document.createElement('td')
    gender.innerHTML = newUsersList[i].gender;
    tr.appendChild(gender);

    let ul = document.createElement('ul');
    tr.appendChild(ul)

    for (let j = 0; j < newUsersList[i].social.length; j++) {
        let social = document.createElement('li')
        social.innerHTML = newUsersList[i].social[j].url;
        ul.appendChild(social);
        
    }


}


