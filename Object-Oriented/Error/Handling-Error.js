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


try{
    console.log(MathUtil.sum());
} catch(error){
    console.log(`Terjadi Error : ${error.message}`);
}finally{
    console.log("Program Selesai")
}