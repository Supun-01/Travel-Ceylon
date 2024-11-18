import React from 'react';
import '../styles/GuestReviews.css';

const reviews = [
    {
        name: "Logan",
        date: "3 October 2024",
        rating: 5,
        text: "Polly was a wonderful tour guide, extremely friendly and knowledgeable. She was flexible and accommodating - taking into account things to keep our toddler going throughout the day. As well as covering the key sights she also took us to a fantastic local restaurant, one of the best meals we had during our stay! We highly recommend Polly for your next adventure!"
    },
    {
        name: "Randal",
        date: "23 September 2024",
        rating: 5,
        text: "Tuangtip was the perfect host for our party of 4 people ranging in ages from 11-51. She adapted the trip to follow our interests and gave us many special treats and extra experiences including hands-on sweet making at a local stall along the way."
    },
    {
        name: "Meredith",
        date: "30 September 2024",
        rating: 5,
        text: "Donald (Khun Nat) was such a great guide that we forgot he was a guide because it felt like we were hanging out with an old friend. Everything was laid back, relaxing and fun. Yes, we learned a lot about the area's history but it never felt like a lecture and both Khun Nat and us enjoyed the great day, great weather in beautiful surroundings. Definitely recommend this tour and Khun Nat."
    }
];

const GuestReviews = () => {
    return (
        <div className="guest-reviews">
            <h2>Reviews from guests</h2>
            {reviews.map((review, index) => (
                <div className="review" key={index}>
                    <div className="review-header">
                        <span className="review-icon">😊</span>
                        <div>
                            <strong>{review.name}</strong>
                            <div className="review-date">{review.date}</div>
                        </div>
                    </div>
                    <div className="review-rating">
                        {"★".repeat(review.rating)}
                    </div>
                    <p className="review-text">{review.text}</p>
                    <hr />
                </div>
            ))}

            <div className="footer-highlights">
                <div>
                    <strong>Withlocals experiences are always</strong>
                    <p>No strangers, just you. Fully customize your trip to your needs.</p>
                </div>
                <div>
                    <strong>Private & personalized</strong>
                    <p>No strangers, just you. Fully customize your trip to your needs.</p>
                </div>
                <div>
                    <strong>With a local expert</strong>
                    <p>From historical facts to the most up-to-date health regulations.</p>
                </div>
                <div>
                    <strong>Without the crowds</strong>
                    <p>Experiences designed to take you away from the crowds towards authentic local spots.</p>
                </div>
            </div>
        </div>
    );
};

export default GuestReviews;
