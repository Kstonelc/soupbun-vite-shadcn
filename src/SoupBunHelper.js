class SoupBunHelper {
  _navigate = null;

  setNavigate(navigate) {
    this._navigate = navigate;
  }

  navigate(path) {
    if (this._navigate) {
      this._navigate(path);
    }
  }
}

// 导出单例实例
const soupBunHelper = new SoupBunHelper();
export default soupBunHelper;
