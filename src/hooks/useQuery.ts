import { useEffect, useState } from 'react';

interface QueryParams<T> {
  queryFunc: () => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
}

const useQuery = <T>({ queryFunc, onSuccess, onError }: QueryParams<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      (async () => {
        const newData = await queryFunc();
        setData(newData);
        if (onSuccess) {
          onSuccess(newData);
        }
      })();
    } catch (error) {
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [onError, onSuccess, queryFunc]);

  return { data, isLoading };
};

export default useQuery;
