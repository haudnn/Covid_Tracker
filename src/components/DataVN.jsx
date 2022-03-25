import React, { useState, useEffect } from "react";
import { COVID_CASES_VN } from "../api/apiConfig";
const DataVN = () => {
  const [casesTotal, setCasesTotal] = useState("");
  const [casesToday, setCasesToday] = useState("");
  const [community, setCommunity] = useState([]);
  useEffect(() => {
    fetch(COVID_CASES_VN)
      .then((res) => res.json())
      .then((datas) => {
        setCasesTotal(datas.total.internal);
        setCasesToday(datas.today.internal);
      });
  }, []);
  useEffect(() => {
    fetch("https://api.zingnews.vn/public/v2/corona/getChart")
      .then((res) => res.json())
      .then((datas) => {
        setCommunity(datas.data.vnSeason4CommunityDaily.data);
      });
  }, []);
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return (
    casesTotal &&
    casesToday && (
      <div className="pt-12  ">
        <div className="text-center">
          <h1 className="text-[15px] sm:text-[30px] font-bold">
            Số liệu COVID-19 tại Việt Nam
          </h1>
          <span className="text-[15px]">(Cập nhật ngày: {today})</span>
        </div>
        <ul className="mt-6 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <li className="flex flex-col justify-start items-start bg-white p-3 w-full rounded-lg shadow-lg border-t-8 border-red-500 text-black h-full">
            <p className="text-[20px] font-bold pb-3">Tổng ca nhiễm</p>
            <span className="text-[30px] font-bold text-red-500 ">
              {casesTotal.cases.toLocaleString()}
            </span>
            <p className="text-[15px] text-black  font-semibold mt-4 ">
              {casesToday.cases > 0 ? "+" : "-"}
              {casesToday.cases.toLocaleString()}{" "}
              <span className="text-black font-normal"> ca hôm nay</span>
            </p>
            {community.slice(-1).map((e, i) => {
              return (
                <p
                  key={i}
                  className="text-[15px] text-black  font-semibold mt-4 "
                >
                  {e.community > 0 ? "+" : "-"}
                  {e.community.toLocaleString()}{" "}
                  <span className="text-black font-normal"> ca cộng đồng</span>
                </p>
              );
            })}
          </li>
          <li className="flex flex-col justify-start items-start bg-white p-3 w-full rounded-lg shadow-lg border-t-8 border-green-500 text-black h-full">
            <p className="text-[20px] font-bold pb-3">Tổng ca hồi phục</p>
            <span className="text-[30px] font-bold text-[#1CB142]">
              {" "}
              {casesTotal.recovered.toLocaleString()}
            </span>
            <p className="text-[15px] text-black  font-semibold mt-4 ">
              {casesToday.recovered > 0 ? "+" : "-"}
              {casesToday.recovered.toLocaleString()}
              <span className="text-black font-normal"> ca hôm nay</span>
            </p>
            <div className=" flex items-center text-[15px] text-black  font-semibold mt-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="mr-2">Tỷ lệ hồi phục/ca nhiễm </span>
              <span className="text-right text-white font-normal bg-green-500 rounded" style={{padding: '0.125rem 0.25rem'}}>
                {((casesTotal.recovered / casesTotal.cases) * 100).toFixed(2)}%
              </span>
            </div>
          </li>
          <li className="flex flex-col justify-start items-start bg-white p-3 w-full rounded-lg shadow-lg border-t-8 border-gray-500 text-black h-full">
            <p className="text-[20px] font-bold pb-3">Tổng ca tử vong</p>
            <span className="text-[30px] font-bold text-[#817C98] ">
              {casesTotal.death.toLocaleString()}
            </span>
            <p className="text-[15px] text-black  font-semibold mt-4 ">
              {casesToday.death > 0 ? "+" : "-"}
              {casesToday.death.toLocaleString()}{" "}
              <span className="text-black font-normal">ca hôm nay</span>
            </p>
            <div className=" flex items-center text-[15px] text-black  font-semibold mt-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="mr-2">Tỷ lệ tử vong/ca nhiễm </span>
              <span className="text-right text-white font-normal bg-gray-500 rounded" style={{padding: '0.125rem 0.25rem'}}>
                {((casesTotal.death / casesTotal.cases) * 100).toFixed(2)} %
              </span>
            </div>
          </li>
          <li className="flex flex-col justify-start items-start bg-white p-3 w-full rounded-lg shadow-lg border-t-8 border-orange-500 text-black h-full">
            <p className="text-[20px] font-bold pb-3">Tổng ca điều trị</p>
            <span className="text-[30px] font-bold text-[#FA6400] ">
              {casesTotal.treating.toLocaleString()}
            </span>
            <p className="text-[15px] text-black  font-semibold mt-4 ">
              {casesToday.treating > 0 ? "+" : "-"}
              {casesToday.treating.toLocaleString()}
              <span className="text-black font-normal"> ca hôm nay</span>
            </p>
          </li>
        </ul>
      </div>
    )
  );
};

export default DataVN;
