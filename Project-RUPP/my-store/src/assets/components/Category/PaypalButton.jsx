import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalButton = ({ amount }) => {
  const [paypalSdkReady, setPaypalSdkReady] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AegrgAfe0Zxy711zdWGwlGNgHrgU5Pu57Thjo26zesE4xGzRkRDnghqlHmlwb9gvuhVIbz8ctjZrr0c-';
    script.async = true;
    script.onload = () => {
      setPaypalSdkReady(true);
    };
    document.body.appendChild(script);
  }, []);

  const handlePaymentSuccess = (paymentDetails, data) => {
    console.log('Payment successful:', paymentDetails, data);
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
  };

  const handlePaymentCancel = () => {
    console.log('Payment canceled');
  };

  return (
    <PayPalScriptProvider options={{ 'client-id': 'AegrgAfe0Zxy711zdWGwlGNgHrgU5Pu57Thjo26zesE4xGzRkRDnghqlHmlwb9gvuhVIbz8ctjZrr0c-' }}>
      {paypalSdkReady ? (
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: amount,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handlePaymentSuccess(details, data);
            });
          }}
          onError={handlePaymentError}
          onCancel={handlePaymentCancel}
        />
      ) : null}
    </PayPalScriptProvider>
  );
};

export default PaypalButton;