import React, { useRef, useState, useEffect } from "react";

const ModalCookies = ({
  btnsText,
  onAcceptAll,
  onSave,
  defaultSettings = { necessary: true, targeting: false },
  cookiesContent
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
          <h2 className="cookies__title">{cookiesContent["settings-title"]}</h2>
          <img
            src="/assets/imgs/template/icons/3d-rendering-cookie-with-chocolate 1.png"
            alt=""
            className="cookies__icon"
          />
        </div>

        <div className="modal-cookies__section">
          <h2 className="modal-cookies__title">
            {cookiesContent["settings-subtitle"]}
          </h2>
          <h3 className="modal-cookies__descr">
            {cookiesContent["settings-descr"]}
          </h3>
        </div>

        <div className="modal-cookies__section">
          <div className="modal-cookies__chackbox-blok">
            <h2 className="modal-cookies__title">{cookiesContent["srction1-title"]}</h2>
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={necessary}
              onChange={(e) => setNecessary(e.target.checked)}
            />
          </div>
          <h3 className="modal-cookies__descr">{cookiesContent["section1-text"]}</h3>
        </div>

        <div className="modal-cookies__section">
          <div className="modal-cookies__chackbox-blok">
            <h2 className="modal-cookies__title">{cookiesContent["section2-title"]}</h2>
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
            {cookiesContent["section2-text"]}
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
