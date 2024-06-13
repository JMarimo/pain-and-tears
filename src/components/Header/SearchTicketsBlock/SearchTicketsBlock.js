import "./searchTicketsBlock.scss";
import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DestinationOptions from "../../Options/DestinationOption/DestinationOption";
import CustomDateOption from "../../Option/DateOption/CustomDateOption";
import { fetchRoutes } from "../../../store/fetchRoutes";

const FindTicketsBlock = memo(() => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useSelector((state) => state.params);

  const findTickets = () => {
    if (params.cityDeparture.value && params.cityArrival.value) {
      dispatch(fetchRoutes(params));
      history.push("/selection");
    }
  };

  return (
    <div className="block__container">
      <div className="destination">
        <DestinationOption />
      </div>
      <div className="date">
        <CustomDateOption optionPlace="headerOption" />
      </div>
      <div className="click">
        <button onClick={searchTickets}>Найти билеты</button>
      </div>
    </div>
  );
});

export default SearchTicketsBlock;