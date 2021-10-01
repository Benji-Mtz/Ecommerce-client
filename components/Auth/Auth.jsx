import React, { useState } from 'react'

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);

    return showLogin ? <h1>Estoy en el login</h1> : <h1>Estoy en el registro</h1>;
}

export default Auth
