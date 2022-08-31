const loadAllPouducts = async() =>{
    const res = await  fetch('https://fakestoreapi.com/products');
    const data = await  res.json();
    return data;
}
const displaySideBer = async() =>{
    const loadProducts = await loadAllPouducts();
    const findSideBerName = [];
const sideBer = document.getElementById('side-ber');
    for (const product of loadProducts) {
        const {category} = product
        if(findSideBerName.indexOf(category) == -1){
            findSideBerName.push(category)
            const li = document.createElement('li');
            li.innerHTML =`
            <li class ="text-2xl font-semiboldbold py-4">${category}</li>
            `
            sideBer.appendChild(li)
        }
    }
}


displaySideBer()