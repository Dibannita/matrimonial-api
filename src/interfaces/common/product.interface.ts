import { User } from '../user/user.interface';
import { Category } from './category.interface';
import { SubCategory } from './sub-category.interface';
import { Tag } from './tag.interface';
import { Division } from './division.interface';
import { Area } from './area.interface';
import { Zone } from './zone.interface';

export interface Product {
  _id?: string;
  postType?: 'matrimonial' | 'job_post' | 'products' | 'to_let';
  name?: string;
  slug?: string;
  description?: string;
  shortDescription?: string;
  costPrice?: number;
  salePrice?: number;
  discountType?: number;
  discountAmount?: number;
  images?: string[];
  quantity?: number;
  viewCount?: number;
  seoTitle?: string;
  seoDescription?: string;
  seoKeyword?: string;
  user?: User;
  category?: Category;
  subCategory?: SubCategory;
  tags?: Tag[];
  status?: 'publish' | 'draft';
  videoUrl?: string;
  waterSystem?: string;

  // Job Data
  deadline?: Date;
  jobRole?: string;
  jobType?: string;
  salaryTo?: number;
  salaryFrom?: number;
  requiredEducation?: string;
  experience?: string;
  companyName?: string;
  jobPostBy?: string;
  vacancy?: string;

  // To Let
  balcony?: string;
  bedroom?: string;
  bathroom?: string;
  availableFrom?: string;
  floorNo?: string;
  flatCategory?: string;
  flatType?: string;
  address?: string;
  division?: Division;
  area?: Area;
  zone?: Zone;
  rentPrice?: number;

  snakottoBisoi?:string;
  snakonttoPassingYear?:string;
  snatokPassingYear?:string;
  snatokInstitute?:string;
  snatokBisoi?:string;
  doctoretPassingYear?:string;
  doctoretInstitute?:string;
  doctoretBisoi?:string;
  ebadahoEducation?:string;
  ebadahoFolafol?:string;
  ebadahoPassingYear?:string;
  taksuPassingYear?:string;
  taksuEducation?:string;
  taksuFolafol?:string;
  taksuInstitution?:string;
  takmilPassingYear?:string;
  takmilFolafol?:string;
  takmilEducation?:string;
  fojilotPassingYear?:string;
  fojilotFolafol?:string;
  fojilotEducation?:string;
  saniPassingYear?:string;
  saniFolafol?:string;
  saniEducation?:string;
  muftiPassingYear?:string;
  muftiFolafol?:string;
  muftiEducation?:string;
  snakottoBosor?:string;
  snakottoInstiute?:string;
  // Matrimonial
  bioDataType?: string;
  maritalStatus?: string;
  birthDay?: string;
  height?: string;
  complexion?: string;
  weight?: string;
  bloodGroup?: string;
  nationality?: string;
  permanentAddress?: string;
  permanentAddressArea?: string;
  presentAddress?: string;
  presentAddressArea?: string;
  whereDidYouGrowUp?: string;
  yourEducationMethod?: string;
  highestEducation?: string;
  konYearDiploma?: string;
  sscPassingYear?: string;
  sscGroup?: string;
  sscResult?: string;
  passingYearHSC?: string;
  groupHSC?: string;
  resultHSC?: string;
  descriptionOfProfession?: string;
  whichFiqhDoYouFollow?: string;
  diplomaSubject?: string;
  diplomaInstitution?: string;
  diplomaPassingYear?: string;
  otherEducationalQualifications?: string;
  islamicEducationalTitles?: [string];
  fathersName?: string;
  isYourFatherAlive?: string;
  descriptionFathersProfession?: string;
  mothersName?: string;
  isYourMotherAlive?: string;
  descriptionMothersProfession?: string;
  howManyBrothers?: string;
  brothersInformation?: string;
  howManySisters?: string;
  sistersInformation?: string;
  professionsOfUncles?: string;
  familyFinancialStatus?: string;
  descriptionFinancialCondition?: string;
  familysReligiousCondition?: string;
  usuallyWearOutsideHouse?: string;
  accordingToSunnahSinceWhen?: string;
  wearClothesAboveTheAnkles?: string;
  prayFiveTimesDaySinceWhen?: string;
  prayersMissedQaza?: string;
  mahram?: string;
  quranCorrectly?: string;
  whichFiqh?: string;
  watchDramas?: string;
  physicalDiseases?: string;
  workDeen?: string;
  shrineMazar?: string;
  readingBooks?: string;
  islamicScholars?: string;
  categoryApplicable?: [string];
  conversionIslam?: string;
  hobbies?: string;
  mobileNumber?: string;
  GroomPhoto?: string;
  occupation?: string;
  professionDescription?: string;
  monthlyIncome?: string;
  agreeMarriage?: string;
  keepMarriage?: string;
  allowStudyMarriage?: string;
  allowJobMarriage?: string;
  liveWifeMarriage?: string;
  giftBrideFamily?: string;
  gettingMarriage?: string;
  partnerheight?: string;
  partnerEduQualification?: string;
  partnerDistrict?: string;
  partnerProfession?: string;
  partnerQualities?: string;
  submitBiodataWeb?: string;
  infoTrue?: string;
  agree?: string;
  fullName?: string;
  guardianNumber?: string;
  relationshipGuardian?: string;
  receiveBiodata?: string;
  girlJobAfterMarriage?: string;
  girlsStudiesAfterMarriage?: string;
  girlContinueJobAfterMarriage?: string;
  partnerAge?: string;
  partnerHeight?: string;
  partnerWeight?: string;
  partnerComplexion?: string;
  partnerMaritalStatus?: string;
  partnerArea?: string;
  partnerFinancial?: string;
  partnerMajhab?: string;
  partnerDin?: string;
  partnerGun?: string;
  howManyGrooms?: string;
  howManyBrides?: string;
  specificReasonsDivorce?: string;
  partnerOccupation?: string;
  song?: string;
  facebook?: string;
  salat?: string;
  pordha?: string;
  readQuranSuddho?: string;
  readQuranDaily?: string;
  gunaho?: string;
  motamot?: string;
  sarNoSami?:string;
  sarSami?:string;
  chakriSami?:string;
  porasonaSami?:string;
  montobboSami?:string;
  sontanSami?:string;
  obhibabokSami?:string;
  pottshaSami?:string;

  bisoiSar?:string;
  compromise?:string;
  chakri?:string;
  porasonaMaya?:string;
  pordaMaya?:string;
  sontanMaya?:string;
  rajiMaya?:string;
  sundorjo?:string;
}

interface CatalogInfo {
  _id?: string;
  name?: string;
  nameBn?: string;
  nameIt?: string;
  slug?: string;
}