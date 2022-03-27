import React from 'react';
import { useNavigate } from 'react-router';
import './NotFoundPage.css';


function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__paragraph">Page not found</p>
      <button className="not-found-page__button" type="button" onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default NotFoundPage;