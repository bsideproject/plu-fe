import axios from 'axios';
import { ErrorResponse } from '@/types/error';
import { useCallback } from 'react';

export const useError = () => {
  const _showAlert = (error: any) => {
    const errorData = axios.isAxiosError(error)
      ? (error.response?.data as ErrorResponse)
      : // : ({ message: ErrorCode[error.message] } as ErrorResponse);
        ({ message: 'occured error' } as ErrorResponse);

    alert(errorData);
  };

  const handleAxiosError = useCallback(
    (error, cb?: () => void) => {
      _showAlert(error);
      cb && cb();
    },
    [_showAlert]
  );

  const handleError = useCallback(
    (err, cb?) => {
      handleAxiosError(err, cb);
    },
    [handleAxiosError]
  );

  return {
    handleError,
  };
};
