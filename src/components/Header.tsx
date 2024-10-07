import React from "react";
import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="text-2xl font-bold">OBSA</div>
          <div className="flex flex-col items-center sm:items-end">
            <div className="flex flex-row items-center space-x-4 mb-2">
              <button
                onClick={() => (window.location.href = "tel:513-289-3295")}
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md justify-center text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                513-289-3295
              </button>
              <button
                onClick={() => (window.location.href = "mailto:info@obsa.com")}
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md justify-center text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </button>
            </div>
            <div className="text-center sm:text-right text-xs sm:text-sm">
              Call or email to learn more about OBSA or book your first training
              session
            </div>
            <div className="text-center sm:text-right text-xs sm:text-sm mt-1">
              Now serving West Chester, Yellow Springs, and Hamilton areas
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
