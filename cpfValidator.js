//change the number below to test a diferent CPF
//Comment or remove line below on production environment
const cpf = "00000000000"

function cpfValidator(cpf) {

    const regex = /^\d{11}$/;
    const fakeCPFregex = /^(\d)\1{10}$/;
    
    if (!regex.test(cpf) || fakeCPFregex.test(cpf)) {
        return false;
    }
    
    const firstSequenceToValidate = cpf.slice(0, 9)
    const secondSequenceToValidade = cpf.slice(0, 10)
    
    const firstDigit = Number(cpf.slice(9, 10));
    const secondDigit = Number(cpf.slice(-1));
    
    let i = 10;
    
    const isFirstSequenceOk = firstSequenceToValidate
        .split("")
        .map(digit => Number(digit))
        .reduce((accumulator, currentValue, index, arr) => {
            if (index === 0) {
                const result = currentValue * i
                return result;
            }
            const result = accumulator +  currentValue * --i
            if (index === arr.length - 1) {
                const moduleResult = result * 10 % 11
                const finalResult = (moduleResult === 10 ? 0 : moduleResult) === firstDigit
                return finalResult
            }
            return result;
    
        }, false)
    
    i = 11;
    
    const isSecondSequenceOk = secondSequenceToValidade
        .split("")
        .map(digit => Number(digit))
        .reduce((accumulator, currentValue, index, arr) => {
            if (index === 0) {
                const result = currentValue * i;
                return result;
            }
    
            const result = accumulator + currentValue * --i;
            if (index === arr.length - 1) {
                const moduleResult = result * 10 % 11;
                const finalResult = (moduleResult === 10 ? 0 : moduleResult) === secondDigit;
    
                return finalResult;
            }
    
            return result;
        }, false)
    
    const isCPFValid = isFirstSequenceOk && isSecondSequenceOk;
    
    return isCPFValid;
}

//View this on console
//Comment or remove line below on production environment
console.log(cpfValidator(cpf))

//For NodeJs uncoment line below
//export { cpfValidator };