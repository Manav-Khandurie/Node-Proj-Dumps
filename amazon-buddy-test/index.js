const amazonScraper = require('amazon-buddy');

async function fun(){
try{
        //   const products = await amazonScraper.products({ keyword: 'vivo T2x 5G (Black ', number: 1,page:1, country : 'IN' });
        //   asinn=products.result[1].asin
        //   console.log(products);
          const product_by_asin = await amazonScraper.asin({ asin:'9355646550' , country : 'IN' , randomua : true});
          console.log(product_by_asin.result[0])
          console.log(product_by_asin.result[0].price.current_price)
          console.log(product_by_asin.result[0].description)
          console.log(product_by_asin.result[0].images[0])
}catch(error){
    console.log("continue;")
}
// console.log('\n');
// console.log(products.result[1])
}

fun();