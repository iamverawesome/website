"Use strict"

/*
	*Cart
	*Jannette Vera
	*November 5, 2021
*/

Var subtotal = 0;

var cartHTML ="<table>"+"<tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for(var i = 0;i<item.length;i++);{
	cartHTML+="<tr><td>"+itemDescription[i]+"</td>+<td>$"+itemPrice[i]+"</td>+<td>"+itemQty[i]+"</td>";
	var itemCost = itemPrice[i]*itemQty[i];
	cartHTML+="<td>$" +itemCost+ "</td></tr>;
	orderTotal+=itemCost;
}


cartHTML+=<tr><td colspan='3'>Subtotal</td><td>$subtotal</td></tr>
<tr><td colspan='3'>Shipping*</td><td>$shipCost</td></tr>
<tr><td colspan='3'>Total</td><td>$orderTotal</td></tr>
</tfoot>
</table>

document.getElementById('cart').innerHTML = cartHTML;
