import { formatDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <h3 className="text-[20px] leading-[30px] text headingColor font-semibold flex items-center gap-2">
        About of
        <span className="text-irisBlueColor font-bold text-[24px] leading-9">
          NGUYỄN QUỐC THÁI
        </span>
      </h3>
      <p className="text_para">
        Nguyễn Quốc Thái has more than 15 years of experience in studying,
        researching, and working in the field of General Surgery, specializing
        in endoscopy and endoscopic surgery. After graduating from the Medical
        Doctor program at the University of Medicine and Pharmacy Ho Chi Minh
        City, Dr. Nguyễn Quốc Thái continued to participate in residency
        training programs for General Practitioners, Specialty I in General
        Surgery, and Specialty II in General Surgery at the same university. In
        2011, Dr. Nguyễn Quốc Thái obtained a certificate in open thyroidectomy
        and endoscopy from the Central Endocrinology Hospital. Dr. Nguyễn Quốc
        Thái worked for 7 years at Phap Viet Hospital in Ho Chi Minh City,
        followed by 3 years at Vinmec Central Park Hospital in Ho Chi Minh City
        before joining Tam Anh Hospital in Ho Chi Minh City as a General
        Surgeon.
      </p>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text headingColor font-semibold">
          Eduction
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[-15px] leading-6 font-semibold">
                {formatDate("12-04-2005")} - {formatDate("12-04-2012")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Central Endocrinology Hospital, Vietnam
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[-15px] leading-6 font-semibold ">
                {formatDate("01-16-2012")} - {formatDate("01-16-2016")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Central Endocrinology Hospital, VietNam
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("01-16-2012")} - {formatDate("01-16-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Central Endocrinology Hospital, VietNam
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("01-16-2012")} - {formatDate("01-16-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Central Endocrinology Hospital, VietNam
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
