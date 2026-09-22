import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
// import { VEHICLES, DRIVERS } from '../mockData'
import { useVehicles } from "../hooks/useVehicles";
import { useDrivers } from "../hooks/useDrivers";
import { useCreateTrip } from "../hooks/useTrips";

// function CreateTripPage() {
//   const navigate = useNavigate();
//   const { vehicles } = useVehicles();
//   const { drivers } = useDrivers();
//   const { mutate: createTrip, isPending } = useCreateTrip();

//   function handleSubmit(formData) {
//     createTrip(formData, {
//       onSuccess: () => navigate("/trips"),
//     });
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Create a New Trip</h2>
//       {isPending && (
//         <span className="loading loading-spinner loading-md mb-4" />
//       )}
//       <TripForm vehicles={vehicles} drivers={drivers} onSubmit={handleSubmit} />
//     </div>
//   );
// }

function CreateTripPage() {
  const navigate = useNavigate();
  const { vehicles } = useVehicles();
  const { drivers } = useDrivers();
  const { mutate: createTrip, isPending } = useCreateTrip();

  function handleSubmit(formData) {
    console.log("New trip submitted:", formData);

    createTrip(formData, {
      // console.log("New trip submitted:", formData);

      onSuccess: () => navigate("/trips"),
    });
    // // In a real app: POST to /api/v1/trips/ then navigate
    // navigate("/trips");
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create a New Trip</h2>
      {isPending && (
        <span className="loading loading-spinner loading-md mb-4" />
      )}
      <TripForm vehicles={vehicles} drivers={drivers} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateTripPage;
