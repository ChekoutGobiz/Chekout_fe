import { createElement } from "./croot.js"; // Pastikan file croot.js diimpor

// Buat elemen utama
const body = document.body;
body.className = "bg-gray-100 flex items-center justify-center min-h-screen";

// Container utama
const container = createElement("div", {
    class: "bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center",
});
body.appendChild(container);

// Judul
const title = createElement("h2", {
    class: "text-2xl font-bold text-green-600 mb-4",
    textContent: "Pembayaran Berhasil!",
});
container.appendChild(title);

// Pesan sukses
const successMessage = createElement("p", {
    class: "text-gray-700 mb-6",
    textContent: "Terima kasih atas pembayaran Anda. Transaksi Anda telah berhasil diproses.",
});
container.appendChild(successMessage);

// Informasi jumlah pembayaran
const paymentInfo = createElement("div", { class: "mb-6" });
container.appendChild(paymentInfo);

const paymentLabel = createElement("p", {
    class: "text-gray-800 font-semibold",
    textContent: "Jumlah Pembayaran",
});
paymentInfo.appendChild(paymentLabel);

const paymentAmount = createElement("p", {
    class: "text-xl font-bold text-gray-900",
    textContent: "Rp140.000",
});
paymentInfo.appendChild(paymentAmount);

// Garis pemisah
const separator1 = createElement("hr", { class: "my-6" });
container.appendChild(separator1);

// Status pembayaran
const paymentStatus = createElement("div", { class: "mb-6" });
container.appendChild(paymentStatus);

const statusLabel = createElement("p", {
    class: "text-gray-800",
    textContent: "Status Pembayaran:",
});
paymentStatus.appendChild(statusLabel);

const statusBadge = createElement("span", {
    class: "inline-block px-3 py-1 bg-green-100 text-green-800 font-semibold rounded-full",
    textContent: "Terverifikasi",
});
paymentStatus.appendChild(statusBadge);

// Pesan tambahan
const additionalMessage = createElement("p", {
    class: "text-gray-700 mb-6",
    textContent: "Kami telah mengirimkan konfirmasi pembayaran ke email Anda. Silakan cek email untuk informasi lebih lanjut.",
});
container.appendChild(additionalMessage);

// Langkah selanjutnya
const nextSteps = createElement("div", { class: "mb-4" });
container.appendChild(nextSteps);

const nextStepsLabel = createElement("p", {
    class: "text-gray-800 font-semibold",
    textContent: "Langkah Selanjutnya",
});
nextSteps.appendChild(nextStepsLabel);

const nextStepsList = createElement("ul", {
    class: "list-disc list-inside text-left mt-2 text-gray-700 space-y-2",
});
nextSteps.appendChild(nextStepsList);

const steps = [
    {
        text: "Kembali ke halaman utama untuk melanjutkan belanja.",
        href: "/checkout.html",
    },
    {
        text: "Jika ada pertanyaan, hubungi layanan pelanggan kami.",
        href: "/cart.html",
    },
    { text: "Simpan bukti pembayaran untuk keperluan referensi." },
];

steps.forEach((step) => {
    const li = createElement("li", {});
    if (step.href) {
        const link = createElement("a", {
            href: step.href,
            class: "text-blue-600 hover:underline",
            textContent: step.text,
        });
        li.appendChild(link);
    } else {
        li.textContent = step.text;
    }
    nextStepsList.appendChild(li);
});

// Tombol kembali ke beranda
const homeButton = createElement("a", {
    href: "/home",
    class: "inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300",
    textContent: "Kembali ke Beranda",
});
container.appendChild(homeButton);
