import { useQuery } from "@tanstack/react-query";
import { fetchDrivers } from "../api/fleet";

export function useDrivers() {
  const {
    data: drivers = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["driverss"],
    queryFn: fetchDrivers,
  });
  return { drivers, isLoading, isError, error };
}
