Javascript Execution Context

Global Execution context (Always)---this 
Function Execution context
*Eval Execution context

------------

Memory Creation Phase
Execution Phase

S1)Global execution  -- allocate this ke ander
S2)Memory Phase -- Variable collect and stored 
    Ex- var1 -> undefined for all variables
        fxn -> fxn defn
S3)Execution Phase -- Adding values in variables
    Fxn -> creates a new vaiable environment and execution thread
        in a box //Always whenever fxn execute
        //It will also be deleted
        - Again memory phase
        - execution phase

LIFO -- Stack Call