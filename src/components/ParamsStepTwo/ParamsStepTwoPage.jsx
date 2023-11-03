import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {
  Title,
  WrapperDesktop,
  Container,
  RadioBoxBlood,
  RadioBoxSex,
  BloodSexTitle,
  ContainerBloodSex,
  ContainerActivity,
  TitleActivity,
  RadioBoxList,
  RadioBoxItem,
  BloodBoxList,
  SexBoxList,
  Next,
  ButtonNext,
  Back,
  LabelStyled,
  StyledSvg,
  StyledCircle,
  StyledPath,
  StyledText,
  StyledField,
  StyledErrorMessage,
} from './ParamsTwoPage.styled';
import sprite from '../../images/sprite.svg';

const ParamsStepTwo = props => {
  const handleSubmit = values => {
    const newData = { ...props.data, ...values };

    props.next(newData);
  };
  return (
    <Container>
      <WrapperDesktop></WrapperDesktop>
      <div>
        <Title>Get closer to your goals!</Title>
      </div>

      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={stepTwoValidationSchema}
      >
        {({ values }) => (
          <Form>
            <ContainerBloodSex>
              <RadioBoxBlood>
                <BloodSexTitle>Blood</BloodSexTitle>
                <BloodBoxList>
                  <RadioBoxItem>
                    <LabelStyled htmlFor="bl-1" >
                      <StyledField
                        type="radio"
                        id="bl-1"
                        name="blood"
                        value="1"
                      />
                      <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                        <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                        <StyledPath
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        ></StyledPath>

                        <StyledPath
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        ></StyledPath>
                      </StyledSvg>
                      {/* <StyledText>1</StyledText> */}
                    </LabelStyled>
                    <StyledText>1</StyledText>
                  </RadioBoxItem>

                  <RadioBoxItem>
                    <LabelStyled htmlFor="bl-2" >
                      <StyledField
                        type="radio"
                        id="bl-2"
                        name="blood"
                        value="2"
                      />
                      <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                        <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                        <StyledPath
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        ></StyledPath>

                        <StyledPath
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        ></StyledPath>
                      </StyledSvg>
                    </LabelStyled>
                    <StyledText>2</StyledText>
                  </RadioBoxItem>

                  <RadioBoxItem>
                    <LabelStyled htmlFor="bl-3">
                      <StyledField
                        type="radio"
                        id="bl-3"
                        name="blood"
                        value="3"
                      />
                      <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                        <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                        <StyledPath
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        ></StyledPath>

                        <StyledPath
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        ></StyledPath>
                      </StyledSvg>
                    </LabelStyled>
                    <StyledText>3</StyledText>
                  </RadioBoxItem>

                  <RadioBoxItem>
                    <LabelStyled htmlFor="bl-4" className="btn-radio">
                      <StyledField
                        type="radio"
                        id="bl-4"
                        name="blood"
                        value="4"
                      />
                      <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                        <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                        <StyledPath
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        ></StyledPath>

                        <StyledPath
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        ></StyledPath>
                      </StyledSvg>
                    </LabelStyled>
                    <StyledText>4</StyledText>
                  </RadioBoxItem>

                  <StyledErrorMessage
                    name="blood"
                    component="div"
                    className="error"
                  />
                </BloodBoxList>
              </RadioBoxBlood>

              <RadioBoxSex>
                <BloodSexTitle>Sex</BloodSexTitle>

                <SexBoxList>
                  <RadioBoxItem>
                    <LabelStyled htmlFor="sex-1" className="btn-radio">
                      <StyledField
                        type="radio"
                        id="sex-1"
                        name="sex"
                        value="male"
                      />
                      <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                        <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                        <StyledPath
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        ></StyledPath>

                        <StyledPath
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        ></StyledPath>
                      </StyledSvg>
                    </LabelStyled>
                    <StyledText>Male</StyledText>
                  </RadioBoxItem>

                  <RadioBoxItem>
                    <LabelStyled htmlFor="sex-2" className="btn-radio">
                      <StyledField
                        type="radio"
                        id="sex-2"
                        name="sex"
                        value="female"
                      />
                      <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                        <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                        <StyledPath
                          d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                          className="inner"
                        ></StyledPath>

                        <StyledPath
                          d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                          className="outer"
                        ></StyledPath>
                      </StyledSvg>
                    </LabelStyled>
                    <StyledText>Female</StyledText>
                  </RadioBoxItem>
                </SexBoxList>

                <StyledErrorMessage
                  name="sex"
                  component="div"
                  className="error"
                />
              </RadioBoxSex>
            </ContainerBloodSex>

            <ContainerActivity className="ContainerActivity">
              <TitleActivity>Level Activity</TitleActivity>
              <RadioBoxList>
                <RadioBoxItem>
                  <LabelStyled htmlFor="activity-1" className="btn-radio">
                    <StyledField
                      type="radio"
                      id="activity-1"
                      name="levelActivity"
                      value="1"
                    />
                    <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                      <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                      <StyledPath
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      ></StyledPath>

                      <StyledPath
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      ></StyledPath>
                    </StyledSvg>
                  </LabelStyled>

                  <StyledText>
                    Sedentary lifestyle (little or no physical activity)
                  </StyledText>
                </RadioBoxItem>

                <RadioBoxItem>
                  <LabelStyled htmlFor="activity-2" className="btn-radio">
                    <StyledField
                      type="radio"
                      id="activity-2"
                      name="levelActivity"
                      value="2"
                    />

                    <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                      <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                      <StyledPath
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      ></StyledPath>

                      <StyledPath
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      ></StyledPath>
                    </StyledSvg>

                  </LabelStyled>

                  <StyledText>
                    Light activity (light exercises/sports 1-3 days per week)
                  </StyledText>
                </RadioBoxItem>

                <RadioBoxItem>
                  <LabelStyled htmlFor="activity-3" className="btn-radio">
                    <StyledField
                      type="radio"
                      id="activity-3"
                      name="levelActivity"
                      value="3"
                    />
                    <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                      <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                      <StyledPath
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      ></StyledPath>

                      <StyledPath
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      ></StyledPath>
                    </StyledSvg>
                  </LabelStyled>

                  <StyledText>
                    Moderately active (moderate exercises/sports 3-5 days per
                    week)
                  </StyledText>
                </RadioBoxItem>

                <RadioBoxItem>
                  <LabelStyled htmlFor="activity-4" className="btn-radio">
                    <StyledField
                      type="radio"
                      id="activity-4"
                      name="levelActivity"
                      value="4"
                    />
                    <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                      <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                      <StyledPath
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      ></StyledPath>

                      <StyledPath
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      ></StyledPath>
                    </StyledSvg>
                  </LabelStyled>

                  <StyledText>
                    Very active (intense exercises/sports 6-7 days per week)
                  </StyledText>
                </RadioBoxItem>

                <RadioBoxItem>
                  <LabelStyled htmlFor="activity-5" className="btn-radio">
                    <StyledField
                      type="radio"
                      id="activity-5"
                      name="levelActivity"
                      value="5"
                    />
                    <StyledSvg width="20px" height="20px" viewBox="0 0 20 20">
                      <StyledCircle cx="10" cy="10" r="9"></StyledCircle>
                      <StyledPath
                        d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                        className="inner"
                      ></StyledPath>

                      <StyledPath
                        d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                        className="outer"
                      ></StyledPath>
                    </StyledSvg>
                  </LabelStyled>

                  <StyledText>
                    Extremely active (very strenuous exercises/sports and
                    physical work)
                  </StyledText>
                </RadioBoxItem>

                <StyledErrorMessage
                  name="levelActivity"
                  component="div"
                  className="error"
                />
              </RadioBoxList>
            </ContainerActivity>

            <Back className="Back">
              <use xlinkHref={`${sprite}#icon-back`}></use>
            </Back>
            <ButtonNext
              type="button"
              onClick={() => props.prev(values)}
              className="ButtonNext_back"
            >
              Back
            </ButtonNext>
            <ButtonNext type="submit" className="ButtonNext">
              Next
            </ButtonNext>
            <Next className="Next">
              <use xlinkHref={`${sprite}#icon-arrow`}></use>
            </Next>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const stepTwoValidationSchema = Yup.object().shape({
  blood: Yup.string().required('Please select a blood type'),
  sex: Yup.string().required('Please select a sex'),
  levelActivity: Yup.string().required('Please select a level of activity'),
});

ParamsStepTwo.propTypes = {
  data: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};

export default ParamsStepTwo;
