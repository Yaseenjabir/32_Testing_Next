"use client";

export default function Home() {
  const handleClick = async () => {
    const res = await fetch("api/testing", {
      method: "POST",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
