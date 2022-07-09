
class MathUtils {

    static sum(...numbers){
        let total = 0;
        for(const number of numbers){
            total += number;
        }
        return total;
    }
}

const sum = MathUtils.sum(4,5,3,2,1,5)
console.log(sum)