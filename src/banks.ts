import { Bank } from "./models";

/**
 * 
 */
export class SABanks {

  /**
   * List Of all major banks in South Africa
   */
  public getBanks(): Bank[] {
    return [
      {
        name: 'FNB',
        branch_code: '250655',
        logo: './logos/FNB.svg'
      },
      {
        name: 'Absa Bank Limited',
        branch_code: '632005',
        logo: './logos/ABSP.JO.svg'
      },
      {
        name: 'Capitec Bank',
        branch_code: '470010',
        logo: './logos/CPI.JO.svg'
      },
      {
        name: 'Nedbank Limited',
        branch_code: '198765',
        logo: './logos/NED.JO.svg'
      },
      {
        name: 'Standard Bank',
        branch_code: '051001',
        logo: './logos/SBK.JO.svg'
      },
      {
        name: 'African Bank',
        branch_code: '430000',
        logo: './logos/AFB.png'
      },
      {
        name: 'Bidvest Bank',
        branch_code: '462005',
        logo: './logos/BVT.JO.svg'
      },
      {
        name: 'TymeBank',
        branch_code: '678910',
        logo: './logos/TMB.png'
      },
      {
        name: 'TymeBank',
        branch_code: '678910',
        logo: './logos/TMB.png'
      },
      {
        name: 'Albaraka Bank',
        branch_code: '800000',
        logo: './logos/ABB.png'
      },
      {
        name: 'BNP Paribas',
        branch_code: '688000',
        logo: './logos/BNP.png'
      },
      {
        name: 'CitiBank',
        branch_code: '350005',
        logo: './logos/C.svg'
      },
      {
        name: 'Access Bank (South Africa) Ltd',
        branch_code: '410105',
        logo: './logos/ACB.png'
      },
      {
        name: 'Discovery Bank',
        branch_code: '679000',
        logo: './logos/DSY.JO.svg'
      },
      {
        name: 'FinBond Mutual Bank',
        branch_code: '589000',
        logo: './logos/FINB.png'
      },
      {
        name: 'Access Bank (South Africa) Ltd',
        branch_code: '410105',
        logo: './logos/ACB.png'
      },
      {
        name: 'JP Morgan Chase',
        branch_code: '432000',
        logo: './logos/JPM.png'
      },
      {
        name: 'Albaraka Bank',
        branch_code: '800000',
        logo: './logos/ABB.png'
      }
    ]
  }
}

