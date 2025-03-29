"use client";

import React, { useState } from 'react';
import {
  Button,
  Card,
  DatePicker,
  Form,
  InputNumber,
  Select,
  TimePicker,
} from 'antd';
import dayjs from 'dayjs';
import { CreateOrgResponse, fetchData } from '../utils';
import { useSession } from 'next-auth/react';
import { captainRoleId } from '../constants';

interface CreateGameProps {
  setShowDrawer: (show: boolean) => void;
}

export default function CreateGame(props: CreateGameProps) {
  const { setShowDrawer } = props;
  const { data: session } = useSession();
  const profile = (session?.user as any).profile;
  const [form] = Form.useForm();
  const hanndleSubmit = async() => {
    const payload = {
      Name : dayjs(new Date()).format('DDMMYYYYHHmmss'),
      MetaData : {
        location: form.getFieldValue('location'),
        sport: form.getFieldValue('sport'),
        openSpots: form.getFieldValue('openSpots').toString(),
        date: form.getFieldValue('date') ? form.getFieldValue('date').format('DD-MM-YYYY') : null,
        time: form.getFieldValue('time') ? form.getFieldValue('time').format('HH:mm') : null,
      }
    }
    console.log("payload", payload);
    const data: CreateOrgResponse = await fetchData("/api/v1/org/org", {
      method: 'POST',
      body: payload
    });
    console.log("data", data);
    const orgId = data.Id;
    console.log("orgId", orgId);
    // Add user to org
    const userPayload = {
      RoleIds: [captainRoleId],
    }
    const userData: CreateOrgResponse = await fetchData(`/api/v1/org/user/${profile.uid}/org/${orgId}`, {
      method: 'PUT',
      body: userPayload
    });
    console.log("userData", userData);
    form.resetFields();
    setShowDrawer(false);    
  }
  return (
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
      <Form.Item label="Open spots for Others to join" name={"openSpots"}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Select Date" name={"date"}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Select Time" name={"time"}>
      <TimePicker format={'HH:mm'} />;
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}