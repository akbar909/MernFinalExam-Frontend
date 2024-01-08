import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PageTwo = () => {
  const [poetries, setPoetries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoetries = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:2000/api/getpoetries');
        console.log('Response Data:', response.data);
        const data = response.data;
      
        if (Array.isArray(data)) {
          setPoetries(data);
        } else if (data && Array.isArray(data.poetries)) {
          setPoetries(data.poetries);
        } else {
          throw new Error('Invalid data received for poetries');
        }
      } catch (error) {
        console.error('Error fetching poetries:', error);
        setError('Failed to fetch poetries. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPoetries();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 space-y-6 bg-white shadow-md rounded-md">
          {error && <div className="alert alert-danger">{error}</div>}
          {isLoading && <p className="text-center">Loading poetries...</p>}

          {!isLoading && poetries.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-center">Poetries</h2>

              {poetries.map((poetry, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium">{`${index + 1}. Poet: ${poetry.poet}`}</p>
                  <p><span className='font-semibold'>Data:</span> {poetry.data}</p>
                  
                </div>
              ))}
            </>
          )}

          {!isLoading && poetries.length === 0 && (
            <p className="text-center">No poetries available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PageTwo;
