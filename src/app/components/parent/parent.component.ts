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
    valueAr: 'المملكة الأردنية الهاشمية',
    valueEn: 'Hashemite Kingdom of Jordan',
    flag: 'https://flagcdn.com/w40/jo.png',
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
  { field: 'assignDate', labelAr: 'تاريخ التعيين', labelEn: 'Assignment Date' },
  { field: 'cancelDate', labelAr: 'تاريخ إلغاء التعيين', labelEn: 'Cancel Date' },
  { field: 'responsible', labelAr: 'المسؤول عن التعيين', labelEn: 'Responsible' },
  { field: 'localMinutes', labelAr: 'الدقائق المحلية', labelEn: 'Local Minutes' },
  { field: 'internationalMinutes', labelAr: 'الدقائق الدولية', labelEn: 'International Minutes' },
  { field: 'amount', labelAr: 'المبلغ', labelEn: 'Amount' }
];

allRecords: TableRecord[] = [
  {
    customer: { ar: 'الشركة الألمانية للإبادة...', en: 'German Pest Control Co...' },
    assignmentDate: { ar: '01/12/2024', en: '12/01/2024' },
    cancelDate: { ar: '-', en: '-' },
    responsible: { ar: 'عبدالرحيم إسماعيل ناصف', en: 'Abdelrahim Ismail Nasif' },
    localMinutes: { ar: '7654', en: '7654' },
    intlMinutes: { ar: '122', en: '122' },
    amount: { ar: '61890 ج.م', en: '61890 EGP' }
  }
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
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}
