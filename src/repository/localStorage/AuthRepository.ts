import LocalStorageBase from './LocalStorageBase';

class AuthRepository<T> extends LocalStorageBase<T> {
  constructor() {
    super('AUTH');
  }
}

export default AuthRepository;
