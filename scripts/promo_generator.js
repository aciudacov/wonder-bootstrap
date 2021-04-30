var promo_items = [
	{
		"name":"Липосомальный куркумин",
		"image":"https://incoral.com/src/new/product/catalog/2165-liposomalnyy-kurkumin-100-ml.jpg",
		"offer":"-10%",
		"prod_id":"2165"
	},
	{
		"name":"Гриффония (60 капсул)",
		"image":"https://incoral.com/src/new/product/catalog/91848-griffoniya-60-kapsul.jpg",
		"offer":"-10%",
		"prod_id":"91848"
	},
	{
		"name":"Абрикотаб (60 таблеток)",
		"image":"https://incoral.com/src/new/product/catalog/2134-abrikotab-60-tabletok.jpg",
		"offer":"4+1",
		"prod_id":"2134"
	},
	{
		"name":"Хлорелла (180 таблеток)",
		"image":"https://incoral.com/src/new/product/catalog/2197-hlorella-180-tabletok.jpg",
		"offer":"-10%",
		"prod_id":"2129"
	},
	{
		"name":"Би-курунга (90 таблеток)",
		"image":"https://incoral.com/src/new/product/catalog/757-bi-kurunga-90-tabletok.jpg",
		"offer":"3+1",
		"prod_id":"2154"
	}
]
function generatePromos(){
    var num = 1;
    promo_items.forEach(element => {
        toAppendString = "<div class=\"col\" id=\"promo" + num + "\"><div class=\"card shadow-sm\"><img src=\""
        + element.image + "\" class='bg-placeholder-img card-img-top' width=\"auto\" height=\"auto\""
        + "role=\"img\" aria-label=\"Quiz thumbnail\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\">"
        + "<div class=\"card-body\"><p class=\"card-text\">" + element.name
        + "</p><div class=\"d-flex justify-content-between align-items-center\"><div class=\"btn-group\">"
        + "<button type=\"button\" class=\"btn btn-lg btn-outline-primary\" data-bs-target=\"#catalog_modal\" data-bs-toggle=\"modal\" data-bs-dismiss=\"modal\" onclick=\"focusElement(" + element.prod_id + ")\">"+ element.offer +"</button></div></div></div></div></div>";
        $("#promo_container").append(toAppendString);
        num++;
      });

}