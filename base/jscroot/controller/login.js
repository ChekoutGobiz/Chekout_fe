export async function login(email, password) {
    const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data.user)); // Simpan data user
    localStorage.setItem('token', data.token); // Simpan token

    return data;
}
