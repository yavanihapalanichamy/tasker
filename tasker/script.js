function showdata(){

}
function AddData(){
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;

    let productList = []
    productList.push(
        {
            name:name,
            price:price,
            description:description,
        }
    );
    localStorage.setItem('productList',JSON.stringify(productList));
    console.log(productList);

}