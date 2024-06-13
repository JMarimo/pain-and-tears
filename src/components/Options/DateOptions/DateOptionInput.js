import React, { memo } from "react";
import { ConfigProvider, DateOption } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import moment from "moment";
import "moment/locale/ru";
import "./customDateOption.css";

moment.locale("ru");

const dateFormat = (className) => {
  if (className === "headerOption") {
    return "DD/MM/YY";
  } else {
    return "DD.MM.YY";
  }
};

const placeholder = (className) => {
  if (className === "headerOption") {
    return "ДД/ММ/ГГ";
  } else {
    return "ДД.ММ.ГГ";
  }
};

const DateOptionInput = memo(
  ({ className, optionPlace, defaultValue, getDate, dateType }) => {
    return (
      <ConfigProvider locale={ru_RU}>
        <DateOption
          className={className}
          dropdownClassName="input__dropDown"
          onChange={(value) => getDate(value, dateType)}
          value={defaultValue}
          format={dateFormat(optionPlace)}
          placeholder={placeholder(optionPlace)}
          allowClear
        />
      </ConfigProvider>
    );
  }
);

export default DateOptionInput;