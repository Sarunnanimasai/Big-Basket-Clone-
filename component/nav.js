function  nav()
{
return`
<div id="navt">
<div id="t1"><h6>1860 123 1000</h6></div>
<div id="t2"><h6>560004,Bangalore</h6></div>
<div id="t3"><a href="./signup.html" target="_blank"><p>Sign Up</p></a></div>
<div id="t4"><a href="./login.html" target="_blank"><p>Login</p></a></div>
</div>
<div id="navm">
<div id="m1"><img src="data:image/png;base64,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" alt="" srcset=""></div>
<div id="m2"><i class="fa-solid fa-magnifying-glass"></i></div>
<div id="m3"><img src="data:image/png;base64,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" alt="" srcset="">My Basket</div>
</div>
<div id="navb">
<select name="SHOP BY CATEGORIES" id="b1">
<option><a href="./bakery.html">Bakery, Cakes & Dairy</a></option>
<option><a href="./fruits_category.html">Fruits & Vegetables</a></option>
<option><a href="./foodgrains.html">Food Grains, Oil & Masala</a></option>
<option><a href="./snacks.html">Snacks & Branded Foods</a></option>
<option><a href="./beauty.html">Beauty & Hygiene</a></option>
<option><a href="./beverages.html">Beverages</a></option>
</select>

<div id="b2"><a href="./order.html" target="_blank"></a>OFFERS</div>
</div>
`
}
export {nav};