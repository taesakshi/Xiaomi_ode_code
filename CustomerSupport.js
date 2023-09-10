// src/components/CustomerSupport.js
import React, { useState, useEffect } from 'react';

function CustomerSupport() {
  const [queries, setQueries] = useState([]);
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Mock API for customer queries (replace with actual API calls)
    const mockQueries = [
      { id: 1, question: 'How do I reset my device?' },
      { id: 2, question: 'My device screen is flickering. What should I do?' },
      { id: 3, question: 'When will my repair be completed?' },
    ];

    setQueries(mockQueries);
  }, []);

  const handleSubmitResponse = (queryId) => {
    // Mock API for submitting responses (replace with actual API calls)
    const updatedQueries = queries.map((query) =>
      query.id === queryId ? { ...query, response } : query
    );

    setQueries(updatedQueries);
    setResponse('');
  };

  return (
    <div className="container">
      <h1 className="header">Customer Support</h1>
      <div className="query-list">
        {queries.map((query) => (
          <div key={query.id} className="query">
            <div className="question">{query.question}</div>
            {query.response && <div className="response">{query.response}</div>}
            {!query.response && (
              <div className="response-form">
                <textarea
                  rows="3"
                  placeholder="Type your response here..."
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                ></textarea>
                <button
                  onClick={() => handleSubmitResponse(query.id)}
                  disabled={!response}
                >
                  Submit Response
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerSupport;


