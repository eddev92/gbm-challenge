class localStorageConfig {
    static setValue(key, value) {          
        localStorage.setItem(key, value);
    }
    static removeToken(key) {
        localStorage.removeItem(key);
    }
    static getToken(key) {
       const tokenAux = localStorage.getItem(key);
       if (tokenAux && tokenAux.length > 0) {
        return tokenAux;
       } else {
        return '';
       }
    }
}

export default localStorageConfig;
