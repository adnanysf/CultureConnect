'use client'
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(username, password)
  }
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl">Culture Connect</h1>
      <div className="flex flex-col items-center w-1/4 border border-black rounded-lg p-2 justify-center gap-5" style={{height:"95%"}}>
        <input onChange={(e) => {
          setUsername(e.target.value);
        }} type="text" placeholder="Username" className="border border-black rounded-lg p-2" />
        <input onChange={(e) =>{
          setPassword(e.target.value);
        }} type="password" placeholder="Password" className="border border-black rounded-lg p-2" />
        <button onClick={() => {
          handleLogin();
        }} className="border border-black rounded-lg p-2">Login</button>
      </div>

    </main>
  );
}
