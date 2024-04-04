const API_KEY = "ea3e3338d6a2f4fe6d246649169f3479";
export function getCurrentWeatherEndpoint(city) {
  // Intotdeauna, cand folosim un API, putem obtine informatii extra prin query params.
  // lang=ro => Rezultatele vin in romana.
  // units=metric => Unitatea de masura va fi grade celsius.
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

export function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY};`
}