import Book from "./Book"
export default function Librey({books}){
    return(
        <div className="grid">
            
            {
                books.map(book=><Book book={book} ></Book>)
            }
        </div>
        )
}