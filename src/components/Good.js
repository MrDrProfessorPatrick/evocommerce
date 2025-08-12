"use client";

export default function Good({ title, description }) {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
