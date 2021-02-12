import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, PageHeader, Input, Row, Button, Select } from 'antd';
import './App.global.css';
import DifficultySelect from './components/DifficultySelect';
import LevelSelect from './components/LevelSelect';
import generateWikiCodes from './utils/wiki';
import {
  getCourseCommonDifficulty,
  getCourseCommonLevel,
} from './utils/course';

const Generator = () => {
  const [wikiCodes, setWikiCodes] = useState<React.ReactNode>('');
  const [form] = Form.useForm();

  const onFinish = (value: Course.Information) => {
    setWikiCodes(generateWikiCodes(value));
  };

  const onUseTemplate = () => {
    const template = form.getFieldValue('template');
    const levels = getCourseCommonLevel(template);
    form.setFieldsValue({
      level1: levels[0],
      level2: levels[1],
      level3: levels[2],
    });
    const difficulties = getCourseCommonDifficulty(template);
    form.setFieldsValue({
      difficulty1: difficulties[0],
      difficulty2: difficulties[1],
      difficulty3: difficulties[2],
    });
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
        form={form}
      >
        <Form.Item label="Template">
          <Form.Item style={{ display: 'inline-block' }} name="template">
            <Select style={{ width: 200 }} placeholder="Select a course">
              <Select.Option value={1}>岳翔</Select.Option>
              <Select.Option value={2}>流星</Select.Option>
              <Select.Option value={3}>月衝</Select.Option>
              <Select.Option value={4}>瞬光</Select.Option>
              <Select.Option value={5}>天極</Select.Option>
              <Select.Option value={6}>烈風</Select.Option>
              <Select.Option value={7}>雷電</Select.Option>
              <Select.Option value={8}>麗華</Select.Option>
              <Select.Option value={9}>魔騎士</Select.Option>
              <Select.Option value={10}>剛力羅</Select.Option>
              <Select.Option value={11}>或帝滅斗</Select.Option>
              <Select.Option value={12}>暴龍天</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Button style={{ width: 100 }} onClick={onUseTemplate}>
              Use
            </Button>
          </Form.Item>
        </Form.Item>
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
          <Form.Item
            style={{ display: 'inline-block' }}
            name="difficulty1"
            initialValue="ADV"
          >
            <DifficultySelect style={{ width: 100 }} />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}
            name="level1"
            initialValue={6}
          >
            <LevelSelect style={{ width: 100 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Track 2">
          <Form.Item style={{ display: 'inline-block' }} name="name2">
            <Input style={{ width: 200 }} placeholder="Song Name" allowClear />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}
            name="difficulty2"
            initialValue="ADV"
          >
            <DifficultySelect style={{ width: 100 }} />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}
            name="level2"
            initialValue={7}
          >
            <LevelSelect style={{ width: 100 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Track Final">
          <Form.Item style={{ display: 'inline-block' }} name="name3">
            <Input style={{ width: 200 }} placeholder="Song Name" allowClear />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}
            name="difficulty3"
            initialValue="ADV"
          >
            <DifficultySelect style={{ width: 100 }} />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}
            name="level3"
            initialValue={7}
          >
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
