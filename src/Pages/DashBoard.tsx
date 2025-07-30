import React from "react";

const DashBoard: React.FC = () => {
  console.log('Dashboard page rendered');

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4"> Dashboard </h2>
        <p>Dashboard content here</p>
      </div>
    </div>
  );
}

export default DashBoard;
