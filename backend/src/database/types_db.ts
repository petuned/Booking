import type { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  businesses: BusinessTable;
  business_accounts: BusinessAccountTable;
  customers: CustomerTable;
  customer_accounts: CustomerAccountTable;
  services: ServiceTable;
  employees: EmployeeTable;
  service_employees: ServiceEmployeeTable;
  working_hours: WorkingHourTable;
  time_off: TimeOffTable;
  appointments: AppointmentTable;
  initial_appointments: InitialAppointmentTable;
}

export interface BusinessTable {
  business_id: Generated<bigint>;
  name: string;
  type: string;
  description: string;
}
export type Business = Selectable<BusinessTable>;
export type NewBusiness = Insertable<BusinessTable>;
export type BusinessUpdate = Updateable<BusinessTable>;

export interface BusinessAccountTable {
  business_account_id: Generated<bigint>;
  business_id: bigint;
  email: string;
  password_hash: string;
}
export type BusinessAccounts = Selectable<BusinessAccountTable>;
export type NewBusinessAccount = Insertable<BusinessAccountTable>;
export type BusinessAccountUpdate = Updateable<BusinessAccountTable>;

export interface CustomerTable {
  customer_id: Generated<bigint>;
  first_name: string;
  last_name: string;
  phone_number: string;
}
export type Customer = Selectable<CustomerTable>;
export type NewCustomer = Insertable<CustomerTable>;
export type CustomerUpdate = Updateable<CustomerTable>;

export interface CustomerAccountTable {
  customer_account_id: Generated<bigint>;
  customer_id: bigint;
  password_hash: string;
}
export type CustomerAccount = Selectable<CustomerAccountTable>;
export type NewCustomerAccount = Insertable<CustomerAccountTable>;
export type CustomerAccountUpdate = Updateable<CustomerAccountTable>;

export interface ServiceTable {
  service_id: Generated<bigint>;
  business_id: bigint;
  name: string;
  description: string;
  price: number;
  duration: number;
}
export type Service = Selectable<ServiceTable>;
export type NewService = Insertable<ServiceTable>;
export type ServiceUpdate = Updateable<ServiceTable>;

export interface EmployeeTable {
  employee_id: Generated<bigint>;
  business_id: bigint;
  first_name: string;
  last_name: string;
  phone_number: string;
}
export type Employee = Selectable<EmployeeTable>;
export type NewEmployee = Insertable<EmployeeTable>;
export type EmployeeUpdate = Updateable<EmployeeTable>;

export interface ServiceEmployeeTable {
  service_id: bigint;
  employee_id: bigint;
}
export type ServiceEmployee = Selectable<ServiceEmployeeTable>;
export type NewServiceEmployee = Insertable<ServiceEmployeeTable>;
export type ServiceEmployeeUpdate = Updateable<ServiceEmployeeTable>;

export interface WorkingHourTable {
  working_hours_id: Generated<bigint>;
  employee_id: bigint;
  day_of_week: number;
  start_time: string;
  end_time: string;
}
export type WorkingHour = Selectable<WorkingHourTable>;
export type NewWorkingHour = Insertable<WorkingHourTable>;
export type WorkingHourUpdate = Updateable<WorkingHourTable>;

export interface TimeOffTable {
  time_off_id: Generated<bigint>;
  employee_id: bigint;
  start_at: Date;
  end_at: Date;
  reason: string;
}
export type TimeOff = Selectable<TimeOffTable>;
export type NewTimeOff = Insertable<TimeOffTable>;
export type TimeOffUpdate = Updateable<TimeOffTable>;

export interface AppointmentTable {
  appointment_id: Generated<bigint>;
  customer_id: bigint;
  service_id: bigint;
  employee_id: bigint;
  start_at: Date;
  end_at: Date;
  status: string;
}
export type Appointment = Selectable<AppointmentTable>;
export type NewAppointment = Insertable<AppointmentTable>;
export type AppointmentUpdate = Updateable<AppointmentTable>;

export interface InitialAppointmentTable {
  initial_appointment_id: Generated<bigint>;
  customer_id: bigint;
  service_id: bigint;
  employee_id: bigint;
  start_at: Date;
  end_at: Date;
  expires_at: Date;
}
export type InitialAppointment = Selectable<InitialAppointmentTable>;
export type NewInitialAppointment = Insertable<InitialAppointmentTable>;
export type InitialAppointmentUpdate = Updateable<InitialAppointmentTable>;
