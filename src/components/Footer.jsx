import React from 'react'

const Footer = () => {
  return (
    <footer className="pt-20 pb-20 w-full flex flex-col items-center justify-center">
        <a href="/" className="text-sm text-center hover:text-blue-500">
            Powered by&nbsp;<span className="font-bold text-md ">CT01</span>
        </a>
        <span className="text-[13px] font-semibold mb-4">Nguồn dữ liệu từ Zing News && Vnexpress</span>
    </footer>
  )
}

export default Footer