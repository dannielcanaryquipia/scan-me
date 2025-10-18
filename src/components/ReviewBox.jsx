import React, { useState } from 'react';
import './ReviewBox.css';

function ReviewBox({ product }) {
  const [reviewerName, setReviewerName] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [overallSatisfaction, setOverallSatisfaction] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [textureFeedback, setTextureFeedback] = useState('');
  const [packagingFeedback, setPackagingFeedback] = useState('');
  const [suggestionsForImprovement, setSuggestionsForImprovement] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const submitUrl = product.reviewWebhookUrl; // Apps Script endpoint per product/Sheet

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!submitUrl) {
      setStatus('error');
      return;
    }
    if (!textureFeedback.trim() || !packagingFeedback.trim() || !suggestionsForImprovement.trim() || overallSatisfaction === 0) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      const payload = {
        reviewerName: reviewerName || 'Anonymous',
        dateOfPurchase: dateOfPurchase || new Date().toISOString().split('T')[0],
        overallSatisfaction,
        textureFeedback,
        packagingFeedback,
        suggestionsForImprovement,
        submittedAt: new Date().toISOString(),
      };
      await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });
      // With no-cors we assume success if no exception
      setStatus('success');
      setReviewerName(''); 
      setDateOfPurchase(''); 
      setOverallSatisfaction(0); 
      setTextureFeedback(''); 
      setPackagingFeedback(''); 
      setSuggestionsForImprovement('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="review-box card">
      <h3 className="review-box-title">Leave a Review</h3>
      <p className="review-box-subtitle">Your feedback helps improve {product.name}.</p>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="review-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="rev-name">Reviewer Name (optional)</label>
            <input id="rev-name" className="form-input" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} placeholder="Your name" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="rev-date">Date of Purchase (optional)</label>
            <input id="rev-date" type="date" className="form-input" value={dateOfPurchase} onChange={(e) => setDateOfPurchase(e.target.value)} />
          </div>
          <div className="form-field">
            <label className="form-label">Overall Satisfaction</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star ${star <= (hoveredRating || overallSatisfaction) ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setOverallSatisfaction(star)}
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  ★
                </button>
              ))}
            </div>
            {overallSatisfaction > 0 && (
              <p className="rating-text">
                {overallSatisfaction === 1 ? '1 star' : `${overallSatisfaction} stars`} selected
              </p>
            )}
          </div>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="rev-texture">Texture Feedback</label>
          <textarea id="rev-texture" className="form-textarea" rows={3} value={textureFeedback} onChange={(e) => setTextureFeedback(e.target.value)} placeholder="How was the texture of the product?" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="rev-packaging">Packaging Feedback</label>
          <textarea id="rev-packaging" className="form-textarea" rows={3} value={packagingFeedback} onChange={(e) => setPackagingFeedback(e.target.value)} placeholder="What do you think about the packaging?" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="rev-suggestions">Suggestions for Improvement</label>
          <textarea id="rev-suggestions" className="form-textarea" rows={3} value={suggestionsForImprovement} onChange={(e) => setSuggestionsForImprovement(e.target.value)} placeholder="Any suggestions to improve the product?" required />
        </div>
        <div className="review-actions">
          <button className="btn btn-primary" type="submit" disabled={status==='submitting'}>
            {status==='submitting' ? 'Submitting…' : 'Submit Review'}
          </button>
          {status==='success' && <span className="review-status success">Thank you! Your feedback was sent.</span>}
          {status==='error' && <span className="review-status error">Could not send. Please try again.</span>}
        </div>
        {!submitUrl && (
          <p className="review-hint">Note: No Google Sheet endpoint configured for this product.</p>
        )}
      </form>
    </section>
  );
}

export default ReviewBox;


