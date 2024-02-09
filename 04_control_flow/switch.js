/*switch case (key){
    case value:

    break;
    default :
    break;
}*/


const month="jan"

switch(month){
    case "jan":
    console.log(`Current month is ${month}`);
    break;
    case"Nov":
    console.log(`Current month is ${month}`);
    break;
    default:
    console.log(`Current month entered wrong`);
}
// After every case, we have used break so that after the value is matched we can come outside the switch case. Otherwise, all the conditions after matching the case will be executed automatically.
