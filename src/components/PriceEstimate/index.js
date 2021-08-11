import React, { useState } from "react";
import {
    PriceEstimate_main,
    PriceEstimate_container,
    PriceEstimate_container_b1,
    PriceEstimate_container_b2
} from './styles';
import GetQuote from "../GetQuote/index";
import { Modal, Button } from 'antd';

const PriceEstimate = props => {
    //Prize array
    const array =
        [
            {
                id: 1,
                title: "Proof Reading & Editing",
                dollers: "0.020",
                rupees: "1.50",
            },
            {
                id: 2,
                title: "Substantive Editing",
                dollers: "0.024",
                rupees: "1.75",
            },
            {
                id: 1,
                title: "Plagarism Editing",
                dollers: "0.034",
                rupees: "2.50",
            },
        ]
    const [pay, setpay] = useState(null)
    const [toggleState, setToggleState] = useState(0)
    const [currency, setcurrency] = useState(4)

    const toggleTab = index => {
        setToggleState(index)
    }

    var finalpay = pay <= 100000 ? pay : 100000;

    const UpdateTime = !finalpay ? "" : finalpay <= 2000 ? 48 : finalpay === 2001 || finalpay <= 4000 ? 96 : finalpay === 4001 || finalpay <= 6000 ? 144 : finalpay === 6001 || finalpay <= 20000 ? 336 : finalpay >= 20001 ? 720 : "";
    var d = new Date();
    d.setHours(UpdateTime)
    const dayNumber = d.getDate();
    const year = d.getFullYear();
    const dayName = d.toLocaleString("default", { weekday: "long" });
    const monthName = d.toLocaleString("default", { month: "long" });


    //modal
    const [visible, setVisible] = useState(false);
    const handelCancel = () => {
        setVisible(false)
    }
    return (
        <>
            <PriceEstimate_main>
                <PriceEstimate_container>
                    <PriceEstimate_container_b1>
                        <div id="slide_label">
                            <h1>Calculate your editing fee</h1>
                        </div>
                        <div id="slide_label">
                            <label htmlFor="firstName">How many words do you want to edit ?</label>
                            <div id="slider_input">
                                <input type="text" id="peinput" value={finalpay}
                                    onChange={e => setpay(e.target.value)} max="100000" />
                                {!finalpay ?
                                    ("")
                                    :
                                    <>
                                        <p>Returned before   {dayName}, {monthName} {dayNumber}, {year}</p>
                                    </>
                                }
                            </div>
                        </div>
                        <div id="slide_label">
                            <label htmlFor="firstName">Choose your service</label>
                            <div id="slider_buttons">
                                {array && array.map((paymap, i) =>
                                    <>
                                        <button key={i}
                                            className={
                                                toggleState === i
                                                    ? "pay_block2_container1 pay_block2_container2"
                                                    : "pay_block2_container1"
                                            }
                                            onClick={() => toggleTab(i)}
                                        ><div id="radio1"><div id="radio2"></div></div>{paymap.title}</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </PriceEstimate_container_b1>
                    {array && array.map((paymap, i) => (
                        <>
                            {toggleState === i && (
                                <PriceEstimate_container_b2 key={i}>
                                    <div id="p_b_top_main">
                                        <button onClick={() => setcurrency(4)} className={currency === 4 ? "currency1 currency2" : "currency1"}>₹ INR </button>
                                        <button onClick={() => setcurrency(5)} className={currency === 5 ? "currency1 currency2" : "currency1"}>$ USD</button>
                                    </div>
                                    <div id="p_b_top">
                                        <h1>Total Price</h1>
                                        {(currency === 4) ?
                                            <h2>₹ {paymap.rupees * finalpay}</h2>
                                            :
                                            (currency === 5) ?
                                                <h2>$ {paymap.dollers * finalpay}</h2>
                                                :
                                                <h2>₹ {paymap.rupees * finalpay}</h2>
                                        }
                                    </div>
                                    <div id="p_b_middle">
                                        <h1>Returned before</h1>
                                        {!finalpay ?
                                            <h1>-</h1>
                                            :
                                            <h1>{dayName}, {monthName} {dayNumber}, {year}</h1>
                                        }
                                    </div>
                                    {finalpay ?
                                        <div id="p_b_bottom">
                                            <Button onClick={() => setVisible(true)}>Upload Document</Button>
                                        </div>
                                        :
                                        <div id="p_b_bottom">
                                            <Button>Upload Document</Button>
                                        </div>
                                    }
                                </PriceEstimate_container_b2>
                            )}
                        </>
                    ))}
                </PriceEstimate_container>
            </PriceEstimate_main>
            <Modal
                title="Get Quote"
                centered
                visible={visible}
                width={1000}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
                onCancel={handelCancel}

            >
                <GetQuote
                    wordcount={finalpay}
                    currency={currency}
                    array={array}
                    toggleState={toggleState}
                    dayNumber={dayNumber}
                    year={year}
                    dayName={dayName}
                    monthName={monthName}
                />
            </Modal>
        </>
    )
}
export default PriceEstimate;
