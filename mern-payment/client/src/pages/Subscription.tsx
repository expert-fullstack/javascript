// src/components/SubscriptionPage.tsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubscriptionPlanCard from "../components/subscriptionplan/subscriptionPlanCard";
import subscriptionPlans from "../constants/subscriptionPlan";
const SubscriptionPage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-left m-3">Subscription Plans</h1>
      <Row className="justify-content-center">
        {subscriptionPlans.map((plan) => (
          <Col key={plan.id} md={4} className="d-flex">
            <SubscriptionPlanCard plan={plan} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubscriptionPage;
