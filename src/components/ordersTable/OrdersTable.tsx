import type { OrdersForm, PatientForm } from "../../types/types";

const OrdersTable = ({
  patient,
  orders,
}: {
  patient: PatientForm;
  orders: OrdersForm[];
}) => {
  console.log("getPatient:", patient);

  const patientInfo = patient;
  const orderInfo = orders;

  console.log("orderInfo:", orderInfo);

  return (
    <div className="container py-4">
      <div className="card shadow px-4 py-3">
        <div className="mb-4">
          <h2 className="text-center fs-4">دانشگاه علوم پزشکی ایران</h2>
          <h2 className="text-center fs-4">بیمارستان شهید هاشمی نژاد</h2>
        </div>
        <div className="row">
          <div className="d-flex flex-column justify-content-between col-2 border border-3 border-black border-bottom-0">
            <div className="d-flex justify-content-between pt-1">
              <span>شماره پرونده</span>
              <span dir="ltr">Unit No:</span>
            </div>
            <p className="d-flex justify-content-center align-items-center my-4 fw-bold">
              {patientInfo?.patientId}
            </p>
          </div>
          <div className="col-8">
            <h3 className="text-center fs-3">برگه دستورات پزشک</h3>
            <h3 className="text-center fs-3">PHYSICIAN'S ORDER SHEET</h3>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center fs-4 fw-bolder">
            logo
          </div>
        </div>
        <div className="row border border-1 border-black p-1">
          <div className="row col-5 row-gap-1 me-0 p-0">
            <div className="row d-flex flex-nowrap" style={{ gap: "4px" }}>
              <div className="col-7 border border-1 border-black">
                <div className="d-flex justify-content-between pt-1">
                  <span>نام خانوادگی:</span>
                  <span dir="ltr">FamilyName:</span>
                </div>
                <p className="d-flex justify-content-center align-items-center my-1 py-2 fw-bold">
                  {patientInfo?.lastName}
                </p>
              </div>
              <div className="col-5 border border-1 border-black">
                <div className="d-flex justify-content-between pt-1">
                  <span>نام:</span>
                  <span dir="ltr">Name:</span>
                </div>
                <p className="d-flex justify-content-center align-items-center my-1 py-2 fw-bold">
                  {patientInfo?.firstName}
                </p>
              </div>
            </div>
            <div className="row d-flex flex-nowrap" style={{ gap: "4px" }}>
              <div className="col-7 border border-1 border-black">
                <div className="d-flex justify-content-between pt-1">
                  <span>نام پدر:</span>
                  <span dir="ltr">FatherName:</span>
                </div>
                <p className="d-flex justify-content-center align-items-center my-1 py-2 fw-bold">
                  {patientInfo?.father}
                </p>
              </div>
              <div className="col-5 border border-1 border-black">
                <div className="d-flex justify-content-between pt-1">
                  <span>تاریخ تولد:</span>
                  <span dir="ltr">Date Of Birth::</span>
                </div>
                <p className="d-flex justify-content-center align-items-center my-1 py-2 fw-bold">
                  {patientInfo?.birthDay}
                </p>
              </div>
            </div>
          </div>
          <div className="row col-2 d-flex flex-column justify-content-between border border-1 border-black m-0 p-0">
            <div className="d-flex justify-content-between">
              <div>
                <span className="fs-5 fw-bold">بخش:</span>
                <span className="fs-6 fw-bold">{patientInfo?.ward}</span>
              </div>
              <div dir="ltr">Ward:</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <span className="fs-5 fw-bold">اتاق:</span>
                <span className="fs-6 fw-bold">{patientInfo?.room}</span>
              </div>
              <div dir="ltr">Room:</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <span className="fs-5 fw-bold">تخت:</span>
                <span className="fs-6 fw-bold">{patientInfo?.bed}</span>
              </div>
              <div dir="ltr">Bed:</div>
            </div>
          </div>
          <div className="row col-5 d-flex flex-column gap-1 m-0 me-2 p-0">
            <div className="col border border-1 border-black">
              <div className="d-flex justify-content-between pt-1">
                <span>پزشک معالج:</span>
                <span dir="ltr">Attending Physicians:</span>
              </div>
              <p className="d-flex justify-content-center align-items-center my-1 py-2 fw-bold">
                {patientInfo?.attendingPhysicians}
              </p>
            </div>
            <div className="border border-1 border-black">
              <div className="d-flex justify-content-between pt-1">
                <span>تاریخ پذیرش:</span>
                <span dir="ltr">Date of Admission:</span>
              </div>
              <p className="d-flex justify-content-center align-items-center my-1 py-2 fw-bold">
                {patientInfo?.dateOfAdmission}
              </p>
            </div>
          </div>
        </div>
        <div className="border-1 border-black">
          <div className="row">
            <div className="col-2 border-3 border-start border-end border-top-0 border-bottom border-black p-2">
              <p className="text-center fs-6 fw-bold">تاریخ</p>
              <p className="text-center fs-6 fw-bold">Date</p>
            </div>
            <div className="col border-3 border-start border-end-0 border-top-0 border-bottom  border-black p-2">
              <p className="text-center fs-6 fw-bold">ساعت</p>
              <p className="text-center fs-6 fw-bold">Time</p>
            </div>
            <div className="col-5 border-3 border-start border-end-0 border-top-0 border-bottom  border-black p-2">
              <p className="text-center fs-6 fw-bold">دستورات</p>
              <p className="text-center fs-6 fw-bold">Orders</p>
            </div>
            <div className="col-4 border-3 border-start border-end-0 border-top-0 border-bottom border-black p-2">
              <p className="text-center fs-6 fw-bold">
                امضا پزشک / امضا پرستار
              </p>
              <p className="text-center fs-6 fw-bold">
                Signature of Physicians/Signature ofNurses
              </p>
            </div>
          </div>
          <div>
            {orderInfo?.map((order, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-2 border-3 border-start border-end border-top-0 border-bottom border-black p-3">
                    <p className="text-center text-center fs-6 fw-normal mb-0">
                      {order.dateOrder}
                    </p>
                  </div>
                  <div className="col border-3 border-start border-end-0 border-top-0 border-bottom border-black p-3">
                    <p className="text-center fs-6 fw-normal mb-0">
                      {order.timeOrder}
                    </p>
                  </div>
                  <div className="col-5 border-3 border-start border-end-0 border-top-0 border-bottom border-black p-3">
                    <p className="text-center fs-6 fw-normal mb-0">
                      {order.orders}
                    </p>
                  </div>
                  <div className="col-4 border-3 border-start border-end-0 border-top-0 border-bottom border-black p-3">
                    <p className="text-center fs-6 fw-normal mb-0">امضا</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row bg-secondary text-white py-3">
          <div className="col-2">برگه دستورات پزشک:</div>
          <div className="col-4 d-flex gap-1 justify-content-center">
            (
            <p>
              <span>بیمار:</span>
              <span>{`${patientInfo.firstName} ${patientInfo.lastName}`}</span>
            </p>
            <p>
              <span>کد پرونده:</span>
              <span dir="ltr">{patientInfo.patientId}</span>
            </p>
            )
          </div>
          <div className="col-6">
            <p className="text-start">
              طرح استاندارد سازی و بهینه نمودن سیستم مدارک پزشکی کشور 100/14
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
