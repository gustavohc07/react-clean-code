import { AuthenticationParams } from '@/domain/usecases'
import faker from 'faker'
import { AccountModel } from '../models'

export const mockAccount = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
