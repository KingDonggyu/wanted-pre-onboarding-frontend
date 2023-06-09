import LocalStorageBase from './LocalStorageBase';

class AuthRepository extends LocalStorageBase<string> {
  constructor() {
    super('AUTH');
  }
}

export default AuthRepository;
