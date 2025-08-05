export interface User {
  id: number
  name: string
  email: string
  email_verified_at?: string
  created_at: string
  updated_at: string
}

export interface AuthHookProps {
  middleware?: 'auth' | 'guest'
  redirectIfAuthenticated?: string
}

export interface FormErrors {
  [key: string]: string[]
}

export interface AuthFormProps {
  setErrors: (errors: FormErrors) => void
  setStatus?: (status: string | null) => void
  [key: string]: any
}