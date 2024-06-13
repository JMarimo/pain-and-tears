import "./destinationOption.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import DestinationOptionInput from "./DestinationOptionInput";
import { ReactComponent as SwapBtn } from "../../../img/swapBtn.svg";
import {
  searchParamsCityDepartureSet,
  searchParamsCityArrivalSet,
} from "../../../store/params";

export default function DestinationOption({ className }) {
  const dispatch = useDispatch();
  const departureState = useSelector((state) => state.params.cityDeparture);
  const arrivalState = useSelector((state) => state.params.cityArrival);

  // выбрать и установить пункт назначения или отправки
  const selectPoint = (value, point) => {
    if (point === "departure") {
      dispatch(searchParamsCityDepartureSet(value));
    } else {
      dispatch(searchParamsCityArrivalSet(value));
    }
  };

  // поменять местами пункты назначения в инпутах
  const swapPoints = () => {
    dispatch(searchParamsCityArrivalSet(departureState));
    dispatch(searchParamsCityDepartureSet(arrivalState));
  };

  return (
    <div className="destination__container">
      <span className="destination__title">Направление</span>
      <div className="destination__input">
        <div className="departure__option">
          <DestinationOptionInput
            point="departure"
            defaultValue={departureState.value}
            onSelect={selectPoint}
          />
        </div>
        <div className="swap__button">
          <Button
            shape="circle"
            className="destination__button"
            onClick={swapPoints}
          >
            <SwapBtn />
          </Button>
        </div>
        <div>
          <DestinationOptionInput
            point="arrival"
            defaultValue={arrivalState.value}
            onSelect={selectPoint}
          />
        </div>
      </div>
    </div>
  );
}