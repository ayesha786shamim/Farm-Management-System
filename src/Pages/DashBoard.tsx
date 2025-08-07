import React from "react";

const DashBoard: React.FC = () => {
  console.log('Dashboard page rendered');

  return (
    <div className="flex flex-col h-full w-full bg-transparent">
        <h2 className="text-2xl font-bold mb-4"> Dashboard </h2>
        <p>Dashboard content here</p>
    </div>
  );
}

export default DashBoard;
