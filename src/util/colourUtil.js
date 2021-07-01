export const Colours = {
  BACKGROUND: "#141c5a",
  DARKFONT: "#000",
  LIGHTFONT: "#fff",
  BUTTON: "#007ad2",
};

export function getColour(expr) {
  switch (expr) {
    case "button":
      return Colours.BUTTON;
    case "lightfont":
      return Colours.LIGHTFONT;
    case "darkfont":
      return Colours.DARKFONT;
    case "background":
      return Colours.BACKGROUND;
    case "black":
      return "#000";
    case "white":
      return "#fff";
  }
}
