import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, PageHeader, Input, Row, Button } from 'antd';
import './App.global.css';
import DifficultySelect from './components/DifficultySelect';
import LevelSelect from './components/LevelSelect';
import generateWikiCodes from './utils/wiki';

const Generator = () => {
  const [wikiCodes, setWikiCodes] = useState<React.ReactNode>('');

  const onFinish = (value: Course.Information) => {
    setWikiCodes(generateWikiCodes(value));
  };

  return (
    <div>
      <Row justify="center" align="middle">
        <PageHeader title={`Input the course's information`} />
      </Row>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        <Form.Item label="Course Name" name="course">
          <Input
            placeholder="Example: 第1回 Aコース"
            style={{ width: 200 }}
            allowClear
          />
        </Form.Item>
        <Form.Item label="Track 1">
          <Form.Item style={{ display: 'inline-block' }} name="name1">
            <Input style={{ width: 200 }} placeholder="Song Name" allowClear />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }} name="difficulty1">
            <DifficultySelect style={{ width: 100 }} />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }} name="level1">
            <LevelSelect style={{ width: 100 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Track 2">
          <Form.Item style={{ display: 'inline-block' }} name="name2">
            <Input style={{ width: 200 }} placeholder="Song Name" allowClear />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }} name="difficulty2">
            <DifficultySelect style={{ width: 100 }} />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }} name="level2">
            <LevelSelect style={{ width: 100 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Track Final">
          <Form.Item style={{ display: 'inline-block' }} name="name3">
            <Input style={{ width: 200 }} placeholder="Song Name" allowClear />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }} name="difficulty3">
            <DifficultySelect style={{ width: 100 }} />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }} name="level3">
            <LevelSelect style={{ width: 100 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Generate
          </Button>
        </Form.Item>
      </Form>
      <Row justify="center" align="middle">
        <div
          style={{
            width: 600,
            height: 100,
            backgroundColor: '#CCFFFF',
            fontSize: 16,
          }}
        >
          {wikiCodes}
        </div>
      </Row>
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
