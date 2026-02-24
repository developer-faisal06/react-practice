export default function Book({book}){
    const {id,name,price,category}=book;
    // { id: 5, name: "Tafsir Ibn Kathir", price: 1500, category: "Tafsir" }
    return(
        <div className="book">
<h3>Name: {name}</h3>
<p>Price: {price}</p>
<p>Category: {category}</p>
        </div>
    )
}