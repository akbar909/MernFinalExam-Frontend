import React from 'react';

const PageOne = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-6 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label htmlFor="inputBox" className="block text-gray-700 font-bold mb-2">
            Input Box
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter something..."
          />
        </div>
        <div>
          <label htmlFor="textarea" className="block text-gray-700 font-bold mb-2">
            Text Area
          </label>
          <textarea
            id="textarea"
            className="w-full border border-gray-300 p-2 rounded resize-none focus:outline-none focus:border-blue-500"
            placeholder="Enter some text..."
            rows="8"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
