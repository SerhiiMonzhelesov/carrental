import styled from 'styled-components';

export const StyledFilterForm = styled.form`
  display: flex;
  flex-direction: row;
  column-gap: 18px;
  width: 100%;
  max-width: 859px;

  align-items: flex-end;
  justify-content: center;

  .brand-label,
  .price-label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
  }

  .select-brand {
    display: flex;
    gap: 10px;
  }
  .inputs-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 320px;
  }

  .inputs-field label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
  }

  .inputs-mileage {
    width: 320px;
  }

  input:focus {
    outline: none;
  }

  .inputs-mileage input {
    width: 100%;
    max-width: 160px;
    height: 48px;
    text-indent: 24px;
    background: #f7f7fb;
  }
  .fromMileage {
    border-radius: 14px 0px 0px 14px;
    border: none;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
  .toMileage {
    border: none;
    border-radius: 0px 14px 14px 0px;
  }
  .inputs-mileage input::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 14px;
  }
`;

export const styledSelectBrand = {
  option: provided => {
    return {
      ...provided,
      background: '#FFF',

      outline: 'none',
      height: '32px',

      fontSize: '16px',
      fontWeight: '500',
      color: 'rgba(18, 20, 23, 0.20)',

      cursor: 'pointer',
      '&:hover': {
        color: '#121417',
        fontWeight: '500',
      },
      textAlign: 'left',
    };
  },
  control: styles => ({
    ...styles,
    border: 'none',
    borderRadius: '14px',
    boxShadow: 'none',
    backgroundColor: '#F7F7FB',
    width: '224px',
    height: '48px',

    margin: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: '#121417',

      fontSize: '18px',

      fontWeight: '500',
      lineHeight: '1.11',
    };
  },

  menu: provided => {
    return {
      ...provided,
      background: '#FFF',
      borderRadius: '14px',
      display: 'inline-block',
      width: '224px',
      marginLeft: 'auto',
      marginRight: 'auto',

      border: '1px solid rgba(18, 20, 23, 0.05)',

      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {},
  }),

  placeholder: () => {
    return {
      position: 'absolute',
      left: 10,
      color: '#121417',

      fontSize: '18px',

      fontWeight: '500',
      lineHeight: '1.11',
    };
  },

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: provided => {
    return {
      ...provided,
      size: '20px',
      color: '#121417;',
      '&:hover': {
        color: 'rgba(18, 20, 23, 1)',
      },
    };
  },

  input: provided => {
    return {
      ...provided,
      margin: '0px',
      color: '#121417',
      width: '100%',
    };
  },
};

export const styledSelectPrice = {
  option: provided => {
    return {
      ...provided,
      background: '#FFF',

      outline: 'none',
      height: '32px',

      fontSize: '16px',
      fontWeight: '500',
      color: 'rgba(18, 20, 23, 0.20)',

      cursor: 'pointer',
      '&:hover': {
        color: '#121417',
        fontWeight: '500',
      },
      textAlign: 'left',
    };
  },
  control: styles => ({
    ...styles,
    border: 'none',
    borderRadius: '14px',
    boxShadow: 'none',
    backgroundColor: '#F7F7FB',
    width: '125px',
    height: '48px',

    margin: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: '#121417',

      fontSize: '18px',

      fontWeight: '500',
      lineHeight: '1.11',
    };
  },

  menu: provided => {
    return {
      ...provided,
      background: '#FFF',
      borderRadius: '14px',
      display: 'inline-block',
      width: '224px',
      marginLeft: 'auto',
      marginRight: 'auto',

      border: '1px solid rgba(18, 20, 23, 0.05)',

      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {},
  }),

  placeholder: () => {
    return {
      position: 'absolute',
      left: 10,
      color: '#121417',

      fontSize: '18px',

      fontWeight: '500',
      lineHeight: '1.11',
    };
  },

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: provided => {
    return {
      ...provided,
      size: '20px',
      color: '#121417;',
      '&:hover': {
        color: 'rgba(18, 20, 23, 1)',
      },
    };
  },

  input: provided => {
    return {
      ...provided,
      margin: '0px',
      color: '#121417',
      width: '100%',
    };
  },
};
