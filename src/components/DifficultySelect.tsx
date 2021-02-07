import React from 'react';
import { Select } from 'antd';

interface OnChangeHandler {
  (e: unknown): void;
}

interface DifficultySelectPropsType {
  style?: React.CSSProperties;
  value?: string;
  onChange?: OnChangeHandler;
}

const DifficultySelect: React.FC<DifficultySelectPropsType> = (props) => {
  const { style, value, onChange } = props;
  return (
    <Select
      style={style}
      placeholder="Difficulty"
      allowClear
      value={value}
      onChange={onChange}
    >
      <Select.Option value="NOV">NOV</Select.Option>
      <Select.Option value="ADV">ADV</Select.Option>
      <Select.Option value="EXH">EXH</Select.Option>
      <Select.Option value="MXM">MXM</Select.Option>
      <Select.Option value="INF">INF</Select.Option>
      <Select.Option value="GRV">GRV</Select.Option>
      <Select.Option value="HVN">HVN</Select.Option>
      <Select.Option value="VVD">VVD</Select.Option>
    </Select>
  );
};

export default DifficultySelect;
