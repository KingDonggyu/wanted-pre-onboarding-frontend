class LocalStorageBase<T> {
  private key;

  constructor(key: string) {
    this.key = key;
  }

  public get() {
    const data = window.localStorage.getItem(this.key);

    if (data === null) {
      return data;
    }

    return JSON.parse(data) as T;
  }

  public set(data: T) {
    window.localStorage.setItem(this.key, JSON.stringify(data));
  }

  public remove() {
    window.localStorage.removeItem(this.key);
  }
}

export default LocalStorageBase;
