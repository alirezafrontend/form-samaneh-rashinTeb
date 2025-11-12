import React, { useState } from "react";
import InputText from "../utils/InputText";
import InputSelect from "../utils/InputSelect";
import type { OrdersForm, PatientForm } from "../../types/types";

const PatientFormPage = ({
  patient,
  setPatient,
  orders,
  setOrders,
}: {
  patient: PatientForm;
  setPatient: React.Dispatch<React.SetStateAction<PatientForm>>;
  orders: OrdersForm[];
  setOrders: React.Dispatch<React.SetStateAction<OrdersForm[]>>;
}) => {
  const [step, setStep] = useState<1 | 2>(1);

  const [registeredPatient, setRegisteredPatient] =
    useState<PatientForm | null>(null);

  const [newOrder, setNewOrder] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [orderError, setOrderError] = useState("");

  const optionSelectWard = ["امید", "امید 1", "امید 2"];
  const optionSelectRoom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const optionSelectBed = [1, 2, 3, 4, 5, 6, 7, 8];
  const optionSelectAttendingPhysicians = ["ندا", "رها", "شمس", "نیک"];

  const handlePatientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPatient((prev) => ({ ...prev, [name]: value }));
  };

  console.log(patient);

  const generatePatientId = (): string => {
    const sec1 = Math.floor(Math.random() * 99) + 1;
    const sec2 = Math.floor(Math.random() * 999) + 1;
    const sec3 = Math.floor(Math.random() * 99) + 1;
    return `${sec1}-${sec2}-${sec3}`;
  };

  const birthDayRegex =
    /^(13[0-9]{2}|140[0-4])\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|30)$/;

  const handleRegisterPatient = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!patient.firstName) newErrors.firstName = "نام بیمار الزامی است";
    if (!patient.lastName) newErrors.lastName = "نام خانوادگی الزامی است";
    if (!patient.father) newErrors.father = "نام پدر الزامی است";
    if (!patient.birthDay) {
      newErrors.birthDay = "تاریخ تولد الزامی است";
    } else if (!birthDayRegex.test(patient.birthDay)) {
      newErrors.birthDay = "فرمت تاریخ تولد باید YYYY/MM/DD و معتبر باشد";
    }
    if (!patient.ward) newErrors.ward = "بخش الزامی است";
    if (!patient.room) newErrors.room = "اتاق الزامی است";
    if (!patient.bed) newErrors.bed = "تخت الزامی است";
    if (!patient.attendingPhysicians)
      newErrors.attendingPhysicians = "پزشک معالج الزامی است";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const now = new Date();
    const dateOfAdmission = now.toLocaleDateString("fa-IR");
    const patientId = generatePatientId();

    const finalPatient: PatientForm = {
      ...patient,
      dateOfAdmission,
      patientId,
    };

    setRegisteredPatient(finalPatient);
    setPatient(finalPatient);
    setStep(2);
    console.log("بیمار ثبت شد", finalPatient);
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newOrder.trim()) {
      setOrderError("دستور پزشک الزامی است");
      return;
    }

    setOrderError("");

    const now = new Date();
    const dateOrder = now.toLocaleDateString("fa-IR");
    const timeOrder = now.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setOrders((prev) => {
      const updated = [...prev, { dateOrder, timeOrder, orders: newOrder }];
      console.log("دستورات ثبت شده:", updated);
      return updated;
    });
    setNewOrder("");
    console.log("orders:", orders);
  };

  return (
    <div className="container py-4">
      {step === 1 && (
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">ثبت بیمار جدید ( مرحله اول )</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleRegisterPatient} action="">
              <div className="row g-3">
                <div className="col-lg-6">
                  <InputText
                    labelInput="نام بیمار"
                    typeInput="text"
                    nameInput="firstName"
                    placeholderInput="نام بیمار"
                    value={patient.firstName}
                    onChange={handlePatientChange}
                    error={errors.firstName}
                  />
                </div>
                <div className="col-lg-6">
                  <InputText
                    labelInput="نام خانوادگی بیمار"
                    typeInput="text"
                    nameInput="lastName"
                    placeholderInput="نام خانوادگی بیمار"
                    value={patient.lastName}
                    onChange={handlePatientChange}
                    error={errors.lastName}
                  />
                </div>
                <div className="col-lg-6">
                  <InputText
                    labelInput="نام پدر"
                    typeInput="text"
                    nameInput="father"
                    placeholderInput="نام پدر"
                    value={patient.father}
                    onChange={handlePatientChange}
                    error={errors.father}
                  />
                </div>
                <div className="col-lg-6">
                  <InputText
                    labelInput="تاریخ تولد"
                    nameInput="birthDay"
                    typeInput="text"
                    placeholderInput="1360/00/00"
                    value={patient.birthDay}
                    onChange={handlePatientChange}
                    error={errors.birthDay}
                  />
                </div>
                <div className="col-lg-6">
                  <InputSelect
                    labelSelect="بخش"
                    nameSelect="ward"
                    optionSelect={optionSelectWard}
                    labelOption="انتخاب بخش"
                    value={patient.ward}
                    onChange={handlePatientChange}
                    error={errors.ward}
                  />
                </div>
                <div className="col-lg-6">
                  <InputSelect
                    labelSelect="اتاق"
                    nameSelect="room"
                    optionSelect={optionSelectRoom}
                    labelOption="انتخاب اتاق"
                    value={patient.room}
                    onChange={handlePatientChange}
                    error={errors.room}
                  />
                </div>
                <div className="col-lg-6">
                  <InputSelect
                    labelSelect="تخت"
                    nameSelect="bed"
                    optionSelect={optionSelectBed}
                    labelOption="انتخاب تخت"
                    value={patient.bed}
                    onChange={handlePatientChange}
                    error={errors.bed}
                  />
                </div>
                <div className="col-lg-6">
                  <InputSelect
                    labelSelect="پزشک معالج"
                    nameSelect="attendingPhysicians"
                    optionSelect={optionSelectAttendingPhysicians}
                    labelOption="پزشک معالج"
                    value={patient.attendingPhysicians}
                    onChange={handlePatientChange}
                    error={errors.attendingPhysicians}
                  />
                </div>
              </div>
              <button
                className="btn btn-primary btn-lg w-100 mt-4"
                type="submit"
              >
                ثبت بیمار و ادامه
              </button>
            </form>
          </div>
        </div>
      )}

      {step === 2 && registeredPatient && (
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h3 className="my-3">ثبت دستورات پزشک</h3>
          </div>
          <form onSubmit={handleOrder} className="my-4 mx-3" action="">
            <div className="row g-3">
              <div className="col">
                <textarea
                  className="form-control"
                  name="orders"
                  id="orders"
                  rows={6}
                  placeholder="دستورات پزشک ..."
                  value={newOrder}
                  onChange={(e) => setNewOrder(e.target.value)}
                ></textarea>
                {orderError && (
                  <small className="text-danger">{orderError}</small>
                )}
              </div>
            </div>
            <button className="btn btn-primary btn-lg w-100 mt-4" type="submit">
              ثبت دستورات پزشک
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PatientFormPage;
