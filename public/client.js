async function saveIt() 
{
    console.log('I have been clicked')
            const link = document.querySelector('#login-username').value;
            const location = document.querySelector('#set-location').value;
        
        //this is the data that will be sent:
            const data =  
                {
                    link, location
                };
        //We must specify what kind of fetch method we will be usinf, in our case is POST
            const options = 
                {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                };

            const res = await fetch('/api', options);
            const json = await res.json();
            console.log(json)
            window.location.href = window.location.href;
};

async function getData()
{
    const res = await fetch('/api')
    const data = await res.json();

    console.log(data);

    for (item of data)
{
    let wrapperDiv = document.createElement('DIV');
    wrapperDiv.setAttribute('class', item.location);
    wrapperDiv.classList.add('location-wrapper')
    let frag = document.createRange().createContextualFragment(item.link);
    let newTour = document.querySelector('#tableee');
    wrapperDiv.appendChild(frag)
    newTour.appendChild(wrapperDiv)
    console.log(item.link)
    console.log(frag)
}
};

///The tour for the login page
async function getDataLogin()
{
    const res = await fetch('/api')
    const data = await res.json();

    console.log(data);

    for (item of data)
{
    let frag = document.createRange().createContextualFragment(item.link);
    let newTour = document.querySelector('#your-tours-table');
    let tourContainer = document.createElement('DIV');
    let deleteButton = document.createElement('DIV');
    deleteButton.textContent = 'DELETE';
    deleteButton.setAttribute('class', 'delete-tour-button');
    deleteButton.setAttribute('onclick', 'remove(this.id)');
    deleteButton.setAttribute('id', item._id);
    tourContainer.append(frag, deleteButton);
    newTour.appendChild(tourContainer)
    console.log(item.link)
    console.log(frag)
}
};

async function remove(id) 
{
console.log('I have been clicked')
let x =
{
id: id
}
const options2 = 
{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'},
    body: JSON.stringify(x)
};
const response = await fetch('/delete', options2)
const json = await response.json(x)
 console.log(json)
 window.location.href = window.location.href; //if you have issues try deleteing this
}

//filtering results
const locationIndex = document.querySelector('#location-index');

locationIndex.addEventListener('change', async () =>
{
let location = locationIndex.options[locationIndex.selectedIndex].value;
let locationWrapper = document.querySelectorAll('.location-wrapper');
locationWrapper.forEach((element) =>
{
 let selectedOption = element.classList[0]
 if(location !== selectedOption)
 {
    element.style.display = 'none'
 }
 else if(location === selectedOption)
 {
    element.style.display = 'block'
 }
})
})




