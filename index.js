//we want to be able to add an item, type smth in(in the text input) and submit it as a list item bu clicking on the "Submit" btn
//this is gonna take an event (Submit event on this form)

// Form has an id of addForm
var form = document.getElementById('addForm');

// let's take out the item list(ul id = "items") into a variable
var itemList = document.getElementById('items');

//Filter items -> use search bar to filter them
//Text input "Search items..." input has an id of "filter"
var filter = document.getElementById('filter');




// Form submit Event
form.addEventListener('submit', addItem);

// Delete Event - listen for a click and call removeItem function
itemList.addEventListener('click', removeItem);

// Filter Event - lsiten for a keyup event and call filterItems
filter.addEventListener('keyup', filterItems);




// Add item 
function addItem(e) {
    // when we submit a form we have to prevent initial behaviour
    e.preventDefault();


    // Get the value of the input
    var newItem = document.getElementById('item').value;


    // Create a new li element and add it in with the text 
    var li = document.createElement('li');

    // Add class to the new element
    li.className = 'list-group-item'; //because all the other items from the list have the same class

    // Append text that comes from the form to the element
    // Add text node with the input value(newItem variable)
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element so we can also add it to the new list item we add to the list
    var deleteBtn = document.createElement('button');

    // Add same classes as other delete btns have
    deleteBtn.className = "btn btn-danger btn-sm delete";
    deleteBtn.style = "float:right";

    // Append text node (the X letter to the button)
    deleteBtn.appendChild(document.createTextNode('X'));


    // Append the button to the li, because the button is inside of the li
    li.appendChild(deleteBtn);

    // Take the itemList(which is the ul) and add it to the items list
    // Append li to list
    itemList.appendChild(li);
}



// To remove items: take item list, add event listener, create removeItem function
// Remove item 
function removeItem(e) { //pass in the e(vent) object

    //we want the item to be removed only if we click the 'X' button, with class 'delete'
    //and not if we click the element as a whole
    if (e.target.classList.contains('delete')) { //check if what we're clicking contains the class of 'delete'
        if (confirm('Are you sure?')) {//we'll have a little confirm box popup 'Are you sure?'
            var li = e.target.parentElement; //if yes, we want the parent element(li)
            itemList.removeChild(li);//remove the child of the itemList(ul) cuz the li is a child of the itemList
        }
    }
}


// Filter Items
function filterItems(e) {
    //get the filter text that's typed in and convert it to lowerCase
    //e=event object, target=what event, value=what's in it
    var text = e.target.value.toLowerCase();


    //grab all the li within the item list
    var items = itemList.getElementsByTagName('li'); //returns an HTML collection



    //Convert collection into an array
    Array.from(items).forEach(function (item) {

        //create a variable itemName
        var itemName = item.firstChild.textContent;


        //compare if anything we type in the search bar(to lower Case) is in the items list/ itemName
        if (itemName.toLowerCase().indexOf(text) != -1) { //if item name isn't equal to -1, adica daca indexul exista in li/daca este match 

            //display match
            item.style.display = 'block'; //style set to block so the item shows
        } else {
            item.style.display = 'none'; //hide elements if there isnt a match in the search filter
        }
    })
}