import api from "../axios";

export interface WaitlistData {
  fullname: string;
  email: string;
  country: string;
  city: string;
  role: string;
  serviceInterest: string;
  agreesToContact: boolean;
}

export const joinWaitlist = async (data: WaitlistData) => {
  try {
    const response = await api.post("/waitlist", data);
    return response.data;
  } catch (error) {
    console.error("Error joining waitlist:", error);
    throw error;
  }
};
