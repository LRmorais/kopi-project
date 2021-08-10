import React, {createContext, useContext as useReactContext} from 'react';

const Context = createContext();
export const useContext = () => useReactContext(Context);
const username = 'teste';

const Provider = props => {
  const {navigate} = props.navigation;

  function goBackOnboarding() {
    navigate('WelcomeOnBoarding');
  }
  const value = {
    goBackOnboarding,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
