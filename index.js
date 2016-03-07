var express = require('express');
var app = express();

var products = [
	{
		product: 'Nature Made Vitamin C 1000mg, 300 Tablets',
		description: 'Bottle of 300 vitamin C tablets for immune system support, each tablet containing 1,000 milligrams of Vitamin C',
		price: 19.94,
		url: 'http://www.amazon.com/gp/product/B00008I8NJ?fpl=fresh&redirect=true&ref_=s9_qpp_gw_d17_g121_i2_r',
		image: 'http://ecx.images-amazon.com/images/I/816bQgC72fL._SY679_.jpg',
		inventory: 100
	},
	{
		product: 'OXO Good Grips Swivel Peeler',
		description: 'Good Grips oversize rubber handle is comfortable, even with repetitive strokes',
		price: 8.99,
		url: 'http://www.amazon.com/gp/product/B00004OCIP?fpl=fresh&redirect=true&ref_=s9_cartx_gw_g79_i3_r',
		image: 'http://ecx.images-amazon.com/images/I/418T9Y6VKYL.jpg',
		inventory: 60
	},
	{
		product: 'Fruit of the Loom Mens Tartan Boxer(Pack of 5)',
		description: 'Fruit of the Loom Mens Tartan Boxer(Pack of 5)',
		price: 11.62,
		url: 'http://www.amazon.com/gp/product/B005CW04CK?refRID=90DMY3GQHC342YZ6AVQS&ref_=pd_rhf_gw_p_img_13',
		image: 'http://ecx.images-amazon.com/images/I/51BK2OVopjL._AC_UL200_SR160,200_.jpg',
		inventory: 100
	},
	{
		product: 'Lysol Disinfecting Wipes Value Pack, Lemon and Lime Blossom, 240 Count',
		description: 'Disinfecting Wipes Kill 99.9% of Cold & Flu Viruses and Antibiotic resistant bacteria including Influenza A Virus H2N2, Human Corona Virus, Strep, and Staph',
		price: 9.47,
		url: 'http://www.amazon.com/gp/product/B00M977Y4C?refRID=PPTBH5QZVGN183KZRT82&ref_=pd_rhf_gw_p_img_14',
		image: 'http://ecx.images-amazon.com/images/I/91FeslqLHvL._SX522_.jpg',
		inventory: 60
	},
	{
		product: 'Dsquared2 DQ01035905A Aviator Sunglasses',
		description: 'Dsquared2 DQ01035905A Aviator Sunglasses',
		price: 77.90,
		url: 'http://www.amazon.com/gp/product/B00C7FI1Z2?ref_=strm_all_309_nad_5_3',
		image: 'http://ecx.images-amazon.com/images/I/31tr-Zkl9FL._AC_UL200_SR160,200_.jpg',
		inventory: 60
	}
];

app.get('/', function (req, res) {
  res.send('what do you want');
});

app.get('/products', function (req, res) {
  res.json(products);
});

app.listen(process.env.PORT || 3001, function () {
  console.log('Example app listening on port 3001!');
});