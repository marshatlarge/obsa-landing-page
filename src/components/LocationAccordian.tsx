import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const locations = [
  {
    name: "West Chester Location",
    address: "4940-4942 Provident Drive",
    city: "Cincinnati, OH 45246",
  },
  {
    name: "Yellow Springs Location",
    address: "305 North Walnut Street",
    city: "Yellow Springs, OH 45387",
    additional: "(Inside Nuke's Warehouse)",
  },
  {
    name: "The Academy Location",
    address: "190 North Brookwood Avenue",
    city: "Hamilton, OH 45013",
  },
];

export default function LocationAccordion() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Locations
        </h2>
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-1 max-w-2xl mx-auto"
        >
          {locations.map((location, index) => (
            <Accordion.Item key={index} value={`item-${index}`}>
              <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left focus:outline-none border-b border-white/20 group">
                <span className="text-xl font-semibold">{location.name}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="pt-4 pb-6">
                <div className="space-y-2">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                  {location.additional && <p>{location.additional}</p>}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
