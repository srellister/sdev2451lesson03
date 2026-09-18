const BASE_URL = "http://localhost:8000/api/v1";

export async function fetchVehicles() {
  const response = await fetch(`${BASE_URL}/vehicles/`);
  if (!response.ok) throw new Error("Failed to fetch vehicles");
  return response.json();
}

export async function fetchDrivers() {
  const response = await fetch(`${BASE_URL}/drivers/`);
  if (!response.ok) throw new Error("Failed to fetch drivers");
  return response.json();
}

export async function fetchTrips() {
  const response = await fetch(`${BASE_URL}/trips/`);
  if (!response.ok) throw new Error("Failed to fetch tripss");
  return response.json();
}

export async function createTrip() {
  console.log("--> Fleet API createTrip reached with:", newTripData);
  const response = await fetch(`${BASE_URL}/trips`, {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create trip");
  return response.json();
}
