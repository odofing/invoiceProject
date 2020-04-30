// the invoice constructor
class Invoice {
    constructor (product, description, amount) {
    this.product = product;
    this.description = description;
    this.amount = amount;
    
    }
}

class UI {
    addInvoiceToList (invoice)  {

        const list = document.querySelector('.invoice-list');
        //create tr element
        
        const row = document.createElement('tr');
        //console.log(row);
        
        // insert columns
        
        row.innerHTML = `<td>${invoice.product}</td> 
                         <td>${invoice.description}</td>
                         <td>${invoice.amount}</td>
                        <td><a href="#" class="delete">X</a></td>
        
        `;
        list.appendChild(row);

    }


    showAlert( message, className) {
// create Div

const div = document.createElement('div');

// add classes
div.className = `alert ${className}`;
// add text

div.appendChild(document.createTextNode(message));
// get parent of div
const container = document.querySelector('.container');
//get form
const row = document.querySelector('.row');

// insert containter
container.insertBefore(div, row);

// set timeout
setTimeout(function (){
    document.querySelector('.alert').remove();
}, 3000);
}


    deleteInvoice(target) {
        if (target.className === 'delete') {
            if(confirm('Are you sure you want to delete?'))
            target.parentElement.parentElement.remove();
                }

    }

    clearFields () {
        document.getElementById('product').value = '';
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
}
  
// event listeners
document.getElementById('Invoice').addEventListener('submit',
function (e) {
 // get invoice values
const product = document.getElementById('product').value;
   const  description = document.getElementById('description').value;
   const  amount = document.getElementById('amount').value;

// console.log(product, description, amount);

// instantiate invoice 
const invoice = new Invoice (product, description, amount);

// console.log(invoice)


// instantiate UI
const ui = new UI();

// validate UI

if(product === '' || description === ''  || amount === '') {
// console.log('failed');
ui.showAlert('Please, Fill In All Fields', 'error')
} else {

    // add invoice to table
    ui.addInvoiceToList(invoice);

    // success alert
    ui.showAlert('Product Added!', 'success');

    // clear input fields

ui.clearFields();
}

// console.log(ui);
    e.preventDefault();
}
);


document.querySelector('.invoice-list').addEventListener('click', function(e) {
    // console.log(123);
    
    // instantiate UI
    const ui = new UI();
    
    // delete product
    ui.deleteInvoice(e.target);
    
    //show alert
    
    ui.showAlert('Product Removed!', 'success');
    
    e.preventDefault();
    });