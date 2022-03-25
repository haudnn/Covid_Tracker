import React, { useState, useEffect } from "react";
import { COVID_WORLD } from "../api/apiConfig";
import SkeletonCard from "../components/Skeleton";
const World = () => {
  const [covidWorld, setCovidWorld] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const DataWorld = setTimeout(() => {
      fetch(COVID_WORLD)
        .then((res) => res.json())
        .then((datas) => {
          setCovidWorld(datas);
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(DataWorld);
  }, []);
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return (
    <>
      {loading && <SkeletonCard />}
      {!loading && covidWorld && (
        <div className=" pt-12 sm:flex w-full z-10 mt-4 justify-center ">
          <div>
            <div className="text-center">
              <h1 className="text-[15px] sm:text-[30px] font-bold">
                Số liệu COVID-19 Thế Giới
              </h1>
              <span className="text-[15px]">(Cập nhật ngày: {today})</span>
            </div>
            <ul className="sm mt-6 grid xl:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-5">
              <li className="flex flex-col justify-start items-start bg-white px-4 py-4 w-full rounded-lg shadow-lg border-t-8 border-red-500 text-black h-full">
                <p className="text-[20px] font-bold pb-3">Dân số thế giới</p>
                <span className="text-[30px] font-bold text-red-500 ">
                  {covidWorld.population.toLocaleString()}
                </span>
              </li>
              <li className="flex flex-col justify-start items-start bg-white p-3 w-full rounded-lg shadow-lg border-t-8 border-orange-500 text-black h-full">
                <p className="text-[20px] font-bold pb-3">Tổng ca nhiễm</p>
                <span className="text-[30px] font-bold text-[#FA6400] ">
                  {covidWorld.cases.toLocaleString()}
                </span>
                <p className="text-[15px] text-black  font-semibold mt-4 ">
                  {covidWorld.todayCases > 0 ? "+" : "-"}
                  {covidWorld.todayCases.toLocaleString()}
                  <span className="text-black font-normal"> ca hôm qua</span>
                </p>
              </li>
              <li className="flex flex-col justify-start items-start bg-white p-3 w-full rounded-lg shadow-lg border-t-8 border-gray-500 text-black h-full">
                <p className="text-[20px] font-bold pb-3">Tổng ca tử vong</p>
                <span className="text-[30px] font-bold text-[#817C98] ">
                  {covidWorld.deaths.toLocaleString()}
                </span>
                <p className="text-[15px] text-black  font-semibold mt-4 ">
                  {covidWorld.todayDeaths > 0 ? "+" : "-"}
                  {covidWorld.todayDeaths.toLocaleString()}{" "}
                  <span className="text-black font-normal">ca hôm qua</span>
                </p>
              </li>
              <li className="flex flex-col justify-start items-start bg-white p-3 w-full rounded-lg shadow-lg border-t-8 border-green-500 text-black h-full">
                <p className="text-[20px] font-bold pb-3">Tổng ca hồi phục</p>
                <span className="text-[30px] font-bold text-[#1CB142]">
                  {" "}
                  {covidWorld.recovered.toLocaleString()}
                </span>
                <p className="text-[15px] text-black  font-semibold mt-4 ">
                  {covidWorld.todayRecovered > 0 ? "+" : "-"}
                  {covidWorld.todayRecovered.toLocaleString()}
                  <span className="text-black font-normal"> ca hôm qua</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default World;
