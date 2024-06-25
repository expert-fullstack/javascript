// src/subscriptionData.ts

export interface SubscriptionPlan {
    id: number;
    name: string;
    imgSrc: string;
    price: number;
    features: string[];
  }
  
  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 1,
      name: "Basic Plan",
      imgSrc:"https://images.unsplash.com/photo-1719216324605-30a4112ac3bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 10,
      features: ['Access to all basic content',
        'Standard Definition (SD) streaming',
        'Watch on 1 screen at a time',
        'Limited advertisements']
    },
    {
      id: 2,
      name: "Standard Plan",
      imgSrc:"https://images.unsplash.com/photo-1718202248507-9b6a498bcec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      price: 20,
      features: ["Access to all content", "High Definition (HD) streaming 2","Watch on 2 screens at a time","No advertisements", "Download content for offline viewing"]
    },
    {
      id: 3,
      name: "Premium Plan",
      imgSrc:"https://images.unsplash.com/photo-1718715463369-ee0f12f06847?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
      price: 30,
      features: ["Access to all content","Ultra High Definition (UHD) streaming","Watch on 4 screens at a time", "No advertisements", "Download content for offline viewing", "Priority customer support"]
    }
  ];
  
  export default subscriptionPlans;
  