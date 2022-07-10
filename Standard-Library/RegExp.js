
{

    // create regex
    const regex1 = /reihan/;
    const regex2 = new RegExp("reihan");
    const regex3 = new RegExp(/reihan/);

}

{

    // test regex
    const name = "nadia fairuzh"
    const regex = /nadia/;

    const result = regex.exec(name);
    console.log(result);
    console.log(regex.exec("Tidak ada"))

    const test = regex.test(name);
    console.log(test);
    console.log(regex.test("Tidak ada"))

}


{

    // regex modifier
    const name = "andrian raihannudin\nAndrian Raihannudin\nNadia Fairuzh\nnadia fairuzh"
    const regex1 = /raihan/igm
    const regex2 = /Nadia/ig

    let result;
    while ((result = regex1.exec(name)) !== null){
        console.log(result);
    }

    while((result = regex2.exec(name)) !== null){
        console.log(result);
    }

}


{

    // advance regex 
    const regex = /ek[ioaeu]/ig

    const name = "eko eki eka eke edo eko eki"
    let result;
    while((result = regex.exec(name)) !== null){
        console.log(result);
    }

}

{

    // String regex 
    const name = "edo eko eki eka eku eke edo eko eki";
    console.log(name.match(/ek[aiueo]/ig));
    console.log(name.search(/ek[aiueo]/ig));
    console.log(name.replace(/ek[aiueo]/i, "kamu"));
    console.log(name.replaceAll(/ek[aiueo]/ig, "kamu"));
    console.log(name.split(/e/ig));


}