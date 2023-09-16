import { Field, Form, Formik } from 'formik';
import {
  ChevronDown,
  ContainerField,
  LabelStyled,
  PrimalField,
  TitleForm,
} from './UserForm.style';
import chevronDown from '../../assets/profile_img/chevron_down.svg';

const initialValue = {
  userName: 'UserName',
  email: 'example@mail',
  height: '111',
  currentWeight: '90',
  desiredWeight: '60',
  blood: '1',
  gender: 'Male',
  activity: 'Sedentary',
};

const UserForm = () => {
  const handleSubmit = e => {
    console.log('e', e);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form>
        <TitleForm>Basic info</TitleForm>

        <label>
          <PrimalField type="text" name="userName" />
        </label>

        <label>
          <PrimalField type="text" name="email" />
        </label>
        <ContainerField>
          <LabelStyled>
            <ChevronDown>
              <img src={chevronDown} alt={'chevronDown'} />
            </ChevronDown>
            <TitleForm>Height</TitleForm>
            <PrimalField
              min="100"
              max="250"
              step="1"
              type="number"
              name="height"
            />
          </LabelStyled>

          <LabelStyled>
            <ChevronDown>
              <img src={chevronDown} alt={'chevronDown'} />
            </ChevronDown>

            <TitleForm>Current Weight</TitleForm>
            <PrimalField
              min="30"
              max="120"
              step="1"
              type="number"
              name="currentWeight"
            />
          </LabelStyled>

          <LabelStyled>
            <ChevronDown>
              <img src={chevronDown} alt={'chevronDown'} />
            </ChevronDown>
            <TitleForm>Desired Weight</TitleForm>
            <PrimalField
              min="45"
              max="100"
              step="1"
              type="number"
              name="desiredWeight"
            />
          </LabelStyled>

          <LabelStyled>
            <ChevronDown>
              <img src={chevronDown} alt={'chevronDown'} />
            </ChevronDown>
            <TitleForm>calendar</TitleForm>

            <PrimalField
              min="100"
              max="250"
              step="1"
              type="text"
              name="calendar"
            />
          </LabelStyled>
        </ContainerField>

        <div>
          <label>
            <p>1</p>
            <Field type="radio" name="blood" value="1"></Field>
          </label>
          <label>
            <p>2</p>
            <Field type="radio" name="blood" value="2"></Field>
          </label>
          <label>
            <p>3</p>
            <Field type="radio" name="blood" value="3"></Field>
          </label>

          <label>
            <p>4</p>
            <Field type="radio" name="blood" value="4"></Field>
          </label>
        </div>
        <div>
          <label>
            <p>Male</p>
            <Field type="radio" name="gender" value="Male"></Field>
          </label>

          <label>
            <p>Famele</p>
            <Field type="radio" name="gender" value="Female"></Field>
          </label>
        </div>

        <div>
          <label>
            <p>Sedentary lifestyle (little or no physical activity)</p>
            <Field type="radio" name="activity" value="Sedentary"></Field>
          </label>
          <label>
            <p>Light activity (light exercises/sports 1-3 days per week)</p>
            <Field type="radio" name="activity" value="Light"></Field>
          </label>
          <label>
            <p>
              Moderately active (moderate exercises/sports 3-5 days per week)
            </p>
            <Field type="radio" name="activity" value="Moderately"></Field>
          </label>
          <label>
            <p>Very active (intense exercises/sports 6-7 days per week)</p>
            <Field type="radio" name="activity" value="Very"></Field>
          </label>

          <label>
            <p>
              Extremely active (very strenuous exercises/sports and physical
              work)
            </p>
            <Field type="radio" name="activity" value="Extremely"></Field>
          </label>
        </div>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
