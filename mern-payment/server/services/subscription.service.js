import Subscription from '../models/subscription.js'; // Assuming Subscription model is defined

// Function to save or update subscription data
const saveOrUpdateSubscription = async (webhookData) => {
  try {
    const {
      id,
      event_version,
      create_time,
      resource_type,
      resource_version,
      event_type,
      summary,
      resource,
      links
    } = webhookData;

    // Check if subscription already exists in MongoDB
    let subscription = await Subscription.findOne({ paypalWebhookId: id });

    if (subscription) {
      // Subscription exists, update it
      subscription.eventVersion = event_version;
      subscription.createTime = new Date(create_time);
      subscription.resourceType = resource_type;
      subscription.resourceVersion = resource_version;
      subscription.eventType = event_type;
      subscription.summary = summary;
      subscription.resource = {
        shippingAmount: resource?.shipping_amount,
        startTime: new Date(resource?.start_time),
        quantity: resource?.quantity,
        subscriber: {
          emailAddress: resource?.subscriber?.email_address,
          name: resource?.subscriber?.name,
          shippingAddress: resource?.subscriber?.shipping_address
        },
        createTimePaypal: new Date(resource?.create_time),
        links: resource?.links,
        id: resource?.id,
        planOverridden: resource?.plan_overridden,
        planId: resource?.plan_id,
        status: resource?.status
      };
      subscription.links = links;

      await subscription.save();

      console.log('Subscription data updated successfully:');
    } else {
      // Subscription does not exist, create a new one
      subscription = new Subscription({
        paypalWebhookId: id,
        eventVersion: event_version,
        createTime: new Date(create_time),
        resourceType: resource_type,
        resourceVersion: resource_version,
        eventType: event_type,
        summary: summary,
        resource: {
          shippingAmount: resource?.shipping_amount,
          startTime: new Date(resource?.start_time),
          quantity: resource?.quantity,
          subscriber: {
            emailAddress: resource?.subscriber?.email_address,
            name: resource?.subscriber?.name,
            shippingAddress: resource?.subscriber?.shipping_address
          },
          createTimePaypal: new Date(resource?.create_time),
          links: resource?.links,
          id: resource?.id,
          planOverridden: resource?.plan_overridden,
          planId: resource?.plan_id,
          status: resource?.status
        },
        links: links
      });

      await subscription.save();

      console.log('New subscription data saved successfully:' );
    }

    return subscription;
  } catch (error) {
    console.error('Error saving or updating subscription data:',error );
    throw error;
  }
};

// Function to fetch subscription data by PayPal webhook ID
const getSubscriptionByPaypalId = async (paypalWebhookId) => {
  try {
    const subscription = await Subscription.findOne({ paypalWebhookId });
    return subscription;
  } catch (error) {
    console.error('Error fetching subscription data:', error);
    throw error;
  }
};

export {
  saveOrUpdateSubscription,
  getSubscriptionByPaypalId
};
