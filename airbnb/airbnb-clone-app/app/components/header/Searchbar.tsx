"use client";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Searchbar = ({placeholder}:{placeholder?: string}) => {
  const [input, setInput] = useState("");
  const [NumberofGuest, setNumberofGuest] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className=" flex items-center md:border-2 rounded-full py-2 md:shadow-sm my-5  text-gray-400 h-12">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder= {placeholder ||  "Start Your search"} 
          className="outline-none bg-transparent  pl-5 grow placeholder-transparent sm:placeholder-gray-400 text-gray-600 text-sm "
        />
        <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 lg:inline-flex " />
      </div>

      {input && (
        <div className="absolute flex flex-col col-span-3 mx-auto  top-full left-[50%] translate-x-[-50%]">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B81"]}
            minDate={new Date()}
          />
          <div className=" flex items-center border-b bg-white p-4">
            <h2 className="text-2xl font-semibold grow">Number of Guest :</h2>
            <UsersIcon className="h-5" />
            <input
              type="text"
              className="text-red-400 pl-2 outline-none w-12 text-lg"
              min={1}
              value={NumberofGuest}
              onChange={(e) => setNumberofGuest(Number(e.target.value))}
            />
            
          </div>
          <div className="flex items-center bg-white p-4">
              <button type="button" className="text-gray-500 grow cursor-pointer" onClick={()=> setInput('')}>Cancle</button>
              <Link href={{pathname :'/search', search:`?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&NumberofGuest=${NumberofGuest}`}} onClick={()=> setInput('')} className="text-red-400 grow" >Search</Link>
            </div>
        </div>
      )}
    </>
  );
};  

export default Searchbar;
