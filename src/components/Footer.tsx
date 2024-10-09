import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <a href="https://ohiobsa.com" target="_blank">
          <p className="mb-2 underline">
            Click here for the official OBSA Website.
          </p>
        </a>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ohio Baseball Science Academy. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
