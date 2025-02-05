"use client"

import { Form, Input, Button, Card } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';

const LoginPage = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };
  

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-96 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
          form={form}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">New to site? <Link className='text-indigo-500' href="/register">Register</Link> </div>
      </Card>
    </div>
  );
};

export default LoginPage;
