import { addBook } from "./handlers/addBook.js";
import { deleteBook } from "./handlers/deleteBook.js";
import { editBook } from "./handlers/editBook.js";
import { getBook } from "./handlers/getBook.js";
import { getBooks } from "./handlers/getBooks.js";

export const routes = [
    {
        method: "POST",
        path: "/books",
        handler: addBook,
    },
    {
        method: "GET",
        path: "/books",
        handler: getBooks,
    },
    {
        method: "GET",
        path: "/books/{id}",
        handler: getBook,
    },
    {
        method: "PUT",
        path: "/books/{id}",
        handler: editBook,
    },
    {
        method: "DELETE",
        path: "/books/{id}",
        handler: deleteBook,
    },
];
