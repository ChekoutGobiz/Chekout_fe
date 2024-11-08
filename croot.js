// Fungsi untuk memperbarui konten elemen berdasarkan ID
export function setInner(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
    } else {
        console.error(`Element with ID "${id}" not found.`);
    }
}

// Fungsi untuk membuat elemen dengan atribut dan konten tertentu
export function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);

    // Iterasi atribut dan tambahkan ke elemen
    for (const [key, value] of Object.entries(attributes)) {
        if (key === "textContent") {
            element.textContent = value;
        } else if (key === "innerHTML") {
            element.innerHTML = value;
        } else {
            element.setAttribute(key, value);
        }
    }

    return element;
}
