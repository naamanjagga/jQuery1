var productArray = [];
$(document).ready(function() {
	$('#para1').hide();
	$('#para3').hide();
	$('#para5').hide();
	$('#para6').hide();
	$('.success').hide();
	$('.error').hide();
	$('#update_product').hide();
	

	$('#add_product').on('click', function() {
		
		
		var Id = document.getElementById('product_sku').value;
		var Name = document.getElementById('product_name').value;
		var Price = document.getElementById('product_price').value;
		var Quantity = document.getElementById('product_quantity').value;
		var int = '^d+$';

		if (Id == '') {
			$('#para1').show();
			$('#product_sku').css('border-color', 'red');
			$('#para1').text('Id field cannot be empty and should be a number');
			$('#para1').css('color', 'red');
			$('#product_name').css('border-width', '1px');
			$('#product_name').css('border-color', 'black');
			$('#product_price').css('border-width', '1px');
			$('#product_price').css('border-color', 'black');
			$('#product_quantity').css('border-width', '1px');
			$('#product_quantity').css('border-color', 'black');
			$('#para2').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para5').hide();
			$('#para6').hide();
		} else if (Id.match(int)) {
			$('#para2').show();
			$('#product_sku').css('border-color', 'red');
			$('#para2').text(' field cannot be empty');
			$('#para2').css('color', 'red');
			$('#product_name').css('border-width', '1px');
			$('#product_name').css('border-color', 'black');
			$('#product_price').css('border-width', '1px');
			$('#product_price').css('border-color', 'black');
			$('#product_quantity').css('border-width', '1px');
			$('#product_quantity').css('border-color', 'black');
			$('#para1').hide();
			$('#para6').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para5').hide();
		} else if (Name == '' || !isNaN(Name)) {
			$('#para3').show();
			$('#product_name').css('border-color', 'red');
			$('#para3').text('name field cannot be empty and it should be a string');
			$('#para3').css('color', 'red');
			$('#product_sku').css('border-width', '1px');
			$('#product_sku').css('border-color', 'black');
			$('#product_price').css('border-width', '1px');
			$('#product_price').css('border-color', 'black');
			$('#product_quantity').css('border-width', '1px');
			$('#product_quantity').css('border-color', 'black');
			$('#para1').hide();

			$('#para6').hide();
			$('#para5').hide();
			return false;
		} else if (Price == '') {
			$('#para5').show();
			$('#product_price').css('border-color', 'red');
			$('#para5').text('Price field cannot be empty');
			$('#para5').css('color', 'red');
			$('#product_sku').css('border-width', '1px');
			$('#product_sku').css('border-color', 'black');

			$('#product_name').css('border-width', '1px');
			$('#product_name').css('border-color', 'black');
			$('#product_quantity').css('border-width', '1px');
			$('#product_quantity').css('border-color', 'black');
			$('#para1').hide();

			$('#para3').hide();

			$('#para6').hide();
			return false;
		} else if (Quantity == '') {
			$('#para6').show();
			$('#product_quantity').css('border-color', 'red');
			$('#para6').text('Quantity field cannot be empty');
			$('#para6').css('color', 'red');
			$('#product_sku').css('border-width', '1px');
			$('#product_sku').css('border-color', 'black');
			$('#product_price').css('border-width', '1px');
			$('#product_price').css('border-color', 'black');
			$('#para1').hide();

			$('#para3').hide();

			$('#para5').hide();

			return false;
		} else {
			$('#update_product').hide();
			$('.success').show();
			$('#para3').hide();
			$('#para5').hide();
			$('#para6').hide();
			$('#para1').hide();
			$('#product_sku').css('border-width', '1px');
			$('#product_sku').css('border-color', 'black');
			$('#product_name').css('border-width', '1px');
			$('#product_name').css('border-color', 'black');
			$('#product_price').css('border-width', '1px');
			$('#product_price').css('border-color', 'black');
			$('#product_quantity').css('border-width', '1px');
			$('#product_quantity').css('border-color', 'black');
			
			var productObj = {
				Id: Id,
				Name: Name,
				Price: Price,
				Quantity: Quantity
			};
			var flag = 0;

			for (var i = 0; i < productArray.length; i++) {
				if (productArray[i].Id == Id) {
					flag = 1;
				}
			}
			if (flag == 1) {
				alert('id repeated');
			} else {
				productArray.push(productObj);
				add(productArray);
			}
		}
	});
});
function add(productArray) {
	$('.error').hide();

	display(productArray);
}
$('.edit').click(function() {
	$('input').prop('disabled', true);
});

function update(x) {
	$('.success').hide();
	$('#product_sku').prop('disabled', true);
	$('#add_product').hide();
	$('#update_product').show();
	
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].Id == x) {
			$('#product_sku').val(productArray[i].Id);
			$('#product_name').val(productArray[i].Name);
			$('#product_price').val(productArray[i].Price);
			$('#product_quantity').val(productArray[i].Quantity);
		}
	}

	display(productArray);
}
$('#update_product').on('click', function() {
	$('#product_sku').prop('disabled', false);
	$('#para1').hide();
	$('#para3').hide();
	$('#para5').hide();
	$('#para6').hide();
	var a = document.getElementById('product_sku').value;
	var Name = document.getElementById('product_name').value;
	var Price = document.getElementById('product_price').value;
	var Quantity = document.getElementById('product_quantity').value;
	var int = '^d+$';
	if (Name == '' || !isNaN(Name)) {
		$('#para3').show();
		$('#product_name').css('border-color', 'red');
		$('#para3').text('name field cannot be empty and it should be a string');
		$('#para3').css('color', 'red');
		$('#product_sku').css('border-width', '1px');
		$('#product_sku').css('border-color', 'black');
		$('#product_price').css('border-width', '1px');
		$('#product_price').css('border-color', 'black');
		$('#product_quantity').css('border-width', '1px');
		$('#product_quantity').css('border-color', 'black');
		$('#para1').hide();

		$('#para6').hide();
		$('#para5').hide();
		return false;
	} else if (Price == '') {
		$('#para5').show();
		$('#product_price').css('border-color', 'red');
		$('#para5').text('Price field cannot be empty');
		$('#para5').css('color', 'red');
		$('#product_sku').css('border-width', '1px');
		$('#product_sku').css('border-color', 'black');

		$('#product_name').css('border-width', '1px');
		$('#product_name').css('border-color', 'black');
		$('#product_quantity').css('border-width', '1px');
		$('#product_quantity').css('border-color', 'black');
		$('#para1').hide();

		$('#para3').hide();

		$('#para6').hide();
		return false;
	} else if (Quantity == '') {
		$('#para6').show();
		$('#product_quantity').css('border-color', 'red');
		$('#para6').text('Quantity field cannot be empty');
		$('#para6').css('color', 'red');
		$('#product_sku').css('border-width', '1px');
		$('#product_sku').css('border-color', 'black');
		$('#product_price').css('border-width', '1px');
		$('#product_price').css('border-color', 'black');
		$('#para1').hide();

		$('#para3').hide();

		$('#para5').hide();

		return false;
	} else {
		$('#update_product').hide();
		$('#add_product').show();
		$('#product_sku').css('border-width', '1px');
			$('#product_sku').css('border-color', 'black');
			$('#product_name').css('border-width', '1px');
			$('#product_name').css('border-color', 'black');
			$('#product_price').css('border-width', '1px');
			$('#product_price').css('border-color', 'black');
			$('#product_quantity').css('border-width', '1px');
			$('#product_quantity').css('border-color', 'black');

		$('#update_product').click(function() {
			$('#update_product').hide();
		});
	

		for (var i = 0; i < productArray.length; i++) {
			if (productArray[i].Id == a) {
				productArray[i].Name = document.getElementById('product_name').value;
				productArray[i].Price = document.getElementById('product_price').value;
				productArray[i].Quantity = document.getElementById('product_quantity').value;

				$('.success').show();
			}
		}
		display(productArray);
	}
});
function remove(y) {
	$('.success').hide();
	console.log(y);
	if (confirm('Are you sure you want to delete the row')) {
		for (var i = 0; i < productArray.length; i++) {
			if (productArray[i].Id == y) {
				productArray.splice(i, 1);
			}
		}
	} else {
		// Do nothing!
	}

	display(productArray);
}

function display(productArray) {
	var html =
		'<table><tr><th>Product SKU</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th></tr>';
	for (var i = 0; i < productArray.length; i++) {
		html +=
			'<tr id="row_i"><td>' +
			productArray[i].Id +
			'</td><td>' +
			productArray[i].Name +
			'</td><td>' +
			' $ ' +
			productArray[i].Price +
			'</td><td>' +
			productArray[i].Quantity +
			'</td><td><a href="#" class="edit" onclick="update(' +
			parseInt(productArray[i].Id) +
			')">Edit</a><a href="#" class="delete" onclick="remove(' +
			parseInt(productArray[i].Id) +
			')">Delete</a></td></tr>';
	}
	html += '</table>';

	document.getElementById('product_list').innerHTML = html;
}
