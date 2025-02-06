import React, { useState } from "react";
import bgImage from '/Bg.png';

export default function Events() {
  const events = [
    { name: 'Event 1', image: 'event1.jpg' },
    { name: 'Event 2', image: 'event2.jpg' },
    { name: 'Event 3', image: 'event3.jpg' },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{event.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
