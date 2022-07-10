

{

    // encode uri and decode uri

    const url = "http://contoh.com/?name=Andrian Raihannudin";
    console.info(url);

    const encoded = encodeURI(url);
    console.info(encoded);

    const decoded = decodeURI(encoded);
    console.info(decoded)

}

{

    // encodeuri and decode uri
    const value = "Andrian%20Raihannudin";
    const url = "http://contoh.com/?name=";
    console.info(url + value);

    const encoded = encodeURIComponent(value)
    console.info(url + encoded)


    const decoded = decodeURIComponent(encoded);
    console.info(url + decoded);

}