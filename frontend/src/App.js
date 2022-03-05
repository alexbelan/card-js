import React, { useEffect, useRef, useState } from 'react';
import { Form, Card, Button, Row, Col, Input, Alert } from 'antd';
import MaskedInput from 'antd-mask-input'
import './App.css';
import ValidateForm from './libs/validate';
import axios from 'axios';
import { BACKEND_URL } from './const';

function App() {
  const formRef = useRef()

  const [form, setForm] = useState({
    cardNumber: "",
    date: "",
    cvv: "",
    amount: ""
  })

  const [checkForm, setCheckForm] = useState(false)

  const [alert, setAlert] = useState({
    show: false,
    type: "success",
    data: {}
  })

  useEffect(() => {
    setCheckForm(new ValidateForm(form).checkForm())
  }, [form])

  const onReset = () => {
    formRef.current.resetFields();
  };

  const changeStateForme = (e) => {
    e.persist()
    setForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  } 
  
  const sendForm = () => {
    axios.post(BACKEND_URL + "add/", {
      cardNumber: +form.cardNumber.replace(/[^\d]/g, ''),
      cvv: +form.cvv,
      date: form.date,
      amount: +form.amount
    }).then(res => {
      setForm({
        cardNumber: "",
        date: "",
        cvv: "",
        amount: ""
      })
      onReset()
      setAlert({
        show: true,
        type: "success",
        data: res.data
      })
    }).catch(err => {
      setAlert({
        show: true,
        type: "error",
        data: err.data
      })
    }) 
  }

  return (
    <Card className='block'>
      <Form
        name="basic"
        initialValues={{ 
          remember: true,
          layout: "vertical"
        }}
        layout={"vertical"}
        autoComplete="off"
        onFinish={sendForm}
        ref={formRef}
      >
      
      <Form.Item
        label="Card Number"
        name="cardNumber"
        rules={[{ required: true, message: 'Please input your card number!' }]}
      >
        <MaskedInput 
        mask="1111 1111 1111 1111" 
        name="cardNumber" 
        size="20" 
        value={form.cardNumber}
        onChange={changeStateForme}/>
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please input card number's date" }]}
            >

              <MaskedInput 
              mask="11/1111" 
              name="date" 
              placeholder="MM/YYYY"
              value={form.date}
              onChange={changeStateForme} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
              label="CVV"
              name="cvv"
              rules={[{ required: true, message: "Please input card number's CVV!" }]}
            >
              <MaskedInput 
              mask="111" 
              name="cvv"
              value={form.cvv}
              onChange={changeStateForme} />
            </Form.Item>
          </Col>
        </Row >

        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Please input amount!' }]}
        >
          <Input 
          name='amount'
          value={form.amount}
          type="number"
          onChange={changeStateForme} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!checkForm}>
            Send
          </Button>
        </Form.Item>
      </Form>
      {alert.show &&
        <Alert
          message={alert.type === "success" ? "Success" : "Error"}
          description={JSON.stringify(alert.data)}
          type={alert.type}
          showIcon
        />
      }
    </Card>
  );
}

export default App;
