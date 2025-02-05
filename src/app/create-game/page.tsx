"use client";

import React, { useState } from 'react';
import {
  Button,
  Card,
  DatePicker,
  Form,
  InputNumber,
  Select,
} from 'antd';

export default function CreateGame() {
  const [form] = Form.useForm();
  const hanndleSubmit = () => {
    console.log(form.getFieldsValue());
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-indigo-800">Create Game</h1>

      <Card>
      <Form
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={hanndleSubmit}
        form={form}
      >
        <Form.Item label="Sport" name={"sport"}>
          <Select>
            <Select.Option value="cricket">Cricket</Select.Option>
            <Select.Option value="badminton">Badminton</Select.Option>
            <Select.Option value="tennis">Tennis</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Location" name={"location"}>
          <Select>
            <Select.Option value="hyderabad">Hyderabad</Select.Option>
            <Select.Option value="banglore">Banglore</Select.Option>
            <Select.Option value="delhi">Delhi</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Total No of players" name={"total_players"}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Select Date" name={"date"}>
          <DatePicker
            showTime={{ format: 'HH:mm' }}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      </Card>
    </div>
  )
}