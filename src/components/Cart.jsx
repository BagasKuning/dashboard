import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { cartData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Cart() {
  const { closedNav, currentColor } = useStateContext();
  const [data, setData] = React.useState(cartData);

  const handleIncrementCart = (valToIncrement, index) => {
    const cartData = [...data];

    cartData[index].val++;

    setData(cartData);
  };

  const handleDecrementCart = (valToDecrement, index) => {
    const cartData = [...data];

    cartData[index].val--;

    setData(cartData);
  }

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ml-72">
      <div className="float-right px-5 pt-5 h-screen dark:text-gray-200 bg-white dark:[#484b52] w-400 dark:bg-main-dark-bg max-[480px]:w-full">
        <div className="flex justify-between my-5 items-center">
          <span className="font-semibold text-base">Shopping Cart</span>

          <TooltipComponent content="Close" position="LeftCenter">
            <button
              type="button"
              onClick={() => closedNav("userProfile")}
              className="text-xl rounded-full p-1 hover:bg-light-gray block right-0"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>

        {cartData?.map((item, index) => (
          <div key={index} className="flex border-b-1 py-2  relative">
            <img src={item.image} alt="#" className="rounded w-24 h-24" />

            <div className="ml-2 leading-6 flex flex-col justify-around">
              <span>
                <p className="font-medium text-md">{item.name}</p>
                <p className="text-xs text-gray-400">{item.category}</p>
              </span>
              <div>
                <div className="flex items-center border-1 border-r-0 border-color rounded">
                  <button
                    className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "
                    onClick={() => handleDecrementCart(-1, index)}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                    {item.val}
                  </p>
                  <button
                    className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"
                    onClick={() => handleIncrementCart(1, index)}
                  >
                    <AiOutlinePlus />
                  </button>
                  <span className="text-md ml-3">{item.price}</span>
                </div>
              </div>
            </div>

            <span className="text-[10px] absolute right-0 bottom-0 text-gray-500 mb-1 max-[300px]:hidden">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
