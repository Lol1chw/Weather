import { selectors } from "../store/store";

function weatherToggle() {
  const isToday = selectors.isToday();
  const toggleDate = selectors.toggleDate();

  const handleClick = (event: any) => {
    event.preventDefault();
    toggleDate(event.target.innerText === "Today");
  };

  const todayButtonStyle = {
    textDecoration: isToday ? "underline" : "none",
  };

  const tommorowButtonStyle = {
    textDecoration: isToday ? "none" : "underline",
  };

  return (
    <div className="navigationMenu">
      <a style={todayButtonStyle} onClick={handleClick}>
        Today
      </a>
      <a style={tommorowButtonStyle} onClick={handleClick}>
        Tommorow
      </a>
    </div>
  );
}

export default weatherToggle;
