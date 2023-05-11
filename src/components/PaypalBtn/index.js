import React from "react";
import { message } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalGateWayBtn = ({ product, handelCancel, invoiceCreate }) => {


    return (
        <PayPalScriptProvider>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.description,
                                amount: {
                                    value: product.price
                                }
                            }
                        ]
                    })
                }}

                onApprove={async (data) => {
                    message.success({
                        content: 'Success! Your payment was successful!',
                        className: 'messageCont',
                        icon: <SmileOutlined />
                    });
                    invoiceCreate();
                }}
                onErr={(err) => {
                    message.error({
                        content: 'Error! Please try again',
                        className: 'messageCont',
                        icon: <SmileOutlined />
                    });
                    handelCancel();
                }}
            />
        </PayPalScriptProvider>
    )
}
export default PaypalGateWayBtn;