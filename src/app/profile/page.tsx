"use client"
import { useUser } from "@/context/UserContext";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { user } = useUser();
  const { data: session, status } = useSession();
  const router = useRouter();
  

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/login"); // Redirect to login if not authenticated
    return null;
  }
  console.log("session from profile", session)

  console.log("user form profile", user)
  const profile = (session.user as any).profile;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Personal Information</h2>
          <p className="text-slate-600">Name: {profile?.fullName}</p>
          <p className="text-slate-600">Email: {profile?.email[0].value}</p>
          <p className="text-slate-600">Uid: {profile?.uid}</p>
          <p className="text-slate-600">Access Token: {(session.user as any)?.access_token}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Account Settings</h2>
          <p className="text-slate-600">Last login: 2023-05-01 14:30:00</p>
          <p className="text-slate-600">Two-factor authentication: Enabled</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Preferences</h2>
          <p className="text-slate-600">Language: English</p>
          <p className="text-slate-600">Time zone: UTC-5 (Eastern Time)</p>
        </div>
      </div>
    </div>
  )
}

