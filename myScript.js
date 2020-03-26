function changeImage (id){
    let image = document.getElementById(id).getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',image);
}
 