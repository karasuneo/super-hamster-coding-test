import { useState } from 'react';

function useButtonState() {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return {
    isLoading,
    handleButtonClick,
  };
}

export default useButtonState;
