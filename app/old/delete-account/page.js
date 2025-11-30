"use client";

import React from "react";

export default function DeleteAccountPage() {
  return (
    <main className="max-w-[1400px] mx-auto py-30 px-4">
      <section className="w-full">
        <h1 className="font-bold text-2xl text-black mb-10">How to Delete Your Account on Marginplus</h1>

        <p className="mb-6 text-gray-700">You can delete your Marginplus account anytime from inside the app.</p>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Steps:</h2>
        <ol className="list-decimal list-inside text-left text-gray-700 space-y-2 mb-8">
          <li>
            Open the <strong>Marginplus</strong> app.
          </li>
          <li>
            Tap the <strong>More</strong> tab (bottom navigation).
          </li>
          <li>
            Select <strong>Delete Account</strong>.
          </li>
          <li>Follow the instructions to permanently delete your account and data.</li>
        </ol>

        <p className="mb-4 text-gray-700">
          If you no longer have access to the app, you can also email us at{" "}
          <a href="mailto:support@marginplus.ng" className="text-[#00A859] underline">
            support@marginplusgroup.com
          </a>{" "}
          to request account deletion.
        </p>

        <p className="text-gray-700">
          We aim to process all deletion requests within <strong>7 days</strong>.
        </p>
      </section>
    </main>
  );
}
