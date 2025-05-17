import { Component} from '@angular/core';
import { DirectionService } from '../../core/services/direction.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { LanguageService } from '../../core/services/language.service';
import { TableComponent } from "../table/table.component";
import { TableHeader } from '../../core/models/table-header.model';
import { TableRecord } from '../../core/models/table-record.model';
import { InfoItem } from '../../core/models/items-header.model';

@Component({
  selector: 'app-parent',
  imports: [TranslateModule, HeaderComponent, FooterComponent, TableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})


export class ParentComponent {
phoneNumber:string = '012345678910';
// send data to header component
infoItems:InfoItem[] = [
  { label: 'PROTOCOL_NAME', valueAr: 'فودافون مصر', valueEn: 'Vodafone Egypt' },
  { label: 'LAST_RECHARGE_DATE', valueAr: '2024/12/29', valueEn: '2024/12/29' },
  {
    label: 'COUNTRY',
    valueAr: 'المملكة العربية السعودية',  
    valueEn: 'Kingdom of Saudi Arabia',
    flag: 'https://flagcdn.com/w40/sa.png',  // Changed to Saudi Arabia flag
  },
  { label: 'CURRENT_BALANCE', valueAr: '5000 ج.م', valueEn: '5000 EGP' },
  { label: 'USED_BALANCE_CURRENT_CUSTOMER', valueAr: '5000 ج.م', valueEn: '5000 EGP' },
  { label: 'USED_BALANCE_TOTAL', valueAr: '5000 ج.م', valueEn: '5000 EGP' },
  {
    label: 'CURRENT_CUSTOMER',
    valueAr: 'الشركة الألمانية للإبادة...',
    valueEn: 'German Pest Control Co...',
    flag:'assets/images/company.jpg',
    truncate: true,
  },
  { label: 'EXTENSIONS_COUNT', valueAr: '09', valueEn: '09' }
];

// send data to table component
headers: TableHeader[] = [
  { field: 'customer', labelAr: 'العميل', labelEn: 'Customer' },
  { field: 'assignmentDate', labelAr: 'تاريخ التعيين', labelEn: 'Assignment Date' },
  { field: 'cancelDate', labelAr: 'تاريخ إلغاء التعيين', labelEn: 'Cancel Date' },
  { field: 'responsible', labelAr: 'المسؤول عن التعيين', labelEn: 'Responsible' },
  { field: 'localMinutes', labelAr: 'الدقائق المحلية', labelEn: 'Local Minutes' },
  { field: 'intlMinutes', labelAr: 'الدقائق الدولية', labelEn: 'International Minutes' },
  { field: 'amount', labelAr: 'المبلغ', labelEn: 'Amount' }
];

allRecords: TableRecord[] = [
 {
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },
  {
    customer: { ar: 'شركة الغذاء الأخضر', en: 'Green Foods Inc.' },assignmentDate: { ar: '10/04/2024', en: '04/10/2024' },cancelDate: { ar: '15/04/2024', en: '04/15/2024' },responsible: { ar: 'خالد إبراهيم', en: 'Khaled Ibrahim' },localMinutes: { ar: '4567', en: '4567' },intlMinutes: { ar: '12', en: '12' },amount: { ar: '45678 ج.م', en: '45,678 EGP' }
  },
  {
    customer: { ar: 'مؤسسة البرمجة العربية', en: 'Arabia Coding Org.' },assignmentDate: { ar: '20/05/2024', en: '05/20/2024' },cancelDate: { ar: '25/05/2024', en: '05/25/2024' },responsible: { ar: 'نور خالد', en: 'Noor Khaled' },localMinutes: { ar: '5678', en: '5678' },intlMinutes: { ar: '34', en: '34' },amount: { ar: '56789 ج.م', en: '56,789 EGP' }
  },{
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },
  {
    customer: { ar: 'شركة الغذاء الأخضر', en: 'Green Foods Inc.' },assignmentDate: { ar: '10/04/2024', en: '04/10/2024' },cancelDate: { ar: '15/04/2024', en: '04/15/2024' },responsible: { ar: 'خالد إبراهيم', en: 'Khaled Ibrahim' },localMinutes: { ar: '4567', en: '4567' },intlMinutes: { ar: '12', en: '12' },amount: { ar: '45678 ج.م', en: '45,678 EGP' }
  },{
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },
  {
    customer: { ar: 'شركة الغذاء الأخضر', en: 'Green Foods Inc.' },assignmentDate: { ar: '10/04/2024', en: '04/10/2024' },cancelDate: { ar: '15/04/2024', en: '04/15/2024' },responsible: { ar: 'خالد إبراهيم', en: 'Khaled Ibrahim' },localMinutes: { ar: '4567', en: '4567' },intlMinutes: { ar: '12', en: '12' },amount: { ar: '45678 ج.م', en: '45,678 EGP' }
  },{
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },
  {
    customer: { ar: 'شركة الغذاء الأخضر', en: 'Green Foods Inc.' },assignmentDate: { ar: '10/04/2024', en: '04/10/2024' },cancelDate: { ar: '15/04/2024', en: '04/15/2024' },responsible: { ar: 'خالد إبراهيم', en: 'Khaled Ibrahim' },localMinutes: { ar: '4567', en: '4567' },intlMinutes: { ar: '12', en: '12' },amount: { ar: '45678 ج.م', en: '45,678 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },{
    customer: { ar: 'شركة الفضاء العربي', en: 'Arabia Space Co.' },assignmentDate: { ar: '05/01/2024', en: '01/05/2024' },cancelDate: { ar: '10/01/2024', en: '01/10/2024' },responsible: { ar: 'محمود أحمد', en: 'Mahmoud Ahmed' },localMinutes: { ar: '1234', en: '1234' },intlMinutes: { ar: '56', en: '56' },amount: { ar: '12345 ج.م', en: '12,345 EGP' }
  },
  {
    customer: { ar: 'المؤسسة التقنية للخدمات', en: 'Tech Services Ltd.' },assignmentDate: { ar: '15/02/2024', en: '02/15/2024' },cancelDate: { ar: '20/02/2024', en: '02/20/2024' },responsible: { ar: 'علي يوسف', en: 'Ali Youssef' },localMinutes: { ar: '2345', en: '2345' },intlMinutes: { ar: '78', en: '78' },amount: { ar: '23456 ج.م', en: '23,456 EGP' }
  },
  {
    customer: { ar: 'الشركة العالمية للنقل', en: 'Global Transport Co.' },assignmentDate: { ar: '01/03/2024', en: '03/01/2024' },cancelDate: { ar: '06/03/2024', en: '03/06/2024' },responsible: { ar: 'سلمى مصطفى', en: 'Salma Mostafa' },localMinutes: { ar: '3456', en: '3456' },intlMinutes: { ar: '90', en: '90' },amount: { ar: '34567 ج.م', en: '34,567 EGP' }
  },
];
constructor(public directionService: DirectionService,
              private languageService:LanguageService,
              private translate: TranslateService
  ) {
  }


 toggleDirection() {
        this.directionService.toggleDirection();
        this.languageService.toggleLanguage();
        this.translate.use(this.languageService.currentLang());
    }
    
}
