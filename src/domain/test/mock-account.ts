import { AuthenticationParams } from '@/domain/usecases/authentication'
import faker from 'faker'
import { AccountModel } from '@/domain/models/account-model'

export const mockAccount = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
