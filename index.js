
let cart = [];
    function addToCart(name, price){
      cart.push({name, price});
      renderCart();
    }

    function renderCart(){
      let cartDiv = document.getElementById('cartItems');
      if(cart.length === 0){
        cartDiv.innerHTML = 'No items yet.';
        document.getElementById('checkoutBtn').disabled = true;
        document.getElementById('total').innerText = 0;
        return;
      }
      let html = '';
      let total = 0;
      cart.forEach((item, i)=>{
        html += `<div>${item.name} - ₹${item.price} <button onclick="removeItem(${i})">Remove</button></div>`;
        total += item.price;
      });
      cartDiv.innerHTML = html;
      document.getElementById('total').innerText = total;
      document.getElementById('checkoutBtn').disabled = false;
    }

    function removeItem(i){
      cart.splice(i,1);
      renderCart();
    }

    function checkout(){
      alert('Order placed successfully!');
      cart = [];
      renderCart();
    }