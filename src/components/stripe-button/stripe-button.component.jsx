import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/favicon.ico.ico";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HbYgeDTKm1cn0iLbx2zaZnndaTf8NIrKgc2pqXnhtYSfIP7PUObSRIQFPAD042Axgtju7T4zGs0JYi8G1uBuFcs00NaYbKAwb";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Cloting Ltd."
      description="Ryan Dumajil CRWN Cloting Stripe Paymenets"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
