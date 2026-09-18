import TripList from "../components/TripList";
// import { TRIPS } from '../mockData'
import { useVehicles } from "../hooks/useVehicles";
import { useDrivers } from "../hooks/useDrivers";
import { useTrips } from "../hooks/useTrips";

function TripsPage() {
  const { trips, isLoading: loadingtrips } = useTrips();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Trips</h2>
      <TripList trips={trips} />
    </div>
  );
}

export default TripsPage;
