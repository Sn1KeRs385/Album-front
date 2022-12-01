import { AxiosError } from 'axios'
import { Notify } from 'quasar'
import { t } from 'boot/i18n'

interface ExtraParamsObject {
  formFields: { [key: string]: { errors: string[] } }
}

export default (error: AxiosError, { formFields }: ExtraParamsObject = { formFields: {} }) => {
  let message = t('axios.undefinedErrorRetryLate')

  Object.keys(formFields).forEach((fieldKey) => {
    formFields[fieldKey].errors = []
  })

  if (error.response?.data.errors) {
    const errors: string[] = []
    Object.keys(error.response.data.errors).forEach((errorKey) => {
      if (formFields[errorKey]) {
        formFields[errorKey].errors = error.response?.data.errors[errorKey]
      } else {
        errors.push(error.response?.data.errors[errorKey])
      }
    })
    message = errors.join('\r\n')
  }

  if (message) {
    Notify.create({
      color: 'negative',
      textColor: 'message',
      icon: 'report_problem',
      message,
      position: 'top-right',
      timeout: 3000,
    })
  }
}
