import { books } from "../books.js";

export const getBooks = (request, h) => {
    const { name, reading, finished } = request.query;

    let filteredBooks = books;

    if (name !== undefined) {
        filteredBooks = filteredBooks.filter((book) =>
            book.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (reading !== undefined) {
        filteredBooks = filteredBooks.filter((book) => book.reading === true);
    }

    if (finished !== undefined) {
        filteredBooks = filteredBooks.filter(
            (book) => book.finished === !!Number(finished)
        );
    }

    const response = h.response({
        status: "success",
        data: {
            books: filteredBooks.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            })),
        },
    });

    response.code(200);
    return response;
};
