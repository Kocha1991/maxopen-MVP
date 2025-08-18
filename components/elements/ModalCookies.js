import React, { useRef, useState, useEffect } from "react";

const ModalCookies = ({
  btnsText,
  onAcceptAll,
  onSave,
  defaultSettings = { necessary: true, targeting: false }
}) => {
  const descrRef = useRef(null);
  const [isExpandable, setIsExpandable] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [necessary, setNecessary] = useState(defaultSettings.necessary);
  const [targeting, setTargeting] = useState(defaultSettings.targeting);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const el = descrRef.current;
    if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const height = el.scrollHeight;
      const lines = height / lineHeight;
      if (lines > 2) {
        setIsExpandable(true);
      }
    }
  }, []);

  const handleToggle = () => setExpanded(prev => !prev);

  const handleSave = () => {
    onSave?.({
      necessary,
      targeting
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-cookies">
        <div className="cookies__top">
          <h2 className="cookies__title">Manage Cookies</h2>
          <img
            src="/assets/imgs/template/icons/3d-rendering-cookie-with-chocolate 1.png"
            alt=""
            className="cookies__icon"
          />
        </div>

        <div className="modal-cookies__section">
          <h2 className="modal-cookies__title">
            Here you have the option to adjust your cookie consent.
          </h2>
          <h3 className="modal-cookies__descr">
            Cookies are small text that can be used by websites to make the user
            experience more efficient. This site uses various types of cookies.
          </h3>
        </div>

        <div className="modal-cookies__section">
          <div className="modal-cookies__chackbox-blok">
            <h2 className="modal-cookies__title">Necessary Cookies</h2>
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={necessary}
              onChange={(e) => setNecessary(e.target.checked)}
            />
          </div>
          <h3 className="modal-cookies__descr">These cookies are ne...</h3>
        </div>

        <div className="modal-cookies__section">
          <div className="modal-cookies__chackbox-blok">
            <h2 className="modal-cookies__title">Targeting & Advertising</h2>
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={targeting}
              onChange={(e) => setTargeting(e.target.checked)}
            />
          </div>
          <h3
            ref={descrRef}
            className="modal-cookies__descr"
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: !expanded ? 2 : "unset"
            }}
          >
            These cookies track browsing habits to deliver targeted
            advertisements and gather insights for our marketing efforts. They
            may also be used to show you relevant advertisements on other
            websites.
          </h3>
          {isExpandable && (
            <button className="btn coockies-btn-show" onClick={handleToggle}>
              {expanded ? btnsText["show-less"] : btnsText["show-more"]}
            </button>
          )}
        </div>

        <div className="cookies__btns mt-20">
          <button
            className="cookies__btns--settings"
            onClick={handleSave}
          >
            {btnsText["save-changes"]}
          </button>
          <button
            className="btn btn-brand-4-medium hover-up"
            onClick={onAcceptAll}
          >
            {btnsText["accept-cookies"]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCookies;
