#### 1. To compile a typescript file:
``` js
tsc fileName.ts
```

#### 2. If the programm will have no issue, it will compile without throwing errors, and will generate a javascript file for your code.

#### 3. If your code had some issues, it will through you errors straight away. But, will still generate the javascript version of your typescript code.

#### 4. This is an intended bahaviour in typescript, as they believe, a programmer knows more than typescript, and to prevent someone from migrating a legacy codebase to typescript. As they might fix those issues later on. Since, the above code has been working for years.

#### 5. If you wish to prevent compiling the typescript code if there's an error, use the command:
``` js
tsc --noEmitOnError hello.ts
```

#### 6. By default TypeScript targets ES3, an extremely old version of ECMAScript. We could have chosen something a little bit more recent by using the target option, using command:
``` js
tsc --target es2015 hello.ts
```
The above is the reason, if we write a string using backticks (`) in typescript, the javascript equivalent won't have the backticks, as they introduced only in ES2015. 
#### This behaviour of typescript, levelling down the javascript version while compiling is called: "Downleveling".