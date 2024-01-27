import React from "react";
import {Link } from "react-router-dom";

const CloudTeaIntro = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-home h-fit bg-no-repeat my-10">
      <div className="w-[100%] h-[692px]"></div>
      <div className="w-fit p-10">
        <div>
          <img
            src="https://file.hstatic.net/1000075078/file/tagline__1__1_378410beecb347f38cf8425ef7459690.png"
            alt=""
          />
        </div>
        <div className="mt-6">
          <p className="text-slate-500">
            Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ thổ nhưỡng phì
            nhiêu, nguồn nước mát lành, bao bọc bởi mây và sương cùng nền nhiệt
            độ mát mẻ quanh năm, những búp trà ở Tây Bắc mập mạp và xanh mướt,
            hội tụ đầy đủ dưỡng chất, sinh khí, và tinh hoa đất trời. Chính khí
            hậu đặc trưng cùng phương pháp canh tác của đồng bào dân tộc nơi đây
            đã tạo ra Trà Xanh vị mộc dễ uống, dễ yêu, không thể trộn lẫn với
            bất kỳ vùng miền nào khác.
          </p>
          
          <Link to="/menu/tea">
            <button className="mt-6 py-2 w-full bg-[#778B37] text-white rounded-lg">
                Thử ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CloudTeaIntro;
