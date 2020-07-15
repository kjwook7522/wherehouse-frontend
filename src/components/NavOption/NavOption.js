import React from 'react';
import './NavOption.css';
import { Select, Slider } from 'antd';

function NavOption() {
  const { Option } = Select;
  const list = ['test1', 'test2', 'test3']

  return <div className='nav-option'>
    <Select
      defaultValue={list[0]}
      style={{ width: 200 }}
    >
      {list.map(item => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
    <Select
      defaultValue={list[0]}
      style={{ width: 200 }}
    >
      {list.map(item => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
    <Select
      defaultValue={list[0]}
      style={{ width: 200 }}
    >
      {list.map(item => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
    <Select
      defaultValue={list[0]}
      style={{ width: 200 }}
    >
      {list.map(item => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
    <Slider defaultValue={50} style={{ width: 200 }} />
  </div>
}

export default NavOption;