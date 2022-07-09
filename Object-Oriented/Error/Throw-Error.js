
class MathUtil{

    static sum(...numbers){

        if(numbers.length === 0){
            throw new Error("Parameter tidak boleh kosong")
        }

        let total = 0;
        for (const number of numbers){
            total += number
        }
        return total
    }
}

// console.log(MathUtil.sum())
console.log(MathUtil.sum(2,3,4))
