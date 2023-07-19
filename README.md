# CPF Validator

it's a simple cpf validator function that you can use to check if
the CPF number is valid.

This function receive a string type and returns a boolean which tels you if
the cpf is valid (true) or invalid (false).

A valid CPF should to be a string with containing 11 numbers like this:
```javascript
function cpfValidator(cpf) {
    //...
}

cpfValidator("00000000000") //false
cpfValidator("52998224725") //true
cpfValidator("52aa8224725") //false
cpfValidator("529.982.247-25") //false
```
How do you can see the aditinal elements sucha as dash and dot shold to be removed before to past this string to **cpfValidator**