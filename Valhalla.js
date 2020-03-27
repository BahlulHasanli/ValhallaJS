class ValhallaClass {
  url(URI) {
    if (!URI) {
      return {
        error: 'URL qeyd edilməyib!'
      };
    }

    this.URI = URI;

    return this;
  }

  options(...args) {
    this.OPTIONS = args[0];

    return this;
  }

  get(type) {
    this.METHOD = 'GET';
    this.TYPE = type ?? 'json';

    if (!this.METHOD) {
      return {
        error: 'Method qeyd edilməyib!'
      };
    }

    const GET = async () => {
      const API = await fetch(this.URI, {
        method: this.METHOD
      });

      switch (this.TYPE) {
        case 'json':
          return await API.json();

        case 'text':
          return await API.text();

        default:
          return {
            error: 'Tipdə xəta aşkarlandı!'
          };
      }
    };

    return GET();
  }

  post(data) {
    this.METHOD = 'POST';

    if (!this.METHOD) {
      return {
        error: 'Method qeyd edilməyib!'
      };
    }

    const POST = async () => {
      if (!this.OPTIONS || !this.OPTIONS.headers) {
        this.OPTIONS = {
          headers: {
            'Content-Type': 'application/json'
          },
          ...this.OPTIONS
        };
      }

      if (this.OPTIONS.method) {
        return {
          error: `Options daxilindən ${this.OPTIONS.method} methodunu silin`
        };
      }

      const API = await fetch(this.URI, {
        method: this.METHOD,
        ...this.OPTIONS,
        body: JSON.stringify(data)
      });

      return await API.json();
    };

    return POST();
  }
}

export default new ValhallaClass();
