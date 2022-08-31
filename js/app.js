const loadAllPouducts = async() =>{
    const res = await  fetch('https://fakestoreapi.com/products');
    const data = await  res.json();
    return data;
}
//displaySideBer
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
const displayProducts = async() =>{
    const products = await loadAllPouducts();
    const productsContainer = document.getElementById('products-container');
    productsContainer.textContent = ``;
    products.forEach(product => {
        const {image,category,title} = product;
        const productDiv = document.createElement('div');
        productDiv.innerHTML =`
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img src="${image}" class ='w-full h-96' alt="">
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${category}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${title.length > 20 ? title.slice(0,20) + '...':title}</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                </div>
            
        `
        productsContainer.appendChild(productDiv)
    })
}
const search =async(searchId) =>{
    const search = document.getElementById(searchId);
    const searchField = search.value;
        const allProducts =await loadAllPouducts();
        const foundproducts = allProducts.filter(product => product.category.includes(searchField));
        const productsContainer = document.getElementById('products-container');
        productsContainer.textContent = '';
        search.value ='';
        const noFound = document.getElementById('no-found')
        if(foundproducts == 0){
            noFound.classList.remove('hidden')
        }else{
            foundproducts.forEach(product => {
                const {image,category,title} = product;
                const productDiv = document.createElement('div');
                productDiv.innerHTML =`
                        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img src="${image}" class ='w-full h-96' alt="">
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${category}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${title.length > 20 ? title.slice(0,20) + '...':title}</p>
                            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                        </div>
                `
                productsContainer.appendChild(productDiv)
                noFound.classList.add('hidden')
            });
        }
}
// search-ber
document.getElementById('default-search').addEventListener('keypress', async(event)=>{
    if(event.key == 'Enter'){
        search('default-search')
        
    }

})
// btn-click 
document.getElementById('btn-search').addEventListener('click', function(){
    search('default-search')      
})
displayProducts();
displaySideBer()