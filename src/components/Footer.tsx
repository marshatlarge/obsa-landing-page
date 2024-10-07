import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">Our OBSA Website.</p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ohio Baseball Science Academy. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
