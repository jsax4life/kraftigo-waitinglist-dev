import api from "../axios";

export interface WaitlistData {
  fullName: string;
  email: string;
  country: string;
  city: string;
  role: string;
  serviceInterest: string;
  agreesToContact: boolean;
}

export const joinWaitlist = async (data: WaitlistData) => {
  try {
    const response = await api.post("/api/waitlist", data);
    return response.data;
  } catch (error) {
    console.error("Error joining waitlist:", error);
    throw error;
  }
};

export const getAllServices = async () => {
  try {
    const response = await api.get("/api/services/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const getWaitlistSignupsCount = async (): Promise<number> => {
  try {
    const response = await api.get("/api/waitlist");
    const data = response.data;

    if (Array.isArray(data)) {
      return data.length;
    }

    if (data && Array.isArray(data.data)) {
      return data.data.length;
    }

    return 0;
  } catch (error) {
    console.error("Error fetching waitlist signups:", error);
    throw error;
  }
};
