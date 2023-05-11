import React, { useState } from "react";
import {
    PriceEstimateMain,
    PriceEstimateContainer,
    PriceEstimateContainerb1,
    PriceEstimateContainerb2
} from './styles';
import GetQuote from "../GetQuote/index";
import { Modal } from 'antd';
import less_arrow from "../../images/less_arrow.svg";

const PriceEstimate = () => {
    const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const checkCurrency = getCountry === "Asia/Calcutta" ? 4 : 5;
    //Prize array
    const array =
        [
            {
                id: 1,
                title: "Proofreading",
                dollers: "0.017",
                rupees: "1.30",
            },
            {
                id: 2,
                title: "Substantive Editing",
                dollers: "0.021",
                rupees: "1.60",
            },
            {
                id: 3,
                title: "Plagiarism Editing",
                dollers: "0.033",
                rupees: "2.50",
            },
        ]
    const [pay, setpay] = useState(null);
    const [toggleState, setToggleState] = useState("");
    const [currency] = useState(checkCurrency);
    const [priceRate, setPriceRate] = useState('');

    const toggleTab = index => {
        setToggleState(index)
    }

    var finalpay = pay <= 100000 ? pay : 100000;

    const UpdateTime = !finalpay ? "" : finalpay <= 2000 ? 48 : finalpay === 2001 || finalpay <= 4000 ? 72 : finalpay === 4001 || finalpay <= 6000 ? 72 : finalpay === 6001 || finalpay <= 10000 ? 96 : finalpay >= 10001 ? 120 : "";
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
            <PriceEstimateMain>
                <div id="PrizeEstimation">
                    <PriceEstimateContainer>
                        <p id="map"><div className="round">1</div> Enter wordcount <img src={less_arrow} className="less_arrow" alt="less_arrow" /> <div className="round">2</div> Select Service <img src={less_arrow} className="less_arrow" alt="less_arrow" /><div className="round">3</div> Check pricing & upload</p>
                        <PriceEstimateContainerb1>
                            <div id="slide_label">
                                <h1>Calculate your editing fee</h1>
                            </div>
                            <div id="slide_label">
                                <label htmlFor="firstName">How many words do you want us to edit? (exclude References)</label>
                                <div id="slider_input">
                                    <input type="text" id="peinput" value={finalpay}
                                        onChange={e => setpay(e.target.value)} max="100000" />
                                    {!finalpay ?
                                        <p></p>
                                        :
                                        <>
                                            <p>*Estimated return on   {dayName}, {monthName} {dayNumber}, {year}</p>
                                        </>
                                    }
                                </div>
                            </div>
                            <div id="slide_label">
                                <label htmlFor="firstName">Choose your service</label>
                                <div id="slider_buttons">
                                    {array && array.map((paymap, i) =>
                                        <>
                                            <button key={paymap.title}
                                                className={
                                                    toggleState === i
                                                        ? "pay_block2_container1 pay_block2_container2"
                                                        : "pay_block2_container1"
                                                }
                                                onClick={() => { toggleTab(i); setPriceRate(currency === 4 ? paymap.rupees : paymap.dollers) }}
                                            ><div id="radio1"><div id="radio2"></div></div>{paymap.title}</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </PriceEstimateContainerb1>
                        {
                            toggleState === "" ?
                                <PriceEstimateContainerb2 >
                                    <div id="p_b_top">
                                        <h1>Total Price</h1>
                                        <div id="prize_box">
                                            <h2>₹ 0</h2>

                                        </div>
                                    </div>
                                    <div id="p_b_middle">
                                        <h1>Estimated return on</h1>
                                        <h1>-</h1>
                                    </div>
                                    <div id="p_b_bottom">
                                        <button>Upload your Document</button>
                                    </div>
                                </PriceEstimateContainerb2>
                                :
                                <>
                                    {array && array.map((paymap, i) => (
                                        <>
                                            {toggleState === i && (
                                                <PriceEstimateContainerb2 key={i}>
                                                    <div id="p_b_top">
                                                        <h1>Total Price</h1>
                                                        <div id="prize_box">
                                                            {(currency === 4) ?
                                                                <h2>{"₹" + Math.round(paymap.rupees * finalpay)}</h2>
                                                                :
                                                                <h2>{"$" + Math.round(paymap.dollers * finalpay)}</h2>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div id="p_b_middle">
                                                        <h1>Estimated return on</h1>
                                                        {!finalpay ?
                                                            <h1>-</h1>
                                                            :
                                                            <h1>{dayName}, {monthName} {dayNumber}, {year}</h1>
                                                        }
                                                    </div>
                                                    {finalpay ?
                                                        <div id="p_b_bottom">
                                                            <button onClick={() => setVisible(true)}>Upload your Document</button>
                                                        </div>
                                                        :
                                                        <div id="p_b_bottom">
                                                            <button>Upload your Documents</button>
                                                        </div>
                                                    }
                                                </PriceEstimateContainerb2>
                                            )}
                                        </>
                                    ))}
                                </>
                        }
                    </PriceEstimateContainer>
                </div>
            </PriceEstimateMain>
            <Modal
                title="Submit Document"
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
                    priceRate={priceRate}
                />
            </Modal>
        </>
    )
}
export default PriceEstimate;
