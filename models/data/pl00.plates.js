require('dotenv').config()
const db = require('../../config/database')
const Company = require('../Company')
const Color = require('../Color')
const Type = require('../Type')
const { dekt,neol,pura,sile,gran,marm } = require('./pl01.companies')
const color_dekt = require('./pl02.colors.dekt')
const color_neol = require('./pl02.colors.neol')
const color_pura = require('./pl02.colors.pura')
const color_sile = require('./pl02.colors.sile')
const color_gran = require('./pl02.colors.gran')
const color_marm = require('./pl02.colors.marm')
const { pura_ju_12,pura_ju_20,pura_st_12,pura_st_20,neol_mp_06,neol_mp_12,neol_pe_06,neol_pe_12,dekt_mp_08,dekt_mp_12,dekt_pe_08,dekt_pe_12,sile_ju_12,sile_ju_20,sile_st_12,sile_st_20 } = require('./pl03.types')

const data = async() => {
    
    let company_dekt = await Company.create(dekt)
    let company_neol = await Company.create(neol)
    let company_pura = await Company.create(pura)
    let company_sile = await Company.create(sile)
    let company_gran = await Company.create(gran)
    let company_marm = await Company.create(marm)

    color_dekt.map(color => color.company = company_dekt._id)
    await Color.insertMany(color_dekt)
    let type_dekt = [dekt_mp_08,dekt_mp_12,dekt_pe_08,dekt_pe_12].map(type => {
        return { ...type, company: company_dekt._id }
    })
    await Type.insertMany(type_dekt)

    color_neol.map(color => color.company = company_neol._id)
    await Color.insertMany(color_neol)
    let type_neol = [neol_mp_06,neol_mp_12,neol_pe_06,neol_pe_12].map(type => {
        return { ...type, company: company_dekt._id }
    })
    await Type.insertMany(type_neol)
    
    color_pura.map(color => color.company = company_pura._id)
    await Color.insertMany(color_pura)
    let type_pura = [pura_ju_12,pura_ju_20,pura_st_12,pura_st_20].map(type => {
        return { ...type, company: company_dekt._id }
    })
    await Type.insertMany(type_pura)
    
    color_sile.map(color => color.company = company_sile._id)
    await Color.insertMany(color_sile)
    let type_sile = [sile_ju_12,sile_ju_20,sile_st_12,sile_st_20].map(type => {
        return { ...type, company: company_dekt._id }
    })
    await Type.insertMany(type_sile)
    
    color_gran.map(color => color.company = company_gran._id)
    await Color.insertMany(color_gran)
    
    color_marm.map(color => color.company = company_marm._id)
    await Color.insertMany(color_marm)

}

data()