
import React, { useState } from 'react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview')
  const [search, setSearch] = useState('')

  const employees = [
    { id: 'EMP001', name: 'Abhilasha', role: 'Frontend Developer', department: 'Engineering', status: 'Active' },
    { id: 'EMP002', name: 'Rahul Kumar', role: 'Backend Developer', department: 'Engineering', status: 'Active' },
    { id: 'EMP003', name: 'Priya Sharma', role: 'UI/UX Designer', department: 'Design', status: 'On Leave' },
    { id: 'EMP004', name: 'Amit Singh', role: 'HR Manager', department: 'Human Resources', status: 'Active' },
    { id: 'EMP005', name: 'Neha Verma', role: 'QA Engineer', department: 'Testing', status: 'Inactive' },
  ]

  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.id} ${employee.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const stats = [
    { title: 'Total Employees', value: '248', detail: '+12 this month', icon: '👥', color: 'text-emerald-400' },
    { title: 'Present Today', value: '216', detail: '87% attendance', icon: '✓', color: 'text-blue-400' },
    { title: 'On Leave', value: '18', detail: 'Today', icon: '📅', color: 'text-yellow-400' },
    { title: 'Open Positions', value: '14', detail: 'Across departments', icon: '💼', color: 'text-purple-400' },
  ]

  const activities = [
    { title: 'New employee joined', description: 'Rahul Kumar · Engineering', time: '09:30 AM', color: 'bg-emerald-400' },
    { title: 'Leave request submitted', description: 'Priya Sharma · Design', time: '10:15 AM', color: 'bg-yellow-400' },
    { title: 'Attendance report updated', description: 'HR Department', time: '11:00 AM', color: 'bg-blue-400' },
    { title: 'New job position created', description: 'Frontend Developer', time: '12:20 PM', color: 'bg-purple-400' },
  ]

  return (
    <div className="min-h-screen w-full bg-black p-4 text-white sm:p-6 lg:p-10">

      {/* Header */}
      <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mt-2 text-3xl font-bold">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-400">
            Manage your workforce, monitor activity, and track performance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => alert('Connect your notification system here.')}
            className="rounded-xl border border-[#262626] bg-[#121212] px-4 py-3 hover:bg-[#202020]"
            aria-label="Notifications"
          >
            🔔
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-[#262626] bg-[#121212] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
              A
            </div>
            <div>
              <p className="font-semibold">Administrator</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="mt-8 flex flex-wrap gap-2 border-b border-[#262626] pb-4">
        {['Overview', 'Employees', 'Attendance', 'Reports'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm transition ${
              activeTab === tab
                ? 'bg-emerald-500 text-black font-semibold'
                : 'text-gray-400 hover:bg-[#1c1c1c] hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Statistics */}
      <section className="mt-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {activeTab === 'Overview' ? 'Overview' : activeTab}
          </h2>
        </div>

        {activeTab === 'Overview' || activeTab === 'Attendance' ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats
              .filter((item) => activeTab === 'Overview' || item.title === 'Present Today' || item.title === 'On Leave')
              .map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#262626] bg-[#121212] p-6 transition hover:border-emerald-500/50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">{item.title}</p>
                    <span className={`text-xl ${item.color}`}>{item.icon}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-bold">{item.value}</h3>
                  <p className={`mt-2 text-sm ${item.color}`}>{item.detail}</p>
                </div>
              ))}
          </div>
        ) : null}
      </section>

      {/* Employees */}
      {(activeTab === 'Overview' || activeTab === 'Employees') && (
        <section className="mt-8 rounded-2xl border border-[#262626] bg-[#121212] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Employee Management</h2>
              <p className="mt-1 text-sm text-gray-400">
                View and search employee records.
              </p>
            </div>

            <button
              onClick={() => alert('Connect your Add Employee form here.')}
              className="rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-black transition hover:bg-emerald-400"
            >
              Add Employee
            </button>
          </div>

          <div className="mt-5">
            <input
              type="text"
              placeholder="Search by name, ID, or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-[#303030] bg-black px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-emerald-500"
            />
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#303030] text-gray-400">
                  <th className="px-4 py-4 font-medium">Employee</th>
                  <th className="px-4 py-4 font-medium">Department</th>
                  <th className="px-4 py-4 font-medium">Role</th>
                  <th className="px-4 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b border-[#262626] transition hover:bg-[#1a1a1a]"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 font-bold text-emerald-400">
                          {employee.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="mt-1 text-xs text-gray-500">
                            {employee.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-gray-300">
                      {employee.department}
                    </td>

                    <td className="px-4 py-4 text-gray-300">
                      {employee.role}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          employee.status === 'Active'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : employee.status === 'On Leave'
                              ? 'bg-yellow-500/10 text-yellow-400'
                              : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredEmployees.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-4 py-8 text-center text-gray-400">
                      No employees found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Showing {filteredEmployees.length} of {employees.length} sample employees
          </p>
        </section>
      )}

      {/* Recent Activity */}
      {(activeTab === 'Overview' || activeTab === 'Reports') && (
        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <p className="mt-1 text-sm text-gray-400">
              Latest workforce updates
            </p>

            <div className="mt-6 space-y-6">
              {activities.map((activity) => (
                <div key={activity.title} className="flex gap-4">
                  <div className={`mt-1 h-3 w-3 shrink-0 rounded-full ${activity.color}`} />
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="mt-1 text-sm text-gray-400">
                      {activity.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-gray-500">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Department Overview */}
          <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6">
            <h2 className="text-xl font-bold">Department Overview</h2>
            <p className="mt-1 text-sm text-gray-400">
              Sample employee distribution
            </p>

            <div className="mt-6 space-y-6">
              {[
                { name: 'Engineering', count: 96, percent: 80 },
                { name: 'Human Resources', count: 24, percent: 35 },
                { name: 'Design', count: 42, percent: 50 },
                { name: 'Marketing', count: 36, percent: 43 },
              ].map((department) => (
                <div key={department.name}>
                  <div className="mb-2 flex justify-between gap-3 text-sm">
                    <span className="text-gray-300">{department.name}</span>
                    <span className="text-gray-400">
                      {department.count} employees
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#303030]">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${department.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* Footer */}
      <footer className="mt-10 border-t border-[#262626] pt-5 text-center text-sm text-gray-500">
        © 2026 Employee Management System. All rights reserved.
      </footer>

    </div>
  )
}

export default AdminDashboard
