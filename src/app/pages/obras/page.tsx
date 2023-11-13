'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
    const [password, setPassword] = useState<string>("")
    const [login, setLogin] = useState<string>("")

    const handleContinue = () => {
        if (login === process.env.NEXT_PUBLIC_LOGIN && password === process.env.NEXT_PUBLIC_PASSWORD) {
            window.location.href = 'pages/obras'
        } else {
            alert('Login ou senha incorretos')
        }
    }
    
    return (
      <main className="flex w-full min-h-screen flex-row items-center justify-center bg-gray-950">
        <div className="flex flex-col w-96 items-center gap-20">
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Login" 
                value={login} 
                onChange={(e) => {
                    setLogin(e.target.value)    
                }}
                className="text-gray-950"
            />

            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value)
                }} 
                className="text-gray-950"
            />
            <button onClick={handleContinue}>Continue</button>
        </div>
      </main>
    )
}