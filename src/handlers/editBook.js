import { books } from "../books.js";

export const editBook = (request, h) => {
    const { id } = request.params;
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;

    const updatedAt = new Date().toISOString();
    const index = books.findIndex((book) => book.id === id);

    if (index !== -1) {
        if (name === undefined) {
            const response = h.response({
                status: "fail",
                message: "Gagal memperbarui buku. Mohon isi nama buku",
            });
            response.code(400);
            return response;
        }
        if (readPage > pageCount) {
            const response = h.response({
                status: "fail",
                message:
                    "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
            });
            response.code(400);
            return response;
        }

        const finished = readPage === pageCount;

        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            finished,
            readPage,
            reading,
            updatedAt,
        };

        const response = h.response({
            status: "success",
            message: "Buku berhasil diperbarui",
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
    response.code(404);
    return response;
};
