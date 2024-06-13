import "./customDateOption.css";
import DateOptionInput from "./DateOptionInput";
import { memo, useMemo, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  searchParamsDateOutboundSet,
  searchParamsDateReturnSet,
} from "../../../store/params";

const CustomDateOption = memo(({ optionPlace }) => {
  const dispatch = useDispatch();

  const [forwardMoment, setForwardMoment] = useState(undefined);
  const [returnMoment, setReturnMoment] = useState(undefined);
  const forwardState = useSelector((state) => state.params.dateOutbound);
  const returnState = useSelector((state) => state.params.dateReturn);

  const onChange = (value, dateType) => {
    const date = value ? value.format("YYYY-MM-DD") : null;
    if (dateType === "forward") {
      dispatch(searchParamsDateOutboundSet(date));
    } else if (dateType === "return") {
      dispatch(searchParamsDateReturnSet(date));
    }
  };

  useMemo(() => {
    if (forwardState) {
      setForwardMoment(moment(forwardState, "YYYY-MM-DD"));
    } else {
      setForwardMoment(undefined);
    }
  }, [forwardState]);

  useMemo(() => {
    if (returnState) {
      setReturnMoment(moment(returnState, "YYYY-MM-DD"));
    } else {
      setReturnMoment(undefined);
    }
  }, [returnState]);

  return (
    <>
      {optionPlace === "headerOption" && (
        <div className="date__container">
          <span className="date__title">Дата</span>
          <div className="date__input">
            <DateOptionInput
              className="input__item"
              optionPlace="headerOption"
              dateType="forward"
              defaultValue={forwardMoment}
              getDate={onChange}
            />
            <DateOptionInput
              className="input__item"
              pickerPlace="headerOption"
              dateType="return"
              defaultValue={returnMoment}
              getDate={onChange}
            />
          </div>
        </div>
      )}
      {optionPlacePlace === "sideOption" && (
        <div className="selector__dateOptions">
          <div className="dateOptions__title">Дата поездки</div>
          <DateOptionInput
            className="input__sideItem"
            optionPlace="sideOption"
            dateType="forward"
            defaultValue={forwardMoment}
            getDate={onChange}
          />
          <div className="dateOptions__title">Дата возвращения</div>
          <DateOptionInput
            className="input__sideItem"
            optionPlace="sideOption"
            dateType="return"
            defaultValue={returnMoment}
            getDate={onChange}
          />
        </div>
      )}
    </>
  );
});

export default CustomDateOption;