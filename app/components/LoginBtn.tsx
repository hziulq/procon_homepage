"use client";

import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
    const { data: session } = useSession()
    if (process.env.NODE_ENV === "development") {
        console.log("session", session);
    }

    const signedInMessage = session ? "Signed in as " + session.user?.email : "Not signed in";
    const buttonText = session ? "Sign out" : "Sign in";
    const buttonAction = session ? () => signOut() : () => signIn();

    return (
        <div className="flex flex-col">
            <p className="text-white">{signedInMessage}</p>
            <button className="text-white" onClick={buttonAction}>{buttonText}</button>
        </div>
    )

}