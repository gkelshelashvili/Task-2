//კამათელი
function roll_dice() {
    return Math.floor(Math.random() * 6) + 1; 
}

//ცვლადები
let player_a_rolled = 0
let player_b_rolled = 0

while (roll_dice){
    let rolled_dice_one = roll_dice();
    player_a_rolled++

    if(rolled_dice_one === 3){
        console.log('შენ გააგორე' + ' ' + rolled_dice_one, player_a_rolled + ' ' +'ცდაში A');
        break
    }

    let rolled_dice_two = roll_dice();
    player_a_rolled++

    if(rolled_dice_two === 3){
        console.log('შენ გააგორე' + ' ' + rolled_dice_two, player_b_rolled + ' ' +'ცდაში A');
        break
    }else
    if(rolled_dice_one > rolled_dice_two){
        console.log("ა შენ მოიგე ", + rolled_dice_two + ' ' + 'ცდაში')
    }else
    if(rolled_dice_one < rolled_dice_two){
        console.log("ბ შენ მოიგე ", + rolled_dice_one + ' ' + 'ცდაში')
    }
    break
}
//მომხმარებელი
let user = {
    name: 'Giorgi', age: 16
}
//ახალი მომხმარებლის დაბრუნება
function cloneUser(user) {
    let clonedUser = {};
    for (let new_user in user) {
        clonedUser[new_user] = user[new_user];
    }

    return clonedUser;
}

let newUser = cloneUser(user);

console.log(newUser, 'დაკლონილი')
console.log(user, 'ორიგინალი')


const myUsers = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
]

//
function findYoungestName(myUsers) {
    first_user = myUsers[0]
    let youngest_user 
    for(let user of myUsers){
        if(first_user.age > user.age){
            youngest_user = user
        }
    }
    return console.log(youngest_user.name) 
}

findYoungestName(myUsers)