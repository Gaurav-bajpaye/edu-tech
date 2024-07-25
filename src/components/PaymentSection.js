// src/components/PaymentSection.js
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with your public key
const stripePromise = loadStripe('your_stripe_public_key');

const PaymentSection = () => {
  return (
    <div className="bg-white p-6 rounded shadow-lg max-w-sm mx-auto mt-8">
      <h2 className="text-xl mb-4">Payment</h2>
      <div className="mb-4">
        <label className="block text-sm mb-2">Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" className="border p-2 w-full" />
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-sm mb-2">Expiry Date</label>
          <input type="text" placeholder="MM/YY" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm mb-2">CVV</label>
          <input type="text" placeholder="123" className="border p-2 w-full" />
        </div>
      </div>
      <PayPalScriptProvider options={{ "client-id": "your_paypal_client_id" }}>
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00'
              }
            }]
          })}
          onApprove={(data, actions) => actions.order.capture().then(details => alert('Transaction completed by ' + details.payer.name.given_name))}
        />
      </PayPalScriptProvider>
      <Elements stripe={stripePromise}>
        <StripeCheckoutForm />
      </Elements>
    </div>
  );
};

const StripeCheckoutForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.confirmCardPayment('your_client_secret', {
      payment_method: {
        card: {
          number: '4242 4242 4242 4242',
          exp_month: 12,
          exp_year: 2024,
          cvc: '123',
        },
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    if (error) {
      console.error(error.message);
      alert('Payment failed!');
    } else {
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm mb-2">Card Number</label>
        <input type="text" placeholder="Card Number" className="border p-2 w-full" />
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-sm mb-2">Expiry Date</label>
          <input type="text" placeholder="MM/YY" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm mb-2">CVV</label>
          <input type="text" placeholder="CVV" className="border p-2 w-full" />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Pay with Stripe</button>
    </form>
  );
};

export default PaymentSection;
