import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleLogin = async (username, password) => {
        try {
            const response = await fetch('', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                console.log('pene')
                const data = await response.json();
                setUser(data.user); // Ajusta según la estructura de tu respuesta
            } else {
                console.log('Credenciales incorrectas');
            }
        } catch (error) {
            console.log('Error al realizar la solicitud');
        }
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};