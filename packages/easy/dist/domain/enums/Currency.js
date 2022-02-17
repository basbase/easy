"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const types_1 = require("../../types");
const structs_1 = require("../structs");
class Currency extends types_1.Enum {
    constructor(id, name, digits, code) {
        super(name, id, code);
        this.digits = digits;
        this.amount = (amount = 0) => (0, structs_1.money)(this, amount);
    }
}
exports.Currency = Currency;
Currency.EUR = new Currency('EUR', 'Euro', 2, '€');
Currency.USD = new Currency('USD', 'US Dollar', 2, '$');
Currency.AED = new Currency('AED', 'United Arab Emirates Dirham', 2, 'AED');
Currency.AFN = new Currency('AFN', 'Afghan Afghani', 0, 'Af');
Currency.ALL = new Currency('ALL', 'Albanian Lek', 0, 'ALL');
Currency.AMD = new Currency('AMD', 'Armenian Dram', 0, 'AMD');
Currency.ARS = new Currency('ARS', 'Argentine Peso', 2, 'AR$');
Currency.AUD = new Currency('AUD', 'Australian Dollar', 2, 'AU$');
Currency.AZN = new Currency('AZN', 'Azerbaijani Manat', 2, 'man.');
Currency.BAM = new Currency('BAM', 'Bosnia-Herzegovina Convertible Mark', 2, 'KM');
Currency.BDT = new Currency('BDT', 'Bangladeshi Taka', 2, 'Tk');
Currency.BGN = new Currency('BGN', 'Bulgarian Lev', 2, 'BGN');
Currency.BHD = new Currency('BHD', 'Bahraini Dinar', 3, 'BD');
Currency.BIF = new Currency('BIF', 'Burundian Franc', 0, 'FBu');
Currency.BND = new Currency('BND', 'Brunei Dollar', 2, 'BN$');
Currency.BOB = new Currency('BOB', 'Bolivian Boliviano', 2, 'Bs');
Currency.BRL = new Currency('BRL', 'Brazilian Real', 2, 'R$');
Currency.BWP = new Currency('BWP', 'Botswanan Pula', 2, 'BWP');
Currency.BYN = new Currency('BYN', 'Belarusian Ruble', 2, 'Br');
Currency.BZD = new Currency('BZD', 'Belize Dollar', 2, 'BZ$');
Currency.CAD = new Currency('CAD', 'Canadian Dollar', 2, 'CA$');
Currency.CDF = new Currency('CDF', 'Congolese Franc', 2, 'CDF');
Currency.CHF = new Currency('CHF', 'Swiss Franc', 2, 'CHF');
Currency.CLP = new Currency('CLP', 'Chilean Peso', 0, 'CL$');
Currency.CNY = new Currency('CNY', 'Chinese Yuan', 2, 'CN¥');
Currency.COP = new Currency('COP', 'Colombian Peso', 0, 'CO$');
Currency.CRC = new Currency('CRC', 'Costa Rican Colón', 0, '₡');
Currency.CVE = new Currency('CVE', 'Cape Verdean Escudo', 2, 'CV$');
Currency.CZK = new Currency('CZK', 'Czech Republic Koruna', 2, 'Kč');
Currency.DJF = new Currency('DJF', 'Djiboutian Franc', 0, 'Fdj');
Currency.DKK = new Currency('DKK', 'Danish Krone', 2, 'Dkr');
Currency.DOP = new Currency('DOP', 'Dominican Peso', 2, 'RD$');
Currency.DZD = new Currency('DZD', 'Algerian Dinar', 2, 'DA');
Currency.EEK = new Currency('EEK', 'Estonian Kroon', 2, 'Ekr');
Currency.EGP = new Currency('EGP', 'Egyptian Pound', 2, 'EGP');
Currency.ERN = new Currency('ERN', 'Eritrean Nakfa', 2, 'Nfk');
Currency.ETB = new Currency('ETB', 'Ethiopian Birr', 2, 'Br');
Currency.GBP = new Currency('GBP', 'British Pound Sterling', 2, '£');
Currency.GEL = new Currency('GEL', 'Georgian Lari', 2, 'GEL');
Currency.GHS = new Currency('GHS', 'Ghanaian Cedi', 2, 'GH₵');
Currency.GNF = new Currency('GNF', 'Guinean Franc', 0, 'FG');
Currency.GTQ = new Currency('GTQ', 'Guatemalan Quetzal', 2, 'GTQ');
Currency.HKD = new Currency('HKD', 'Hong Kong Dollar', 2, 'HK$');
Currency.HNL = new Currency('HNL', 'Honduran Lempira', 2, 'HNL');
Currency.HRK = new Currency('HRK', 'Croatian Kuna', 2, 'kn');
Currency.HUF = new Currency('HUF', 'Hungarian Forint', 0, 'Ft');
Currency.IDR = new Currency('IDR', 'Indonesian Rupiah', 0, 'Rp');
Currency.ILS = new Currency('ILS', 'Israeli New Sheqel', 2, '₪');
Currency.INR = new Currency('INR', 'Indian Rupee', 2, 'Rs');
Currency.IQD = new Currency('IQD', 'Iraqi Dinar', 0, 'IQD');
Currency.IRR = new Currency('IRR', 'Iranian Rial', 0, 'IRR');
Currency.ISK = new Currency('ISK', 'Icelandic Króna', 0, 'Ikr');
Currency.JMD = new Currency('JMD', 'Jamaican Dollar', 2, 'J$');
Currency.JOD = new Currency('JOD', 'Jordanian Dinar', 3, 'JD');
Currency.JPY = new Currency('JPY', 'Japanese Yen', 0, '¥');
Currency.KES = new Currency('KES', 'Kenyan Shilling', 2, 'Ksh');
Currency.KHR = new Currency('KHR', 'Cambodian Riel', 2, 'KHR');
Currency.KMF = new Currency('KMF', 'Comorian Franc', 0, 'CF');
Currency.KRW = new Currency('KRW', 'South Korean Won', 0, '₩');
Currency.KWD = new Currency('KWD', 'Kuwaiti Dinar', 3, 'KD');
Currency.KZT = new Currency('KZT', 'Kazakhstani Tenge', 2, 'KZT');
Currency.LBP = new Currency('LBP', 'Lebanese Pound', 0, 'L.L.');
Currency.LKR = new Currency('LKR', 'Sri Lankan Rupee', 2, 'SLRs');
Currency.LTL = new Currency('LTL', 'Lithuanian Litas', 2, 'Lt');
Currency.LVL = new Currency('LVL', 'Latvian Lats', 2, 'Ls');
Currency.LYD = new Currency('LYD', 'Libyan Dinar', 3, 'LD');
Currency.MAD = new Currency('MAD', 'Moroccan Dirham', 2, 'MAD');
Currency.MDL = new Currency('MDL', 'Moldovan Leu', 2, 'MDL');
Currency.MGA = new Currency('MGA', 'Malagasy Ariary', 0, 'MGA');
Currency.MKD = new Currency('MKD', 'Macedonian Denar', 2, 'MKD');
Currency.MMK = new Currency('MMK', 'Myanma Kyat', 0, 'MMK');
Currency.MOP = new Currency('MOP', 'Macanese Pataca', 2, 'MOP$');
Currency.MUR = new Currency('MUR', 'Mauritian Rupee', 0, 'MURs');
Currency.MXN = new Currency('MXN', 'Mexican Peso', 2, 'MX$');
Currency.MYR = new Currency('MYR', 'Malaysian Ringgit', 2, 'RM');
Currency.MZN = new Currency('MZN', 'Mozambican Metical', 2, 'MTn');
Currency.NAD = new Currency('NAD', 'Namibian Dollar', 2, 'N$');
Currency.NGN = new Currency('NGN', 'Nigerian Naira', 2, '₦');
Currency.NIO = new Currency('NIO', 'Nicaraguan Córdoba', 2, 'C$');
Currency.NOK = new Currency('NOK', 'Norwegian Krone', 2, 'Nkr');
Currency.NPR = new Currency('NPR', 'Nepalese Rupee', 2, 'NPRs');
Currency.NZD = new Currency('NZD', 'New Zealand Dollar', 2, 'NZ$');
Currency.OMR = new Currency('OMR', 'Omani Rial', 3, 'OMR');
Currency.PAB = new Currency('PAB', 'Panamanian Balboa', 2, 'B/.');
Currency.PEN = new Currency('PEN', 'Peruvian Nuevo Sol', 2, 'S/.');
Currency.PHP = new Currency('PHP', 'Philippine Peso', 2, '₱');
Currency.PKR = new Currency('PKR', 'Pakistani Rupee', 0, 'PKRs');
Currency.PLN = new Currency('PLN', 'Polish Zloty', 2, 'zł');
Currency.PYG = new Currency('PYG', 'Paraguayan Guarani', 0, '₲');
Currency.QAR = new Currency('QAR', 'Qatari Rial', 2, 'QR');
Currency.RON = new Currency('RON', 'Romanian Leu', 2, 'RON');
Currency.RSD = new Currency('RSD', 'Serbian Dinar', 0, 'din.');
Currency.RUB = new Currency('RUB', 'Russian Ruble', 2, 'RUB');
Currency.RWF = new Currency('RWF', 'Rwandan Franc', 0, 'RWF');
Currency.SAR = new Currency('SAR', 'Saudi Riyal', 2, 'SR');
Currency.SDG = new Currency('SDG', 'Sudanese Pound', 2, 'SDG');
Currency.SEK = new Currency('SEK', 'Swedish Krona', 2, 'Skr');
Currency.SGD = new Currency('SGD', 'Singapore Dollar', 2, 'S$');
Currency.SOS = new Currency('SOS', 'Somali Shilling', 0, 'Ssh');
Currency.SYP = new Currency('SYP', 'Syrian Pound', 0, 'SY£');
Currency.THB = new Currency('THB', 'Thai Baht', 2, '฿');
Currency.TND = new Currency('TND', 'Tunisian Dinar', 3, 'DT');
Currency.TOP = new Currency('TOP', 'Tongan Paʻanga', 2, 'T$');
Currency.TRY = new Currency('TRY', 'Turkish Lira', 2, 'TL');
Currency.TTD = new Currency('TTD', 'Trinidad and Tobago Dollar', 2, 'TT$');
Currency.TWD = new Currency('TWD', 'New Taiwan Dollar', 2, 'NT$');
Currency.TZS = new Currency('TZS', 'Tanzanian Shilling', 0, 'TSh');
Currency.UAH = new Currency('UAH', 'Ukrainian Hryvnia', 2, '₴');
Currency.UGX = new Currency('UGX', 'Ugandan Shilling', 0, 'USh');
Currency.UYU = new Currency('UYU', 'Uruguayan Peso', 2, '$U');
Currency.UZS = new Currency('UZS', 'Uzbekistan Som', 0, 'UZS');
Currency.VEF = new Currency('VEF', 'Venezuelan Bolívar', 2, 'Bs.F.');
Currency.VND = new Currency('VND', 'Vietnamese Dong', 0, '₫');
Currency.XAF = new Currency('XAF', 'CFA Franc BEAC', 0, 'FCFA');
Currency.XOF = new Currency('XOF', 'CFA Franc BCEAO', 0, 'CFA');
Currency.YER = new Currency('YER', 'Yemeni Rial', 0, 'YR');
Currency.ZAR = new Currency('ZAR', 'South African Rand', 2, 'R');
Currency.ZMK = new Currency('ZMK', 'Zambian Kwacha', 0, 'ZK');
Currency.ZWL = new Currency('ZWL', 'Zimbabwean Dollar', 0, 'ZWL$');
//# sourceMappingURL=Currency.js.map