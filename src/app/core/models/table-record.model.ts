export interface TableRecordField {
  ar: string;
  en: string;
}

export interface TableRecord {
  customer: TableRecordField;
  assignmentDate: TableRecordField;
  cancelDate: TableRecordField;
  responsible: TableRecordField;
  localMinutes: TableRecordField;
  intlMinutes: TableRecordField;
  amount: TableRecordField;
  currency: TableRecordField;
}
