import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { saveState, loadState } from '../utils/Store.js'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async updateAccount(updateData){
    const res = await api.put('/account', updateData)
    AppState.account = new Account(res.data)

  }

  saveSettings(settings){
    logger.log(settings)
    AppState.settings =settings
    saveState('inspire_settings', settings)
  }
  loadSettings(){
    let data = loadState('inspire_settings', Object)
    if(data){
      AppState.settings = data
    }
  }
}

export const accountService = new AccountService()
