const accountId = 14556;
let accountEmail = "abcd@gmail.com";
var accountPassword = "12345";
let accountState;
accountCity= "jaipur";

// accountId =145; // not allowed

accountEmail = "abcd@gmail.com";
accountPassword = "564789";
accountCity = "Surat";

/*
Prefer not to use var
because of issue in block Scope and Functional Scope
*/

console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);