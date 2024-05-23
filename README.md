# A closure-Замыкание — это
>[!TIP]
>Замыкание — это комбинация объединенной (заключенной) функции со ссылками на ее окружающее состояние (лексическое окружение). Другими словами, замыкание дает вам доступ к области видимости внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время ее создания.(`maqsad ai daruni functioni dar daruni return bdagi metonem functioni 1 bdroem 2 namudi closure soxtan xast 1 giw 2 function drun ba drun 3 giw da daruni return arrow function qati`)



```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```
>`init()` создает локальную переменную с именем `name` и функцию `displayName()`. Функция `displayName()` — это внутренняя функция, определенная внутри `init()` и доступная только внутри тела функции `init()`. Обратите внимание, что функция `displayName()` не имеет собственных локальных переменных. Однако, поскольку внутренние функции имеют доступ к переменным внешних функций, `displayName()` может получить доступ к имени переменной, объявленной в родительской функции init().

# Here is a example of closure in return
```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
```
>В этом примере мы определили функцию makeAdder(x), которая принимает один аргумент x и возвращает новую функцию. Возвращаемая функция принимает один аргумент y и возвращает сумму x и y.



>По сути, makeAdder — это фабрика функций. Он создает функции, которые могут добавлять определенное значение к своему аргументу. В приведенном выше примере фабрика функций создает две новые функции: одну, которая добавляет пять к своему аргументу, и другую, которая добавляет 10.


```js
function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());
```
* Преимущества Zamikaniy
* Varieblxoi ki da closure soxranit kadagien metonen lyuboi moment istifoda baren oсохранить состояние, которое вы сможете использовать позже.
* Они помогают удалить лишний код.
* Они помогают поддерживать `модульный код`.

* Недостатки Zamikaniya
* Слишком большое количество замыканий может замедлить работу вашего приложения. На самом деле это вызвано дублированием кода в памяти. `rost mega vaqti ran kardanoi kodda mechaspa`
* ⬇️⬇️⬇️⬇️ dar vaqti ran kardani inamin kod
``` js
for (let id = 0; id < 3; id++) {
    // The use of 'let' creates a block-scoped variable, fixing the closure issue.
    // Now each setTimeout callback captures the correct value of 'id'.
    setTimeout(function () {
      console.log('seconds: ' + id);
    }, id * 1000);
  }
```
```js
function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
let get_func_inner = foo(5);

console.log(get_func_inner(4));//9
console.log(get_func_inner(3));//8
```
>>> closure is look like this function
![closure](./closure)
### Запустите код, используя эту ссылку JSFiddle, и обратите внимание, что оператор console.log() в функции displayName() успешно отображает значение переменной name, которая объявлена ​​в ее родительской функции. Это пример лексической области видимости, который описывает, как синтаксический анализатор разрешает имена переменных, когда функции вложены. Слово «лексический» относится к тому факту, что лексическая область видимости использует место объявления переменной в исходном коде, чтобы определить, где эта переменная доступна. Вложенные функции имеют доступ к переменным, объявленным в их внешней области видимости.
>В этом конкретном примере область называется областью функции, поскольку переменная доступна и доступна только внутри тела функции, где она объявлена.
```js
let message = 'Hello';

function buildGreeting() {
  let audience = 'World';
  let message = 'Hello';  // Duplicate variable declaration
  function buildGreeting() {
    let audience = 'World';
    console.log(message + ' ' + audience);
  }
}
console.log(audience);  // 'audience' is not defined in this scope WHY IT SHOULD SAY THAT AUDIANCE IS NOT DEFINED
```


#### Because here we called all this function
```js
function buildGreeting() {
let message = "Hello";
function greetUser() {
console.log(message);
}
return greetUser;
}
let hello = buildGreeting();
hello();  //Hello 
```

>[!TIP]
>Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
```js
function myFunction() {
  a = 4;
}
```
>baroi inami Let wida i 1 1 1 merava baroi ki leta da daruni i function soxtem na inki global⬇️
```js
// Initiate counter
let counter = 0;

// Function to increment counter
function add(a) {
 return counter += 1;
}

// Call add() 3 times
console.log(add());//1
console.log(add());//1
console.log(add());//1

// The counter should now be 3 
```
