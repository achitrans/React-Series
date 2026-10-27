
import React, { useState } from 'react'

const Header = () => {
  const [showLogout, setShowLogout] = useState(false)

  return (
    <div className="min-h-screen w-full bg-black p-6 text-white md:p-10">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mt-2 text-2xl font-medium">
            Hello,
            <span className="block text-3xl font-bold text-emerald-400">
              Abhilasha 👋
            </span>
          </h1>

          <p className="mt-2 text-gray-400">
            Welcome back! Here's your employee dashboard.
          </p>
        </div>

        <button
          onClick={() => setShowLogout(!showLogout)}
          className="rounded-lg bg-red-500 px-5 py-2.5 font-medium text-white transition hover:bg-red-600"
        >
          Log Out
        </button>
      </div>

      {/* Logout Confirmation */}
      {showLogout && (
        <div className="mt-4 rounded-lg border border-red-500/30 bg-[#121212] p-4">
          <p>Are you sure you want to log out?</p>

          <div className="mt-3 flex gap-3">
            <button
              onClick={() => setShowLogout(false)}
              className="rounded bg-gray-700 px-4 py-2 hover:bg-gray-600"
            >
              Cancel
            </button>

            <button
              onClick={() => alert('Connect your logout logic here!')}
              className="rounded bg-red-500 px-4 py-2 hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Statistics */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6">
          <p className="text-gray-400">Total Tasks</p>
          <h2 className="mt-3 text-3xl font-bold">24</h2>
          <p className="mt-2 text-sm text-emerald-400">↑ 12% this month</p>
        </div>

        <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6">
          <p className="text-gray-400">Completed Tasks</p>
          <h2 className="mt-3 text-3xl font-bold">18</h2>
          <p className="mt-2 text-sm text-emerald-400">75% completion rate</p>
        </div>

        <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6">
          <p className="text-gray-400">Pending Tasks</p>
          <h2 className="mt-3 text-3xl font-bold">6</h2>
          <p className="mt-2 text-sm text-yellow-400">Needs your attention</p>
        </div>

        <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6">
          <p className="text-gray-400">Attendance</p>
          <h2 className="mt-3 text-3xl font-bold">95%</h2>
          <p className="mt-2 text-sm text-blue-400">Monthly overview</p>
        </div>

      </div>

      {/* Main Content */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Tasks */}
        <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">My Tasks</h2>

            <button
              onClick={() => alert('Connect your task list here!')}
              className="text-sm text-emerald-400 hover:text-emerald-300"
            >
              View all →
            </button>
          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between gap-3 rounded-xl bg-[#1c1c1c] p-4">
              <div>
                <h3 className="font-medium">Complete UI Design</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Due: Oct 29, 2026
                </p>
              </div>

              <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-400">
                In Progress
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-xl bg-[#1c1c1c] p-4">
              <div>
                <h3 className="font-medium">Update Employee Records</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Due: Oct 30, 2026
                </p>
              </div>

              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                Pending
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-xl bg-[#1c1c1c] p-4">
              <div>
                <h3 className="font-medium">Submit Weekly Report</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Completed yesterday
                </p>
              </div>

              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
                Completed
              </span>
            </div>

          </div>
        </div>

        {/* Profile */}
        <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6">
          <h2 className="text-xl font-bold">My Profile</h2>

          <div className="mt-6 flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-3xl font-bold">
              A
            </div>

            <h3 className="mt-4 text-xl font-semibold">Abhilasha</h3>

            <p className="mt-1 text-sm text-gray-400">
              Frontend Developer
            </p>
          </div>

          <div className="mt-6 space-y-4 border-t border-[#262626] pt-5 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-gray-400">Employee ID</span>
              <span>EMP001</span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-gray-400">Department</span>
              <span>Engineering</span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-gray-400">Status</span>
              <span className="text-emerald-400">Active</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-10 border-t border-[#262626] pt-5 text-center text-sm text-gray-500">
        © 2026 Employee Dashboard. All rights reserved.
      </footer>

    </div>
  )
}

export default Header
