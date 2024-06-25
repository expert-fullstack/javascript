import React from "react";
import axios from "axios";
import { Card, Button, ListGroup } from "react-bootstrap";
import { SubscriptionPlan } from "../../constants/subscriptionPlan";
import "./subscriptionPlanCard.css"; // Import the CSS file

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
}) => {
  const createSubscription = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/subscription/createSubcription",
        {
          plan_id: "P-1XL411388G667270FMZZKSVQ", // Replace with your plan ID
        }
      );

      const approvalLink = response.data.links.find(
        (link: { rel: string }) => link.rel === "approve"
      ).href;
      window.location.href = approvalLink;
    } catch (error) {
      console.error("Error creating subscription:", error);
    }
  };

  return (
    <Card className="card" style={{ width: "23rem" }}>
      <Card.Img variant="top" src={plan.imgSrc} className="card-img-top" />
      <Card.Body>
        <Card.Title>{plan.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          ${plan.price}/month
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {plan.features.map((feature, index) => (
          <ListGroup.Item key={index} className="list-group-item">
            {feature}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Button
          onClick={createSubscription}
          className="mt-auto button"
        >
          Subscribe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SubscriptionPlanCard;
