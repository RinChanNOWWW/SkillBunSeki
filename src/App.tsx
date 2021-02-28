import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Form,
  PageHeader,
  Input,
  Row,
  Button,
  Select,
  List,
  Col,
  Popover,
} from 'antd';
import './App.global.css';
import DifficultySelect from './components/DifficultySelect';
import LevelSelect from './components/LevelSelect';
import generateWikiCodes from './utils/wiki';
import {
  getCourseCommonDifficulty,
  getCourseCommonLevel,
} from './utils/course';

const Generator = () => {
  const [courseList, setCourseList] = useState<Course.Information[]>([]);
  const [form] = Form.useForm();

  const reset = () => {
    const wiki = document.getElementById('wiki');
    if (wiki !== null) {
      form.resetFields([
        'template',
        'course',
        'name1',
        'difficulty1',
        'level1',
        'name2',
        'difficulty2',
        'level2',
        'name3',
        'difficulty3',
        'level3',
      ]);
      wiki.innerHTML = '';
      setCourseList([]);
    }
  };

  const addCourse = (list: Course.Information[]) => {
    const infos: Course.Information[] = JSON.parse(JSON.stringify(list));
    const info: Course.Information = {
      course: form.getFieldValue('course'),
      name1: form.getFieldValue('name1'),
      name2: form.getFieldValue('name2'),
      name3: form.getFieldValue('name3'),
      difficulty1: form.getFieldValue('difficulty1'),
      difficulty2: form.getFieldValue('difficulty2'),
      difficulty3: form.getFieldValue('difficulty3'),
      level1: form.getFieldValue('level1'),
      level2: form.getFieldValue('level2'),
      level3: form.getFieldValue('level3'),
    };
    if (info.course !== undefined && info.course !== '') {
      infos.push(info);
      setCourseList(infos);
    }
  };

  const onFinish = (value: Course.Information) => {
    const wiki = document.getElementById('wiki');
    if (wiki !== null) {
      if (value.course !== undefined && value.course !== '') {
        const code = generateWikiCodes(value);
        if (code !== null) {
          wiki.innerHTML = ReactDOMServer.renderToString(code);
        } else {
          wiki.innerHTML = '';
        }
      }
    }
  };

  const batchGenerateWikiCodes = (list: Course.Information[]) => {
    // addCourse(list);
    const wiki = document.getElementById('wiki');
    if (wiki !== null) {
      wiki.innerHTML = '';
      // eslint-disable-next-line no-restricted-syntax
      for (const info of list) {
        if (info !== null) {
          wiki.innerHTML += ReactDOMServer.renderToString(
            generateWikiCodes(info)
          );
        }
      }
    }
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
      <Row style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <Col span={6}>
          <Row justify="end" style={{ height: '100%' }}>
            <List
              size="large"
              header="courses"
              style={{ width: 250 }}
              bordered
              dataSource={courseList}
              renderItem={(item: Course.Information) => (
                <Popover
                  trigger="hover"
                  title={item.course}
                  content={
                    <div>
                      <p>{`${item.name1} | ${item.difficulty1} | ${item.level1}`}</p>
                      <p>{`${item.name2} | ${item.difficulty2} | ${item.level2}`}</p>
                      <p>{`${item.name3} | ${item.difficulty3} | ${item.level3}`}</p>
                    </div>
                  }
                >
                  <List.Item>{item.course}</List.Item>
                </Popover>
              )}
            />
          </Row>
        </Col>
        <Col span={18}>
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
                <Input
                  style={{ width: 200 }}
                  placeholder="Song Name"
                  allowClear
                />
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
                <Input
                  style={{ width: 200 }}
                  placeholder="Song Name"
                  allowClear
                />
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
                <Input
                  style={{ width: 200 }}
                  placeholder="Song Name"
                  allowClear
                />
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
              <Button
                htmlType="submit"
                type="primary"
                style={{ marginRight: 10 }}
                onClick={() => {
                  addCourse(courseList);
                }}
              >
                Add
              </Button>
              <Button
                style={{ marginRight: 10 }}
                onClick={() => {
                  batchGenerateWikiCodes(courseList);
                }}
              >
                Batch Generate
              </Button>
              <Button
                onClick={() => {
                  reset();
                }}
              >
                Reset
              </Button>
            </Form.Item>
          </Form>
          <Row justify="center" align="middle">
            <div
              id="wiki"
              style={{
                width: 600,
                height: 250,
                backgroundColor: '#CCFFFF',
                fontSize: 16,
                overflow: 'scroll',
              }}
            />
          </Row>
        </Col>
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
