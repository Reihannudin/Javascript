

{

    const original = "Nadia&Fairuzh=Sukma";
    console.log(original);

    const encoded = btoa(original);
    console.log(encoded)

    const decoded = atob(encoded);
    console.log(decoded)
}