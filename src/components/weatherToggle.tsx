import { selectors } from "../store/store";

function weatherToggle() {
  const isToday = selectors.isToday();
  const toggleDate = selectors.toggleDate();

  const handleClick = (event: any) => {
    event.preventDefault();
    const selectedOption = event.target.innerText;
    if (selectedOption === "Today" && !isToday) {
      toggleDate(true);
    } else if (selectedOption === "Tommorow" && isToday) {
      toggleDate(false);
    }
  };

  const todayButtonStyle = {
    textDecoration: isToday ? "link-like" : "none",
    fontWeight: isToday ? "700" : "300",
    cursor: "pointer",
    borderBottom: isToday ? "3px solid #695D5D" : "",
  };

  const tommorowButtonStyle = {
    textDecoration: isToday ? "none" : "link-like",
    fontWeight: isToday ? "300" : "700",
    cursor: "pointer",
    borderBottom: isToday ? "" : "3px solid #695D5D",
  };

  return (
    <div className="navigationMenu">
      <button style={todayButtonStyle} onClick={handleClick}>
        Today
      </button>
      <button style={tommorowButtonStyle} onClick={handleClick}>
        Tommorow
      </button>
    </div>
  );
}

export default weatherToggle;
