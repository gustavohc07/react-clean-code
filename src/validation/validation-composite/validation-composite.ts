import { Validation } from '@/presentation/protocols'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  constructor (private readonly validators: FieldValidation[]) {}

  validate (fieldName: string, fieldValue: string): string {
    const validators = this.validators.filter(value => value.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(fieldValue)
      if (error) {
        return error.message
      }
    }
  }
}
