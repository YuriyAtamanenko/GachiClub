import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Введіть імя користувача')
    .min(2, "Ім'я повинно містити принаймні 2 символи"),
  height: Yup.number().required('Введіть висоту користувача'),
  currentWeight: Yup.number().required('Введіть поточну вагу користувача'),
  desiredWeight: Yup.number().required('Введіть бажану вагу користувача'),
  birthday: Yup.date().required('Введіть дату народження користувача'),
  blood: Yup.number().required('Виберіть групу крові користувача'),
  sex: Yup.string().required('Виберіть стать користувача'),
  levelActivity: Yup.number().required(
    'Виберіть рівень активності користувача',
  ),
});
