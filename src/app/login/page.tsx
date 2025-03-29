"use client"

import { Form, Input, Button, Card } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fetchData } from '../utils';
import { useUser } from "@/context/UserContext";
import { signIn } from "next-auth/react";
import { useState } from 'react';

const LoginPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const { setUser } = useUser();
  
  const onFinish = async (values: any) => {
    console.log('Received values:', values);
    const { email, password } = values;
    // const payload = {
    //   Email: values.email,
    //   Password: values.password
    // }

    // const data = await fetchData("/api/v1/auth/login",{method: "POST", body: payload});
    // console.log("resp from frontend", data);

    // localStorage.setItem("access_token", data.access_token);
    // setUser(data.profile);

    // router.push('/');

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirection
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/"); // Redirect to the dashboard on success
    }

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
