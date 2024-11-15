const accountId = 123456
let accountEmail = "ghl_vivek@hotmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // Not allowed
accountEmail = "test@test.com"
accountPassword = "123123"
accountCity = "Jaipur"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//discuss about scope for understanding of let and var

/*
Prefer not to user var
Before of issue in block scope and functional scope
*/ 