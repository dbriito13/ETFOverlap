/**
 * 
 * @param {string} etf_a 
 * @param {string} etf_b 
 */
function load_data(etf_a, etf_b){

}

/**
 * 
 * @param {string} ticker 
 */
async function find_etf_name(ticker){
    /** Ticker to ISIN */
    const url = `https://api.openfigi.com/v3/mapping`;

    const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
        {
            'idType': 'TICKER',
            'idValue': 'SPPW'
        }])
    };

    var res = await fetch(url, options);
    let res_json = await res.json();
    let res_json_0 = await res_json[0];
    let list_isins = await res_json_0.data;


    console.log(list_isins);

}