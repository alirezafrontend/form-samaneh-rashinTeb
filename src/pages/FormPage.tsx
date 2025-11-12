import { useState } from "react";
import OrdersTable from "../components/ordersTable/OrdersTable";
import PatientFormPage from "../components/PatientForm/PatientForm";
import type { OrdersForm, PatientForm } from "../types/types";

const FormPage = () => {
  const [patient, setPatient] = useState<PatientForm>({
    patientId: "",
    firstName: "",
    lastName: "",
    father: "",
    birthDay: "",
    ward: "",
    room: "",
    bed: "",
    attendingPhysicians: "",
    dateOfAdmission: "",
  });

  const [orders, setOrders] = useState<OrdersForm[]>([]);

  return (
    <div className="">
      <PatientFormPage
        patient={patient}
        setPatient={setPatient}
        orders={orders}
        setOrders={setOrders}
      />
      <OrdersTable patient={patient} orders={orders} />
    </div>
  );
};

export default FormPage;
