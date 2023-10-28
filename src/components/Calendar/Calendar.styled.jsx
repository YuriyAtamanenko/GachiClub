import { createGlobalStyle } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker__month {
    margin: 0;
    background-color: rgba(239, 137, 100, 1);

    
}


.react-datepicker__day {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    
    color: rgba(239, 237, 232, 1);

    &:hover {
        border-radius: 50%;
        background-color: #040404;
    }

}

.react-datepicker__day-name {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    color: #EFEDE880;

}

.react-datepicker__day--selected {
    border-radius: 50%;
    background-color: #040404;
    
}

.react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
}

.react-datepicker__header {
    background-color: rgba(239, 137, 100, 1);
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
}

.calendar-select {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: rgba(239, 137, 100, 1);
    color: rgba(239, 237, 232, 1);
    border: 1px solid rgba(239, 237, 232, 0.2);
}

.calendar-button {
    background-color: rgba(239, 137, 100, 1);
    color: rgba(239, 237, 232, 1);
    border: 1px solid rgba(239, 237, 232, 0.2);
}
 
`;
