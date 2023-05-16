import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, message, Input, Radio, Row, Col, Upload, Button, Modal, Spin } from 'antd';
import { SmileOutlined, UploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { QuoteFormSection, Quotepop, SuccessPopup, LoaderPopup } from './styles';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import razorpayLogo from "../../images/razorpayLogo.png"
import logoSVG from "../../images/logo.svg"
// import paypal from "../../images/paypal.png"
import PaypalGateWayBtn from "../PaypalBtn/index";


const GetQuote = ({ props, wordcount, currency, toggleState, dayNumber, year, dayName, monthName, priceRate, cancelQuoteFormFun }) => {

  const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
  };
  const MainPrize = toggleState === 0 ? currency === 4 ? 1.30 * wordcount : 0.017 * wordcount : toggleState === 1 ? currency === 4 ? 1.60 * wordcount : 0.021 * wordcount : toggleState === 2 ? currency === 4 ? 2.50 * wordcount : 0.033 * wordcount : ("");
  const category = toggleState === 0 ? "Proofreading" : toggleState === 1 ? "Substantive Editing" : toggleState === 2 ? "Plagiarism Editing" : ("");
  const currencyPrize = currency === 4 ? "₹" + Math.round(MainPrize) : currency === 5 ? "$" + Math.round(MainPrize) : "₹" + Math.round(MainPrize);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [designation, setDesignation] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState("");
  const [mobNo, setMobNo] = useState();
  const [showUpload, setShowUpload] = useState(true);
  // Newly added
  const [showCustomPopup, setShowCustomPopup] = useState(false);
  const [customLoader, setCustomLoader] = useState(false);

  // convert amount in text formate
  const doConvert = (value) => {
    let numberInput = value;
    let myDiv = document.querySelector('#result');

    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
      'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (numberInput.toString().length > 7) return myDiv.innerHTML = 'overlimit';
    console.log(numberInput);
    //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    let num = ('0000000' + numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if (!num) return;

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + ' million ' : '';

    outputText += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + 'hundred ' : '';
    outputText += num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + ' thousand ' : '';
    outputText += num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred ' : '';
    outputText += num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : '';
    return outputText + "Rupees only";
  }

  const [form] = Form.useForm();

  const { TextArea } = Input;

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  console.log(showUpload);

  const uploadChange = (data) => {
    if (data.fileList.length > 0) {
      setShowUpload(false);
    }
  };

  const customReqChange = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const removeUploadedFile = () => {
    setShowUpload(true);
  };

  function transformFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        file.base64 = e.target.result;
        resolve(e.target.result);
      };
    });
  }

  const [disabled, setDisabled] = useState(false);
  console.log(disabled);
  //modal
  const [success, setSuccess] = useState();

  const [loading, setLoading] = useState(false);

  // function for razorpayment gateway load script function
  function loadscript(src) {
    return new Promise(resolve => {
      const script = document.createElement("script")
      script.src = src
      document.body.appendChild(script)
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const [razorSuccess, setRazorSuccess] = useState(false)
  const currPrice = Math.round(MainPrize)

  // function for razorpayment gateway
  const payRazorpay = async () => {
    setCustomLoader(true);
    const razorpayRes = await loadscript("https://checkout.razorpay.com/v1/checkout.js")
    if (!razorpayRes) {
      console.log("Error")
    } else {
      const options = {
        key: "rzp_test_yG7EQaRL8NqDGs",
        currency: "INR",
        amount: parseInt(currPrice * 100),
        name: "Content Concepts",
        description: "Providing Perfect Editing...",
        handler: async function (response) {
          if (response.razorpay_payment_id) {
            invoiceCreateFun();
          } else {
            setRazorSuccess(false)
            message.error({
              content: 'Error! Please try again',
              className: 'messageCont',
              icon: <SmileOutlined rotate={180} />
            });
          }
        },
        prefill: {
          name: name,
          Email: email,
          contact: mobNo,
        },
        theme: {
          color: "rgb(25, 118, 210) !important",
        },
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }
  }

  // Function on finish
  const onFinish = async values => {

    setDisabled(true);
    setLoading(true);

    const data = new FormData();

    data.append("name", values.name);
    data.append("email", values.email);

    if (values.phone === undefined) {
      data.append("phone", '-');
    } else {
      data.append("phone", values.phone);
    }

    if (category === undefined) {
      data.append("category", '-');
    } else {
      data.append("category", category);
    }

    if (values.languageCategory === undefined) {
      data.append("languageCategory", '-');
    } else {
      data.append("languageCategory", values.languageCategory);
    }

    if (values.categoryFile !== undefined) {
      data.append("file", values.categoryFile[0].base64)
      data.append("filename", values.categoryFile[0].name);
    } else {
      data.append("filename", '-');
    }

    if (wordcount === undefined) {
      data.append("wordCount", '-');
    } else {
      data.append("wordCount", wordcount);
    }

    if (MainPrize === undefined) {
      data.append("prize", '-');
    } else {
      data.append("prize", MainPrize);
    }

    if (values.requirement === undefined) {
      data.append("requirement", '-');
    } else {
      data.append("requirement", values.requirement);
    }

    let url = "https://script.google.com/macros/s/AKfycbxDIo9ge6KXgHx-uWn0WL2tqg-aVIAi5t3NU4IoyPFQx7YSofT17ucHvlob8mr5QeR6/exec";

    await fetch(url, {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    }).then(function (_response) {
      setSuccess(true);
      setDisabled(false);
      // form.resetFields();
      props.onSubmit();
    }).catch(function (_err) {
      setDisabled(false);
    });
    setShowUpload(true);
  };

  // Handle cancel function
  const handelCancel = () => {
    setSuccess(false);
    setLoading(false);
    cancelQuoteFormFun();
    setShowCustomPopup(false);
  }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "quoteCategory.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            categories {
              label
              value
            }
          }
        }
      }
    }
  `);

  const categoryData = data.file.childMarkdownRemark.frontmatter;
  const validation = () => {
    let errors = {};
    if (!name || name.length < 3) {
      errors.color = "red"
    } if (!email) {
      errors.color = "red"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.color = "red"
    }
    return errors;
  }
  const signnn = () => {
    setErrors(validation())
  }
  // AntD loader
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white', marginLeft: `15px` }} spin />;
  const antIconBlue = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  // Date check function
  var currentDate = new Date();
  const CurrentDayNumber = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const CurrentMonthName = currentDate.toLocaleString("default", { month: "long" });
  // Invoice creation function
  const invoiceCreateFun = () => {
    const bodyData = {
      "name": name || '',
      "toEmail": email || '',
      "balance_due": "0.00",
      "invoice_date": CurrentDayNumber + ' ' + CurrentMonthName + ',' + currentYear,
      "bill_to": name || '',
      "designation": designation,
      "address_to": address,
      "delivery_date": dayNumber + ' ' + monthName + ',' + year,
      "heading": category || '',
      "wordcount": wordcount || '',
      "rate": priceRate || '',
      "amount": currPrice || '',
      "total_in_words": doConvert(MainPrize)
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData)
    };
    fetch('http://web1.fidisys.com/api/v1/pdf/create', requestOptions)
      .then(response => response.json())
      .then(_data => {
        setShowCustomPopup(true);
        setRazorSuccess(true);
        setCustomLoader(false);
      })
  }

  return (
    <>
      <QuoteFormSection>
        <Form name="quote-form" onFinish={onFinish} className="quoteForm gform" form={form}>
          <div>
            <label className="formLabel" htmlFor="categoryFile">Name{(!name) ? (<span style={{ color: (errors.color) }}>*</span>) : (<span>*</span>)}</label>
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: `Can't be blank`,
                },
              ]}
              value={name}
              onChange={e => setName(e.target.value)}
            >
              <Input placeholder="Name" />
            </Form.Item>
          </div>
          <Form.Item
            style={{
              marginBottom: 0,
            }}
            className="inputGroupBlock"
          >
            <div className="inlineInput">
              <label className="formLabel" htmlFor="category">Phone Number</label>
              <Form.Item
                name='phone'
              >
                <PhoneInput
                  international
                  defaultCountry="IN"
                  placeholder="Enter phone number"
                  value={mobNo}
                  onChange={setMobNo} id="inlineInput" />
              </Form.Item>
            </div>
            <div className="inlineInput emailInput">
              <label className="formLabel" htmlFor="category">Email ID {(!email) ? (<span style={{ color: (errors.color) }}>*</span>) : (<span>*</span>)}</label>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: `Can't be blank`,
                  },
                  {
                    type: 'email',
                    message: `Please enter valid Email ID`,
                  }
                ]}
                value={email}
                onChange={e => setEmail(e.target.value)}
              >
                <Input placeholder="Email ID" />
              </Form.Item>
            </div>
          </Form.Item>

          {/* Designation, Address */}
          <Form.Item
            style={{
              marginBottom: 0,
            }}
            className="inputGroupBlock"
          >
            <div className="inlineInput">
              <label className="formLabel" htmlFor="category">Organization</label>
              <Form.Item
                name='designation'
                value={designation}
                onChange={e => setDesignation(e.target.value)}
              >
                <Input placeholder="Organization" />
              </Form.Item>
            </div>
            <div className="inlineInput emailInput">
              <label className="formLabel" htmlFor="category">Address</label>
              <Form.Item
                name='address'
                value={address}
                onChange={e => setAddress(e.target.value)}
              >
                <Input placeholder="Address" />
              </Form.Item>
            </div>
          </Form.Item>

          <div>
            <label className="formLabel" htmlFor="languageCategory">Select English Version</label>
            <Form.Item
              name='languageCategory'
            >
              <Radio.Group style={{ width: '100%' }} className="categoryGroup" id="category">
                <Row>
                  {
                    categoryData.categories && categoryData.categories.map(item =>
                      <Col xl={5} className="categoryItem" key={item.value}>
                        <Radio value={item.value}>{item.label}</Radio>
                      </Col>
                    )
                  }
                </Row>
              </Radio.Group>
            </Form.Item>
          </div>
          <div>
            <label className="formLabel" htmlFor="categoryFile">Select your file to upload</label>
            <Form.Item
              name='categoryFile'
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="category" listType="picture" id="categoryFile" onChange={uploadChange} onRemove={removeUploadedFile} customRequest={customReqChange} transformFile={transformFile} >
                <Button className="uploadBtn">
                  <UploadOutlined /> Click to upload
                </Button>
              </Upload>
            </Form.Item>
          </div>
          <div>
            <label className="formLabel" htmlFor="wordCount">Word Count</label>
            <div id="word_counter_cont">
              <input type="text" value={wordcount} id="wordCount" />
              <p><span>Total Price :</span> <span id="count">{"" + currencyPrize}</span></p>
            </div>
          </div>
          <div><label className="formLabel" htmlFor="wordCount" id="description_label">Add instructions to the editor</label>
            <Form.Item
              name="requirement"
            >
              <TextArea rows={4} placeholder="Describe your requirement briefly." />
            </Form.Item>
          </div>

          <Form.Item className="submitBtn" {...tailLayout}>
            {(!name || name.length < 3 || (!/\S+@\S+\.\S+/.test(email))) ? (
              <Button type="primary" onClick={signnn} htmlType="submit">
                Submit Document & Pay
              </Button>

            ) : (
              <Button type="primary" htmlType="submit">
                Submit Document & Pay {loading ? <Spin indicator={antIcon} /> : ""}
              </Button>

            )}
          </Form.Item>
        </Form>
      </QuoteFormSection>
      <Modal
        centered
        visible={success}
        width={1000}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={handelCancel}
        footer={null}
      >
        {customLoader ?
          <LoaderPopup>
            <Spin indicator={antIconBlue} />
          </LoaderPopup>
          :
          <Quotepop id="Quotepop">
            <div id="pop_conteiner">
              <img src={logoSVG} alt="img" style={{ width: `40px`, height: `40px`, marginBottom: `20px` }} />
              <p>{razorSuccess ? "Your payment was successful!" : "Document submitted. Please proceed to make payment"}</p>
              <p id="Quotepop_t2" style={{ color: `#1E88E5` }}>Word Count :  {wordcount}</p>
              <p id="Quotepop_t2" style={{ color: `#32cd32` }}>Total Price to Pay :  {currencyPrize}</p>
              <p id="Quotepop_t1" >Expected Delivery Date</p>
              <p id="Quotepop_date">{dayName}, {monthName} {dayNumber}, {year}</p>
            </div>
            {razorSuccess ? <Button onClick={handelCancel}>Back to Home</Button>
              :
              <div className="button_container">
                {razorSuccess ?
                  <p id="Quotepop_t3">Your payment was successful!, you will receive a confirmation email.</p>
                  :
                  <p id="Quotepop_t3">Proceed to pay via {currency === 4 ? "Razorpay" : "PayPal"}</p>
                }
                {currency === 4 ?
                  <Button type="primary" icon={<img src={razorpayLogo} style={{ width: `20px`, height: `20px`, marginRight: `10px` }} alt="razorpayLogo" />} onClick={payRazorpay}>
                    Razorpay
                  </Button>
                  :
                  <PaypalGateWayBtn product={{
                    description: `Word Count:  ${wordcount}`,
                    price: currPrice
                  }}
                    invoiceCreate={invoiceCreateFun}
                  />
                }
              </div>
            }
          </Quotepop>
        }
        {showCustomPopup &&
        <SuccessPopup>
          <div className="success_popup">
            <SmileOutlined className="SmileOutlined" />
            <div className="success_text">
              <p className="popup_title">Your payment is successful!</p>
              <p className="popup_description">You will receive the payment confirmation with the receipt in your email shortly.</p>
              <button className="conf_btn" onClick={() => handelCancel()}>Conform</button>
            </div>
          </div>
        </SuccessPopup>
      }
      </Modal>
    </>
  )
}

export default GetQuote;