"use strict";

const currentUser = {
  firstName: "Lucas",
  lastName:  "Vermeersch",
  miles:     14820
};

const flight = {
  number:   "HZ-204",
  from:     "BRU",
  fromCity: "Brussel",
  to:       "LIS",
  toCity:   "Lissabon",
  date:     "14 juni 2025",
  gate:     "B12",
  seats:    3
};

const transportOptions = [
  "✈️  Vliegtuig",
  "🚂  Trein",
  "🚢  Cruiseschip",
  "🚗  Auto",
  "🚌  Bus"
];

const destinations = [
  "Lissabon",
  "Kyoto",
  "Marrakech",
  "Reykjavik",
  "Buenos Aires",
  "Bangkok"
];

const trips = [
  {
    name:    "Lissabon",
    country: "Portugal",
    price:   349,
    desc:    "Zonnige stad vol azulejos, pastéis de nata en tramritten door smalle straatjes.",
    image:   "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    name:    "Kyoto",
    country: "Japan",
    price:   890,
    desc:    "Tijdloze tempels, kersenbloesem en de stille elegantie van het Japanse landleven.",
    image:   "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80"
  },
  {
    name:    "Marrakech",
    country: "Marokko",
    price:   420,
    desc:    "Levendige souks, geurige kruiden en de warme kleuren van de medina.",
    image:   "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80"
  },
  {
    name:    "Reykjavik",
    country: "IJsland",
    price:   760,
    desc:    "Noorderlicht, geisers en ongerepte natuur aan het einde van de wereld.",
    image:   "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=600&q=80"
  },
  {
    name:    "Buenos Aires",
    country: "Argentinië",
    price:   980,
    desc:    "Tango, steak en een bruisende cultuurscene in het Parijs van Zuid-Amerika.",
    image:   "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80"
  },
  {
    name:    "Bangkok",
    country: "Thailand",
    price:   580,
    desc:    "Gouden tempels, drijvende markten en streetfood op elke hoek van de straat.",
    image:   "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80"
  }
];
 

window.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  // Feature 1
  document.getElementById("miles-display").innerHTML = currentUser.miles;
   
}