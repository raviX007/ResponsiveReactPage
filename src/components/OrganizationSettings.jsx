import React, { useState } from "react";

const OrganizationSettings = () => {
  const [deleteRange, setDeleteRange] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [dataDeleteHistory, setDataDeleteHistory] = useState([
    {
      requestDate: "2023-04-01",
      requestedBy: "user@example.com",
      status: "Completed",
    },
    {
      requestDate: "2023-03-15",
      requestedBy: "admin@example.com",
      status: "Pending",
    },
    {
      requestDate: "2023-02-28",
      requestedBy: "user@example.com",
      status: "Completed",
    },
  ]);

  const handleDeleteRange = () => {
    // Implement delete functionality for the selected date range
    if (deleteRange === "last30days") {
      // Delete data from the last 30 days
      console.log("Deleting data from the last 30 days");
      updateDataDeleteHistory("2023-03-08", "user@example.com", "Completed");
    } else if (deleteRange === "last6months") {
      // Delete data from the last 6 months
      console.log("Deleting data from the last 6 months");
      updateDataDeleteHistory("2022-10-15", "admin@example.com", "Completed");
    } else if (deleteRange === "last1year") {
      // Delete data from the last 1 year
      console.log("Deleting data from the last 1 year");
      updateDataDeleteHistory("2023-04-01", "user@example.com", "Completed");
    }
  };

  const handleDeleteInvite = () => {
    // Implement delete functionality for the specific invite
    if (inviteEmail) {
      console.log("Deleting data for invite:", inviteEmail);
      updateDataDeleteHistory("2023-04-05", "user@example.com", "Completed");
    }
  };

  const updateDataDeleteHistory = (requestDate, requestedBy, status) => {
    setDataDeleteHistory([
      ...dataDeleteHistory,
      { requestDate, requestedBy, status },
    ]);
  };
  const handleDeleteAccount = () => {
    // Implement delete account functionality
    console.log("Deleting account");
  };

  return (
    <div className="container mx-auto my-8 flex flex-col gap-8">
      <div>
        <h2 className="text-lg font-bold mb-2">
          Delete information from your organization
        </h2>
        <p className="text-gray-600 mb-4">
          When anyone in your organization schedules an event with an invite,
          information about the event and everyone part of it is saved in
          Clearbit. If you need to delete this information for compliance
          reasons, you can do so without contacting support.
        </p>
        <p className="text-gray-600 bg-red-100 py-2 px-4 font-bold mb-4">
          Once you delete information, you won't be able to recover it.
        </p>
        <p className="py-4">
          {" "}
          Invitee will be deleted <b>7 days</b> from the day you make the
          request.{" "}
        </p>
        <hr className="my-4 border-t-2 border-gray-200" />
        <div className="mb-4">
          <label
            htmlFor="deleteRange"
            className="block text-gray-600 font-bold mb-2"
          >
            Delete invite for specific invitees within a period of time:
          </label>

          <p className="py-4">
            Enter an invitee's email to delete all of their personally
            identifiable information from your organization and integrations.
            During the data deletion process, Calendly removes the deleted
            invites from their spot on group events and cancles both pending and
            upcoming events with them.
          </p>
          <textarea
            id="inviteEmail"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            className="border border-gray-200 rounded-lg p-2 w-full h-40"
            placeholder="Enter an invitee's email"
          />
          <button
            onClick={handleDeleteInvite}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Delete
          </button>
        </div>
        <hr className="my-4 border-t-2 border-gray-200" />
        <div className="mb-4">
          <label
            htmlFor="inviteEmail"
            className="block text-gray-600 font-bold mb-2"
          >
            Delete information within a period of time
          </label>
          <p className="py-4">
            Choose a date range to delete all information from scheduled events
            within that period of time.
          </p>
          <div className="flex items-center">
            <select
              id="deleteRange"
              value={deleteRange}
              onChange={(e) => setDeleteRange(e.target.value)}
              className="px-4 py-2 border rounded-md flex-1 mr-4"
            >
              <option value="">Select a date range</option>
              <option value="last30days">Last 30 days</option>
              <option value="last6months">Last 6 months</option>
              <option value="last1year">Last 1 year</option>
            </select>
            <button
              onClick={handleDeleteRange}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <div>
        <h2 className="text-lg font-bold mb-2">Data deletion history</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Request Date</th>
              <th className="px-4 py-2 text-left">Requested By</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataDeleteHistory.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2">{entry.requestDate}</td>
                <td className="px-4 py-2">{entry.requestedBy}</td>
                <td className="px-4 py-2">{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <div>
        <h2 className="text-lg font-bold mb-2">Delete your account</h2>
        <p className="text-gray-600 mb-4">
          You can delete your account in your{" "}
          <a href="#account-settings" className="text-blue-700">
            account settings
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default OrganizationSettings;
