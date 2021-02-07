import React from 'react';
import { Select } from 'antd';

interface OnChangeHandler {
  (e: unknown): void;
}

interface LevelSelectPropsType {
  style?: React.CSSProperties;
  value?: string;
  onChange?: OnChangeHandler;
}

const LevelSelect: React.FC<LevelSelectPropsType> = (props) => {
  const { style, value, onChange } = props;
  return (
    <Select
      style={style}
      placeholder="Level"
      allowClear
      value={value}
      onChange={onChange}
    >
      {Array.from({ length: 20 }, (_item, index) => index + 1).map((v) => (
        <Select.Option value={v} key={v}>
          {v}
        </Select.Option>
      ))}
    </Select>
  );
};

export default LevelSelect;
