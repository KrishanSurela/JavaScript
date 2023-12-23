//Immediately Invoked Function Expresstion

//Some time Having a Problem Due to Global Scope so for removing the polution of global scope we use IIFE 

//This invoked immediately without any interaction of Global Scope

// (function declaration Area) (Execution);

// ; must for end the scope of IIFE

(function chai(name){ //named IIFE
    console.log(`Db Connected ${name}`);
})('Krishan');


//+++++++ Interesting ++++++++
( (name) => {  //unnamed IIFE
    console.log(`DB Connected ${name}`);
})('Surela');