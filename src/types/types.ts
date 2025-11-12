export interface PatientForm {
  patientId: string;
  firstName: string;
  lastName: string;
  father: string;
  birthDay: string;
  ward: string;
  room: string;
  bed: string;
  attendingPhysicians: string;
  dateOfAdmission: string;
}

export interface OrdersForm {
  dateOrder: string;
  timeOrder: string;
  orders: string;
}
