import React, {useState,useEffect} from "react";
import axios from 'axios'
import { COVID_VACCINE_VIETNAM  } from '../../api/apiConfig'
const Vaccine = () => {
    const [datas, setDatas] = useState('');
    useEffect(() => {
      const FetchDatas = async () => {
        try {
          await axios.get(COVID_VACCINE_VIETNAM).then((c) => {
            setDatas(c.data.data.data.slice(-1)[0]);
            
          });
        } catch (error) {}
      };
      FetchDatas();
    }, []);
  return (
    datas  && (
      <div className="max-w-6xl my-0 mx-auto pt-12">
      <div className="w-full bg-white rounded-2xl shadow-md ">
        <div className="grid sm:grid-cols-3 grid-cols-1 text-center border-b">
          <div className="py-5">
            <span className="text-[15px] md:text-[17px] font-semibold text-[#1b1053] ">
              Tổng số người đã tiêm
            </span>
            <div className=" font-semibold text-[25px]">{datas[Object.keys(datas)[1]].toLocaleString()}</div>
          </div>
          <div className=" py-5 sm:border-l sm:border-r">
            <span className="text-[15px] md:text-[17px] font-semibold text-[#1b1053] ">
            Đã tiêm 2 mũi
            </span>
            <div className=" font-semibold text-[25px] text-[#1cb14b]">{datas[Object.keys(datas)[2]].toLocaleString()}</div>
          </div>
          <div className=" py-5 sm:border-l sm:border-r">
            <span className="text-[15px] md:text-[17px] font-semibold text-[#1b1053] ">
            Đã tiêm tăng cường
            </span>
            <div className=" font-semibold text-[25px]  text-[#817c98]">{datas[Object.keys(datas)[3]].toLocaleString()}</div>
          </div>
        </div>
        <div className="px-3 sm:px-9 py-3">
          <div className="mb-3 ">
            <div className="px-3 inline-block bg-cyan-100 rounded-full">
              <span className="text-left text-[13px] font-bold text-cyan-400">
                % dân số đã tiêm mũi 2
              </span>
            </div>
          </div>
          <div className="w-full h-5 bg-emerald-50 rounded-full">
            <div
              className="bg-cyan-200 h-full rounded-full flex  justify-center text-[13px] font-bold text-cyan-400"
              style={{ width: "75.31%" }}
            >
              75.31%
            </div>
          </div>
          <div className="mt-2 text-[12px]">
            Mục tiêu: 70% dân số (tương đương khoảng 150 triệu liều vaccine)
          </div>
        </div>
      </div>
    </div>
    )
  );
};
export default Vaccine;
