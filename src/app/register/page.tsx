"use client"

import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegistrationPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log('Received values:', values);
    const response = await fetch("http://localhost:4000" + "/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email: values.email, Password: values.password, UserName: values.username }),
    });
    const data = await response.json();
    console.log("resp from frontend", data, response.status);
    if(response.status === 200) {
     router.push("/login") 
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-96 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
          form={form}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter your username" />
          </Form.Item>

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
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">Already a member? <Link className='text-indigo-500' href="/login">Login</Link> </div>
      </Card>
    </div>
  );
};

export default RegistrationPage;
