const login = () => Response.redirect('http://localhost:5173/profile?status=registered', 302);
const logout = () => Response.redirect('http://localhost:5173/', 302);

export { login, logout };
