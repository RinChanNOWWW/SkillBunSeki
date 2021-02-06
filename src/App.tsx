import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, PageHeader, Input, Select, Row } from 'antd';
import './App.global.css';

const Generator = () => {
  return (
    <div>
      <Row justify="center" align="middle">
        <PageHeader title={`Input the course's information`} />
      </Row>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Course Name">
          <Input placeholder="Example: 第1回 Aコース" style={{ width: 200 }} />
        </Form.Item>
        <Form.Item label="Track 1">
          <Form.Item style={{ display: 'inline-block' }}>
            <Input style={{ width: 200 }} placeholder="Song Name" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Select style={{ width: 200 }} placeholder="Difficulty" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Select style={{ width: 200 }} placeholder="Level" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Track 2">
          <Form.Item style={{ display: 'inline-block' }}>
            <Input style={{ width: 200 }} placeholder="Song Name" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Select style={{ width: 200 }} placeholder="Difficulty" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Select style={{ width: 200 }} placeholder="Level" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Track Final">
          <Form.Item style={{ display: 'inline-block' }}>
            <Input style={{ width: 200 }} placeholder="Song Name" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Select style={{ width: 200 }} placeholder="Difficulty" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Select style={{ width: 200 }} placeholder="Level" />
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Generator} />
      </Switch>
    </Router>
  );
}
