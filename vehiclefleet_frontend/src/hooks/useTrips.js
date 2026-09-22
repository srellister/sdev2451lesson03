import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTrips, createTrip as createTripApi } from "../api/fleet";

export function useTrips() {
  const {
    data: trips = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["trips"],
    queryFn: fetchTrips,
  });
  return { trips, isLoading, isError, error };
}

export function useCreateTrip() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newTrip) => {
      console.log("useCreateTrip entered");
      createTripApi(newTrip);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
  });
}
