export interface Action {
  action: (prevState: unknown, formData: FormData) => void;
}
