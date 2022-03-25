import React, { useState, useEffect } from "react";
import { COVID_VACCINE_VIETNAM_2 } from "../../api/apiConfig";
import axios from "axios";
const VaccineDetails = () => {
  const [datas, setDatas] = useState([]);
  const [visible, setVisible] = useState(10);
  const [checked, setChecked] = useState(true);
  const [keyword, setKeyWord] = useState("");
  const handleLoadMore = () => {
    setVisible(visible + 53);
    setChecked(!checked);
  };
  const handleOutSide = () => {
    setVisible(10);
    setChecked(true);
  };
  useEffect(() => {
    const FetchDatas = async () => {
      try {
        await axios.get(COVID_VACCINE_VIETNAM_2).then((c) => {
          setDatas(c.data.data);
        });
      } catch (error) {}
    };
    FetchDatas();
  }, []);
  const handleInput = (e) => {
    setKeyWord(e.target.value);
  };
  return (
    <div className="max-w-6xl my-0 mx-auto pt-12 grid grid-cols-1 grid-rows-1">
      <div className="w-full bg-white rounded-2xl shadow-md p-2">
        <div className="bg-sky-100 p-2 sm:p-3 rounded-lg">
          <p className="text-cyan-800 text-[13px] sm:text-[15px]  font-semibold text-center">
            Phân bổ vaccine
          </p>
        </div>
        <div className=" w-full  sm:p-[10px]  md:p-6 md:pt-0 ">
          <div class="flex items-center justify-end mb-4 mt-4">
            <div class="border p-2 rounded-lg w-full text-sm">
              <div class="flex">
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  value={keyword}
                  onChange={handleInput}
                  placeholder="Tìm kiếm địa điểm"
                  class="outline-none w-full"
                />
              </div>
            </div>
          </div>
          <table className="w-full text-gray-600">
            <thead>
              <tr className=" font-semibold">
                <th className=" text-center sm:text-left text-[13px]  sm:text-[15px]">
                  Tỉnh/TP
                </th>
                <th className="text-right text-[13px] sm:text-[15px]">
                  Tổng người đã tiêm
                </th>
                <th className="text-right text-[13px] sm:text-[15px]">
                  Tiêm 1 mũi
                </th>
                <th className="text-right text-[13px] sm:text-[15px]">
                  Tiêm 2 mũi
                </th>
                <th className="text-right text-[13px] sm:text-[15px]">
                  Số liều Vaccine đã về
                </th>
              </tr>
            </thead>
            <tbody>
              {datas
                .filter((e) => {
                  if (keyword === "") {
                    return e;
                  } else if (
                    e.provinceName.toLowerCase().includes(keyword.toLowerCase())
                  ) {
                    return e;
                  }
                })
                .slice(0, visible)
                .map((e, i) => {
                  return (
                    <tr key={e.provinceCode}>
                      <th className="py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-left text-gray-800">
                        {e.provinceName}
                      </th>
                      <th className="py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-right text-red-600">
                        {e.totalInjected.toLocaleString()}
                      </th>
                      <th className="py-1 font-[500] text-right text-[13px] sm:text-[15px]">
                        {e.totalOnceInjected.toLocaleString()}
                      </th>
                      <th className="py-1 font-[500] text-right text-[13px] sm:text-[15px]">
                        {e.totalTwiceInjected.toLocaleString()}
                      </th>
                      <th className="py-1 font-[500] text-right text-[13px] sm:text-[15px]">
                        {e.totalVaccineAllocatedReality.toLocaleString()}
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <button
          onClick={checked ? handleLoadMore : handleOutSide}
          className="w-full mt-2 sm:p-3 p-2 bg-sky-100 rounded-lg font-semibold"
        >
          {checked ? "Xem thêm" : "Thu gọn"}
        </button>
      </div>
    </div>
  );
};

export default VaccineDetails;
