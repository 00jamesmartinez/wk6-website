const getData = () =>
{
    axios.get("https://url/api/path")
    .then(response => {
        const item= response.data.data;
    })
    .catch(error=>console.log(error));
}
getData();

const createLi = (item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name}`
    return li;
}

const attachEl = (items) =>
{
    const ul = document.querySelector('ul');
    items.map(item => {
        ul.appendChild(createLi(item));
    });
}

var mainEl = document.getElementById('main');

mainEl.addEventListener('click',event => 

getData()

)

const createItem = (item) =>
{
    axios.post('https://url/api/path')
    .then(response => {
        const addItem = response.data;
        
    })
    .catch(error=>console.log(error));
     
}

const form = document.querySelector('form');
const formEvent = form.addEventListener('submit',e=>{
    const name=document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const items = {name,email};
    createItem(items);
})