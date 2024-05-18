"use strict";
function kitchenUtensils(spoon, whisk, bowl, ...otheritems) {
    console.log(spoon);
    console.log(whisk);
    console.log(bowl);
    console.log(...otheritems);
}
let result = kitchenUtensils("Silver", "metallic", "glass", "wooden");
