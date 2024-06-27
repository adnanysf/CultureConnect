import Image from "next/image";

export default function Login() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl">Culture Connect</h1>
      <div className="flex flex-col items-center w-1/4 border border-black rounded-lg p-2 justify-center gap-5" style={{height:"95%"}}>
        <input type="text" placeholder="Username" className="border border-black rounded-lg p-2" />
        <input type="password" placeholder="Password" className="border border-black rounded-lg p-2" />
        <button className="border border-black rounded-lg p-2">Login</button>
      </div>

    </main>
  );
}
